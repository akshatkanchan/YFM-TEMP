import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { DutiesService } from '../../duties/duties.service';
import { User } from '../../../core/user';
import { DetailsComponent } from '../../duties/details/details.component';
import { DutychangesComponent } from '../dutychanges/dutychanges.component';

@Component({
  selector: 'editrequest',
  templateUrl: './editrequest.component.html',
  styleUrls: ['./editrequest.component.scss']
})
export class EditrequestComponent implements OnInit {

  length;
  pageSize = 10; 

  pageSizeOptions = [10, 15, 25, 40];
 dataSource=new MatTableDataSource();
 searchTerm:any;
 clear:any;

  displayedColumns = ['startDate','cname', 'bookBy', 'passenger','driver','dutyType','vehicleGroup',
 'reportingAddress','dropAddress','reportingTime','remarks','status','Options'];

 user:User={};
 valueChanges:any;

  constructor(private auth:AuthService,private dutyService:DutiesService,private dialog:MatDialog) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.dutyService.getRequestUpdateDuties(this.user).subscribe(data=>{
        this.dataSource=data
      })
    })
  }
  selectRow(row){
    this.dialog.open(DutychangesComponent,{autoFocus:false,disableClose:true,
      data:{
        row,
        valueChanges:this.valueChanges
      }})
  }
  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

}
