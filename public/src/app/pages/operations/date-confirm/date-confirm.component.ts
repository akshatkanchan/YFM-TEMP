import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepicker, MatDialog, MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Duty } from '../../duties/duty';
import * as moment from 'moment';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { VehicleGroupsComponent, VehicleGroup } from '../../masters/vehiclegroups/vehiclegroups.component';
import { startWith,map } from 'rxjs/operators';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { DutyTypeService } from '../../masters/dutytype/duty-type.service';
import { DutyType } from '../../masters/dutytype/duty-type';
import { stringify } from 'querystring';
@Component({
  selector: 'date-confirm',
  templateUrl: './date-confirm.component.html',
  styleUrls: ['./date-confirm.component.scss'],
})
export class DateConfirmComponent implements OnInit {
  
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  // dataSource=new MatTableDataSource<Branch>();
  displayedColumns=['startDate','Customer','bookedBy','dutyType','vehicleGroup','fromLoc','toLoc','Passenger','Options'];
  bookings:any;
  searchTerm;
  picker:MatDatepicker<DateConfirmComponent>;
  dutyArray:any[]=[]; 
  selectedDuties:Duty={};
  duties:any[]=[]
  date:any;
  editField: string;
  vehicleGroups:VehicleGroup[];
  vehicleGroup:any;
  vehicleGroupCtrl: FormControl = new FormControl();
  user:User={}
  vehicleGroupForm:FormGroup;
  vehicleGroupDropDown:boolean=false;
  dutyTypes:DutyType[];
  dutyType:any;
  dutyTypeCtrl: FormControl = new FormControl();
  dutyTypeForm:FormGroup;
  dutyTypeDropDown:boolean=false;


  constructor(private datePipe: DatePipe,
    public dialogRef: MatDialogRef<DateConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vehiclegroupsService:VehicleGroupsComponent,private snackbar:MatSnackBar,
    private auth:AuthService,
    private fb:FormBuilder,
    private dutytypeService:DutyTypeService,
    private dialog: MatDialog,
    )
     { 
       console.log(data);
       if(data.type=='edit') {
        var i=0;
         data.booking.forEach(element => {
           console.log(element)
          this.bookings=element;
          console.log(this.bookings)
          var sDate=new Date(element.startDate)
          var eDate=new Date(element.endDate)
        //   //this.duty.bid=tempid;
  
          this.duty.startDate=this.datePipe.transform(sDate,'yyyy-MM-dd')
          sDate.setDate(sDate.getDate() + 1);
          this.dutyArray.push(Object.assign({},this.duty))
          this.dutyTypeCtrl.setValue(this.dutyArray[i].dutyType)
          this.vehicleGroupCtrl.setValue(this.dutyArray[i].vehicleGroup)
          console.log(this.dutyArray)
          i++;
          this.loadDutyVal();
         });
         if(data.endDate != this.dutyArray[this.dutyArray.length - 1].startDate) {

          var eDate=new Date(data.endDate)
          var sDate=new Date(this.dutyArray[this.dutyArray.length - 1].startDate)
          sDate.setDate(sDate.getDate() + 1);
          console.log(sDate,eDate);
          while(sDate<=eDate)
          {
            this.duty.startDate=this.datePipe.transform(sDate,'yyyy-MM-dd')
            sDate.setDate(sDate.getDate() + 1);
            console.log(this.duty.startDate);
            console.log(this.duty.endDate);
            this.dutyArray.push(Object.assign({},this.duty))
            this.dutyTypeCtrl.setValue(this.dutyArray[0].dutyType)
            this.vehicleGroupCtrl.setValue(this.dutyArray[0].vehicleGroup)
            console.log(this.dutyArray)
          }
         }
       } else {

        this.bookings=data.booking;
        this.loadDutyVal();
        
        if(this.bookings.startDate!=this.bookings.endDate)
        {
          var sDate=new Date(this.bookings.startDate)
          var eDate=new Date(this.bookings.endDate)
       
          //this.duty.bid=tempid;
  
         var i=0;
         while(sDate<=eDate)
         {
          let checkDate;
          checkDate=this.datePipe.transform(sDate,'EEEE');
          console.log(checkDate,"Before check")
           if(checkDate === 'Saturday' || checkDate === 'Sunday'){
            sDate.setDate(sDate.getDate() + 1);
            console.log(sDate);
           } else {
            this.duty.startDate=this.datePipe.transform(sDate,'yyyy-MM-dd')
           //  this.duty.endDate=this.datePipe.transform(eDate,'yyyy-MM-dd')
            sDate.setDate(sDate.getDate() + 1);
           //  eDate.setDate(eDate.getDate()+1);
            this.dutyArray.push(Object.assign({},this.duty))
            this.dutyTypeCtrl.setValue(this.dutyArray[0].dutyType)
            this.vehicleGroupCtrl.setValue(this.dutyArray[0].vehicleGroup)
           }
         }
        }
        else
        {
          var sDate=new Date(this.bookings.startDate)
          //this.duty.bid=tempid;
          this.duty.startDate=this.datePipe.transform(sDate,'yyyy-MM-dd')
          this.dutyArray.push(this.duty);
          
        }
        this.vehicleGroupForm=this.fb.group({
          vehicleGroup:[]
        })
        this.dutyTypeForm=this.fb.group({
          dutyType:[]
        })
       }
       
     }
     clear(id) {
       this.dutyArray.splice(id,1);
     }
     addMoreDuties() {
      this.snackbar.open("Adding more duties would result in change of the booking end date","x",{duration:5000}) 
      let lastDate=this.dutyArray[this.dutyArray.length-1].startDate
      lastDate=new Date(lastDate);
      lastDate.setDate(lastDate.getDate() + 1);
      this.duty.startDate = this.datePipe.transform(lastDate,'yyyy-MM-dd');
      this.dutyArray.push(Object.assign({},this.duty))
     }
     

  ngOnInit() {
    this.auth.user.subscribe(data=>{
        this.user=data[0]
      })
    this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(data=>{
      if(data.length==0){
        this.snackbar.open("Please register some vehicle groups","X",{duration:3000});
      }
        this.vehicleGroups=data;
        this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterVehicleGroup(val))
        );
      });

      this.dutytypeService.getDutyType(this.user).subscribe(data=>{
        if(data.length==0){
        this.snackbar.open("Please register some dutytypes","X",{duration:3000});
      }
        this.dutyTypes=data;
        this.dutyType=this.dutyTypeCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterDutyType(val))
        )
      });
  }
  setVehicleGroup(option,id,property:string){
    console.log(option,id,property)
    this.dutyArray[id][property]=option.name
    this.dutyArray[id]['vehicleGroupId']=option.id
    console.log(this.dutyArray)
    this.vehicleGroupCtrl.reset;

  }
  setDutyType(option,id,property:string){
    this.dutyArray[id][property]=option.name;
    this.dutyArray[id]['dutyTypeId']=option.id
  }
  changeDate(id,property:string,startDate){
    console.log(id,property,startDate)
    var date=moment(startDate).format("YYYY-MM-DD");
    this.dutyArray[id][property]=date
    console.log(this.dutyArray)
  }
  filterVehicleGroup(val:string){
    return this.vehicleGroups.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase())
      );
  }
  filterDutyType(val:string){
    return this.dutyTypes.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.dutyArray[id][property] = editField;
    console.log(this.dutyArray)
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  openVehicleGroup(){
    this.vehicleGroupDropDown=true
  }
  openDutyType(){
    this.dutyTypeDropDown=true
  }
 
  closeDialog() {
    this.dialogRef.close(this.dutyArray)
  }
  close() {
    this.dialogRef.close();
  }
  
  loadDutyVal()
{

  this.duty.bookBy=this.bookings.bookBy;
   //this.duty.date= this.bookings.date;  it is not same as booking date
   this.duty.passenger=this.bookings.passenger;
   this.duty.vehicleGroup= this.bookings.vehicleGroup;
    this.duty.dutyType=this.bookings.dutyType;
    this.duty.status=this.bookings.status; 
     this.duty.cname=this.bookings.cname;
     this.duty.bookByNo=this.bookings.bookByNo;
     this.duty.bookByEmail=this.bookings.bookByEmail;
     this.duty.passenger=this.bookings.passenger;
     this.duty.passengerNo=this.bookings.passengerNo; 
     this.duty.passengerEmail=this.bookings.passengerEmail;
     this.duty.fromLoc=this.bookings.fromLoc;
     this.duty.toLoc=this.bookings.toLoc;
     //this.duty.endDate=this.bookings.endDate;
     this.duty.reportingTime=this.bookings.reportingTime;
     this.duty.startFromGarage=this.bookings.startFromGarage;
     this.duty.reportingAddress=this.bookings.reportingAddress;
     this.duty.dropAddress=this.bookings.dropAddress;
     this.duty.shortReportingAddress=this.bookings.shortReportingAddress;
     this.duty.flightTrainNo=this.bookings.flightTrainNo;
     this.duty.dispatchCenter=this.bookings.dispatchCenter;
     this.duty.billTo=this.bookings.billTo;
     this.duty.price=this.bookings.price;
     this.duty.remarks=this.bookings.remarks;
     this.duty.operatorNotes=this.bookings.operatorNotes;
     this.duty.label=this.bookings.label;
     this.duty.vehicleGroup=this.bookings.vehicleGroup;
     this.duty.dutyType=this.bookings.dutyType;
     this.bookings.status;
     this.duty.vehicleGroupId=this.bookings.vehicleGroupId;
     this.duty.dutyTypeId=this.bookings.dutyTypeId;
     this.duty.ownerId=this.bookings.ownerID;
     this.duty.customerId=this.bookings.customerId;
    // this.duty.startDate=this.bookings.startDate;
}
duty:Duty={
  status:'',
  cname:'',
  startDate:null,
  passenger:'',
  vehicleGroup:'',
  dutyType:'',
  bookBy:''
   ,bookByNo:''
   ,bookByEmail:''
   ,passengerNo:'' 
   ,passengerEmail:''
   ,fromLoc:''
   ,toLoc:''
   ,reportingTime:''
   ,startFromGarage:''
   ,reportingAddress:''
   ,dropAddress:''
   ,shortReportingAddress:''
   ,flightTrainNo:''
   ,dispatchCenter:''
   ,billTo:''
   ,price:''
   ,remarks:''
   ,operatorNotes:''
   ,label:'',
   driverId:null,
   vehicleId:null,
   ownerId:'',
   dutyTypeId:null,
   vehicleGroupId:null,
   customerId:null
}
}