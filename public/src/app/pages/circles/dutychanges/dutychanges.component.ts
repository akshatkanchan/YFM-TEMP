import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Duty } from '../../duties/duty';
import { DutiesService } from '../../duties/duties.service';

@Component({
  selector: 'dutychanges',
  templateUrl: './dutychanges.component.html',
  styleUrls: ['./dutychanges.component.scss']
})
export class DutychangesComponent implements OnInit {

  detailsT:Duty={}
  valueChanges:any[]
  constructor(@Inject (MAT_DIALOG_DATA) public data,private dutiesService:DutiesService,private dialog:MatDialog) {
    if(data){
      this.detailsT=data.row
      // this.valueChanges=data.valueChanges
    }
   }

  ngOnInit() {

    this.dutiesService.getValueChanges(this.detailsT).subscribe(data=>{
      console.log(data)
      this.valueChanges=data
    })
  }
  closeDialog(){
    this.dialog.closeAll()
  }

}
