import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTabGroup } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { CallService } from '../../duties/call/call.service';
import { User } from '../../../core/user';
import * as moment from 'moment';

@Component({
  selector: 'smsinfo',
  templateUrl: './smsinfo.component.html',
  styleUrls: ['./smsinfo.component.scss']
})

export class SmsinfoComponent implements OnInit {

  @ViewChild('tabGroup') tabGroup: MatTabGroup

  screenWidth:any;
  user:User={}
  year='2019';
  smsYear='2019';
  whatsappYear='';
  callYear='';
  bookingYear='';
  
  lengthSMS;
  pageSizeSMS=5;
  pageSizeOptionsSMS = [10, 15, 25, 40];

  lengthWhatsapp;
  pageSizeWhatsapp=5;
  pageSizeOptionsWhatsapp = [10, 15, 25, 40];

  lengthCalls;
  pageSizeCalls=5;
  pageSizeOptionsCalls = [10, 15, 25, 40];

  lengthBookings;
  pageSizeBookings=5;
  pageSizeOptionsBookings = [10, 15, 25, 40];

  displayedColumns=['date', 'count', 'amount'];

  dataSourceSMS = new MatTableDataSource<any>();
  dataSourceWhatsapp = new MatTableDataSource<any>();
  dataSourceCalls = new MatTableDataSource<any>();
  dataSourceBookings = new MatTableDataSource<any>();

  constructor(private auth:AuthService, private callService:CallService) { }

  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('sort2') sort2: MatSort;
  @ViewChild('sort3') sort3: MatSort;
  @ViewChild('sort4') sort4: MatSort;
  @ViewChild('paginator1') paginator1:MatPaginator;
  @ViewChild('paginator2') paginator2:MatPaginator;
  @ViewChild('paginator3') paginator3:MatPaginator;
  @ViewChild('paginator4') paginator4:MatPaginator;

  ngOnInit() {

    this.screenWidth=window.innerWidth;

    var i=0;

    this.auth.user.subscribe(data=>{
      
      this.user=data[0];

      this.callService.getSMSCount({year:this.year, ownerId: this.user.ownerId}).subscribe(data=>{
        data.forEach(element => {
          var monthName = moment(data[i].MONTH, 'M').format('MMMM');
          var startOfMonth = moment().month(monthName).startOf("month").format("DD-MM-YYYY")
          var endOfMonth   = moment().month(monthName).endOf("month").format("DD-MM-YYYY")
          data[i].MONTH = startOfMonth + " - " + endOfMonth
          data[i].Amount = data[i].SMS * 0.20
          i=i+1;
        });

        this.dataSourceSMS.data = data;
        this.lengthSMS = data.length;
        this.dataSourceSMS.sort = this.sort1;
        this.dataSourceSMS.paginator = this.paginator1;
      })

    })
  }

  yearChanged(year)
  {
    this.dataSourceSMS.data=[]
    this.dataSourceWhatsapp.data=[]
    this.dataSourceCalls.data=[]
    
    if(this.tabGroup.selectedIndex==0)
    {
      var i=0
      this.year=year
      this.smsYear=year
      this.callService.getSMSCount({year:this.year, ownerId: this.user.ownerId}).subscribe(data=>{
        data.forEach(element => {
          var monthName = moment(data[i].MONTH, 'M').format('MMMM');
          var startOfMonth = moment().month(monthName).startOf("month").format("DD-MM-YYYY")
          var endOfMonth   = moment().month(monthName).endOf("month").format("DD-MM-YYYY")
          data[i].MONTH = startOfMonth + " - " + endOfMonth
          data[i].Amount = data[i].SMS * 0.20
          i=i+1;
        });
  
        this.dataSourceSMS.data = data;
        this.lengthSMS = data.length;
        this.dataSourceSMS.sort = this.sort1;
        this.dataSourceSMS.paginator = this.paginator1;
      })
    }
    if(this.tabGroup.selectedIndex==1)
    {
      var i=0
      this.year = year;
      this.whatsappYear = year;
      this.callService.getWhatsAppCount({year:this.year, ownerId: this.user.ownerId}).subscribe(data=>{
        data.forEach(element => {
          var monthName = moment(data[i].MONTH, 'M').format('MMMM');
          var startOfMonth = moment().month(monthName).startOf("month").format("DD-MM-YYYY")
          var endOfMonth   = moment().month(monthName).endOf("month").format("DD-MM-YYYY")
          data[i].MONTH = startOfMonth + " - " + endOfMonth
          data[i].Amount = data[i].WHATSAPP * 0.30
          i=i+1;
        });
  
        this.dataSourceWhatsapp.data = data;
        this.lengthWhatsapp = data.length;
        this.dataSourceWhatsapp.sort = this.sort2;
        this.dataSourceWhatsapp.paginator = this.paginator2;
      })
    }
    if(this.tabGroup.selectedIndex==2)
    {
      var i=0;
      this.callYear=year;
      this.year=year;
      this.callService.getCallCount({year:this.year, ownerId: this.user.ownerId}).subscribe(data=>{
        data.forEach(element => {
          var monthName = moment(data[i].MONTH, 'M').format('MMMM');
          var startOfMonth = moment().month(monthName).startOf("month").format("DD-MM-YYYY")
          var endOfMonth   = moment().month(monthName).endOf("month").format("DD-MM-YYYY")
          data[i].MONTH = startOfMonth + " - " + endOfMonth
          data[i].Amount = 49
          i=i+1;
        });
  
        this.dataSourceCalls.data = data;
        this.lengthCalls = data.length;
        this.dataSourceCalls.sort = this.sort3;
        this.dataSourceCalls.paginator = this.paginator3;
      })
    }
    if(this.tabGroup.selectedIndex==3)
    {
      var i=0;
      this.bookingYear=year;
      this.year=year;
      this.callService.getBookingCount({year:this.year, ownerId: this.user.ownerId}).subscribe(data=>{
        data.forEach(element => {
          var monthName = moment(data[i].MONTH, 'M').format('MMMM');
          var startOfMonth = moment().month(monthName).startOf("month").format("DD-MM-YYYY")
          var endOfMonth   = moment().month(monthName).endOf("month").format("DD-MM-YYYY")
          data[i].MONTH = startOfMonth + " - " + endOfMonth
          data[i].Amount = 49
          i=i+1;
        });
  
        this.dataSourceBookings.data = data;
        this.lengthBookings = data.length;
        this.dataSourceBookings.sort = this.sort4;
        this.dataSourceBookings.paginator = this.paginator4;
      })
    }
  }

  tabChanged()
  {
    if(this.tabGroup.selectedIndex==0 && this.year!=this.smsYear)
    {
      var i=0;
      this.smsYear=this.year;
      this.callService.getSMSCount({year:this.year, ownerId: this.user.ownerId}).subscribe(data=>{
        data.forEach(element => {
          var monthName = moment(data[i].MONTH, 'M').format('MMMM');
          var startOfMonth = moment().month(monthName).startOf("month").format("DD-MM-YYYY")
          var endOfMonth   = moment().month(monthName).endOf("month").format("DD-MM-YYYY")
          data[i].MONTH = startOfMonth + " - " + endOfMonth
          data[i].Amount = data[i].SMS * 0.20
          i=i+1;
        });
  
        this.dataSourceSMS.data = data;
        this.lengthSMS = data.length;
        this.dataSourceSMS.sort = this.sort1;
        this.dataSourceSMS.paginator = this.paginator1;
      })
    }
    if(this.tabGroup.selectedIndex==1 && this.year!=this.whatsappYear)
    {
      var i=0;
      this.whatsappYear=this.year;
      this.callService.getWhatsAppCount({year:this.year, ownerId: this.user.ownerId}).subscribe(data=>{
        data.forEach(element => {
          var monthName = moment(data[i].MONTH, 'M').format('MMMM');
          var startOfMonth = moment().month(monthName).startOf("month").format("DD-MM-YYYY")
          var endOfMonth   = moment().month(monthName).endOf("month").format("DD-MM-YYYY")
          data[i].MONTH = startOfMonth + " - " + endOfMonth
          data[i].Amount = data[i].WHATSAPP * 0.30
          i=i+1;
        });
  
        this.dataSourceWhatsapp.data = data;
        this.lengthWhatsapp = data.length;
        this.dataSourceWhatsapp.sort = this.sort2;
        this.dataSourceWhatsapp.paginator = this.paginator2;
      })
    }
    if(this.tabGroup.selectedIndex==2 && this.year!=this.callYear)
    {
      var i=0;
      this.callYear=this.year;
      this.callService.getCallCount({year:this.year, ownerId: this.user.ownerId}).subscribe(data=>{
        data.forEach(element => {
          var monthName = moment(data[i].MONTH, 'M').format('MMMM');
          var startOfMonth = moment().month(monthName).startOf("month").format("DD-MM-YYYY")
          var endOfMonth   = moment().month(monthName).endOf("month").format("DD-MM-YYYY")
          data[i].MONTH = startOfMonth + " - " + endOfMonth
          data[i].Amount = 49
          i=i+1;
        });
  
        this.dataSourceCalls.data = data;
        this.lengthCalls = data.length;
        this.dataSourceCalls.sort = this.sort3;
        this.dataSourceCalls.paginator = this.paginator3;
      })
    }
    if(this.tabGroup.selectedIndex==3 && this.year!=this.bookingYear)
    {
      var i=0;
      this.bookingYear=this.year;
      this.callService.getBookingCount({year:this.year, ownerId: this.user.ownerId}).subscribe(data=>{
        data.forEach(element => {
          var monthName = moment(data[i].MONTH, 'M').format('MMMM');
          var startOfMonth = moment().month(monthName).startOf("month").format("DD-MM-YYYY")
          var endOfMonth   = moment().month(monthName).endOf("month").format("DD-MM-YYYY")
          data[i].MONTH = startOfMonth + " - " + endOfMonth
          data[i].Amount = 49
          i=i+1;
        });
  
        this.dataSourceBookings.data = data;
        this.lengthBookings = data.length;
        this.dataSourceBookings.sort = this.sort4;
        this.dataSourceBookings.paginator = this.paginator4;
      })
    }
  }
}
