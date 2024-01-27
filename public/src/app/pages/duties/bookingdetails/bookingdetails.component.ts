import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { BookingsService } from '../../operations/bookings.service';
import { DutiesService } from '../duties.service';
import { Booking } from '../../operations/booking';

@Component({
  selector: 'bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.scss']
})
export class BookingdetailsComponent implements OnInit {

  detailsT:Booking={};
  constructor(public dialog:MatDialogRef<BookingdetailsComponent>,
    public details:DutiesService,@Inject(MAT_DIALOG_DATA) public data: any
    ) { 
        console.log(data)
        this.detailsT=data.row;
  }

  ngOnInit() {

  }
  closeDialog()
  {
    this.dialog.close();
  }

}
