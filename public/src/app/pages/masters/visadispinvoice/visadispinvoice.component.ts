import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Invoice } from '../createinvoice/invoice';
import { Visa } from '../../airline/addvisa/addvisa.component';
import { Observable } from 'rxjs';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { InvoiceService } from '../createinvoice/invoice.service';
import { VisaService } from '../../airline/visa/visa.service';

@Component({
  selector: 'visadispinvoice',
  templateUrl: './visadispinvoice.component.html',
  styleUrls: ['./visadispinvoice.component.scss']
})
export class VisadispinvoiceComponent implements OnInit {

  selectedCustomer: any;
  // bookings: Booking[];
  dataSource = new MatTableDataSource();
  invoice: Invoice = {};
  // editState: boolean = false;
  // bookingToEdit: Booking;
  displayedColumns = ['Customer', 'Booked by', 'Guest Name','Visa Type','From', 'To', 'Selector'];
  bookingDatabase: any;
  bookings: Observable<Visa[]>;

  selectedBookings = [];
  checkedBookings: any[] = []
  currUser: User = {};
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public dialog: MatDialogRef<VisadispinvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public auth: AuthService,
    private booking: InvoiceService,
    private visaService: VisaService,
  ) { 
    console.log(data)
    this.selectedCustomer=data.temp.customer;
    this.checkedBookings=data.temp.bookings;
    this.selectedBookings=this.checkedBookings;    
  }

  isSelected(id) {    
    return this.checkedBookings.find(val=>val.id===id)    
  }

  ngOnInit() {
    var temp = {
      customerId: this.selectedCustomer
    }
    this.visaService.getVisaByCustomer(temp).subscribe(data=> {
      this.dataSource.data=data
    })
  }
  
  chooseBooking(booking,event) {
   
    const index:number=this.selectedBookings.indexOf(booking)
    if(event.checked) {
      this.selectedBookings.push(booking); 
    }
    else {
      this.selectedBookings.splice(index,1)
    }
    //   //this.invoice.bookings.push(booking);       
  }
  
  selectBooking() {
    this.dialog.close(this.selectedBookings);
  }
}
