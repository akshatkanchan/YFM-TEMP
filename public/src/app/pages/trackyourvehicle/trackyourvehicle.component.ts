import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { DutiesService } from '../duties/duties.service';

@Component({
  selector: 'trackyourvehicle',
  templateUrl: './trackyourvehicle.component.html',
  styleUrls: ['./trackyourvehicle.component.scss']
})
export class TrackyourvehicleComponent implements OnInit, OnDestroy {

  tracking=true;
  customer: any;
  passenger: any;
  reportingAddress: any;
  dropAddress: any;
  vehicleName: any;
  vehicleNo: any;
  driver: any;
  markers:any[] = [];
  markersCopy:any[] = [];
  ngUnsubscribe: Subject<any> = new Subject<any>();
  code:any='';
  latitude: number;
  longitude: number;
  zoom: number;
  ws:WebSocket;
  dutyId:any;

  constructor(private http:Http, private router:Router, private activatedRoute: ActivatedRoute, private dutySerice: DutiesService) { }

  ngOnInit() {

        console.log("asdasd");
        

        var HOST = location.origin.replace(/^http/, 'ws')
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
          if(event.data==this.dutyId+"closeTracker") {
            this.vehcileStatus();
          }
        }.bind(this);

        this.latitude = 19.07283;
        this.longitude = 72.88261;
        this.zoom = 8;
    
        this.activatedRoute.queryParams
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(params => {
          if (!params)
          {
            this.tracking=false;
          }
          else
          {
            console.log("asdasdsad");
            
            setInterval(()=>{

              this.http.post('/tracking/retrieve',this.code).map(res=>res.json()).subscribe(data=>{
                let obj=JSON.parse(data);
      
                obj.data.detaildata.forEach((element: { lattitude: number; longitude: number; }) => {
                  element.lattitude = Number(element.lattitude)
                  element.longitude = Number(element.longitude)
                  this.markersCopy.push(element)
                });
              })

              this.markers.length = 0
              this.markers.push(this.markersCopy.find(x=>x.Vehicle_No === this.vehicleNo))
              console.log(this.markers)
              this.latitude = this.markers[0].lattitude;
              this.longitude = this.markers[0].longitude;
              this.zoom = 16;

            },10000)
            this.code = params['vtc'];
            this.http.post('/tracking/retrieve',this.code).map(res=>res.json()).subscribe(data=>{
              let obj=JSON.parse(data);
    
              obj.data.detaildata.forEach((element: { lattitude: number; longitude: number; }) => {
                element.lattitude = Number(element.lattitude)
                element.longitude = Number(element.longitude)
                this.markersCopy.push(element)
              });

              this.vehcileStatus();
            })
          }
        })   
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  vehcileStatus()
  {
    var temp = 
    {
      randomNumber : this.code
    }

    this.dutySerice.getTracking(temp).subscribe(data=>
    {
      console.log(data);
      
      if(data[0].status!='Dispatched')
      {
        this.tracking=false
      }
      else
      {        
        this.customer=data[0].cname;
        this.passenger=data[0].passenger;
        this.reportingAddress=data[0].reportingAddress;
        this.dropAddress=data[0].dropAddress;
        this.vehicleName=data[0].modelname;
        this.vehicleNo=data[0].number;
        this.driver=data[0].name;
        this.dutyId=data[0].id;

        this.markers.length = 0
        this.markers.push(this.markersCopy.find(x=>x.Vehicle_No === this.vehicleNo))
        this.latitude = this.markers[0].lattitude;
        this.longitude = this.markers[0].longitude;
        this.zoom = 16;
      }
    })
  }

}
