import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { NewBranchComponent, Branch } from '../new-branch/new-branch.component';
import { AuthService } from '../../../core/auth.service';
import { NewBranchService } from '../new-branch/new-branch.service';
import { User } from '../../../core/user';
import { SubUser } from '../../masters/sub-users/sub-user';
import { SubUserService } from '../../masters/sub-users/sub-user.service';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';

@Component({
  selector: 'branchdisplay',
  templateUrl: './branchdisplay.component.html',
  styleUrls: ['./branchdisplay.component.scss']
})
export class BranchdisplayComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  dataSource=new MatTableDataSource<Branch>();
  displayedColumns=['name','type','phoneNumber','cityOfOperation','Options'];
  user:User={};
  permission:SubUser={}
  searchTerm;
  openImport;
  ws:WebSocket;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(
    private dialog:MatDialog,
    private auth:AuthService,
    private branchService:NewBranchService,
    private permissionSerivce:SubUserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/,'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function(event) {
      if(event.data == this.user.ownerId+'branch') {
        this.branchService.getBranches(this.user).subscribe(data=>{
          this.dataSource.data=data;
        });
      }
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(this.permission.manageBranches === 0) {
          this.displayedColumns.pop();
        }
        if(data[0].viewBranches==1){
          this.branchService.getBranches(this.user).subscribe(data=>{
            this.dataSource.data=data;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          })
        }
        else{
          window.alert("You do not have permission to view branches")
        }
      })      
      
    })
  }
  search(filterValue:string)
  {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  clear(){
    this.searchTerm='',
    this.dataSource.filter='';
  }

  newBranch(){
    this.dialog.open(NewBranchComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data=="yes"){
        this.ws.send(this.user.ownerId+'branch')
      }
    })
  }

  selectRow(row)
  {
    this.dialog.open(NewBranchComponent,{autoFocus:false,disableClose:true,data:{row}})
  }
  deleteRow(row){
    this.dialog.open(ConfirmComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data == 'no'){}
      if(data=='yes'){
        this.branchService.deleteBranches(row).subscribe(data=>{
          if(data.errno==undefined)
          {                        
            this.ws.send(this.user.ownerId+"driver-disp");            
            this.snackBar.open("Branch Deleted","X",{duration:3000});
          }  
        });
      }
      else{
        if(data.errno==1451){
          window.alert("Cannot delete because you have corresponding data");
        }
        else{
          window.alert("Error Cannot be Deleted")
        }
      }
    })
  }
  ngOnDestroy()
  {
      this.ws.close();
  }
}
