import { Component, OnInit } from '@angular/core';
// import { User } from '../../../core/user';
// import { Booking } from '../../operations/booking';
// import { BookingsService } from '../../operations/bookings.service';
// import { AuthService } from '../../../core/auth.service';
// import { Http,Headers } from '@angular/http';
// import * as moment from 'moment'
// import * as XLSX from 'xlsx'
@Component({
  selector: 'app-importexcel',
  templateUrl: './importexcel.component.html',
  styleUrls: ['./importexcel.component.scss']
})
export class ImportexcelComponent {

  // disable:boolean=false;
  // rowsCompleted=0;
  // totalRows=0;
  // ngOnInit(){

  //   this.auth.user.subscribe(data=>{
  //     this.user=data[0]
  //   })

  // }

  // user:User={}
  // arrayBuffer:any;
  // file:File;
  // temp: any[]=[];
  // booking:Booking={
  //   status:'Booked'
  //   ,cname:''
  //   ,passenger:''
  //   ,vehicleGroup:''
  //   ,dutyType:''
  //   ,bookBy:''
  //   ,bookByNo:''
  //   ,bookByEmail:''
  //   ,passengerNo:'' 
  //   ,passengerEmail:''
  //   ,fromLoc:''
  //   ,toLoc:''
  //   ,reportingTime:''
  //   ,startFromGarage:''
  //   ,reportingAddress:''
  //   ,dropAddress:''
  //   ,shortReportingAddress:''
  //   ,flightTrainNo:''
  //   ,dispatchCenter:''
  //   ,billTo:''
  //   ,price:''
  //   ,remarks:''
  //   ,operatorNotes:''
  //   ,label:''
  //   ,customerId:''
  //   ,dutyTypeId:''
  //   ,vehicleGroupId:''
  //   ,startDate:null
  //   ,endDate:null
  //   ,ccId:''
  //   ,poNumber:''
  //   ,ownerID:''
  // };

  // constructor(private bookingService:BookingsService, private auth:AuthService, private http:Http)
  // {

  // }

  // incomingfile(event) 
  // {
  //    this.file= event.target.files[0]; 
  //    this.disable=false;
  // }

  // Upload() {
  //     let fileReader = new FileReader();
  //       fileReader.onload = () => {
  //           this.arrayBuffer = fileReader.result;
  //           var data = new Uint8Array(this.arrayBuffer);
  //           var arr = new Array();
  //           for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  //           var bstr = arr.join("");
  //           var workbook = XLSX.read(bstr, {type:"binary"});
  //           var first_sheet_name = workbook.SheetNames[0];
  //           var worksheet = workbook.Sheets[first_sheet_name];
  //           this.temp=XLSX.utils.sheet_to_json(worksheet,{raw:true});
  //       }
  //       fileReader.readAsArrayBuffer(this.file);
  //     setTimeout(()=>{
  //       this.totalRows=this.temp.length
  //       if(this.totalRows>0)
  //       {
  //         this.disable=true;
  //         this.log();
  //       }
  //       else
  //       {
  //         window.alert("There are no rows to be inserted")
  //       }
  //     },1000)
  // }

  // observables:any[]=[]
  // invalidData:any[]=[]
  // i=0;
  // progressBarValue=0;
  // async log()
  // {
  //   this.i=0;
  //   for await (const element of this.temp)
  //   {
  //     this.i++;
  //     const res=await this.compute(element)
  //     this.rowsCompleted=this.i;
  //     this.progressBarValue=((this.rowsCompleted/this.totalRows)*100)
  //   }
  // }

  // async compute(element)
  // {
  //     if(element["Customer Name"]==undefined && element["Vehicle Group"]==undefined && element["Duty Type"]==undefined)
  //     {
  //       this.booking.cname='';
  //       this.booking.dutyType='';
  //       this.booking.vehicleGroup='';
  //       this.invalidData.push("Row number: "+this.i);
  //     }
  //     else
  //     {
  //       this.booking.cname=element["Customer Name"];
  //       this.booking.vehicleGroup=element["Vehicle Group"];
  //       this.booking.dutyType=element["Duty Type"];
  //       var tempData={
  //         cname:element["Customer Name"],
  //         dType:element["Duty Type"],
  //         vGroup:element["Vehicle Group"],
  //         ownerId:this.user.ownerId
  //       }
  //       await this.getDetails(tempData).toPromise().then(data=>{
  //         if(data[0][0]!=undefined && data[1][0]!=undefined && data[2][0]!=undefined)
  //         {
  //           this.booking.customerId=data[0][0].id;
  //           this.booking.dutyTypeId=data[1][0].id;
  //           this.booking.vehicleGroupId=data[2][0].id;
  //         }
  //         else
  //         {
  //           this.invalidData.push("Row number: "+this.i)
  //         }
  //       })
  //     }
  //     if(element["Booked By"]==undefined)
  //     {
  //       this.booking.bookBy='';
  //     }
  //     else
  //     {
  //       this.booking.bookBy=element["Booked By"];
  //     }
  //     if(element["Booked By Number"]==undefined)
  //     {
  //       this.booking.bookByNo='';
  //     }
  //     else
  //     {
  //       this.booking.bookByNo=element["Booked By Number"];
  //     }
  //     if(element["Booked By Email"]==undefined)
  //     {
  //       this.booking.bookByEmail='';
  //     }
  //     else
  //     {
  //       this.booking.bookByEmail=element["Booked By Email"];
  //     }
  //     if(element["Passenger"]==undefined)
  //     {
  //       this.booking.passenger='';
  //     }
  //     else
  //     {
  //       this.booking.passenger=element["Passenger"];
  //     }
  //     if(element["Passenger Number"]==undefined)
  //     {
  //       this.booking.passengerNo='';
  //     }
  //     else
  //     {
  //       this.booking.passengerNo=element["Passenger Number"];
  //     }
  //     if(element["Passenger Email"]==undefined)
  //     {
  //       this.booking.passengerEmail='';
  //     }
  //     else
  //     {
  //       this.booking.passengerEmail=element["Passenger Email"];
  //     }
  //     if(element["From city"]==undefined)
  //     {
  //       this.booking.fromLoc='';
  //     }
  //     else
  //     {
  //       this.booking.fromLoc=element["From city"];
  //     }
  //     if(element["To city"]==undefined)
  //     {
  //       this.booking.toLoc='';
  //     }
  //     else
  //     {
  //       this.booking.toLoc=element["To city"];
  //     }
  //     if(element["Start Date"]==undefined)
  //     {
  //       this.booking.startDate=null;
  //     }
  //     else
  //     {
  //       var sDate=(element["Start Date"])
  //       this.booking.startDate=moment(sDate,"DD-MM-YYYY").format('YYYY-MM-DD')
  //     }
  //     if(element["End Date"]==undefined)
  //     {
  //       this.booking.endDate=null;
  //     }
  //     else
  //     {
  //       var eDate= element["End Date"];
  //       this.booking.endDate=moment(eDate,"DD-MM-YYYY").format('YYYY-MM-DD')
  //     }
  //     if(element["Reporting Time"]==undefined)
  //     {
  //       this.booking.reportingTime='';
  //     }
  //     else
  //     {
  //       var rTime= element["Reporting Time"];
  //       this.booking.reportingTime=moment(rTime,"h:mm A").format("hh:mm A");
  //     }
  //     if(element["Garage Start before (in mins)"]==undefined)
  //     {
  //       this.booking.startFromGarage='';
  //     }
  //     else
  //     {
  //       this.booking.startFromGarage=element["Garage Start before (in mins)"];
  //     }
  //     if(element["Reporting Address"]==undefined)
  //     {
  //       this.booking.reportingAddress='';
  //     }
  //     else
  //     {
  //       this.booking.reportingAddress=element["Reporting Address"];
  //     }
  //     if(element["Drop Address"]==undefined)
  //     {
  //       this.booking.dropAddress='';
  //     }
  //     else
  //     {
  //       this.booking.dropAddress=element["Drop Address"];
  //     }
  //     if(element["Dispatch Center"]==undefined)
  //     {
  //       this.booking.dispatchCenter='';
  //     }
  //     else
  //     {
  //       this.booking.dispatchCenter=element["Dispatch Center"];
  //     }
  //     if(element["Remarks"]==undefined)
  //     {
  //       this.booking.remarks='';
  //     }
  //     else
  //     {
  //       this.booking.remarks=element["Remarks"];
  //     }
  //     if(element["Operator notes"]==undefined)
  //     {
  //       this.booking.operatorNotes='';
  //     }
  //     else
  //     {
  //       this.booking.operatorNotes=element["Operator notes"];
  //     }
  //     if(element["Duty price"]==undefined)
  //     {
  //       this.booking.price='';
  //     }
  //     else
  //     {
  //       this.booking.price=element["Duty price"];
  //     }
  //     if(element["Short reporting Address"]==undefined)
  //     {
  //       this.booking.shortReportingAddress='';
  //     }
  //     else
  //     {
  //       this.booking.shortReportingAddress=element["Short reporting Address"];
  //     }

  //     if(this.booking.customerId!='' && this.booking.dutyTypeId!='' && this.booking.vehicleGroupId!='')
  //     {
  //       var temp={
  //         booking:{
  //           status:'Booked'
  //           ,cname:this.booking.cname
  //           ,passenger:this.booking.passenger
  //           ,vehicleGroup:this.booking.vehicleGroup
  //           ,dutyType:this.booking.dutyType
  //           ,bookBy:this.booking.bookBy
  //           ,bookByNo:this.booking.bookByNo
  //           ,bookByEmail:this.booking.bookByEmail
  //           ,passengerNo:this.booking.passengerNo
  //           ,passengerEmail:this.booking.passengerEmail
  //           ,fromLoc:this.booking.fromLoc
  //           ,toLoc:this.booking.toLoc
  //           ,reportingTime:this.booking.reportingTime
  //           ,startFromGarage:this.booking.startFromGarage
  //           ,reportingAddress:this.booking.reportingAddress
  //           ,dropAddress:this.booking.dropAddress
  //           ,shortReportingAddress:this.booking.shortReportingAddress
  //           ,flightTrainNo:this.booking.flightTrainNo
  //           ,dispatchCenter:this.booking.dispatchCenter
  //           ,billTo:this.booking.billTo
  //           ,price:this.booking.price
  //           ,remarks:this.booking.remarks
  //           ,operatorNotes:this.booking.operatorNotes
  //           ,label:this.booking.label
  //           ,customerId:this.booking.customerId
  //           ,dutyTypeId:this.booking.dutyTypeId
  //           ,vehicleGroupId:this.booking.vehicleGroupId
  //           ,startDate:this.booking.startDate
  //           ,endDate:this.booking.endDate
  //           ,ccId:this.booking.ccId
  //           ,poNumber:this.booking.poNumber
  //           ,ownerID:this.booking.ownerID
  //         },
  //         passenger:{
  //           id:'',
  //           passenger:this.booking.passenger,
  //           passengerNo:this.booking.passengerNo,
  //           passengerEmail:this.booking.passengerEmail
  //         }
  //       }
  //       await this.bookingService.addExcelBooking(temp).toPromise().then(res=>{res
  //       })
  //       this.setDefault()
  //     }
  // }

  // getCustomerId(temp)
  // {
  //   var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  //   return this.http.post('/importExcel/getCustomerId',temp,{headers:headers}).map(res => res.json());
  // }

  // getDutyTypeId(temp)
  // {
  //   var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  //   return this.http.post('/importExcel/getDutyTypeId',temp,{headers:headers}).map(res => res.json());
  // }

  // getVehicleGroupId(temp)
  // {
  //   var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  //   return this.http.post('/importExcel/getVehicleGroupId',temp,{headers:headers}).map(res => res.json());
  // }

  // getDetails(temp)
  // {
  //   var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  //   return this.http.post('/importExcel/getDetails',temp,{headers:headers}).map(res => res.json());
  // }

  // setDefault()
  // {
  //   this.booking={
  //     status:'Booked'
  //     ,cname:''
  //     ,passenger:''
  //     ,vehicleGroup:''
  //     ,dutyType:''
  //     ,bookBy:''
  //     ,bookByNo:''
  //     ,bookByEmail:''
  //     ,passengerNo:'' 
  //     ,passengerEmail:''
  //     ,fromLoc:''
  //     ,toLoc:''
  //     ,reportingTime:''
  //     ,startFromGarage:''
  //     ,reportingAddress:''
  //     ,dropAddress:''
  //     ,shortReportingAddress:''
  //     ,flightTrainNo:''
  //     ,dispatchCenter:''
  //     ,billTo:''
  //     ,price:''
  //     ,remarks:''
  //     ,operatorNotes:''
  //     ,label:''
  //     ,customerId:''
  //     ,dutyTypeId:''
  //     ,vehicleGroupId:''
  //     ,startDate:null
  //     ,endDate:null
  //     ,ccId:''
  //     ,poNumber:''
  //     ,ownerID:''
  //   };
  // }

}