import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { BookingsdispComponent } from '../../operations/bookingsdisp/bookingsdisp.component';

@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  editConfirm:any;
  constructor(
    @Inject (MAT_DIALOG_DATA) public data,
    private matdialogRef:MatDialogRef<BookingsdispComponent>,
    private dialog:MatDialog) { 
      if(data){
        if(data.dutiesEdit){
          this.editConfirm=data.dutiesEdit;
        }
      }
    }
yes()
{
  this.matdialogRef.close("yes");
  
}
no()
{
  this.matdialogRef.close("no");
}
  ngOnInit() {
  }

}
