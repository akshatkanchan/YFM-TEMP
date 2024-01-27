import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../core/user';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../../core/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AddvisaComponent } from '../addvisa/addvisa.component';
import { VisaService } from './visa.service';
import { MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { VisaAdvancepaymentComponent } from '../visa-advancepayment/visa-advancepayment.component';
import { SubUser } from '../../masters/sub-users/sub-user';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import * as moment from 'moment';
import { ViewvisabookingComponent } from '../viewvisabooking/viewvisabooking.component';
import { SendvisaconfirmationComponent } from '../sendvisaconfirmation/sendvisaconfirmation.component';
import { ExportvisaComponent } from '../exportvisa/exportvisa.component';
import { VisaFilesComponent } from '../visa-files/visa-files.component';

@Component({
  selector: 'visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit {

  searchTerm:any;
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={}
  dataSource = new MatTableDataSource();
  tempArray:any[];
  displayedColumns = ['cname','visaType','visaCost','from','to', 'status', 'Options'];

  ws:WebSocket;
  bookingData:any;
  permission:SubUser={};

  screenWidth:any;
  filterClicked="Booked"
  isLoading: boolean = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(
    private auth:AuthService, 
    private dialog: MatDialog,
    private visaService: VisaService,
    private snackbar: MatSnackBar,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.screenWidth=window.innerWidth;
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'visa')
      var body = {
        ownerId: this.user.ownerId,
        status: 'Booked'
      }
      this.visaService.getVisa(body).subscribe(data=>{
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
        this.permission=data[0];
      })
      var body = {
        ownerId: this.user.ownerId,
        status: 'Booked'
      }
      this.visaService.getVisa(body).subscribe(data => {
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
    this.dialog.open(ExportvisaComponent,{autoFocus:false,disableClose:true});
  }
  selectRow(row) {
    console.log(row)
    this.dialog.open(AddvisaComponent,{data: {row}, autoFocus:false,disableClose:true}).afterClosed().subscribe(data => {
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
    this.dialog.open(ViewvisabookingComponent, {autoFocus:false,disableClose:true, data:{row}})
  }

  completeBooking(row) {
    row.from = moment(row.from).format("YYYY-MM-DD");
    row.to = moment(row.to).format("YYYY-MM-DD");
    row.status = 'Completed';
    console.log(row);
    this.visaService.updateVisa(row).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Booking Complete","X",{duration: 3000});
    })
  }

  cancelBooking(row) {
    row.from = moment(row.from).format("YYYY-MM-DD");
    row.to = moment(row.to).format("YYYY-MM-DD");
    row.status = 'Cancelled';
    console.log(row);
    this.visaService.updateVisa(row).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Booking Cancelled","X",{duration: 3000});
    })
  }

  deleteVisa(row){
    console.log("delete called")
    this.dialog.open(ConfirmComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.visaService.deleteVisa(row).subscribe(data=>{
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

  createInvoice(row){
    this.bookingData=row
    // this.bookingsService.setBookingId(this.bookingData)
    this.router.navigate(['/pages/masters/createvisainvoice'])
  }

  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter=""
  }

  advancePayment(row){
    this.dialog.open(VisaAdvancepaymentComponent,{autoFocus:false,disableClose:true, data: row});
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
    this.visaService.getVisa(body).subscribe(data => {
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
    this.dialog.open(SendvisaconfirmationComponent,{autoFocus:false,disableClose:true, data: {row}})
  }

  uploadFiles(row){
    this.dialog.open(VisaFilesComponent,{autoFocus:false,data:row})
  }
}
