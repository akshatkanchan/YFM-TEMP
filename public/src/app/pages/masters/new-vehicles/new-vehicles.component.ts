import { Component, OnInit, Inject, HostListener } from '@angular/core';
import {Vehicle} from './vehicle';
import {VehicleService} from './vehicle.service';
import { DriverService } from '../new-driver/driver.service';
import { Observable } from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';
import { Driver } from '../new-driver/driver';
import { VehicleGroupsComponent, VehicleGroup } from '../vehiclegroups/vehiclegroups.component';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Branch } from '../../operations/new-branch/new-branch.component';
import { NewBranchService } from '../../operations/new-branch/new-branch.service';
import * as moment from 'moment';
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';

@Component({
  selector: 'app-new-vehicles',
  templateUrl: './new-vehicles.component.html',
  styleUrls: ['./new-vehicles.component.scss']
})
export class NewVehiclesComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  emiDay: number[]=[];
  drivers:Driver[];
  driver:any;
  vehicleGroupObs:VehicleGroup[];
  vehicleGroup:any;
  branchesCtrl:FormControl = new FormControl();
  driverCtrl:FormControl = new FormControl();
  vehicleGroupCtrl:FormControl = new FormControl();
  branches:Branch[];
  branch:any;
  editState:boolean=false
  user:User={}
  selectedPermitFiles: FileList;
  selectedExtraFiles: FileList;
  permitImgUrl: any[] = [];
  previousPermitImgUrl: any[] = [];
  fileImgUrl: any[] = [];
  previousFileImgUrl: any[] = [];
  selectedFiles: FileList;
  imgUrl:any=''
  previousImgUrl :any =''
  myForm:FormGroup;
  fileForm:FormGroup;
  supplierVehicle: boolean = false;
  deletedPermits = [];
  deletedFiles = [];

  permitFiles: File[]=[];
  permitFileName: any[]=[];
  otherFiles: File[]=[];
  otherFileName: any[] = [];

  constructor(
    private vehicleService:VehicleService,
    private driverService:DriverService,
    public snackBar:MatSnackBar, 
    private vehicleGroupService:VehicleGroupsComponent,
    private dialog:MatDialog,
    private auth:AuthService,
    private matDialogRef:MatDialogRef<NewVehiclesComponent>,
    private branchService:NewBranchService,
    private uploadService : FileuploadService,
    private _sanitizer : DomSanitizer,
    @Inject (MAT_DIALOG_DATA) public data,
    private fb:FormBuilder,
    private http:Http
  ) { }

  saveVehicle()
  {
    if(this.vehicle.modelname.trim()=="")
    {
      this.snackBar.open("Enter Model Name",null,{
        duration:5000
      })
    }
    else if(this.vehicle.number=="")
    {
      this.snackBar.open("Enter Vehicle Number",null,{
        duration:5000
      })
    }
    // else if(this.vehicle.vcolor=="")
    // {
    //   this.snackBar.open("Enter Vehicle Color",null,{
    //     duration:5000
    //   })
    // } 
    // else if(this.vehicle.fuelType=="")
    // {
    //   this.snackBar.open("Enter Vehicle Fuel Type",null,{
    //     duration:5000
    //   })
    // } 
    // else if(this.vehicle.seating=="")
    // {
    //   this.snackBar.open("Enter Vehicle Seating",null,{
    //     duration:5000
    //   })
    // }
    // else if(this.vehicle.vehicleGroup=="" || this.vehicle.vehicleGroupId === undefined)
    // {
    //   this.snackBar.open("Select One Vehicle Group",null,{
    //     duration:5000
    //   })
    // } 
    // else if(this.vehicle.branches=="")
    // {
    //   this.snackBar.open("Enter Branches",null,{
    //     duration:5000
    //   })
    // }
    // else if(this.vehicle.regName=="")
    // {
    //   this.snackBar.open("Enter Registration Name",null,{
    //     duration:5000
    //   })
    // }
    // else if(this.vehicle.regDate=="") //change to datepicker
    // {
    //   this.snackBar.open("Enter Registration Date",null,{
    //     duration:5000
    //   })
    // }
    else
    {
      var i = 0;
      console.log(this.vehicle);
      
      if(this.vehicle.issueDate === null || this.vehicle.issueDate === '' || this.vehicle.issueDate === 'Invalid date'){
        console.log("asd")
        this.vehicle.issueDate = null
      } else {
        this.vehicle.issueDate=moment(this.vehicle.issueDate).format("YYYY-MM-DD")
      }
      if(this.vehicle.dueDate === null || this.vehicle.dueDate === '' || this.vehicle.dueDate === 'Invalid date'){
        this.vehicle.dueDate = null
        console.log("asd")
      } else {
        this.vehicle.dueDate=moment(this.vehicle.dueDate).format("YYYY-MM-DD")
      }
      if(this.vehicle.regDate === null || this.vehicle.regDate === '' || this.vehicle.regDate === 'Invalid date'){
        this.vehicle.regDate = null
      } else {
        this.vehicle.regDate=moment(this.vehicle.regDate).format("YYYY-MM-DD")
      }
      if(this.vehicle.expiryDateRTO === null || this.vehicle.expiryDateRTO === '' || this.vehicle.expiryDateRTO === 'Invalid date'){
        this.vehicle.expiryDateRTO = null
      } else {
        this.vehicle.expiryDateRTO=moment(this.vehicle.expiryDateRTO).format("YYYY-MM-DD")
      }
      if(this.vehicle.expiryDateAuth === null || this.vehicle.expiryDateAuth === '' || this.vehicle.expiryDateAuth === 'Invalid date'){
        this.vehicle.expiryDateAuth = null
      } else {
        this.vehicle.expiryDateAuth=moment(this.vehicle.expiryDateAuth).format("YYYY-MM-DD")
      }
      if(this.vehicle.expiryDatePUC === null || this.vehicle.expiryDatePUC === '' || this.vehicle.expiryDatePUC === 'Invalid date'){
        this.vehicle.expiryDatePUC = null
      } else {
        this.vehicle.expiryDatePUC=moment(this.vehicle.expiryDatePUC).format("YYYY-MM-DD")
      }
      if(this.vehicle.startDate === null || this.vehicle.startDate === '' || this.vehicle.startDate === 'Invalid date'){
        this.vehicle.startDate = null
      } else {
        this.vehicle.startDate=moment(this.vehicle.startDate).format("YYYY-MM-DD")
      }
      if(this.vehicle.endDate === null || this.vehicle.endDate === '' || this.vehicle.endDate === 'Invalid date'){
        this.vehicle.endDate = null
      } else {
        this.vehicle.endDate=moment(this.vehicle.endDate).format("YYYY-MM-DD")
      }
      if(this.vehicle.permitExpiryDate === null || this.vehicle.permitExpiryDate === '' || this.vehicle.permitExpiryDate === 'Invalid date'){
        this.vehicle.permitExpiryDate = null
      } else {
        this.vehicle.permitExpiryDate=moment(this.vehicle.permitExpiryDate).format("YYYY-MM-DD")
      }
      // console.log(this.vehicle)
      this.vehicleService.addVehicle(this.vehicle).subscribe(data=>{
        console.log(data)
        this.vehicle.id=data.insertId
        var permitI = 0;
        this.vehicleForms.value.forEach(element => {
          element.vehicleId = this.vehicle.id;
          var type = this.permitFiles[permitI].type.split("/");
          console.log(type);
          
          var imageName = data.insertId+'_'+element.permitType+"."+type[1]

          console.log(imageName)

          var tempArr = {        
            vehicleId : this.vehicle.id,
            permitType : element.permitType,
            permitExpiryDate : moment(element.permitExpiryDate).format("YYYY-MM-DD"),
            fileName : imageName
          }
          if(tempArr.permitExpiryDate == 'Invalid date') {
            tempArr.permitExpiryDate = null;
          }
          this.vehicleService.addVehiclePermit(tempArr).subscribe(data=>{})
          if(this.permitImgUrl[permitI]!=null)
            this.uploadPermit(imageName,this.permitFiles[permitI])
          permitI=permitI+1;
        });
        var fileI = 0;
        this.fileForms.value.forEach(element => {
          element.vehicleId = this.vehicle.id;
          var type = this.otherFiles[fileI].type.split("/");
          var imageName = data.insertId+'_'+element.fileType+"."+type[1]

          console.log(imageName)

          var tempArr2 = {
            vehicleId : this.vehicle.id,
            fileType : element.fileType,
            fileName : imageName
          }
          this.vehicleService.addVehicleFile(tempArr2).subscribe(data=>{})
          if(this.fileImgUrl[fileI]!=null)
            this.uploadFile(imageName,this.otherFiles[fileI])
          fileI=fileI+1;
        });
        this.upload(data.insertId)
        if(data.affectedRows==1){
          this.param.inserted='yes';
          this.param.data=this.vehicle;
          this.matDialogRef.close(this.param);
        } 
      },err=>{},()=>{
        this.snackBar.open("Vehicle Added", "X", {duration: 3000})
      });
    }    
  }

  uploadPermit(filename,imgUrl)
  {
    const uploadData= new FormData();

      uploadData.append(this.user.companyName+"/"+"vehiclePermits/"+filename,imgUrl,'permitFiles')

      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      return this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
        if(data.success)
        {
          // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
        }
      });
  }

  fileImageSelect(event,row,i)
  {
    this.selectedExtraFiles = event.target.files;
    this.otherFiles[i]=<File>event.target.files[0];
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.fileImgUrl[i]=reader.result
    reader.readAsDataURL(file);
    console.log(this.fileImgUrl);
    this.otherFileName[i] = this.otherFiles[i].name;
    console.log(this.otherFiles[i]);
  }


  uploadFile(filename,imgUrl)
  {
      const uploadData= new FormData();

      uploadData.append(this.user.companyName+"/"+"vehicleFiles/"+filename,imgUrl,'permitFiles')

      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      return this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
        if(data.success)
        {
          // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
        }
      });
  }

  upload(id) {
    if(this.imgUrl!='')
    {
      this.vehicle.fileName = id+this.vehicle.modelname+".jpg";
      this.uploadService.uploadfile(this.user.companyName,'vehicleList',this.vehicle.fileName,this.imgUrl);
    }
    this.vehicleService.updateVehicle(this.vehicle).subscribe(data=>{
      // this.snackBar.open("Vehicle Updated",null,{duration:3000})
      // this.dialog.closeAll()
    })
  }

  editVehicle() {  
    if(this.vehicle.issueDate === null || this.vehicle.issueDate === '' || this.vehicle.issueDate === 'Invalid date'){
      this.vehicle.issueDate = null
    } else {
      this.vehicle.issueDate=moment(this.vehicle.issueDate).format("YYYY-MM-DD")
    }
    if(this.vehicle.dueDate === null || this.vehicle.dueDate === '' || this.vehicle.dueDate === 'Invalid date'){
      this.vehicle.dueDate = null
    } else {
      this.vehicle.dueDate=moment(this.vehicle.dueDate).format("YYYY-MM-DD")
    }
    if(this.vehicle.regDate === null || this.vehicle.regDate === '' || this.vehicle.regDate === 'Invalid date'){
      this.vehicle.regDate = null
    } else {
      this.vehicle.regDate=moment(this.vehicle.regDate).format("YYYY-MM-DD")
    }
    if(this.vehicle.expiryDateRTO === null || this.vehicle.expiryDateRTO === '' || this.vehicle.expiryDateRTO === 'Invalid date'){
      this.vehicle.expiryDateRTO = null
    } else {
      this.vehicle.expiryDateRTO=moment(this.vehicle.expiryDateRTO).format("YYYY-MM-DD")
    }
    if(this.vehicle.expiryDateAuth === null || this.vehicle.expiryDateAuth === '' || this.vehicle.expiryDateAuth === 'Invalid date'){
      this.vehicle.expiryDateAuth = null
    } else {
      this.vehicle.expiryDateAuth=moment(this.vehicle.expiryDateAuth).format("YYYY-MM-DD")
    }
    if(this.vehicle.expiryDatePUC === null || this.vehicle.expiryDatePUC === '' || this.vehicle.expiryDatePUC === 'Invalid date'){
      this.vehicle.expiryDatePUC = null
    } else {
      this.vehicle.expiryDatePUC=moment(this.vehicle.expiryDatePUC).format("YYYY-MM-DD")
    }
    if(this.vehicle.startDate === null || this.vehicle.startDate === '' || this.vehicle.startDate === 'Invalid date'){
      this.vehicle.startDate = null
    } else {
      this.vehicle.startDate=moment(this.vehicle.startDate).format("YYYY-MM-DD")
    }
    if(this.vehicle.endDate === null || this.vehicle.endDate === '' || this.vehicle.endDate === 'Invalid date'){
      this.vehicle.endDate = null
    } else {
      this.vehicle.endDate=moment(this.vehicle.endDate).format("YYYY-MM-DD")
    }
    if(this.vehicle.permitExpiryDate === null || this.vehicle.permitExpiryDate === '' || this.vehicle.permitExpiryDate === 'Invalid date'){
      this.vehicle.permitExpiryDate = null
    } else {
      this.vehicle.permitExpiryDate=moment(this.vehicle.permitExpiryDate).format("YYYY-MM-DD")
    }
    if(this.vehicle.expiryDateFitness === null || this.vehicle.expiryDateFitness === '' || this.vehicle.expiryDateFitness === 'Invalid date'){
      this.vehicle.expiryDateFitness = null
    } else {
      this.vehicle.expiryDateFitness=moment(this.vehicle.expiryDateFitness).format("YYYY-MM-DD")
    }

    if(this.previousImgUrl!=this.imgUrl) {
      this.upload(this.vehicle.id)
    }      
    else {
      this.vehicleService.updateVehicle(this.vehicle).subscribe(data=>{
        var i=0;
        this.vehicleForms.value.forEach(element => {
          console.log(element);
          if(element.id == '' || element.id == undefined || element.id ==null) {
            var type = this.permitFiles[i].type.split("/");
            console.log(type);
            console.log(this.permitImgUrl[i]);
            
            var imageName = this.vehicle.id+'_'+element.permitType+"."+type[1]
        
            var tempArr = {        
              vehicleId : this.vehicle.id,
              permitType : element.permitType,
              permitExpiryDate : moment(element.permitExpiryDate).format("YYYY-MM-DD"),
              fileName : imageName
            }
            if(tempArr.permitExpiryDate == 'Invalid date') {
              tempArr.permitExpiryDate = null;
            }
            this.vehicleService.addVehiclePermit(tempArr).subscribe();
            this.uploadPermit(imageName,this.permitFiles[i])
          }
          else {
            
          }
          i++;
        });
        this.deletedPermits.forEach(element => {
          this.vehicleService.deleteVehiclePermit(element).subscribe();
        })
        var i=0;
        this.fileForms.value.forEach(element => {
          console.log(element);
          
          if(element.id == '' || element.id == undefined || element.id ==null) {
            var type = this.otherFiles[i].type.split("/");
            var imageName = this.vehicle.id+'_'+element.fileType+"."+type[1]

            console.log(imageName)

            var tempArr2 = {
              vehicleId : this.vehicle.id,
              fileType : element.fileType,
              fileName : imageName
            }
            this.vehicleService.addVehicleFile(tempArr2).subscribe();
            this.uploadFile(imageName,this.otherFiles[i])
          }
          else {
            // this.vehicleService.updateVehicleFile(element).subscribe();
            // var imageName = this.vehicle.id+'_'+element.fileType+".jpg";
            // this.uploadFile(imageName,this.fileImgUrl[i])
          }
          i++;
        });
        this.deletedFiles.forEach(element => {
          this.vehicleService.deleteVehicleFile(element).subscribe();
        })
      },err=>{},()=>{
        this.snackBar.open("Vehicle Updated",null,{duration:7000})
        this.dialog.closeAll()
      })
    }      
  }

  setVehicleGroup(temp,event:any)
  {
    if(event.source.selected==true)
    {
      this.vehicle.vehicleGroup=temp.modelname;
      this.vehicle.vehicleGroupId=temp.id;
    }
  }

  setAssignedDriver(temp,event:any)
  {
    if(event.source.selected==true)
    {
      this.vehicle.assignedDriver=temp.name;
      this.vehicle.assignedDriverId=temp.id;
    }
  }

  closeDialog()
  {
    this.dialog.closeAll()
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.imgUrl=reader.result

    reader.readAsDataURL(file);
  }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.vehicle.ownerId=data[0].ownerId
      this.vehicleGroupService.getvehicleGroup(this.user).subscribe(data=>{
        this.vehicleGroupObs=data
        this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterVehicleGroup(val))
        )
      });

      this.driverService.getDriver(this.user).subscribe(data=>{
        this.drivers=data
        this.driver=this.driverCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterDriver(val))
        )
      });


      this.branchService.getBranches(this.user).subscribe(data=>{
        this.branches=data;
        this.branch=this.branchesCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterBranches(val))
        )
      })
    })

    this.myForm=this.fb.group({
      rows:this.fb.array([])
    });
    this.fileForm=this.fb.group({
      rows:this.fb.array([])
    });
    if(this.data != null) {
      if(this.data.row != null){
        this.vehicle=this.data.row
        this.driverCtrl.setValue(this.data.row.assignedDriver);
        this.branchesCtrl.setValue(this.data.row.branchId);
        this.editState=true
        
        if(this.vehicle.fileName!='' && this.vehicle.fileName!=null)
          this.uploadService.getFile(this.user.companyName,'vehicleList',this.vehicle.fileName).subscribe(data=>{
            this.imgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousImgUrl = this.imgUrl;
            console.log(this.imgUrl);
            
          })
        
        this.vehicleService.getVehiclePermit(this.vehicle).subscribe(data => {
          var j = 0;
          data.forEach(element => {          
            console.log(element);
            
            this.uploadService.getFile(this.user.companyName,'vehiclePermits',element.fileName).subscribe(data=>{
              if(data.text().includes("PDF")) {
                this.permitImgUrl[j] = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf,'+ data.text());
                this.permitFileName[j] = element.fileName
                this.previousPermitImgUrl[j] = this.permitImgUrl[j].changingThisBreaksApplicationSecurity;
                this.permitImgUrl[j] = this.previousPermitImgUrl[j];
                console.log(this.permitFileName[j]);
              }
              else {
                this.permitImgUrl[j] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ data.text());
                this.previousPermitImgUrl[j] = this.permitImgUrl[j].changingThisBreaksApplicationSecurity;
                this.permitImgUrl[j] = this.previousPermitImgUrl[j];
                console.log(this.permitImgUrl)
              }
              const row = this.fb.group({
                id: element.id,
                permitType: element.permitType,
                permitExpiryDate: element.permitExpiryDate,
                fileName: '',
                imageName: ''
              })
              this.vehicleForms.push(row);
              j=j+1;
            })
          });
        })        
        this.vehicleService.getVehicleFile(this.vehicle).subscribe(data => {
          var k = 0
          data.forEach(element => {
            this.uploadService.getFile(this.user.companyName,'vehicleFiles',element.fileName).subscribe(data=>{
              if(data.text().includes("PDF")) {
                this.fileImgUrl[k] = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf,'+ data.text());
                this.otherFileName[i] = element.fileName;
                this.previousFileImgUrl[k] = this.fileImgUrl[k].changingThisBreaksApplicationSecurity;
                this.fileImgUrl[k] = this.previousFileImgUrl[k];
              }
              else {
                this.fileImgUrl[k] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ data.text());
                this.previousFileImgUrl[k] = this.fileImgUrl[k].changingThisBreaksApplicationSecurity;
                this.fileImgUrl[k] = this.previousFileImgUrl[k];
              }

              const row = this.fb.group({
                id: element.id,
                fileType: element.fileType,
                fileName: '',
                imageName: ''
              })
              
              this.fileForms.push(row);
              k=k+1;
            })
          });
        })
      }
      else if(this.data.type=='Owner-cum-Driver') {
        this.vehicle.assignedDriver = this.data.driverName
        this.supplierVehicle = true;
      }
      else{
        this.editState=false
        console.log(this.editState);
        
      }
    }
    
    var i;
    for(i = 1; i < 32; i++) {
      this.emiDay.push(i);
    }
  }

  filterBranches(val:string){
    return this.branches.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  filterDriver(val:string){
    return this.drivers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  filterVehicleGroup(val:string){
    return this.vehicleGroupObs.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  setBranches(temp,event:any){
    if(event.source.selected==true)
    {
      this.vehicle.branches=temp.name
      this.vehicle.branchId=temp.id
    }
  }

  get vehicleForms() {
    return this.myForm.get('rows') as FormArray
  }

  get fileForms() {
    return this.fileForm.get('rows') as FormArray
  }

  addRow() {
    const row = this.fb.group({
      permitType: '',
      permitExpiryDate: null,
      fileName: '',
      imageName: ''
    })
    
    this.vehicleForms.push(row);

    this.vehicleForms.controls.forEach(element=>{
      console.log(element)
    })
  }

  deleteRow(i, aRow){
    this.vehicleForms.removeAt(i);    
    this.permitImgUrl.splice(i,1);
    if(aRow.value.id != '') {
      this.deletedPermits.push(aRow.value)
    }
  }

  addFileRow() {
    const row = this.fb.group({
      fileType: '',
      fileName: '',
      imageName: ''
    })
    
    this.fileForms.push(row);

    this.fileForms.controls.forEach(element=>{
      console.log(element)
    })
  }

  deleteFileRow(i, aRow){
    this.fileForms.removeAt(i);    
    this.fileImgUrl.splice(i,1);
    if(aRow.value.id != '') {
      this.deletedFiles.push(aRow.value)
    }
  }

  imageSelect(event,row,i)
  {
    console.log("hi")
    this.selectedPermitFiles = event.target.files;
    this.permitFiles[i]=<File>event.target.files[0];
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.permitImgUrl[i]=reader.result

    // row.get('imageName').setValue(this.vehicle.id+'_'+i+'_')
    this.permitFileName[i] = this.permitFiles[i].name;
    reader.readAsDataURL(file);
  }

  param:any={};    
  vehicle:Vehicle={
    modelname: '',
    number: '',
    vcolor: '',
    seating: '',
    fuelType:'',
    branches: '',
    companyName: '',
    policyNumber: '',
    issueDate:'',
    dueDate:'',
    premiumAmount: '',
    coverAmount: '',
    chassisNumber: '',
    engineNumber: '',
    regName: '',
    regDate: '',
    RTOAddress: '',
    taxEfficiency: '',
    expiryDateRTO: '',
    authorizationNumber: '',
    expiryDateAuth:'',
    PUCNumber: '',
    expiryDatePUC:'',
    EMIAmount: '',
    startDate:'',
    endDate:'',
    bankName: '',
    EMIDay:'',
    // permitType:'',
    // permitExpiryDate:'',
    fileName:'',
    fileURL:'',
    assignedDriver:'',
    vehicleGroup:'',
    assignedDriverId:null,
    vehicleGroupId:null,
    branchId:null,
    ownerId:'',
    fitnessNumber: '',
    expiryDateFitness: null,
    active: true,
  }

  removeImage()
  {
    this.imgUrl='';
    this.previousImgUrl='';
    this.vehicle.fileName='';
  }
}
