import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Duty } from '../../duties/duty';
import { SubUser } from '../../masters/sub-users/sub-user';
import { User } from '../../../core/user';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DutiesService } from '../../duties/duties.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../core/auth.service';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { Booking } from '../booking';
import * as moment from 'moment'
import { AddremovelabelsComponent } from '../../duties/addremovelabels/addremovelabels.component';
import { CallComponent } from '../../duties/call/call.component';
import { DriverallotmentComponent } from '../../duties/driverallotment/driverallotment.component';
import { Router } from '@angular/router';
import { OfflineallottmentComponent } from '../../duties/offlineallottment/offlineallottment.component';
import { SendinfoComponent } from '../../duties/sendinfo/sendinfo.component';
import { DutySlipComponent } from '../../duties/duty-slip/duty-slip.component';
import { CreateplacardComponent } from '../../duties/createplacard/createplacard.component';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { SelfdriveComponent } from '../../duties/selfdrive/selfdrive.component';
import { ClosedutyComponent } from '../../duties/closeduty/closeduty.component';
import { NewpettycashComponent } from '../../duties/newpettycash/newpettycash.component';
import { CloseSupplierDutyComponent } from '../../duties/close-supplier-duty/close-supplier-duty.component';
import { BookingdetailsComponent } from '../../duties/bookingdetails/bookingdetails.component';
import { DetailsComponent } from '../../duties/details/details.component';
import { ActivitylogService } from '../../../activitylog.service';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'dutydisp',
  templateUrl: './dutydisp.component.html',
  styleUrls: ['./dutydisp.component.scss']
})
export class DutydispComponent implements OnInit {

  length;
  pageSize=10;
  pageSizeOptions = [10, 15, 25, 40];
  displayedColumns = ['startDate','cname', 'bookBy', 'passenger','driver','dutyType',
  'reportingAddress','vehicle'];
  dataSource=new MatTableDataSource<Duty>();
  permission:SubUser={};
  searchTerm;
  user:User={};
  ws:WebSocket;
  tempArray = [];
  businessSettings: BusinessSettings={};
  bookings:Booking={};
  logs = [];
  idArray=[]

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(
    private DutiesService: DutiesService,
    public dialog:MatDialog,
    private snackBar:MatSnackBar,
    private authService:AuthService,
    private router:Router,
    private activityLogs:ActivitylogService
  ) { }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'dutydisp')
      this.DutiesService.getDutiesByBooking(this.bookings).subscribe(data => {
        console.log(data);

        var idArray=[]
        this.tempArray=data;

        this.tempArray.forEach(element=>{
          idArray.push(element.id)
        })

        this.loadLabels(idArray)
        this.dataSource.data=this.tempArray;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })      
    }.bind(this);

    var bk = localStorage.getItem('uclueldata');
    if(bk == null || bk == undefined)
    {
      this.router.navigateByUrl('/pages/operations/bookingsdisp')
    }
    
    this.bookings = JSON.parse(bk)
    console.log(this.bookings);
    
    this.activityLogs.getBookingLogs({id:this.bookings.id}).subscribe(data=>{
      this.logs = data
    })

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
        else if(this.businessSettings.ShowDropAddress) {
          this.displayedColumns.push('dropAddress')
        }
        else if(this.businessSettings.ShowGarageStartTimeInsteadOfReportingTime) {
          this.displayedColumns.push('startFromGarage')
        }
        else if(!this.businessSettings.ShowGarageStartTimeInsteadOfReportingTime) {
          this.displayedColumns.push('reportingTime')
        }
        else if(this.businessSettings.ShowRemarks) {
          this.displayedColumns.push('remarks')
        }        
        this.displayedColumns.push('labelArray','status', 'Options')
        console.log(this.displayedColumns)
      })
      this.today=moment().format('YYYY-MM-DD')
      this.DutiesService.getDutiesByBooking(this.bookings).subscribe(data => {
        console.log(data);
        this.tempArray=data;

        this.tempArray.forEach(element=>{
          console.log(this.idArray);
          
          this.idArray.push(element.id)
        })

      }, err=>{}, ()=>{
        console.log(this.idArray);
        this.loadLabels(this.idArray)
      })
    })
  }

  today;

  rowColors(currDate,status)
  {
    if(currDate===this.today && (status==='Allotted' || status==='Dispatched' || status==='Booked') )
    {
      return '#FFE5CC'
    }
    else if(currDate<this.today && status==='Completed')
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

  addRemoveLabels(row){
    this.dialog.open(AddremovelabelsComponent,{autoFocus:false,disableClose:true,data:{row}});
  }

  call(row){
    this.dialog.open(CallComponent,{autoFocus:false,disableClose:true,data:row})
  }

  selectAllotments(row){
    this.dialog.open(DriverallotmentComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
      if(data=='yes'){
        this.ws.send(this.user.ownerId+"duty");   
      }
    });
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

  selectRow(row) {
    localStorage.setItem('dutyedit',JSON.stringify(row));
    this.router.navigate(['/pages/editduties'])
    // this.dialog.open(DutieseditComponent,{autoFocus:false,disableClose:true,data:{row}});
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

  sendInfo2(row) {
    this.dialog.open(SendinfoComponent,{data: row,autoFocus:false,disableClose:true}).afterClosed().subscribe()
  }

  printDutySlip(row){
    this.dialog.open(DutySlipComponent,{ data:row,autoFocus:false,disableClose:true});
  }

  createPlacard(row){
    this.dialog.open(CreateplacardComponent,{autoFocus:false,disableClose:true,data:{row}});
  }

  dispatched(row)
  {
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
            row.status="Dispatched"
            this.DutiesService.updateDutiesDispatched(row);
            this.ws.send(this.user.ownerId+"duty");    
          }
        }
        else if(row.status=='Dispatched')
        {
          row.status="Allotted"
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

  openCloseDuty(row) {
    this.DutiesService.checkSelfDrive(row).subscribe(data => {
      if(data[0].dType == "Self Drive") {
        this.dialog.open(SelfdriveComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data => {
          if(data == 'yes') {
            this.dialog.open(ClosedutyComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data => {
              if(data=='yes') {
                this.ws.send(this.user.ownerId+"duty");
                this.ws.send(row.id+"closeTracker");
              }
            })
          }
        })
      }
      else {
        this.dialog.open(ClosedutyComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data => {
          if(data=='yes') {
            this.ws.send(this.user.ownerId+"duty");
            this.ws.send(row.id+"closeTracker");
          }
        })
      }
    })
  }

  addPettyCash(row){
    this.dialog.open(NewpettycashComponent,{autoFocus:false,disableClose:true,data:{row}});
  }

  openCloseSupplierDuty(row){
    this.dialog.open(CloseSupplierDutyComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
      if(data=='yes')
      {
        this.ws.send(this.user.ownerId+"duty");
      }
    })
  }

  viewBookings(row){
    this.dialog.open(BookingdetailsComponent,{autoFocus:false,disableClose:true,
      data:{
        row,
        details:'true'
      }
    });
  }

  cancelDuty(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes') {
        row.driverId=null;
        row.vehicleId=null;
        row.status="Cancelled";
        row.driver=null;
        row.vehicle=null;
        this.DutiesService.updateduties(row);
        this.ws.send(this.user.ownerId+"duty");
      }
    })
  }

  loadLabels(idArray)
  {
  console.log(this.tempArray);
    this.DutiesService.getLabels({idArray:idArray}).subscribe(data=>{
      data.forEach(element => {
        
        var tempIndex=this.tempArray.findIndex(x=>x.id==element.dutyId)
        console.log(tempIndex);
        if(tempIndex>=0)
        {
          if(this.tempArray[tempIndex].labelArray == undefined) {
            this.tempArray[tempIndex].labelArray = [element]
          }
          else {
            this.tempArray[tempIndex].labelArray.push(element)
          }
        }
      });
      
    },err=>{},()=>{
      this.dataSource.data=this.tempArray;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data);
    })
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
}
