import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FlightDetails } from '../bookairline/bookairline.component';
import { ActivitylogService } from '../../../activitylog.service';

@Component({
  selector: 'viewflightbooking',
  templateUrl: './viewflightbooking.component.html',
  styleUrls: ['./viewflightbooking.component.scss']
})
export class ViewflightbookingComponent implements OnInit {

  flightDetails: FlightDetails = {};
  roundTrip: boolean;
  internationalFlight: boolean;
  connectingFlight: boolean;
  logs = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,    
    private dialog: MatDialog,
    private activityLogs:ActivitylogService
  ) { 
    if(data.row != null) {
      console.log(data.row)
      this.flightDetails = data.row;      
      if(data.row.isInternational == 1) {        
        this.internationalFlight = true;
        // this.bookFlight.patchValue({
        //   'internationalRadioGroup': 'international'
        // // })
        // this.internationalToCtrl.setValue(data.row.to);
        // this.internationalFromCtrl.setValue(data.row.from);
      }
      else if(data.row.isInternational == 0) {
        this.internationalFlight = false;
        // this.bookFlight.patchValue({
        //   'internationalRadioGroup': 'domestic'
        // })
        // this.domesticToCtrl.setValue(data.row.to);
        // this.domesticFromCtrl.setValue(data.row.from);     
      }
      if(data.row.flightNoReturn != null) {
        this.roundTrip = true;
      }
      else if(data.row.flightNoReturn == null) {
        this.roundTrip = false;
      }
      if(data.row.flightNoConnecting != null) {
        this.connectingFlight = true;
      }
      if(data.row.flightNoConnecting == null) {
        this.connectingFlight = false;
      }
      if(data.row.flightNoConnectingReturn != null) {
        this.connectingFlight = true;
        this.roundTrip = true;
      }
      this.activityLogs.getFlightLogs({id:data.row.id}).subscribe(data=>{
        console.log(data);
        this.logs = data
      })
    }
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialog.closeAll()
  }
}
