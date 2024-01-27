import { Component, OnInit, Inject, HostListener } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SupplierService } from '../addsuppliers/supplier.service';
import { Supplier } from '../addsuppliers/supplier';
import { Driver } from '../new-driver/driver';
import { DriverService } from '../new-driver/driver.service';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Http,Headers } from '../../../../../node_modules/@angular/http';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./newpettycash.component.scss'],
  templateUrl: './newpettycash.component.html',
})
export class NewPettyCashComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }
  
  pettyCashs: Observable<PettyCash[]>;
  suppliers:Supplier[];
  supplier0:any;
  supplierCtrl:FormControl=new FormControl();
  drivers: Observable<Driver[]>;
  user:User={}
  supplierCondition=false;
  editState:boolean=false;

  constructor(
    private matDialogRef:MatDialogRef<NewPettyCashComponent>,
    private supplierService:SupplierService,
    private driverService:DriverService,
    public snackBar:MatSnackBar,
    private auth:AuthService, 
    private http:Http,
    private dialog:MatDialog,
    @Inject (MAT_DIALOG_DATA) public data
  ) {
    if(data.row){
      console.log(data)
      this.editState=true
      this.pettyCash=data.row
    }
    else{
      this.editState=false
    }
   }

   ngOnInit(){
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.pettyCash.ownerId=data[0].ownerId
      this.driverService.getDriver(this.user).subscribe(data=>{
        this.drivers=data
      });
      this.supplierService.getSupplier(this.user).subscribe(data=>{
        this.suppliers=data
        this.supplier0=this.supplierCtrl.valueChanges
          .pipe(
            startWith(''),
            map(val=>this.filterSupplier(val))
          );
      });
    })
  }
  filterSupplier(val:string){
    return this.suppliers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  setSupplierId(temp,event:any){
    if(event.source.selected==true)
    {
      this.pettyCash.supplierId=temp.id;
    }
  }


   savePettyCash()
  {

  if(this.pettyCash.date=="")
  {
    this.snackBar.open('Enter Date',null,{
    duration:5000
    });
  }
  else if(this.pettyCash.voucherNumber.trim()=="")
  {
    this.snackBar.open('Enter Voucher Number',null,{
      duration:5000
    });
  }
  else if(this.pettyCash.supplier=="")
  {
    this.snackBar.open("Enter Supplier",null,{
    duration:5000
    }); 
  }
  else if(this.pettyCash.driver.trim()=="")
  {
  
    this.snackBar.open("Enter Driver",null,{
    duration:5000
    });
  }
  else if(this.pettyCash.amount.trim()=="")
  {
    this.snackBar.open('Enter Amount Number',null,{
    duration:5000
    });
  
  }
  else if(this.pettyCash.transactionType=="")
  {
    this.snackBar.open("Enter Transaction",null,{
    duration:5000
    });
  }
  else
  {
    this.pettyCash.date=moment(this.pettyCash.date).format("YYYY-MM-DD")
    this.addPettyCash(this.pettyCash).subscribe(data=>{
      if(data.affectedRows==1){
        this.param.inserted='yes';
        this.param.data=this.pettyCash;

        this.matDialogRef.close(this.param);
      } 
    },err=>{},()=>{
      this.snackBar.open("Petty Cash Added", "X", {duration: 3000})
    });
  
  }

}

  editPettyCash(){
    this.pettyCash.date=moment(this.pettyCash.date).format("YYYY-MM-DD")
    this.updatePettyCash(this.pettyCash).subscribe(data=>{
      this.snackBar.open("Petty Cash upadated",null,{duration:3000})
      this.dialog.closeAll()
    })
  }

  condition(type,event){
    if(type=='supplier'){
      this.supplierCondition=true;
    }
    else if(type=='self'){
      this.supplierCondition=false;
    }
  }
  addPettyCash(pettyCash: PettyCash) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/pettyCash/add',pettyCash,{headers:headers}).map(res=>res.json());
  }
  deletePettyCash(pettyCash: PettyCash) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/pettyCash/delete',pettyCash,{headers:headers}).map(res=>res.json());
  }
  updatePettyCash(pettyCash: PettyCash) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/pettyCash/update',pettyCash,{headers:headers}).map(res=>res.json());
  }
  getPettyCash(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/pettyCash/retrieve',temp,{headers:headers}).map(res => res.json());
  }
  closeDialog(){
    this.dialog.closeAll();
  }

supplier:Supplier={
  name:'',
};
param={
  inserted:'no',
  data:null
}
pettyCash:PettyCash={
  date:'',
  voucherNumber:'',
  supplier:'',
  supplierId:'',
  driver:'',
  amount:'',
  transactionType:'',
  ownerId:''
}

}


export class PettyCash {
  //Customer Details
id?: string;
date?: string;
voucherNumber?: string;
supplier?:string;
supplierId?:string;
driver?:string;
amount?:string;
transactionType?:string;
ownerId?:string;
dutyId?:string;
}
