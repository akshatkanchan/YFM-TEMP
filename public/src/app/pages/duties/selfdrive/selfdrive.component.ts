import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { Duty } from '../duty';
import { FileuploadService } from '../../../fileupload.service';
import { User } from '../../../core/user';
import { DutiesService } from '../duties.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'selfdrive',
  templateUrl: './selfdrive.component.html',
  styleUrls: ['./selfdrive.component.scss']
})
export class SelfdriveComponent implements OnInit {

  duty:Duty={};
  user:User={};
  videoUrl:any='';
  remarks='';
  imgUrl:any[]=[];
  _albums:any[] = [];

  constructor(private dialog:MatDialogRef<SelfdriveComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private snackbar:MatSnackBar,
    private auth:AuthService,
    private uploadService:FileuploadService,
    private dutiesService:DutiesService,
    private _sanitizer:DomSanitizer,
    private _lightbox: Lightbox) {

      this.duty=data.row
      console.log(this.duty);
      
    }

  ngOnInit() {

    this.auth.user.subscribe(data=>{
      this.user = data[0]
      
      this.uploadService.getSelfDriveVideoFile(this.user.companyName,this.duty.id).subscribe(data=>{
        this.videoUrl = data.text().toString()
      })

      this.uploadService.getSelfDriveImageFiles(this.user.companyName,this.duty.id).subscribe(data=>{
        data.json().forEach(element => {
          this.imgUrl.push(this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element));
          const album = {
            src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element)
          };
          this._albums.push(album);
        });
      })

      this.dutiesService.getSelfDriveDetails({dutyId:this.duty.id}).subscribe(data=>{
        this.remarks = data[0].remarks
      })
    })

  }

  closeDialog()
  {
    this.dialog.close("no");
  }

  save()
  {
    this.dialog.close("yes")
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
