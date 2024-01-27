import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { SubUser } from './masters/sub-users/sub-user';
import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>

    <nb-menu [items]="menu">

    </nb-menu>
      <router-outlet></router-outlet>

    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit{
  
  permission:SubUser={};
  ngOnInit() {
    this.auth.permissions.subscribe(data=>{
      this.permission=data[0]
      console.log(this.permission);
      console.log(this.menu);

      //Permission Check for Operations
      if(this.permission.viewBookings == 0) {
        let index=(this.menu.findIndex(x=>x.title=='Operations'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Bookings'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewBankAccounts === 0) {
        let temp=this.menu[3].children.map(function (o) {
          return o.title;
        })
        let temp2=temp.indexOf("Bank Accounts");
        this.menu[3].children.splice(temp2,1);
      } if(this.permission.viewInvoices === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Operations'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Invoices'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewBranches === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Operations'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Branches'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewBookings === 0  && this.permission.viewBankAccounts === 0 && this.permission.viewInvoices === 0 && 
        this.permission.viewBranches === 0) {
          let index = (this.menu.findIndex(x=>x.title == 'Operations'))
          this.menu.splice(index,1);
      }

      //Permission Check for Masters
      if(this.permission.viewDutyType === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Duty Type'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewCustomer === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Customers'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewReceipts === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Receipts'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewVehicleGroup === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Vehicle Groups'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewVehicles === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Vehicles'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewTaxes === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Taxes'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewSuppliers === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Suppliers'));
        this.menu[index].children.splice(indexChildren,1);
      }  if(this.permission.viewDriver === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Staff'));
        let indexSubChildren=(this.menu[index].children[indexChildren].children.findIndex(x=>x.title == 'Drivers'))
        this.menu[index].children[indexChildren].children.splice(indexSubChildren,1);
      } if(this.permission.viewEmployees === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Staff'));
        let indexSubChildren=(this.menu[index].children[indexChildren].children.findIndex(x=>x.title == 'Employees'))
        this.menu[index].children[indexChildren].children.splice(indexSubChildren,1);
      } if(this.permission.viewDriver === 0 && this.permission.viewEmployees ===0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Staff'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewUsers === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Users'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewBillingItems === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Billing Items'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewPricing === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Pricing'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewLabels === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Labels'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewRecurringBookedBy === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Contacts'));
        let indexSubChildren=(this.menu[index].children[indexChildren].children.findIndex(x=>x.title == 'Booked By'))
        this.menu[index].children[indexChildren].children.splice(indexSubChildren,1);
      } if(this.permission.viewRecurringPassenger === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Staff'));
        let indexSubChildren=(this.menu[index].children[indexChildren].children.findIndex(x=>x.title == 'Passengers'))
        this.menu[index].children[indexChildren].children.splice(indexSubChildren,1);
      } if(this.permission.viewRecurringBookedBy === 0 && this.permission.viewRecurringPassenger === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Masters'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Contacts'));
        this.menu[index].children.splice(indexChildren,1);
      } 

      //Permission Check for Hotels
      if(this.permission.viewHotels === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Hotels'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Hotels'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewHotelsBookings === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Hotels'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Hotel Bookings'));
        this.menu[index].children.splice(indexChildren,1);
      }

      //Permission Check for Expenses
      if(this.permission.viewVehicleFuel === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Expenses'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Fuel'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewSms === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Expenses'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='SMS/Calls'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewOfficeExpenses === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Expenses'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Office Expenses'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewVehicleMaintenance === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Expenses'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Vehicle Maintenance'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewVehicleBreakDowns === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Expenses'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Vehicle BreakDown'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewPettyCash === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Expenses'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Petty Cash'));
        this.menu[index].children.splice(indexChildren,1);
      }

      //Permission for Airlines
      if(this.permission.viewFlights === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Airline'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Airline'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewVisa === 0) {
        let index=(this.menu.findIndex(x=>x.title=='Airline'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Visa'));
        this.menu[index].children.splice(indexChildren,1);
      }

      //Permission Check for B2B Circles
      if(this.permission.viewCircle === 0){
        let index=(this.menu.findIndex(x=>x.title=='B2B Circles'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Your Cirlces'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewIncomingCircleRequests === 0){
        let index=(this.menu.findIndex(x=>x.title=='B2B Circles'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Circle Requests'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewIncomingDutyRequests === 0){
        let index=(this.menu.findIndex(x=>x.title=='B2B Circles'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='My Requests'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewPurchasesInvoices === 0){
        let index=(this.menu.findIndex(x=>x.title=='B2B Circles'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Purchase Invoice'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewPurchasesDuties === 0){
        let index=(this.menu.findIndex(x=>x.title=='B2B Circles'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Purchase Duties'));
        this.menu[index].children.splice(indexChildren,1);
      } if(this.permission.viewPurchasesPayments === 0){
        let index=(this.menu.findIndex(x=>x.title=='B2B Circles'));
        let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Purchase Payments'));
        this.menu[index].children.splice(indexChildren,1);
      }
      
      //Permission Check for Tracking
      if(this.permission.viewTracking === 0){
        let index=(this.menu.findIndex(x=>x.title=='Tracking'));
        this.menu.splice(index,1);
      }

      //sidebar profile
      // if(this.permission.viewBusinessSetting === 0) {
      //   let index=(this.menu.findIndex(x=>x.title=='Profile'));
      //   if(index>=0)
      //   {
      //     let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Business Settings'));
      //     this.menu[index].children.splice(indexChildren,1);
      //   }
      // } if(this.permission.editCompanyInfo === 0) {
      //   let index=(this.menu.findIndex(x=>x.title=='Profile'));
      //   if(index>=0)
      //   {
      //     let indexChildren=(this.menu[index].children.findIndex(x=>x.title=='Company Profile'));
      //     this.menu[index].children.splice(indexChildren,1);
      //   }
      // }

    })
    
    if (this.router.url=='/pages') {
      this.router.navigate(["/pages/duties"])
    }

  }

  menu = MENU_ITEMS;



  constructor(private router:Router,private auth:AuthService) {
  }

}
