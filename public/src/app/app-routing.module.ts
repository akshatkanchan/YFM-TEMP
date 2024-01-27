import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/auth.guard';
import { LogoutComponent } from './pages/logout/logout.component';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';
import { TrackyourvehicleComponent } from './pages/trackyourvehicle/trackyourvehicle.component';
import { JoinComponent } from './pages/join/join.component';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule',canActivate:[AuthGuard] },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'logout',component:LogoutComponent
  },
  { 
    path: 'usermanagement', component: UsermanagementComponent 
  },
  { 
    path: 'TrackYourVehicle', component: TrackyourvehicleComponent 
  },
  {
    path: 'join', component: JoinComponent
  }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
