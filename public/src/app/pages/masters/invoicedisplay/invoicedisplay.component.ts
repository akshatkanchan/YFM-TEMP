import { Component, OnInit, ViewChild } from '@angular/core';
import { Invoice } from '../createinvoice/invoice';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { User } from '../../../core/user';
import { Router } from '@angular/router';
import { InvoiceService } from '../createinvoice/invoice.service';
import { AuthService } from '../../../core/auth.service';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';
import { speedDialFabAnimations } from './invoicedisplay.animations';
import { MailinvoiceComponent } from '../mailinvoice/mailinvoice.component';
import { MailhotelinvoiceComponent } from '../mailhotelinvoice/mailhotelinvoice.component';
import { MailflightinvoiceComponent } from '../mailflightinvoice/mailflightinvoice.component';
import { MailvisainvoiceComponent } from '../mailvisainvoice/mailvisainvoice.component';


@Component({
  selector: 'invoicedisplay',
  templateUrl: './invoicedisplay.component.html',
  styleUrls: ['./invoicedisplay.component.scss'],
  animations: speedDialFabAnimations
})

export class InvoicedisplayComponent implements OnInit {

  lengthInvoice=0;
  pageSizeInvoice=10;
  pageSizeOptionsInvoice = [10, 15, 25, 40];

  lengthHotels=0;
  pageSizeHotels=10;
  pageSizeOptionsHotels = [10, 15, 25, 40];

  lengthFlights=0;
  pageSizeFlights=10;
  pageSizeOptionsFlights = [10, 15, 25, 40];

  lengthVisa=0;
  pageSizeVisa=10;
  pageSizeOptionsVisa = [10, 15, 25, 40];

  displayedColumns=['invoiceNumber','invoiceDate','invoicePeriodFrom','invoicePeriodTo','discountAmount','taxAmount','totalAmount','status','stats','Options'];
  displayedColumnsHotels=['invoiceNumber','invoiceDate','invoicePeriodFrom','invoicePeriodTo','discountAmount','taxAmount','totalAmount','status','Options'];

  displayedColumnsFlights=['invoiceNumber','invoiceDate','invoicePeriodFrom','invoicePeriodTo','discountAmount','taxAmount','totalAmount','status','Options'];

  permission:SubUser={};
  dataSource=new MatTableDataSource<Invoice>();
  dataSourceHotels=new MatTableDataSource<Invoice>();
  dataSourceFlights=new MatTableDataSource<Invoice>();
  dataSourceVisa = new MatTableDataSource<Invoice>()
  searchTermInvoice;
  searchTermHotels;
  searchTermFlights;
  searchTermVisa;
  user:User={};
  
  constructor(private router:Router,
    private invoiceService:InvoiceService,
    private auth:AuthService,
    private dialog:MatDialog,
    private permissionService:SubUserService,
    ) { }

  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('sort2') sort2: MatSort;
  @ViewChild('sort3') sort3: MatSort;
  @ViewChild('sort4') sort4: MatSort;
  @ViewChild(MatPaginator) paginator1:MatPaginator;
  @ViewChild(MatPaginator) paginator2:MatPaginator;
  @ViewChild(MatPaginator) paginator3:MatPaginator;
  @ViewChild(MatPaginator) paginator4:MatPaginator;

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(this.permission.addCabInvoices === 0) {
          let index=this.fabButtons.findIndex(x=>x.icon==="directions_car")
          this.fabButtons.splice(index,1);
        } if(this.permission.addHotelInvoices === 0) {
          let index=this.fabButtons.findIndex(x=>x.icon==="store")
          this.fabButtons.splice(index,1);
        } if(this.permission.addFlightInvoices === 0) {
          let index=this.fabButtons.findIndex(x=>x.icon==="flight")
          this.fabButtons.splice(index,1);
        } if(this.permission.addVisaInvoices === 0) {
          let index=this.fabButtons.findIndex(x=>x.icon==="chrome_reader_mode")
          this.fabButtons.splice(index,1);
        }
        
        this.invoiceService.getInvoices(this.user).subscribe(data=>{
          this.dataSource.data=data;
          this.lengthInvoice=this.dataSource.data.length;
          this.dataSource.sort=this.sort1;
          this.dataSource.paginator=this.paginator1;
        })
      })
    })
    
    
  
  }

  hotelRetrieved = false;
  flightRetrieved = false;
  visaRetrieved = false;

  tabClick(event)
  {
    if(event.index==1)
    {
      if(this.hotelRetrieved==false)
      {
        console.log("H2");
        this.hotelRetrieved = true;
        this.invoiceService.getHotelInvoices(this.user).subscribe(data=>{
          this.dataSourceHotels=data;
          this.lengthHotels=data.length;
          this.dataSourceHotels.sort=this.sort2;
          this.dataSourceHotels.paginator=this.paginator2;
        })
      }
    }
    if(event.index==2)
    {
      if(this.flightRetrieved == false)
      {
        console.log("F2");
        this.flightRetrieved=true;
        this.invoiceService.getFlightsInvoices(this.user).subscribe(data=>{
          this.dataSourceFlights=data;
          this.lengthFlights=data.length;
          this.dataSourceFlights.sort=this.sort3;
          this.dataSourceFlights.paginator=this.paginator3;
        })
      }
    }
    if(event.index==3)
    {
      if(this.visaRetrieved == false)
      {
        console.log("V2");
        this.visaRetrieved = true;
        this.invoiceService.getVisaInvoices(this.user).subscribe(data => {
          this.dataSourceVisa=data;
          this.lengthVisa=data.length;
          this.dataSourceVisa.sort=this.sort4;
          this.dataSourceVisa.paginator=this.paginator4;
        })
      }
    }
    
  }

  searchInvoice(filterValue:string)
  {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  searchHotelInvoice(filterValue:string)
  {
    this.dataSourceHotels.filter=filterValue.trim().toLowerCase();
  }

  searchFlightInvoice(filterValue:string)
  {
    this.dataSourceFlights.filter=filterValue.trim().toLowerCase();
  }

  searchVisaInvoice(filterValue:string)
  {
    this.dataSourceVisa.filter=filterValue.trim().toLowerCase();
  }

  clear(){
    this.searchTermInvoice='';
    this.searchTermHotels='';
    this.searchTermFlights='';
    this.searchTermVisa='';
    this.dataSource.filter='';
    this.dataSourceFlights.filter='';
    this.dataSourceHotels.filter='';
    this.dataSourceVisa.filter='';
  }
  
  openInvoice(i) {
    if(i == 0) {
      this.createFlightInvoice();
    }
    else if(i == 1) {
      this.createInvoice();
    }
    else if(i == 2) {
      this.createHotelInvoice();
    }
    else if(i == 3) {
      this.createVisaInvoice();
    }
  }
  createInvoice(){
    this.router.navigateByUrl('/pages/masters/createinvoice')
  }
  createFlightInvoice(){
    this.router.navigateByUrl('/pages/masters/createflightinvoice')
  }
  createHotelInvoice(){
    this.router.navigateByUrl('/pages/masters/createhotelinvoice')
  }
  createVisaInvoice(){
    this.router.navigateByUrl('/pages/masters/createvisainvoice')
  }
  viewInvoice(row){
    // this.dialog.open(ViewinvoiceComponent,{data:row,autoFocus:false,disableClose:true});
    this.invoiceService.setEditData(row);
    this.router.navigateByUrl('/pages/masters/viewinvoice');
  }
  mailInvoice(row){
    this.dialog.open(MailinvoiceComponent,{data:row,autoFocus:false,disableClose:true, width: '750px'});
  }

  mailHotelInvoice(row){
    this.dialog.open(MailhotelinvoiceComponent,{data:row,autoFocus:false,disableClose:true});
  }

  mailFlightInvoice(row){
    this.dialog.open(MailflightinvoiceComponent,{data:row,autoFocus:false,disableClose:true});
  }

  mailVisaInvoice(row){
    this.dialog.open(MailvisainvoiceComponent,{data:row,autoFocus:false,disableClose:true});
  }

  fabButtons = [
    {
      icon: 'flight',
      click: 'createFlightInvoice()',
      tooltip: 'Flights'
    },
    {
      icon: 'directions_car',
      click: 'createInvoice()',
      tooltip: 'Cars'
    },
    {
      icon: 'store',
      click: 'createHotelInvoice()',
      tooltip: 'Hotels'
    },
    {
      icon: 'chrome_reader_mode',
      click: 'createVisaInvoice()',
      tooltip:'Visa'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';
  
  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  viewHotelInvoice(row){
    this.invoiceService.setViewHotelInvoice(row);
    this.router.navigateByUrl('/pages/masters/viewhotelinvoice')
    // this.dialog.open(ViewhotelinvoiceComponent,{data:row,autoFocus:false,disableClose:true})
  }
  viewFlightInvoice(row){
    this.invoiceService.setViewFlightInvoice(row);
    this.router.navigateByUrl('/pages/masters/viewflightinvoice')
    // this.dialog.open(ViewflightinvoiceComponent,{data:row,autoFocus:false,disableClose:true})
  }
  viewVisaInvoice(row){
    this.invoiceService.setViewVisaInvoice(row);
    this.router.navigateByUrl('/pages/masters/viewvisainvoice')
    // this.dialog.open(ViewflightinvoiceComponent,{data:row,autoFocus:false,disableClose:true})
  }

}
