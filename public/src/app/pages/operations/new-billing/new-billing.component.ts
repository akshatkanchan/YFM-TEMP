import { Component, OnInit, Inject } from '@angular/core';
import { Billing } from './billing';
import { BillingService } from './billing.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth.service';
import { MatDialog, MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../../core/user';

@Component({
  selector: 'app-new-billing',
  templateUrl: './new-billing.component.html',
  styleUrls: ['./new-billing.component.scss']
})
export class NewBillingComponent implements OnInit{

  billingItem:FormGroup
  editState: boolean = false;
  user: User = {};

  ngOnInit(){
    this.auth.user.subscribe(data => {

      this.user = data[0];

      this.billingItem=this.fb.group({
        name:['',Validators.required],
        shortName:['',Validators.required],
        taxable:[],
        allowDriverToAdd:[]
      })
  
      this.billingItem.patchValue({
        'name': this.billing.name,
        'shortName': this.billing.shortName,
        'taxable': this.billing.taxable,
        'allowDriverToAdd': this.billing.allowDriverToAdd,      
      })
    })

  }

  saveBilling() {
    this.billing.name=this.billingItem.get('name').value;
    this.billing.shortName=this.billingItem.get('shortName').value;
    this.billing.taxable=this.billingItem.get('taxable').value
    this.billing.allowDriverToAdd=this.billingItem.get('allowDriverToAdd').value;
    this.billing.ownerId = this.user.ownerId;
    this.billingService.addBilling(this.billing).subscribe(data=>{
      if(data.affectedRows==1){
        this.param.inserted='yes';
        this.param.data=this.billing;        
      }
    },err=>{},()=>{
      this.snackBar.open("Billing Item Added","X",{duration:3000});
      console.log(this.param);
      
      this.matDialogRef.close(this.param);
    });    
  }
  updateBilling() {
    this.billing.name=this.billingItem.get('name').value;
    this.billing.shortName=this.billingItem.get('shortName').value;
    this.billing.taxable=this.billingItem.get('taxable').value
    this.billing.allowDriverToAdd=this.billingItem.get('allowDriverToAdd').value;
    this.billingService.updateBilling(this.billing).subscribe(data=>{      
    },err=>{},()=>{
      this.snackBar.open("Billing Item Updated","X",{duration:3000});            
      this.dialog.closeAll();      
    })    
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  constructor(
    private billingService:BillingService,
    private fb:FormBuilder,
    private auth:AuthService,
    private dialog: MatDialog,
    private snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef:MatDialogRef<NewBillingComponent>,
  ) { 
    if(data.row!=null) {
      console.log(data)
      this.editState=true;
      this.billing=data.row
      console.log(this.billing);
    }
    else {
      this.editState=false;
    }
  }

  billing: Billing = {
    name:'',
    shortName:'',
    taxable: false,
    allowDriverToAdd: false,
    ownerId: '',
  }
  param={
    inserted:'no',
    data:null
  }

}
