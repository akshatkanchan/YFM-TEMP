import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-pricingtables',
  templateUrl: './pricingtables.component.html',
  styleUrls: ['./pricingtables.component.scss']
})
export class PricingtablesComponent implements OnInit {
tempDutyType:string;
  constructor(private matDialogRef:MatDialogRef<PricingtablesComponent>,@Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialog,) { 
    this.tempDutyType=data.dType;
  }

  ngOnInit() {
  }

}
