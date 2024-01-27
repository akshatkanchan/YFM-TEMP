import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from '../../masters/customer';
import { AuthService } from '../../../core/auth.service';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../../masters/customer/customer.service';
import { User } from '../../../core/user';
import { startWith, map } from 'rxjs/operators';
import { BookingsService } from '../../operations/bookings.service';
import { VisaService } from '../visa/visa.service';
import * as moment from 'moment';
import { EmployeeService } from '../../masters/new-employees/employee.service';
import { ActivitylogService } from '../../../activitylog.service';
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { async } from '@angular/core/testing';

@Component({
  selector: 'addvisa',
  templateUrl: './addvisa.component.html',
  styleUrls: ['./addvisa.component.scss']
})
export class AddvisaComponent implements OnInit {

  bookByCtrl:FormControl = new FormControl();
  bookBy:Observable<string[]>;
  bookByArr:any[];
  customers:any[];
  customer:any;
  customerCtrl:FormControl=new FormControl();
  user:User={};
  myForm:FormGroup;
  deletedTraveller=[];
  visaId;
  ws:WebSocket;
  deletedGuest = [];
  editState: boolean = false;
  imgUrl:any[] = [];
  previousImgUrl:any[] = [];
  img: any[] = [];
  imgName: any[] = [];
  selectedFiles: FileList;

  constructor(
    private auth:AuthService,
    private snackbar:MatSnackBar,
    private fb:FormBuilder,
    private customerService:CustomerService,
    private dialog: MatDialog,
    private bookingService:BookingsService,
    private visaService: VisaService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService,
    private activityLogs:ActivitylogService,
    private uploadService : FileuploadService,
    private _sanitizer : DomSanitizer,
    private http: Http,
  ) { }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.auth.user.subscribe(data=> {
      this.user=data[0]
      this.visaDetails.ownerId = this.user.ownerId;
      if(this.user.type == 'employee') {
        var body = {
          userId: this.user.id
        }
        this.employeeService.getEmployeeForCustomer(body).subscribe(data => {
          this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(data => {
            if(data.length != 0) {              
              this.customers=data;
              this.customer=this.customerCtrl.valueChanges
              .pipe(
                startWith(''),
                map(val=>this.filterCustomer(val))
              );
            }
            else {
              this.getCustomer();
            }
          })
        })
      }
      else {
        this.getCustomer();
      }
    })

    this.myForm=this.fb.group({
      rows:this.fb.array([])
    });        

    if(this.data.row != null) {
      this.editState = true;
      console.log(this.data.row)
      this.visaDetails = this.data.row;
      this.customerCtrl.setValue(this.visaDetails.cname);
      this.bookByCtrl.setValue(this.visaDetails.bookBy);
      this.visaService.getVisaTravellers(this.visaDetails).subscribe(data => {
        console.log(data);
        
        if(data.length == 0) {
          this.addRow();
        }
        var index = 0;
        data.forEach(element => {
          console.log(element);
          const row=this.fb.group({
            id: element.id,
            name: element.name,
            dob: element.dob,
            gender: element.gender,
            phone: element.phone,
            email: element.email,
            passportNo: element.passportNo,
            issuingCountry: element.issuingCountry,
            photo: element.photo,
          })
          if(element.photo !='' && element.photo != null) {
            console.log(element.photo);
            this.uploadService.getFile(this.user.companyName,'passportPhotos',element.photo).subscribe(data => {
              console.log(data);
              
              if(data.text().includes("PDF")) {
                console.log(row);
                this.imgUrl[index] = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf' + data.text());
                this.imgName[index] = element.photo;
                this.previousImgUrl[index] = this.imgUrl[index].changingThisBreaksApplicationSecurity;
                this.imgUrl[index] = this.previousImgUrl[index];
                this.travellerForms.push(row);
              }
              else {
                console.log(row);
                this.imgUrl[index] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text());
                this.previousImgUrl[index] = this.imgUrl[index].changingThisBreaksApplicationSecurity;
                this.imgUrl[index] = this.previousImgUrl[index];
                console.log(this.imgUrl);
                index=index+1;
                this.travellerForms.push(row);
              }
            })
          }
          else {
            console.log(row);
            this.imgUrl[index]='';
            this.travellerForms.push(row);
            index=index+1;
          }
        });
      })
    }
    else {
      this.addRow();
    }
    
  }

  getCustomer() {
    this.customerService.getCustomers(this.user).subscribe(data=>{
      this.customers=data;
      this.customer=this.customerCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val=>this.filterCustomer(val))
      );
    });
  }

  filterCustomer(val:string){
    return this.customers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  filterBookBy(val:string){
    return this.bookByArr.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  get travellerForms(){
    return this.myForm.get('rows') as FormArray;
  }
  addRow(){
    const row=this.fb.group({      
      name:new FormControl(),
      dob:new FormControl(),
      gender:new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      passportNo: new FormControl(),
      issuingCountry: new FormControl(),
      photo: new FormControl(),
    })
    this.travellerForms.push(row);
    this.imgUrl.push('');
  }
  deleteRow(i, aRow){
    console.log(aRow.value);
    
    var temp=this.myForm.get('rows') as FormArray;
    // this.deletedTraveller.push(temp.value[i].id)
    if(aRow.value.id) {
      this.deletedGuest.push(aRow.value);
      console.log(this.deletedGuest);
      
    }
    this.travellerForms.removeAt(i);
    this.imgUrl.splice(i);
  }

  closeDialog(){
    this.dialog.closeAll();
  }

  setCustomer(temp:any,event:any) {
    if(event.source.selected==true)
    {
      this.visaDetails.cname=temp.name      
      this.visaDetails.customerId=temp.id;
      
      var tempCust= {
        ownerId:this.user.ownerId,
        customerId:temp.id
      }

      this.bookingService.getRecurringBookedBy(tempCust).subscribe(data=>{
        this.bookByArr=data;
        this.bookBy = this.bookByCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val => this.filterBookBy(val))
        ); 
      })
    }
  }

  setBookBy(temp:any ,event: any) {
    if(event.source.selected==true) {
      this.visaDetails.bookBy = temp.name;
    }
  }

  selectFile(event,i) {
    this.selectedFiles = event.target.files;
    this.img[i] = <File>event.target.files[0];
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.imgUrl[i]=reader.result
    this.imgName[i] = this.img[i].name;
    reader.readAsDataURL(file)
  }

  async upload(filename, i) {
    
    const uploadData= new FormData();
    uploadData.append(this.user.companyName+"/"+"passportPhotos/"+filename,this.img[i],'passportImage')
    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    const body = JSON.stringify({ headers: headers });
    
    await this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
      if(data.success) {
        // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
      }
    });
    
    // this.uploadService.uploadfile(this.user.companyName,'passportPhotos',filename,this.imgUrl[i]);
  }

  removePhoto(element,i)
  {
    this.imgUrl[i]='';
    this.previousImgUrl[i]=''
    element.photo=''
  }

  saveVisa() {
    this.visaDetails.from = moment(this.visaDetails.from).format("YYYY-MM-DD");
    this.visaDetails.to = moment(this.visaDetails.to).format("YYYY-MM-DD");
    this.visaDetails.bookBy = this.bookByCtrl.value;
    this.visaDetails.status = 'Booked';
    this.visaService.addVisa(this.visaDetails).subscribe(data => {
      this.visaId = data.insertId;
      var i = 0;
      this.travellerForms.value.forEach(element => {
        element.visaId = this.visaId;
        element.dob = moment(element.dob).format("YYYY-MM-DD");
        var type = this.img[i].type.split("/");
        element.photo = this.visaId+"_"+element.name+"_"+"_passportPhoto."+type[1];
        this.visaService.addTraveller(element).subscribe(data => {
          this.upload(element.photo, i);
        },err => {}, ()=>{
          i++;
        });
      });
      this.activityLogs.addVisaLogs({
        visaId:data.insertId,
        ownerId:this.user.ownerId,
        message:"Booking created on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name
      }).subscribe()
    },err=>{

    },()=>{
      this.ws.send(this.user.ownerId+"visa");
      this.snackbar.open("Saved", "X", {duration: 3000});
      this.dialog.closeAll();
    })
  }

  updateVisa() {
    this.visaDetails.from = moment(this.visaDetails.from).format("YYYY-MM-DD");
    this.visaDetails.to = moment(this.visaDetails.to).format("YYYY-MM-DD");
    this.visaDetails.bookBy = this.bookByCtrl.value;
    this.visaDetails.status = 'Booked';
    this.visaService.updateVisa(this.visaDetails).subscribe(data => {
      this.visaId = this.visaDetails.id;
      var i = 0;
      this.travellerForms.value.forEach(element => {
        element.visaId = this.visaId;
        element.dob = moment(element.dob).format("YYYY-MM-DD");
        if(element.id != '' || element.id != null || element.id != undefined) {
          if(this.img[i]) {
            var type = this.img[i].type.split("/");
            element.photo = this.visaId+"_"+element.name+"_"+"_passportPhoto."+type[1];
            this.visaService.updateTraveller(element).subscribe(data => {
              if(this.previousImgUrl[i] != this.imgUrl[i]) {
                this.upload(element.photo, i)
                i++;
              }
            });
          }
          else {
            this.visaService.updateTraveller(element).subscribe();
          }
        }
        else {
          var type = this.img[i].type.split("/");
          element.photo = this.visaId+"_"+element.name+"_"+"_passportPhoto."+type[1]
          this.visaService.addTraveller(element).subscribe(data => {
            this.upload(element.photo, i)
          },err=>{},()=>{
            i++;
          });
        }
      });
      this.deletedGuest.forEach(element => {
        this.visaService.deleteVisaTraveller(element).subscribe();
      })
    },err=>{

    },()=>{
      this.ws.send(this.user.ownerId+"visa");
      this.snackbar.open("Updated", "X", {duration: 3000});
      this.dialog.closeAll();
    })
  }

  visaDetails: Visa = {
    cname: '',
    customerId: '',
    bookBy: '',
    bookByNo: '',
    bookByEmail: '',
    location: '',
    visaType: '',
    from: '',
    to: '',
    visaCost: '',
    ownerId: '', 
    status: '',
  }

}

export interface Visa {
  id?: string;
  cname?: string;
  customerId?:string;
  bookBy?: string;
  bookByNo?: string;
  bookByEmail?: string;
  location?: string;
  visaType?: string;
  from?: string;
  to?: string;
  visaCost?: string;
  ownerId?: string;
  status?: string;
}