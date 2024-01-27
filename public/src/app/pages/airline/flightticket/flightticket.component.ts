import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileuploadService } from '../../../fileupload.service';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FlightDetails } from '../bookairline/bookairline.component';
import { Http, Headers } from '@angular/http';
import { AirlineService } from '../airlinedisp/airline.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';

@Component({
  selector: 'flightticket',
  templateUrl: './flightticket.component.html',
  styleUrls: ['./flightticket.component.scss']
})
export class FlightticketComponent implements OnInit {

  TicketUrl:any;
  previousTicketUrl:any;
  ConnectingTicketUrl:any;
  previousConnectingTicketUrl:any;
  ReturnTicketUrl:any;
  previousReturnTicketUrl:any;
  ConnectingReturnTicketUrl:any;
  previousConnectingReturnTicketUrl:any;
  flightDetails: FlightDetails;
  selectedFile: File[]=[undefined,undefined];
  user:User={}
  isUploading=false;
  ticket=false;
  sTicket=false;
  rTicket=false;
  ticketName;
  ticketSize;
  returnTicketName;
  returnTicketSize;

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private http:Http,
    private airlineService: AirlineService,
    private auth:AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    if(data.row != null) {
      this.flightDetails = data.row;
    }    
  }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user = data[0]
    })
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  Upload(event) {
    

    if(event.srcElement.name=='ticket') {
      this.selectedFile[0]=<File>event.target.files[0];
      this.sTicket=true;
      this.ticketName=this.selectedFile[0].name;
      this.ticketSize=Number(this.selectedFile[0].size/1024/1024).toFixed(2)+ ' MB';
    }
    if(event.srcElement.name=='returnTicket') {
      this.selectedFile[1]=<File>event.target.files[0];
      this.rTicket=true;
      this.returnTicketName=this.selectedFile[1].name;
      this.returnTicketSize=Number(this.selectedFile[1].size/1024/1024).toFixed(2) + ' MB';
    }

  }

  uploadPics() {    
    var fileName=this.flightDetails.id+"_"+this.flightDetails.flightNo+"_"+this.flightDetails.from+"_"+this.flightDetails.departureDate
    var i=0;
    var tempFileName;

    const uploadData= new FormData();

    this.selectedFile.forEach(file => {
      if(file!=undefined) { 

        if(i==0)
        {
          tempFileName=this.user.companyName+"/flightTickets/"+fileName+"_One Way.pdf";
          this.flightDetails.ticket=fileName+"_One Way.pdf";
        }
          
        
        if(i==1)
        {
          tempFileName=this.user.companyName+"/flightTickets/"+fileName+"Return.pdf";
          this.flightDetails.returnTicket=fileName+"Return.pdf";
        }
          
        uploadData.append(tempFileName,file,'ticket')
        
        console.log(uploadData);
        
      }
      i++;
    });

    setTimeout(()=>{
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      return this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
        if(data.success)
        {
          this.snackBar.open("Flight Details Updated","X",{duration: 3000});
          this.isUploading=false;
        }
      });;
    },500)
    
  }

  saveTickets() {
    if(this.selectedFile[0]!=undefined)
    {
      this.isUploading=true;
      this.airlineService.updateFlights(this.flightDetails).subscribe(data => {
        this.uploadPics()
      })
    }
    else
    {
      this.snackBar.open("Nothing to upload","X",{duration: 3000});
    }
  }

  removeTicket()
  {
    this.selectedFile[0]=undefined;
    this.sTicket=false;
    this.ticketName='';
    this.ticketSize='';
  }

  removeReturnTicket()
  {
    this.selectedFile[1]=undefined;
    this.rTicket=false;
    this.returnTicketName='';
    this.returnTicketSize='';
  }
}
