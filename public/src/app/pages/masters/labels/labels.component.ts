import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { LabelsService } from './labels.service';
import { MatDialog, MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})

export class LabelsComponent implements OnInit {

  user:User={};

  public color: string = '#a51ad633';

  public arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: '#fff500',
    color4: '#ec4040',
    color5: '#2dd02d',
    color6: '#1973c0',
    color7: '#f200bd',
    color8: '#a8ff00',
    color9: '#278ce2',
    color10: '#0a6211'
  };

  public color1: string = '#2889e9';
  public color2: string = '#e920e9';
  public color3: string = '#fff500';
  public color4: string = '#ec4040';
  public color5: string = '#2dd02d';
  public color6: string = '#1973c0';
  public color7: string = '#f200bd';
  public color8: string = '#a8ff00';
  public color9: string = '#278ce2';
  public color10: string = '#0a6211';

  public selectedColor: string = this.color1;

  labelColor:any;

  constructor(
    private auth:AuthService,
    private labelService:LabelsService,
    private dialog: MatDialog,
    private matDialogRef: MatDialogRef<LabelsComponent>,
    private snackBar:MatSnackBar,
    @Inject (MAT_DIALOG_DATA) public data,
  ) {
    if(data.row != null) {
      this.addLabel = data.row;
      this.selectedColor = data.row.color;
    }
  }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0];
      this.addLabel.ownerId=data[0].ownerId
    })
  }
  addLabels(){
    this.addLabel.color=this.selectedColor
    if(this.addLabel.name === ""){ 
      this.snackBar.open("Enter a label name","X",{verticalPosition:'top',horizontalPosition:'right'});
    } else if(this.addLabel.color === "") {
      this.snackBar.open("Select a label color","X",{verticalPosition:'top',horizontalPosition:'right'});
    } else {
      this.labelService.addLabels(this.addLabel).subscribe(data => {
        this.addLabel.id = data.insertId;
      },err=>{},()=>{
        this.snackBar.open("Label Added", "X", {duration: 3000});
        this.matDialogRef.close({data: this.addLabel});
      })      
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  addLabel:Labels={
    ownerId:'',
    name:'',
    color:''
  }
}
export interface Labels{
  id?: string;
  ownerId?:string;
  name?:string;
  color?:string;
}
