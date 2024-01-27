import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirlineRoutingModule } from './airline-routing.module';
import { AirlineComponent } from './airline/airline.component';
import { AirlinedispComponent } from './airlinedisp/airlinedisp.component';
import { BookairlineComponent } from './bookairline/bookairline.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatIconModule, MatButtonModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule, MatTooltipModule, MatAutocompleteModule, MatSnackBarModule, MatMenuModule, MatProgressBarModule, MatTabsModule, MatChipsModule, MatProgressSpinnerModule, MatExpansionModule, MatDividerModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { AirlineService } from './airlinedisp/airline.service';
import { VisaComponent } from './visa/visa.component';
import { AddvisaComponent } from './addvisa/addvisa.component';
import { VisaService } from './visa/visa.service';
import { AirlineAdvancepaymentComponent } from './airline-advancepayment/airline-advancepayment.component';
import { VisaAdvancepaymentComponent } from './visa-advancepayment/visa-advancepayment.component';
import { AdvancepaymentService } from '../operations/advancepayment/advancepayment.service';
import { ViewflightbookingComponent } from './viewflightbooking/viewflightbooking.component';
import { ViewvisabookingComponent } from './viewvisabooking/viewvisabooking.component';
import { SendairlineconfirmationComponent } from './sendairlineconfirmation/sendairlineconfirmation.component';
import { SendvisaconfirmationComponent } from './sendvisaconfirmation/sendvisaconfirmation.component';
import { LightboxModule } from 'ngx-lightbox';
import { FlightticketComponent } from './flightticket/flightticket.component';
import { ViewflightticketComponent } from './viewflightticket/viewflightticket.component';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ExportbookingsComponent } from './exportbookings/exportbookings.component';
import { BookingsexportComponent } from '../operations/bookingsexport/bookingsexport.component';
import { ExportvisaComponent } from './exportvisa/exportvisa.component';
import { AirlineFilesComponent } from './airline-files/airline-files.component';
import { VisaFilesComponent } from './visa-files/visa-files.component';

@NgModule({
  imports: [
    CommonModule,
    AirlineRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ThemeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,    
    MatCheckboxModule,    
    MatRadioModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSnackBarModule,    
    MatMenuModule,
    FormsModule,
    MatProgressBarModule,
    MatTabsModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    LightboxModule,
    MatExpansionModule,
    MatDividerModule,
  ],
  entryComponents:[AirlineAdvancepaymentComponent, VisaAdvancepaymentComponent, ViewflightbookingComponent, ViewvisabookingComponent, SendairlineconfirmationComponent, SendvisaconfirmationComponent, FlightticketComponent,ExportbookingsComponent,ExportvisaComponent, VisaFilesComponent, AirlineFilesComponent],
  declarations: [AirlineComponent, AirlinedispComponent, BookairlineComponent, VisaComponent, AddvisaComponent, AirlineAdvancepaymentComponent, VisaAdvancepaymentComponent, ViewflightbookingComponent, ViewvisabookingComponent, SendairlineconfirmationComponent, SendvisaconfirmationComponent, FlightticketComponent, ViewflightticketComponent, ExportbookingsComponent, ExportvisaComponent, AirlineFilesComponent, VisaFilesComponent],
  providers: [
    AirlineService, 
    VisaService,
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
  ]
})
export class AirlineModule { }
