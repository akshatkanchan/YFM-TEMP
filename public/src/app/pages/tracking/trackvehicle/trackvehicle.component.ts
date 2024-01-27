import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { VehicleGroupsComponent, VehicleGroup } from '../../masters/vehiclegroups/vehiclegroups.component';
import { User } from '../../../core/user';
import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { VehicleService } from '../../masters/new-vehicles/vehicle.service';
import { Vehicle } from '../../masters/new-vehicles/vehicle';
import { Duty } from '../../duties/duty';
import { Http, Headers } from '@angular/http';
import {} from 'googlemaps';
import { DriverService } from '../../masters/new-driver/driver.service';
import { Driver } from '../../masters/new-driver/driver';
import { elementAt } from 'rxjs/operator/elementAt';
import { setInterval } from 'timers';
import { Observable } from 'rxjs';

@Component({
  selector: 'trackvehicle',
  templateUrl: './trackvehicle.component.html',
  styleUrls: ['./trackvehicle.component.scss']
})
export class TrackvehicleComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  filterClicked = "Vehicle";
  duty:Duty={};
  user: User = {}
  drivers:Driver[];
  driver:any;
  driverCtrl: FormControl = new FormControl();
  vehicleGroups:VehicleGroup[];
  vehicleGroup:any;
  vehicleGroupCtrl: FormControl = new FormControl();
  vehicleGroupId: any;
  vehicles:Vehicle[];
  vehicle:any;
  vehicleCtrl: FormControl = new FormControl();
  vehicleNumber: any;
  driverId: any;
  tracking: boolean = true;
  i: number = 0;

  public latitude: number;
  public longitude: number;
  public zoom: number;

  public latitudeDriver: number;
  public longitudeDriver: number;
  public zoomDriver: number;

  markers:any[]=[];
  markersCopy:any[]=[];
  markerDriver:any[]=[];
  markerDriverCopy:any[]=[];

  constructor(
    private auth:AuthService,
    private vehiclegroupsService:VehicleGroupsComponent,
    private vehicleService: VehicleService,
    private driverService: DriverService,
    private snackbar:MatSnackBar,
    private http: Http
  ) { }

  ngOnInit() {
    Observable.interval(60000).takeWhile(()=>this.tracking).subscribe(()=>{
      var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      this.http.post('/tracking/retrieve',this.vehicleNumber,{headers:headers}).map(res=>res.json()).subscribe(data=>{
        let obj=JSON.parse(data);
        this.markersCopy.length = 0;
        obj.data.detaildata.forEach(element => {
          element.lattitude = Number(element.lattitude)
          element.longitude = Number(element.longitude)
          this.markersCopy.push(element)
        });
      })
      this.driverService.getDriverForTracking(this.user).subscribe(data=> {
        if(data.length== 0) {
          this.snackbar.open("Please register some drivers","X",{duration:3000});
        }
        

        data.forEach(element => {
          element.lat = Number(element.lat)
          element.lng = Number(element.lng)
          if(element.status=='Dispatched'){
            element.status='On Duty'
          }
          else{
            element.status='Inactive'
          }
        });

        this.markerDriverCopy = data;


        console.log(this.markerDriverCopy);
        
      });
      this.track()
      console.log(this.markersCopy);
      
    })
    var dutyData = localStorage.getItem('trackVehicle');
    this.duty = JSON.parse(dutyData);

    this.latitude = 19.07283;
    this.longitude = 72.88261;
    this.zoom = 10;

    this.latitudeDriver = 19.07283;
    this.longitudeDriver = 72.88261;
    this.zoomDriver = 10;

    this.auth.user.subscribe(data=> {
      this.user=data[0]
      this.vehicleService.getVehicle(this.user).subscribe(data => {
        if(data.length== 0) {
          this.snackbar.open("Please register some vehicles","X",{duration:3000});
        }
        this.vehicles=data;
        this.vehicles.unshift({modelname:'All',id:'%%'})
        this.vehicle=this.vehicleCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterVehicle(val))
        );
      }) 
      // this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(data=> {
      //   if(data.length== 0) {
      //     this.snackbar.open("Please register some vehicle groups","X",{duration:3000});
      //   }
      //   this.vehicleGroups=data;
      //   this.vehicleGroups.unshift({name:'All',id:'%%'})
      //   this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
      //   .pipe(
      //     startWith(''),
      //     map(val=>this.filterVehicleGroup(val))
      //   );    
      // });

      var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
        this.http.post('/tracking/retrieve',this.vehicleNumber,{headers:headers}).map(res=>res.json()).subscribe(data=>{
          let obj=JSON.parse(data);

          obj.data.detaildata.forEach(element => {
            element.lattitude = Number(element.lattitude)
            element.longitude = Number(element.longitude)
            this.markersCopy.push(element)
          });
        })

        if(this.duty) {
          // this.vehicleGroupCtrl.setValue(this.duty.vehicleGroup);
          this.vehicleCtrl.setValue(this.duty.vehicle);
          this.vehicleService.getVehicleNumber(this.user.ownerId, this.duty.vehicleId).subscribe(data => {
            if(data.length > 0) {
              this.vehicleNumber = data[0].number;

              this.markers.length = 0
              this.markers.push(this.markersCopy.find(x=>x.Vehicle_No === this.vehicleNumber))

              this.latitude = this.markers[0].lattitude
              this.longitude = this.markers[0].longitude
              this.zoom = 16;
            } 
          })
        }
        else
        {
          this.markers.length = 0;
          this.vehicleCtrl.setValue('All');
          // this.vehicleGroupCtrl.setValue('All');
          this.markers = this.markersCopy.slice(0)
        }

        this.track();

    })

  }

  ngOnDestroy() {
    this.tracking = false;
  }

  filterVehicleGroup(val:string){
    return this.vehicleGroups.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase())
    );
  }

  filterDriver(val:string){
    return this.drivers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase())
    );
  }

  filterVehicle(val:string){
    return this.vehicles.filter(option=>
      option.modelname.toLowerCase().includes(val.toLowerCase())
    );
  }

  
  setVehicleGroup(temp:any,event:any) {
    // console.log(temp)
    if(event.source.selected==true)
    {
      if(temp.name == 'All')
      {
        this.vehicle = ''
        this.vehicleCtrl.setValue('');
        // this.markers.length=0;
        // this.markers = this.markersCopy.slice(0);
        // this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(data=> {
        //   if(data.length== 0) {
        //     this.snackbar.open("Please register some vehicle groups","X",{duration:3000});
        //   }
        //   this.vehicleGroups=data;
        //   this.vehicleGroups.unshift({name:'All',id:'%%'})
        //   this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
        //   .pipe(
        //     startWith(''),
        //     map(val=>this.filterVehicleGroup(val))
        //   );    
        // });
      }
      else
      {
        this.vehicleGroupId = temp.id;  
        var temp2 = {
          ownerId: this.user.ownerId,
          vehicleGroupId: temp.id,
        }
        this.vehicleService.filterVehicleFromVehicleGroups(temp2).subscribe(data => {
          if(data.length== 0) {
            this.snackbar.open("Please register some vehicles","X",{duration:3000});
          }
          this.vehicles=data;
          this.vehicle=this.vehicleCtrl.valueChanges
          .pipe(
            startWith(''),
            map(val=>this.filterVehicle(val))
          );
        }) 
      }   
    }
  }

  setDriver(temp:any,event:any) {    
    if(event.source.selected==true)
    {
      this.driverId = temp.driverId
    }    
  }


  setVehicle(temp:any,event:any) {    
    if(event.source.selected==true)
    {
      this.vehicleNumber = temp.number
    }    
  }

  track()
  {
    this.i++;
    console.log(this.i);
    
    if(this.filterClicked == 'Vehicle'){
      if(this.vehicleCtrl.value == 'All')
      {
        console.log("track1");
        this.latitude = 19.07283;
        this.longitude = 72.88261;
        this.zoom = 10;
  
        this.markers.length=0;
        this.markers = this.markersCopy.slice(0);
      }
      else
      {
        
        if(this.markersCopy.find(x=>x.Vehicle_No === this.vehicleNumber) != undefined) {
          console.log("track2");
          this.markers.length = 0;
          this.markers.push(this.markersCopy.find(x=>x.Vehicle_No === this.vehicleNumber))
          this.latitude = this.markers[0].lattitude
          this.longitude = this.markers[0].longitude
          this.zoom = 16;
        }
        else {
          window.alert("Vehicle Tracking not available for "+this.vehicleCtrl.value)
          this.vehicleCtrl.setValue('All')
        }
      }
    }
    else{
      // console.log(this.markerDriverCopy.findIndex(x=>x.driverId == this.driverId));
      console.log("track3");

      this.markerDriver.length=0;
      this.markerDriver.push(this.markerDriverCopy.find(x=>x.driverId === this.driverId));
      
      this.latitudeDriver =  Number(this.markerDriver[0].lat)
      this.longitudeDriver =  Number(this.markerDriver[0].lng)
      this.zoomDriver = 16;

      console.log(this.latitudeDriver,this.longitudeDriver);
      
    }
  }

  filter(temp)
  {
    if(temp == 'Vehicle')
    {
      this.filterClicked = 'Vehicle';
      this.vehicleService.getVehicle(this.user).subscribe(data => {
        if(data.length== 0) {
          this.snackbar.open("Please register some vehicles","X",{duration:3000});
        }
        this.vehicles=data;
        this.vehicles.unshift({modelname:'All',id:'%%'})
        this.vehicle=this.vehicleCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterVehicle(val))
        );
      }) 
      // this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(data=> {
      //   if(data.length== 0) {
      //     this.snackbar.open("Please register some vehicle groups","X",{duration:3000});
      //   }
      //   this.vehicleGroups=data;
      //   this.vehicleGroups.unshift({name:'All',id:'%%'})
      //   this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
      //   .pipe(
      //     startWith(''),
      //     map(val=>this.filterVehicleGroup(val))
      //   );    
      // });

        var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
        this.http.post('/tracking/retrieve',this.vehicleNumber,{headers:headers}).map(res=>res.json()).subscribe(data=>{
          let obj=JSON.parse(data);

          obj.data.detaildata.forEach(element => {
            element.lattitude = Number(element.lattitude)
            element.longitude = Number(element.longitude)
            this.markersCopy.push(element)
          });
        })

        if(this.duty) {
          // this.vehicleGroupCtrl.setValue(this.duty.vehicleGroup);
          this.vehicleCtrl.setValue(this.duty.vehicle);
          this.vehicleService.getVehicleNumber(this.user.ownerId, this.duty.vehicleId).subscribe(data => {
            if(data.length > 0) {
              this.vehicleNumber = data[0].number;

              this.markers.length = 0
              this.markers.push(this.markersCopy.find(x=>x.Vehicle_No === this.vehicleNumber))

              this.latitude = this.markers[0].lattitude
              this.longitude = this.markers[0].longitude
              this.zoom = 16;
            } 
          })
        }
        else
        {
          this.markers.length = 0;
          // this.vehicleGroupCtrl.setValue('All');
          this.vehicleCtrl.setValue('All')
          this.markers = this.markersCopy.slice(0)
        }

        this.track();
    }
    if(temp == "Driver")
    {
      this.filterClicked = 'Driver';
      this.driverService.getDriverForTracking(this.user).subscribe(data=> {
        if(data.length== 0) {
          this.snackbar.open("Please register some drivers","X",{duration:3000});
        }
        this.drivers=data;

        data.forEach(element => {
          element.lat = Number(element.lat)
          element.lng = Number(element.lng)
          if(element.status=='Dispatched'){
            element.status='On Duty'
          }
          else{
            element.status='Inactive'
          }
        });
        

        this.markerDriverCopy = data;


        console.log(this.markerDriverCopy);
        
        // this.drivers.unshift({name:'All',id:'%%'})
        this.driver=this.driverCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterDriver(val))
        );    
      });
    }
  }

  refresh()
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      this.http.post('/tracking/retrieve',this.vehicleNumber,{headers:headers}).map(res=>res.json()).subscribe(data=>{
        let obj=JSON.parse(data);
        this.markersCopy.length = 0;
        obj.data.detaildata.forEach(element => {
          element.lattitude = Number(element.lattitude)
          element.longitude = Number(element.longitude)
          this.markersCopy.push(element)
        });
      })
      this.driverService.getDriverForTracking(this.user).subscribe(data=> {
        if(data.length== 0) {
          this.snackbar.open("Please register some drivers","X",{duration:3000});
        }
        

        data.forEach(element => {
          element.lat = Number(element.lat)
          element.lng = Number(element.lng)
          if(element.status=='Dispatched'){
            element.status='On Duty'
          }
          else{
            element.status='Inactive'
          }
        });

        this.markerDriverCopy = data;


        console.log(this.markerDriverCopy);
        
      });
      this.track()
      console.log(this.markersCopy);
  }
}
