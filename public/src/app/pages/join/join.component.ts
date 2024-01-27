import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { BusinessSettings } from '../circles/businesssetting/businesssetting.component';
import { BusinesssettingService } from '../circles/businesssetting/businesssetting.service';
import { SubUserService } from '../masters/sub-users/sub-user.service';
import { SubUser } from '../masters/sub-users/sub-user';
import { CompanyProfile } from '../circles/companyprofile/companyprofile';
import { CompanyprofileService } from '../circles/companyprofile/companyprofile.service';
import { Http } from '@angular/http';
import { WalletService } from '../wallet/wallet.service';

@Component({
  selector: 'join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  
  name;
  phone;
  email;
  password;
  confirmPassword;
  isError =false;
  loader=false;
  
  constructor(private router:Router, private auth:AuthService, 
    private businessSettingsService:BusinesssettingService, 
    private permissionService:SubUserService, private http: Http,
    private walletService:WalletService) { }

  ngOnInit() {

    if(localStorage.getItem("rtcuieo") && this.auth.isAuthenticated())
    {
      this.router.navigate(['/pages']);
    }
    
  }
 
  onSubmit(formData)
  {
    this.loader=true
    this.auth.registerOwner(formData).then(data=>{

      this.businessSettings.ownerID=data.user.uid;
      this.permissions.ownerId=data.user.uid;
      this.permissions.userId=data.user.uid;
      
      var ownerData={
        id: data.user.uid,
        name:this.name,
        email:this.email,
        phone:this.phone,
        type:'owner',
        ownerId:data.user.uid,
        userName:this.email.substring(0, this.email.lastIndexOf("@")),
        active:1
      }

      this.auth.createOwner(ownerData).subscribe()
      this.businessSettingsService.addBusinessSettings(this.businessSettings).subscribe();
      this.permissionService.addSubUser(this.permissions)
      this.companyProfile = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        ownerId: data.user.uid
      }
      this.http.post('/companyProfile/addNew',this.companyProfile).map(res=>res.json()).subscribe();
      this.walletService.addNewWallet(this.companyProfile).subscribe();
    })
  }

  businessSettings: BusinessSettings = {    
    ownerID: '',
    AllowBookingsToBeAddedWithoutAnyPricing: false,
    AutoSendAllotmentNotificationToDriverApp: false,
    UseBookingsIDInSMS: false,
    DefaultStartFromGarage: '',
    RoundOffDutySlipTimeToNearestHour: false,
    ShowGarageStartTimeInsteadOfReportingTime: false,
    ShowFromCity: false,
    ShowDropAddress: false,
    ShowRemarks: false,
    ShowVehicleGroup: false,
    ShowLabels: false,
    AddCustomerName: false,
    AddBookedByName: false,
    AddAllPassengerNamesAndNumbers: false,
    HideVehicleName: false,
    HideRemarks: false,
    AddGarageStartTime: false,
    AddReleasedKmTimeSection: false,
    AddEntireBookingDateRange: false,
    AddPrintedByInformationToFooter: false,
    AlwaysUseFullPageDesign: false,
    HideBusinessLetterHead: false,
    HideCustomerNameForDriverSupplierInMobileApp: false,
    invoiceDatesAndNumbering: 'Automatic',
    RoundOffExtraTimeOfEveryDutyWhileDisplayingOnInvoice: false,
    ShowPerKilometerRateOnInvoiceForDayKMDuties: false,
    HideVehicleNumberFromInvoice: false,
    ShowDutySummaryAtTheTopOfTheInvoiceAlways: false,
    ShowDutyId: false,
    ShowDutyType: false,
    ShowBookedByName: false,
    ShowPassengerNames: false,
    ShowVehicleGroupName: false,
    ShowVehicleNumber: false,
    ShowStartDate: false,
    ShowEndDate: false,
    ShowStartTime: false,
    ShowEndTime: false,
    ShowExtraHour: false,
    ShowTotalHour: false,
    ShowStartKM: false,
    ShowEndKM: false,
    ShowExtraKM: false,
    ShowTotalKM: false,
    ShowExtraHourRate: false,
    ShowExtraKMRate: false,
    ShowExtraHourCost: false,
    ShowExtraKMCost: false,
    ShowConsolidatedBillingItems: false,
    ShowSeparatedBillingItems: false,
    ShowAllowances: false,
    ShowPrice: false,
    ShowQuantityNumberOfDays: false,
    ShowTotalPrice: false,
    ShowCarHireCharges: false,
    ShowDutySubtotal: false,
    ShowDutySubtotalIncludingAllowances: false,
    ShowPurchaseDutyID: false,
    ShowPurchaseDutyType: false,
    ShowPurchaseBookedByName: false,
    ShowPurchasePassengerNames: false,
    ShowPurchaseVehicleGroupName: false,
    ShowPurchaseVehicleNumber: false,
    ShowPurchaseStartDate: false,
    ShowPurchaseEndDate: false,
    ShowPurchaseStartTime: false,
    ShowPurchaseEndTime: false,
    ShowPurchaseExtraHour: false,
    ShowPurchaseTotalHours: false,
    ShowPurchaseStartKM: false,
    ShowPurchaseEndKM: false,
    ShowPurchaseExtraKM: false,
    ShowPurchaseTotalKm: false,
    ShowPurchaseExtraHourRate: false,
    ShowPurchaseExtraKMRate: false,
    ShowPurchaseExtraHourCost: false,
    ShowPurchaseExtraKMCost: false,
    ShowPurchaseConsolidatedBillingItems: false,
    ShowPurchaseSeparatedBillingItems: false,
    ShowPurchaseAllowances: false,
    ShowPurchasePrice: false,
    ShowPurchaseDutySubtotal: false,
    ShowCustomerCarHireCharges: false,
    ShowCustomerCarHireChargesIncludingAllowances: false,
    ShowCustomerDutySubtotal: false,
    ShowCustomerDutySubtotalIncludingAllowances: false,
    defaultCustomer: '',
    dispatchCenter: '',
    AutoCCEmail: '',
    CCAllConfirmationAndCancellationEmails: false,
    CCAllAllotmentEmails: false,
    CCAllInvoiceEmails: false,
    SMSMask: '',
    AutoAcceptIncomingDutySlip: false,
    bookingConfirmationHeader: '',
    bookingConfirmationFooter: '',
    dutyAllotmentToCustomerHeader: '',
    dutyAllotmentToCustomerFooter: '',
    dutyAllotmentToSupplierHeader: '',
    dutyAllotmentToSupplierFooter: '',
    dutyBookingCancellationHeader: '',
    dutyBookingCancellationFooter: '',
    invoiceToCustomerHeader: '',
    invoiceToCustomerFooter: '',
    paymentRequestHeader: '',
    paymentRequestFooter: '',
    SMSEnabled: false,
    EmailEnabled: false,
    trackingProvider: '',
    trackingUsername: '',
    trackingPassword: '',
  }

  permissions:SubUser={
    editCompanyInfo:1,
    ownerId:'',
    editDuties:1,
    allotVehiclesDriver:1,
    closeDuty:1,
    dispatchDuty:1,
    cancelDuty:1,
    sendInfoDuty:1,
    viewDutySlip:1,
    generateDutySlip:1,
    exportDuty:1,

    manageBooking:1,
    viewBookings:1,
    exportBookings:1,
    addBookings:1,


    
    manageCabInvoices:1,
    viewCabInvoices:1,
    addCabInvoices:1,
    downloadCabInvoices:1,
    emailCabInvoices:1,
    cancelCabInvoices:1,
    exportCabInvoices:1,


    manageHotelInvoices:1,
    viewHotelInvoices:1,
    addHotelInvoices:1,
    downloadHotelInvoices:1,
    emailHotelInvoices:1,
    cancelHotelInvoices:1,
    exportHotelInvoices:1,

    manageFlightInvoices:1,
    viewFlightInvoices:1,
    addFlightInvoices:1,
    downloadFlightInvoices:1,
    emailFlightInvoices:1,
    cancelFlightInvoices:1,
    exportFlightInvoices:1,

    manageVisaInvoices:1,
    viewVisaInvoices:1,
    addVisaInvoices:1,
    downloadVisaInvoices:1,
    emailVisaInvoices:1,
    cancelVisaInvoices:1,
    exportVisaInvoices:1,

    viewInvoices:1,

    viewReceipts:1,

    manageCabReceipts:1,
    viewCabReceipts:1,
    requestCabReceipts:1,
    cancelCabReceipts:1,
    exportCabReceipts:1,
    
    manageFlightReceipts:1,
    viewFlightReceipts:1,
    requestFlightReceipts:1,
    cancelFlightReceipts:1,
    exportFlightReceipts:1,

    addCabReceipts:1,
    addFlightReceipts:1,
    addHotelReceipts:1,
    addVisaReceipts:1,

    manageHotelReceipts:1,
    viewHotelReceipts:1,
    requestHotelReceipts:1,
    cancelHotelReceipts:1,
    exportHotelReceipts:1,

    manageVisaReceipts:1,
    viewVisaReceipts:1,
    requestVisaReceipts:1,
    cancelVisaReceipts:1,
    exportVisaReceipts:1,

    managePurchasesInvoices:1,
    viewPurchasesInvoices:1,
    addPurchasesInvoices:1,

    cancelPurchases:1,
    exportPurchases:1,

    managePurchasesDuties:1,
    addPurchasesDuties:1,
    viewPurchasesDuties:1,
    generatePurchaseDuties:1,
    requestDutySlip:1,
    requestInvoice:1,


    managePurchasePayments:1,
    viewPurchasesPayments:1,
    addPurchasesPayments:1,
    cancelPurchasesPayments:1,

    managePettyCash:1,
    addPettyCash:1,
    viewPettyCash:1,
    manageVehicleFuel:1,
    addVehicleFuel:1,
    viewVehicleFuel:1,
    manageDrivers:1,
    addDrivers:1,
    viewDriver:1, 

    manageDriverInfo:1,
    manageDriverUsers:1,
    manageSupporters:1,
    viewDutySupporters:1,
    viewBasicDutySupporters:1,
    addVehicles:1,
    manageVehicles:1,
    viewVehicles:1,
    viewBasicVehicles:1,
    addVehicleGroup:1,
    manageVehicleGroup:1,
    viewVehicleGroup:1,
    addCustomerGroup:1,
    manageCustomerGroup:1,
    viewCustomerGroup:1,
    manageCustomer:1,
    addCustomer:1,
    viewCustomer:1,
    managePricing:1,
    viewPricing:1,

    manageSupplierGroup:1, //there is none
    viewSupplierGroup:1,
    addSupplierGroup:1,

    manageSuppliers:1,
    viewSuppliers:1,
    addSupplier:1,

    manageDutyType:1,
    addDutyType:1,
    viewDutyType:1,
    manageTaxes:1,
    viewTaxes:1,
    addTaxes:1,

    manageBranches:1,
    viewBranches:1,
    addBranches:1,

    manageBillingItems:1,
    viewBillingItems:1,
    addBillingItems:1,

    manageBankAccounts:1,
    viewBankAccounts:1,
    addBankAccounts:1,

    manageSisterCompanies:1,
    viewSisterCompanies:1,
    viewLabels:1,
    addLabels:1,
    manageLabels:1,
    manageExportProfiles:1,
    viewExportProfiles:1,
    manageEmployees:1,
    addEmployees:1,
    viewEmployees:1,
    userId:'',

    manageFlights:1,
    viewFlights:1,
    addFlights:1,
    manageVisa:1,
    viewVisa:1,
    addVisa:1,
    
    manageHotels:1,
    viewHotels:1,
    addHotels:1,
    manageHotelsBookings:1,
    viewHotelsBookings:1,
    addHotelsBookings:1,

    addRecurringBookedBy:1,
    viewRecurringBookedBy:1,
    manageRecurringBookedBy:1,

    addRecurringPassenger:1,
    viewRecurringPassenger:1,
    manageRecurringPassenger:1,

    addVehicleBreakDowns:1,
    viewVehicleBreakDowns:1,
    manageVehicleBreakDowns:1,

    addVehicleMaintenance:1,
    viewVehicleMaintenance:1,
    manageVehicleMaintenance:1,

    viewTracking:1,

    viewIncomingDutyRequests:1,
    acceptDeclineDutyRequests:1,

    viewIncomingCircleRequests:1,
    acceptDeclineCircleRequests:1,

    viewCircle:1,
    addToCircle:1,
    manageCircle:1,

    addUsers:1,
    viewUsers:1,
    manageUsers:1,
    
    addOfficeExpenses:1,
    manageOfficeExpenses:1,
    viewOfficeExpenses:1,

    viewSms:1,

    viewBusinessSetting:1,
    editBusinessSetting:1,

    smsEmailCallBookings:1,
    smsEmailCallDuties:1,
    smsEmailCallFlights:1,
    smsEmailCallVisa:1,
    smsEmailCallHotels:1
}

companyProfile: CompanyProfile = {  
    name: '',
    phone: '',
    email: '',    
    ownerId: '',
}
}
