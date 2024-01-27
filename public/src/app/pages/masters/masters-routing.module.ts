import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersComponent } from './masters.component';
import { DutyTypeComponent } from './dutytype/dutytype.component';
import { AddSuppliersComponent } from './addsuppliers/addsuppliers.component';
import { AddCustomerComponent } from './addcustomer/addcustomer.component';
import { AddPurchaseComponent } from './addpurchase/addpurchase.component';
import { CustomerComponent } from './customer/customer.component';
import { VehicleGroupsComponent } from './vehiclegroups/vehiclegroups.component';
import { AddReceiptsComponent } from './addreceipts/addreceipts.component';
import { NewPettyCashComponent } from './newpettycash/newpettycash.component';
import {NewVehiclesComponent} from './new-vehicles/new-vehicles.component';
import{TaxesComponent} from './taxes/taxes.component';
import { NewDriverComponent } from './new-driver/new-driver.component';
import { NewEmployeesComponent } from './new-employees/new-employees.component';
import { NewDutySupporterComponent } from './new-duty-supporter/new-duty-supporter.component';
import { SubUsersComponent } from './sub-users/sub-users.component';
import { ReceiptsdispComponent } from './receiptsdisp/receiptsdisp.component';
import { SuppliersdispComponent } from './suppliersdisp/suppliersdisp.component';
import { NewuserComponent } from './newuser/newuser.component';
import { SubuserdispComponent } from './subuserdisp/subuserdisp.component';
import { DutytypedispComponent } from './dutytypedisp/dutytypedisp.component';
import { VehiclegroupdispComponent } from './vehiclegroupdisp/vehiclegroupdisp.component';
import { PettycashdispComponent } from './pettycashdisp/pettycashdisp.component';
import { EmployeedispComponent } from './employeedisp/employeedisp.component';
import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { PurchaseDutiesComponent } from './purchase-duties/purchase-duties.component';
import { PurchasePaymentsComponent } from './purchase-payments/purchase-payments.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';
import { VehicledispComponent } from './vehicledisp/vehicledisp.component';
import { DriverDispComponent } from './driver-disp/driver-disp.component';
import { LabelsComponent } from './labels/labels.component';
import { LabeldisplayComponent } from './labeldisplay/labeldisplay.component';
import { CustomergroupdisplayComponent } from './customergroupdisplay/customergroupdisplay.component';
import { SuppliergroupdisplayComponent } from './suppliergroupdisplay/suppliergroupdisplay.component';
import { InvoicedisplayComponent } from './invoicedisplay/invoicedisplay.component';
import { UsersComponent } from './users/users.component';
import { RecurringbookbyComponent } from './recurringbookby/recurringbookby.component';
import { RecurringpassengerComponent } from './recurringpassenger/recurringpassenger.component';
import { CreateflightinvoiceComponent } from './createflightinvoice/createflightinvoice.component';
import { CreatehotelinvoiceComponent } from './createhotelinvoice/createhotelinvoice.component';
import { TaxesdisplayComponent } from './taxesdisplay/taxesdisplay.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ViewinvoiceComponent } from './viewinvoice/viewinvoice.component';
import { DeactivateGuard } from '../../core/deactivate.guard';
import { ViewhotelinvoiceComponent } from './viewhotelinvoice/viewhotelinvoice.component';
import { ViewflightinvoiceComponent } from './viewflightinvoice/viewflightinvoice.component';
import { ViewvisainvoiceComponent } from './viewvisainvoice/viewvisainvoice.component';
import { CreatevisainvoiceComponent } from './createvisainvoice/createvisainvoice.component';
import { AddFlightReceiptComponent } from './add-flight-receipt/add-flight-receipt.component';
import { AddHotelReceiptComponent } from './add-hotel-receipt/add-hotel-receipt.component';
import { AddVisaReceiptComponent } from './add-visa-receipt/add-visa-receipt.component';
import { NewpurchasepaymentComponent } from './newpurchasepayment/newpurchasepayment.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ViewpurchaseinvoiceComponent } from './viewpurchaseinvoice/viewpurchaseinvoice.component';

const routes: Routes = [{
  path: '',
  component: MastersComponent,
  children: [{
    path: 'dutytypedisp',
    component: DutytypedispComponent,
  },
  {
    path:'dutytype',
    component:DutyTypeComponent
  },
  {
    path:'suppliersdisp',
    component:SuppliersdispComponent,
  },
  {
    path:'addsupplier',
    component:AddSuppliersComponent
  },
  {
    path:'customer',
    component:CustomerComponent,
  },
  {
    path:'addcustomer',
    component:AddCustomerComponent,
    canDeactivate:[DeactivateGuard]
  },
  {
    path:'purchase-invoice',
    component:PurchaseInvoiceComponent,
  },
  {
    path:'receiptsdisp',
    component:ReceiptsdispComponent,
  },
  // {
  //   path:'customer',
  //   component:CustomerComponent,
  // },
  {
    path:'pettycashdisp',
    component:PettycashdispComponent,
  },
  {
    path:'vehiclegroupdisp',
    component:VehiclegroupdispComponent ,
  },
  {
    path:'vehicledisp',
    component:VehicledispComponent,
  },
  {
    path:'taxes',
    component:TaxesComponent,
  },
  {
    path: 'taxesDisplay',
    component: TaxesdisplayComponent
  },
  {
    path:'driver-disp',
    component:DriverDispComponent,
  },
  {
    path:'employeedisp',
    component:EmployeedispComponent,
  },
  {
    path:'new-duty-supporter',
    component:NewDutySupporterComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'subuserdisp',
    component:SubuserdispComponent
  },
  {
    path:'newuser',
    component:NewuserComponent
  },
  {
    path:'createinvoice',
    component:CreateinvoiceComponent
  },
  {
    path:'createflightinvoice',
    component:CreateflightinvoiceComponent
  },
  {
    path:'createhotelinvoice',
    component:CreatehotelinvoiceComponent
  },
  {
    path:'createvisainvoice',
    component:CreatevisainvoiceComponent
  },
  {
    path:'pricing',
    component:PricingComponent
  },
  {
    path:'purchase-duties',
    component:PurchaseDutiesComponent
  },
  {
    path:'purchase-payments',
    component:PurchasePaymentsComponent
  },
  {
    path:'labels',
    component:LabeldisplayComponent
  },
  {
    path:'customergroupdisplay',
    component:CustomergroupdisplayComponent
  },
  {
    path:'suppliergroupdisplay',
    component:SuppliergroupdisplayComponent
  },
  {
    path:'invoicedisplay',
    component:InvoicedisplayComponent
  },
  {
    path:'addPurchase',
    component:AddPurchaseComponent
  },
  {
    path: 'addReceipts',
    component : AddReceiptsComponent
  },
  {
    path: 'addFlightReceipts',
    component : AddFlightReceiptComponent
  },
  {
    path: 'addHotelReceipts',
    component : AddHotelReceiptComponent
  },
  {
    path: 'addVisaReceipts',
    component : AddVisaReceiptComponent
  },
  {
    path: 'addPurchasePayments',
    component : NewpurchasepaymentComponent
  },
  {
    path:'recurringbookby',
    component:RecurringbookbyComponent
  },
  {
    path:'recurringpassenger',
    component:RecurringpassengerComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path:'viewinvoice',
    component : ViewinvoiceComponent,
    canDeactivate : [DeactivateGuard]
  },
  {
    path:'viewhotelinvoice',
    component : ViewhotelinvoiceComponent,
    canDeactivate : [DeactivateGuard]
  },
  {
    path:'viewflightinvoice',
    component : ViewflightinvoiceComponent,
    canDeactivate : [DeactivateGuard]
  },
  {
    path:'viewvisainvoice',
    component : ViewvisainvoiceComponent,
    canDeactivate : [DeactivateGuard]
  },
  {
    path:'myprofile',
    component : MyprofileComponent
  },
  {
    path:'viewpurchaseinvoice',
    component: ViewpurchaseinvoiceComponent
  }
],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MastersRoutingModule {

}

export const routedComponents = [
  MastersComponent,
  DutyTypeComponent,
  AddSuppliersComponent,
  AddCustomerComponent,
  AddPurchaseComponent,
  AddReceiptsComponent,
  PettycashdispComponent,
  CustomerComponent,
  NewPettyCashComponent,
  VehicleGroupsComponent,
  NewVehiclesComponent,
  CustomergroupdisplayComponent,
];