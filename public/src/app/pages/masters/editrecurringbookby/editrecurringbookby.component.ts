import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { Http,Headers } from '@angular/http';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'editrecurringbookby',
  templateUrl: './editrecurringbookby.component.html',
  styleUrls: ['./editrecurringbookby.component.scss']
})
export class EditrecurringbookbyComponent implements OnInit {
  editState:boolean=false;
  editRecurringBookBy:any={
    name:'',
    phoneNo:'',
    emailId:'',
    address:'',
    customerId:null,
    id:'',
    ownerId:''
  }

  constructor(@Inject (MAT_DIALOG_DATA) public data,
  private http:Http, private dialog: MatDialog,
  private snackBar:MatSnackBar,
  private auth:AuthService,
  private matdialog:MatDialogRef<EditrecurringbookbyComponent>) {
    if(data){
      console.log(data)
      this.editState = true;
      this.editRecurringBookBy=data
    }
   }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.editRecurringBookBy.ownerId=data[0].ownerId
    })
  }
  submit() {
    if(this.editRecurringBookBy.name === ''){
      this.snackBar.open("Enter a name","X",{duration:3000})
    } else if(this.editRecurringBookBy.phoneNo === ''){
      this.snackBar.open("Enter a phone Number","X",{duration:3000})
    } else if(this.editRecurringBookBy.emailId === ''){
      this.snackBar.open("Enter a email","X",{duration:3000})
    } else if(this.editRecurringBookBy.address === ''){
      this.snackBar.open("Enter a address","X",{duration:3000})
    } else {
      delete this.editRecurringBookBy.id;
      this.addBookBy(this.editRecurringBookBy).subscribe(data=>{
        console.log(data);
        if(data.affectedRows==1){
          this.param.inserted='yes';
          this.editRecurringBookBy.id=data.insertId;
          this.param.data=this.editRecurringBookBy;
          this.matdialog.close(this.param);
        }
      })
    }
  }
  param={
    inserted:'no',
    data:null
  }
  edit(){
    if(this.editRecurringBookBy.name === ''){
      this.snackBar.open("Enter a name","X",{duration:3000})
    } else if(this.editRecurringBookBy.phoneNo === ''){
      this.snackBar.open("Enter a phone Number","X",{duration:3000})
    } else if(this.editRecurringBookBy.emailId === ''){
      this.snackBar.open("Enter a email","X",{duration:3000})
    } else if(this.editRecurringBookBy.address === ''){
      this.snackBar.open("Enter a address","X",{duration:3000})
    } else {
      this.editBookBy(this.editRecurringBookBy).subscribe(data=>{
        console.log(data);
        this.snackBar.open("Booked By edited successfully","",{duration:3000});
        this.matdialog.close("edit");
      })
    }
  }
  addBookBy(temp){
    console.log(temp);
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/addRecurringBookedBy',temp,{headers:headers}).map(res => res.json());
  }
  editBookBy(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/editRecurringBookedBy',temp,{headers:headers}).map(res => res.json());
  }
  deleteBookBy(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/deleteRecurringBookedBy',temp,{headers:headers}).map(res => res.json());
  }
  closeDialog() {
    this.matdialog.close();
  }
}
