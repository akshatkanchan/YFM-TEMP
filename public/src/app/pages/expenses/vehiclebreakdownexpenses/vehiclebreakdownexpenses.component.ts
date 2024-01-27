import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../core/user';
import { AddvehiclebreakdownexpensesComponent, VehicleBreakdownExpenses } from '../addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../core/auth.service';
import { ExpensesService } from '../expenses.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { SubUser } from '../../masters/sub-users/sub-user';

@Component({
  selector: 'vehiclebreakdownexpenses',
  templateUrl: './vehiclebreakdownexpenses.component.html',
  styleUrls: ['./vehiclebreakdownexpenses.component.scss']
})
export class VehiclebreakdownexpensesComponent implements OnInit {

  searchTerm:any;
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={};
  permission:SubUser={};
  dataSource = new MatTableDataSource<VehicleBreakdownExpenses>();
  tempArray:any[];
  displayedColumns = ['date','vehicleName', 'vehicleNumber','amount','Options'];
  ws:WebSocket;

  constructor(
    private dialog: MatDialog,
    private auth: AuthService,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar,
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'vehiclebreakdownexpenses')
      this.expensesService.getVehicleBreakdownExpenses(this.user).subscribe(data=>{
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0];
        if(this.permission.manageVehicleBreakDowns === 0){
          this.displayedColumns.pop()
        }
      })
      this.expensesService.getVehicleBreakdownExpenses(this.user).subscribe(data=>{
        console.log(data)
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
      })
    })

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.ws.close();
  }

  selectRow(row) {
    console.log(row)
    this.dialog.open(AddvehiclebreakdownexpensesComponent, {autoFocus:false,disableClose:true, data:{row}}).afterClosed().subscribe(data => {
      if(data == undefined) {
        console.log('no')
      }
      else {
        console.log('yes')
        if(data.inserted == 'yes') {
          this.tempArray.push(data.data);
          this.dataSource.data = this.tempArray          
          console.log(data.data)
        } 
      }       
    });
  }
  deleteExpense(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.expensesService.deleteVehicleBreakdownExpensesData(row).subscribe(data=>{
          if(data.errno==undefined)
          {
            var i=this.tempArray.indexOf(row);
            this.tempArray.splice(i,1);
            this.dataSource.data=this.tempArray;
            this.snackBar.open("Expense Deleted","X",{duration:3000});
          }
          else
          {
            if(data.errno==1451)
            {
              window.alert("Cannot delete because you have corresponding Duties");
            }
            else
            { 
              window.alert("Error Cannot Delete Expense");
            }
          }       
        });
      }      
    })
  }

  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter=""
  }

}
