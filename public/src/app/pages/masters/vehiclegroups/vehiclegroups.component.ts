import { Component, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http,Headers } from '../../../../../node_modules/@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./vehiclegroups.component.scss'],
  templateUrl: './vehiclegroups.component.html',
})

export class VehicleGroupsComponent {
  
  editState:boolean=false
  constructor(private auth:AuthService,
    private http:Http,
    private dialog:MatDialog,
    private matDialogRef:MatDialogRef<VehicleGroupsComponent>,
    private snackBar:MatSnackBar,
    @Inject (MAT_DIALOG_DATA) public data
    ) {
      if(data.row){
        console.log(data)
        this.vehicleGroup=data.row
        this.editState=true
      }
      else{
        this.editState=false
      }
    this.connect();
   }
   saveVehicleGroup()
{ 
  if(this.vehicleGroup.name==""){
    this.snackBar.open("Please enter a vehicle group name","X",{verticalPosition:'top',horizontalPosition:'right'})
  } else {
    this.addvehicleGroup(this.vehicleGroup).subscribe(data=>{
      if(data.affectedRows==1){
        this.param.inserted='yes';
        this.vehicleGroup.id=data.insertId;
        this.param.data=this.vehicleGroup;
  
        this.matDialogRef.close(this.param);
      } 
    });
  }
}
editVehicleGroup(){
  this.updatevehicleGroup(this.vehicleGroup).subscribe(data=>{
    this.dialog.closeAll()
    this.snackBar.open("Vehicle Group updated",null,{duration:3000})
  })
}
  vehicleGroups: Observable<VehicleGroup[]>;

  connect(){
   this.auth.user.subscribe(res=>
    {
      this.vehicleGroup.ownerId=res[0].ownerId;
    })
  }
addvehicleGroup(vehicleGroups: VehicleGroup) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/vehicleGroups/add',vehicleGroups,{headers:headers}).map(res=>res.json());
}
deletevehicleGroup(vehicleGroups: VehicleGroup) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return  this.http.post('/vehicleGroups/delete',vehicleGroups,{headers:headers}).map(res=>res.json());
}
updatevehicleGroup(vehicleGroups: VehicleGroup) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/vehicleGroups/update',vehicleGroups,{headers:headers}).map(res=>res.json());
}
getvehicleGroup(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/vehicleGroups/retrieve',temp,{headers:headers}).map(res => res.json());
}

closeDialog(){
  this.dialog.closeAll()
}
param={
  inserted:'no',
  data:null
}
vehicleGroup:VehicleGroup={
name:'',
number:'',
ownerId:''
}

}


export interface VehicleGroup {
id?: string;
name?: string;
number?: string;
ownerId?:string;
}

