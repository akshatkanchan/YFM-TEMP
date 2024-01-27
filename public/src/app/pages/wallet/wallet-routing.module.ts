import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletdispComponent } from './walletdisp/walletdisp.component';

const routes: Routes = [
  {
    path:'walletdisp',
    component: WalletdispComponent
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
