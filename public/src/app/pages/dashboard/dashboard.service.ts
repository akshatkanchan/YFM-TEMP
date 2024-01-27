import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';

@Injectable()
export class DashboardService {

  constructor(private http:Http) {

  }

  getbookingCount(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveDuties',temp,{headers:headers}).map(res => res.json());
  }
  getDutiesMonthlyCount(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveMonthlyDuties',temp,{headers:headers}).map(res => res.json());
  }
  getHotelsCount(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveHotels',temp,{headers:headers}).map(res => res.json());
  }
  getFlightsCount(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveFlights',temp,{headers:headers}).map(res => res.json());
  }

  getPriceFromDuties(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrievePriceFromDuties',temp,{headers:headers}).map(res => res.json());
  }

  getQuarterlyPriceFromDuties(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveQuarterlyPriceFromDuties',temp,{headers:headers}).map(res => res.json());
  }

  getYearlyPriceFromDuties(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveYearlyPriceFromDuties',temp,{headers:headers}).map(res => res.json());
  }

  getPriceFromInvoiceInHotels(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrievePriceFromInvoiceInHotels',temp,{headers:headers}).map(res => res.json());
  }

  getQuarterlyPriceFromInvoiceInHotels(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveQuarterlyPriceFromInvoiceInHotels',temp,{headers:headers}).map(res => res.json());
  }

  getYearlyPriceFromInvoiceInHotels(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveYearlyPriceFromInvoiceInHotels',temp,{headers:headers}).map(res => res.json());
  }

  getPriceFromInvoiceInFlights(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrievePriceFromInvoiceInFlights',temp,{headers:headers}).map(res => res.json());
  }

  getQuarterlyPriceFromInvoiceInFlights(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveQuarterlyPriceFromInvoiceInFlights',temp,{headers:headers}).map(res => res.json());
  }

  getYearlyPriceFromInvoiceInFlights(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveYearlyPriceFromInvoiceInFlights',temp,{headers:headers}).map(res => res.json());
  }

  getVehicleFuelCost(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveFuelCostFromVehicle',temp,{headers:headers}).map(res => res.json());
  }

  getVehicleBreakdownCost(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveVehicleBreakdownCostFromVehicle',temp,{headers:headers}).map(res => res.json());
  }

  getVehicleMaintenanceCost(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveVehicleMaintenanceCostFromVehicle',temp,{headers:headers}).map(res => res.json());
  }

  getOfficeExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrieveOfficeExpensesCost',temp,{headers:headers}).map(res => res.json());
  }

  getPurchaseDuties(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dashboard/retrievePurchaseDuties',temp,{headers:headers}).map(res => res.json());
  }
}
