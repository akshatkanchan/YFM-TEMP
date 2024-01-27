import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ConnectpeopleComponent } from '../connectpeople/connectpeople.component';
import { CircleService } from '../circle.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { SubUser } from '../../masters/sub-users/sub-user';

@Component({
  selector: 'app-circlesdisplay',
  templateUrl: './circlesdisplay.component.html',
  styleUrls: ['./circlesdisplay.component.scss']
})
export class CirclesdisplayComponent implements OnInit {

  dataSource=new MatTableDataSource;
  displayedColumns=["name","phone","alternatePhone","email","headOfficeCity","state","Options"]
  users:any
  user:User={};
  permission:SubUser={};
  suppliers:any[];
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  searchTerm:any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  
  constructor(private matDialog:MatDialog,
    private circlesService:CircleService,
    private auth:AuthService
    ) { }
    

  ngOnInit() {
    
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0];
        if(this.permission.manageCircle === 0) {
          this.displayedColumns.pop();
        }
      })
      this.circlesService.getCircle(this.user).subscribe(data=>{
        this.dataSource.data=data;
        this.length=data.length;
      })
    })
  
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  connectPeople()
  {
    this.matDialog.open(ConnectpeopleComponent);
  }

  search(filter:string)
  {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  clear()
  {
    this.searchTerm=""
  }
  
}

