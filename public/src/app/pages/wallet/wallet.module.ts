import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletdispComponent } from './walletdisp/walletdisp.component';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatGridListModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDatepickerModule, MatSelectModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { WalletService } from './wallet.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  providers:[
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
    WalletService
  ],
  declarations: [WalletdispComponent, AddmoneyComponent],
  entryComponents: [AddmoneyComponent]
})
export class WalletModule { }
