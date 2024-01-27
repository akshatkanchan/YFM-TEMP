import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Branch } from '../../operations/new-branch/new-branch.component';
import { User } from '../../../core/user';
import { NewBranchService } from '../../operations/new-branch/new-branch.service';
import {map, startWith} from 'rxjs/operators';
import * as moment from 'moment'
import { DomSanitizer } from '@angular/platform-browser';
import { FileuploadService } from '../../../fileupload.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer/customer.service';
import { ActivitylogService } from '../../../activitylog.service';
import { Http } from '@angular/http';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-new-employees',
  templateUrl: './new-employees.component.html',
  styleUrls: ['./new-employees.component.scss']
})
export class NewEmployeesComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }
  
  branchesCtrl:FormControl = new FormControl();
  driverCtrl:FormControl = new FormControl();
  branches:Branch[];
  editState: boolean = false;
  branch:any;
  user:User={}
  companyName: string;
  imgUrl:any='';
  previousImgUrl='';
  panImgUrl:any='';
  previousPanImgUrl='';
  aadharImgUrl:any='';
  previousAadharImgUrl='';
  myForm:FormGroup;
  customers:Customer[];
  customer:any;
  customerCtrl:FormControl=new FormControl();
  tempCustomers = [];
  deleteCustomers = [];
  sameAsPermanent: boolean = false;
  logs = [];
  img: File;
  imgAadhar: File;
  imgPan: File;
  imgName: any;
  imgAadharName: any;
  imgPanName: any;

  ngOnInit(){
    this.auth.user.subscribe(data=>{
      
      this.user=data[0]
      this.employee.ownerId=data[0].ownerId
      this.companyName = data[0].companyName;
      
      this.branchService.getBranches(this.user).subscribe(data=>{
        this.branches=data;
        this.branch=this.branchesCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterBranches(val))
        )
      })

      this.customerService.getCustomers(this.user).subscribe(data=>{
        this.customers=data;
        console.log(data);
        
        this.tempCustomers=data.slice(0)
        this.customer=this.customerCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterCustomer(val))
        );
      });

      
    })

    this.myForm=this.fb.group({
      rows:this.fb.array([])
    });    
    
    if(this.data.row!=null)
    {
      this.editState=true
      this.employee=this.data.row

      this.activityLogs.getEmployeeLogs({id:this.data.row.id}).subscribe(data=>{
        this.logs = data
      })

      this.employeeService.getEmployeeLimitCustomer(this.employee).subscribe(data => {
        data.forEach(element => {
          const row = this.fb.group({
            id: element.id,
            customerId: element.customerId,
            employeeId: element.employeeId,
            visibleCustomers: element.cname,     
          })
          var index : number = this.customers.findIndex(x=>x.id == element.customerId)
          this.customers.splice(index,1)
          this.visibleCustomers.push({customerId: element.customerId, cname: element.cname, employeeId: element.employeeId, id: element.id})
          this.customerForms.push(row);
        });
      })

      if(this.employee.profilePhoto!='' && this.employee.profilePhoto!=null)
        this.uploadService.getFile(this.user.companyName,'employeeList',this.employee.profilePhoto).subscribe(data=>{
          this.imgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
          this.previousImgUrl = this.imgUrl;
        })

      if(this.employee.aadharPhoto!='' && this.employee.aadharPhoto!=null)
        this.uploadService.getFile(this.user.companyName,'employeeList',this.employee.aadharPhoto).subscribe(data=>{
          if(data.text().includes("PDF")) {
            this.aadharImgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf,'+ data.text());
            this.imgAadharName = this.employee.aadharPhoto;
            this.previousAadharImgUrl = this.aadharImgUrl.changingThisBreaksApplicationSecurity;
            this.aadharImgUrl = this.previousAadharImgUrl;
          }
          else {
            this.aadharImgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousAadharImgUrl = this.aadharImgUrl.changingThisBreaksApplicationSecurity;
            this.aadharImgUrl = this.previousAadharImgUrl;
          }
        })
      
      if(this.employee.panCardPhoto!='' && this.employee.panCardPhoto!=null)
        this.uploadService.getFile(this.user.companyName,'employeeList',this.employee.panCardPhoto).subscribe(data=>{
          if(data.text().includes("PDF")) {
            this.panImgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf,'+ data.text());;
            this.imgPanName = this.employee.panCardPhoto
            this.previousPanImgUrl = this.panImgUrl.changingThisBreaksApplicationSecurity;
            this.panImgUrl = this.previousPanImgUrl;
          }
          else {
            this.panImgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousPanImgUrl = this.panImgUrl.changingThisBreaksApplicationSecurity;
            this.panImgUrl = this.previousPanImgUrl;
          }          
        })
    }
    else{
      this.editState=false;
    }

    if(this.data.row == null && this.visibleCustomers.length == 0) {
      this.addRow()  
    }    
  }
  filterBranches(val:string){
    return this.branches.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  filterCustomer(val:string){
    return this.customers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  filterCust(i:any)
  {
    if(this.customers.length>0)
    {
      this.customer=this.customerForms.at(i).get('visibleCustomers').valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterCustomer(val))
      );
    } 
  }
  setBranches(temp,event:any){
    if(event.source.selected==true) {
      this.employee.branches=temp.name
      this.employee.branchId=temp.id
    }
  }

  get customerForms() {
    return this.myForm.get('rows') as FormArray
  }

  addRow() {
    const row = this.fb.group({
      id:'',
      customerId: '',
      employeeId: '',
      visibleCustomers: new FormControl(),     
    })
    
    this.customerForms.push(row);
  }

  deleteRow(i, aRow){
    this.customerForms.removeAt(i);  
    if(this.visibleCustomers[i]) {
      if(aRow.value.id != '') {
        console.log("inside");
        console.log(aRow);
        this.deleteCustomers.push(aRow.value);
      }
      var index = this.visibleCustomers.splice(i,1);
    
      console.log(this.tempCustomers);      
      var temp = this.tempCustomers.find(x=>x.customerId == index[0].customerId)
      
      console.log(temp);
      
  
      this.customers.push(temp)      
    }        
  }
  visibleCustomers: any[]=[];

  setCustomer(temp:any,event:any, i:any)
  {
    if(event.source.selected==true)
    {
      var index : number = this.customers.findIndex(x=>x.id == temp.id)
      
      this.customers.splice(index,1)

      this.visibleCustomers[i]={customerId: temp.id, cname: temp.name, employeeId: ''}

    }
  }


  closeDialog(){
    this.dialog.closeAll()
  }
  saveEmployee() {
    if(this.employee.name.trim()=="")
    {
      this.snackBar.open('Enter Name',null,{
        duration:5000
      });
    }
    // else if(this.employee.employeeId=="")
    // {
    //   this.snackBar.open('Enter Employee Id',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.mobilenumber.trim()=="")
    // {
    //   this.snackBar.open('Enter Mobile Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(!this.employee.mobilenumber.match(/\b([789]\d{9}$)\b/))
    // {
    //   this.snackBar.open('Enter valid Mobile Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.email.trim()=="")
    // {
    //   this.snackBar.open('Enter Email ID',null,{
    //     duration:5000
    //   });
    // }
    else if(this.employee.email.trim()!="" && !this.employee.email.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/))
    {
      this.snackBar.open('Enter valid Email ID',null,{
        duration:5000
      });
    }
    // else if(this.employee.designation.trim()=="")
    // {
    //   this.snackBar.open('Enter Designation',null,{
    //     duration:5000
    //   });
    // }    
    // else if(this.employee.dateOfBirth=="")
    // {
    //   this.snackBar.open('Enter Date of Birth',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.fatherName.trim()=="")
    // {
    //   this.snackBar.open('Enter Father\'s Name',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.fatherDateOfBirth=="")
    // {
    //   this.snackBar.open('Enter Father\'s Date of Birth',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.motherName.trim()=="")
    // {
    //   this.snackBar.open('Enter Mother\'s Name',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.mothersDateOfBirth=="")
    // {
    //   this.snackBar.open('Enter Mother\'s Date of Birth',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.currentAddress.trim()=="")
    // {
    //   this.snackBar.open('Enter Current Address',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.permanentAddress.trim()=="")
    // {
    //   this.snackBar.open('Enter Permanent Address',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.joiningDate=="")
    // {
    //   this.snackBar.open('Enter Joining Date',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.bloodGroup.trim()=="")
    // {
    //   this.snackBar.open('Enter Blood Group',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.pfAcNumber.trim()=="")
    // {
    //   this.snackBar.open('Enter PF Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.esi.trim()=="")
    // {
    //   this.snackBar.open('Enter ESI',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.uanNumber.trim()=="")
    // {
    //   this.snackBar.open('Enter UAN Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.panNumber.trim()=="")
    // {
    //   this.snackBar.open('Enter valid PAN Number',null,{
    //     duration:5000
    //   });
    // }
    else if(this.employee.panNumber.trim() != "" && !this.employee.panNumber.match(/\b([A-Z]{5}[0-9]{4}[A-Z]{1})\b/))
    {
      this.snackBar.open('Enter valid PAN Number',null,{
        duration:5000
      });
    }
    // else if(this.employee.aadharNumber.trim()=="")
    // {
    //   this.snackBar.open('Enter Aadhar Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.dlNumber.trim()=="")
    // {
    //   this.snackBar.open('Enter Driving Licsence Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.dlExpiry=="")
    // {
    //   this.snackBar.open('Enter Driving Licsence Expiry Date',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.licenseIssuedBy.trim()=="")
    // {
    //   this.snackBar.open('Enter valid data for Licsence Issued',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.licenseCity.trim()=="")
    // {
    //   this.snackBar.open('Enter valid data for Liscence Issued',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.licenseState.trim()=="")
    // {
    //   this.snackBar.open('Enter valid data for Liscence Issued',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.licenseDate=="")
    // {
    //   this.snackBar.open('Enter valid data for Liscence Issued',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.policeDisplayCardNumber.trim()=="")
    // {
    //   this.snackBar.open('Enter Police Display Card Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.policeDisplayCardExpiry=="")
    // {
    //   this.snackBar.open('Enter Police Display Card Expiry Date',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.policeVerificationNumber.trim()=="")
    // {
    //   this.snackBar.open('Enter Police Verification Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.policeVerificationExpiryDate=="")
    // {
    //   this.snackBar.open('Enter Police Verification Expiry Date',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.bankDisplayCardNumber.trim()=="")
    // {
    //   this.snackBar.open('Enter Bank Display Card Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.bankAccountNumber.trim()=="")
    // {
    //   this.snackBar.open('Enter Bank Account Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.bankIfscCode.trim()=="")
    // {
    //   this.snackBar.open('Enter Bank IFSC Code',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.employee.esiDispensaryCode.trim()=="")
    // {
    //   this.snackBar.open('Enter ESI Dispensary Code',null,{
    //     duration:5000
    //   });
    // }Option
    // else if(this.employee.branches.trim()=="")
    // {
    //   this.snackBar.open('Enter Branches',null,{
    //     duration:5000
    //   });
    // }
    else
    {
      this.employee.dateOfBirth=moment(this.employee.dateOfBirth).format("YYYY-MM-DD")
      if(this.employee.fatherDateOfBirth === ''){
        this.employee.fatherDateOfBirth = null
      } else {
        this.employee.fatherDateOfBirth=moment(this.employee.fatherDateOfBirth).format("YYYY-MM-DD")
      }
      if(this.employee.mothersDateOfBirth === ''){
        this.employee.mothersDateOfBirth = null
      } else {
        this.employee.mothersDateOfBirth=moment(this.employee.mothersDateOfBirth).format("YYYY-MM-DD")
      }
      if(this.employee.marriageDate === ''){
        this.employee.marriageDate = null
      } else {
        this.employee.marriageDate=moment(this.employee.marriageDate).format("YYYY-MM-DD")
      }
      if(this.employee.joiningDate === ''){
        this.employee.joiningDate = null
      } else {
        this.employee.joiningDate=moment(this.employee.joiningDate).format("YYYY-MM-DD")
      }
      if(this.employee.dlExpiry === ''){
        this.employee.dlExpiry = null
      } else {
        this.employee.dlExpiry=moment(this.employee.dlExpiry).format("YYYY-MM-DD")
      }
      if(this.employee.badgeExpiry === ''){
        this.employee.badgeExpiry = null
      } else {
        this.employee.badgeExpiry=moment(this.employee.badgeExpiry).format("YYYY-MM-DD")
      }
      if(this.employee.policeDisplayCardExpiry === ''){
        this.employee.policeDisplayCardExpiry = null
      } else {
        this.employee.policeDisplayCardExpiry=moment(this.employee.policeDisplayCardExpiry).format("YYYY-MM-DD")
      }
      if(this.employee.policeVerificationExpiryDate === ''){
        this.employee.policeVerificationExpiryDate = null
      } else {
        this.employee.policeVerificationExpiryDate=moment(this.employee.policeVerificationExpiryDate).format("YYYY-MM-DD")
      }
      if(this.employee.licenseDate === ''){
        this.employee.licenseDate = null
      } else {
        this.employee.licenseDate=moment(this.employee.licenseDate).format("YYYY-MM-DD")
      }
      
      this.employeeService.addEmployee(this.employee).subscribe(data=>{
        if(data.affectedRows==1){
          this.employee.id=data.insertId
          this.upload(data.insertId)
          this.param.inserted='yes';
          this.param.data=this.employee;
          this.activityLogs.addEmployeeLogs({
            employeeId:data.insertId,
            ownerId:this.employee.ownerId,
            message:"Employee created on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
          this.visibleCustomers.forEach(element => {            
            element.employeeId = this.employee.id;
            this.employeeService.addEmployeeLimitCustomer(element).subscribe(data => {});
          });
          this.matDialogRef.close(this.param);
        } 
      },err=>{},()=>{
        this.snackBar.open("Employee Added", "X", {duration: 3000});
      });
    }
  }

  uploadProfilePhoto(event) {      
    const file = event.target.files[0];
    this.img = <File>event.target.files[0]
    const reader = new FileReader();
    reader.onload = () => this.imgUrl = reader.result;

    reader.readAsDataURL(file);
  }

  uploadAadharPhoto(event) {      
    const file = event.target.files[0];
    this.imgAadhar = <File>event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => this.aadharImgUrl = reader.result;
    this.imgAadharName = this.imgAadhar.name;
    reader.readAsDataURL(file);
  }

  uploadPanPhoto(event) {       
    const file = event.target.files[0];
    this.imgPan = <File>event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => this.panImgUrl = reader.result;
    this.imgPanName = this.imgPan.name;
    reader.readAsDataURL(file);
  }

 async  upload(id) {
    if(this.imgUrl != '' && this.previousImgUrl != this.imgUrl) {
      this.employee.profilePhoto  = id+this.employee.name+"_profilePhoto.jpg";
      const uploadData= new FormData();
      uploadData.append(this.user.companyName+"/"+"employeeList/"+this.employee.profilePhoto,this.img,'employeeImage')
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      await this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
        if(data.success) {
          // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
        }
      });
    }
    if(this.aadharImgUrl != '' && this.previousAadharImgUrl != this.aadharImgUrl) {
      var type = this.imgAadhar.type.split("/");
      this.employee.aadharPhoto = id+this.employee.name+"_aadharPhoto."+type[1];
      const uploadData= new FormData();
      uploadData.append(this.user.companyName+"/"+"employeeList/"+this.employee.aadharPhoto,this.imgAadhar,'employeeAadharImage')
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      await this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe();
    }
    if(this.panImgUrl != '' && this.previousPanImgUrl != this.panImgUrl) {
      var type = this.imgPan.type.split("/");
      this.employee.panCardPhoto = id+this.employee.name+"_panPhoto."+type[1];
      const uploadData= new FormData();
      uploadData.append(this.user.companyName+"/"+"employeeList/"+this.employee.panCardPhoto,this.imgPan,'employeePanImage')
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      await this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{});
    }
    
    this.employeeService.updateEmployee(this.employee).subscribe(data=>{
      // this.snackBar.open("Employee data has been updated",null,{duration:3000});
      // this.dialog.closeAll()
    })
    
  }

  editEmployee(){
    this.employee.dateOfBirth=moment(this.employee.dateOfBirth).format("YYYY-MM-DD")
    if(this.employee.fatherDateOfBirth === ''){
      this.employee.fatherDateOfBirth = null
    } else {
      this.employee.fatherDateOfBirth=moment(this.employee.fatherDateOfBirth).format("YYYY-MM-DD")
    }
    if(this.employee.mothersDateOfBirth === ''){
      this.employee.mothersDateOfBirth = null
    } else {
      this.employee.mothersDateOfBirth=moment(this.employee.mothersDateOfBirth).format("YYYY-MM-DD")
    }
    if(this.employee.marriageDate === ''){
      this.employee.marriageDate = null
    } else {
      this.employee.marriageDate=moment(this.employee.marriageDate).format("YYYY-MM-DD")
    }
    if(this.employee.joiningDate === ''){
      this.employee.joiningDate = null
    } else {
      this.employee.joiningDate=moment(this.employee.joiningDate).format("YYYY-MM-DD")
    }
    if(this.employee.dlExpiry === ''){
      this.employee.dlExpiry = null
    } else {
      this.employee.dlExpiry=moment(this.employee.dlExpiry).format("YYYY-MM-DD")
    }
    if(this.employee.badgeExpiry === ''){
      this.employee.badgeExpiry = null
    } else {
      this.employee.badgeExpiry=moment(this.employee.badgeExpiry).format("YYYY-MM-DD")
    }
    if(this.employee.policeDisplayCardExpiry === ''){
      this.employee.policeDisplayCardExpiry = null
    } else {
      this.employee.policeDisplayCardExpiry=moment(this.employee.policeDisplayCardExpiry).format("YYYY-MM-DD")
    }
    if(this.employee.policeVerificationExpiryDate === ''){
      this.employee.policeVerificationExpiryDate = null
    } else {
      this.employee.policeVerificationExpiryDate=moment(this.employee.policeVerificationExpiryDate).format("YYYY-MM-DD")
    }
    if(this.employee.licenseDate === ''){
      this.employee.licenseDate = null
    } else {
      this.employee.licenseDate=moment(this.employee.licenseDate).format("YYYY-MM-DD")
    }
    console.log(this.employee)
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      this.upload(this.employee.id)
      console.log(this.deleteCustomers);
      this.activityLogs.addEmployeeLogs({
        employeeId:this.employee.id,
        ownerId:this.employee.ownerId,
        message:"Employee edited on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name
      }).subscribe()
      if(this.deleteCustomers.length > 0) {
        this.deleteCustomers.forEach(element => {                        
          this.employeeService.deleteEmployeeLimitCustomer(element).subscribe(data=>{});
        })
      }
      
      this.visibleCustomers.forEach(element => {
        console.log(element);
        
        if(element.id == undefined) {
          element.employeeId = this.employee.id;            
          this.employeeService.addEmployeeLimitCustomer(element).subscribe(data => {
            element.id = data.insertId
          })            
        }
        else {
          this.employeeService.updateEmployeeLimitCustomer(element).subscribe(data => {})
        }
      });
    }, err => {}, () => {
      this.snackBar.open("Employee has been updated",null,{duration:3000});
      this.dialog.closeAll()
    })
  }

  permanentAddress() {
    if(this.sameAsPermanent == false) {
      this.sameAsPermanent = true;
      this.employee.currentAddress = this.employee.permanentAddress
    }
    else if(this.sameAsPermanent == true) {
      this.sameAsPermanent = false;
      this.employee.currentAddress = ''
    }
  }

  constructor(private matDialogRef:MatDialogRef<NewEmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService:EmployeeService,
    public snackBar:MatSnackBar,
    private dialog:MatDialog,
    private auth:AuthService,
    private branchService:NewBranchService,
    private _sanitizer:DomSanitizer,
    private uploadService : FileuploadService,
    private fb:FormBuilder,
    private customerService:CustomerService,
    private activityLogs: ActivitylogService,
    private http: Http,
  ){
  
  }
  param={
    inserted:'no',
    data:null
  }
  employee:Employee={
    name:'',
    mobilenumber:'',
    alternateNumber:'',
    email:'',
    profilePhoto:'',
    employeeId:'',
    designation:'',
    dateOfBirth:'',
    fatherName:'',
    fatherDateOfBirth:'',
    motherName:'',
    mothersDateOfBirth:'',
    currentAddress:'',
    permanentAddress:'',
    marriageDate:'',
    joiningDate:'',
    bloodGroup:'',
    pfAcNumber:'',
    esi:'',
    uanNumber:'',
    panNumber:'',
    aadharNumber:'',
    dlNumber:'',
    dlExpiry:'',
    badgeNumber:'',
    badgeExpiry:'',
    licenseIssuedBy:'',
    licenseCity:'',
    licenseState:'',
    licenseDate:'',
    policeDisplayCardNumber:'',
    policeDisplayCardExpiry:'',
    policeVerificationNumber:'',
    policeVerificationExpiryDate:'',
    bankDisplayCardNumber:'',
    bankAccountNumber:'',
    bankIfscCode:'',
    esiDispensaryCode:'',
    branches:'',
    branchId:null,
    visibleCustomers:'',
    aadharPhoto:'',
    panCardPhoto:'',
    ownerId:'',
    userId:null
  }

  removeImage()
  {
    this.imgUrl='';
    this.previousImgUrl='';
    this.employee.profilePhoto='';
    this.imgName = '';
  }

  removeAadharImage()
  {
    this.aadharImgUrl='';
    this.previousAadharImgUrl='';
    this.employee.aadharPhoto='';
    this.imgAadharName = '';
  }

  removePANImage()
  {
    this.panImgUrl='';
    this.previousPanImgUrl='';
    this.employee.panCardPhoto='';
    this.imgPanName = '';
  }
}
