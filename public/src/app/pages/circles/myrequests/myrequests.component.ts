import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { CircleService } from '../circle.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { MappingComponent } from '../mapping/mapping.component';
import { SubUser } from '../../masters/sub-users/sub-user';

@Component({
  selector: 'app-myrequests',
  templateUrl: './myrequests.component.html',
  styleUrls: ['./myrequests.component.scss']
})
export class MyrequestsComponent implements OnInit {

  lengthReceived;
  pageSizeReceived = 10;  // set default to 10
  pageSizeOptionsReceived = [10, 15, 25, 40];

  lengthSent;
  pageSizeSent = 10;  // set default to 10
  pageSizeOptionsSent = [10, 15, 25, 40];

  dataSourceReceived=new MatTableDataSource<any>()
  dataSourceSent=new MatTableDataSource<any>()
  searchTermReceived:string='';
  searchTermSent:string='';

  displayedColumnsReceived = ['startDate','cname', 'bookBy', 'passenger','driver','dutyType','reportingAddress','dropAddress','reportingTime','remarks','Options'];

  displayedColumnsSent = ['supplierName','startDate','cname', 'bookBy', 'passenger','driver','dutyType','reportingAddress','dropAddress','reportingTime','remarks','status','Options'];
  
  user:User={};
  permission:SubUser={};
  receivedArray:any[]=[];
  
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('sort2') sort2: MatSort;
  @ViewChild(MatPaginator) paginator1:MatPaginator;
  @ViewChild(MatPaginator) paginator2:MatPaginator;
  constructor(private circleService:CircleService, private auth:AuthService,private dialog:MatDialog) { }

  ngOnInit() {

    this.auth.user.subscribe(data=>
    {
        this.user=data[0]
        this.auth.permissions.subscribe(data=>{
          this.permission=data[0];
          if(this.permission.acceptDeclineDutyRequests === 0) {
            this.displayedColumnsReceived.pop();
          }
        })
        this.circleService.getreceivedDuty(this.user).subscribe(data=>{
          console.log("Received");
          console.log(data);
          this.receivedArray=data;
          this.dataSourceReceived.data=this.receivedArray;
          this.lengthReceived=data.length;
        })
        this.circleService.getSentDuty(this.user).subscribe(data=>{
          console.log("Sent");
          console.log(data);
          this.dataSourceSent.data=data;
          this.lengthSent=this.dataSourceSent.data.length;
        })
    })

    this.dataSourceReceived.paginator=this.paginator1;
    this.dataSourceSent.paginator=this.paginator2;
    this.dataSourceReceived.sort=this.sort1;
    this.dataSourceSent.sort=this.sort2;
    
  }

  acceptRequest(row)
  {
    
    console.log(row)
    this.dialog.open(MappingComponent,{data:{duty:row},autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data.confirm=='yes'){
        var date=moment().format("DD/MM/YYYY, hh:mm:ss a");
        var userName=this.user.name;
        var log="Accepted by "+userName+" on "+date;

        var temp={
          id:row.dutyId,
          log:log,
          ownerId:this.user.ownerId,
          companyName:row.ownerName, 
          bookBy:this.user.name, //maybe wrong
          dutyType:data.dutyType.name,
          dutyTypeId:data.dutyType.id,
          vehicleGroup:data.vehicleGroup.name,
          vehicleGroupId:data.vehicleGroup.id,
         notificationOwnerId:row.ownerId,
         notificationCompanyName:this.user.companyName
           }

      this.circleService.acceptDuty(temp).subscribe(data=>{
        var i=this.receivedArray.indexOf(row);
        row.log=log;
        row.requestStatus="Accepted";
        this.receivedArray.splice(i,1,row);
        this.dataSourceReceived.data=this.receivedArray
      })
      console.log(data)
      console.log("Yo")
     }
   });
  }

  declineRequest(row)
  {
    var date=moment().format("DD/MM/YYYY, hh:mm:ss a");
    var userName=this.user.name;
    var log="Declined by "+userName+" on "+date;


    var temp={
      id:row.dutyId,
      log:log
    }
    this.circleService.declineDuty(temp).subscribe(data=>{
      var i=this.receivedArray.indexOf(row);
      row.log=log;
      row.requestStatus="Declined";
      this.receivedArray.splice(i,1,row);
      this.dataSourceReceived.data=this.receivedArray
    })
  }

  clearFilter(){
    this.searchTermReceived=""
    this.searchTermSent=""
    this.dataSourceReceived.filter=""
    this.dataSourceSent.filter=""
  }

  searchReceived(filterValue:string){
    this.dataSourceReceived.filter=filterValue.trim().toLowerCase();
  }

  searchSent(filterValue:string){
    this.dataSourceSent.filter=filterValue.trim().toLowerCase();
  }
}
