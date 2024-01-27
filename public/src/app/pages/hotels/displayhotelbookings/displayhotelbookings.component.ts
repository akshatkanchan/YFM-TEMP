import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../core/user';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { hotelData, AddhotelsComponent } from '../addhotels/addhotels.component';
import { AuthService } from '../../../core/auth.service';
import { HotelService } from '../displayhotels/hotel.service';
import { Router } from '@angular/router';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { BookhotelComponent } from '../bookhotel/bookhotel.component';
import { BookingsService } from '../../operations/bookings.service';
import { HotelAdvancepaymentComponent } from '../hotel-advancepayment/hotel-advancepayment.component';
import { SubUser } from '../../masters/sub-users/sub-user';
import { ViewhotelbookingComponent } from '../viewhotelbooking/viewhotelbooking.component';
import * as moment from 'moment';
import { SendhotelconfirmationComponent } from '../sendhotelconfirmation/sendhotelconfirmation.component';
import { ExporthotelsComponent } from '../exporthotels/exporthotels.component';
import { HotelFilesComponent } from '../hotel-files/hotel-files.component';

@Component({
  selector: 'displayhotelbookings',
  templateUrl: './displayhotelbookings.component.html',
  styleUrls: ['./displayhotelbookings.component.scss']
})
export class DisplayhotelbookingsComponent implements OnInit {

  searchTerm:any;
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={}
  dataSource = new MatTableDataSource<hotelData>();
  tempArray:any[];
  displayedColumns = ['billedTo','guestName','hotelName','checkOutDate','status','Options'];

  bookingData:any;
  permission:SubUser={};
  ws:WebSocket;

  screenWidth:any;
  filterClicked="Booked"
  isLoading: boolean = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(
    private auth:AuthService,
    private hotelService:HotelService, 
    private dialog: MatDialog,
    private router:Router,
    private bookingsService: BookingsService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.screenWidth=window.innerWidth;
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'hotelbooking')
      var body = {
        ownerId: this.user.ownerId,
        status: 'Booked'
      }
      this.hotelService.getHotelBookings(body).subscribe(data=>{
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0];
        
      })
      var body = {
        ownerId: this.user.ownerId,
        status: 'Booked'
      }
      this.hotelService.getHotelBookings(body).subscribe(data=>{
        console.log(data)
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    })
    this.today=moment().format('YYYY-MM-DD')
  }

  ngOnDestroy() {
    this.ws.close();
  }
  openExport() {
    this.dialog.open(ExporthotelsComponent,{autoFocus:false,disableClose:true});
  }
  newBooking() {
    // this.router.navigateByUrl('/pages/hotels/bookroom')
    this.selectRow(null);
  }

  selectRow(row) {
    console.log(row)
    this.dialog.open(BookhotelComponent, {autoFocus:false,disableClose:true, data:{row}}).afterClosed().subscribe(data => {
      if(data == undefined) {
        console.log('no')
      }
      else {
        console.log('yes')
        if(data.inserted == 'yes') {
          this.tempArray.push(data.data);
          this.dataSource.data = this.tempArray;
          this.length = data.length;
          console.log(data.data)
        } 
      }
       
    });
  }

  viewDetails(row) {
    this.dialog.open(ViewhotelbookingComponent, {autoFocus:false,disableClose:true, data:{row}})
  }

  completeBooking(row) {
    row.status = 'Completed';
    console.log(row);
    this.hotelService.updateHotelBooking(row).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Booking Complete","X",{duration: 3000});
    })
  }

  cancelBooking(row) {
    row.status = 'Cancelled';
    console.log(row);
    this.hotelService.updateHotelBooking(row).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Booking Cancelled","X",{duration: 3000});
    })
  }

  deleteHotelBooking(row){
    console.log("delete called")
    this.dialog.open(ConfirmComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.hotelService.deleteHotelBooking(row).subscribe(data=>{
          if(data.errno==undefined){
            var i=this.tempArray.indexOf(row);
            this.tempArray.splice(i,1);
            this.dataSource.data=this.tempArray;            
          }
          console.log("deleted")
        });
        
      }
      else{
        if(data.errno==1451){
          window.alert("Cannot delete because you have corresponding data");
        }
        else{
          window.alert("Error: Cannot be Deleted")
        }
      }
    })
   
  }

  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter=""
  }
  createInvoice(row){
    this.bookingData=row
    this.bookingsService.setBookingId(this.bookingData)
    this.router.navigate(['/pages/masters/createhotelinvoice'])
  }

  advancePayment(row){
    this.dialog.open(HotelAdvancepaymentComponent,{autoFocus:false,disableClose:true, data: row});
  }

  filter(temp:string) {
    this.dataSource.data = [];
    this.isLoading = true;    
    this.filterClicked=temp
    console.log(temp)    
    if(temp == 'All') {
      temp = '%%'
    }
    this.paginator._pageIndex=0;
    var body = {
      ownerId: this.user.ownerId,
      status: temp
    }
    this.hotelService.getHotelBookings(body).subscribe(data => {
      this.tempArray=data;
      this.dataSource.data=this.tempArray;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    })
  }

  today;
  rowColors(currDate,status)
  {        
    
    if(currDate<this.today && status==='Completed')
    {
      return '#CCFFE5'
    }
    else if(status==='Cancelled')
    {
      return 'lightcoral'
    }
    else
    {
      return 'white'
    }
  }

  sendConfirmation(row) {
    this.dialog.open(SendhotelconfirmationComponent,{autoFocus:false,disableClose:true, data: {row}})
  }
  
  uploadFiles(row){
    this.dialog.open(HotelFilesComponent,{autoFocus:false,data:row})
  }
}
