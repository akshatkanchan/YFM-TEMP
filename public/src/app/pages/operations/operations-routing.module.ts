import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsComponent } from './operations.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingsdispComponent } from './bookingsdisp/bookingsdisp.component';
import { BillingitemdisplayComponent } from './billingitemdisplay/billingitemdisplay.component';
import { BankAccountDisplayComponent } from './bank-account-display/bank-account-display.component';
import { BranchdisplayComponent } from './branchdisplay/branchdisplay.component';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { DeactivateGuard } from '../../core/deactivate.guard';
import { DutydispComponent } from './dutydisp/dutydisp.component';
import { ContactlogsComponent } from './contactlogs/contactlogs.component';
import { ReviewneededbookingsComponent } from './reviewneededbookings/reviewneededbookings.component';

const routes: Routes = [{
  path: '',
  component: OperationsComponent,
  children: [{
    path: 'bookings',
    component:BookingsComponent
  },
  {
    path:'addbooking',
    component:AddbookingComponent,
    canDeactivate : [DeactivateGuard]
  },
  {
    path:'bookingsdisp',
    component:BookingsdispComponent
  },
  {
    path:'bank-account-display',
    component:BankAccountDisplayComponent,
  },
  {
    path:'billingitemdisplay',
    component:BillingitemdisplayComponent,
  },
  {
    path:'branch',
    component:BranchdisplayComponent,
  },
  {
    path:'dutydisp',
    component:DutydispComponent,
    canDeactivate:[DeactivateGuard]
  },
  {
    path:'contactlogs',
    component:ContactlogsComponent
  },
  {
    path:'reviewneededbookings',
    component:ReviewneededbookingsComponent
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
export class OperationsRoutingModule {

}

export const routedComponents = [
  OperationsComponent,
  BookingsComponent,
  BookingsdispComponent,
];