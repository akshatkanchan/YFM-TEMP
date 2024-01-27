import { Component, OnInit, Inject } from '@angular/core';
import { CircleService } from '../../circles/circle.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dutiesdisp',
  templateUrl: './dutiesdisp.component.html',
  styleUrls: ['./dutiesdisp.component.scss']
})
export class DutiesdispComponent implements OnInit {

  dataSource=new MatTableDataSource<any>();
  displayedColumns=['Booked by', 'Passenger','Date','Price','Selector']
  user:User={};
  selectedDuties=[];
  checkedDuties=[];
  selectedSupplier=[];

  constructor(public dialog:MatDialogRef<DutiesdispComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private dutiesService:CircleService,private auth:AuthService) {
    console.log(data)
    this.selectedSupplier=data.temp.supplierName;
    this.checkedDuties=data.temp.duties;
    this.selectedDuties=this.checkedDuties;

   }
   
  ngOnInit() {

   
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      var temp={
        user:this.user,
        clientId:this.data.temp.clientId
      }
      console.log(temp);
      this.dutiesService.getCompletedReceivedDuty(temp).subscribe(data=>{
        console.log(data);
        this.dataSource=data
      })
    })
  }

  chooseDuty(duty:any,event)
  {
   
    const index:number=this.selectedDuties.indexOf(duty)
    if(event.checked)
  {
    this.selectedDuties.push(duty); 
  }
  else
  {
    this.selectedDuties.splice(index,1)
    
  }
  //   //this.invoice.DutselectedDuties.push(booking);
       
  }

  isSelected(id:any)
  {
    return this.checkedDuties.find(val=>val.id===id)
  }
  selectBooking(){
    this.dialog.close(this.selectedDuties);
  }

}
