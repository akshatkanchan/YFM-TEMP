import { Component, OnInit, Inject } from '@angular/core';
import{SubUser} from './sub-user';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TooltipPosition, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { SubUserService } from './sub-user.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';

@Component({
  selector: 'app-sub-users',
  templateUrl: './sub-users.component.html',
  styleUrls: ['./sub-users.component.scss']
})
export class SubUsersComponent implements OnInit {
  editState: boolean;
  predefined:any;
  presets:SubUser[];
  preset:FormGroup
  user:User={}
  saveSubUser()
  {
    this.subUserService.addSubUser(this.SubUser);
  }
  savePreset(){
    delete this.SubUser.id;
    this.SubUser.name=this.preset.get('permissionName').value;
    this.subUserService.addPermission(this.SubUser);
    this.snackBar.open("Preset Saved", "X", {duration: 3000});
  }
  close(){
    this.matDialogRef.close()
  }
  predefinedRoles(temp){
    console.log(temp)
    this.SubUser=temp
  }
  updateSubUser()
  {
    this.matDialogRef.close(this.SubUser)
    //this.subUserService.updateSubUser(this.SubUser);
  }
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(private matDialogRef:MatDialogRef<SubUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private subUserService:SubUserService,
    private auth:AuthService,
    private _formBuilder:FormBuilder,
    private snackBar: MatSnackBar,
    ) {
    //this.SubUser=data.row;
      //this.SubUser=this.SubUser;
      if(data != null) {
        this.editState=true;
        console.log(data);
        this.SubUser = data
      }
      
     //this.defaltVal();
   }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.SubUser.ownerId=data[0].ownerId,
      this.SubUser.userId=data[0].id
      this.user=data[0]
      this.subUserService.getPermissionsProfiles(this.user).subscribe(data=>{
        this.presets=data
      })
    })
    this.preset=this._formBuilder.group({
      permissionName:['',Validators.required]
    })
    
  }
  SubUser:SubUser={
    editCompanyInfo:0,
    ownerId:'',
    editDuties:0,
    allotVehiclesDriver:0,
    closeDuty:0,
    dispatchDuty:0,
    cancelDuty:0,
    sendInfoDuty:0,
    viewDutySlip:0,
    generateDutySlip:0,
    exportDuty:0,
    manageBooking:0,
    viewBookings:0,
    exportBookings:0,
    addBookings:0,

    manageCabInvoices:0,
    addCabInvoices:0,
    viewCabInvoices:0,
    downloadCabInvoices:0,
    emailCabInvoices:0,
    cancelCabInvoices:0,
    exportCabInvoices:0,


    manageHotelInvoices:0,
    viewHotelInvoices:0,
    addHotelInvoices:0,
    downloadHotelInvoices:0,
    emailHotelInvoices:0,
    cancelHotelInvoices:0,
    exportHotelInvoices:0,

    manageFlightInvoices:0,
    viewFlightInvoices:0,
    addFlightInvoices:0,
    downloadFlightInvoices:0,
    emailFlightInvoices:0,
    cancelFlightInvoices:0,
    exportFlightInvoices:0,

    manageVisaInvoices:0,
    viewVisaInvoices:0,
    addVisaInvoices:0,
    downloadVisaInvoices:0,
    emailVisaInvoices:0,
    cancelVisaInvoices:0,
    exportVisaInvoices:0,

    viewInvoices:1,

    viewReceipts:0,

    manageCabReceipts:0,
    viewCabReceipts:0,
    requestCabReceipts:0,
    cancelCabReceipts:0,
    exportCabReceipts:0,

    addCabReceipts:0,
    addFlightReceipts:0,
    addHotelReceipts:0,
    addVisaReceipts:0,
    
    manageFlightReceipts:0,
    viewFlightReceipts:0,
    requestFlightReceipts:0,
    cancelFlightReceipts:0,
    exportFlightReceipts:0,

    manageHotelReceipts:0,
    viewHotelReceipts:0,
    requestHotelReceipts:0,
    cancelHotelReceipts:0,
    exportHotelReceipts:0,

    manageVisaReceipts:0,
    viewVisaReceipts:0,
    requestVisaReceipts:0,
    cancelVisaReceipts:0,
    exportVisaReceipts:0,

    managePurchasesInvoices:0,
    viewPurchasesInvoices:0,
    addPurchasesInvoices:0,

    cancelPurchases:0,
    exportPurchases:0,

    managePurchasesDuties:0,
    addPurchasesDuties:0,
    viewPurchasesDuties:0,
    generatePurchaseDuties:0,
    requestDutySlip:0,
    requestInvoice:0,

    managePurchasePayments:0,
    viewPurchasesPayments:0,
    addPurchasesPayments:0,
    cancelPurchasesPayments:0,

    managePettyCash:0,
    addPettyCash:0,
    viewPettyCash:0,
    manageVehicleFuel:0,
    addVehicleFuel:0,
    viewVehicleFuel:0,
    manageDrivers:0,
    addDrivers:0,
    viewDriver:0, 

    manageDriverInfo:0,
    manageDriverUsers:0,
    manageSupporters:0,
    viewDutySupporters:0,
    viewBasicDutySupporters:0,
    addVehicles:0,
    manageVehicles:0,
    viewVehicles:0,
    viewBasicVehicles:0,
    addVehicleGroup:0,
    manageVehicleGroup:0,
    viewVehicleGroup:0,
    addCustomerGroup:0,
    manageCustomerGroup:0,
    viewCustomerGroup:0,
    manageCustomer:0,
    addCustomer:0,
    viewCustomer:0,
    managePricing:0,
    viewPricing:0,

    manageSupplierGroup:0, //there is none
    viewSupplierGroup:0,
    addSupplierGroup:0,

    manageSuppliers:0,
    viewSuppliers:0,
    addSupplier:0,
    manageDutyType:0,
    addDutyType:0,
    viewDutyType:0,
    manageTaxes:0,
    viewTaxes:0,
    addTaxes:0,

    manageBranches:0,
    viewBranches:0,
    addBranches:0,

    manageBillingItems:0,
    viewBillingItems:0,
    addBillingItems:0,

    manageBankAccounts:0,
    viewBankAccounts:0,
    addBankAccounts:0,

    manageSisterCompanies:0,
    viewSisterCompanies:0,
    viewLabels:0,
    addLabels:0,
    manageLabels:0,
    manageExportProfiles:0,
    viewExportProfiles:0,
    manageEmployees:0,
    addEmployees:0,
    viewEmployees:0,
    userId:'',

    manageFlights:0,
    viewFlights:0,
    addFlights:0,
    manageVisa:0,
    viewVisa:0,
    addVisa:0,
    
    manageHotels:0,
    viewHotels:0,
    addHotels:0,
    manageHotelsBookings:0,
    viewHotelsBookings:0,
    addHotelsBookings:0,

    addRecurringBookedBy:0,
    viewRecurringBookedBy:0,
    manageRecurringBookedBy:0,

    addRecurringPassenger:0,
    viewRecurringPassenger:0,
    manageRecurringPassenger:0,

    addVehicleBreakDowns:0,
    viewVehicleBreakDowns:0,
    manageVehicleBreakDowns:0,

    addVehicleMaintenance:0,
    viewVehicleMaintenance:0,
    manageVehicleMaintenance:0,

    viewTracking:0,

    viewIncomingDutyRequests:0,
    acceptDeclineDutyRequests:0,

    viewIncomingCircleRequests:0,
    acceptDeclineCircleRequests:0,

    viewCircle:0,
    addToCircle:0,
    manageCircle:0,

    addUsers:0,
    viewUsers:0,
    manageUsers:0,
    
    addOfficeExpenses:0,
    manageOfficeExpenses:0,
    viewOfficeExpenses:0,

    viewSms:0,

    viewBusinessSetting:0,
    editBusinessSetting:0,

    smsEmailCallBookings:0,
    smsEmailCallDuties:0,
    smsEmailCallFlights:0,
    smsEmailCallVisa:0,
    smsEmailCallHotels:0
    
   
  }
}
