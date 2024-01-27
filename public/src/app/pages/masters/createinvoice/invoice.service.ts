import { Injectable } from '@angular/core';
import { Booking } from '../../operations/booking';
import { Observable } from 'rxjs';
import { Http,Headers } from '@angular/http';

@Injectable()
export class InvoiceService {

  bookings: Observable<Booking[]>;

  constructor(private http:Http) {
    
  }
  
  getCustBooking(custId:string) {
    var t={
      id:custId
    }
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveCompletedBookings',t,{headers:headers})
    .map(res => res.json());
  }
  getBookingsInInvoice(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrievebookingsInInvoice',temp,{headers:headers})
    .map(res => res.json());
  }
  getPurchaseInInvoice(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrievepurchaseInInvoice',temp,{headers:headers})
    .map(res => res.json());
  }
  getPurchaseInInvoiceByBooking(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrievepurchaseInInvoiceByBooking',temp,{headers:headers})
    .map(res => res.json());
  }
  getHotelsInInvoice(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveHotelsInInvoices',temp,{headers:headers})
    .map(res => res.json());
  }
  getInvoiceInHotels(temp){
    var temp1={
      id:temp
    }
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveInvoiceInHotels',temp1,{headers:headers})
    .map(res => res.json());
  }
  getFlightsInInvoice(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveFlightsInInvoice',temp,{headers:headers})
    .map(res => res.json());
  }
  getVisaInInvoice(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveVisaInInvoice',temp,{headers:headers})
    .map(res => res.json());
  }
  getInvoiceInFlights(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveInvoiceInFlights',temp,{headers:headers})
    .map(res => res.json());
  }
  getInvoiceExtras(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveInvoiceExtra',temp,{headers:headers})
    .map(res => res.json());
  }
  getDutySummary(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/findDutySummary',temp,{headers:headers})
    .map(res => res.json());
  }
  getDutySummaryForPurchase(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/findDutySummaryForPurchase',temp,{headers:headers})
    .map(res => res.json());
  }
  getCloseExtras(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveCloseExtras',temp,{headers:headers})
    .map(res => res.json());
  }
  addInvoice(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/add',temp.invoice,{headers:headers}).map(res => {
      res.json().map(data=>{            
        var invoiceId=data.ID
        this.addBookings(invoiceId,temp.booking);
        // this.addHotelBookings(invoiceId,temp.hotel);
        // this.addFlightBookings(invoiceId,temp.flight)
        this.addExtras(invoiceId,temp.extra);
      })
    });
  }
  addInvoiceHotel(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/addHotelInvoice',temp.invoice,{headers:headers}).map(res => {
      res.json().map(data=>{            
        var invoiceId=data.ID
        // this.addBookings(invoiceId,temp.booking);
        this.addHotelBookings(invoiceId,temp.hotel);
        // this.addFlightBookings(invoiceId,temp.flight)
        this.addHotelExtras(invoiceId,temp.extra)
      })
    });
  }
  addInvoiceFlight(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/addFlightInvoice',temp.invoice,{headers:headers}).map(res => {
      res.json().map(data=>{            
        var invoiceId=data.ID
        // this.addBookings(invoiceId,temp.booking);
        // this.addHotelBookings(invoiceId,temp.hotel);
        this.addFlightBookings(invoiceId,temp.flight)
        this.addFlightExtras(invoiceId,temp.extra)
      })
    });
  }
  addInvoiceVisa(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/addVisaInvoice',temp.invoice,{headers:headers}).map(res => {
      res.json().map(data=>{            
        var invoiceId=data.ID
        // this.addBookings(invoiceId,temp.booking);
        // this.addHotelBookings(invoiceId,temp.hotel);
        this.addVisaBookings(invoiceId,temp.booking)
        this.addVisaExtras(invoiceId,temp.extra)
      })
    });
  }
  addInvoicePurchase(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/addPurchaseInvoice',temp.invoice,{headers:headers}).map(res => {
      res.json().map(data=>{             
        var invoiceId=data.ID
        this.addPurchaseBookings(invoiceId, temp.booking, temp.duty);
        this.addPurchaseExtras(invoiceId, temp.extra);
        // this.addBookings(invoiceId,temp.booking);
        // this.addHotelBookings(invoiceId,temp.hotel);
        // this.addFlightBookings(invoiceId,temp.flight)
        // this.addFlightExtras(invoiceId,temp.extra)
      })
    });
  }
  addBookings(invoiceId:any,booking:any) {
    booking.forEach(element => {
      var booking = {
        bookingId:element.id,
        invoiceId:invoiceId,
        extraChargesTotal: element.extraChargesTotal,
      }
      let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/invoice/addBooking',booking,{headers:headers}).subscribe();
    });
  }
  addHotelBookings(invoiceId:any,booking:any){
    booking.forEach(element => {
      var booking={
        hotelBookingId:element.id,
        invoiceId:invoiceId
      }
      let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/invoice/addHotelBooking',booking,{headers:headers}).subscribe();
    });
  }
  addFlightBookings(invoiceId:any,booking:any) {     
    booking.forEach(element => {
      var booking={
        flightBookingId:element.id,
        invoiceId:invoiceId
      }
      let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/invoice/addFlightBooking',booking,{headers:headers}).subscribe();
    });
  }
  addVisaBookings(invoiceId:any,booking:any) {     
    booking.forEach(element => {
      var booking={
        visaId:element.visaId,
        invoiceId:invoiceId
      }
      let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/invoice/addVisaBooking',booking,{headers:headers}).subscribe();
    });
  }
  addPurchaseBookings(invoiceId:any,booking:any, duty: any){   
    if(duty == null) {
      booking.forEach(element => {
        var booking={
          bookingId:element.id,
          invoiceId:invoiceId
        }
        let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
        return this.http.post('/invoice/addPurchaseBooking',booking,{headers:headers}).subscribe();
      });
    }
    else {
      duty.forEach(element => {
        var booking={
          dutyId:element.id,
          invoiceId:invoiceId
        }
        let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
        return this.http.post('/invoice/addPurchaseBooking',booking,{headers:headers}).subscribe();
      });
    }
  }
  addExtras(invoiceId:any,extra:any){
    extra.forEach(element => {
      element.invoiceId=invoiceId;
      let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/invoice/addExtras',element,{headers:headers}).subscribe();
    });
  }
  addHotelExtras(invoiceId:any,extra:any){
    extra.forEach(element => {
      element.invoiceId=invoiceId;
      let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/invoice/addHotelExtras',element,{headers:headers}).subscribe();
    });
  }
  addFlightExtras(invoiceId:any,extra:any){
    extra.forEach(element => {
      element.invoiceId=invoiceId;
      let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/invoice/addFlightExtras',element,{headers:headers}).subscribe();
    });
  }
  addVisaExtras(invoiceId:any,extra:any){
    extra.forEach(element => {
      element.invoiceId=invoiceId;
      let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/invoice/addVisaExtras',element,{headers:headers}).subscribe();
    });
  }
  addPurchaseExtras(invoiceId:any,extra:any){
    extra.forEach(element => {
      element.invoiceId=invoiceId;
      let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/invoice/addPurchaseExtras',element,{headers:headers}).subscribe();
    });
  }
  
  getTaxes(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/taxes/retrieve',temp,{headers:headers}).map(res=>res.json());
  }

  getTax(tax:any) {
    var t= {
    tax:tax
    }
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/taxes/retrieveTax',t,{headers:headers}).map(res=>res.json());
  }

  getCustInvoices(custId) {
    var temp= {
      customerId:custId
    }
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/receipts/retrieveInvoices',temp,{headers:headers}).map(res=>res.json())
  }

  getCustInvoicesInHotels(custId) {
    var temp= {
      customerId:custId
    }
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/receipts/retrieveInvoicesInHotels',temp,{headers:headers}).map(res=>res.json())
  }

  getCustInvoicesInFlights(custId) {
    var temp= {
      customerId:custId
    }
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/receipts/retrieveInvoicesInFlights',temp,{headers:headers}).map(res=>res.json())
  }

  getCustInvoicesInVisa(custId) {
    var temp= {
      customerId:custId
    }
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/receipts/retrieveInvoicesInVisa',temp,{headers:headers}).map(res=>res.json())
  }
  getCustPurchaseInvoices(custId) {
    var temp = {
      customerId:custId
    }
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/receipts/retrievePurchaseInvoices',temp,{headers:headers}).map(res=>res.json())
  }
  getInvoices(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieve',temp,{headers:headers}).map(res=>res.json())
  }
  getPurchaseInvoices(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrievePurchaseInvoice',temp,{headers:headers}).map(res=>res.json())
  }
  getHotelInvoices(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveHotelInvoices',temp,{headers:headers}).map(res=>res.json())
  }
  getFlightsInvoices(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveAllInvoiceInFlights',temp,{headers:headers}).map(res=>res.json())
  }
  getVisaInvoices(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveAllInvoiceInVisa',temp,{headers:headers}).map(res=>res.json())
  }

  updateInvoice(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/updateInvoice',temp,{headers:headers}).map(res=>res.json())
  }

  updateHotelInvoice(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/updateHotelInvoice',temp,{headers:headers}).map(res=>res.json())
  }

  updateFlightInvoice(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/updateFlightInvoice',temp,{headers:headers}).map(res=>res.json())
  }

  updateVisaInvoice(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/updateVisaInvoice',temp,{headers:headers}).map(res=>res.json())
  }

  updatePurchaseInvoice(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/updatePurchaseInvoice',temp,{headers:headers}).map(res=>res.json())
  }

  setEditData(temp) {
    localStorage.setItem('cabInvoice',JSON.stringify(temp));
  }
  setViewHotelInvoice(temp) {
    localStorage.setItem('hotelInvoice',JSON.stringify(temp));
  }
  setViewFlightInvoice(temp) {
    localStorage.setItem('flightInvoice',JSON.stringify(temp));
  }
  setViewVisaInvoice(temp) {
    localStorage.setItem('visaInvoice',JSON.stringify(temp));
  }
  getExtraCharges(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveExtraCharges',temp,{headers:headers}).map(res=>res.json())
  }
  getExtraChargesForDuties(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/invoice/retrieveExtraChargesForDuties',temp,{headers:headers}).map(res=>res.json())
  }
}
