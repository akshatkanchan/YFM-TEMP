import { Component, OnInit, HostListener } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http,Headers } from '../../../../../node_modules/@angular/http';
import { AuthService } from '../../../core/auth.service';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent{

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  taxName: string = '';

  constructor(private auth:AuthService,private http:Http, private matDialogRef: MatDialogRef<TaxesComponent>,private snackBar:MatSnackBar, private dialog: MatDialog) {
    this.auth.user.subscribe(data=>{
      this.tax.ownerId=data[0].ownerId
    })
  }

  setTaxName(element) {
    if(element == 'Other') {
      this.tax.name = this.taxName
    }
    else {
      this.tax.name = element;
    }
  }

  saveTax() {
    if(this.tax.name === "") {
      this.snackBar.open("Select a tax type","X",{verticalPosition:'top',horizontalPosition:'right'})
    } else if (this.tax.percent === "") {
      this.snackBar.open("Enter a Tax Percent","X",{verticalPosition:'top',horizontalPosition:'right'})
    } else {
      this.addtax(this.tax).subscribe(data=>{
        this.tax.id = data.insertId;
      },err=>{},()=>{
        this.snackBar.open("Tax Added", "X", {duration: 3000});
        this.matDialogRef.close({data: this.tax});
      })
    }
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  taxs: Observable<Tax[]>;
  
  addtax(tax: Tax) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/taxes/add',tax,{headers:headers}).map(res=>res.json());
  }
  deletetax(tax: Tax) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/taxes/delete',tax,{headers:headers}).map(res=>res.json());
  }
  updatetax(tax: Tax) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/taxes/update',tax,{headers:headers}).subscribe(res=>res);
  }
  gettax() {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.get('/taxes/retrieve', {headers: headers}).map(res => res.json());
  }


  tax: Tax = {
    name:'',
    percent:'',
    ownerId:''
  }
}


export interface Tax {
  id?: string;
  name?: string;
  percent?: string;
  ownerId?:string;
}
