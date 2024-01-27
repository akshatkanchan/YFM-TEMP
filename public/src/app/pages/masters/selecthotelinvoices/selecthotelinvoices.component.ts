import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Invoice } from '../createinvoice/invoice';
import { AddReceiptsComponent } from '../addreceipts/addreceipts.component';
import { AuthService } from '../../../core/auth.service';
import { InvoiceService } from '../createinvoice/invoice.service';

@Component({
  selector: 'selecthotelinvoices',
  templateUrl: './selecthotelinvoices.component.html',
  styleUrls: ['./selecthotelinvoices.component.scss']
})
export class SelecthotelinvoicesComponent implements OnInit {

  displayedColumns = ['invoiceNumber', 'invoiceDate', 'totalAmount','Selector'];
  selectedCustomer:any;
  selectedInvoices=[];
  checkedInvoices:any[]=[]
  dataSource=new MatTableDataSource<Invoice>();

  @ViewChild(MatSort) sort: MatSort;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialogRef<AddReceiptsComponent>,public auth:AuthService,private invoiceService:InvoiceService) { }

  ngOnInit() {
    console.log(this.data)
    this.selectedCustomer=this.data.selectedCustomer
    this.checkedInvoices=this.data.selectedInvoices
    this.selectedInvoices=this.checkedInvoices
    this.invoiceService.getCustInvoicesInHotels(this.selectedCustomer).subscribe(data=>
      {
        data.forEach(element => {
          element.selected=false;
        });
        this.dataSource.data=data
      })

  }
  selectInvoices()
  {
    this.matDialogRef.close(this.selectedInvoices);
  }

  chooseInvoice(invoice:Invoice,event)
  {
   
    const index:number=this.selectedInvoices.indexOf(invoice)
    if(event.checked)
    {
      this.selectedInvoices.push(invoice); 
    }
    else
    {
      this.selectedInvoices.splice(index,1)
      
    }
  //   //this.invoice.bookings.push(booking);
       
  }

  isSelected(id)
  {
    
   return this.checkedInvoices.find(val=>val.id===id)
    
  }
}
