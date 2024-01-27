import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HotelsRoutingModule } from './hotels-routing.module';
import { AddhotelsComponent } from './addhotels/addhotels.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatIconModule, MatButtonModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule, MatTooltipModule, MatAutocompleteModule, MatSnackBarModule, MatMenuModule, MatProgressBarModule, MatTabsModule, MatChipsModule, MatProgressSpinnerModule, MatExpansionModule, MatDividerModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { DisplayhotelsComponent } from './displayhotels/displayhotels.component';
import { BookhotelComponent } from './bookhotel/bookhotel.component';
import { HotelService } from './displayhotels/hotel.service';
import { BookroomComponent } from './bookroom/bookroom.component';
import { HotelComponent } from './hotel/hotel.component';
import { DisplayhotelbookingsComponent } from './displayhotelbookings/displayhotelbookings.component';
import { HotelAdvancepaymentComponent } from './hotel-advancepayment/hotel-advancepayment.component';
import { AirlineService } from '../airline/airlinedisp/airline.service';
import { ViewhotelbookingComponent } from './viewhotelbooking/viewhotelbooking.component';
import { SendhotelconfirmationComponent } from './sendhotelconfirmation/sendhotelconfirmation.component';
import { LightboxModule } from 'ngx-lightbox';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ExporthotelsComponent } from './exporthotels/exporthotels.component';
import { HotelFilesComponent } from './hotel-files/hotel-files.component';

@NgModule({
  imports: [
    CommonModule,
    HotelsRoutingModule,
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
    MatDatepickerModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    LightboxModule,
    MatExpansionModule,
    MatDividerModule,
  ],
  entryComponents: [HotelAdvancepaymentComponent, ViewhotelbookingComponent, SendhotelconfirmationComponent,ExporthotelsComponent, HotelFilesComponent],
  declarations: [AddhotelsComponent, DisplayhotelsComponent, BookhotelComponent, BookroomComponent, HotelComponent, DisplayhotelbookingsComponent, HotelAdvancepaymentComponent, ViewhotelbookingComponent, SendhotelconfirmationComponent, ExporthotelsComponent, HotelFilesComponent],
  providers: [
    HotelService,
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
export class HotelsModule { }
