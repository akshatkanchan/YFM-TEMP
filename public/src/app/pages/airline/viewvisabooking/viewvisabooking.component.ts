import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { VisaService } from '../visa/visa.service';
import { Visa } from '../addvisa/addvisa.component';
import { ActivitylogService } from '../../../activitylog.service';

@Component({
  selector: 'viewvisabooking',
  templateUrl: './viewvisabooking.component.html',
  styleUrls: ['./viewvisabooking.component.scss']
})
export class ViewvisabookingComponent implements OnInit {

  travellers: any = [];
  visaDetails: Visa = {};
  logs = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private visaService: VisaService,
    private dialog: MatDialog,
    private activityLogs:ActivitylogService
  ) { 
    if(data.row != null) {      
      console.log(data.row)
      this.visaDetails = data.row;      
      this.visaService.getVisaTravellers(this.visaDetails).subscribe(data => {
        this.travellers = data;
      })
      this.activityLogs.getVisaLogs({id:data.row.id}).subscribe(data=>{
        this.logs = data
      })
    }
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
