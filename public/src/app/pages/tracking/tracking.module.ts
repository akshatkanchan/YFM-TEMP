import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingRoutingModule } from './tracking-routing.module';
import { TrackvehicleComponent } from './trackvehicle/trackvehicle.component';
import { ThemeModule } from '../../@theme/theme.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatOptionModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatIconModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    TrackingRoutingModule,
    ThemeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    AgmCoreModule,
    MatIconModule
  ],
  declarations: [TrackvehicleComponent]
})
export class TrackingModule { }
