import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackvehicleComponent } from './trackvehicle/trackvehicle.component';
import { DeactivateGuard } from '../../core/deactivate.guard';

const routes: Routes = [{
  path: '',
  children:[
    {
      path: 'trackVehicle',
      component: TrackvehicleComponent,
      canDeactivate : [DeactivateGuard]
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingRoutingModule { }
