import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../core/auth.service';
import { HotelService } from '../displayhotels/hotel.service';
import { BookHotelData } from '../bookhotel/bookhotel.component';
import { ActivitylogService } from '../../../activitylog.service';

@Component({
  selector: 'viewhotelbooking',
  templateUrl: './viewhotelbooking.component.html',
  styleUrls: ['./viewhotelbooking.component.scss']
})
export class ViewhotelbookingComponent implements OnInit {

  bookHotelData: BookHotelData = {};
  additionalCharges: any = [];
  logs = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,    
    private hotelService: HotelService,
    private dialog: MatDialog,
    private activityLogs:ActivitylogService
  ) {
    if(data.row != null) {      
      this.bookHotelData = data.row;      
      this.hotelService.getHotelBookingsAdditionalCharges(this.bookHotelData).subscribe(data => {
        this.additionalCharges = data;
      })  
      this.activityLogs.getHotelLogs({id:data.row.id}).subscribe(data=>{
        this.logs = data
      })    
    }    
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
