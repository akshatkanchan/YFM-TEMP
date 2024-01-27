import { Component, OnInit, Inject } from '@angular/core';
import { Vehicle } from '../new-vehicles/vehicle';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FileuploadService } from '../../../fileupload.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleService } from '../new-vehicles/vehicle.service';
import { NewVehiclesComponent } from '../new-vehicles/new-vehicles.component';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'vehicleprofile',
  templateUrl: './vehicleprofile.component.html',
  styleUrls: ['./vehicleprofile.component.scss']
})
export class VehicleprofileComponent implements OnInit {

  vehicle:Vehicle = {
    modelname: '',
    number: '',
    vcolor: '',
    seating: '',
    fuelType:'',
    branches: '',
    companyName: '',
    policyNumber: '',
    issueDate:'',
    dueDate:'',
    premiumAmount: '',
    coverAmount: '',
    chassisNumber: '',
    engineNumber: '',
    regName: '',
    regDate: '',
    RTOAddress: '',
    taxEfficiency: '',
    expiryDateRTO: '',
    authorizationNumber: '',
    expiryDateAuth:'',
    PUCNumber: '',
    expiryDatePUC:'',
    EMIAmount: '',
    startDate:'',
    endDate:'',
    bankName: '',
    EMIDay:'',
    // permitType:'',
    // permitExpiryDate:'',
    fileName:'',
    fileURL:'',
    assignedDriver:'',
    vehicleGroup:'',
    assignedDriverId:null,
    vehicleGroupId:null,
    branchId:null,
    ownerId:'',
    fitnessNumber: '',
    expiryDateFitness: null,
    active: true,
  }
  loader = false;
  oldPassword;
  newPassword;
  confirmPassword;
  editState = false;
  currUser: any = {};
  imgUrl: any = '';
  previousImgUrl: any = '';
  user: User = {};
  isOwner = false;
  isError = false;
  error = '';
  isProfileImage = true;
  ws: WebSocket;
  visibleCustomers: any[] = [];
  _albums:any[] = [];
  _fileAlbums:any[] = [];
  permitImgUrl: any[] = [];
  fileImgUrl: any[] = [];
  fileUrl: any[] = [];
  files: any[] = []

  constructor(
    private auth:AuthService,
    private _sanitizer:DomSanitizer,
    private uploadService:FileuploadService,
    private snackBar:MatSnackBar,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vehicleService: VehicleService,
    private _lightbox: Lightbox,
  ) { }

  ngOnInit() {

    this.auth.user.subscribe(data => {
      this.user = data[0];
      if(this.data.row!=null) {      
        console.log(this.data.row);
        this.vehicle = this.data.row  

        if(this.vehicle.fileName!='' && this.vehicle.fileName!=null) {
          this.uploadService.getFile(this.user.companyName,'vehicleList',this.vehicle.fileName).subscribe(data=>{
            this.imgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousImgUrl = this.imgUrl;
            const album = {
              src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text())
            };
            this._albums.push(album);
          })
        }
        else {
          this.imgUrl="../../../../assets/icons/iconfinder_user_925901.svg";
          const album = {
            src: "../../../../assets/icons/iconfinder_user_925901.svg"
          };
          this._albums.push(album);
        }
        this.vehicleService.getVehiclePermit(this.vehicle).subscribe(data => {
          var j = 0;
          
          
          data.forEach(element => {
            this.uploadService.getFile(this.user.companyName,'vehiclePermits',element.fileName).subscribe(data => {
              console.log(data.text());
              if(data.text().includes("PDF")) {
                this.permitImgUrl[j] = null;
              }
              else {
                this.permitImgUrl[j] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ data.text());
              }
              const album = {
                src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text())
              };
              this._fileAlbums.push(album);
              this.uploadService.getPresignedUrl(this.user.companyName,element.fileName,'vehiclePermits').subscribe(data => {
                this.fileUrl[j] = data._body;
              })
              this.files.push({name: element.permitType, image: this.permitImgUrl[j], url: this.fileUrl[j]});
              j=j+1;
            })
          });
        })
        this.vehicleService.getVehicleFile(this.vehicle).subscribe(data => {
          var k = 0
          data.forEach(element => {
            this.uploadService.getFile(this.user.companyName,'vehicleFiles',element.fileName).subscribe(data => {
              if(data.text().includes("PDF")) {
                this.fileImgUrl[k] = null;
              }
              else {
                this.fileImgUrl[k] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ data.text());
              }
              const album = {
                src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text())
              };
              this._fileAlbums.push(album);
              this.uploadService.getPresignedUrl(this.user.companyName,element.fileName,'vehicleFiles').subscribe(data => {
                this.fileUrl[k] = data._body;
              })
              this.files.push({name: element.fileType, image: this.fileImgUrl[k], url: this.fileUrl[k]});
              k=k+1;
            })
          });
        })
      }                  
    })
  }

  selectFile(event) {
    this.isProfileImage=true;
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.imgUrl=reader.result

    reader.readAsDataURL(file)
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  edit() {
    this.dialog.open(NewVehiclesComponent,{autoFocus:false,disableClose:true,data:{
      row: this.data.row
    }})
  }

  open(albums,i): void {
    this._lightbox.open(albums, i);
  }
}
