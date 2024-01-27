import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TooltipPosition, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { SubUsersComponent } from '../sub-users/sub-users.component';
import { NewuserService } from './newuser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})

export class NewuserComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  newUserForm:FormGroup;
  setPermissionCheck:boolean=false;
  employeeOrDriverNewUser:boolean = false;
  saveForm(){
    this.newUser.email=this.newUserForm.get('email').value,
    this.newUser.password=this.newUserForm.get('password').value,
    this.newUser.name=this.newUserForm.get('name').value,
    this.newUser.userName=this.newUserForm.get('userName').value,
    this.newUser.phone=this.newUserForm.get('phone').value
    console.log(this.newUser);
    this.saveSubUser(this.newUser)
  }
  saveSubUser(temp)
  {
    delete this.SubUser.name;
    delete this.SubUser.profileName;
    delete this.SubUser.id;
    this.newUserService.newUser(temp,this.SubUser,this.data.data.id)
    this.dialog.closeAll();
    // this.subUserService.addSubUser(this.SubUser)
  }
  updateSubUser()
  {

  }
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(
   private auth:AuthService,
   private _formBuilder:FormBuilder,
   private dialog:MatDialog,
   private newUserService:NewuserService,
   private activatedRoute:ActivatedRoute,
   private subUserService: SubUserService,
   @Inject (MAT_DIALOG_DATA) public data) {
     console.log(data)
    }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data=>{
      console.log(data);
      if(data) {
        //edit is remaining
        this.auth.retrieveUserById(data).subscribe(data => {
          console.log(data);          
          // this.newUser=data[0]
          this.newUserForm.patchValue({
            'name': data[0].name,
            'email': data[0].email,
            'phone': data[0].mobileNumber,
            'userName': data[0].userName,            
          })
        })        
        this.subUserService.getSubUser(data).subscribe(data => {
          this.SubUser = data[0];
        })
      }
    })
    this.auth.user.subscribe(data=>{
      this.SubUser.ownerId=data[0].ownerId
      this.newUser.ownerId=data[0].ownerId
    })
    this.newUserForm=this._formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required,],
      email:['',[Validators.required,Validators.email]],
      name:['',Validators.required],
      phone:['',Validators.required]
    })
    if(this.data.data.name) {
      if(this.data.driver) {
        this.newUser.type = 'driver'
        console.log(this.data.data);
        if(this.data.data.email == '' || this.data.data.email == null) {
          this.employeeOrDriverNewUser = false;  
        }
        else{
          this.employeeOrDriverNewUser = true;
        }
        this.newUserForm.patchValue({
          'name':this.data.data.name,
          'email':this.data.data.email,
          'phone':this.data.data.mobileNumber
        })
      } else {
        this.newUser.type = 'employee'
        this.employeeOrDriverNewUser = true;
        this.newUserForm.patchValue({
          'name':this.data.data.name,
          'email':this.data.data.email,
          'phone':this.data.data.mobilenumber
        })

      }
    } else {
      this.employeeOrDriverNewUser = false;
      console.log(this.employeeOrDriverNewUser)
    }
  }
  newPermission(){
    this.dialog.open(SubUsersComponent,{autoFocus:false,disableClose:true,data:this.SubUser}).afterClosed().subscribe(data=>{
      if(data){
        this.SubUser=data
        this.setPermissionCheck=true
      }
      else{
        this.setPermissionCheck=false
      }
    })
  }
  newUser:any={
    id:'',
    name:'',
    userName:'',
    password:'',
    permissionsId:'',
    email:'',
    phone:'',
    ownerId:'',
    active:1,
    type:''
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
    viewCabInvoices:0,
    addCabInvoices:0,
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

    viewReceipts:1,

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
