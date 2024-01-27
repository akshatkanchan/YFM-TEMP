import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyProfile } from './companyprofile';
import { AuthService } from '../../../core/auth.service';
import { MatDialog, MatSnackBar, MatTabGroupBase } from '@angular/material';
import { NewBranchComponent } from '../../operations/new-branch/new-branch.component';
import { CompanyprofileService } from './companyprofile.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FileuploadService } from '../../../fileupload.service';
import { User } from '../../../core/user';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SubUserService } from '../../masters/sub-users/sub-user.service';
import { SubUser } from '../../masters/sub-users/sub-user';


@Component({
  selector: 'companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.scss']
})
export class CompanyprofileComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  constructor(private snackBar:MatSnackBar,
    private auth:AuthService,
    private dialog:MatDialog,
    private companyService: CompanyprofileService,
    private uploadService:FileuploadService, 
    private _sanitizer:DomSanitizer, 
    private router:Router,
    private permissionsService:SubUserService) { }

  companyProfileStateControl: FormControl = new FormControl();
  companyStateOptions: Observable<string[]>;
  insert:boolean=true;
  companyLogo: any='';
  user:User={}
  previousImgUrl:any=''
  permission:SubUser={};

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user = data[0]
      this.permissionsService.getSubUser(this.user).subscribe(data => {
        this.permission=data[0];
      })
      this.companyProfile.ownerId=data[0].ownerId;
      this.companyService.getCompanyProfile(data[0]).subscribe(data=>{
        if(data.length>0) {
          this.companyProfile=data[0];         
          this.insert=false;
          this.companyProfileStateControl.patchValue(
            this.companyProfile.state
          )
          
          if(this.companyProfile.companyLogo!='' && this.companyProfile.companyLogo!=null)
            this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
              this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
              + data.text());
              this.previousImgUrl = this.companyLogo;
            })

        }
      })

    })

    this.companyStateOptions = this.companyProfileStateControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterCompanyStates(val))
    );
  }

  filterCompanyStates(val: string): string[] {
    return this.states.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  uploadImage(event) {
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.companyLogo=reader.result

    reader.readAsDataURL(file);
  }

  saveCompanyProfile(){
    this.companyProfile.companyLogo = this.companyProfile.name+"_Logo.jpg";
    if(this.insert) {
      this.companyService.addCompanyProfile(this.companyProfile).subscribe(data=>{
        this.snackBar.open("Company Profile Updated",null,{duration:3000})
        this.upload(data.insertId)
      })
    } 
    else {
      this.companyService.updateCompanyProfile(this.companyProfile).subscribe(data=>{
        this.snackBar.open("Company Profile Updated",null,{duration:3000})
        this.upload(this.companyProfile.id)
      })
    }
  }

  companyStateSelect(option,event:any)
  {
    if(event.source.selected==true)
    {
      this.companyProfile.state=option
    }
  }

states=
  [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Karnatka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];

  addBranch(){
    this.router.navigate(['/pages/operations/branch'])
  }

  upload(id) {
    if(this.companyLogo!='')
    {
      this.companyProfile.companyLogo = id+this.companyProfile.name+".jpg";
      this.uploadService.uploadfile(this.user.companyName,'profileImages',this.companyProfile.companyLogo,this.companyLogo);
    }
      this.companyProfile.id=id
      this.companyService.updateCompanyProfile(this.companyProfile).subscribe(data=>{
        this.dialog.closeAll()
      })
  }

  companyProfile:CompanyProfile={
    companyLogo: '',
    name:'',
    address:'',
    state:'',
    phone:'',
    email:'',
    panNo:'',
    gstin:'',
    alternatePhone:'',
    headOfficeCity:'',
    invoicePrefix:'',
    hotelInvoicePrefix:'',
    flightInvoicePrefix:'',
    ownerId:'',
    hsnCode:''
  }

  removeImage()
  {
    this.companyLogo='';
    this.previousImgUrl='';
    this.companyProfile.companyLogo='';
  }
}
