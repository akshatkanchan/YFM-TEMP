import { Component, OnInit, Inject } from '@angular/core';
import { FileuploadService } from '../../../fileupload.service';
import { Booking } from '../booking';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { User } from '../../../core/user';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { BookingsService } from '../bookings.service';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'bookingfiles',
  templateUrl: './bookingfiles.component.html',
  styleUrls: ['./bookingfiles.component.scss']
})
export class BookingfilesComponent implements OnInit {

  imgUrl: any[] = [];
  selectedFiles: File[] = [];
  booking: Booking = {};
  user: User = {};
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private uploadService: FileuploadService, @Inject(MAT_DIALOG_DATA) public data: any, private bookingService: BookingsService, private http:Http, private auth:AuthService, private snackBar:MatSnackBar) {
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
    console.log(event.target.files[0],i);
    const file=event.target.files[0]
    this.selectedFiles[i]=file;
    console.log(this.selectedFiles)
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

      console.log(this.selectedFiles[i].name);
      
      var tempArr = {
        bookingId : this.booking.id,
        fileName : element.name,
        imageName : this.booking.id+"_"+element.name+"."+type[1]
      }
      
      this.bookingService.addBookingFiles(tempArr).subscribe(data=>{})
      if(this.selectedFiles[i]!=undefined)
        uploadData.append(this.user.companyName+'/bookingFiles/'+this.booking.id+"/"+imageName,this.selectedFiles[i],'bookingFiles')

      this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe();
      i=i+1;
    });

    this.snackBar.open("Files Uploaded","X",{duration:3000});
  }

}
