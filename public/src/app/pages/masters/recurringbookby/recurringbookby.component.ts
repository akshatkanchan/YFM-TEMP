import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingsService } from '../../operations/bookings.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { EditrecurringbookbyComponent } from '../editrecurringbookby/editrecurringbookby.component';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { SubUser } from '../sub-users/sub-user';

@Component({
  selector: 'recurringbookby',
  templateUrl: './recurringbookby.component.html',
  styleUrls: ['./recurringbookby.component.scss']
  
})
export class RecurringbookbyComponent implements OnInit {


  searchTerm;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  

  length;
  pageSize=5;
  pageSizeOptions = [10, 15, 25, 40];
  user:User={}
  permission:SubUser={};
  displayedColumns=['name','phoneNo','emailId','address','Options'];
  dataSource=new MatTableDataSource<any>();
  ws:WebSocket;
  tempArray=[];

  constructor(private bookingService:BookingsService,
    private auth:AuthService, private editRecurringBookBy:EditrecurringbookbyComponent,
    private dialog:MatDialog,private snackBar:MatSnackBar) { }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
     this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'edit')
      this.bookingService.getRecurringBookedByAll(this.user).subscribe(data=>{
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0];
        if(this.permission.manageRecurringBookedBy === 0){
          this.displayedColumns.pop()
        }
      })
      this.bookingService.getRecurringBookedByAll(this.user).subscribe(data=>{
        console.log(data)
        this.tempArray=data;
        this.dataSource.data=this.tempArray
        this.length= data.length
      })
    })
    this.dataSource.sort=this.sort
    this.dataSource.paginator=this.paginator
  }
  newBookBy(){
    this.dialog.open(EditrecurringbookbyComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      console.log(data);
      if(data.inserted=='yes'){
        this.tempArray.push(data.data)
        this.dataSource.data=this.tempArray
      }
    });
  }
  edit(row){
    this.dialog.open(EditrecurringbookbyComponent,{data:row,autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      console.log(data);
      if(data=='edit') {
        this.ws.send(this.user.ownerId+'edit')
      }
    })
  }
  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter=''
  }

  delete(row)
  {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.editRecurringBookBy.deleteBookBy(row).subscribe(data=>{
          console.log(data);
          if(data.errno==undefined){
            var i=this.tempArray.indexOf(row);
            this.tempArray.splice(i,1);
            this.dataSource.data=this.tempArray;
            this.snackBar.open("Recurring BookBy Deleted","X",{duration:3000});
          }
        })
      }
    })
  }

}
