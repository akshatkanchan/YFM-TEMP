import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { VehicleService } from '../../masters/new-vehicles/vehicle.service';
import { DriverService } from '../../masters/new-driver/driver.service';
import { Observable } from 'rxjs';
import { Driver } from '../../masters/new-driver/driver';
import { Vehicle } from '../../masters/new-vehicles/vehicle';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { Duty } from '../duty';
import { DutiesService } from '../duties.service';
import { SupplierService } from '../../masters/addsuppliers/supplier.service';
import { CircleService } from '../../circles/circle.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { SenddutytosuppliersComponent } from '../senddutytosuppliers/senddutytosuppliers.component';

@Component({
  selector: 'app-driverallotment',
  templateUrl: './driverallotment.component.html',
  styleUrls: ['./driverallotment.component.scss']
})
export class DriverallotmentComponent implements OnInit {
  drivers:Observable<Driver[]>;
  vehicles:Observable<Vehicle[]>;
  duty:Duty;
  displayedColumns=['modelname','number','seating','companyName','assignedDriver','vcolor']
  dataSource1:Observable<Vehicle[]>;
  vehicleId:any[]=[]
  vehicleStatus:any[]
  DriverObs:Observable<Driver[]>;
  selectedDriver:Driver={};
  allotForm:FormGroup
  selectedVehicle:Vehicle={};
  selectedDuties: any[] = [];
  selectedSupplier: any[] = [];
  supplierObs:any;
  dropDown:any;
  test;
  noVehicles:boolean=true
  user:User={};
  test1: any[] = [];
  mobileIcon;

  allotDriver(temp:any)
  {
    console.log(temp)
    this.selectedDriver=temp
    if(temp.userId != null) {
      this.mobileIcon = true;
    }
    else {
      this.mobileIcon = false;
    }
  }
  allotVehicle(temp:any)
  {
    this.selectedVehicle=temp;
  }
  updateAllot(temp)
  {
    console.log(temp);
    this.selectedVehicle.modelname=temp.modelname;
    this.selectedVehicle.id=temp.id

    this.duty.vehicle=''+temp.modelname+' ('+temp.number+')';
    this.duty.vehicleId=this.selectedVehicle.id;
   

    this.duty.driverId=this.selectedDriver.id;
   // this.duty.driverNumber=this.selectedDriver.mobileNumber;
    this.duty.driver=this.selectedDriver.name;
   

    if(this.duty.driver.trim()=="")
    {
      console.log("driver null");
      
      this.duty.driver='';
      this.duty.driverId=null;
    }
    if(this.duty.vehicle.trim()=="")
    {
      console.log("driver null");
      this.duty.vehicle='';
      this.duty.vehicleId=null
    }

    if(this.duty.driverId==null && this.duty.vehicleId==null)
    {
      this.duty.status="Booked";
    }
    else if(this.duty.dutyType=='Self Drive')
    {
      if(this.selectedDriver.userId != null) {
        this.duty.status="Allotted";
        this.duty.subStatus = "Not Accepted";
      }
      else {
        this.duty.status="Allotted";
        this.duty.subStatus = "Allotted"
      }
      
    }
    else
    {
      if(this.duty.driverId==null)
      {
        this.duty.status="Driver Pending";
      }
      else if(this.duty.vehicleId==null)
      {
        this.duty.status="Vehicle Pending";
      }
      else
      {
        if(this.selectedDriver.userId != null) {
          this.duty.status="Allotted";
          this.duty.subStatus = "Not Accepted";
        }
        else {
          this.duty.status="Allotted";
          this.duty.subStatus = "Allotted";
        }        
      }  
    }

    console.log(this.duty)
    // delete this.duty.ownerDId
    this.dutiesService.updateDriverAllot(this.duty);
    console.log("ASD")
    this.matDialogRef.close("yes");
  }
  
  getvehicleStatus(temp){
    console.log(temp)
    this.dutiesService.vehicleStatus(temp).subscribe(data=>{
      this.vehicleStatus=data
      console.log(data)
      console.log(this.vehicleStatus);
      let i = 0;
      // this.dataSource1.forEach(element => {        
      //   this.vehicleStatus.forEach(element2 => {
      //     console.log(this.dataSource1[i].id)
      //     console.log(element2.id)
      //     console.log(this.dataSource1[i].id == element2.id);          
      //     if((this.dataSource1[i].id != element2.id ) || (this.dataSource1[i].id != element2.id && this.test1[i] != true)) {
      //       this.test1[i] = false;
      //     }
      //     else if(this.dataSource1[i].id == element2.id) {       
      //       this.test1[i] = true;            
      //     }
      //     else {

      //     }
      //   })        
      //   i++;                      
      //   console.log(this.test1)
      // })

      for(var e in this.dataSource1) {
        for(var v in this.vehicleStatus) {
          console.log(this.dataSource1[e].id);
          console.log(this.vehicleStatus[v].id);
          console.log(this.dataSource1[e].id == this.vehicleStatus[v].id);
          if(this.dataSource1[e].id == this.vehicleStatus[v].id) {
            this.test1[e] = true;
            break;
          }
          else if(this.dataSource1[e].id != this.vehicleStatus[v].id){
            this.test1[e] = false;
          }          
        }
        console.log(this.test1);
      }

    }) 
  }

  constructor(private matDialogRef:MatDialogRef<DriverallotmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vehicleService:VehicleService,
    private driverService:DriverService,
    private dutiesService:DutiesService,
    private circleService:CircleService,
    private supplierService: SupplierService,
    private snackBar:MatSnackBar,
    private auth:AuthService,
    private fb:FormBuilder,
    private dialog:MatDialog
    ) {
    this.selectedDriver.name='';
    this.selectedVehicle.modelname='';
    this.duty=data.row;
    console.log(this.duty)
   }
   myControl: FormControl = new FormControl();
  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      var temp={
        ownerId:this.user.ownerId,
        vehicleGroupId:this.duty.vehicleGroupId
      }
      console.log(temp)
      this.vehicleService.filterVehicleFromVehicleGroups(temp).subscribe(res=>{
        this.dataSource1=res;
        console.log(this.dataSource1)
        var temp2 = {
          ownerId: this.user.ownerId,
          startDate: this.duty.startDate,
          vehicleGroupId: this.duty.vehicleGroupId
        }
        console.log(temp2)
        this.getvehicleStatus(temp2)
        
      });
      this.driverService.getDriver(this.user).subscribe(res=>{
        this.DriverObs=res;
      })
      var temp3 = {
        ownerId: this.user.ownerId,
        fromLoc: this.duty.fromLoc,
        vehicleGroupId: this.duty.vehicleGroupId
      }
      this.supplierService.getDistinctSuppliers(temp3).subscribe(data => {
        console.log(data)
        this.supplierObs = data;
      })
    })
    
 
    // this.auth.user.subscribe(data=>
    //   {
    //     this.user=data[0]
      
    //   var temp={
    //     ownerId:this.user.ownerId
    //   }
    //   this.circleService.getCircle(temp).subscribe(res=>{
    //     this.supplierObs=res;
    //   })
    // }
    //)
    this.allotForm=this.fb.group({
      driver:[]
    })
    
  }
  
  sendRequest()
  {
   
    console.log(this.test)
    var requestData={
      supplierName:this.test.name,
      dutyId:this.duty.id,
      supplierId:this.test.supplierOwnerId,
      ownerName:this.user.companyName,
      ownerId:this.user.ownerId,
    }
    if(this.test.supplierOwnerId) {
      this.circleService.sendDutyRequest(requestData).subscribe(data=>{
        this.snackBar.open('Request Sent','X',{duration:3000})
        this.matDialogRef.close("yes");
      });
    }
    else {
      this.selectedSupplier.push(this.test)
      this.selectedDuties.push(this.duty)
      this.dialog.closeAll();
      this.dialog.open(SenddutytosuppliersComponent ,{data: [this.selectedDuties, this.selectedSupplier],autoFocus:false,disableClose:true })
    }

  }

  closeDialog()
  {
    this.dialog.closeAll();
  }

}