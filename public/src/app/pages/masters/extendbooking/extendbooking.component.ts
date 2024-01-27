import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DutiesService } from '../../duties/duties.service';
import { Booking } from '../../operations/booking';
import { Duty } from '../../duties/duty';
import { BookingsService } from '../../operations/bookings.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-extendbooking',
  templateUrl: './extendbooking.component.html',
  styleUrls: ['./extendbooking.component.scss']
})
export class ExtendbookingComponent implements OnInit {
booking:Booking={};
duty:Duty={};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dutiesService:DutiesService,
  private bookingevice:BookingsService,private datePipe: DatePipe, private dialog:MatDialog,private matDialog:MatDialogRef<ExtendbookingComponent>) {
    console.log(data);
    this.booking=data.row;
    console.log(this.booking)
    
   }
extend()
{
  this.putValues();
  var eDate=new Date(this.booking.endDate)
  eDate.setDate(eDate.getDate()+1);
  this.duty.startDate=this.datePipe.transform(eDate,'yyyy-MM-dd')
  console.log();
  
  this.dutiesService.addduties(this.duty).subscribe();
  this.matDialog.close("yes");
}
putValues()
{
  this.duty.bid = this.booking.id;
  this.duty.cname=this.booking.cname;
  this.duty.bookBy=this.booking.bookBy;
  this.duty.bookByNo=this.booking.bookByNo;
  this.duty.bookByEmail=this.booking.bookByEmail;
  //this.duty.date= this.booking.date;  it is not same as booking date
  this.duty.passenger=this.booking.passenger;
  this.duty.passengerNo=this.booking.passengerNo; 
  this.duty.passengerEmail=this.booking.passengerEmail;
  this.duty.fromLoc=this.booking.fromLoc;
  this.duty.toLoc=this.booking.toLoc;
  this.duty.reportingTime=this.booking.reportingTime;
  this.duty.startFromGarage=this.booking.startFromGarage;
  this.duty.reportingAddress=this.booking.reportingAddress;
  this.duty.dropAddress=this.booking.dropAddress;
  this.duty.shortReportingAddress=this.booking.shortReportingAddress;
  this.duty.flightTrainNo=this.booking.flightTrainNo;
  this.duty.dispatchCenter=this.booking.dispatchCenter;
  this.duty.billTo=this.booking.billTo;
  this.duty.price=this.booking.price;
  this.duty.remarks=this.booking.remarks;
  this.duty.operatorNotes=this.booking.operatorNotes;
  this.duty.label=this.booking.label;
  this.duty.vehicleGroupId= this.booking.vehicleGroupId;
  this.duty.dutyTypeId=this.booking.dutyTypeId;
  this.duty.status=this.booking.status; 
  this.duty.ownerId = this.data.row.ownerId;
  this.duty.vehicleGroup= this.booking.vehicleGroup;
  this.duty.dutyType=this.booking.dutyType;
  this.duty.customerId = this.booking.customerId;
  this.duty.extraKms = this.booking.extraKms;
  this.duty.extraHours = this.booking.extraHours;
  this.duty.dispatchCenterId = this.booking.dispatchCenterId
  //this.booking.status;
}
  ngOnInit() {
  }

  no()
{
  this.dialog.closeAll();
}

}
