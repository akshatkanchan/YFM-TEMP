import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'invoiceattachmentmodal',
  templateUrl: './invoiceattachmentmodal.component.html',
  styleUrls: ['./invoiceattachmentmodal.component.scss']
})
export class InvoiceattachmentmodalComponent implements OnInit {

  docs = {
    invoice: false,
    dutySummary: false
  }

  constructor(private matDialogRef: MatDialogRef<InvoiceattachmentmodalComponent>, private dialog: MatDialog) { }

  ngOnInit() {

  }

  printDocs(event, type) {
    if(event.checked)
    {
      if(type=='invoice')
      {
        this.docs.invoice = true;
      }
      if(type=='dutySummary')
      {
        this.docs.dutySummary = true;
      }
    }
    else
    {
      if(type=='invoice')
      {
        this.docs.invoice = false;
      }
      if(type=='dutySummary')
      {
        this.docs.dutySummary = false;
      }
    }
    
  }

  printDoc() {
    this.matDialogRef.close(this.docs);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
