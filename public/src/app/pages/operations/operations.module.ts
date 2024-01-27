import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { OperationsRoutingModule, routedComponents } from './operations-routing.module';
import { BookingsdispComponent } from './bookingsdisp/bookingsdisp.component';
import { MatTableModule,MatInputModule,MatSortModule,MatSort,
  MatButtonModule,MatAutocompleteModule,
  MatDialogModule,MatFormFieldModule,MatSelectModule, MatDatepickerModule,MatNativeDateModule,MatCheckboxModule, MatIconModule, MatMenuModule, MatPaginatorModule, MatRadioModule, MatChipsModule, MatTooltipModule, MatProgressBarModule, MatProgressSpinnerModule, MatDatepicker, MatSlideToggleModule, MatExpansionModule, MatDividerModule, MatTabsModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS} from '@angular/material';
import { NewBankAccountComponent } from './new-bank-account/new-bank-account.component';
import { NewBillingComponent } from './new-billing/new-billing.component';
import { NewBranchComponent } from './new-branch/new-branch.component';
import { DutiesComponent } from '../duties/duties.component';
import { ExtendbookingComponent } from '../masters/extendbooking/extendbooking.component';
import { AdvancepaymentComponent } from './advancepayment/advancepayment.component';
import { SendconfirmationComponent } from './sendconfirmation/sendconfirmation.component';
import { ImportbookingsComponent } from './importbookings/importbookings.component';
import { BillingitemdisplayComponent } from './billingitemdisplay/billingitemdisplay.component';
import { BankAccountDisplayComponent } from './bank-account-display/bank-account-display.component';
import { BranchdisplayComponent } from './branchdisplay/branchdisplay.component';
import { NewBranchService } from './new-branch/new-branch.service';
import { CreatebookinginvoiceComponent } from './bookinginvoice/createbookinginvoice/createbookinginvoice.component';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { DateConfirmComponent } from './date-confirm/date-confirm.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { AgmCoreModule } from '@agm/core';
import { AdvancepaymentService } from './advancepayment/advancepayment.service';
import { LightboxModule } from 'ngx-lightbox';
import { AddCustomerComponent } from '../masters/addcustomer/addcustomer.component';
import { AddcustomerinbookingComponent } from './addcustomerinbooking/addcustomerinbooking.component';
import { ExportbookingsComponent } from './exportbookings/exportbookings.component';
import { ExportService } from './exportbookings/export.service';
import { BookingsexportComponent } from './bookingsexport/bookingsexport.component';
import { DutydispComponent } from './dutydisp/dutydisp.component';
import { ContactlogsComponent } from './contactlogs/contactlogs.component';
import { ContactlogsService } from './contactlogs.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ReviewneededbookingsComponent } from './reviewneededbookings/reviewneededbookings.component';
import { BookingfilesComponent } from './bookingfiles/bookingfiles.component';


@NgModule({
  imports: [
    ThemeModule,
    MatTableModule,
    MatAutocompleteModule,
    OperationsRoutingModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    AgmCoreModule,
    LightboxModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule
  ],
  exports:[
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule, MatMenuModule
  ],
  providers: [
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
    DutiesComponent,
    NewBranchComponent,
    NewBranchService,
    BookingsdispComponent,
    MatDatepicker,
    AdvancepaymentService,
    ExportService,
    ContactlogsService
  ],
  declarations: [
    ...routedComponents,
    BookingsdispComponent,
    NewBankAccountComponent,
    NewBillingComponent,
    NewBranchComponent,
    ExtendbookingComponent,
    AdvancepaymentComponent,
    SendconfirmationComponent,
    ImportbookingsComponent,
    BillingitemdisplayComponent,
    BankAccountDisplayComponent,
    BranchdisplayComponent,
    CreatebookinginvoiceComponent,
    AddbookingComponent,
    DateConfirmComponent,
    SchedulerComponent,
    AddcustomerinbookingComponent,
    ExportbookingsComponent,
    BookingsexportComponent,
    DutydispComponent,
    ContactlogsComponent,
    ReviewneededbookingsComponent,
    BookingfilesComponent
  ],
  entryComponents:[
    ExtendbookingComponent,
    AdvancepaymentComponent,
    SendconfirmationComponent,
    ImportbookingsComponent,
    NewBillingComponent,
    NewBankAccountComponent,
    NewBranchComponent,
    DateConfirmComponent,
    AdvancepaymentComponent,
    AddcustomerinbookingComponent,
    ExportbookingsComponent,
    BookingsexportComponent,
    BookingfilesComponent
  ]
})
export class OperationsModule { }
