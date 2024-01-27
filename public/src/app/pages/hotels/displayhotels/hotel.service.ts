import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class HotelService {

  constructor(private http:Http) { }

  addHotels(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/add',temp,{headers:headers}).map(res=>res.json());
  }

  addRooms(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/addRooms',temp,{headers:headers}).map(res=>res.json());
  }

  addBooking(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/addBooking',temp,{headers:headers}).map(res=>res.json());
  }

  addBookingAdditionalCharges(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/addBookingAdditionalCharges',temp,{headers:headers}).map(res=>res.json());
  }

  getBookings(temp){
    var temp1={
      customerId:temp
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/getBooking',temp1,{headers:headers}).map(res=>res.json());
  }

  getHotels(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/retrieve',temp,{headers:headers}).map(res => res.json());
  }

  getHotelCity(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/retrieveHotelCity',temp,{headers:headers}).map(res => res.json());
  }

  getHotelBookings(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/retrieveHotelBookings',temp,{headers:headers}).map(res => res.json());
  }

  getHotelBookingForMail(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/retrieveForMail',temp,{headers:headers}).map(res => res.json());
  }

  getHotelBookingsAdditionalCharges(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/retrieveHotelBookingAdditionalCharges',temp,{headers:headers}).map(res => res.json());
  }

  getHotelBookingsForCustomer(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/retrieveHotelBookingsForCustomer',temp,{headers:headers}).map(res => res.json());
  }

  deleteHotel(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/delete',temp,{headers:headers}).map(res=>res.json());
  }

  deleteHotelBooking(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/deleteHotelBooking',temp,{headers:headers}).map(res=>res.json());
  }

  deleteHotelBookingAdditionalCharges(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/deleteHotelBookingAdditionalCharges',temp,{headers:headers}).map(res=>res.json());
  }

  updateHotel(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/update',temp,{headers:headers}).map(res=>res.json());
  }

  updateRooms(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/updateRooms',temp,{headers:headers}).subscribe(res=>res);
  }

  updateHotelBooking(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/updateHotelBooking',temp,{headers:headers}).map(res=>res.json());
  }

  updateHotelBookingAdditionalCharges(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/updatehotelBookingAdditionalCharges',temp,{headers:headers}).map(res=>res.json());
  }

  getHotelTermsAndConditions(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/retrieveHotelTermsAndConditions',temp,{headers:headers}).map(res=>res.json());
  }


  addHotelFiles(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/addHotelFiles',temp,{headers:headers}).map(res => res.json());
  }

  getHotelFiles(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/getHotelFiles',temp,{headers:headers}).map(res => res.json());
  }

}
