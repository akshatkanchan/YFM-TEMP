import { Injectable, OnInit } from '@angular/core';
import { Booking } from './booking';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/retryWhen'
import { AuthService } from '../../core/auth.service';
import { User } from '../../core/user';
import { DutiesComponent } from '../duties/duties.component';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivitylogService } from '../../activitylog.service';
import * as moment from 'moment'
import { CallService } from '../duties/call/call.service';

@Injectable()
export class BookingsService {
  count=1;
  user:User={}
  bookings: Observable<Booking[]>;
  private bookingData:any
  constructor(private auth:AuthService,private http:Http,private dutyComponent:DutiesComponent,private snackbar:MatSnackBar, private router:Router, private activityLogs:ActivitylogService, private callService: CallService) {
    this.auth.user.subscribe(data=>
    {
      this.user=data[0]
    })
  }

  public editData;

  public bookingID:string;
  
   addBooking(temp:any){
     console.log(temp);
     
      temp.booking.ownerID=this.user.ownerId;
      delete temp.booking.unconfirmed;  
      var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      this.http.post('/bookings/add',temp.booking,{headers:headers}).subscribe(
      res => {
          res.json().map(data=>{
            this.bookingID=data.ID
            this.activityLogs.addBookingLogs({
              bookingId:data.ID,
              ownerId:temp.booking.ownerID,
              message:"Booking created on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
              var count = {
                booking:1,                
                date:moment().format("YYYY-MM-DD"),
                ownerId:this.user.ownerId
              }          
              this.callService.insertBookingCount(count).subscribe(data=>{
                console.log(data)
              })
            this.addPassengers(this.bookingID,temp.passenger);
            this.addBookedBy(this.bookingID, temp.bookedBy);
            this.dutyComponent.addDuties(this.bookingID,temp.booking);
          })
      },err=>{},()=>{
        this.snackbar.open("Booking Completed","X",{duration:5000})
        this.router.navigateByUrl('/pages/operations/bookingsdisp')
      }
  );
    }
  addMonthlyBooking(temp) {
    console.log(temp);
     
      temp.booking.ownerID=this.user.ownerId;  
      delete temp.booking.unconfirmed; 
      var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      this.http.post('/bookings/add',temp.booking,{headers:headers}).subscribe(
      res => {
          res.json().map(data=>{
            this.bookingID=data.ID
            this.activityLogs.addBookingLogs({
              bookingId:data.ID,
              ownerId:temp.booking.ownerID,
              message:"Booking created on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
            this.addPassengers(this.bookingID,temp.passenger);
            this.addBookedBy(this.bookingID, temp.bookedBy);
            temp.duties.forEach(element => {
              console.log(element)
              this.dutyComponent.addMonthlyDuties(this.bookingID,temp.booking,element.startDate, element.dutyType, element.dutyTypeId, element.vehicleGroup, element.vehiceGroupId)
            });
          })
      },err=>{},()=>{
        this.snackbar.open("Booking Completed","X",{duration:5000})
        this.router.navigateByUrl('/pages/operations/bookingsdisp')
      }
  );
  }  
  addUnconfirmedBooking(temp) {
    console.log("second");
    
    console.log(temp);
     
      temp.booking.ownerID=this.user.ownerId; 
      temp.booking.status="Unconfirmed"; 
      delete temp.booking.unconfirmed
      var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      this.http.post('/bookings/add',temp.booking,{headers:headers}).subscribe(
      res => {
          res.json().map(data=>{
            this.bookingID=data.ID
            this.activityLogs.addBookingLogs({
              bookingId:data.ID,
              ownerId:temp.booking.ownerID,
              message:"Booking created on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
            this.addPassengers(this.bookingID,temp.passenger);
            this.addBookedBy(this.bookingID, temp.bookedBy);
            this.dutyComponent.addDuties(this.bookingID,temp.booking);
          })
      },err=>{},()=>{
        this.snackbar.open("Booking Completed","X",{duration:5000})
        this.router.navigateByUrl('/pages/operations/bookingsdisp')
      }
  );
  } 
  addUnconfirmedMonthlyBooking(temp) {
    console.log("second");
    
    console.log(temp);
     
      temp.booking.ownerID=this.user.ownerId; 
      temp.booking.status="Unconfirmed"; 
      delete temp.booking.unconfirmed
      var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      this.http.post('/bookings/add',temp.booking,{headers:headers}).subscribe(
      res => {
          res.json().map(data=>{
            this.bookingID=data.ID
            this.activityLogs.addBookingLogs({
              bookingId:data.ID,
              ownerId:temp.booking.ownerID,
              message:"Booking created on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
            this.addPassengers(this.bookingID,temp.passenger);
            this.addBookedBy(this.bookingID, temp.bookedBy);
            temp.duties.forEach(element => {
              console.log(element)
              this.dutyComponent.addMonthlyDuties(this.bookingID,temp.booking,element.startDate, element.dutyType, element.dutyTypeId, element.vehicleGroup, element.vehiceGroupId)
            });
          })
      },err=>{},()=>{
        this.snackbar.open("Booking Completed","X",{duration:5000})
        this.router.navigateByUrl('/pages/operations/bookingsdisp')
      }
  );
  } 
  setBookingId(temp){
    console.log(temp)
    this.bookingData=temp
  }
  getBookingId(){
    console.log(this.bookingData)
    return this.bookingData
  }
 addPassengers(id:any,passengerArray:any)
 {console.log(this.count);
  this.count++;
  var passengerData={
    bookingId:id,
    passengerArray:passengerArray
  }
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/bookings/addPassenger',passengerData,{headers:headers}).subscribe(
      res => {res.json()
      }
  );
 }
  addBookedBy(id:any,bookedByArray:any) {
    console.log(this.count);
    this.count++;
    var bookedByData = {
      bookingId:id,
      bookedByArray:bookedByArray
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/addBookedBy',bookedByData,{headers:headers}).subscribe(
      res => {
        res.json()
      }
    );
  }

   deleteBooking(booking: Booking) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/delete',booking,{headers:headers}).map(res=>res.json());
  }

  cancelBooking(booking){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/cancel',booking,{headers:headers}).map(res=>res.json());
  }

  deletePassenger(id:any[]) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/bookings/deletePassengers',id,{headers:headers}).subscribe(
      res => {
          const response = res.toString();
      }
  );
  }

  deleteBookedBy(id:any[]) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/bookings/deleteBookedBy',id,{headers:headers}).subscribe(
      res => {
        const response = res.toString();
      }
    );
  }
  updateBooking(booking: Booking) {
    delete booking.unconfirmed;
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/bookings/update',booking,{headers:headers}).subscribe(res => {
          this.activityLogs.addBookingLogs({
            bookingId:booking.id,ownerId:booking.ownerID,
            message:"Booking edited on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
      });
  }
  updateUnconfirmedBooking(booking: Booking) {
    console.log(booking);
    delete booking.unconfirmed;
    booking.ownerID=this.user.ownerId;
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/bookings/update',booking,{headers:headers}).subscribe(
      // res => {
      //   this.dutyComponent.addDuties(booking.id,booking);
      //     const response = res.toString();
      // }     
  );
  }
  updateUnconfirmedMonthlyBooking(temp) {
    console.log(temp);
    temp.booking.ownerID=this.user.ownerId;
    delete temp.booking.duties_completed
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/bookings/update',temp.booking,{headers:headers}).subscribe(
      // res => {
      //   temp.duties.forEach(element => {
      //     this.dutyComponent.addMonthlyDuties(temp.booking.id, temp.booking, element.startDate, element.dutyType,element.dutyTypeId, element.vehicleGroup, element.vehicleGroupId);
      //   });
      //     const response = res.toString();
      // }     
  );
  }
  getBookingsForInvoice(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/retrieveForInvoice',temp,{headers:headers}).map(res => res.json());
  }
  getBookings(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/retrieve',temp,{headers:headers}).map(res => res.json());
  }

  getVehilceGroup(temp:string, ownerId)
  {
    var t={
      name:temp,
      ownerId: ownerId
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/retrieveVehicleGroup',t,{headers:headers}).map(res => res.json());
  }

  getDutyType(temp:string, ownerId)
  {
    var t={
      name:temp,
      ownerId: ownerId
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/retrieveDutyType',t,{headers:headers}).map(res => res.json());
  }

  getPassenger(temp)
  {
    var t={
      id:temp
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/retrievePassenger',t,{headers:headers}).map(res => res.json());
  }

  getBookedBy(temp)
  {
    var t={
      id:temp
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/retrieveBookedBy',t,{headers:headers}).map(res => res.json());
  }

  addExcelBooking(temps:any){
    console.log(temps);
    
      var temp=temps;
      console.log("Booking")
      temp.booking.ownerID=this.user.ownerId;  
      var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/importExcel/addBookings',temp,{headers:headers}).map(res => res.json());
  }

  addRecurringPassenger(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/addRecurringPassenger',temp,{headers:headers}).map(res => res.json());
  }
  getRecurringPassenger(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/retrieveRecurringPassenger',temp,{headers:headers}).map(res => res.json());
  }
  editRecurringPassenger(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/editRecurringPassenger',temp,{headers:headers}).map(res => res.json());
  }
  getRecurringPassengerAll(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/getRecurringPassenger',temp,{headers:headers}).map(res => res.json());
  }
  addRecurringBookedBy(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/addRecurringBookedBy',temp,{headers:headers}).map(res => res.json());
  }
  getRecurringBookedBy(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/retrieveRecurringBookedBy',temp,{headers:headers}).map(res => res.json());
  }
  getRecurringBookedByAll(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/getRecurringBookedBy',temp,{headers:headers}).map(res => res.json());
  }
  getCount(columnName:string, filter = '', sortColumn='startDate',sortOrder = 'asc',
  pageNumber = 1, pageSize = 10, status, startDate, endDate, ownerId)
  {
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
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/bookings/count', temp,{headers:headers}).map(res => res.json());
  }

  findBookings( columnName:string, filter = '', sortColumn='startDate',sortOrder = 'asc',
  pageNumber = 1, pageSize = 10, status, startDate, endDate, ownerId):any
  {
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
   var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
   return this.http.post('/bookings/find',temp,{headers:headers}).pipe(
    map(res => res.json()));
  }

  setEditData(temp) {
    localStorage.setItem('uclueldata',JSON.stringify(temp))
  }

  getBookingForExport(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/retrieveForBookingExport',temp,{headers:headers}).map(res => res.json());
  }

  loadCompletedDuties(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/getCompletedDutyCount',temp,{headers:headers}).map(res => res.json());
  }
  getBookingsForExport(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/getBookingsForExport',temp,{headers:headers}).map(res => res.json());
  }

  addBookingFiles(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/addBookingFiles',temp,{headers:headers}).map(res => res.json());
  }

  getBookingFiles(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/getBookingFiles',temp,{headers:headers}).map(res => res.json());
  }

}
