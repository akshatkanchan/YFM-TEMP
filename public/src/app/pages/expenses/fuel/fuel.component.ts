import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { User } from '../../../core/user';
import { AddfuelComponent, FuelData } from '../addfuel/addfuel.component';
import { AuthService } from '../../../core/auth.service';
import { FuelService } from './fuel.service';
import { Router } from '@angular/router';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { SubUser } from '../../masters/sub-users/sub-user';

@Component({
  selector: 'fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.scss']
})
export class FuelComponent implements OnInit {

  searchTerm:any;
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={}
  dataSource = new MatTableDataSource<FuelData>();
  tempArray:any[];
  displayedColumns = ['driver','fuelType','currentKMS','fuelCost','Options'];
  permission:SubUser={};
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private dialog: MatDialog, private auth: AuthService, private fuelService: FuelService,private router:Router) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission = data[0]
        if(this.permission.manageVehicleFuel === 0) {
          this.displayedColumns.pop();
        }
      })
      this.fuelService.getFuel(this.user).subscribe(data=>{
        console.log(data)
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
      })
    })

    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  selectRow(row) {
    console.log(row)
    this.dialog.open(AddfuelComponent,{autoFocus:false,disableClose:true, data:{row}}).afterClosed().subscribe(data => {
      if(data==undefined) {
        console.log('no')
      }
      else {
        console.log('yes')
        if(data.inserted=='yes') {
          this.tempArray.push(data.data);
          this.dataSource.data=this.tempArray          
          console.log(data.data)
        } 
      }       
    });
  }
  deleteFuel(row) {
    console.log("delete called")
    this.dialog.open(ConfirmComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.fuelService.deleteFuel(row).subscribe(data=>{
          if(data.errno==undefined){
            var i=this.tempArray.indexOf(row);
            this.tempArray.splice(i,1);
            this.dataSource.data=this.tempArray;            
          }
          console.log("deleted")
        });
        
      }
      else{
        if(data.errno==1451){
          window.alert("Cannot delete because you have corresponding data");
        }
        else{
          window.alert("Error Cannot be Deleted")
        }
      }
    })
  }

  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter=""
  }

}
