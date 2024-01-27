import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { MastersRoutingModule, routedComponents } from './masters-routing.module';
import { MatTableModule,MatInputModule,MatSortModule,MatSort,
  MatButtonModule,
  MatDialog,
  MatDialogModule,MatFormFieldModule,MatSelectModule, MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatRadioModule,MatAutocompleteModule, MatTooltipModule, MatSnackBar, MatSnackBarModule, MatPaginator, MatTableDataSource, MatPaginatorModule, MatMenuModule, MatIconModule, MatProgressBarModule, MatTabsModule, MAT_DIALOG_DATA, MatChipsModule, MatListModule, MatStepperModule, MatCardModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, DateAdapter, MatExpansionModule} from '@angular/material';
import { TaxesComponent } from './taxes/taxes.component';
import { NewVehiclesComponent } from './new-vehicles/new-vehicles.component';
import { NewDriverComponent } from './new-driver/new-driver.component';
import { NewEmployeesComponent } from './new-employees/new-employees.component';
import { NewDutySupporterComponent } from './new-duty-supporter/new-duty-supporter.component';
import { SubUsersComponent } from './sub-users/sub-users.component';
import { SuppliersdispComponent } from './suppliersdisp/suppliersdisp.component';
import { DutiesdispComponent } from './dutiesdisp/dutiesdisp.component';
import { ReceiptsdispComponent } from './receiptsdisp/receiptsdisp.component';
import { NewuserComponent } from './newuser/newuser.component';
import { AddSuppliersComponent } from './addsuppliers/addsuppliers.component';
import { AddReceiptsComponent } from './addreceipts/addreceipts.component';
import { SubuserdispComponent } from './subuserdisp/subuserdisp.component';
import { DutytypedispComponent } from './dutytypedisp/dutytypedisp.component';
import { DutyTypeComponent } from './dutytype/dutytype.component';
import { AddCustomerComponent } from './addcustomer/addcustomer.component';
import { VehiclegroupdispComponent } from './vehiclegroupdisp/vehiclegroupdisp.component';
import { VehicleGroupsComponent } from './vehiclegroups/vehiclegroups.component';
import { PettycashdispComponent } from './pettycashdisp/pettycashdisp.component';
import { NewPettyCashComponent } from './newpettycash/newpettycash.component';
import { EmployeedispComponent } from './employeedisp/employeedisp.component';
import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
import { CustomerselectionComponent } from './customerselection/customerselection.component';
import { CustomerComponent } from './customer/customer.component';
import { BookingdispinvoiceComponent } from './bookingdispinvoice/bookingdispinvoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { PricingtablesComponent } from './pricingtables/pricingtables.component';
import { PurchaseDutiesComponent } from './purchase-duties/purchase-duties.component';
import { PurchasePaymentsComponent } from './purchase-payments/purchase-payments.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';
import { AddPurchaseComponent } from './addpurchase/addpurchase.component';
import { VehicledispComponent } from './vehicledisp/vehicledisp.component';
import { DriverDispComponent } from './driver-disp/driver-disp.component';
import { NewcustomergroupComponent } from './newcustomergroup/newcustomergroup.component';
import { NewsuppliergroupComponent } from './newsuppliergroup/newsuppliergroup.component';
import { SelectinvoicesComponent } from './selectinvoices/selectinvoices.component';
import { LabelsComponent } from './labels/labels.component';
import { LabelsService } from './labels/labels.service';
import { LabeldisplayComponent } from './labeldisplay/labeldisplay.component';
import { CustomergroupdisplayComponent } from './customergroupdisplay/customergroupdisplay.component';
import { SuppliergroupdisplayComponent } from './suppliergroupdisplay/suppliergroupdisplay.component';
import { InvoicedisplayComponent } from './invoicedisplay/invoicedisplay.component';
import { ViewinvoiceComponent } from './viewinvoice/viewinvoice.component';
import { SupplierdispComponent } from './supplierdisp/supplierdisp.component';
import { NewBranchService } from '../operations/new-branch/new-branch.service';
import { BookingsdispComponent } from '../operations/bookingsdisp/bookingsdisp.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewuserService } from './newuser/newuser.service';
import { UsersComponent } from './users/users.component';

import { RecurringbookbyComponent } from './recurringbookby/recurringbookby.component';
import { RecurringpassengerComponent } from './recurringpassenger/recurringpassenger.component';
import { EditrecurringbookbyComponent } from './editrecurringbookby/editrecurringbookby.component';
import { EditrecurringpassengerComponent } from './editrecurringpassenger/editrecurringpassenger.component';
import { HotelbookingsinvoiceComponent } from './hotelbookingsinvoice/hotelbookingsinvoice.component';
import { HotelService } from '../hotels/displayhotels/hotel.service';
import { FlightbookinginvoiceComponent } from './flightbookinginvoice/flightbookinginvoice.component';
import { AirlineService } from '../airline/airlinedisp/airline.service';
import { ColorPickerModule } from 'ngx-color-picker';
import { IncomingcalldutyinfoComponent } from './incomingcalldutyinfo/incomingcalldutyinfo.component';
import { CreateflightinvoiceComponent } from './createflightinvoice/createflightinvoice.component';
import { CreatehotelinvoiceComponent } from './createhotelinvoice/createhotelinvoice.component';
import { NewpurchasepaymentComponent } from './newpurchasepayment/newpurchasepayment.component';
import { RequestinvoiceComponent } from './requestinvoice/requestinvoice.component';
import { RequestdutyslipComponent } from './requestdutyslip/requestdutyslip.component';
import { SenddutyslipComponent } from './senddutyslip/senddutyslip.component';
import { ViewdutyslipComponent } from './viewdutyslip/viewdutyslip.component';
import { SelectpurchaseinvoicesComponent } from './selectpurchaseinvoices/selectpurchaseinvoices.component';
import { ViewflightinvoiceComponent } from './viewflightinvoice/viewflightinvoice.component';
import { ViewhotelinvoiceComponent } from './viewhotelinvoice/viewhotelinvoice.component';
import { TaxesdisplayComponent } from './taxesdisplay/taxesdisplay.component';
import { ViewpurchaseinvoiceComponent } from './viewpurchaseinvoice/viewpurchaseinvoice.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MailinvoiceComponent } from './mailinvoice/mailinvoice.component';
import { MailhotelinvoiceComponent } from './mailhotelinvoice/mailhotelinvoice.component';
import { MailflightinvoiceComponent } from './mailflightinvoice/mailflightinvoice.component';
import { ImportcustomerComponent } from './importcustomer/importcustomer.component';
import { ImportdriverComponent } from './importdriver/importdriver.component';
import { CreatevisainvoiceComponent } from './createvisainvoice/createvisainvoice.component';
import { ViewvisainvoiceComponent } from './viewvisainvoice/viewvisainvoice.component';
import { VisadispinvoiceComponent } from './visadispinvoice/visadispinvoice.component';
import { VisaService } from '../airline/visa/visa.service';
import { MailvisainvoiceComponent } from './mailvisainvoice/mailvisainvoice.component';
import { AddFlightReceiptComponent } from './add-flight-receipt/add-flight-receipt.component';
import { AddHotelReceiptComponent } from './add-hotel-receipt/add-hotel-receipt.component';
import { AddVisaReceiptComponent } from './add-visa-receipt/add-visa-receipt.component';
import { SelecthotelinvoicesComponent } from './selecthotelinvoices/selecthotelinvoices.component';
import { SelectflightinvoicesComponent } from './selectflightinvoices/selectflightinvoices.component';
import { SelectvisainvoicesComponent } from './selectvisainvoices/selectvisainvoices.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ChangedriverpasswordComponent } from './changedriverpassword/changedriverpassword.component';
import { InvoiceattachmentmodalComponent } from './invoiceattachmentmodal/invoiceattachmentmodal.component';
import { DriverprofileComponent } from './driverprofile/driverprofile.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { VehicleprofileComponent } from './vehicleprofile/vehicleprofile.component';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    ThemeModule,
    MastersRoutingModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatRadioModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatTabsModule,
    ColorPickerModule,
    MatChipsModule,
    MatListModule,
    MatStepperModule,
    MatCardModule,
    MatExpansionModule,
  ],
  exports:[
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  providers: [
    {provide:MAT_DIALOG_DATA,useValue:{}},
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: 'input',
        },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'DD/MM/YYYY',
          monthYearA11yLabel: 'MMMM YYYY',
        }
      } 
    },
    MatSort,
    LabelsService,
    NewBranchService,
    BookingsdispComponent,
    NewuserService,
    HotelService,
    AirlineService,
    VisaService,
    EditrecurringbookbyComponent,
    EditrecurringpassengerComponent
  ],
  declarations: [
    ...routedComponents,
    TaxesComponent,
    NewVehiclesComponent,
    NewDriverComponent,
    NewEmployeesComponent,
    NewDutySupporterComponent,
    SubUsersComponent,
    SuppliersdispComponent,
    DutiesdispComponent,
    ReceiptsdispComponent,
    NewuserComponent,
    SubuserdispComponent,
    DutytypedispComponent,
    VehiclegroupdispComponent,
    PettycashdispComponent,
    EmployeedispComponent,
    CreateinvoiceComponent,
    CustomerselectionComponent,
    CustomerComponent,
    BookingdispinvoiceComponent,
    PricingComponent,
    PricingtablesComponent,
    PurchaseDutiesComponent,
    PurchasePaymentsComponent,
    PurchaseInvoiceComponent,
    VehicledispComponent,
    DriverDispComponent,
    DutyTypeComponent,
    NewPettyCashComponent,
    NewcustomergroupComponent,
    NewsuppliergroupComponent,
    SelectinvoicesComponent,
    LabelsComponent,
    LabeldisplayComponent,
    CustomergroupdisplayComponent,
    SuppliergroupdisplayComponent,
    InvoicedisplayComponent,
    ViewinvoiceComponent,
    AddPurchaseComponent,
    SupplierdispComponent,
    UsersComponent,
    RecurringbookbyComponent,
    RecurringpassengerComponent,
    EditrecurringbookbyComponent,
    EditrecurringpassengerComponent,
    HotelbookingsinvoiceComponent,
    FlightbookinginvoiceComponent,
    IncomingcalldutyinfoComponent,
    CreateflightinvoiceComponent,
    CreatehotelinvoiceComponent,
    NewpurchasepaymentComponent,
    RequestinvoiceComponent,
    RequestdutyslipComponent,
    SenddutyslipComponent,
    ViewdutyslipComponent,
    SelectpurchaseinvoicesComponent,
    ViewflightinvoiceComponent,
    ViewinvoiceComponent,
    ViewhotelinvoiceComponent,
    TaxesdisplayComponent,
    ViewpurchaseinvoiceComponent,
    NotificationsComponent,
    MailinvoiceComponent,
    MailhotelinvoiceComponent,
    MailflightinvoiceComponent,
    ImportcustomerComponent,
    ImportdriverComponent,
    CreatevisainvoiceComponent,
    ViewvisainvoiceComponent,
    VisadispinvoiceComponent,
    MailvisainvoiceComponent,
    AddFlightReceiptComponent,
    AddHotelReceiptComponent,
    AddVisaReceiptComponent,
    SelecthotelinvoicesComponent,
    SelectflightinvoicesComponent,
    SelectvisainvoicesComponent,
    MyprofileComponent,
    ChangedriverpasswordComponent,
    InvoiceattachmentmodalComponent,
    DriverprofileComponent,
    EmployeeprofileComponent,
    VehicleprofileComponent
  ],
  entryComponents:[
    AddSuppliersComponent,
    AddReceiptsComponent,
    SubUsersComponent,
    NewuserComponent,
    DutyTypeComponent,
    AddCustomerComponent,
    VehicleGroupsComponent,
    NewPettyCashComponent,
    NewEmployeesComponent,
    CreateinvoiceComponent,
    CustomerselectionComponent,
    BookingdispinvoiceComponent,
    PricingtablesComponent,
    AddPurchaseComponent,
    NewVehiclesComponent,
    NewDriverComponent,
    CustomerComponent,
    NewcustomergroupComponent,
    NewsuppliergroupComponent,
    SelectinvoicesComponent,
    LabelsComponent,
    CustomergroupdisplayComponent,
    ViewinvoiceComponent,
    ViewflightinvoiceComponent,
    ViewhotelinvoiceComponent,
    DutiesdispComponent,
    SupplierdispComponent,
    EditrecurringbookbyComponent,
    EditrecurringpassengerComponent,
    HotelbookingsinvoiceComponent,
    FlightbookinginvoiceComponent,
    NewpurchasepaymentComponent,
    RequestinvoiceComponent,
    RequestdutyslipComponent,
    SenddutyslipComponent,
    ViewdutyslipComponent,
    SelectpurchaseinvoicesComponent,
    MailinvoiceComponent,
    MailhotelinvoiceComponent,
    MailflightinvoiceComponent,
    MailvisainvoiceComponent,
    ImportcustomerComponent,
    ImportdriverComponent,
    VisadispinvoiceComponent,
    SelectflightinvoicesComponent,
    SelecthotelinvoicesComponent,
    SelectvisainvoicesComponent,
    ViewpurchaseinvoiceComponent,
    ChangedriverpasswordComponent,
    InvoiceattachmentmodalComponent,
    DriverprofileComponent,
    EmployeeprofileComponent,
    VehicleprofileComponent
  ]
})
export class MastersModule { }
