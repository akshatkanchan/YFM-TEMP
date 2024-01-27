import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTabGroup, MatDialog } from '@angular/material';
import { Branch } from '../new-branch/new-branch.component';
import { User } from '../../../core/user';
import { SubUser } from '../../masters/sub-users/sub-user';
import { AuthService } from '../../../core/auth.service';
import { ContactlogsService } from '../contactlogs.service';
import { DetailsComponent } from '../../duties/details/details.component';
import { DutiesService } from '../../duties/duties.service';
import { elementClass } from '@angular/core/src/render3/instructions';
import { async } from '@angular/core/testing';

@Component({
  selector: 'contactlogs',
  templateUrl: './contactlogs.component.html',
  styleUrls: ['./contactlogs.component.scss']
})
export class ContactlogsComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  dataSource=new MatTableDataSource<Branch>();
  displayedColumnsDuty=['log','date','userName','dutyId'];
  displayedColumnsBookings=['log','date','userName','bookingId'];
  displayedColumnsFlights=['log','date','userName','flightBookingId'];
  displayedColumnsHotels=['log','date','userName','hotelBookingId'];
  displayedColumnsVisa=['log','date','userName','visaBookingId'];
  user:User={};
  permission:SubUser={}
  searchTerm;
  ws:WebSocket;

  lengthDuty;
  pageSizeDuty=5;
  pageSizeOptionsDuty = [10, 15, 25, 40];

  lengthBooking;
  pageSizeBooking=5;
  pageSizeOptionsBooking = [10, 15, 25, 40];

  lengthFlights;
  pageSizeFlights=5;
  pageSizeOptionsFlights = [10, 15, 25, 40];

  lengthHotels;
  pageSizeHotels=5;
  pageSizeOptionsHotels = [10, 15, 25, 40];

  lengthVisa;
  pageSizeVisa=5;
  pageSizeOptionsVisa = [10, 15, 25, 40];

  sampleDuty:any[]=[];
  dataSourceDuty = new MatTableDataSource<any>();
  dataSourceBooking = new MatTableDataSource<any>();
  dataSourceFlight = new MatTableDataSource<any>();
  dataSourceHotel = new MatTableDataSource<any>();
  dataSourceVisa = new MatTableDataSource<any>();

  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('sort2') sort2: MatSort;
  @ViewChild('sort3') sort3: MatSort;
  @ViewChild('sort4') sort4: MatSort;
  @ViewChild('sort5') sort5: MatSort;
  @ViewChild('paginator1') paginator1:MatPaginator;
  @ViewChild('paginator2') paginator2:MatPaginator;
  @ViewChild('paginator3') paginator3:MatPaginator;
  @ViewChild('paginator4') paginator4:MatPaginator;
  @ViewChild('paginator5') paginator5:MatPaginator;
  @ViewChild('tabGroup') tabGroup: MatTabGroup

  constructor(private auth:AuthService,private contactLogsService:ContactlogsService,private dialog:MatDialog,
    private dutyService:DutiesService) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.contactLogsService.getDutyContactLogs(this.user).subscribe(data=>{
        data.forEach(element => {
          var str = element.log
          var res = str.split(" on");
          var res1=res[1].split(" at");
          var res2=res1[1].split("by");
          let finalData = {
            id:element.id,
            dutyId:element.dutyId,
            log:res[0]+" at"+res2[0],
            userName:res2[1],
            date:res1[0]
          }
          this.sampleDuty.push(finalData)
        });
        this.dataSourceDuty.data=this.sampleDuty
        console.log(this.dataSourceDuty);
      })
    })
  }
  search(value) {

  }
  clear() {

  }
  tabChanged()
  {
    console.log(this.tabGroup.selectedIndex);
    if(this.tabGroup.selectedIndex==1)
    {
      this.contactLogsService.getBookingsContactLogs(this.user).subscribe(data=>{
        this.sampleDuty=[];
        data.forEach(element => {
          var str = element.log
          var res = str.split(" on");
          var res1=res[1].split(" at");
          var res2=res1[1].split("by");
          let finalData = {
            id:element.id,
            bookingId:element.bookingId,
            log:res[0]+" at"+res2[0],
            userName:res2[1],
            date:res1[0]
          }
          this.sampleDuty.push(finalData)
        });
        this.dataSourceBooking.data=this.sampleDuty
        console.log(this.dataSourceBooking);
      })
    }
    if(this.tabGroup.selectedIndex==2)
    {
      this.contactLogsService.getFlightContactLogs(this.user).subscribe(data=>{
        this.sampleDuty=[];
        data.forEach(element => {
          var str = element.log
          var res = str.split(" on");
          var res1=res[1].split(" at");
          var res2=res1[1].split("by");
          let finalData = {
            id:element.id,
            flightBookingId:element.flightBookingId,
            log:res[0]+" at"+res2[0],
            userName:res2[1],
            date:res1[0]
          }
          this.sampleDuty.push(finalData)
        });
        this.dataSourceFlight.data=this.sampleDuty
        console.log(this.dataSourceFlight);
      })
    }
    if(this.tabGroup.selectedIndex==3)
    {
      this.contactLogsService.getHotelContactLogs(this.user).subscribe(data=>{
        this.sampleDuty=[];
        data.forEach(element => {
          var str = element.log
          var res = str.split(" on");
          var res1=res[1].split(" at");
          var res2=res1[1].split("by");
          let finalData = {
            id:element.id,
            hotelBookingId:element.hotelBookingId,
            log:res[0]+" at"+res2[0],
            userName:res2[1],
            date:res1[0]
          }
          this.sampleDuty.push(finalData)
        });
        this.dataSourceHotel.data=this.sampleDuty
        console.log(this.dataSourceHotel);
      })
    }
    if(this.tabGroup.selectedIndex==4)
    {
      this.contactLogsService.getVisaContactLogs(this.user).subscribe(data=>{
        this.sampleDuty=[];
        data.forEach(element => {
          var str = element.log
          var res = str.split(" on");
          var res1=res[1].split(" at");
          var res2=res1[1].split("by");
          let finalData = {
            id:element.id,
            visaId:element.visaId,
            log:res[0]+" at"+res2[0],
            userName:res2[1],
            date:res1[0]
          }
          this.sampleDuty.push(finalData)
        });
        this.dataSourceVisa.data=this.sampleDuty
        console.log(this.dataSourceVisa);
      })
    }
  }
  selectRow(row) {
    var temp={
      id:row.dutyId
    }
    this.dutyService.getDutyById(temp).subscribe(data=>{
      console.log(data)
      let dutyData={
        row:data[0]
      }
      this.dialog.open(DetailsComponent,{data:dutyData,autoFocus:false,disableClose:true});
    })
  }

}
