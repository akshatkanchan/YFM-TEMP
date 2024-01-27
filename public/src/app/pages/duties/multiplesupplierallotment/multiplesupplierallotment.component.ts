import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef, MatDialog } from '@angular/material';
import { Duty } from '../duty';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { CircleService } from '../../circles/circle.service';
import { SupplierService } from '../../masters/addsuppliers/supplier.service';

@Component({
  selector: 'multiplesupplierallotment',
  templateUrl: './multiplesupplierallotment.component.html',
  styleUrls: ['./multiplesupplierallotment.component.scss']
})
export class MultiplesupplierallotmentComponent implements OnInit {

  selectedDuties:Duty={}
  user:User={}
  supplierObs:any;
  length;
  test;
  constructor(@Inject(MAT_DIALOG_DATA)public data,
  private auth:AuthService,
  private circleService:CircleService,
  private snackBar:MatSnackBar,
  private matDialogRef:MatDialogRef<MultiplesupplierallotmentComponent>,
  private dialog: MatDialog,
  private supplierService: SupplierService,
  ) {
    if(data){
      console.log(data)
      this.selectedDuties=data;
      console.log(this.selectedDuties)
      var keys=Object.keys(this.selectedDuties)
      this.length=keys.length;
      console.log(this.length)
    }
   }

  ngOnInit() {
    this.auth.user.subscribe(data=>
      {
        this.user=data[0]
      
      var temp={
        ownerId:this.user.ownerId
      }
      this.supplierService.getSupplier(temp).subscribe(data => {
        console.log(data)
        this.supplierObs = data;
      })
    }
    )
  }
  sendRequest()
  {
    for (let index = 0; index < this.length; index++) {
      const element = this.selectedDuties[index];
      console.log(element)
      var requestData={
        supplierName:this.test.supplierName,
        dutyId:element.id,
        supplierId:this.test.supplierId,
        ownerName:this.user.companyName,
        ownerId:this.user.ownerId,
      }
   
      this.circleService.sendDutyRequest(requestData).subscribe(data=>{
        console.log(data)
        this.snackBar.open('Request Sent','X',{duration:3000})
        this.matDialogRef.close(data);
      });
    }
  }

  closeDialog() {
    this.dialog.closeAll()
  }

}
