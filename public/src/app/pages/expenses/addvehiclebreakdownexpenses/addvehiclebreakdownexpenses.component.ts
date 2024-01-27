import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehicle } from '../../masters/new-vehicles/vehicle';
import { AuthService } from '../../../core/auth.service';
import { VehicleService } from '../../masters/new-vehicles/vehicle.service';
import { startWith, map } from 'rxjs/operators';
import * as moment from 'moment';
import { ExpensesService } from '../expenses.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../../../core/user';

@Component({
  selector: 'addvehiclebreakdownexpenses',
  templateUrl: './addvehiclebreakdownexpenses.component.html',
  styleUrls: ['./addvehiclebreakdownexpenses.component.scss']
})
export class AddvehiclebreakdownexpensesComponent implements OnInit {

  expensesForm: FormGroup;
  user: User={};
  editState: boolean = false;
  editData: any = [];

  vehicleNameCtrl:FormControl=new FormControl();
  vehicle:Vehicle[];
  vehicles:any;
  modelId: any;
  modelname:any;
  modelNumber: any;

  vehicleNumberCtrl:FormControl=new FormControl();
  vehiclenumber:Vehicle[];
  vehiclesnumber:any;

  deletedItem = [];
  ws:WebSocket;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private auth: AuthService,
    private vehicleService: VehicleService,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if(data.row!=null) {
      console.log(data)
      this.editState=true;
      this.editData=data.row;
      this.vehicleBreakdownExpensesData.id = data.row.id;
      this.vehicleNameCtrl.setValue(this.editData.vehicleName);
      this.vehicleNumberCtrl.setValue(this.editData.vehicleNumber);      
      // this.expensesService.getVehicleBreakdownExpensesData(this.editData).subscribe(data => {
      //   console.log(data);
        
      //   data.forEach(element => {
      //     const rows = this.fb.group({
      //       id: element.id,
      //       particulars: element.particulars,      
      //       quantity: element.quantity,
      //       rate: element.rate,
      //       amount: element.amount,
      //     })
      //     this.itemsForm.push(rows);
      //   });        
      // })
    }
    else {
      this.editState=false;
    }
  }

  ngOnInit() {    
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.expensesForm = this.fb.group({
      date: [''],
      total: [''],
      rows: this.fb.array([])
    })
    this.auth.user.subscribe(data => {
      this.user = data[0]
      console.log(this.user)
    })
    this.vehicleService.getUniqueVehicle(this.user).subscribe(data=>{
      this.vehicle=data;
      this.vehicles=this.vehicleNameCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val=>this.filterVehicle(val))       
      );      
    })
    if(this.editData.length != 0) {
      this.expensesService.getVehicleBreakdownExpensesData(this.editData).subscribe(data => {
        data.forEach(element => {
          console.log(element);
          
          const row = this.fb.group({
            id: element.id,
            particulars: element.particulars,      
            quantity: element.quantity,
            rate: element.rate,
            amount: element.amount,
          })
          this.itemsForm.push(row);
        });  
      })
      this.expensesForm.patchValue({
        'date': this.editData.date,
        'total': this.editData.total,
      })    
    }    
    if(this.editData.length == 0) {      
      this.addRow()
    }
    
  }

  saveVehicleExpenses() {
    this.vehicleBreakdownExpensesData.date = this.expensesForm.get('date').value;
    this.vehicleBreakdownExpensesData.date = moment(this.vehicleBreakdownExpensesData.date).format("YYYY-MM-DD");
    this.vehicleBreakdownExpensesData.ownerId = this.user.id;
    this.vehicleBreakdownExpensesData.vehicleId = this.modelId;
    this.vehicleBreakdownExpensesData.vehicleName = this.modelname;
    this.vehicleBreakdownExpensesData.vehicleNumber = this.modelNumber;

    this.expensesService.addVehicleBreakdownExpenses(this.vehicleBreakdownExpensesData).subscribe(data => {
      this.itemsForm.value.forEach(element => {      
        element.vehicleBreakdownExpensesId = data.insertId   
        this.expensesService.addVehicleBreakdownExpensesData(element).subscribe(data => {})
      });
    },err=>{},()=>{
      this.ws.send(this.user.ownerId+"vehiclebreakdownexpenses");
      this.snackBar.open("Vehicle Breakdown Expense Added", "X", {duration: 3000});
      this.dialog.closeAll();
    })
  }

  updateVehicleExpenses() {
    this.vehicleBreakdownExpensesData.date = this.expensesForm.get('date').value;
    this.vehicleBreakdownExpensesData.date = moment(this.vehicleBreakdownExpensesData.date).format("YYYY-MM-DD");
    this.vehicleBreakdownExpensesData.ownerId = this.user.id;
    this.vehicleBreakdownExpensesData.vehicleId = this.modelId;
    this.vehicleBreakdownExpensesData.vehicleName = this.modelname;
    this.vehicleBreakdownExpensesData.vehicleNumber = this.modelNumber;
    console.log(this.vehicleBreakdownExpensesData);
    
    this.expensesService.updateVehicleBreakdownExpenses(this.vehicleBreakdownExpensesData).subscribe(data => {
      this.itemsForm.value.forEach(element => {
        if(element.id) {
          console.log(element);
          
          this.expensesService.updateVehicleBreakdownExpensesData(element).subscribe(data => {})
        }
        else {
          element.vehicleBreakdownExpensesId = this.vehicleBreakdownExpensesData.id;
          this.expensesService.addVehicleBreakdownExpensesData(element).subscribe();
        }
      });
    },err=>{},()=>{
      this.ws.send(this.user.ownerId+"vehiclebreakdownexpenses");
      this.snackBar.open("Vehicle Breakdown Expense Updated", "X", {duration: 3000});
      this.dialog.closeAll();
    })    
  }

  get itemsForm(){
    return this.expensesForm.get('rows') as FormArray;
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
  deleteRow(i, aRow){      
    this.itemsForm.removeAt(i);    
    if(aRow.value.id) {
      this.deletedItem.push(aRow.value);
    }
    this.calculateTotal();
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  setModelName(temp,event:any) {
    if(event.source.selected == true) {
      this.modelId = temp.id;
      this.modelname = temp.modelname;
    }

    this.vehicleService.getVehicleNumber(this.user.ownerId, this.modelId).subscribe(data => {
      this.vehiclenumber = data;
      this.vehiclesnumber = this.vehicleNumberCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterVehicleNumber(val))
      );
    })
  }

  setVehicleNumber(temp,event:any) {
    if(event.source.selected == true) {      
      this.modelNumber = temp.number
    }
    var data = {
      vehicleNumber: temp.number
    }
  }

  filterVehicle(val:string){
    return this.vehicle.filter(option =>
      option.modelname.toLowerCase().includes(val.toLowerCase()))
  }

  filterVehicleNumber(val:string){
    return this.vehiclenumber.filter(option =>
      option.number.toLowerCase().includes(val.toLowerCase()))
  }

  calculateCharges(element){
    element.get('amount').setValue(element.value.rate*element.value.quantity);
    this.calculateTotal();
  }  

  calculateTotal() {
    this.vehicleBreakdownExpensesData.total = 0;
    this.itemsForm.value.forEach(element => {
      this.vehicleBreakdownExpensesData.total+=Number(element.amount);
    });
    this.expensesForm.patchValue({
      'total': this.vehicleBreakdownExpensesData.total,
    })
  }

  vehicleBreakdownExpensesData: VehicleBreakdownExpenses = {
    vehicleId: '',
    vehicleName: '',
    vehicleNumber: '',
    date: '',
    ownerId: '',
    total: 0,
  }

}

export interface VehicleBreakdownExpenses {
  id?: string,
  vehicleId?: string,
  vehicleName?: string,
  vehicleNumber?: string,
  date?: string,  
  ownerId?: string,  
  total?: number;
}