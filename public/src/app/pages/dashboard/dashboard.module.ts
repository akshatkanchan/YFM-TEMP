import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatSelectModule, MatButtonModule, MatButtonToggleModule} from '@angular/material';
import { DashboardService } from './dashboard.service';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    ChartsModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers:[DashboardService]
})
export class DashboardModule { }
