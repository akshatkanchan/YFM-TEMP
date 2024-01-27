import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlinedispComponent } from './airlinedisp/airlinedisp.component';
import { BookairlineComponent } from './bookairline/bookairline.component';
import { VisaComponent } from './visa/visa.component';
import { AddvisaComponent } from './addvisa/addvisa.component';
import { AuthGuard } from '../../core/auth.guard';

const routes: Routes = [{
  path: '',
  children:[
    {
      path: 'airlinedisp',
      component: AirlinedispComponent,
      canActivate:[AuthGuard],
      data:{
        expectedRole:'viewFlights'
      }
    },
    {
      path: 'bookairline',
      component: BookairlineComponent
    },
    {
      path: 'visa',
      component: VisaComponent
    },
    {
      path: 'addvisa',
      component: AddvisaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirlineRoutingModule { }
