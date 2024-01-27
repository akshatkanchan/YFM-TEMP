import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { DutiesService } from '../duties.service';
import { Duty } from '../duty';
import { AuthService } from '../../../core/auth.service';
import { SupplierService } from '../../masters/addsuppliers/supplier.service';
import { User } from '../../../core/user';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Supplier } from '../../masters/addsuppliers/supplier';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Driver } from '../../masters/new-driver/driver';
import { DriverService } from '../../masters/new-driver/driver.service';

@Component({
  selector: 'offlineallottment',
  templateUrl: './offlineallottment.component.html',
  styleUrls: ['./offlineallottment.component.scss']
})
export class OfflineallottmentComponent implements OnInit {

  duty:Duty={};
  user:User={};
  supplierObs:any;
  supplierCtrl: FormControl = new FormControl();
  suppliers:Supplier[];
  supplier:any;
  allotForm: FormGroup;
  DriverObs: Observable<Driver[]>;
  selectedDriver: Driver = {};
  mobileIcon;

  constructor(
    @Inject (MAT_DIALOG_DATA) public data,
    private matdialogRef:MatDialogRef<OfflineallottmentComponent>,
    private dialog:MatDialog,
    private dutyService : DutiesService,
    private auth:AuthService,
    private supplierService: SupplierService,
    private driverService: DriverService,
    private fb: FormBuilder,
  ) {
    this.duty = data.row
    this.supplierCtrl.setValue(data.row.supplierName);
  }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      var temp3 = {
        ownerId: this.user.ownerId,
        fromLoc: this.duty.fromLoc,
        vehicleGroupId: this.duty.vehicleGroupId
      }
      this.supplierService.getDistinctSuppliers(temp3).subscribe(data => {
     
        this.suppliers=data;
          this.supplier=this.supplierCtrl.valueChanges
          .pipe(
            startWith(''),
            map(val=>this.filterSupplier(val))
          );
      })
      this.driverService.getDriver(this.user).subscribe(res=>{
        this.DriverObs=res;
      })
    });
    this.allotForm=this.fb.group({
      driver:[]
    })
  }

  updateAllottment()
  {
    this.dutyService.updateDriverAllot(this.duty)
    this.matdialogRef.close("yes"); 
  }
  closeDialog()
  {
    this.dialog.closeAll();
  }

  supplierSelect(temp:any ,event:any) {
    if(event.source.selected==true) {
      console.log(temp);
    }
  }

  filterSupplier(val:string){
    console.log(this.suppliers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase())));
    
    return this.suppliers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  allotDriver(temp:any) {
    console.log(temp)
    this.selectedDriver=temp
    if(temp.userId != null) {
      this.mobileIcon = true;
    }
    else {
      this.mobileIcon = false;
    }
  }

  saveDriverAllottment(temp) {
    console.log(temp);
    this.duty.driverId=this.selectedDriver.id;
   // this.duty.driverNumber=this.selectedDriver.mobileNumber;
    this.duty.driver=this.selectedDriver.name;
   
    if(this.duty.driver.trim() == "") {
      console.log("driver null");
      this.duty.driver='';
      this.duty.driverId=null;
    }
    if(this.duty.vehicle.trim() == "") {
      console.log("driver null");
      this.duty.vehicle='';
      this.duty.vehicleId=null
    }
    if(this.duty.driverId==null && this.duty.vehicleId==null) {
      this.duty.status="Booked";
    }
    else if(this.duty.dutyType=='Self Drive') {
      if(this.selectedDriver.userId != null) {
        this.duty.status="Allotted";
        this.duty.subStatus = "Not Accepted";
      }
      else {
        this.duty.status="Allotted";
        this.duty.subStatus = "Allotted"
      }
    }
    else {
      if(this.duty.driverId==null) {
        this.duty.status="Driver Pending";
      }
      else if(this.duty.vehicleId==null) {
        this.duty.status="Vehicle Pending";
      }
      else {
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
    this.dutyService.allotDriver(this.duty);
    console.log("ASD")
    this.matdialogRef.close("yes");
  }
}
