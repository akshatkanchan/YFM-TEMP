import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { LabelsService } from '../labels/labels.service';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { Labels, LabelsComponent } from '../labels/labels.component';
import { SubUser } from '../sub-users/sub-user';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';

@Component({
  selector: 'labeldisplay',
  templateUrl: './labeldisplay.component.html',
  styleUrls: ['./labeldisplay.component.scss']
})
export class LabeldisplayComponent implements OnInit {

  length;
  pageSize=10;
  searchTerm;
  pageSizeOptions = [10, 15, 25, 40];
  displayedColumns=['name','color','Options'];
  user:User={};
  permission:SubUser={};
  dataSource=new MatTableDataSource<Labels>();
  tempArray:any[];
  constructor(
    private auth:AuthService,
    private labelsService:LabelsService,
    private dialog:MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0];
        if(this.permission.manageLabels === 0) {
          this.displayedColumns.pop();
        }
      })
      this.labelsService.getLabels(this.user).subscribe(data=>{
        this.tempArray = data;
        this.dataSource.data=this.tempArray;
      })
    })
  }
  // addLabels(){
  //   this.dialog.open(LabelsComponent,{autoFocus:false,disableClose:true,data:{null}})
  // }
  search(filterValue:string)
  {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter='';
  }
  
  selectRow(row) {
    this.dialog.open(LabelsComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data => {
      if(data == undefined) {
        console.log('no')
      }
      else {
        console.log('yes')        
          this.tempArray.push(data.data);
          this.dataSource.data = this.tempArray          
          console.log(data.data)        
      }
    })
  }

  deleteLabel(row){
    this.dialog.open(ConfirmComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data == 'no') {}
      if(data=='yes') {
        this.labelsService.deleteLabels(row).subscribe(data=>{
          if(data.errno==undefined)
          {
            var i=this.tempArray.indexOf(row);
            this.tempArray.splice(i,1);
            this.dataSource.data = this.tempArray;
          }
        },err=>{},()=>{
          this.snackBar.open("Label Deleted", "X", {duration: 3000});
          this.dialog.closeAll();
        });
      }
      else {
        if(data.errno==1451) {
          window.alert("Cannot delete because you have corresponding data");
        }
        else {
          window.alert("Error Cannot be Deleted")
        }
      }
    })
  }

}
