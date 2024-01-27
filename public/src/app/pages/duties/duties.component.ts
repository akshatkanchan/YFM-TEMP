import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatSort,MatDialog, MatPaginator, MatSnackBar} from '@angular/material';
import { DutiesService } from './duties.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataSource, CollectionViewer, SelectionModel } from '@angular/cdk/collections';
import { Duty } from './duty';
import 'rxjs/add/observable/merge';
import { Booking } from '../operations/booking';
import { DriverallotmentComponent } from './driverallotment/driverallotment.component';
import { NewpettycashComponent } from './newpettycash/newpettycash.component';
import { CreateplacardComponent } from './createplacard/createplacard.component';
import { AddremovelabelsComponent } from './addremovelabels/addremovelabels.component';
import { AllotsupportersComponent } from './allotsupporters/allotsupporters.component';
import { DetailsComponent } from './details/details.component';
import { DatePipe } from '../../../../node_modules/@angular/common';
import { ClosedutyComponent } from './closeduty/closeduty.component';
import { DutyType } from '../masters/dutytype/duty-type';
import { catchError, finalize, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { User } from '../../core/user';
import { AuthService } from '../../core/auth.service';
import { DutySlipComponent } from './duty-slip/duty-slip.component';
import { ConfirmComponent } from '../modals/confirm/confirm.component';
import { SubUserService } from '../masters/sub-users/sub-user.service';
import { CloseSupplierDutyComponent } from './close-supplier-duty/close-supplier-duty.component';
import * as moment from 'moment'
import { Router } from '@angular/router';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { CallComponent } from './call/call.component';
import { MultiplesupplierallotmentComponent } from './multiplesupplierallotment/multiplesupplierallotment.component';
import { SendinfoComponent } from './sendinfo/sendinfo.component';
import { BusinessSettings } from '../circles/businesssetting/businesssetting.component';
import { OfflineallottmentComponent } from './offlineallottment/offlineallottment.component';
import { SubUser } from '../masters/sub-users/sub-user';
import { SelfdriveComponent } from './selfdrive/selfdrive.component';
import { ExportdutiesComponent } from './exportduties/exportduties.component';
import { resolve } from 'q';
import { SupplierService } from '../masters/addsuppliers/supplier.service';
import { ViewdutyslipComponent } from './viewdutyslip/viewdutyslip.component';
import { BookingsService } from '../operations/bookings.service';

@Component({
  selector: 'app-duties',
  templateUrl: './duties.component.html',
  styleUrls: ['./duties.component.scss'],
  providers: [DatePipe]
})

export class DutiesComponent implements OnInit {

  filterClicked="Booked"
  businessSettings: BusinessSettings={};
  isLoading = true;
  filterStart:any='';
  filterEnd: any='';
  from:''
  to:''
  status='Booked';
  length;
  pageSize = 10; 
  searchStart;
  searchEnd;
  ws:WebSocket;
  pageSizeOptions = [10, 15, 25, 40];
  dataSource:DutyDataSource;
  selection = new SelectionModel<DutyDataSource>(true, []);
  permission:SubUser={};
  displayedColumns = ['startDate','cname', 'passenger','driver','dutyType',
  'reportingAddress','vehicle'];
  selector='selector';
  selectorEnabled:boolean=false;
  multipleSelected:boolean=false;
  onlySendInfo:boolean=false;
  selectedDuties:any[]=[]
  Duties: Observable<Duty[]>;

  screenWidth:any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild('input') input: ElementRef;

  tempdetails: Observable<Duty[]>;
  user:User={}
  allottedColor = '#0091ff';
  dispatchedColor = '#7500da';
  completedColor = '#02b975'

  constructor(
    private detail:DutiesService,
    private DutiesService:DutiesService,
    public dialog:MatDialog,
    private datePipe: DatePipe, 
    private authService:AuthService,
    private permissionService:SubUserService,
    private router:Router,
    private snackBar:MatSnackBar,
    private supplierService:SupplierService,
  ) { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    // const numRows = this.dataSource.data.length;
    // return numSelected === numRows;
  }

  addColumn() {
    if(this.selectorEnabled==false) {
      this.selectorEnabled=true;
      this.displayedColumns.unshift(this.selector);
      this.displayedColumns.pop();
      console.log(this.displayedColumns)
    }
  }

  sendInfo() {
    this.dialog.open(SendinfoComponent, {data: this.selectedDuties, autoFocus:false, disableClose:true}).afterClosed().subscribe(data => {
      console.log(data)
      this.selectedDuties = []
      this.removeColumn()
    })
    console.log(this.selectedDuties);
  }
  sendInfo2(row) {
    this.dialog.open(SendinfoComponent,{data: row,autoFocus:false,disableClose:true}).afterClosed().subscribe()
  }
  removeColumn(){
    this.displayedColumns.shift();
    this.displayedColumns.push('Options')
    this.selectorEnabled=false
    this.multipleSelected=false
    this.selectedDuties=[];
  }
  printDutySlip(row){
    this.dialog.open(DutySlipComponent,{ data:row,autoFocus:false,disableClose:true});
  }
  viewDutySlip(row){
    this.dialog.open(ViewdutyslipComponent,{ data:row,autoFocus:false,disableClose:true});
  }
  chooseDuties(booking,event){
    const index:number=this.selectedDuties.indexOf(booking)
    console.log(index)
    if(event.checked){
      this.multipleSelected=true;
      this.selectedDuties.push(booking)
      this.selectedDuties.forEach(element => {
        console.log(element)
        if(element.status=='Completed'){
          this.onlySendInfo=true
          this.snackBar.open("Completed Duty Selected","X")
        }
      });
      console.log(this.selectedDuties,event)
    }
    else if(event.checked==false){
      this.selectedDuties.splice(index,1)
      this.selectedDuties.forEach(element => {
        if(element.status=='Completed'){
        }
        else{
          this.onlySendInfo=false
        }
      });
      if(this.selectedDuties.length<=0){
        this.multipleSelected=false;
      }
    }
  }
   openImport(){
    //  this.dialog.open(ImportexcelComponent,{autoFocus:false,disableClose:true})
   }
   details(row){
    //  this.detail.getDuties(this.user).subscribe(data=>{
    //   this.tempdetails=data
    //  });
     this.dialog.open(DetailsComponent,{
      autoFocus:false,disableClose:true,
       data:{
         row,
         details:'true'
        }
      });
   }
   selectMultipleAllotments(){
     this.dialog.open(MultiplesupplierallotmentComponent,{data:this.selectedDuties,autoFocus:false,disableClose:true});
   }
   selectAllotments(row){
    this.dialog.open(DriverallotmentComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
      if(data=='yes'){
        this.ws.send(this.user.ownerId+"duty");   
      }
    });
  }
  addRemoveLabels(row){
    this.dialog.open(AddremovelabelsComponent,{autoFocus:false,disableClose:true,data:{row}});
  }
  allotSupporters(row){
    this.dialog.open(AllotsupportersComponent,{autoFocus:false,disableClose:true,data:{row}});
  }
  selectRow(row) {
    delete row.labelArray;
    localStorage.setItem('dutyedit',JSON.stringify(row));
    this.router.navigate(['/pages/editduties'])
    // this.dialog.open(DutieseditComponent,{autoFocus:false,disableClose:true,data:{row}});
  }
  addBooking(){
    this.router.navigate(['/pages/operations/addbooking']);
  }
  addPettyCash(row){
    this.dialog.open(NewpettycashComponent,{autoFocus:false,disableClose:true,data:{row}});
  }
  viewBookings(row){
    this.dialog.open(BookingdetailsComponent,{autoFocus:false,disableClose:true,
      data:{
        row,
        details:'true'
      }
    });
  }
  createPlacard(row){
    this.dialog.open(CreateplacardComponent,{autoFocus:false,disableClose:true,data:{row}});
  }
  dispatched(row)
  {
    console.log(row);
    
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        if(row.status=="Allotted")
        {
          if(row.dutyType == 'Self Drive')
          {
            alert("To dispatch this duty use the mobile application and upload vehicle videos/images")
          }
          else
          {
            if(row.dispatchCenterId == null && row.driverUserId != null) {
              this.snackBar.open("Enter Dispatch Center","X",{duration: 3000});
            }
            else {
              row.status="Dispatched"
              row.subStatus="Dispatched"
              this.DutiesService.updateDutiesDispatched(row);
              this.ws.send(this.user.ownerId+"duty");
            }
          }
        }
        else if(row.status=='Dispatched')
        {
          row.status="Allotted"
          if(row.driverUserId != null) {
            row.subStatus="Accepted"
          }
          else {
            row.subStatus="Allotted"
          }
          this.DutiesService.updateDutiesDispatched(row);
          this.ws.send(this.user.ownerId+"duty");   
        }
        else {
          window.alert("Please Allot Driver and Vehicle Before Dispatching");
        }
      }
    })
  }
  trackVehicle(row) {
    localStorage.setItem('trackVehicle',JSON.stringify(row));
    this.router.navigate(['/pages/tracking/trackVehicle'])
  }
  call(row){
    this.dialog.open(CallComponent,{autoFocus:false,disableClose:true,data:row})
  }
  openExport(){
    this.dialog.open(ExportdutiesComponent,{autoFocus:false,disableClose:true})
  }
  openCloseDuty(row){
    // if(row.subStatus != 'Ended') {
    //   this.snackBar.open("The Current duty is ongoing", "X", {duration: 3000});
    // }
    // else {
      this.DutiesService.checkSelfDrive(row).subscribe(data=>{
        if(data[0].dType=="Self Drive")
        {
          this.dialog.open(SelfdriveComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
            if(data=='yes')
            {
              this.dialog.open(ClosedutyComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
                if(data=='yes')
                {
                  this.ws.send(this.user.ownerId+"duty");
                  this.ws.send(row.id+"closeTracker");
                }
              })
            }
          })
        }
        else
        {
          this.dialog.open(ClosedutyComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
            if(data=='yes')
            {
              this.ws.send(this.user.ownerId+"duty");
              this.ws.send(row.id+"closeTracker");
            }
          })
        }
      })
    // }    
  }

  openCloseSupplierDuty(row){
    this.dialog.open(CloseSupplierDutyComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
      if(data=='yes')
      {
        this.ws.send(this.user.ownerId+"duty");
      }
    })
  }
  
  cancelDuty(row){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        row.driverId=null;
        row.vehicleId=null;
        row.status="Cancelled";
        row.driver=null;
        row.vehicle=null;
        this.DutiesService.updateduties(row);
        this.DutiesService.countIncompleteDuties(row).subscribe(data=>{
          if(data[0].cnt == 1){
            var temp={
              id:row.bid,
              status:"Completed",
              ownerId:row.ownerID
            }
            var userName={
              userName:this.user.name,
            }
            let completeBooking=true;
            this.DutiesService.updateBooking(temp,userName,completeBooking);
            }
        },err=>({}),()=>{
          this.ws.send(this.user.ownerId+"duty");
        })
      }
    })
  }
  confirmDuty(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        row.status="Booked";
        this.DutiesService.updateduties(row);
        var temp={
          id:row.bid,
          status:"Booked",
          ownerId:row.ownerID
        }
        var userName={
          userName:this.user.name,
        }
        let completeBooking=false;
        this.DutiesService.updateBooking(temp,userName,completeBooking);
        this.ws.send(this.user.ownerId+"duty");
      }
    })
  }
  clearAllotment(row)
  {
    row.driverId=null;
    row.vehicleId=null;
    row.status="Booked";
    row.driver=null;
    row.vehicle=null;
    row.supplierId=null;
    row.supplier=null;
    this.DutiesService.updateduties(row);
    this.ws.send(this.user.ownerId+"duty");
  }
  setOfflineAllotment(row)
  {
    this.dialog.open(OfflineallottmentComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
      if(data=='yes')
      {
        this.ws.send(this.user.ownerId+"duty");
      }
    })
  }
  today;

  rowColors(currDate,status)
  {
    if(currDate===this.today && (status==='Booked' || status==='Allotted' || status==='Dispatched'))
    {
      return '#FFE5CC'
    }
    else if(currDate<=this.today && status==='Completed')
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

  setTextColor(color) {
    var r, g, b, hsp;
    
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
      
        // If HEX --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        
        r = color[1];
        g = color[2];
        b = color[3];
    } 
    else {
      
        
        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }
    
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
    );
    

    // Using the HSP value, determine whether the color is light or dark
    if (hsp<150) {
        return '#ffffff';
    } 
    else {

        return '#000000';
    }
  }

  ngOnInit() {

    this.screenWidth=window.innerWidth;

    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'duty') {
        this.loadDutiesPage();
        if(this.filterStart=='' && this.filterEnd=='') {
          this.DutiesService.getCount(
            this.duty.id,
            this.input.nativeElement.value,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize, 
            this.status,
            '1970-01-01',
            '2050-12-31',
            this.user.ownerId
          ).subscribe(data=>data.map(res => {
            this.length=res.count;
          }));
        }
        else if(this.filterStart=='') {
          this.DutiesService.getCount(
            this.duty.id,
            this.input.nativeElement.value,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize, 
            this.status,
            '1970-01-01',
            this.filterEnd,
            this.user.ownerId
          ).subscribe(data=>data.map(res => {
            this.length=res.count;
          }));
        }
        else if(this.filterEnd=='') {
          this.DutiesService.getCount(
            this.duty.id,
            this.input.nativeElement.value,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize, 
            this.status,
            this.filterStart,
            '2050-12-31',
            this.user.ownerId
          ).subscribe(data=>data.map(res=> {
            this.length=res.count;
          }));
        }
        else {
          this.DutiesService.getCount(
            this.duty.id,
            this.input.nativeElement.value,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize, 
            this.status,
            this.filterStart,
            this.filterEnd,
            this.user.ownerId
          ).subscribe(data=>data.map(res => {
            this.length=res.count;
          }));
        }
      }
    }.bind(this);
    this.authService.user.subscribe(data => {
      this.user=data[0];
      this.authService.permissions.subscribe(data=>{
        this.permission=data[0]
      })      
      this.authService.businessSettings.subscribe(data => { 
        console.log(data)       
        this.businessSettings = data
        if(this.businessSettings.ShowVehicleGroup) {
          this.displayedColumns.push('vehicleGroup')
        }
        if(this.businessSettings.ShowFromCity) {
          this.displayedColumns.push('fromLoc')
        }
        if(this.businessSettings.ShowDropAddress) {
          this.displayedColumns.push('dropAddress')
        }
        if(this.businessSettings.ShowGarageStartTimeInsteadOfReportingTime) {
          this.displayedColumns.push('startFromGarage')
        }
        if(!this.businessSettings.ShowGarageStartTimeInsteadOfReportingTime) {
          this.displayedColumns.push('reportingTime')
        }
        if(this.businessSettings.ShowRemarks) {
          this.displayedColumns.push('remarks')
        }        
        this.displayedColumns.push('labelArray','status','Options')
        console.log(this.displayedColumns)
      })
      this.today=moment().format('YYYY-MM-DD')
      this.dataSource = new DutyDataSource(this.DutiesService);
      this.dataSource.loadDuties('bookBy','','startDate','asc',0,10,'Booked','1970-01-01','2050-12-31',this.from,this.to, this.user.ownerId);
      this.dataSource.loading$.subscribe(data=>{
        if(data===true)
          this.isLoading=true;
        else
          this.isLoading=false;
      })
      this.input.nativeElement.value=''
      if(this.filterStart=='' && this.filterEnd=='') {
        this.DutiesService.getCount(
          this.duty.id,
          this.input.nativeElement.value,
          this.sort.active,
          this.sort.direction,
          this.paginator.pageIndex,
          this.paginator.pageSize, 
          this.status,
          '1970-01-01',
          '2050-12-31',
          this.user.ownerId
        ).subscribe(data=>data.map(res => {
          this.length=res.count;
        }));
      }
      else if(this.filterStart=='') {
        this.DutiesService.getCount(
          this.duty.id,
          this.input.nativeElement.value,
          this.sort.active,
          this.sort.direction,
          this.paginator.pageIndex,
          this.paginator.pageSize, 
          this.status,
          '1970-01-01',
          this.filterEnd,
          this.user.ownerId
        ).subscribe(data=>data.map(res => {
          this.length=res.count;
        }));
      }
      else if(this.filterEnd=='') {
        this.DutiesService.getCount(
          this.duty.id,
          this.input.nativeElement.value,
          this.sort.active,
          this.sort.direction,
          this.paginator.pageIndex,
          this.paginator.pageSize, 
          this.status,
          this.filterStart,
          '2050-12-31',
          this.user.ownerId
        ).subscribe(data=>data.map(res=> {
          this.length=res.count;
        }));
      }
      else {
        this.DutiesService.getCount(
          this.duty.id,
          this.input.nativeElement.value,
          this.sort.active,
          this.sort.direction,
          this.paginator.pageIndex,
          this.paginator.pageSize, 
          this.status,
          this.filterStart,
          this.filterEnd,
          this.user.ownerId
        ).subscribe(data=>data.map(res => {
          this.length=res.count;
        }));
      }
    })
    
        
    // this.socket.on('Duties Updated',()=>{
    //   this.loadDutiesPage();
    // })
  }
  ngAfterViewInit() {
    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadDutiesPage();
          if(this.filterStart=='' && this.filterEnd=='')
          {
            this.DutiesService.getCount(this.duty.id,
              this.input.nativeElement.value,
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex,
              this.paginator.pageSize, 
              this.status,
              '1970-01-01',
              '2050-12-31',
              this.user.ownerId).subscribe(data=>data.map(res=>
            {
                this.length=res.count;
            }));
          }
          else if(this.filterStart=='')
          {
            this.DutiesService.getCount(this.duty.id,
              this.input.nativeElement.value,
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex,
              this.paginator.pageSize, 
              this.status,
              '1970-01-01',
              this.filterEnd,
              this.user.ownerId).subscribe(data=>data.map(res=>
            {
                this.length=res.count;
            }));
          }
          else if(this.filterEnd=='')
          {
            this.DutiesService.getCount(this.duty.id,
              this.input.nativeElement.value,
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex,
              this.paginator.pageSize, 
              this.status,
              this.filterStart,
              '2050-12-31',
              this.user.ownerId).subscribe(data=>data.map(res=>
            {
                this.length=res.count;
            }));
          }
          else
          {
            this.DutiesService.getCount(this.duty.id,
              this.input.nativeElement.value,
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex,
              this.paginator.pageSize, 
              this.status,
              this.filterStart,
              this.filterEnd,
              this.user.ownerId).subscribe(data=>data.map(res=>
            {
                this.length=res.count;
            }));
            }
        })
      )
      .subscribe();

  // reset the paginator after sorting
  this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

  // on sort or paginate events, load a new page
  Object.assign(this.sort.sortChange, this.paginator.page)
  .pipe(
      tap(() => this.loadDutiesPage())
  )
  .subscribe();
  console.log(this.dataSource);
}
    
  filter(temp:string)
  {

    this.filterClicked=temp
    console.log(temp)
    if(this.selectorEnabled==true){
      this.displayedColumns.splice(0,1);
      this.displayedColumns.push('Options');
      this.selectorEnabled=false;
      this.multipleSelected=false;
      this.onlySendInfo=false; 
    }
    
    if(temp=='All')
    {
      this.filterStart='';
      this.filterEnd='';
      this.status=''
    }
    else if(temp=='Upcoming')
    {
      this.status = '';
      this.filterStart = this.today;
      this.filterEnd = moment().add(3,'days').format("YYYY-MM-DD");
    }
    else if(temp=='Pending')
    {
      this.filterStart='';
      this.filterEnd='';
      this.status='pending';
    }
    else
    {
      this.filterStart='';
      this.filterEnd='';
      this.status=temp;
    }

    if(this.filterStart=='' && this.filterEnd=='')
    {
      console.log(this.filterStart)
      this.DutiesService.getCount(this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        '1970-01-01',
        '2050-12-31',
        this.user.ownerId).subscribe(data=>data.map(res=>
      {
          this.length=res.count;
      }));
    }
    else if(this.filterStart=='')
    {
      this.DutiesService.getCount(this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        '1970-01-01',
        this.filterEnd,
        this.user.ownerId).subscribe(data=>data.map(res=>
      {
          this.length=res.count;
      }));
    }
    else if(this.filterEnd=='')
    {
      this.DutiesService.getCount(this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        this.filterStart,
        '2050-12-31',
        this.user.ownerId).subscribe(data=>data.map(res=>
      {
          this.length=res.count;
      }));
    }
    else
    {
      this.DutiesService.getCount(this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        this.filterStart,
        this.filterEnd,
        this.user.ownerId).subscribe(data=>data.map(res=>
      {
          this.length=res.count;
      }));
    }
    this.paginator._pageIndex=0;
    this.loadDutiesPage()
  }

  filterByDate()
  {
    let sDate=moment(this.filterStart).format('YYYY-MM-DD');
    let eDate=moment(this.filterEnd).format('YYYY-MM-DD');

    if(this.filterStart=='' && this.filterEnd=='')
    {
      this.DutiesService.getCount(this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        '1970-01-01',
        '2050-12-31',
        this.user.ownerId).subscribe(data=>data.map(res=>
      {
          this.length=res.count;
      }));
    }
    else if(this.filterStart=='')
    {
      this.DutiesService.getCount(this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        '1970-01-01',
        this.filterEnd,
        this.user.ownerId).subscribe(data=>data.map(res=>
      {
          this.length=res.count;
      }));
    }
    else if(this.filterEnd=='')
    {
      this.DutiesService.getCount(this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        this.filterStart,
        '2050-12-31',
        this.user.ownerId).subscribe(data=>data.map(res=>
      {
          this.length=res.count;
      }));
    }
    else
    {
      this.DutiesService.getCount(this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        sDate,
        eDate,
        this.user.ownerId).subscribe(data=>data.map(res=>
      {
          this.length=res.count;
      }));
    }
    this.loadDutiesPage()
  }
  
  search(){
    // this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  clear(){
    this.input.nativeElement.value=''
    this.filterStart='';
    this.filterEnd='';
    if(this.filterStart=='' && this.filterEnd=='')
    {
      this.DutiesService.getCount(this.duty.id,
        '',
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        '1970-01-01',
        '2050-12-31',
        this.user.ownerId).subscribe(data=>data.map(res=>
      {
          this.length=res.count;
      }));
    }
    else if(this.filterStart=='')
    {
      this.DutiesService.getCount(this.duty.id,
        '',
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        '1970-01-01',
        this.filterEnd,
        this.user.ownerId
      ).subscribe(data=>data.map(res=>{
        this.length=res.count;
      }));
    }
    else if(this.filterEnd=='')
    {
      this.DutiesService.getCount(this.duty.id,
        '',
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        this.filterStart,
        '2050-12-31',
        this.user.ownerId
      ).subscribe(data=>data.map(res=>{
        this.length=res.count;
      }));
    }
    else
    {
      this.DutiesService.getCount(this.duty.id,
        '',
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        this.filterStart,
        this.filterEnd,
        this.user.ownerId).subscribe(data=>data.map(res=>
      {
          this.length=res.count;
      }));
    }
    this.loadDutiesPage()
  }
 
  addDuties(tempid,bookings:Booking)
  {
    this.bookings=bookings;
    this.loadDutyVal();
    if(this.bookings.startDate!=this.bookings.endDate)
    {
      var sDate=new Date(this.bookings.startDate)
      var eDate=new Date(this.bookings.endDate)
   
      this.duty.bid=tempid;
     //sDate.setDate(sDate.getDate() + 1);
     //eDate.setDate(eDate.getDate() +1);
   
      while(sDate<=eDate)
      {
        this.duty.startDate=this.datePipe.transform(sDate,'yyyy-MM-dd')
        sDate.setDate(sDate.getDate() + 1);
        this.DutiesService.addduties(this.duty).subscribe(res=>res);
      }
    }
    else
    {
      var sDate=new Date(this.bookings.startDate)
      this.duty.bid=tempid;
      this.duty.startDate=this.datePipe.transform(sDate,'yyyy-MM-dd')
      return this.DutiesService.addduties(this.duty).subscribe(res=>res);
    }
  }
  addMonthlyDuties(tempid,bookings:Booking,startDate, dutyType, dutyTypeId, vehicleGroup, vehicleGroupId) {

    this.bookings=bookings;
    this.loadDutyVal();
    this.duty.startDate = startDate;
    this.duty.dutyType = dutyType;
    this.duty.dutyTypeId = dutyTypeId;
    this.duty.vehicleGroup = vehicleGroup;
    this.duty.vehicleGroupId = vehicleGroupId;
    this.duty.bid=tempid;
    return this.DutiesService.addduties(this.duty).subscribe(res=>res);
  }
 
  updateDuties()
  {/*
    this.dutiesCollection=this.afs.collection('Duties', ref => ref.where('bid', '==', `${tempid}`));
    this.duties = this.afs.collection('Duties').snapshotChanges().map(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as Duty;
        data.id=a.payload.doc.id;
        return data;
      })
    });
    
this.duties.forEach(element => {
      this.duty=element.pop();
      this.loadDutyVal();
    
      //this.DutiesService.updateduties(this.duty);
    });*/
  }
  bookings:Booking={
    status:'',
    cname:'',
    date:'',
    passenger:'',
    vehicleGroup:'',
    dutyType:'',
    bookBy:'',
    bookByNo:'',
    bookByEmail:'',
    passengerNo:'',
    passengerEmail:'',
    fromLoc:'',
    toLoc:'',
    startDate:null,
    endDate:null,
    reportingTime:'',
    startFromGarage:'',
    reportingAddress:'',
    dropAddress:'',
    shortReportingAddress:'',
    flightTrainNo:'',
    dispatchCenter:'',
    billTo:'',
    price:'',
    remarks:'',
    operatorNotes:'',
    label:'',
    vehicleGroupId:'',
    dutyTypeId:'',
    customerId:'',
    ccId:'',
    poNumber:'',
    extraHours:'',
    extraKms:''
  }
  duty:Duty={
    status:'',
    cname:'',
    startDate:null,
    passenger:'',
    vehicleGroup:'',
    dutyType:'',
    bookBy:'',
    bookByNo:'',
    bookByEmail:'',
    passengerNo:'',
    passengerEmail:'',
    fromLoc:'',
    toLoc:'',
    reportingTime:'',
    startFromGarage:'',
    reportingAddress:'',
    dropAddress:'',
    shortReportingAddress:'',
    flightTrainNo:'',
    dispatchCenter:'',
    billTo:'',
    price:'',
    remarks:'',
    operatorNotes:'',
    label:'',
    driverId:null,
    vehicleId:null,
    ownerId:'',
    dutyTypeId:null,
    vehicleGroupId:null,
    customerId:null,
    supplierId:null,
    supplierName:'',
    extraHours:'',
    extraKms:''
    
  }
  
  loadDutyVal()
  {
    this.duty.bookBy=this.bookings.bookBy;
    //this.duty.date= this.bookings.date;  it is not same as booking date
    this.duty.passenger=this.bookings.passenger;
    this.duty.vehicleGroup= this.bookings.vehicleGroup;
    this.duty.dutyType=this.bookings.dutyType;
    this.duty.status=this.bookings.status; 
    this.duty.cname=this.bookings.cname;
    this.duty.bookByNo=this.bookings.bookByNo;
    this.duty.bookByEmail=this.bookings.bookByEmail;
    this.duty.passenger=this.bookings.passenger;
    this.duty.passengerNo=this.bookings.passengerNo; 
    this.duty.passengerEmail=this.bookings.passengerEmail;
    this.duty.fromLoc=this.bookings.fromLoc;
    this.duty.toLoc=this.bookings.toLoc;
    //this.duty.endDate=this.bookings.endDate;
    this.duty.reportingTime=this.bookings.reportingTime;
    this.duty.startFromGarage=this.bookings.startFromGarage;
    this.duty.reportingAddress=this.bookings.reportingAddress;
    this.duty.dropAddress=this.bookings.dropAddress;
    this.duty.shortReportingAddress=this.bookings.shortReportingAddress;
    this.duty.flightTrainNo=this.bookings.flightTrainNo;
    this.duty.dispatchCenter=this.bookings.dispatchCenter;
    this.duty.billTo=this.bookings.billTo;
    this.duty.price=this.bookings.price;
    this.duty.remarks=this.bookings.remarks;
    this.duty.operatorNotes=this.bookings.operatorNotes;
    this.duty.label=this.bookings.label;
    this.duty.vehicleGroup=this.bookings.vehicleGroup;
    this.duty.dutyType=this.bookings.dutyType;
    this.bookings.status;
    this.duty.vehicleGroupId=this.bookings.vehicleGroupId;
    this.duty.dutyTypeId=this.bookings.dutyTypeId;
    this.duty.ownerId=this.bookings.ownerID;
    this.duty.customerId=this.bookings.customerId;
    this.duty.startDate=this.bookings.startDate;
    this.duty.extraHours=this.bookings.extraHours;
    this.duty.extraKms=this.bookings.extraKms;
    this.duty.dispatchCenterId=this.bookings.dispatchCenterId;
  }

  loadDutiesPage() {

    if(this.filterStart=='' && this.filterEnd=='')
    {
      this.dataSource.loadDuties(
        this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        '1970-01-01',
        '2050-12-31',
        this.from,
        this.to,
        this.user.ownerId
      );
    }
    else if(this.filterStart=='')
    {
      this.dataSource.loadDuties(
        this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        '1970-01-01',
        this.filterEnd,
        this.from,
        this.to,
        this.user.ownerId
      );
    }
    else if(this.filterEnd=='')
    {
      this.dataSource.loadDuties(
        this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        this.filterStart,
        '2050-12-31',
        this.from,
        this.to,
        this.user.ownerId
      );
    } 
    else
    {
      this.dataSource.loadDuties(
        this.duty.id,
        this.input.nativeElement.value,
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize, 
        this.status,
        this.filterStart,
        this.filterEnd,
        this.from,
        this.to,
        this.user.ownerId
      );
    }

  }

}

export class DutyDataSource implements DataSource<Duty> {

  private dutySubject = new BehaviorSubject<Duty[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private dutiesService:DutiesService) {}

  connect(collectionViewer: CollectionViewer): Observable<DutyType[]> {
      return this.dutySubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.dutySubject.complete();
      this.loadingSubject.complete();
  }
  loadDuties(columnName='bookBy', filter = '',sortcolumn='startDate',
              sortDirection = 'asc', pageIndex = 0, pageSize = 10, status='Booked', startDate, endDate,from,to, ownerId='') {

      this.loadingSubject.next(true);

      this.dutiesService.findDuties(columnName, filter, sortcolumn,sortDirection,
          pageIndex, pageSize, status, startDate, endDate,from,to, ownerId).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(lessons => {
        // console.log(lessons)
        var i=0;
        this.array=lessons;
        var idArray = [];
        var driverIdArray = [];
        this.array.forEach(element => {
          element.labelArray=[];
          lessons[i]=element;
          i++;
          idArray.push(element.id)
          if(element.driverId != null) {
            driverIdArray.push(element.driverId);
          }          
        });
        // console.log(this.array)
        this.loadLabels(idArray)
        if(driverIdArray.length > 0) {
          this.loadDriverUserId(driverIdArray)
        }        
        this.dutySubject.next(lessons)
      });
  }
  array:any[]=[];
  
loadLabels(idArray)
{
    var temp={
      idArray:idArray
    }
    this.dutiesService.getLabels(temp).subscribe(data=>{
      data.forEach(element => {
        var tempIndex=this.array.findIndex(x=>x.id==element.dutyId)
        if(tempIndex>=0)
        {
            this.array[tempIndex].labelArray.push(element)
        }
      });
    })
}

loadDriverUserId(driverIdArray)
{  
  var temp = {
    idArray:driverIdArray
  }
  var tempIndex = 0
  this.dutiesService.getDriverUserId(temp).subscribe(data => {
    this.array.forEach(element1 => {      
      data.forEach(element2 => {        
        if(element1.driverId == element2.id) {
          this.array[tempIndex].phoneNumber = element2.phoneNumber
          this.array[tempIndex].driverUserId = element2.userId     
        }
      });
      tempIndex += 1;
    })    
  })
}

}
