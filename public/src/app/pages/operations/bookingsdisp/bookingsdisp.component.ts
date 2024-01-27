import { Component, ViewChild,OnInit, ElementRef} from '@angular/core';
import { BookingsService} from '../bookings.service';
import { Booking } from '../booking';
import{Observable, BehaviorSubject} from 'rxjs/Rx';
import {MatSort, MatPaginator, MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import {BookingsComponent} from '../bookings/bookings.component';
import {User} from '../../../core/user';
import { AdvancepaymentComponent } from '../advancepayment/advancepayment.component';
import { SendconfirmationComponent } from '../sendconfirmation/sendconfirmation.component';
import { ImportbookingsComponent } from '../importbookings/importbookings.component';
import { AuthService } from '../../../core/auth.service';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { ExtendbookingComponent } from '../../masters/extendbooking/extendbooking.component';
import { Router } from '@angular/router';
import { SubUserService } from '../../masters/sub-users/sub-user.service';
import { SubUser } from '../../masters/sub-users/sub-user';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime, distinctUntilChanged, tap, catchError, finalize } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { of } from 'rxjs/observable/of';
import { DutyType } from '../../masters/dutytype/duty-type';
import * as moment from 'moment';
import { ExportbookingsComponent } from '../exportbookings/exportbookings.component';
import { BookingsexportComponent } from '../bookingsexport/bookingsexport.component';
import { BookingfilesComponent } from '../bookingfiles/bookingfiles.component';



@Component({
  selector: 'app-bookingsdisp',
  templateUrl: './bookingsdisp.component.html',
  styleUrls: ['./bookingsdisp.component.scss'],
})
export class BookingsdispComponent implements OnInit {
  
  isLoading = true;
  status="Booked";
  filterStart:any='';
  filterEnd: any='';
  length;
  pageSize = 10;
  pageSizeOptions = [10, 15, 25, 40];
  dataSource:BookingDataSource;
  displayedColumns = ['startDate','Customer', 'Booked by', 'Passenger','dutyType','vehicleGroup','fromLoc','toLoc','status','Duties','Options'];//,'Passenger','vgroup','dutyt','status'];
  bookings: Booking={};
  permission:SubUser={}
  user:User={
  };
  searchTerm;
  tempArray:any[];
  bookingData:any;
  ws:WebSocket;
 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild('input') input: ElementRef;
  
  constructor(private matSnackBar:MatSnackBar,
              private bookingsService:BookingsService,
              public dialog:MatDialog,
              public auth:AuthService,
              private router:Router,
              private permissionService:SubUserService
    ) {
   }

  today:any;

  rowColors(currDate,status)
  {
    if(currDate===this.today && (status==='Booked' || status==='Allotted' || status==='Dispatched') )
    {
      return '#FFE5CC'
    }
    else if(status==='Cancelled')
    {
      return 'indianred'
    }
    else if(currDate<this.today && status==='Completed')
    {
      return '#CCFFE5'
    }
    else
    {
      return 'white'
    }
  }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/,'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function(event) {
      if(event.data == this.user.ownerId+'bookings') {
        this.loadDutiesPage();
      }
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
      })
      this.today=moment().format('YYYY-MM-DD')
    this.dataSource = new BookingDataSource(this.bookingsService);
    this.dataSource.loadDuties('bookBy','','startDate','asc',0,10,'Booked','1970-01-01','2050-12-31',this.user.ownerId);
    this.dataSource.loading$.subscribe(data=>{
      if(data===true)
        this.isLoading=true;
      else
        this.isLoading=false;
    })
    this.input.nativeElement.value=''
    if(this.filterStart=='' && this.filterEnd=='')
      {
        this.bookingsService.getCount(
          this.bookings.id,
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
        this.bookingsService.getCount(
          this.bookings.id,
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
        this.bookingsService.getCount(
          this.bookings.id,
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
        this.bookingsService.getCount(
          this.bookings.id,
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
  }
  ngOnDestroy()
  {
      this.ws.close();
  }
  ngAfterViewInit() {
    fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;
                    this.loadDutiesPage();
                    if(this.filterStart=='' && this.filterEnd=='')
                    {
                      this.bookingsService.getCount(
                        this.bookings.id,
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
                      this.bookingsService.getCount(
                        this.bookings.id,
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
                      this.bookingsService.getCount(
                        this.bookings.id,
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
                      this.bookingsService.getCount(
                        this.bookings.id,
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
  }

  filter(temp:string)
  {
      if(temp=='All')
      {
        this.status='';
      }
      else
      {
        this.status=temp;
      }
      if(this.filterStart=='' && this.filterEnd=='')
      {
        this.bookingsService.getCount(
          this.bookings.id,
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
        this.bookingsService.getCount(
          this.bookings.id,
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
        this.bookingsService.getCount(
          this.bookings.id,
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
        this.bookingsService.getCount(
          this.bookings.id,
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
        this.bookingsService.getCount(
          this.bookings.id,
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
        this.bookingsService.getCount(
          this.bookings.id,
          this.input.nativeElement.value,
          this.sort.active,
          this.sort.direction,
          this.paginator.pageIndex,
          this.paginator.pageSize, 
          this.status,
          '1970-01-01',
          eDate,
          this.user.ownerId).subscribe(data=>data.map(res=>
        {
            this.length=res.count;
        }));
      }
      else if(this.filterEnd=='')
      {
        this.bookingsService.getCount(
          this.bookings.id,
          this.input.nativeElement.value,
          this.sort.active,
          this.sort.direction,
          this.paginator.pageIndex,
          this.paginator.pageSize, 
          this.status,
          sDate,
          '2050-12-31',
          this.user.ownerId).subscribe(data=>data.map(res=>
        {
            this.length=res.count;
        }));
      }
      else
      {
        this.bookingsService.getCount(
          this.bookings.id,
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
    this.input.nativeElement.value='';
    this.filterStart='';
    this.filterEnd='';

    if(this.filterStart=='' && this.filterEnd=='')
    {
      this.bookingsService.getCount(
        this.bookings.id,
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
      this.bookingsService.getCount(
        this.bookings.id,
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
      this.bookingsService.getCount(
        this.bookings.id,
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
      this.bookingsService.getCount(
        this.bookings.id,
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
    this.loadDutiesPage()
  }
   openImport(){
     this.dialog.open(ImportbookingsComponent,{autoFocus:false,disableClose:true})
   }
   
  viewDuties(row) {
    console.log(row);
    
    this.bookingsService.setEditData(row);
    this.router.navigate(['/pages/operations/dutydisp']);
  }
   selectRow(row) {
     console.log(row)
     delete row.number_of_duties;
     delete row.duties_completed;
    this.bookingsService.setEditData(row);
    this.router.navigate(['/pages/operations/bookings']);
  }
  reviewNeededRow(row) {
    console.log(row)
    delete row.number_of_duties;
    delete row.duties_completed;
    this.bookingsService.setEditData(row);
    this.router.navigate(['/pages/operations/reviewneededbookings']);
  }

  addBooking(){
    this.router.navigate(['/pages/operations/addbooking']);
  }
  createInvoice(row){
    this.bookingData=row
    this.bookingsService.setBookingId(this.bookingData)
    this.router.navigate(['/pages/masters/createinvoice'])
  }
  advancePayment(row){
    this.dialog.open(AdvancepaymentComponent,{autoFocus:false,disableClose:true, data: row});
  }
  sendConfirmation(row){
    this.dialog.open(SendconfirmationComponent,{autoFocus:false,disableClose:true, data: {row}});
  }
  deleteBooking(booking:Booking)
  {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
    if(data=='yes'){
    this.bookingsService.deleteBooking(booking).subscribe(data=>{
      if(data.errno==undefined)
      {
        // var i=this.tempArray.indexOf(booking);
        // this.tempArray.splice(i,1);
        // this.dataSource.data=this.tempArray;
        this.matSnackBar.open("One Booking Deleted","X",{duration:3000});
      }
      else
      {
        if(data.errno==1451)
        {
          window.alert("Cannot delete because you have corresponding Duties");
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
  openExport() {
    this.dialog.open(ExportbookingsComponent,{autoFocus:false,disableClose:true});
  }
  extendBooking(row){
    this.dialog.open(ExtendbookingComponent,{data:{row},autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data === "yes") {
        this.ws.send(this.user.ownerId+'bookings');
        console.log("Done")
      }
    });
  }

  cancelBooking(booking:Booking){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.bookingsService.cancelBooking(booking).subscribe(data=>{
          this.ws.send(this.user.ownerId+'bookings');
          this.matSnackBar.open("One Booking Cancelled","X",{duration:3000});
        });
      }
    })
  }

  loadDutiesPage() {
    if(this.filterStart=='' && this.filterEnd=='')
  {
    this.dataSource.loadDuties(
      this.bookings.id,
      this.input.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize, 
      this.status,
      '1970-01-01',
      '2050-12-31',
      this.user.ownerId);
  }
  else if(this.filterStart=='')
  {
    this.dataSource.loadDuties(
      this.bookings.id,
      this.input.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize, 
      this.status,
      '1970-01-01',
      this.filterEnd,
      this.user.ownerId);
  }
  else if(this.filterEnd=='')
  {
    this.dataSource.loadDuties(
      this.bookings.id,
      this.input.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize, 
      this.status,
      this.filterStart,
      '2050-12-31',
      this.user.ownerId);
  }
  else
  {
    this.dataSource.loadDuties(
      this.bookings.id,
      this.input.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize, 
      this.status,
      this.filterStart,
      this.filterEnd,
      this.user.ownerId);
  }
  }
  exportBookings() {
    this.dialog.open(ExportbookingsComponent,{autoFocus:false,disableClose:true});
  }

  uploadFiles(row){
    delete row.number_of_duties;
    delete row.duties_completed;
    this.dialog.open(BookingfilesComponent,{autoFocus:false,data:row})
  }
  
  }
  
  export class BookingDataSource implements DataSource<Booking> {
  
    private bookingSubject = new BehaviorSubject<Booking[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
  
    public loading$ = this.loadingSubject.asObservable();
  
    constructor(private bookingService:BookingsService) {}
  
    connect(collectionViewer: CollectionViewer): Observable<DutyType[]> {
        return this.bookingSubject.asObservable();
    }
  
    disconnect(collectionViewer: CollectionViewer): void {
        this.bookingSubject.complete();
        this.loadingSubject.complete();
    }
  
    loadDuties(columnName='bookBy', filter = '',sortcolumn='startDate',
                sortDirection = 'asc', pageIndex = 0, pageSize = 10, status='Booked', startDate, endDate, ownerId='') {
  
        this.loadingSubject.next(true);
  
        this.bookingService.findBookings(columnName, filter, sortcolumn,sortDirection,
            pageIndex, pageSize, status, startDate, endDate, ownerId).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(lessons => {
          var data:any[]=lessons
          var array = []
          data.forEach(element => {
            array.push(element.id)
          });

          const temp={
            idArray:array
          }

          this.bookingService.loadCompletedDuties(temp).subscribe(data=>{
            data.forEach(element => {
              var index = lessons.findIndex(x=>x.id == element.id)
              lessons[index].duties_completed = element.duties_completed
            });  
          })
          this.bookingSubject.next(lessons)
        });
    }
   
  }
  


