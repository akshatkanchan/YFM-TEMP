import { Component, OnInit, Inject } from '@angular/core';
import { DutiesService } from '../duties.service';
import { Duty } from '../duty';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 
  detailsT:Duty={};
  constructor(public dialog:MatDialogRef<DetailsComponent>,
    public details:DutiesService,@Inject(MAT_DIALOG_DATA) public data: any,
    private dutiesService:DutiesService
    ) { 
        console.log(data)
        this.detailsT=data.row;
  }

  ngOnInit() {

  }
  save(){
    // this.dutiesService.updateduties()
  }
  closeDialog()
  {
    this.dialog.close();
  }

}


