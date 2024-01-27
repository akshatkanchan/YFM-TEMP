import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import {MatSort, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Booking } from '../../operations/booking';
import { User } from '../../../core/user';
import { InvoiceService } from '../createinvoice/invoice.service';
import { Invoice } from '../createinvoice/invoice';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-bookingdispinvoice',
  templateUrl: './bookingdispinvoice.component.html',
  styleUrls: ['./bookingdispinvoice.component.scss']
})
export class BookingdispinvoiceComponent implements OnInit {

selectedCustomer:any;
  // bookings: Booking[];
  dataSource=new MatTableDataSource<Booking>();
  invoice:Invoice={
  };
 // editState: boolean = false;
 // bookingToEdit: Booking;
 displayedColumns = ['Customer', 'Booked by', 'Passenger','Date','Price','Selector'];//,'Passenger','vgroup','dutyt','status'];
 bookingDatabase:any;
 bookings: Observable<Booking[]>;

 selectedBookings=[];
 checkedBookings:any[]=[]
 currUser:User={
 };
 @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog:MatDialogRef<BookingdispinvoiceComponent>,@Inject(MAT_DIALOG_DATA) public data:any,public auth:AuthService,private booking:InvoiceService) { 
  //   this.userService.getUser().subscribe(data=>{
  //     this.currUser=data;

  // })

 // this.selectedBookings.push(null);
  this.selectedCustomer=data.temp.customer;
  this.checkedBookings=data.temp.bookings;
  this.selectedBookings=this.checkedBookings;
  // console.log(this.selectedBookings)
 
  
  
}

  isSelected(id)
  {
    
   return this.checkedBookings.find(val=>val.id===id)
    
  }

  ngOnInit() {
    this.booking.getCustBooking(this.selectedCustomer).subscribe(data=>
    {
      this.dataSource.data=data
    
    })
  }
  
  chooseBooking(booking:Booking,event)
  {
   
    const index:number=this.selectedBookings.indexOf(booking)
    if(event.checked)
  {
    this.selectedBookings.push(booking); 
  }
  else
  {
    this.selectedBookings.splice(index,1)
    
  }
  //   //this.invoice.bookings.push(booking);
       
  }
  selectBooking()
  {
    this.dialog.close(this.selectedBookings);
  }
}  


  
// export class BookingDatabase{
//     bookingList=new BehaviorSubject([]);
//     get data(){return this.bookingList.value};
//   constructor(private booking:InvoiceService,selectedCustomer:any){

//   this.booking.getCustBooking(selectedCustomer).subscribe((booking)=>{
//    this.bookingList.next(booking);

//   })
// }

// }
// export class BookingDataSource extends DataSource<any> {
//   sortedData;
//   constructor(private bookingDB:BookingDatabase,private sort:MatSort)
//   {
//     super();
//     this.sortedData = this.bookingDB.data.slice();
//   }
//   connect():Observable<any>
//   {
//     const bookingData=[
//       this.bookingDB.bookingList,
//       this.sort.sortChange
//     ];
//    return  Observable.merge(...bookingData).map(()=>{
//       return this.getSortedData();
//     })
    
//   }
//   disconnect(){}
//   getSortedData() {
//     const data = this.bookingDB.data.slice();
//     if (!this.sort.active || this.sort.direction == '') { return data; }
 
//     return data.sort((a, b) => {
//       let propertyA: number|string = '';
//       let propertyB: number|string = '';
 
//       switch (this.sort.active) {
//         case 'Customer': [propertyA, propertyB] = [a.cname, b.cname]; break;
//         case 'Booked by': [propertyA, propertyB] = [a.bookBy, b.bookBy]; break;
//         case 'Passenger': [propertyA, propertyB] = [a.passenger, b.passenger]; break;
//       }
 
//       let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
//       let valueB = isNaN(+propertyB) ? propertyB : +propertyB;
 
//       return (valueA < valueB ? -1 : 1) * (this.sort.direction == 'asc' ? 1 : -1);
//     });
//   }
// }
