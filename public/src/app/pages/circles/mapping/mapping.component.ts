import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { DutyType } from '../../masters/dutytype/duty-type';
import { DutyTypeService } from '../../masters/dutytype/duty-type.service';
import { AuthService } from '../../../core/auth.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { startWith,map } from 'rxjs/operators';
import { VehicleGroupsComponent, VehicleGroup } from '../../masters/vehiclegroups/vehiclegroups.component';

@Component({
  selector: 'mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  incomingDuty:any={};
  dutyTypes:DutyType[]=[];
  user:any;
  dutyType:any;
  vehicleGroups:VehicleGroup[];
  vehicleGroup:any;
  vehicleGroupCtrl: FormControl = new FormControl();
  dutyTypeCtrl:FormControl = new FormControl();
  selectedDutyType:DutyType={};
  selectedVehicleGroup:VehicleGroup={}
  supplierDutyType:DutyType={};
  errorMatch:boolean=false
  constructor(private dutyTypeSerice:DutyTypeService,
    private userService:AuthService,
    public dialogRef: MatDialogRef<MappingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dutytypeService:DutyTypeService,
    private vehiclegroupsService:VehicleGroupsComponent,
    private snackbar:MatSnackBar,
    private fb:FormBuilder
    ) { 
    console.log(data);
    this.incomingDuty=data.duty;
    
  }

  ngOnInit() {
    this.userService.user.subscribe(data=>{
      this.user=data[0];
      this.dutytypeService.getDutyType(this.user).subscribe(data=>{
        console.log(data)
        if(data.length==0)
      {
        this.snackbar.open("Please register some dutytypes","X",{duration:3000});
        //this.matDialogRef.close();
      }
        this.dutyTypes=data;
        this.dutyType=this.dutyTypeCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterDutyType(val))
        )
      });
      this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(data=>{
        if(data.length==0)
        {
            this.snackbar.open("Please register some vehicle groups","X",{duration:3000});
          //this.matDialogRef.close();
        }
          this.vehicleGroups=data;
          this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
          .pipe(
            startWith(''),
            map(val=>this.filterVehicleGroup(val))
          );
        });
    })
    this.incomingDutyType()
  }
  incomingDutyType(){
    this.dutyTypeSerice.getDutyTypeofSupplier(this.incomingDuty).subscribe(data=>{
      this.supplierDutyType=data[0]
      console.log(this.supplierDutyType)
    })
  }
  checkDutyType(){
    if(this.selectedDutyType.maxHrs==this.supplierDutyType.maxHrs){
      this.errorMatch=true
    }
  }
  setDutyType(temp:any,event:any)
  {
    console.log(event)
    if(event.source.selected==true)
    {
      console.log(temp)
      this.selectedDutyType=temp
      this.errorMatch=false
    }
    else if(event.source.selected==false){
      this.errorMatch=false
    }
    this.checkDutyType()
  }
  setVehicleGroup(temp:any,event:any)
  {
    if(event.source.selected==true)
    {
      this.selectedVehicleGroup=temp
    }
  }
  filterVehicleGroup(val:string){
    
    return this.vehicleGroups.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase())
      );
  }
  filterDutyType(val:string){
    return this.dutyTypes.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  confirmRequest(){
    var temp={
      dutyType:this.selectedDutyType,
      vehicleGroup:this.selectedVehicleGroup,
      confirm:'yes'
    }
    this.dialogRef.close(temp)
  }
  exit(){
    this.dialogRef.close()
  }
}
