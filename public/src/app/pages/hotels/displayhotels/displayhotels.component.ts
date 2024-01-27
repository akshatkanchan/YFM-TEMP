import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { HotelService } from './hotel.service';
import { User } from '../../../core/user';
import { AddhotelsComponent, hotelData } from '../addhotels/addhotels.component';
import { Router } from '@angular/router';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { HotelAdvancepaymentComponent } from '../hotel-advancepayment/hotel-advancepayment.component';
import { SubUser } from '../../masters/sub-users/sub-user';

@Component({
  selector: 'displayhotels',
  templateUrl: './displayhotels.component.html',
  styleUrls: ['./displayhotels.component.scss']
})
export class DisplayhotelsComponent implements OnInit {

  searchTerm:any;
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={}
  dataSource = new MatTableDataSource<hotelData>();
  tempArray:any[];
  displayedColumns = ['name','phone','email','state','Options'];
  permission:SubUser={};
  ws:WebSocket;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private auth:AuthService,private hotelService:HotelService, private dialog: MatDialog,private router:Router) { }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'hotel')
      this.hotelService.getHotels(this.user).subscribe(data=>{
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0];
        if(this.permission.manageHotels === 0) {
          this.displayedColumns.pop();
        }
      })
      this.hotelService.getHotels(this.user).subscribe(data=>{
        console.log(data)
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    })
  }

  selectRow(row) {
    console.log(row)
    this.dialog.open(AddhotelsComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{

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

  deleteHotel(row){
    console.log("delete called")
    this.dialog.open(ConfirmComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.hotelService.deleteHotel(row).subscribe(data=>{
          if(data.errno==undefined){
            var i=this.tempArray.indexOf(row);
            this.tempArray.splice(i,1);
            this.dataSource.data=this.tempArray;            
          }
          console.log("deleted")
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

  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter=""
  }

}
