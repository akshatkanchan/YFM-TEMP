import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../core/user';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { BookairlineComponent, FlightDetails } from '../bookairline/bookairline.component';
import { AirlineService } from './airline.service';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { BookingsService } from '../../operations/bookings.service';
import { AirlineAdvancepaymentComponent } from '../airline-advancepayment/airline-advancepayment.component';
import { SubUser } from '../../masters/sub-users/sub-user';
import * as moment from 'moment';
import { ViewflightbookingComponent } from '../viewflightbooking/viewflightbooking.component';
import { SendairlineconfirmationComponent } from '../sendairlineconfirmation/sendairlineconfirmation.component';
import { FlightticketComponent } from '../flightticket/flightticket.component';
import { FileuploadService } from '../../../fileupload.service';
import { ExportbookingsComponent } from '../exportbookings/exportbookings.component';
import { AirlineFilesComponent } from '../airline-files/airline-files.component';

@Component({
  selector: 'airlinedisp',
  templateUrl: './airlinedisp.component.html',
  styleUrls: ['./airlinedisp.component.scss']
})
export class AirlinedispComponent implements OnInit {
  
  searchTerm:any;
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={}
  dataSource = new MatTableDataSource<FlightDetails>();
  tempArray:any[];
  displayedColumns = ['customerName','guestName','from','to', 'date', 'status','Options'];

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
    private dialog: MatDialog,
    private router:Router, 
    private airlineService: AirlineService,
    private bookingsService: BookingsService,
    private snackBar: MatSnackBar,
    private uploadService: FileuploadService
  ) { }

  ngOnInit() {
    this.screenWidth=window.innerWidth;
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    console.log(this.ws);
    
    this.ws.onmessage = function (event) {
      console.log(this.ws);
      if(event.data==this.user.ownerId+'airline')
      var body = {
        ownerId: this.user.ownerId,
        status: 'Booked'
      }
      this.airlineService.getFlights(body).subscribe(data=>{
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data => {
        this.permission=data[0]
      })
      var body = {
        ownerId: this.user.ownerId,
        status: 'Booked'
      }
      this.airlineService.getFlights(body).subscribe(data => {
        console.log(data)
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    })
    this.today=moment().format('YYYY-MM-DD')
  }
  openExport() {
    this.dialog.open(ExportbookingsComponent,{autoFocus:false,disableClose:true});
  }
  selectRow(row) {
    console.log(row)
    this.dialog.open(BookairlineComponent,{data: {row}, autoFocus:false,disableClose:true}).afterClosed().subscribe(data => {
      if(data == undefined) {
        console.log('no')
      }
      else {
        console.log('yes')
        if(data.inserted == 'yes') {
          this.tempArray.push(data.data);
          this.dataSource.data = this.tempArray          
          console.log(data.data)
        } 
      }
    })
  }

  viewDetails(row) {
    this.dialog.open(ViewflightbookingComponent, {autoFocus:false,disableClose:true, data:{row}})
  }

  uploadTicket(row) {
    this.dialog.open(FlightticketComponent, {autoFocus:false,disableClose:true, data:{row}})
  }

  completeBooking(row) {
    row.status = 'Completed';
    row.departureDate = moment(row.departureDate).format("YYYY-MM-DD");
    if(row.arrivalDate != null) {
      row.arrivalDate = moment(row.arrivalDate).format("YYYY-MM-DD");
    } 
    console.log(row);
    this.airlineService.updateFlights(row).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Booking Complete","X",{duration: 3000});
    })
  }

  cancelBooking(row) {
    row.status = 'Cancelled';
    row.departureDate = moment(row.departureDate).format("YYYY-MM-DD");
    if(row.arrivalDate != null) {
      row.arrivalDate = moment(row.arrivalDate).format("YYYY-MM-DD");
    } 
    console.log(row);
    this.airlineService.updateFlights(row).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Booking Cancelled","X",{duration: 3000});
    })
  }

  deleteFlight(row){
    console.log("delete called")
    this.dialog.open(ConfirmComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.airlineService.deleteFlights(row).subscribe(data=>{
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
    this.router.navigate(['/pages/masters/createflightinvoice'])
  }

  advancePayment(row){
    this.dialog.open(AirlineAdvancepaymentComponent,{autoFocus:false,disableClose:true, data: row});
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
    this.airlineService.getFlights(body).subscribe(data => {
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
    this.dialog.open(SendairlineconfirmationComponent,{autoFocus:false,disableClose:true, data: {row}})
  }

  viewTicket(row,temp){
    if(temp == 'ticket')
    {
      this.uploadService.getPresignedUrl(this.user.companyName,row.ticket,'flightTickets').subscribe(data=>{
        window.open(data._body,'_blank')
      })
    }
    
    if(temp == 'returnTicket')
    {
      this.uploadService.getPresignedUrl(this.user.companyName,row.returnTicket,'flightTickets').subscribe(data=>{
        window.open(data._body,'_blank')
      })
    }
  }

  uploadFiles(row){
    this.dialog.open(AirlineFilesComponent,{autoFocus:false,data:row})
  }
}