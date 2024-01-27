import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatTableModule, MatSortModule, MatMenuModule, MatIconModule, MatDialogModule, MatAutocompleteModule, MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatSelectModule, MatChipsModule, MatDividerModule, MatListModule, MatButtonToggleModule, MatCheckboxModule, MatPaginatorModule, MatSnackBarModule, MatTooltipModule, MatStepperModule, MatProgressBarModule, MatProgressSpinnerModule, MatOptionModule, MatGridListModule, MatTabsModule, MatSlideToggleModule, MatSliderModule, MatExpansionModule } from '@angular/material';
import { DutiesComponent } from './duties/duties.component';
import { BookingsService } from './operations/bookings.service';
import { DriverallotmentComponent } from './duties/driverallotment/driverallotment.component';
import { NewpettycashComponent } from './duties/newpettycash/newpettycash.component';
import { CreateplacardComponent } from './duties/createplacard/createplacard.component';
import { AddremovelabelsComponent } from './duties/addremovelabels/addremovelabels.component';
import { AllotsupportersComponent } from './duties/allotsupporters/allotsupporters.component';
import { DetailsComponent } from './duties/details/details.component';
import { ImportexcelComponent } from './duties/importexcel/importexcel.component';
import { OverlayModule } from '../../../node_modules/@angular/cdk/overlay';
import { DutieseditComponent } from './duties/dutiesedit/dutiesedit.component';
import { Duty } from './duties/duty';
import { ClosedutyComponent } from './duties/closeduty/closeduty.component';
import { DutySlipComponent } from './duties/duty-slip/duty-slip.component';
import { ConfirmComponent } from './modals/confirm/confirm.component';
import { CloseSupplierDutyComponent } from './duties/close-supplier-duty/close-supplier-duty.component';
import { BookingdetailsComponent } from './duties/bookingdetails/bookingdetails.component';
import { CallComponent } from './duties/call/call.component';
import { MultiplesupplierallotmentComponent } from './duties/multiplesupplierallotment/multiplesupplierallotment.component';
import { SendinfoComponent } from './duties/sendinfo/sendinfo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SenddutytosuppliersComponent } from './duties/senddutytosuppliers/senddutytosuppliers.component';
import { BookinganddutydisplayComponent } from './duties/bookinganddutydisplay/bookinganddutydisplay.component';
import { NewBranchService } from './operations/new-branch/new-branch.service';
import { AgmCoreModule } from '@agm/core';
import { OfflineallottmentComponent } from './duties/offlineallottment/offlineallottment.component';
import { SelfdriveComponent } from './duties/selfdrive/selfdrive.component';
import { LightboxModule } from 'ngx-lightbox';
import { ExportdutiesComponent } from './duties/exportduties/exportduties.component';
import { ExportService } from './operations/exportbookings/export.service';
import { ViewdutyslipComponent } from './duties/viewdutyslip/viewdutyslip.component';


const PAGES_COMPONENTS = [
  PagesComponent,
];


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatButtonToggleModule,
    OverlayModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatSliderModule,
    AgmCoreModule,
    LightboxModule,
    MatExpansionModule
  ],
  exports:[
    MatButtonModule,
    MatDialogModule,

  ],
  declarations: [
    ...PAGES_COMPONENTS,
    DutiesComponent,
    DriverallotmentComponent,
    NewpettycashComponent,
    CreateplacardComponent,
    AddremovelabelsComponent,
    AllotsupportersComponent,
    DetailsComponent,
    ImportexcelComponent,
    DutieseditComponent,
    ClosedutyComponent,
    DutySlipComponent,
    ConfirmComponent,
    CloseSupplierDutyComponent,
    BookingdetailsComponent,
    CallComponent,
    MultiplesupplierallotmentComponent,
    SendinfoComponent,
    SenddutytosuppliersComponent,
    BookinganddutydisplayComponent,
    OfflineallottmentComponent,
    SelfdriveComponent,
    ExportdutiesComponent,
    ViewdutyslipComponent

  ],
  entryComponents:[
    DriverallotmentComponent,
    NewpettycashComponent,
    BookingdetailsComponent,
    CreateplacardComponent,
    AddremovelabelsComponent,
    AllotsupportersComponent,
    DetailsComponent,
    ImportexcelComponent,
    DutieseditComponent,
    ClosedutyComponent,
    DutySlipComponent,
    ConfirmComponent,
    CloseSupplierDutyComponent,
    CallComponent,
    MultiplesupplierallotmentComponent,
    SendinfoComponent,
    SenddutytosuppliersComponent,
    BookinganddutydisplayComponent,
    OfflineallottmentComponent,
    SelfdriveComponent,
    ExportdutiesComponent,
    ViewdutyslipComponent,
  ],
  providers:[BookingsService,DutiesComponent,Duty, NewBranchService, ExportService]
})
export class PagesModule {
}
