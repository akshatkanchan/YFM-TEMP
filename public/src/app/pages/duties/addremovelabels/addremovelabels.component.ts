import { Component, OnInit, Inject } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-addremovelabels',
  templateUrl: './addremovelabels.component.html',
  styleUrls: ['./addremovelabels.component.scss']
})
export class AddremovelabelsComponent implements OnInit {

  labelForm: FormGroup;
  labels:any[];
  dataSource:any;
  labelArray: any[];
  displayedColumns=['label'];
  user:User={}
  existingLabels: boolean = false;

  constructor(
    private http:Http,
    private auth:AuthService, 
    private fb: FormBuilder, 
    private dialog: MatDialog, 
    private snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if(data.row!=null) {
      console.log(data)
      var temp = {
        dutyId: data.row.id
      }
      this.getLabelsInDuties(temp).subscribe(data => {
        this.labelArray=data;
        if(this.labelArray.length != 0) {
          this.existingLabels = true;
        }
        else if(this.labelArray.length == 0) {
          this.existingLabels = false;
        }
        console.log(this.labelArray)
      })      
    }    
  }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0];
    })
    this.getLabels(this.user).subscribe(data=>{
      this.labels=data
    });
    this.labelForm = this.fb.group({
      labelField: this.fb.array([]),
    })

    this.addRow();
  }
  deleteChip(i, templabel, tempduty) {
    // console.log(i)

    this.labelArray.splice(i,1);
    // console.log(this.labelArray)
    var temp = {
      dutyId: tempduty,
      labelId: templabel,
    }
    // console.log(temp)
    this.deleteLabelsInDuties(temp).subscribe(data => {},err=>{},()=>{
      this.snackBar.open("Label Deleted","X",{duration:3000});
    })
  }

  get labelFormControl() {
    return this.labelForm.get('labelField') as FormArray;
  }
  getLabels(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/label/retrieve',temp,{headers:headers}).map(data=>data.json())
  }
  getLabelsInDuties(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/label/retrieveLabelsInDuties',temp,{headers:headers}).map(data=>data.json())
  }
  addLabelsInDuties(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/label/addLabelsInDuties',temp,{headers:headers}).map(data=>data.json())
  }
  deleteLabelsInDuties(temp) {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/label/deleteLabelsInDuties',temp,{headers:headers}).map(data=>data.json())
  }
  addLabels() {
    this.labelFormControl.value.forEach(element => {
      this.labelData.dutyId = this.data.row.id;
      this.labelData.labelId = element.labelName.id;
      this.labelData.labelName = element.labelName.name

      this.addLabelsInDuties(this.labelData).subscribe(data => {},err=>{},()=>{
        
      }); 
    });
    this.snackBar.open("Label Added","X",{duration:3000});
    this.dialog.closeAll();       
  }
  addRow() {
    const labelName = this.fb.group({
      labelName: ['', Validators.required],
    })

    this.labelFormControl.push(labelName);
  }
  deleteRow(i) {
    this.labelFormControl.removeAt(i);
  }

  labelData: LabelData = {    
    dutyId: [''],
    labelId: [''],
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  setTextColor(color) {
    
    var r, g, b, hsp;
    
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
      
        // If HEX --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        
        r = color[1];
        g = color[2];
        b = color[3];
    } 
    else {
      
        
        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }
    
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
    );
    

    // Using the HSP value, determine whether the color is light or dark
    if (hsp<150) {
        return '#ffffff';
    } 
    else {

        return '#000000';
    }
  }

}

export interface LabelData {  
  dutyId?: any[];
  labelId?: any[];
  labelName?: any[];
}
