import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddhotelsComponent } from './addhotels/addhotels.component';
import { DisplayhotelsComponent } from './displayhotels/displayhotels.component';
import { BookhotelComponent } from './bookhotel/bookhotel.component';
import { BookroomComponent } from './bookroom/bookroom.component';
import { DisplayhotelbookingsComponent } from './displayhotelbookings/displayhotelbookings.component';

const routes: Routes = [{
  path:'',
  children:[
    {
      path:'addhotels',
      component:AddhotelsComponent,
    },
    {
      path: 'displayhotels',
      component: DisplayhotelsComponent,
    },
    {
      path: 'bookhotel',
      component: BookhotelComponent,
    },
    {
      path: 'bookroom',
      component: BookroomComponent,
    },
    {
      path: 'displayhotelbookings',
      component: DisplayhotelbookingsComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
