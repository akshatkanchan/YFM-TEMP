import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../../core/user';
import { MatTableDataSource, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { hotelData } from '../../hotels/addhotels/addhotels.component';
import { AuthService } from '../../../core/auth.service';
import { HotelService } from '../../hotels/displayhotels/hotel.service';
import { Observable } from 'rxjs/Observable';
import { BookHotelData } from '../../hotels/bookhotel/bookhotel.component';

@Component({
  selector: 'hotelbookingsinvoice',
  templateUrl: './hotelbookingsinvoice.component.html',
  styleUrls: ['./hotelbookingsinvoice.component.scss']
})
export class HotelbookingsinvoiceComponent implements OnInit {


  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={}
  dataSource = new MatTableDataSource<hotelData>();
  customerId:any;
  Booking:Observable<BookHotelData[]>;
  selectedBookings=[]
  checkedBookings:any[]=[]
  displayedColumns = ['name','phoneNumber','price','hotelName','Selector'];
  
  constructor(private auth:AuthService,
    private hotelService:HotelService,
    @Inject (MAT_DIALOG_DATA) public data,
    private dialogRef:MatDialogRef<HotelbookingsinvoiceComponent>,
    private dialog:MatDialog) {
    console.log(data);
      this.customerId=data.temp.customer
      this.checkedBookings=data.temp.bookings;
      this.selectedBookings=this.checkedBookings;
   }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.hotelService.getBookings(this.customerId).subscribe(data=>{
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
