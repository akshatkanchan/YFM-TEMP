import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../core/auth.service';
import { ExpensesService } from '../expenses.service';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'addofficeexpenses',
  templateUrl: './addofficeexpenses.component.html',
  styleUrls: ['./addofficeexpenses.component.scss']
})
export class AddofficeexpensesComponent implements OnInit {

  officeExpensesForm: FormGroup;
  user: any;  

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private auth: AuthService,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.officeExpensesForm = this.fb.group({
      date: [''],
      rows: this.fb.array([])
    })

    this.auth.user.subscribe(data => {
      this.user = data[0]
      console.log(this.user)
    })
    
    this.addRow()
  }

  saveOfficeExpenses() {
    this.officeExpensesData.date = this.officeExpensesForm.get('date').value;
    this.officeExpensesData.date = moment(this.officeExpensesData.date).format("YYYY-MM-DD");
    this.officeExpensesData.ownerId = this.user.id;

    this.expensesService.addOfficeExpenses(this.officeExpensesData).subscribe(data => {
      this.itemsForm.value.forEach(element => {
        element.officeExpensesId = data.id;
        this.expensesService.addOfficeExpensesData(element).subscribe(data => {})
      });
    },err=>{},()=>{
      this.snackBar.open("Office Expense Added", "X", {duration: 3000});
    })    
  }

  get itemsForm(){
    return this.officeExpensesForm.get('rows') as FormArray;
  }
  addRow(){
    const rows = this.fb.group({
      particulars: [''],      
      quantity: [''],
      rate: [''],
      amount: [''],
    })
    this.itemsForm.push(rows);
  }
  deleteRow(i){      
    this.itemsForm.removeAt(i);
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  calculateCharges(element){
    element.get('amount').setValue(element.value.rate*element.value.quantity)      
  }
  
  officeExpensesData: OfficeExpenses = {
    date: '',    
    ownerId: '',
  }

}

export interface OfficeExpenses {
  id?: string,  
  date?: string,  
  ownerId?: string,  
}
