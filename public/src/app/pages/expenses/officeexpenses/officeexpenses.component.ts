import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddofficeexpensesComponent, OfficeExpenses } from '../addofficeexpenses/addofficeexpenses.component';
import { ExpensesService } from '../expenses.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { MatTableDataSource } from '@angular/material';
import { SubUser } from '../../masters/sub-users/sub-user';

@Component({
  selector: 'officeexpenses',
  templateUrl: './officeexpenses.component.html',
  styleUrls: ['./officeexpenses.component.scss']
})
export class OfficeexpensesComponent implements OnInit {

  length;
  pageSize=5;
  pageSizeOptions = [10, 15, 25, 40];
  user:User={};
  permission:SubUser={};
  displayedColumns=['date', 'particulars', 'amount'];
  tempArray:any[];
  dataSource = new MatTableDataSource<OfficeExpenses>();
  searchTerm:any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(
    private dialog: MatDialog,
    private expensesService: ExpensesService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
      })
      this.expensesService.getOfficeExpenses(this.user).subscribe(data=>{
        console.log(data)
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
      })
    })

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  selectRow(row) {
    console.log(row)
    this.dialog.open(AddofficeexpensesComponent,{autoFocus:false,disableClose:true, data:{row}}).afterClosed().subscribe(data => {
      if(data==undefined) {
        console.log('no')
      }
      else {
        console.log('yes')
        if(data.inserted=='yes') {
          this.tempArray.push(data.data);
          this.dataSource.data=this.tempArray          
          console.log(data.data)
        } 
      }       
    });
  }

  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter=""
  }
}
