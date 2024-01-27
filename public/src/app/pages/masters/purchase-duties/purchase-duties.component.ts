import { Component, OnInit, ViewChild } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { AuthService } from '../../../core/auth.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog} from '@angular/material'
import { Purchase } from '../addpurchase/purchase';
import { User } from '../../../core/user';
import { CircleService } from '../../circles/circle.service';
import { RequestinvoiceComponent } from '../requestinvoice/requestinvoice.component';
import { RequestdutyslipComponent } from '../requestdutyslip/requestdutyslip.component';
import { ViewdutyslipComponent } from '..//viewdutyslip/viewdutyslip.component';
import { SenddutyslipComponent } from '../senddutyslip/senddutyslip.component';
import { SubUser } from '../sub-users/sub-user';
import { DutiesService } from '../../duties/duties.service';
import { SelfdriveComponent } from '../../duties/selfdrive/selfdrive.component';
import { ClosedutyComponent } from '../../duties/closeduty/closeduty.component';

@Component({
  selector: 'app-purchase-duties',
  templateUrl: './purchase-duties.component.html',
  styleUrls: ['./purchase-duties.component.scss']
})
export class PurchaseDutiesComponent implements OnInit {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator

  user: User = {};
  searchTerm:any;
  filterStart: any = '';
  filterEnd: any = '';
  ws: WebSocket;

  dataSource=new MatTableDataSource<User>();
  displayedColumns=['date','dutyId','supplier','customer','passenger','vehicle','dutyType','status','estCustAmt','estAmt','supplierInvoice','Options'];

  userArray: any[]=[];

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 15, 25, 40];
  tempArray: any[]=[
    'date','dutyId','supplier','customer','passenger','vehicle','dutyType','status','estCustAmt','estAmt','earnings','supplierInvoice'
  ];
  permission:SubUser={};

  constructor(private authService:AuthService, private circleService: CircleService, private dialog: MatDialog, private DutiesService: DutiesService) {
    
   }

   ngOnInit() {
     this.authService.user.subscribe(data=>{

      this.user=data[0]
      this.authService.permissions.subscribe(data => {
        this.permission=data[0];
        if(this.permission.managePurchasesDuties === 0) {
          this.displayedColumns.pop();
        }
      })
      this.circleService.getPurchaseDuty(this.user).subscribe(data => {
        
        console.log(data)
        this.tempArray=data;     
        this.dataSource.data=this.tempArray;
        this.length = data.length;
      })
    })
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  requestInvoice(row) {
    this.dialog.open(RequestinvoiceComponent,{data: row, autoFocus:false,disableClose:true});
  }

  requestDutySlip(row) {
    this.dialog.open(RequestdutyslipComponent,{data: row, autoFocus:false,disableClose:true});
  }
  
  sendDutySlip(row) {
    this.dialog.open(SenddutyslipComponent, {data: row,autoFocus:false,disableClose:true})
  }
  
  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  searchByDate(){
    console.log("yes");
    
    if(this.filterStart == '') {
      this.circleService.filterByDate({ownerId: this.user.ownerId, startDate: '1970-01-01', endDate: this.filterEnd}).subscribe(data => {
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator=this.paginator;
      });
    }
    else if(this.filterEnd == '') {
      this.circleService.filterByDate({ownerId: this.user.ownerId, startDate: this.filterStart, endDate: '2050-12-31'}).subscribe(data => {
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator=this.paginator;
      });
    }
    else if(this.filterEnd != '' && this.filterStart != '') {
      this.circleService.filterByDate({ownerId: this.user.ownerId, startDate: this.filterStart, endDate: this.filterEnd}).subscribe(data => {
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.length = data.length;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator=this.paginator;
      });
    }
  }
  clear(){
    this.searchTerm = '';
    this.dataSource.filter = "";
    this.filterStart = "";
    this.filterEnd = "";
    this.circleService.getPurchaseDuty(this.user).subscribe(data => {
      console.log(data)
      this.tempArray=data;     
      this.dataSource.data=this.tempArray;
      this.length = data.length;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator=this.paginator;
    })
  }

  viewDutySlip(row){
    this.dialog.open(ViewdutyslipComponent,{ data:row,autoFocus:false,disableClose:true});
  }

  openCloseDuty(row){
    // if(row.subStatus != 'Ended') {
    //   this.snackBar.open("The Current duty is ongoing", "X", {duration: 3000});
    // }
    // else {
      this.DutiesService.checkSelfDrive(row).subscribe(data=>{
        if(data[0].dType=="Self Drive")
        {
          this.dialog.open(SelfdriveComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
            if(data=='yes')
            {
              this.dialog.open(ClosedutyComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
                if(data=='yes')
                {
                  this.ws.send(this.user.ownerId+"duty");
                  this.ws.send(row.id+"closeTracker");
                }
              })
            }
          })
        }
        else
        {
          this.dialog.open(ClosedutyComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
            if(data=='yes')
            {
              this.ws.send(this.user.ownerId+"duty");
              this.ws.send(row.id+"closeTracker");
            }
          })
        }
      })
    // }    
  }
}
