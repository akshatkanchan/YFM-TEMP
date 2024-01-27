import { Injectable } from '@angular/core';
import { Duty } from './duty';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { Http,Headers } from '@angular/http';
import { DatePipe } from '../../../../node_modules/@angular/common';
import { map } from 'rxjs/operators';
import { User } from '../../core/user';
import { AuthService } from '../../core/auth.service';
import { from } from 'rxjs/observable/from';
import { Booking } from '../operations/booking';
import * as moment from 'moment'
import { ActivitylogService } from '../../activitylog.service';

@Injectable()
export class DutiesService {
  
  duties: Observable<Duty[]>;
  currUser:User;

  constructor(public dialog:MatDialog,private auth:AuthService,private http:Http,private datePipe: DatePipe,private activityLogs:ActivitylogService) {
  
   }
   addduties(duties: Duty) {
     console.log(duties)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
   return this.http.post('/duties/add',duties,{headers:headers}).map(
      res => {
          const response = res.toString();
      }
  );
    }
   deleteduties(duties: Duty) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/duties/delete',duties,{headers:headers}).subscribe(
      res => {
          const response = res.toString();
      }
  );
  }
  getBookings(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/retrieveForInvoice',temp,{headers:headers}).map(res => res.json());
  }
  requestUpdateDuties(temp){
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/editRequest',temp,{headers:headers}).map(res =>res.json());
  } 
  getOwnerIdforRequest(temp){
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getOwnerIdforRequest',temp,{headers:headers}).map(res =>res.json());
  }
  getRequestUpdateDuties(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/retrieveEditRequest',temp,{headers:headers}).map(res =>res.json());
  } 
  getValueChanges(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/retrieveValueChanges',temp,{headers:headers}).map(res =>res.json());
  } 

  updateduties(duties: Duty) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/duties/update',duties,{headers:headers}).subscribe();
  }

  updatedutyForOffline(duties) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/duties/updateForOffline',duties,{headers:headers}).subscribe();
  }

  updateDutiesEdit(duties: Duty) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/updateEdit',duties,{headers:headers}).map(res => res.json());
  }
 
  updateDutiesClose(duties: Duty) {
    console.log(duties)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/duties/updateClose',duties,{headers:headers}).subscribe();
  } 
  updateDutiesDispatched(duties: Duty) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/duties/markDispatch',duties,{headers:headers}).subscribe();
  } 
  updateDriverAllot(duties: Duty) {
    console.log("JASHD")
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/duties/allotDriver',duties,{headers:headers}).subscribe();
  }
  allotDriver(duties: Duty) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/duties/allotMyDriver',duties,{headers:headers}).subscribe();
  } 
  vehicleStatus(temp){
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/vehicleStatus',temp,{headers:headers}).map(res =>res.json());
  }
 getDutyType(temp:any)
 {   
   var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
     return this.http.post('/duties/retrieveDutyType',temp,{headers:headers}).map(res => res.json());
 }
  getDuties(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/retrieve',temp,{headers:headers}).map(res => res.json());
  }
  getCustomer(temp:any)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/retrieveCustomer',temp,{headers:headers}).map(res => res.json());
  }
  getFilteredDuties(column:any,value:any)
  {
   
    var t={
      column:column,
      value:value
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/filterDuty',t,{headers:headers}).map(res => res.json());
  }
  checkIfBookingComplete(column:any,value:any)
  {
   
    var t={
      column:column,
      value:value
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/checkIfBookingComplete',t,{headers:headers}).map(res => res.json());
  }
  findDuties( columnName:string, filter = '', sortColumn='startDate',sortOrder = 'asc',
  pageNumber = 1, pageSize = 10, status='Booked', startDate, endDate,from,to, ownerId):Observable<Duty[]>
  {
    console.log(status, startDate, endDate);
    
    if(
      (status == '' && startDate == '1970-01-01' && endDate == '2050-12-31') ||
      (status == 'Booked' && startDate == '1970-01-01' && endDate == '2050-12-31') || 
      (status == 'Completed' && startDate == '1970-01-01' && endDate == '2050-12-31') || 
      (status == 'Allotted' && startDate == '1970-01-01' && endDate == '2050-12-31')
    ) {
      console.log("yes");
      var temp={
        columnName:columnName,
        filter:filter,
        sortColumn:sortColumn,
        sortOrder:'desc',
        pageNumber:pageNumber,
        pageSize:pageSize,
        status:status,
        startDate:startDate,
        endDate:endDate,
        from:from,
        to:to,
        ownerId:ownerId
      }
    }
    else {
      var temp={
        columnName:columnName,
        filter:filter,
        sortColumn:sortColumn,
        sortOrder:sortOrder,
        pageNumber:pageNumber,
        pageSize:pageSize,
        status:status,
        startDate:startDate,
        endDate:endDate,
        from:from,
        to:to,
        ownerId:ownerId
    }
    }
   var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
   return this.http.post('/duties/find',temp,{headers:headers}).pipe(
    map(res => res.json()));
  }

  completeBooking(temp:any)
  {
    var t={
      value:temp
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/completeBooking',t,{headers:headers}).map(res => res.json());
  }

  closeduties(closeDuty: any) {
    
    closeDuty.ownerId=this.currUser
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/close',closeDuty,{headers:headers}).map(res => res.json());
    
  }

  closedutiesExtras(closeDuty: any) {
   
    closeDuty.ownerId=this.currUser
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/closeExtras',closeDuty,{headers:headers}).map(res => res.json());
   
  }

  getCount(columnName:string, filter = '', sortColumn='startDate',sortOrder = 'asc',
  pageNumber = 1, pageSize = 10, status='Booked', startDate, endDate, ownerId)
  {
    console.log(status, startDate, endDate);
    
    if(status == '' && startDate == '1970-01-01' && endDate == '2050-12-31') {
      console.log("yes");
      var temp={
        columnName:columnName,
        filter:filter,
        sortColumn:sortColumn,
        sortOrder:'desc',
        pageNumber:pageNumber,
        pageSize:pageSize,
        status:status,
        startDate:startDate,
        endDate:endDate,
        ownerId:ownerId
      }
    }
    else {
      var temp={
        columnName:columnName,
        filter:filter,
        sortColumn:sortColumn,
        sortOrder:sortOrder,
        pageNumber:pageNumber,
        pageSize:pageSize,
        status:status,
        startDate:startDate,
        endDate:endDate,
        ownerId:ownerId
    }
    }
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/duties/count', temp,{headers:headers}).map(res => res.json());
  }

  updateTotalPrice(temp)
  {
    var t=
    {
      bid:temp
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/bookings/updatePrice',t,{headers:headers}).subscribe(data=>data.json())
  }
  updateBooking(temp,userName,completeBooking) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/bookings/updateBookingfromDuties',temp,{headers:headers}).subscribe(res => {
      if(completeBooking == false) {
      this.activityLogs.addBookingLogs({
        bookingId:temp.id,ownerId:temp.ownerId,
        message:"Booking confirmed on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+userName}).subscribe()
      }
    });
  }

  availableDriversForEdit(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/availabeDriversForEdit',temp,{headers:headers}).map(res => res.json());
  }

  availableVehiclesForEdit(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/availabeVehiclesForEdit',temp,{headers:headers}).map(res => res.json());
  }

  getLabels(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getLabels',temp,{headers:headers}).pipe(
    map(res => res.json()));
  }

  getDriverUserId(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getDriverUserId',temp,{headers:headers}).pipe(
    map(res => res.json()));
  }

  addTracking(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/tracking/addTrackingInfo',temp,{headers:headers}).pipe(
      map(res => res.json()));
  }

  deleteTrackingInfo(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/tracking/deleteTrackingInfo',temp,{headers:headers}).pipe(
      map(res => res.json()));
  }

  getTracking(temp)
  {
    return this.http.post('/tracking/retrieveTrackingInfo',temp).pipe(
      map(res => res.json()));
  }

  checkSelfDrive(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/checkSelfDrive',temp,{headers:headers}).pipe(
      map(res => res.json()));
  }

  getSelfDriveDetails(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getSelfDriveDetails',temp,{headers:headers}).pipe(
      map(res => res.json()));
  }
  getDutyByBId(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/retrieveDutyByBId',temp,{headers:headers}).pipe(
      map(res => res.json()));

  }
  getDutyById(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/retrieveDutyById',temp,{headers:headers}).pipe(
      map(res => res.json()));

  }
  getDutiesForExport(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getDutiesForExport',temp,{headers:headers}).map(res => res.json());
  }

  getDutiesByBooking(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getDutiesByBooking',temp,{headers:headers}).map(res => res.json());
  }

  getEndedCloseDutyDetails(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getEndedCloseDutyDetails',temp,{headers:headers}).map(res => res.json());
  }

  getCloseDutyDetails(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getCloseDutyDetails',temp,{headers:headers}).map(res => res.json());
  }

  updateCloseDutyDetails(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/updateCloseDutyDetails',temp,{headers:headers}).map(res => res.json());
  }

  getEndedCloseDutyAdditionalCharges(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getEndedCloseDutyAdditionalCharges',temp,{headers:headers}).map(res => res.json());
  }

  getDutySlipSummary(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getDutySlipSummary',temp,{headers:headers}).map(res => res.json());
  }

  completeDuty(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/completeDuty',temp,{headers:headers}).map(res => res.json());
  }

  countIncompleteDuties(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/countIncompleteDuties',temp,{headers:headers}).map(res => res.json());
  }

  getTotalKms(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getTotalKms',temp,{headers:headers}).map(res => res.json());
  }

  getTotalSeconds(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/duties/getTotalSeconds',temp,{headers:headers}).map(res => res.json());
  }
} 
