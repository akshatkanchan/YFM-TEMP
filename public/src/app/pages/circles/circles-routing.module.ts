import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CirclesdisplayComponent } from './circlesdisplay/circlesdisplay.component';
import { CirclesComponent } from './circles.component';
import { CirclerequestsComponent } from './circlerequests/circlerequests.component';
import { MyrequestsComponent } from './myrequests/myrequests.component';
import { BusinesssettingComponent } from './businesssetting/businesssetting.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { EditrequestComponent } from './editrequest/editrequest.component';
import { DeactivateGuard } from '../../core/deactivate.guard';

const routes:Routes=[{
  path:'',
  component:CirclesComponent,
  children:[{
    path:'circlesdisplay',
    component:CirclesdisplayComponent,
  },
  {
    path:'circlerequests',
    component:CirclerequestsComponent
  },
  {
    path:'myrequests',
    component:MyrequestsComponent
  },
  {
    path:'businesssetting',
    component:BusinesssettingComponent,
    canDeactivate : [DeactivateGuard]
  },
  {
    path:'companyprofile',
    component:CompanyprofileComponent,
    canDeactivate : [DeactivateGuard]
  },
  {
    path:'companyprofile',
    component:CompanyprofileComponent
  },
  {
    path:'editRequest',
    component:EditrequestComponent
  }
]
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class CirclesRoutingModule { }
export const routedComponents=[
  CirclesComponent,
  CirclesdisplayComponent,
  CirclerequestsComponent,
  MyrequestsComponent,
  BusinesssettingComponent,
  CompanyprofileComponent
]
