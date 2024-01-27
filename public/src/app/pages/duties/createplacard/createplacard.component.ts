import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Duty } from '../duty';

@Component({
  selector: 'app-createplacard',
  templateUrl: './createplacard.component.html',
  styleUrls: ['./createplacard.component.scss']
})
export class CreateplacardComponent implements OnInit {

  constructor(private matDialogRef:MatDialogRef<CreateplacardComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private dialog:MatDialog) {
    if(data!=null)
    this.duty=data;
    
   }

  ngOnInit() {
  }
  createPlacard()
  {
    this.matDialogRef.close(this.duty);
  }
  closeDialog()
  {
    this.dialog.closeAll();
  }
  duty:Duty={}
}

