import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class DeactivateGuard implements CanDeactivate<any> {
  
  canDeactivate() {
    localStorage.removeItem('uclueldata');
    localStorage.removeItem('cabInvoice');
    localStorage.removeItem('hotelInvoice');
    localStorage.removeItem('flightInvoice');
    localStorage.removeItem('visaInvoice');
    localStorage.removeItem('dutyedit');
    localStorage.removeItem('trackVehicle');
    localStorage.removeItem('customer');
    localStorage.removeItem('supplier');
    localStorage.removeItem('purchaseinvoice');
    return true;
    // return confirm('Are you sure you want to leave this page?');
  }

}
