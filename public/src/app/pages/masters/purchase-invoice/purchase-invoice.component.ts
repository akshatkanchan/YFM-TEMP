import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { AddPurchaseComponent } from '../addpurchase/addpurchase.component';
import { Router } from '@angular/router';
import { SubUser } from '../sub-users/sub-user';
import { SubUserService } from '../sub-users/sub-user.service';
import { InvoiceService } from '../createinvoice/invoice.service';
import { ViewpurchaseinvoiceComponent } from '../viewpurchaseinvoice/viewpurchaseinvoice.component';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss']
})
export class PurchaseInvoiceComponent implements OnInit {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  length;
  pageSize=5;
  pageSizeOptions = [10, 15, 25, 40];
  dataSource=new MatTableDataSource();
  searchTerm;
  permission:SubUser={}
  user:User={}
  displayedColumns=['invoiceNumber','invoiceDate','supplier','supInvNo','supInvDate','totalAmount','paidAmount','outstandingAmount','stats','Options'];
  constructor(public dialog:MatDialog,
    private auth:AuthService,
    private router:Router,
    private permissionService:SubUserService,
    private invoiceService: InvoiceService
  ) { }

  

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0];
        if(this.permission.managePurchasesInvoices === 0) {
          this.displayedColumns.pop();
        }
        if(data[0].viewPurchasesInvoices==1){
          this.invoiceService.getPurchaseInvoices(this.user).subscribe(data => {
            console.log(data)
            this.dataSource.data=data;
            this.length = data.length;
          })
        }
        else{
          window.alert("You do not have permission to access purchase invoices")
        }
      })
    })
  }
  search(filterValue:string)
  {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter='';
  }
  addPurchaseInvoices() {
    this.router.navigateByUrl('/pages/masters/addPurchase');
  }

  viewInvoice(row) {

    localStorage.setItem('purchaseinvoice',JSON.stringify(row));
    this.router.navigateByUrl('/pages/masters/viewpurchaseinvoice');

  }

}
