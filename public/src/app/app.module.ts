/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// import { ServiceWorkerModule } from '@angular/service-worker';
import { APP_BASE_HREF, DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule,MatInputModule,MatButtonModule,MatSortModule,MatSort,MatTabsModule, MatToolbarModule, MatFormFieldModule, MatIconModule, MatCardModule, MatMenuModule, MatPaginatorModule, MatDialogModule, MatSnackBarModule, MatChipsModule, MatDividerModule, MatListModule, MatButtonToggleModule, MatTooltipModule, MatStepperModule, MatDialogRef, MatProgressBarModule, MAT_DIALOG_DATA, MatProgressSpinnerModule, MatExpansionModule, MatOptionModule, MatAutocompleteModule, MatSelectModule, MatDatepickerModule, MatCheckboxModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, DateAdapter} from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from './pages/masters/customer/customer.service';
import { BookingsService } from './pages/operations/bookings.service';
import { CdkTableModule} from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';
import { DutyTypeService } from './pages/masters/dutytype/duty-type.service';
import { VehicleService } from './pages/masters/new-vehicles/vehicle.service';
import { EmployeeService } from './pages/masters/new-employees/employee.service';
import { SupplierService } from './pages/masters/addsuppliers/supplier.service';
import { ReceiptService } from './pages/masters/addreceipts/receipt.service';
import { SubUserService } from './pages/masters/sub-users/sub-user.service';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';
import { PurchaseService } from './pages/masters/addpurchase/purchase.service';
import { BillingService } from './pages/operations/new-billing/billing.service';
import { DutiesService } from './pages/duties/duties.service';
import { DutiesComponent } from './pages/duties/duties.component';
import { DriverService } from './pages/masters/new-driver/driver.service';
import { VehicleGroupsComponent } from './pages/masters/vehiclegroups/vehiclegroups.component';
import { NewPettyCashComponent } from './pages/masters/newpettycash/newpettycash.component';
import { NewEmployeesComponent } from './pages/masters/new-employees/new-employees.component';
import { CreateinvoiceComponent } from './pages/masters/createinvoice/createinvoice.component';
import { CustomerselectionComponent } from './pages/masters/customerselection/customerselection.component';
import { ExtendbookingComponent } from './pages/masters/extendbooking/extendbooking.component';
import { TaxesComponent } from './pages/masters/taxes/taxes.component';
import { InvoiceService } from './pages/masters/createinvoice/invoice.service';
import { BankAccountService } from './pages/operations/new-bank-account/bank-account.service';
import { CustomerComponent } from './pages/masters/customer/customer.component';
import { OverlayModule } from '../../node_modules/@angular/cdk/overlay';
import { PricingService } from './pages/masters/pricing/pricing.service';
import { NewcustomergroupComponent } from './pages/masters/newcustomergroup/newcustomergroup.component';
import { NewsuppliergroupComponent } from './pages/masters/newsuppliergroup/newsuppliergroup.component';
import { CircleService } from './pages/circles/circle.service';
import { LogoutComponent } from './pages/logout/logout.component';
import { NewBranchComponent } from './pages/operations/new-branch/new-branch.component';
import { CompanyprofileService } from './pages/circles/companyprofile/companyprofile.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ColorPickerModule } from 'ngx-color-picker';
import { MessagingService } from './messaging.service';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FileuploadService } from './fileupload.service';
import { AgmCoreModule } from '@agm/core';
import { QuillModule } from 'ngx-quill';
import { BusinesssettingService } from './pages/circles/businesssetting/businesssetting.service';
import { NotificationService } from './pages/masters/notifications/notification.service';
import { DeactivateGuard } from './core/deactivate.guard';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';
import { TrackyourvehicleComponent } from './pages/trackyourvehicle/trackyourvehicle.component';
import { AdvancepaymentService } from './pages/operations/advancepayment/advancepayment.service';
import { LightboxModule } from 'ngx-lightbox';
import { CallService } from './pages/duties/call/call.service';
import { JoinComponent } from './pages/join/join.component';
import { ActivitylogService } from './activitylog.service';
import { HttpClientModule } from '@angular/common/http';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { WalletService } from './pages/wallet/wallet.service';

@NgModule({
  declarations: [AppComponent,LoginComponent,LogoutComponent,UsermanagementComponent,TrackyourvehicleComponent,JoinComponent],
  imports: [
    // ServiceWorkerModule.register('/ngsw-config.js', {enabled:environment.production}),
    BrowserModule,
    CdkTableModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    MatSortModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatButtonToggleModule,
    OverlayModule,
    MatTooltipModule,
    MatStepperModule,
    MatButtonToggleModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    MatProgressBarModule,
    AngularFontAwesomeModule,
    MatProgressSpinnerModule,
    ColorPickerModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDNsoUEif3WORdOBYf80iNwmIaEnZhxm6o",
      libraries: ["places"]
    }),
    QuillModule,
    LightboxModule,
    MatExpansionModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    HttpClientModule,        
  ],
  entryComponents:[],
  exports:[
    MatButtonModule,
    MatMenuModule
  ]
  ,
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },{provide: MatDialogRef, useValue: {}},
    {provide:MAT_DIALOG_DATA,useValue:{}},
    {provide:LocationStrategy,useClass:HashLocationStrategy},
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
  [
    CallService,
    CircleService,
    CustomerService,
    InvoiceService,
    BankAccountService,
    DriverService,
    BookingsService,
    MatSort,
    BillingService,
    PurchaseService,
    DataSource,
    SubUserService,
    DutyTypeService,
    VehicleService,
    EmployeeService,
    SupplierService,
    ReceiptService,
    VehicleGroupsComponent,
    NewPettyCashComponent,
    NewEmployeesComponent,
    CreateinvoiceComponent,
    CustomerselectionComponent,
    ExtendbookingComponent,
    AuthService,
    AuthGuard,
    DeactivateGuard,
    DutiesService,
    TaxesComponent,
    CustomerComponent,
    DutiesComponent,
    DatePipe,
    PricingService,
    NewcustomergroupComponent,
    NewsuppliergroupComponent,
    NewBranchComponent,
    CompanyprofileService,
    MessagingService,
    FileuploadService,
    BusinesssettingService,
    NotificationService,
    AdvancepaymentService,
    ActivitylogService,
    WalletService
  ],],
  
})
export class AppModule {

}
