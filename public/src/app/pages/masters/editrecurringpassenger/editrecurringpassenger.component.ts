import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { Http,Headers } from '@angular/http';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'editrecurringpassenger',
  templateUrl: './editrecurringpassenger.component.html',
  styleUrls: ['./editrecurringpassenger.component.scss']
})
export class EditrecurringpassengerComponent implements OnInit {

  editState:boolean=false;
  editPassenger:any={
    name:'',
    phoneNo:'',
    emailId:'',
    address:'',
    ownerId:'',
    id:''
  }
  constructor(@Inject (MAT_DIALOG_DATA) public data,
  private http:Http,
  private dialog:MatDialogRef<EditrecurringpassengerComponent>,
  private snackBar:MatSnackBar,
  private auth:AuthService) {
    if(data){
      console.log(data)
      this.editState = true;
      this.editPassenger=data
    }
   }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.editPassenger.ownerId=data[0].ownerId
    })
  }
  submit(){
    if(this.editPassenger.name === ''){
      this.snackBar.open("Enter a name","X",{duration:3000})
    } else if(this.editPassenger.phoneNo === ''){
      this.snackBar.open("Enter a phone Number","X",{duration:3000})
    } else if(this.editPassenger.emailId === ''){
      this.snackBar.open("Enter a email","X",{duration:3000})
    } else if(this.editPassenger.address === ''){
      this.snackBar.open("Enter a address","X",{duration:3000})
    } else {
      delete this.editPassenger.id;
      this.addRecurringPassenger(this.editPassenger).subscribe(data=>{
        this.snackBar.open("Passenger Added","X",{duration:2000})
        if(data.affectedRows==1){
          this.param.inserted='yes';
          this.editPassenger.id=data.insertId;
          this.param.data=this.editPassenger;
          this.dialog.close(this.param);
        }
      })
    }
  }
  param={
    inserted:'no',
    data:null
  }
  edit(){
    if(this.editPassenger.name === ''){
      this.snackBar.open("Enter a name","X",{duration:3000})
    } else if(this.editPassenger.phoneNo === ''){
      this.snackBar.open("Enter a phone Number","X",{duration:3000})
    } else if(this.editPassenger.emailId === ''){
      this.snackBar.open("Enter a email","X",{duration:3000})
    } else if(this.editPassenger.address === ''){
      this.snackBar.open("Enter a address","X",{duration:3000})
    } else {
      this.editRecurringPassenger(this.editPassenger).subscribe(data=>{
        this.snackBar.open("Passenger Updated","X",{duration:2000})
        this.dialog.close('edit')
      })
    }
  }
  addRecurringPassenger(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/addRecurringPassenger',temp,{headers:headers}).map(res => res.json());
  }
  editRecurringPassenger(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/editRecurringPassenger',temp,{headers:headers}).map(res => res.json());
  }
  deleteRecurringPassenger(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/deleteRecurringPassenger',temp,{headers:headers}).map(res => res.json());
  }
  closeDialog() {
    this.dialog.close();
  }
}
