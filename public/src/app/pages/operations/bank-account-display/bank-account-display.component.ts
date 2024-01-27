import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NewBankAccountComponent } from '../new-bank-account/new-bank-account.component';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { BankAccountService } from '../new-bank-account/bank-account.service';
import { BankAccount } from '../new-bank-account/bank-account';
import { SubUser } from '../../masters/sub-users/sub-user';
import { SubUserService } from '../../masters/sub-users/sub-user.service';

@Component({
  selector: 'bank-account-display',
  templateUrl: './bank-account-display.component.html',
  styleUrls: ['./bank-account-display.component.scss']
})
export class BankAccountDisplayComponent implements OnInit {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  searchTerm;
  openImport;
  user:User={};
  dataSource=new MatTableDataSource<BankAccount>();
  permission:SubUser={};
  ws:WebSocket;
  displayedColumns=['accountName','accountNumber','bankName','bankBranch','ifscCode','chequeInTheNameOf','Options'];
  constructor(
    private dialog:MatDialog,
    private auth:AuthService,
    private bankAccountService:BankAccountService,
    private permissionService:SubUserService,    
  ) {
    
  }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/,'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function(event) {
      if(event.data == this.user.ownerId+'bankAccount') {
        this.bankAccountService.getBankAccount(this.user).subscribe(data=>{
          this.dataSource.data=data;
        });
      }
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(this.permission.manageBankAccounts === 0) {
          this.displayedColumns.pop();
        }
        if(data[0].viewBankAccounts==1){
          this.bankAccountService.getBankAccount(this.user).subscribe(data=>{
            this.dataSource.data=data;
          })
        }
        else{
          window.alert("You do not have permission to view bank accounts")
        }
      })
      
    })
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator
  }
  search(filterValue:string)
  {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  addBankAccount(temp:any){
    this.dialog.open(NewBankAccountComponent,{data: temp,autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data==undefined){

      }
      else{
        if(data.inserted=='yes'){
          console.log(data)
          this.ws.send(this.user.ownerId+'bankAccount');
        }
      }
    })
  }
  deleteBankAccount(temp:any){
    this.bankAccountService.deleteBankAccount(temp).subscribe(data=>{
      this.ws.send(this.user.ownerId+'bankAccount');
    });
  }
  clear(){
    this.searchTerm='',
    this.dataSource.filter='';
  }
  ngOnDestroy()
  {
    this.ws.close();
  }

}
