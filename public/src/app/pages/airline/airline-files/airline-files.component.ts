import { Component, OnInit, Inject } from '@angular/core';
import { HotelBookings } from '../../masters/mailhotelinvoice/mailhotelinvoice.component';
import { BookHotelData } from '../../hotels/bookhotel/bookhotel.component';
import { User } from '../../../core/user';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FileuploadService } from '../../../fileupload.service';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { BookingsService } from '../../operations/bookings.service';
import { Http } from '@angular/http';
import { AuthService } from '../../../core/auth.service';
import { AirlineService } from '../airlinedisp/airline.service';
import { FlightBookings } from '../../masters/mailflightinvoice/mailflightinvoice.component';
import { FlightDetails } from '../bookairline/bookairline.component';

@Component({
  selector: 'airline-files',
  templateUrl: './airline-files.component.html',
  styleUrls: ['./airline-files.component.scss']
})
export class AirlineFilesComponent implements OnInit {

  imgUrl: any[] = [];
  selectedFiles: File[] = [];
  booking: FlightDetails ={}
  user: User = {};
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private uploadService: FileuploadService, @Inject(MAT_DIALOG_DATA) public data: any, private airlineService: AirlineService, private http:Http, private auth:AuthService, private snackBar:MatSnackBar) {
    this.booking = data
   }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
    })

    this.myForm = this.fb.group({
      files: this.fb.array([])
    })

    this.addRow()
  }

  get fileForms() {
    return this.myForm.get('files') as FormArray
  }

  addRow() {

    const phone = this.fb.group({
      name: [],
      images:[],
      imageName:[]
    })

    this.fileForms.push(phone);
  }

  deleteRow(i) {
    this.fileForms.removeAt(i)
  }

  imageSelect(event,i)
  {
    const file=event.target.files[0]
    this.selectedFiles[i]=file;
  }

  uploadFinal()
  {
    const uploadData= new FormData();
    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    const body = JSON.stringify({ headers: headers });

    var i = 0;
    this.fileForms.value.forEach(element => {

      var type = this.selectedFiles[i].type.split("/");
      var imageName = this.booking.id+"_"+element.name+"."+type[1]

      var tempArr = {
        bookingId : this.booking.id,
        fileName : element.name,
        imageName : this.booking.id+"_"+element.name+"."+type[1]
      }
      
      this.airlineService.addAirlineFiles(tempArr).subscribe(data=>{})
      if(this.selectedFiles[i]!=undefined)
        uploadData.append(this.user.companyName+'/airlineFiles/'+this.booking.id+"/"+imageName,this.selectedFiles[i],'airlineFiles')

      this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe();
      i=i+1;
    });

    this.snackBar.open("Files Uploaded","X",{duration:3000});
  }

}
