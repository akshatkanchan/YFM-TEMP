import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { FuelComponent } from './fuel/fuel.component';
import { AddfuelComponent } from './addfuel/addfuel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatIconModule, MatButtonModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule, MatTooltipModule, MatAutocompleteModule, MatSnackBarModule, MatMenuModule, MatProgressBarModule, MatTabsModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { FuelService } from './fuel/fuel.service';
import { SmsinfoComponent } from './smsinfo/smsinfo.component';
import { OfficeexpensesComponent } from './officeexpenses/officeexpenses.component';
import { AddofficeexpensesComponent } from './addofficeexpenses/addofficeexpenses.component';
import { VehiclemaintenanceexpensesComponent } from './vehiclemaintenanceexpenses/vehiclemaintenanceexpenses.component';
import { VehiclebreakdownexpensesComponent } from './vehiclebreakdownexpenses/vehiclebreakdownexpenses.component';
import { AddvehiclebreakdownexpensesComponent } from './addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component';
import { AddvehiclemaintenanceexpensesComponent } from './addvehiclemaintenanceexpenses/addvehiclemaintenanceexpenses.component';
import { ExpensesService } from './expenses.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule,
    ExpensesRoutingModule,    
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
    MatTabsModule
  ],
  declarations: [FuelComponent, AddfuelComponent, SmsinfoComponent, OfficeexpensesComponent, AddofficeexpensesComponent, VehiclemaintenanceexpensesComponent, VehiclebreakdownexpensesComponent, AddvehiclebreakdownexpensesComponent, AddvehiclemaintenanceexpensesComponent],
  providers: [
    FuelService, 
    ExpensesService,
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
export class ExpensesModule { }
