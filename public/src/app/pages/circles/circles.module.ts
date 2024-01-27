import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirclesdisplayComponent } from './circlesdisplay/circlesdisplay.component';
import { routedComponents, CirclesRoutingModule } from './circles-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { MatSortModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatCheckboxModule, MatTableModule, MatRadioModule, MatTooltipModule, MatAutocompleteModule, MatSnackBarModule, MatPaginatorModule, MatMenuModule, MatIconModule, MatListModule, MatChipsModule, MatTabsModule } from '@angular/material';
import { ConnectpeopleComponent } from './connectpeople/connectpeople.component';
import { CirclerequestsComponent } from './circlerequests/circlerequests.component';
import { ConfirmrequestsComponent } from './confirmrequests/confirmrequests.component';
import { MyrequestsComponent } from './myrequests/myrequests.component';
import { BusinesssettingComponent } from './businesssetting/businesssetting.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { MappingComponent } from './mapping/mapping.component';
import { EditrequestComponent } from './editrequest/editrequest.component';
import { DutychangesComponent } from './dutychanges/dutychanges.component';
import { QuillModule } from 'ngx-quill';
import { NewBranchService } from '../operations/new-branch/new-branch.service';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatRadioModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    CirclesRoutingModule,
    MatListModule,
    MatChipsModule,
    MatTabsModule,
    QuillModule
  ],
  declarations: [CirclesdisplayComponent,
    routedComponents,
    ConnectpeopleComponent,
    CirclerequestsComponent,
    ConfirmrequestsComponent,
    MyrequestsComponent,
    BusinesssettingComponent,
    CompanyprofileComponent,
    MappingComponent,
    EditrequestComponent,
    DutychangesComponent
  ],
  entryComponents:[
    ConnectpeopleComponent,
    ConfirmrequestsComponent,
    MappingComponent,
    DutychangesComponent
  ],
  providers:
  [
    NewBranchService
  ]
})
export class CirclesModule { }
