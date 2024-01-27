import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddReceiptsComponent } from '../addreceipts/addreceipts.component';
import { Invoice } from '../createinvoice/invoice';
import { AuthService } from '../../../core/auth.service';
import { InvoiceService } from '../createinvoice/invoice.service';

@Component({
  selector: 'selectpurchaseinvoices',
  templateUrl: './selectpurchaseinvoices.component.html',
  styleUrls: ['./selectpurchaseinvoices.component.scss']
})
export class SelectpurchaseinvoicesComponent implements OnInit {

  displayedColumns = ['invoiceNumber', 'invoiceDate', 'totalAmount','Selector'];
  selectedCustomer:any;
  dataSource=new MatTableDataSource<Invoice>();

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private matDialogRef:MatDialogRef<AddReceiptsComponent>,
    public auth:AuthService,
    private invoiceService:InvoiceService
  ) { }

  ngOnInit() {
    this.selectedCustomer=this.data
    this.invoiceService.getCustPurchaseInvoices(this.selectedCustomer).subscribe(data => {
      data.forEach(element => {
        element.selected = false;
      });
      this.dataSource.data=data
    })
  }

  selectInvoices() {
    this.matDialogRef.close(this.dataSource.data);
  }

}
