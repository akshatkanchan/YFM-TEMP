import { Component, Inject, OnInit, HostListener } from '@angular/core';
import {DutyType} from './duty-type';
import {DutyTypeService} from './duty-type.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./dutytype.component.scss'],
  templateUrl: './dutytype.component.html',
})
export class DutyTypeComponent implements OnInit{

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  ngOnInit(){
    this.auth.user.subscribe(data=>{
      this.dutyType.ownerId=data[0].ownerId
    })
  }
  myValue=null;
  editState: boolean;
  onDutyTypeChange(event:any) {
    console.log(this.dutyType.name)
    if(this.dutyType.dType === 'Self Drive') {
      this.dutyType.name = 'Self Drive'
    } else {
      this.dutyType.name = ''
    }
  }
  saveDuty()
  {
    if(this.dutyType.name === '') {
      this.snackBar.open("Please enter a Duty Type name","X",{verticalPosition:'top',horizontalPosition:'right'});
    } else if(this.dutyType.dType === 'Day-KM(Outstation)' && this.dutyType.maxHrs === '') {
      this.snackBar.open("Please enter Max Hours");
    } else if(this.dutyType.dType === 'Long Duration-Total KM Daily HR(Monthly Bookings)' && this.dutyType.maxHrs === '' &&
    this.dutyType.totalKms === '' && this.dutyType.maxDays === '') {
      this.snackBar.open("Please fill all the required field","X",{verticalPosition:'top',horizontalPosition:'right'});
    } else if(this.dutyType.dType === 'HR-KM(Local)' && this.dutyType.maxHrs === '' &&this.dutyType.totalKms === '') {
      this.snackBar.open("Please fill all the required field","X",{verticalPosition:'top',horizontalPosition:'right'});
    } else if(this.dutyType.dType === 'Long Duration-Total KM and HR(Monthly Bookings)' && this.dutyType.maxHrs === '' &&
    this.dutyType.totalKms === '' && this.dutyType.maxDays === '') {
      this.snackBar.open("Please fill all the required field","X",{verticalPosition:'top',horizontalPosition:'right'});
    } else  {
      this.dutyTypeService.addDutyType(this.dutyType).subscribe(data=>{
        if(data.affectedRows==1){
          this.param.inserted='yes';
          this.dutyType.id=data.insertId;
          this.param.data=this.dutyType;
  
          this.matDialogRef.close(this.param);
        }
      },err=>{},()=>{
        this.snackBar.open("Duty Type Added",null,{duration:3000});
      });
    }
    
  }
  
  updateDuty()
  {
    
    if(this.dutyType.name === '') {
      this.snackBar.open("Please enter a Duty Type name","X",{verticalPosition:'top',horizontalPosition:'right'});
    } else if(this.dutyType.dType === 'Day-KM(Outstation)' && this.dutyType.maxHrs === '') {
      this.snackBar.open("Please enter Max Hours");
    } else if(this.dutyType.dType === 'Long Duration-Total KM Daily HR(Monthly Bookings)' && this.dutyType.maxHrs === '' &&
    this.dutyType.totalKms === '' && this.dutyType.maxDays === '') {
      this.snackBar.open("Please fill all the required field","X",{verticalPosition:'top',horizontalPosition:'right'});
    } else if(this.dutyType.dType === 'HR-KM(Local)' && this.dutyType.maxHrs === '' &&this.dutyType.totalKms === '') {
      this.snackBar.open("Please fill all the required field","X",{verticalPosition:'top',horizontalPosition:'right'});
    } else if(this.dutyType.dType === 'Long Duration-Total KM and HR(Monthly Bookings)' && this.dutyType.maxHrs === '' &&
    this.dutyType.totalKms === '' && this.dutyType.maxDays === '') {
      this.snackBar.open("Please fill all the required field","X",{verticalPosition:'top',horizontalPosition:'right'});
    } else  {
      this.dutyTypeService.updateDutyType(this.dutyType).subscribe(data=>{

      },err=>{},()=>{
        this.snackBar.open("Duty type updated","X",{duration:4000});
        this.matDialogRef.close();
      });
    }
  }
constructor(private matDialogRef:MatDialogRef<DutyTypeComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private dutyTypeService:DutyTypeService,
   private dialog:MatDialog,
   private auth:AuthService,
   private snackBar:MatSnackBar
   ){
  if(data.row!=null)
  {
    this.editState=true;
    this.dutyType=data.row
  }
  else
  {
    this.editState=false;
  }
}

closeDialog()
{
  this.dialog.closeAll()
}
isG2GChecked:boolean=false;
checkP2P(event){
  if(event.checked === true) {
    this.dutyType.g2g=false
    this.isG2GChecked=false;
  }
}
checkG2G(event){
  if(event.checked === true) {
    this.isG2GChecked=true
    this.dutyType.p2p=false
  } if(event.checked === false){
    this.isG2GChecked = false
  }
}
param={
  inserted:'no',
  data:null
}
dutyType:DutyType={
   dType:'',
   name:'',
   maxKms:'', 
   maxHrs:'', 
   totalKms:'',
   totalHrs:'',
   maxDays:'',
   ownerId:'',
   p2p:false,
   g2g:false,
   dontCalculateGarageStartKmTime:false,
   dontCalculateGarageEndKmTime:false
}
}
