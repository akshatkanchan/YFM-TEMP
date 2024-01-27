import { Component, OnInit, Inject } from '@angular/core';
import { CircleService } from '../../circles/circle.service';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { Duty } from '../duty';
import * as $ from 'jquery';
import { Http } from '@angular/http';
import { SenddutytosuppliersComponent } from '../senddutytosuppliers/senddutytosuppliers.component';
import { SupplierService } from '../../masters/addsuppliers/supplier.service';


declare var Twilio: any;

@Component({
  selector: 'sendinfo',
  templateUrl: './sendinfo.component.html',
  styleUrls: ['./sendinfo.component.scss']
})
export class SendinfoComponent implements OnInit {

  duty:Duty={};
  callNumber:any='';
  calling:boolean= true;
  mailSubject;
  mailBody;
  mail:boolean=false;
  user:User={};
  supplierObs:any[];
  selectedSuppliers: any[] = [];
  selectedDuties: any[] = [];
  multipleSelected:boolean=false;
  constructor(
    private circleService:CircleService,
    private snackBar:MatSnackBar,
    private auth:AuthService,
    private http:Http,
    private dialog: MatDialog,
    private supplierService: SupplierService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data.length >= 1) {
        this.selectedDuties = data;
        console.log(data)
      }
      else {
        this.selectedDuties[0] = data;
      }
     }

  ngOnInit() {
    this.auth.user.subscribe(data => {
      this.user=data[0]
      var temp3 = {
        ownerId: this.user.ownerId,
        fromLoc: this.selectedDuties[0].fromLoc,
        vehicleGroupId: this.selectedDuties[0].vehicleGroupId
      }
      this.supplierService.getDistinctSuppliers(temp3).subscribe(data => {
        console.log(data)
        this.supplierObs = data;
      })
      // var temp = {
      //   ownerId:this.user.ownerId
      // }
      // this.circleService.getCircle(temp).subscribe( res => {
      //   this.supplierObs=res;
      //   console.log(this.supplierObs)
      // })
    })
  }

  makeCall(number)
  {
    this.calling=false;
    this.callNumber=number
  }

  callExotel(number)
  {
    this.http.post('/Voip/exotelCall',number).subscribe();
  }
  makeAppCall(number){
    var temp={
      userId: this.user.id,
      number:number
    }
    this.http.post('/Voip/makeAppCall',temp).subscribe();
  }
  // sendMail(email){
  //   var temp={
  //     email:email,
  //     date:this.duty.startDate,
  //     subject:this.mailSubject,
  //     mailBody:this.mailBody,
  //     vehicle:this.duty.vehicle,
  //   }
  //   console.log(temp)
  //   this.http.post('/Voip/sendMail',temp).subscribe(data=>{
  //     console.log(data)
      
  //   })
  // }
  chooseSuppliers(supplier,event){
    console.log(this.selectedSuppliers);
    const index:number=this.selectedSuppliers.indexOf(supplier)
    console.log(index)
     if(event.checked){
      // this.multipleSelected=true;
      this.selectedSuppliers.push(supplier)
      this.selectedSuppliers.forEach(element => {
        console.log(element)        
      });
       console.log(this.selectedSuppliers,event)
    }
    else if(event.checked==false){
      this.selectedSuppliers.splice(index,1)      
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  send() {
    this.dialog.closeAll();
    this.dialog.open(SenddutytosuppliersComponent ,{data: [this.selectedDuties, this.selectedSuppliers],autoFocus:false,disableClose:true })
  }

}
