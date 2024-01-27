import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { AddmoneyComponent } from '../addmoney/addmoney.component';
import { WalletService } from '../wallet.service';
import * as moment from 'moment';

@Component({
  selector: 'walletdisp',
  templateUrl: './walletdisp.component.html',
  styleUrls: ['./walletdisp.component.scss']
})
export class WalletdispComponent implements OnInit {

  user: User = {};
  deposit: boolean = false;
  transaction: boolean = false;

  lengthDeposit;
  pageSizeDeposit=5;
  pageSizeOptionsDeposit = [10, 15, 25, 40];

  lengthTransaction;
  pageSizeTransaction=5;
  pageSizeOptionsTransaction = [10, 15, 25, 40];

  displayedColumnsDeposit=['date', 'time','transactionId', 'amount'];
  displayedColumnsTransaction=['date','time','for','transactionId', 'amount'];

  dataSourceDeposit = new MatTableDataSource<any>();
  dataSourceTransaction = new MatTableDataSource<any>();
  walletAmount:number;

  @ViewChild('sort') sort: MatSort;
  @ViewChild('sort2') sort2: MatSort;

  @ViewChild('paginator') paginator:MatPaginator;
  @ViewChild('paginator2') paginator2:MatPaginator;

  filterStartDeposit:any = '';
  filterEndDeposit:any = '';
  filterStartTransaction:any = '';
  filterEndTransaction:any = '';

  constructor(
    private auth: AuthService,
    private dialog: MatDialog,
    private walletService: WalletService,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(data => {
      this.user = data[0];
      this.walletService.getWalletAmount(this.user).subscribe(data=>{
        this.walletAmount=data[0].amount;
        this.walletAmount=Math.floor(this.walletAmount);
      })
    })
  }

  addMoney() {
    this.snackBar.open("Contact administrator for adding money to the wallet");
    // this.dialog.open(AddmoneyComponent).afterClosed().subscribe(data=>{
    //   if(data == 'yes') {
    //     this.walletService.getWalletAmount(this.user).subscribe(data=>{
    //       this.walletAmount=data[0].amount;
    //       this.walletAmount = Number(this.walletAmount.toFixed(2));
    //     })
    //     this.walletService.getDepositTransaction(this.user).subscribe(data=>{
    //       this.dataSourceDeposit=data;
    //     })
    //   }
    // })
  }

  loadDepositHistory() {
    this.deposit = true;
    this.transaction = false;
    if(this.filterStartDeposit == '' && this.filterEndDeposit == '') {
      this.walletService.getDepositTransaction({ownerId: this.user.ownerId, from: '1970-01-01', to: '2050-12-31'}).subscribe(data => {
        console.log(data);
        this.dataSourceDeposit.data = data;
        this.lengthDeposit = data.length;
        this.dataSourceDeposit.sort = this.sort;
        this.dataSourceDeposit.paginator = this.paginator;
      });
    }
    else if(this.filterStartDeposit == '') {
      this.walletService.getDepositTransaction({ownerId: this.user.ownerId, from: '1970-01-01', to: this.filterEndDeposit}).subscribe(data => {
        console.log(data);
        this.dataSourceDeposit.data = data;
        this.lengthDeposit = data.length;
        this.dataSourceDeposit.sort = this.sort;
        this.dataSourceDeposit.paginator = this.paginator;
      });
    }
    else if(this.filterEndDeposit == '') {
      this.walletService.getDepositTransaction({ownerId: this.user.ownerId, from: this.filterStartDeposit, to: '2050-12-31'}).subscribe(data => {
        console.log(data);
        this.dataSourceDeposit.data = data;
        this.lengthDeposit = data.length;
        this.dataSourceDeposit.sort = this.sort;
        this.dataSourceDeposit.paginator = this.paginator;
      });
    }
    else {
      this.walletService.getDepositTransaction({ownerId: this.user.ownerId, from: this.filterStartDeposit, to: this.filterEndDeposit}).subscribe(data => {
        console.log(data);
        this.dataSourceDeposit.data = data;
        this.lengthDeposit = data.length;
        this.dataSourceDeposit.sort = this.sort;
        this.dataSourceDeposit.paginator = this.paginator;
      });
    }    
  }

  loadTransactionHistory() {
    this.deposit = false;
    this.transaction = true;
    if(this.filterStartTransaction == '' && this.filterEndTransaction == '') {
      this.walletService.getWalletTransaction({ownerId: this.user.ownerId, from: '1970-01-01', to: '2050-12-31'}).subscribe(data => {
        console.log(data);
        this.dataSourceTransaction.data = data;
        this.lengthTransaction = data.length;
        this.dataSourceTransaction.sort = this.sort2;
        this.dataSourceTransaction.paginator = this.paginator2;
      })
    }
    else if(this.filterStartTransaction == '') {
      this.walletService.getWalletTransaction({ownerId: this.user.ownerId, from: '1970-01-01', to: this.filterEndTransaction}).subscribe(data => {
        console.log(data);
        this.dataSourceTransaction.data = data;
        this.lengthTransaction = data.length;
        this.dataSourceTransaction.sort = this.sort2;
        this.dataSourceTransaction.paginator = this.paginator2;
      })
    }
    else if(this.filterEndTransaction == '') {
      this.walletService.getWalletTransaction({ownerId: this.user.ownerId, from: this.filterStartTransaction, to: '2050-12-31'}).subscribe(data => {
        console.log(data);
        this.dataSourceTransaction.data = data;
        this.lengthTransaction = data.length;
        this.dataSourceTransaction.sort = this.sort2;
        this.dataSourceTransaction.paginator = this.paginator2;
      })
    }
    else {
      this.walletService.getWalletTransaction({ownerId: this.user.ownerId, from: this.filterStartTransaction, to: this.filterEndTransaction}).subscribe(data => {
        console.log(data);
        this.dataSourceTransaction.data = data;
        this.lengthTransaction = data.length;
        this.dataSourceTransaction.sort = this.sort2;
        this.dataSourceTransaction.paginator = this.paginator2;
      })
    }
  }

  filterByDateDeposit() {
    if(this.filterStartDeposit != '' && this.filterEndDeposit != '') {
      moment(this.filterStartDeposit).format('YYYY-MM-DD');
      moment(this.filterEndDeposit).format('YYYY-MM-DD');
      this.loadDepositHistory();
    }
    else if(this.filterStartDeposit != '') {
      moment(this.filterStartDeposit).format('YYYY-MM-DD');
      this.loadDepositHistory();
    }
    else if(this.filterEndDeposit != '') {
      moment(this.filterEndDeposit).format('YYYY-MM-DD');
      this.loadDepositHistory();
    }
    else {

    }
    
  }

  filterByDateTransaction() {
    if(this.filterStartTransaction != '' && this.filterEndTransaction != '') {
      moment(this.filterStartTransaction).format('YYYY-MM-DD');
      moment(this.filterEndTransaction).format('YYYY-MM-DD');
      this.loadTransactionHistory();
    }
    else if(this.filterStartTransaction != '') {
      moment(this.filterStartTransaction).format('YYYY-MM-DD');
      this.loadTransactionHistory();
    }
    else if(this.filterEndTransaction != '') {
      moment(this.filterEndTransaction).format('YYYY-MM-DD');
      this.loadTransactionHistory();
    }
    else {

    }
    
  }

  filter(event) {
    this.dataSourceTransaction.filter = event;
  }

  clearDeposit() {
    this.filterStartDeposit = '';
    this.filterEndDeposit = '';
    this.loadDepositHistory();
  }

  clearTransaction() {
    this.filterStartTransaction = '';
    this.filterEndTransaction = '';
    this.loadTransactionHistory();
  }
}
