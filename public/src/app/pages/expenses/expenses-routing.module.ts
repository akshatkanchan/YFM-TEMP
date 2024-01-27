import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuelComponent } from './fuel/fuel.component';
import { AddfuelComponent } from './addfuel/addfuel.component';
import { SmsinfoComponent } from './smsinfo/smsinfo.component';
import { OfficeexpensesComponent } from './officeexpenses/officeexpenses.component';
import { AddofficeexpensesComponent } from './addofficeexpenses/addofficeexpenses.component';
import { VehiclemaintenanceexpensesComponent } from './vehiclemaintenanceexpenses/vehiclemaintenanceexpenses.component';
import { AddvehiclemaintenanceexpensesComponent } from './addvehiclemaintenanceexpenses/addvehiclemaintenanceexpenses.component';
import { VehiclebreakdownexpensesComponent } from './vehiclebreakdownexpenses/vehiclebreakdownexpenses.component';
import { AddvehiclebreakdownexpensesComponent } from './addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component';

const routes: Routes = [
  {
    path:'fuel',
    component: FuelComponent
  },
  {
    path: 'addFuel',
    component: AddfuelComponent
  },
  {
    path: 'smsInfo',
    component: SmsinfoComponent
  },
  {
    path: 'officeExpenses',
    component: OfficeexpensesComponent
  },
  {
    path: 'addOfficeExpenses',
    component: AddofficeexpensesComponent
  },
  {
    path: 'vehicleMaintenanceExpenses',
    component: VehiclemaintenanceexpensesComponent
  },
  {
    path: 'addVehicleMaintenanceExpenses',
    component: AddvehiclemaintenanceexpensesComponent
  },
  {
    path: 'vehicleBreakdownExpenses',
    component: VehiclebreakdownexpensesComponent
  },
  {
    path: 'addVehicleBreakdownExpenses',
    component: AddvehiclebreakdownexpensesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
