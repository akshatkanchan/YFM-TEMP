import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Vehicle } from '../../masters/new-vehicles/vehicle';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../../core/auth.service';
import { VehicleService } from '../../masters/new-vehicles/vehicle.service';
import { startWith, map, elementAt } from 'rxjs/operators';
import * as moment from 'moment';
import { ExpensesService } from '../expenses.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../../../core/user';

@Component({
  selector: 'addvehiclemaintenanceexpenses',
  templateUrl: './addvehiclemaintenanceexpenses.component.html',
  styleUrls: ['./addvehiclemaintenanceexpenses.component.scss']
})
export class AddvehiclemaintenanceexpensesComponent implements OnInit {
  
  expensesForm: FormGroup;
  user: User={};
  editState: boolean = false;
  editData: any=[];

  cost: {
    particulars: string,
    quantity: number,
    rate: number,
    amount: number
  }[] = [];
  
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
      this.vehicleMaintenanceExpensesData.id = data.row.id;
      this.vehicleNameCtrl.setValue(this.editData.vehicleName)
      this.vehicleNumberCtrl.setValue(this.editData.vehicleNumber);
      // this.expensesService.getVehicleMaintenanceExpensesData(this.editData).subscribe(data => {
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

    if(this.editData) {
      this.expensesService.getVehicleMaintenanceExpensesData(this.editData).subscribe(data => {
        data.forEach(element => {
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
    }
    
    if(this.editData.length == 0) {
      this.addRow()
    }
    
    this.expensesForm.patchValue({
      'date': this.editData.date,
      'total': this.editData.total,
    })    
  }

  saveVehicleExpenses() {    
    this.vehicleMaintenanceExpensesData.date = this.expensesForm.get('date').value;
    this.vehicleMaintenanceExpensesData.date = moment(this.vehicleMaintenanceExpensesData.date).format("YYYY-MM-DD");
    this.vehicleMaintenanceExpensesData.ownerId = this.user.id;
    this.vehicleMaintenanceExpensesData.vehicleId = this.modelId;
    this.vehicleMaintenanceExpensesData.vehicleName = this.modelname;
    this.vehicleMaintenanceExpensesData.vehicleNumber = this.modelNumber;
    this.expensesService.addVehicleMaintenanceExpenses(this.vehicleMaintenanceExpensesData).subscribe(data => {
      this.itemsForm.value.forEach(element => {
        element.vehicleMaintenanceExpensesId = data.insertId;
        this.expensesService.addVehicleMaintenanceExpensesData(element).subscribe(data => { })
      });
    },err=>{},()=>{
      this.ws.send(this.user.ownerId+"vehiclemaintenanceexpenses");
      this.snackBar.open("Vehicle Maintenance Expense Added", "X", {duration: 3000});
      this.dialog.closeAll();
    }) 
  }

  updateVehicleExpenses() {    
    this.vehicleMaintenanceExpensesData.date = this.expensesForm.get('date').value;
    this.vehicleMaintenanceExpensesData.date = moment(this.vehicleMaintenanceExpensesData.date).format("YYYY-MM-DD");
    this.vehicleMaintenanceExpensesData.ownerId = this.user.id;
    this.vehicleMaintenanceExpensesData.vehicleId = this.modelId;
    this.vehicleMaintenanceExpensesData.vehicleName = this.modelname;
    this.vehicleMaintenanceExpensesData.vehicleNumber = this.modelNumber;
    this.expensesService.updateVehicleMaintenanceExpenses(this.vehicleMaintenanceExpensesData).subscribe(data => {      
      this.itemsForm.value.forEach(element => {
        if(element.id) {
          this.expensesService.updateVehicleMaintenanceExpensesData(element).subscribe(data => {})
        }
        else {
          element.vehicleMaintenanceExpensesId = this.vehicleMaintenanceExpensesData.id;
          this.expensesService.addVehicleMaintenanceExpensesData(element).subscribe();
        }
      });
    },err=>{},()=>{
      this.ws.send(this.user.ownerId+"vehiclemaintenanceexpenses");
      this.snackBar.open("Vehicle Maintenance Expense Updated", "X", {duration: 3000});
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
    this.vehicleMaintenanceExpensesData.total = 0;
    this.itemsForm.value.forEach(element => {
      this.vehicleMaintenanceExpensesData.total+=Number(element.amount);
    });
    this.expensesForm.patchValue({
      'total': this.vehicleMaintenanceExpensesData.total,
    })
  }

  // calculateAmount() {    
  //   this.itemsForm.value.forEach(element => {      
  //     element.amount = (element.rate * element.quantity)
  //     this.cost.push({
  //       "particulars": element.particulars,
  //       "quantity": element.quantity,
  //       "rate": element.rate,
  //       "amount": element.amount});        
  //   });
  //   this.setAmount();    
  // }

  // setAmount() {
  //   this.itemsForm.patchValue(this.cost);
  // }

  // qty:number = 0;
  // setQuantity(temp) {
  //   console.log(temp)
  //   this.qty = temp;
  //   this.setAmount(this.qty, this.rate);
  // }

  // rate:number = 0;
  // setRate(temp) {
  //   this.rate = temp;
  //   this.setAmount(this.qty, this.rate);
  // }
  // cost:number = 0;
  // setAmount(qty, rate) {    
  //   this.cost = (Number(qty) * Number(rate));
  //   console.log(this.cost);
  //   this.itemsForm.patchValue([{
  //     'amount': this.cost
  //   }      
  //   ])
  // }

  vehicleMaintenanceExpensesData: VehicleMaintenanceExpenses = {
    vehicleId: '',
    vehicleName: '',
    vehicleNumber: '',
    date: '',    
    ownerId: '',
    total: 0,
  }
}

export interface VehicleMaintenanceExpenses {
  id?: string,
  vehicleId?: string,
  vehicleName?: string,
  vehicleNumber?: string,
  date?: string,    
  ownerId?: string,
  total?: number,
}

