import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../core/user';
import { MatTableDataSource } from '@angular/material/table';
import { Tax, TaxesComponent } from '../taxes/taxes.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from '../../../core/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InvoiceService } from '../createinvoice/invoice.service';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { SubUser } from '../sub-users/sub-user';
import { MatSnackBar } from '@angular/material';
import { findIndex } from 'rxjs/operator/findIndex';

@Component({
  selector: 'taxesdisplay',
  templateUrl: './taxesdisplay.component.html',
  styleUrls: ['./taxesdisplay.component.scss']
})
export class TaxesdisplayComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={}
  dataSource = new MatTableDataSource<Tax>();
  tempArray:any[];
  displayedColumns = ['taxName','percent', 'Options'];
  permission:SubUser={}
  ws: WebSocket;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(
    private auth:AuthService,
    private dialog: MatDialog,
    private router:Router,
    private invoiceService: InvoiceService,
    private taxesService: TaxesComponent,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'taxes')
      this.invoiceService.getTaxes(this.user).subscribe(data=>{
        this.tempArray=data;
        this.datasource.data=this.tempArray;
        this.length = data.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0];
        if(this.permission.manageTaxes === 0) {
          this.displayedColumns.pop();
        }
      })
      this.invoiceService.getTaxes(this.user).subscribe(data => {
        console.log(data)
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    })
  }

  ngOnDestroy()
  {
    this.ws.close();
  }

  selectRow(row) {
    console.log(row)
    this.dialog.open(TaxesComponent, {autoFocus:false,disableClose:true, data: {row}}).afterClosed().subscribe(data => {
      if(data == undefined) {
        console.log('no')
      }
      else {
        console.log('yes')        
          this.tempArray.push(data.data);
          this.dataSource.data = this.tempArray          
          console.log(data.data)        
      }
    })
  }

  deleteRow(row){
    console.log("delete called")
    this.dialog.open(ConfirmComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data == 'no'){}
      if(data=='yes'){
        this.taxesService.deletetax(row).subscribe(data=>{
          if(data.errno==undefined)
          {                       
            var i=this.tempArray.indexOf(row);
            this.tempArray.splice(i,1);
            this.dataSource.data = this.tempArray;             
            this.snackBar.open("Tax Deleted","X",{duration:3000});
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


}
