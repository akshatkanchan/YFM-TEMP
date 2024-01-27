import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { SubUser } from '../sub-users/sub-user';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { SubUserService } from '../sub-users/sub-user.service';
import { NewpurchasepaymentComponent } from '../newpurchasepayment/newpurchasepayment.component';
import { ReceiptService } from '../addreceipts/receipt.service';

@Component({
  selector: 'app-purchase-payments',
  templateUrl: './purchase-payments.component.html',
  styleUrls: ['./purchase-payments.component.scss']
})
export class PurchasePaymentsComponent implements OnInit {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  length;
  pageSize=5;
  pageSizeOptions = [10, 15, 25, 40];
  dataSource=new MatTableDataSource();
  searchTerm;
  permission:SubUser={}
  user:User={}
  displayedColumns=['invoiceDate','supplier','purchases','mode','totalAmount','TDS','adjustment'];
  tempArray: any;
  idArray: any[] = [];

  constructor(
    public dialog:MatDialog,
    private auth:AuthService,
    private router:Router,
    private permissionService:SubUserService,
    private receiptsService: ReceiptService
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(data => {
      this.user = data[0];
      this.auth.permissions.subscribe(data => {
        this.permission = data[0];
        if(data[0].viewReceipts == 1) {
          this.receiptsService.getPurchasePayments(this.user).subscribe(data => {
            console.log(data);
            this.tempArray=data;
            data.forEach(element => {
              this.idArray.push(element.id);
            });
            
          },err=>{},()=>{
            this.loadInvoice(this.idArray)
          })
        }
        else {
          window.alert("You do not have permission to view receipts")
        }
      })
    })
  }

  search(filterValue:string) {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  clear() {
    this.searchTerm = '';
    this.dataSource.filter = '';
  }

  newPurchasePayment() {
    // this.dialog.open(NewpurchasepaymentComponent,{autoFocus:false,disableClose:true});
    this.router.navigateByUrl('/pages/masters/addPurchasePayments')
  }

  loadInvoice(idArray) {
  console.log(this.tempArray);
    this.receiptsService.getInvoiceInPurchasePaymentsByIds({idArray:idArray}).subscribe(data=>{
      data.forEach(element => {
        
        var tempIndex=this.tempArray.findIndex(x=>x.id==element.receiptId)
        console.log(tempIndex);
        if(tempIndex>=0)
        {
          if(this.tempArray[tempIndex].invoiceArray == undefined) {
            this.tempArray[tempIndex].invoiceArray = [element.invoiceNumber]
          }
          else {
            this.tempArray[tempIndex].invoiceArray.push(element.invoiceNumber);
          }
        }
        this.tempArray[tempIndex].invoiceArray = this.tempArray[tempIndex].invoiceArray.join(",")
      });
      
    },err=>{},()=>{
      this.dataSource.data=this.tempArray;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data);
    })
  }

}
