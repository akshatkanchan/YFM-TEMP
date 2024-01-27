import { RouterModule, Routes, ExtraOptions, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DutiesComponent } from './duties/duties.component';
import { AirlineComponent } from './airline/airline/airline.component';
import { BookinganddutydisplayComponent } from './duties/bookinganddutydisplay/bookinganddutydisplay.component';
import { DutieseditComponent } from './duties/dutiesedit/dutiesedit.component';
import { DeactivateGuard } from '../core/deactivate.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, 
  {
    path: 'operations',
    loadChildren: './operations/operations.module#OperationsModule',
  },
  {
    path: 'masters',
    loadChildren: './masters/masters.module#MastersModule',
  },
  {
    path:'hotels',
    loadChildren:'./hotels/hotels.module#HotelsModule'
  },
  {
    path:'expenses',
    loadChildren:'./expenses/expenses.module#ExpensesModule'
  },
  {
    path:'circles',
    loadChildren:'./circles/circles.module#CirclesModule'
  },
  {
    path: 'duties',
    component: DutiesComponent,
  },
  {
    path : 'editduties',
    component : DutieseditComponent,
    canDeactivate : [DeactivateGuard]
  },
  {
    path: 'airline',
    loadChildren:'./airline/airline.module#AirlineModule'
  },
  {
    path: 'tracking',
    loadChildren: './tracking/tracking.module#TrackingModule'
  },
  {
    path: 'bookinganddutydisplay',
    component: BookinganddutydisplayComponent,
  },
  {
    path: 'wallet',
    loadChildren: './wallet/wallet.module#WalletModule'
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
