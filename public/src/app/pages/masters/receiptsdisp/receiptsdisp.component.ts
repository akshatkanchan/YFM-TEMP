import { Component, OnInit, ViewChild } from '@angular/core';
import{Observable} from 'rxjs/Rx';
import {MatTableDataSource, MatSort, MatPaginator, MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import { ReceiptService } from '../addreceipts/receipt.service';
import { AddReceiptsComponent } from '../addreceipts/addreceipts.component';
import { Receipt } from '../addreceipts/receipt';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';
import { Router } from '@angular/router';
import { speedDialFabAnimations } from './receiptsdisp.animations';

@Component({
  selector: 'app-receiptsdisp',
  templateUrl: './receiptsdisp.component.html',
  styleUrls: ['./receiptsdisp.component.scss'],
  animations: speedDialFabAnimations
})
export class ReceiptsdispComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];

  lengthHotels=100;
  pageSizeHotels=5;
  pageSizeOptionsHotels = [10, 15, 25, 40];

  lengthFlights=100;
  pageSizeFlights=5;
  pageSizeOptionsFlights = [10, 15, 25, 40];

  lengthVisa=100;
  pageSizeVisa=5;
  pageSizeOptionsVisa = [10, 15, 25, 40];

  searchTerm;
  searchTermHotel;
  searchTermFlights;
  searchTermVisa;

  
  dataSource=new MatTableDataSource<Receipt>();
  dataSourceHotels=new MatTableDataSource<Receipt>();
  dataSourceFlights=new MatTableDataSource<Receipt>();
  dataSourceVisa=new MatTableDataSource<Receipt>();

  users:User={}
  tempArray1:any[];
  tempArray2:any[];
  tempArray3:any[];
  tempArray4:any[];
  displayedColumns = ['adjustment', 'bankCreditDate', 'customerGroup','date','invoice','number','paymentMode','paymentReceived','receivedInBank','tds','Options'];//,'Passenger','vgroup','dutyt','status'];
  permission:SubUser={};
  receipts: Observable<Receipt[]>;
  ws:WebSocket;


  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('sort2') sort2: MatSort;
  @ViewChild('sort3') sort3: MatSort;
  @ViewChild('sort4') sort4: MatSort;
  @ViewChild(MatPaginator) paginator1:MatPaginator;
  @ViewChild(MatPaginator) paginator2:MatPaginator;
  @ViewChild(MatPaginator) paginator3:MatPaginator;
  @ViewChild(MatPaginator) paginator4:MatPaginator;

  constructor(
    private receiptsService:ReceiptService,
    public dialog:MatDialog,
    private auth:AuthService,
    private snackBar:MatSnackBar,
    private permissionService:SubUserService,
    private router : Router
  ) { }

  selectRow(row) {
    this.dialog.open(AddReceiptsComponent,{autoFocus:false,disableClose:true,data:row}).afterClosed().subscribe(data=>{
      if(data==undefined){}
      else {
        if(data.inserted=='yes') {
          this.tempArray1.push(data.data);
          this.dataSource.data=this.tempArray1
        } 
      }
    });
  }

  addReceipt()
  {
    this.router.navigate(['pages/masters/addReceipts'])
  }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'receipt'){
        this.receiptsService.getReceipt(this.users).subscribe(data=>{
          this.tempArray1=data
          this.dataSource.data=this.tempArray1;
        })
        this.receiptsService.getHotelReceipt(this.users).subscribe(data =>{
          this.tempArray2=data
          this.dataSourceHotels.data=this.tempArray2;
        })
        this.receiptsService.getFlightReceipt(this.users).subscribe(data =>{
          this.tempArray3=data
          this.dataSourceFlights.data=this.tempArray3;
        })
        this.receiptsService.getVisaReceipt(this.users).subscribe(data =>{
          this.tempArray4=data
          this.dataSourceVisa.data=this.tempArray4;
        })
      }
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.users=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0];
        if(this.permission.manageCabReceipts === 0) {
          this.displayedColumns.pop();
        }
        if(this.permission.addCabReceipts === 0) {
          let index = this.fabButtons.findIndex(x=>x.icon==='directions_car')
          this.fabButtons.splice(index,1);
        } if(this.permission.addFlightReceipts === 0) {
          let index = this.fabButtons.findIndex(x=>x.icon==='flight')
          this.fabButtons.splice(index,1);
        } if(this.permission.addHotelReceipts === 0) {
          let index = this.fabButtons.findIndex(x=>x.icon==='dstore')
          this.fabButtons.splice(index,1);
        } if(this.permission.addVisaReceipts === 0) {
          let index = this.fabButtons.findIndex(x=>x.icon==='chrome_reader_mode')
          this.fabButtons.splice(index,1);
        }
        if(data[0].viewReceipts==1){
          this.receiptsService.getReceipt(this.users).subscribe(data=>{
            this.tempArray1=data
            this.dataSource.data=this.tempArray1;
          })
          this.receiptsService.getHotelReceipt(this.users).subscribe(data =>{
            this.tempArray2=data
            this.dataSourceHotels.data=this.tempArray2;
          })
          this.receiptsService.getFlightReceipt(this.users).subscribe(data =>{
            this.tempArray3=data
            this.dataSourceFlights.data=this.tempArray3;
          })
          this.receiptsService.getVisaReceipt(this.users).subscribe(data =>{
            this.tempArray4=data
            this.dataSourceVisa.data=this.tempArray4;
          })
        }
        else{
          window.alert("You do not have permission to view receipts")
        }
      })      
    })

    this.dataSource.sort=this.sort1;
    this.dataSource.paginator=this.paginator1;
       
    this.dataSourceHotels.sort=this.sort2;
    this.dataSourceHotels.paginator=this.paginator2;

    this.dataSourceFlights.sort=this.sort3;
    this.dataSourceFlights.paginator=this.paginator3;

    this.dataSourceVisa.sort=this.sort4;
    this.dataSourceVisa.paginator=this.paginator4;
  }

  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  searchHotel(filterValue:string)
  {
    this.dataSourceHotels.filter=filterValue.trim().toLowerCase();
  }
  searchFlights(filterValue:string)
  {
    this.dataSourceFlights.filter=filterValue.trim().toLowerCase();
  }
  searchVisa(filterValue:string)
  {
    this.dataSourceVisa.filter=filterValue.trim().toLowerCase();
  }

  clear(){
    this.searchTerm='';
    this.dataSource.filter='';
    this.searchTermFlights='';
    this.searchTermVisa='';
    this.dataSource.filter='';
    this.dataSourceFlights.filter='';
    this.dataSourceHotels.filter='';
    this.dataSourceVisa.filter='';
  }

  openReceipt(i) {
    if(i == 0) {
      this.createFlightReceipt();
    }
    else if(i == 1) {
      this.createReceipt();
    }
    else if(i == 2) {
      this.createHotelReceipt();
    }
    else if(i == 3) {
      this.createVisaReceipt();
    }
  }

  createReceipt(){
    this.router.navigateByUrl('/pages/masters/addReceipts')
  }
  createFlightReceipt(){
    this.router.navigateByUrl('/pages/masters/addFlightReceipts')
  }
  createHotelReceipt(){
    this.router.navigateByUrl('/pages/masters/addHotelReceipts')
  }
  createVisaReceipt(){
    this.router.navigateByUrl('/pages/masters/addVisaReceipts')
  }

  deleteReceipt(row){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.receiptsService.deleteReceipt(row).subscribe(data=>{
          if(data.errno==undefined)
          {
            var i=this.tempArray1.indexOf(row);
            this.tempArray1.splice(i,1);
            this.dataSource.data=this.tempArray1;
            this.snackBar.open("One Booking Deleted","X",{duration:3000});
            // this.ws.send(this.users.ownerId+'receipt');
          }
          else
          {
            if(data.errno==1451)
            {
              window.alert("Cannot delete because you have corresponding Data");
            }
            else
            {
              window.alert("Error Cannot Delete Booking");
            }
          }             
        });
      }      
    })
  }

  fabButtons = [
    {
      icon: 'flight',
      click: 'createFlightReceipt()'
    },
    {
      icon: 'directions_car',
      click: 'createInvoiceReceipt()'
    },
    {
      icon: 'store',
      click: 'createHotelReceipt()'
    },
    {
      icon: 'chrome_reader_mode',
      click: 'createVisaReceipt()'
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
}