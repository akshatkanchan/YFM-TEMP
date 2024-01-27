import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../../core/user';
import { MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { hotelData } from '../../hotels/addhotels/addhotels.component';
import { Observable } from 'rxjs/Observable';
import { BookHotelData } from '../../hotels/bookhotel/bookhotel.component';
import { AuthService } from '../../../core/auth.service';
import { HotelService } from '../../hotels/displayhotels/hotel.service';
import { HotelbookingsinvoiceComponent } from '../hotelbookingsinvoice/hotelbookingsinvoice.component';
import { AirlineService } from '../../airline/airlinedisp/airline.service';

@Component({
  selector: 'flightbookinginvoice',
  templateUrl: './flightbookinginvoice.component.html',
  styleUrls: ['./flightbookinginvoice.component.scss']
})
export class FlightbookinginvoiceComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={}
  dataSource = new MatTableDataSource<hotelData>();
  customerId:any;
  Booking:Observable<BookHotelData[]>;
  selectedBookings=[]
  checkedBookings:any[]=[]
  displayedColumns = ['name','from','to','departureDate','arrivalDate','price','Selector'];
  
  constructor(private auth:AuthService,
    private hotelService:HotelService,
    private flightService:AirlineService,
    @Inject (MAT_DIALOG_DATA) public data,
    private dialogRef:MatDialogRef<HotelbookingsinvoiceComponent>,
    private dialog:MatDialog) {
    console.log(data);
      this.customerId=data.temp.customer
      this.checkedBookings = data.temp.bookings
      this.selectedBookings = this.checkedBookings
   }

   ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.flightService.getFlightsAccordingToCustomer(this.customerId).subscribe(data=>{
        console.log(data)
        this.dataSource=data
      })
    })


  }

  chooseBooking(booking,event)
  {
    const index:number=this.selectedBookings.indexOf(booking)
    if(event.checked){
      this.selectedBookings.push(booking); 
    }
    else{
      this.selectedBookings.splice(index,1)
    }
    console.log(this.selectedBookings)    
  }
  isSelected(id)
  {
    
   return this.checkedBookings.find(val=>val.id===id)
    
  }
  closeDialog(){
    this.dialogRef.close(this.selectedBookings)
  }

}