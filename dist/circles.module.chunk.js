webpackJsonp(["circles.module"],{

/***/ "./src/app/pages/circles/businesssetting/businesssetting.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div col=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Portal Setting\n      </nb-card-header>\n      <nb-card-body>\n        <mat-tab-group>\n          <mat-tab label=\"Duties/Bookings\">\n            <div class=\"container\">\n              <nb-card>\n                <nb-card-body>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.AllowBookingsToBeAddedWithoutAnyPricing\">\n                    Allow Bookings to be added without any pricing\n                  </mat-checkbox>\n                  <br>\n                  <!-- <mat-checkbox [(ngModel)]=\"businessSettings.AutoSendAllotmentNotificationToDriverApp\">\n                    Auto send allotment notification to driver app\n                  </mat-checkbox>\n                  <br>-->\n                  <mat-checkbox [(ngModel)]=\"businessSettings.UseBookingsIDInSMS\">\n                    Use Bookings Id in SMS\n                  </mat-checkbox>                  \n                  <br>\n                  <mat-form-field style=\"width: 200px;\">\n                    Default Start from Garage\n                    <input matInput [(ngModel)]=\"businessSettings.DefaultStartFromGarage\">\n                  </mat-form-field>\n                  <br>\n                  <!-- <mat-form-field>\n                    Printed duty slip's info section font size in px (min: 10, max: 20)\n                    <input type=\"number\" matInput>\n                  </mat-form-field> -->\n                </nb-card-body>\n              </nb-card>\n              <nb-card>\n                <nb-card-header>\n                  Duties Listing - Columns to be displayed\n                </nb-card-header>\n                <nb-card-body>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowGarageStartTimeInsteadOfReportingTime\">\n                    Show garage start time instead of reporting time\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowFromCity\">\n                    Show from city\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowDropAddress\">\n                    Show drop address\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowRemarks\">\n                    Show remarks\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowVehicleGroup\">\n                    Show vehicle group\n                  </mat-checkbox>\n                  <br>\n                  <!-- <mat-checkbox [(ngModel)]=\"businessSettings.ShowLabels\">\n                    Show labels\n                  </mat-checkbox>\n                  <br> -->\n                </nb-card-body>\n              </nb-card>\n              <br>\n              <nb-card>\n                <nb-card-header>\n                  Default options for duty slip printing\n                </nb-card-header>\n                <nb-card-body>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.AddCustomerName\">\n                    Add customer name\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.AddBookedByName\">\n                    Add booked by name\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.AddAllPassengerNamesAndNumbers\">\n                    Add all passenger names and numbers\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.HideVehicleName\">\n                    Hide vehicle name\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.HideRemarks\">\n                    Hide remarks\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.AddGarageStartTime\">\n                    Add garage start time\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.AddReleasedKmTimeSection\">\n                    Add released km/time section\n                  </mat-checkbox>\n                  <!-- <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.AddEntireBookingDateRange\">\n                    Add entire booking date range\n                  </mat-checkbox> -->\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.AddPrintedByInformationToFooter\">\n                    Add printed by information to footer (with date/time)\n                  </mat-checkbox>\n                  <!-- <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.AlwaysUseFullPageDesign\">\n                    Always use full page design\n                  </mat-checkbox> -->\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.HideBusinessLetterHead\">\n                    Hide business letter head\n                  </mat-checkbox>\n                  <br>\n                </nb-card-body>\n              </nb-card>\n              <!-- <br> -->\n              <!-- <nb-card> -->\n                <!-- <nb-card-body> -->\n                  <!-- <mat-checkbox [(ngModel)]=\"businessSettings.HideCustomerNameForDriverSupplierInMobileApp\">\n                    Hide customer name for driver/supplier in mobile app\n                  </mat-checkbox> -->\n                <!-- </nb-card-body> -->\n              <!-- </nb-card> -->\n              <!-- <div>\n                <button mat-raised-button (click)=\"saveDutiesBookings()\" color=\"primary\">Save</button>\n                <button mat-raised-button color=\"warn\">Cancel</button>\n              </div> -->\n            </div>\n          </mat-tab>\n          <mat-tab label=\"Billing\">\n            <div class=\"container\">\n              <nb-card>\n                <nb-card-body>\n                  <mat-form-field>\n                    Invoice dates & numbering\n                    <mat-select [(ngModel)]=\"businessSettings.invoiceDatesAndNumbering\" (selectionChange)=\"selectInvoiceDatesAndNumbering($event.value)\">\n                      <mat-option value=\"Automatic\">\n                        Automatic\n                      </mat-option>\n                      <mat-option value=\"Manual\">\n                        Manual\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <!-- <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.RoundOffExtraTimeOfEveryDutyWhileDisplayingOnInvoice\">\n                    Round off extra time of every duty while displaying on invoice\n                  </mat-checkbox> -->\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPerKilometerRateOnInvoiceForDayKMDuties\">\n                    Show per kilometer rate on invoice for day km duties\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.HideVehicleNumberFromInvoice\">\n                    Hide Vehicle Number from Invoice\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowDutySummaryAtTheTopOfTheInvoiceAlways\">\n                    Show duty summary at the top of the invoice always\n                  </mat-checkbox>\n                  <br>\n                  <mat-hint>\n                    Note: Please keep duty summary columns count to minimum, else duty summary table in print/pdf/email might break.\n                  </mat-hint>\n                </nb-card-body>\n              </nb-card>          \n              <br>\n              <nb-card>\n                <nb-card-header>\n                  Invoice duty summary columns\n                </nb-card-header>\n                <nb-card-body>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowDutyId\">\n                    Show duty id\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowDutyType\">\n                    Show duty type\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowBookedByName\">\n                    Show booked by name\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPassengerNames\">\n                    Show passenger names\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowVehicleGroupName\">\n                    Show vehicle group name\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowVehicleNumber\">\n                    Show vehicle number\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowStartDate\">\n                    Show start date\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowEndDate\">\n                    Show end date\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowStartTime\">\n                    Show start time\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowEndTime\">\n                    Show end time\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowExtraHour\">\n                    Show extra hour\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowTotalHour\">\n                    Show total hour\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowStartKM\">\n                    Show start km\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowEndKM\">\n                    Show end km\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowExtraKM\">\n                    Show extra km\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowTotalKM\">\n                    Show total km\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowExtraHourRate\">\n                    Show extra hour rate\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowExtraKMRate\">\n                    Show extra km rate\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowExtraHourCost\">\n                    Show extra hour cost\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowExtraKMCost\">\n                    Show extra km cost\n                  </mat-checkbox>\n                  <br>\n                  <!-- <mat-checkbox [(ngModel)]=\"businessSettings.ShowConsolidatedBillingItems\">\n                    Show consolidated billing items\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowSeparatedBillingItems\">\n                    Show separated billing items\n                  </mat-checkbox>\n                  <br> -->\n                  <!-- <mat-checkbox [(ngModel)]=\"businessSettings.ShowAllowances\">\n                    Show allowances\n                  </mat-checkbox>\n                  <br> -->\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPrice\">\n                    Show price\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowQuantityNumberOfDays\">\n                    Show quantity - Number of days\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowTotalPrice\">\n                    Show total price\n                  </mat-checkbox>\n                  <br>\n                  <!-- <mat-checkbox [(ngModel)]=\"businessSettings.ShowCarHireCharges\">\n                    Show car hire charges\n                  </mat-checkbox>\n                  <br> -->\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowDutySubtotal\">\n                    Show duty subtotal\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowDutySubtotalIncludingAllowances\">\n                    Show duty subtotal - including allowances\n                  </mat-checkbox>\n                  <br>\n                </nb-card-body>\n              </nb-card>\n              <!-- <div>\n                <button mat-raised-button (click)=\"saveBilling()\" color=\"primary\">Save</button>\n                <button mat-raised-button color=\"warn\">Cancel</button>\n              </div> -->\n            </div>            \n          </mat-tab>\n          <mat-tab label=\"Purchase\">\n            <div class=\"container\">\n              <nb-card>\n                <nb-card-header>\n                  Purchase duty summary columns\n                </nb-card-header>\n                <nb-card-body>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseDutyID\">\n                    Show duty id\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseDutyType\">\n                    Show duty type\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseBookedByName\">\n                    Show booked by name\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchasePassengerNames\">\n                    Show passenger names\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseVehicleGroupName\">\n                    Show vehicle group name\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseVehicleNumber\">\n                    Show vehicle number\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseStartDate\">\n                    Show start date\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseEndDate\">\n                    Show end date\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseStartTime\">\n                    Show start time\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseEndTime\">\n                    Show end time\n                  </mat-checkbox>\n                  <br>\n                  <!-- <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseExtraHour\">\n                    Show extra hour\n                  </mat-checkbox>\n                  <br> -->\n                  <!-- <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseTotalHours\">\n                    Show total hours\n                  </mat-checkbox>\n                  <br> -->\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseStartKM\">\n                    Show start km\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseEndKM\">\n                    Show end km\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseExtraKM\">\n                    Show extra km\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseTotalKm\">\n                    Show total km\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseExtraHourRate\">\n                    Show extra hour rate\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseExtraKMRate\">\n                    Show extra km rate\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseExtraHourCost\">\n                    Show extra hour cost\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseExtraKMCost\">\n                    Show extra km cost\n                  </mat-checkbox>\n                  <br>\n                  <!-- <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseConsolidatedBillingItems\">\n                    Show consolidated billing items\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseSeparatedBillingItems\">\n                    Show separated billing items\n                  </mat-checkbox>\n                  <br> -->\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseAllowances\">\n                    Show allowances\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchasePrice\">\n                    Show price\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowPurchaseDutySubtotal\">\n                    Show duty subtotal\n                  </mat-checkbox>\n                  <br>\n                  <!-- <mat-checkbox [(ngModel)]=\"businessSettings.ShowCustomerCarHireCharges\">\n                    Show customer car hire charges\n                  </mat-checkbox>\n                  <br> -->\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowCustomerCarHireChargesIncludingAllowances\">\n                    Show customer car hire charges - including allowances\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowCustomerDutySubtotal\">\n                    Show customer duty subtotal\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.ShowCustomerDutySubtotalIncludingAllowances\">\n                    Show customer duty subtotal - including allowances\n                  </mat-checkbox>\n                  <br>\n                </nb-card-body>\n              </nb-card>\n              <!-- <div>\n                <button mat-raised-button (click)=\"savePurchase()\" color=\"primary\">Save</button>\n                <button mat-raised-button color=\"warn\">Cancel</button>\n              </div> -->\n            </div>\n          </mat-tab>\n          <mat-tab label=\"Driver Allowance\">\n            <div class=\"container\">\n              <div class=\"row\" style=\"padding:15px\">\n                <form [formGroup]=\"driverAllowanceForm\" class=\"w-100\">\n                  <div formArrayName=\"rows\">\n                    <div class=\"row ptb-10\" *ngFor=\"let aRow of driverAllowancesForms.controls; let i=index\" [formGroupName]=\"i\">\n                      <div class=\"col-lg-11 col-11\">\n                        <nb-card>\n                          <nb-card-header>\n                            Driver Allowance\n                          </nb-card-header>\n                          <nb-card-body>\n                            <mat-form-field>\n                              Select Allowance Type\n                              <mat-select formControlName=\"allowanceType\">\n                                <mat-option value=\"Over time per hour\">\n                                  Over time per hour\n                                </mat-option>\n                                <mat-option value=\"Outstation Allowance\">\n                                  Outstation Allowance\n                                </mat-option>\n                                <mat-option value=\"Outstation Overnight Allowance\">\n                                  Outstation Overnight Allowance\n                                </mat-option>\n                                <mat-option value=\"Sunday Allowance\">\n                                  Sunday Allowance\n                                </mat-option>\n                                <mat-option value=\"Early Start Allowance\">\n                                  Early Start Allowance\n                                </mat-option>\n                                <mat-option value=\"Night Allowance\">\n                                  Night Allowance\n                                </mat-option>\n                                <mat-option value=\"Extra Duty Allowance\">\n                                  Extra Duty Allowance\n                                </mat-option>\n                                <mat-option value=\"Driver Daily Allowance\">\n                                  Driver Daily Allowance\n                                </mat-option>\n                              </mat-select>\n                            </mat-form-field>\n                            <br>\n                            <mat-checkbox formControlName=\"chargedToCustomer\">\n                              Charged to Customer\n                            </mat-checkbox>\n                            <br>\n                            <mat-form-field>\n                              Amount\n                              <input type=\"number\" matInput formControlName=\"amount\">\n                            </mat-form-field>\n                            <!-- <mat-form-field>\n                              Night Allowance Start Time\n                              <input type=\"time\" matInput formControlName=\"nightAllowanceStartTime\">\n                            </mat-form-field> -->\n                          </nb-card-body>\n                        </nb-card>\n                      </div>\n                      <div class=\"col-lg-1 col-1\">\n                        <button mat-icon-button color=\"primary\" (click)=\"deleteDriverAllowance(i, aRow)\"> <mat-icon>clear</mat-icon></button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n                <div class=\"row pb-10\">\n                  <div class=\"col-lg-12 col-12\">\n                    <button mat-fab color=\"primary\" (click)=\"addDriverAllowance()\" style=\"float:right; margin: 5px;\"><mat-icon>add</mat-icon></button>\n                  </div>                \n                </div>\n              </div>\n              <!-- <div>\n                <button mat-raised-button (click)=\"saveDriverAllowance()\" color=\"primary\">Save</button>\n                <button mat-raised-button color=\"warn\">Cancel</button>\n              </div> -->\n            </div>            \n          </mat-tab>\n          <mat-tab label=\"Notification\">\n            <div class=\"container\">\n              <nb-card>\n                <nb-card-header>\n                  SMS\n                </nb-card-header>\n                <nb-card-body>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.SMSEnabled\">\n                    Enabled\n                  </mat-checkbox>\n                  <br>\n                  <mat-hint>\n                    Note: SMSes received would be chargeable and would be added to your monthly invoice.\n                  </mat-hint>\n                  <br>\n                  <nb-card *ngIf=\"businessSettings.SMSEnabled\">\n                    <nb-card-header>\n                      Phone Numbers\n                    </nb-card-header>\n                    <nb-card-body>\n                      <div class=\"row\" style=\"padding:15px\">\n                        <form [formGroup]=\"SMSPhoneNumbersForm\" class=\"w-100\">\n                          <div formArrayName=\"rows\">\n                            <div class=\"row ptb-10\" *ngFor=\"let aRow of SMSPhoneNumbersForms.controls; let i=index\" [formGroupName]=\"i\">\n                              <div class=\"col-lg-11 col-11\">                              \n                                <mat-form-field>                                    \n                                  <input type=\"number\" matInput formControlName=\"phoneNumber\">\n                                </mat-form-field>                              \n                              </div>\n                              <div class=\"col-lg-1 col-1\">\n                                <button mat-icon-button color=\"primary\" (click)=\"deleteSMSPhoneNumber(i, aRow)\"> <mat-icon>clear</mat-icon></button>\n                              </div>                    \n                            </div>                    \n                          </div>\n                        </form>                 \n                        <div class=\"row pb-10\">\n                          <div class=\"col-lg-12 col-12\">\n                            <button mat-fab color=\"primary\" (click)=\"addSMSPhoneNumber()\" style=\"float:right; margin: 5px;\"><mat-icon>add</mat-icon></button>\n                          </div>                \n                        </div>\n                      </div>\n                    </nb-card-body>\n                  </nb-card>\n                </nb-card-body>\n              </nb-card>\n              <br>\n              <nb-card>\n                <nb-card-header>\n                  Email\n                </nb-card-header>\n                <nb-card-body>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.EmailEnabled\">\n                    Enabled\n                  </mat-checkbox>\n                  <br>                \n                  <nb-card *ngIf=\"businessSettings.EmailEnabled\">\n                    <nb-card-header>\n                      Email Address\n                    </nb-card-header>\n                    <nb-card-body>\n                      <div class=\"row\" style=\"padding:15px\">\n                        <form [formGroup]=\"EmailAddressForm\" class=\"w-100\">\n                          <div formArrayName=\"rows\">\n                            <div class=\"row ptb-10\" *ngFor=\"let aRow of EmailAddressForms.controls; let i=index\" [formGroupName]=\"i\">\n                              <div class=\"col-lg-11 col-11\">                              \n                                <mat-form-field>                                    \n                                  <input type=\"email\" matInput formControlName=\"emailAddress\">\n                                </mat-form-field>                              \n                              </div>\n                              <div class=\"col-lg-1 col-1\">\n                                <button mat-icon-button color=\"primary\" (click)=\"deleteEmailAddress(i, aRow)\"> <mat-icon>clear</mat-icon></button>\n                              </div>                    \n                            </div>                    \n                          </div>\n                        </form>                 \n                        <div class=\"row pb-10\">\n                          <div class=\"col-lg-12 col-12\">\n                            <button mat-fab color=\"primary\" (click)=\"addEmailAddress()\" style=\"float:right; margin: 5px;\"><mat-icon>add</mat-icon></button>\n                          </div>                \n                        </div>\n                      </div>\n                    </nb-card-body>\n                  </nb-card>\n                </nb-card-body>\n              </nb-card>\n              <!-- <div>\n                <button mat-raised-button (click)=\"saveNotification()\" color=\"primary\">Save</button>\n                <button mat-raised-button color=\"warn\">Cancel</button>\n              </div> -->\n            </div>            \n          </mat-tab>\n          <mat-tab label=\"Email Templates\">\n            <div class=\"container\">              \n              <nb-card>\n                <nb-card-header>\n                  Booking Confirmation\n                </nb-card-header>\n                <nb-card-body>                  \n                  Header\n                  <quill-editor [(ngModel)]=\"businessSettings.bookingConfirmationHeader\"></quill-editor>\n                  <br>                  \n                  Footer\n                  <quill-editor [(ngModel)]=\"businessSettings.bookingConfirmationFooter\"></quill-editor>\n                </nb-card-body>\n              </nb-card>\n              <br>\n              <nb-card>\n                <nb-card-header>\n                  Duty Allotment - To Customer\n                </nb-card-header>\n                <nb-card-body>\n                  Header\n                  <quill-editor [(ngModel)]=\"businessSettings.dutyAllotmentToCustomerHeader\"></quill-editor>\n                  <br>\n                  Footer\n                  <quill-editor [(ngModel)]=\"businessSettings.dutyAllotmentToCustomerFooter\"></quill-editor>\n                </nb-card-body>\n              </nb-card>\n              <br>\n              <nb-card>\n                <nb-card-header>\n                  Duty Allotment - To Supplier\n                </nb-card-header>\n                <nb-card-body>\n                  Header\n                  <quill-editor [(ngModel)]=\"businessSettings.dutyAllotmentToSupplierHeader\"></quill-editor>\n                  <br>\n                  Footer\n                  <quill-editor [(ngModel)]=\"businessSettings.dutyAllotmentToSupplierFooter\"></quill-editor>\n                </nb-card-body>\n              </nb-card>\n              <br>\n              <!-- <nb-card>\n                <nb-card-header>\n                  Duty/Booking Cancellation\n                </nb-card-header>\n                <nb-card-body>\n                  Header\n                  <quill-editor [(ngModel)]=\"businessSettings.dutyBookingCancellationHeader\"></quill-editor>\n                  <br>\n                  Footer\n                  <quill-editor [(ngModel)]=\"businessSettings.dutyBookingCancellationFooter\"></quill-editor>\n                </nb-card-body>\n              </nb-card>\n              <br>\n              <nb-card>\n                <nb-card-header>\n                  Invoice To Customer\n                </nb-card-header>\n                <nb-card-body>\n                  Header\n                  <quill-editor [(ngModel)]=\"businessSettings.invoiceToCustomerHeader\"></quill-editor>\n                  <br>\n                  Footer\n                  <quill-editor [(ngModel)]=\"businessSettings.invoiceToCustomerFooter\"></quill-editor>\n                </nb-card-body>\n              </nb-card>\n              <br>\n              <nb-card>\n                <nb-card-header>\n                  Payment Request\n                </nb-card-header>\n                <nb-card-body>\n                  Header\n                  <quill-editor [(ngModel)]=\"businessSettings.paymentRequestHeader\"></quill-editor>\n                  <br>\n                  Footer\n                  <quill-editor [(ngModel)]=\"businessSettings.paymentRequestFooter\"></quill-editor>\n                </nb-card-body>\n              </nb-card> -->\n              <!-- <div>\n                <button mat-raised-button (click)=\"saveEmailTemplates()\" color=\"primary\">Save</button>\n                <button mat-raised-button color=\"warn\">Cancel</button>\n              </div> -->\n            </div>            \n          </mat-tab>\n          <mat-tab label=\"Hotel\">\n            <div class=\"container\">\n              <nb-card>\n                <nb-card-body>\n                  <mat-form-field class=\"w-100\">\n                    Default Terms & Conditions\n                    <textarea matInput rows=\"12\" [(ngModel)]=\"businessSettings.defaultTermsAndConditions\"></textarea>\n                  </mat-form-field>\n                </nb-card-body>\n              </nb-card>\n              </div>\n          </mat-tab>\n          <mat-tab label=\"Others\">\n            <div class=\"container\">\n              <nb-card>\n                <nb-card-body>\n                  <mat-form-field>\n                    Default Customer\n                    <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput [matAutocomplete]=\"custauto\">\n                    <mat-autocomplete #custauto=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of customer |async\" [value]=\"option.name\" (onSelectionChange)=\"setCustomer(option,$event)\">\n                        {{ option.name }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                  <br>\n                  <mat-form-field>\n                    Select Dispatch Center\n                    <mat-select [(ngModel)]=\"businessSettings.dispatchCenter\">\n                      <mat-option *ngFor=\"let element of dispatchCenters\" [value]=\"element.name\" (onSelectionChange)=\"setDispatchCenter($event.value)\">\n                        {{element.name}}\n                      </mat-option>                      \n                    </mat-select>\n                  </mat-form-field>\n                  <br>\n                  <mat-form-field>\n                    Default City\n                    <input matInput [formControl]=\"cityCtrl\"  [matAutocomplete]=\"autoCity\">\n                    <mat-autocomplete #autoCity=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of cities | async\" [value]=\"option\" (onSelectionChange)=\"setCity(option,$event)\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </nb-card-body>\n              </nb-card>              \n              <nb-card>\n                <nb-card-header>\n                  Auto CC emails\n                </nb-card-header>\n                <nb-card-body>\n                  <mat-form-field>\n                    Enter an email ID\n                    <input type=\"email\" matInput [(ngModel)]=\"businessSettings.AutoCCEmail\">\n                  </mat-form-field>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.CCAllConfirmationAndCancellationEmails\">\n                    CC all confirmation & cancellation emails\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.CCAllAllotmentEmails\">\n                    CC all allotment emails\n                  </mat-checkbox>\n                  <br>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.CCAllInvoiceEmails\">\n                    CC all invoice emails\n                  </mat-checkbox>\n                </nb-card-body>\n              </nb-card>\n              <br>\n              <nb-card>\n                <nb-card-body>\n                  <mat-form-field>\n                    SMS Mask\n                    <input type=\"text\" matInput [(ngModel)]=\"businessSettings.SMSMask\" readonly>\n                  </mat-form-field>\n                </nb-card-body>\n              </nb-card>              \n              <br>\n              <nb-card>\n                <nb-card-header>\n                  Network Options\n                </nb-card-header>\n                <nb-card-body>\n                  <mat-checkbox [(ngModel)]=\"businessSettings.AutoAcceptIncomingDutySlip\">\n                    Auto accept incoming duty slip\n                  </mat-checkbox>\n                </nb-card-body>\n              </nb-card>\n              <nb-card>\n                <nb-card-header>\n                  Tracking\n                </nb-card-header>\n                <nb-card-body>\n                  <mat-form-field>\n                    Select Provider\n                    <mat-select [(ngModel)]=\"businessSettings.trackingProvider\" (selectionChange)=\"selectProvider($event.value)\">\n                      <mat-option value=\"Aditi Tracking\">\n                        Aditi Tracking\n                      </mat-option>                      \n                    </mat-select>\n                  </mat-form-field>\n                  <br>\n                  <mat-form-field>\n                    Tracking Username\n                    <input type=\"text\" matInput [(ngModel)]=\"businessSettings.trackingUsername\">\n                  </mat-form-field>\n                  <br>\n                  <mat-form-field>\n                    Tracking Password\n                    <input type=\"password\" matInput [(ngModel)]=\"businessSettings.trackingPassword\">\n                  </mat-form-field>\n                </nb-card-body>\n              </nb-card>\n              <!-- <div>\n                <button mat-raised-button (click)=\"saveOthers()\" color=\"primary\">Save</button>\n                <button mat-raised-button color=\"warn\">Cancel</button>\n              </div> -->\n            </div>\n          </mat-tab>\n        </mat-tab-group>        \n      </nb-card-body>\n    </nb-card>    \n  </div>\n  <div>\n    <button *ngIf=\"!editState\" mat-raised-button (click)=\"saveBusinessSettings()\" color=\"primary\">Save</button>\n    <button *ngIf=\"editState\" mat-raised-button (click)=\"updateBusinessSettings()\" color=\"primary\">Save</button>\n    <!-- <button mat-raised-button color=\"warn\">Cancel</button> -->\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/circles/businesssetting/businesssetting.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-tab-body {\n  z-index: -999 !important; }\n"

/***/ }),

/***/ "./src/app/pages/circles/businesssetting/businesssetting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinesssettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businesssetting_service__ = __webpack_require__("./src/app/pages/circles/businesssetting/businesssetting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__operations_new_branch_new_branch_service__ = __webpack_require__("./src/app/pages/operations/new-branch/new-branch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BusinesssettingComponent = (function () {
    function BusinesssettingComponent(fb, businessSettingService, auth, customerService, router, branchService, snackBar) {
        this.fb = fb;
        this.businessSettingService = businessSettingService;
        this.auth = auth;
        this.customerService = customerService;
        this.router = router;
        this.branchService = branchService;
        this.snackBar = snackBar;
        this.editState = false;
        this.businessSettings = {
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
            defaultCity: '',
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
            defaultTermsAndConditions: '',
        };
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.cityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.city = [
            '',
            'Achalpur',
            'Achhnera',
            'Adalaj',
            'Adilabad',
            'Adityapur',
            'Adoni',
            'Adoor',
            'Adra',
            'Adyar',
            'Afzalpur',
            'Agartala',
            'Agra',
            'Ahmedabad',
            'Ahmednagar',
            'Aizawl',
            'Ajmer',
            'Akola',
            'Akot',
            'Alappuzha',
            'Aligarh',
            'Alipurduar',
            'Alirajpur',
            'Allahabad',
            'Alwar',
            'Amalapuram',
            'Amalner',
            'Ambejogai',
            'Ambikapur',
            'Amravati',
            'Amreli',
            'Amritsar',
            'Amroha',
            'Anakapalle',
            'Anand',
            'Anantapur',
            'Anantnag',
            'Anjangaon',
            'Anjar',
            'Ankleshwar',
            'Arakkonam',
            'Arambagh',
            'Araria',
            'Arrah',
            'Arsikere',
            'Aruppukkottai',
            'Arvi',
            'Arwal',
            'Asansol',
            'Asarganj',
            'Ashok Nagar',
            'Athni',
            'Attingal',
            'Aurangabad',
            'Aurangabad',
            'Azamgarh',
            'Bagaha',
            'Bageshwar',
            'Bahadurgarh',
            'Baharampur',
            'Bahraich',
            'Balaghat',
            'Balangir',
            'Baleshwar Town',
            'Ballari',
            'Balurghat',
            'Bankura',
            'Bapatla',
            'Baramula',
            'Barbil',
            'Bargarh',
            'Barh',
            'Baripada Town',
            'Barmer',
            'Barnala',
            'Barpeta',
            'Batala',
            'Bathinda',
            'Begusarai',
            'Belagavi',
            'Bellampalle',
            'Belonia',
            'Bengaluru',
            'Bettiah',
            'BhabUrban',
            'Bhadrachalam',
            'Bhadrak',
            'Bhagalpur',
            'Bhainsa',
            'Bharatpur',
            'Bharuch',
            'Bhatapara',
            'Bhavnagar',
            'Bhawanipatna',
            'Bheemunipatnam',
            'Bhilai Nagar',
            'Bhilwara',
            'Bhimavaram',
            'Bhiwandi',
            'Bhiwani',
            'Bhongir',
            'Bhopal',
            'Bhubaneswar',
            'Bhuj',
            'Bikaner',
            'Bilaspur',
            'Bobbili',
            'Bodhan',
            'Bokaro Steel City',
            'Bongaigaon City',
            'Brahmapur',
            'Buxar',
            'Byasanagar',
            'Chaibasa',
            'Chalakudy',
            'Chandausi',
            'Chandigarh',
            'Changanassery',
            'Charkhi Dadri',
            'Chatra',
            'Chennai',
            'Cherthala',
            'Chhapra',
            'Chhapra',
            'Chikkamagaluru',
            'Chilakaluripet',
            'Chirala',
            'Chirkunda',
            'Chirmiri',
            'Chittoor',
            'Chittur-Thathamangalam',
            'Coimbatore',
            'Cuttack',
            'Dalli-Rajhara',
            'Darbhanga',
            'Darjiling',
            'Davanagere',
            'Deesa',
            'Dehradun',
            'Dehri-on-Sone',
            'Delhi',
            'Deoghar',
            'Dhamtari',
            'Dhanbad',
            'Dharmanagar',
            'Dharmavaram',
            'Dhenkanal',
            'Dhoraji',
            'Dhubri',
            'Dhule',
            'Dhuri',
            'Dibrugarh',
            'Dimapur',
            'Diphu',
            'Dumka',
            'Dumraon',
            'Durg',
            'Eluru',
            'English Bazar',
            'Erode',
            'Etawah',
            'Faridabad',
            'Faridkot',
            'Farooqnagar',
            'Fatehabad',
            'Fatehpur Sikri',
            'Fazilka',
            'Firozabad',
            'Firozpur',
            'Firozpur Cantt.',
            'Forbesganj',
            'Gadwal',
            'Gangarampur',
            'Ganjbasoda',
            'Gaya',
            'Giridih',
            'Goalpara',
            'Gobichettipalayam',
            'Gobindgarh',
            'Godhra',
            'Gohana',
            'Gokak',
            'Gooty',
            'Gopalganj',
            'Gudivada',
            'Gudur',
            'Gumia',
            'Guntakal',
            'Guntur',
            'Gurdaspur',
            'Gurgaon',
            'Guruvayoor',
            'Guwahati',
            'Gwalior',
            'Habra',
            'Hajipur',
            'Haldwani',
            'Hansi',
            'Hapur',
            'Hardoi ',
            'Hardwar',
            'Hazaribag',
            'Hindupur',
            'Hisar',
            'Hoshiarpur',
            'Hubli-Dharwad',
            'Hugli-Chinsurah',
            'Hyderabad',
            'Ichalkaranji',
            'Imphal',
            'Indore',
            'Itarsi',
            'Jabalpur',
            'Jagdalpur',
            'Jaggaiahpet',
            'Jagraon',
            'Jagtial',
            'Jaipur',
            'Jalandhar',
            'Jalandhar Cantt.',
            'Jalpaiguri',
            'Jamalpur',
            'Jammalamadugu',
            'Jammu',
            'Jamnagar',
            'Jamshedpur',
            'Jamui',
            'Jangaon',
            'Jatani',
            'Jehanabad',
            'Jhansi',
            'Jhargram',
            'Jharsuguda',
            'Jhumri Tilaiya',
            'Jind',
            'Jodhpur',
            'Jorhat',
            'Kadapa',
            'Kadi',
            'Kadiri',
            'Kagaznagar',
            'Kailasahar',
            'Kaithal',
            'Kakinada',
            'Kalimpong',
            'Kalpi',
            'Kalyan-Dombivali',
            'Kamareddy',
            'Kancheepuram',
            'Kandukur',
            'Kanhangad',
            'Kannur',
            'Kanpur',
            'Kapadvanj',
            'Kapurthala',
            'Karaikal',
            'Karimganj',
            'Karimnagar',
            'Karjat',
            'Karnal',
            'Karur',
            'Karwar',
            'Kasaragod',
            'Kashipur',
            'KathUrban',
            'Katihar',
            'Kavali',
            'Kayamkulam',
            'Kendrapara',
            'Kendujhar',
            'Keshod',
            'Khair',
            'Khambhat',
            'Khammam',
            'Khanna',
            'Kharagpur',
            'Kharar',
            'Khowai',
            'Kishanganj',
            'Kochi',
            'Kodungallur',
            'Kohima',
            'Kolar',
            'Kolkata',
            'Kollam',
            'Koratla',
            'Korba',
            'Kot Kapura',
            'Kothagudem',
            'Kottayam',
            'Kovvur',
            'Koyilandy',
            'Kozhikode',
            'Kunnamkulam',
            'Kurnool',
            'Kyathampalle',
            'Lachhmangarh',
            'Ladnu',
            'Ladwa',
            'Lahar',
            'Laharpur',
            'Lakheri',
            'Lakhimpur',
            'Lakhisarai',
            'Lakshmeshwar',
            'Lal Gopalganj Nindaura',
            'Lalganj',
            'Lalganj',
            'Lalgudi',
            'Lalitpur',
            'Lalsot',
            'Lanka',
            'Lar',
            'Lathi',
            'Latur',
            'Lilong',
            'Limbdi',
            'Lingsugur',
            'Loha',
            'Lohardaga',
            'Lonar',
            'Lonavla',
            'Longowal',
            'Loni',
            'Losal',
            'Lucknow',
            'Ludhiana',
            'Lumding',
            'Lunawada',
            'Lunglei',
            'Macherla',
            'Machilipatnam',
            'Madanapalle',
            'Maddur',
            'Madhepura',
            'Madhubani',
            'Madhugiri',
            'Madhupur',
            'Madikeri',
            'Madurai',
            'Magadi',
            'Mahad',
            'Mahalingapura',
            'Maharajganj',
            'Maharajpur',
            'Mahasamund',
            'Mahbubnagar',
            'Mahe',
            'Mahemdabad',
            'Mahendragarh',
            'Mahesana',
            'Mahidpur',
            'Mahnar Bazar',
            'Mahuva',
            'Maihar',
            'Mainaguri',
            'Makhdumpur',
            'Makrana',
            'Malaj Khand',
            'Malappuram',
            'Malavalli',
            'Malda',
            'Malegaon',
            'Malerkotla',
            'Malkangiri',
            'Malkapur',
            'Malout',
            'Malpura',
            'Malur',
            'Manachanallur',
            'Manasa',
            'Manavadar',
            'Manawar',
            'Mumbai',
            'Mundargi',
            'Mundi',
            'Mungeli',
            'Munger',
            'Murliganj',
            'Murshidabad',
            'Murtijapur',
            'Murwara (Katni)',
            'Musabani',
            'Mussoorie',
            'Muvattupuzha',
            'Muzaffarpur',
            'Mysore',
            'Nabadwip',
            'Nabarangapur',
            'Nabha',
            'Nadbai',
            'Nadiad',
            'Nagaon',
            'Nagapattinam',
            'Nagar',
            'Nagari',
            'Nagarkurnool',
            'Nagaur',
            'Nagda',
            'Nagercoil',
            'Nagina',
            'Nagla',
            'Nagpur',
            'Nahan',
            'Naharlagun',
            'Naidupet',
            'Naihati',
            'Naila Janjgir',
            'Nainital',
            'Nainpur',
            'Najibabad',
            'Nakodar',
            'Nakur',
            'Nalbari',
            'Namagiripettai',
            'Namakkal',
            'Nanded-Waghala',
            'Nandgaon',
            'Nandivaram-Guduvancheri',
            'Nandura',
            'Nandurbar',
            'Nandyal',
            'Nangal',
            'Nanjangud',
            'Nanjikottai',
            'Nanpara',
            'Narasapuram',
            'Narasaraopet',
            'Naraura',
            'Narayanpet',
            'Nargund',
            'Narkatiaganj',
            'Narkhed',
            'Narnaul',
            'Narsinghgarh',
            'Narsinghgarh',
            'Narsipatnam',
            'Narwana',
            'Nashik',
            'Nasirabad',
            'Natham',
            'Nathdwara',
            'Naugachhia',
            'Naugawan Sadat',
            'Nautanwa',
            'Navalgund',
            'Navsari',
            'Nawabganj',
            'Nawada',
            'Nawanshahr',
            'Nawapur',
            'Nedumangad',
            'Neem-Ka-Thana',
            'Neemuch',
            'Nehtaur',
            'Nelamangala',
            'Nellikuppam',
            'Nellore',
            'Nepanagar',
            'New Delhi',
            'Neyveli (TS)',
            'Neyyattinkara',
            'Nidadavole',
            'Nilambur',
            'Nilanga',
            'Nimbahera',
            'Nirmal',
            'Niwai',
            'Niwari',
            'Nizamabad',
            'Nohar',
            'Noida',
            'Nokha',
            'Nokha',
            'Nongstoin',
            'Noorpur',
            'North Lakhimpur',
            'Nowgong',
            'Nowrozabad (Khodargama)',
            'Nuzvid',
            'O Valley',
            'Obra',
            'Oddanchatram',
            'Ongole',
            'Orai',
            'Osmanabad',
            'Ottappalam',
            'Ozar',
            'P.N.Patti',
            'Pachora',
            'Pachore',
            'Pacode',
            'Padmanabhapuram',
            'Padra',
            'Padrauna',
            'Paithan',
            'Pakaur',
            'Palacole',
            'Palai',
            'Palakkad',
            'Palampur',
            'Palani',
            'Palanpur',
            'Palasa Kasibugga',
            'Palghar',
            'Pali',
            'Palia Kalan',
            'Palitana',
            'Palladam',
            'Pallapatti',
            'Pallikonda',
            'Palwal',
            'Palwancha',
            'Panagar',
            'Panagudi',
            'Panaji',
            'Panamattom',
            'Panchkula',
            'Panchla',
            'Pandharkaoda',
            'Pandharpur',
            'Pandhurna',
            'Panipat',
            'Panna',
            'Panniyannur',
            'Panruti',
            'Panvel',
            'Pappinisseri',
            'Paradip',
            'Paramakudi',
            'Parangipettai',
            'Parasi',
            'Paravoor',
            'Parbhani',
            'Pardi',
            'Parlakhemundi',
            'Parli',
            'Partur',
            'Parvathipuram',
            'Pasan',
            'Paschim Punropara',
            'Pasighat',
            'Patan',
            'Pathanamthitta',
            'Pathankot',
            'Pathardi',
            'Pathri',
            'Patiala',
            'Patna',
            'Patratu',
            'Pattamundai',
            'Patti',
            'Pattran',
            'Pattukkottai',
            'Patur',
            'Pauni',
            'Pauri',
            'Pavagada',
            'Pedana',
            'Peddapuram',
            'Pehowa',
            'Pen',
            'Perambalur',
            'Peravurani',
            'Peringathur',
            'Perinthalmanna',
            'Periyakulam',
            'Periyasemur',
            'Pernampattu',
            'Perumbavoor',
            'Petlad',
            'Phagwara',
            'Phalodi',
            'Phaltan',
            'Phillaur',
            'Phulabani',
            'Phulera',
            'Phulpur',
            'Phusro',
            'Pihani',
            'Pilani',
            'Pilibanga',
            'Pilibhit',
            'Pilkhuwa',
            'Pindwara',
            'Pinjore',
            'Pipar City',
            'Pipariya',
            'Piriyapatna',
            'Piro',
            'Pithampur',
            'Pithapuram',
            'Pithoragarh',
            'Pollachi',
            'Polur',
            'Pondicherry',
            'Ponnani',
            'Ponneri',
            'Ponnur',
            'Porbandar',
            'Porsa',
            'Port Blair',
            'Powayan',
            'Prantij',
            'Pratapgarh',
            'Pratapgarh',
            'Prithvipur',
            'Proddatur',
            'Pudukkottai',
            'Pudupattinam',
            'Pukhrayan',
            'Pulgaon',
            'Puliyankudi',
            'Punalur',
            'Punch',
            'Pune',
            'Punganur',
            'Punjaipugalur',
            'Puranpur',
            'Puri',
            'Purna',
            'Purnia',
            'PurqUrban Agglomerationzi',
            'Purulia',
            'Purwa',
            'Pusad',
            'Puthuppally',
            'Puttur',
            'Puttur',
            'Qadian',
            'Raayachuru',
            'Rabkavi Banhatti',
            'Radhanpur',
            'Rae Bareli',
            'Rafiganj',
            'Raghogarh-Vijaypur',
            'Raghunathganj',
            'Raghunathpur',
            'Rahatgarh',
            'Rahuri',
            'Raiganj',
            'Raigarh',
            'Raikot',
            'Raipur',
            'Rairangpur',
            'Raisen',
            'Raisinghnagar',
            'Rajagangapur',
            'Rajahmundry',
            'Rajakhera',
            'Rajaldesar',
            'Rajam',
            'Rajampet',
            'Rajapalayam',
            'Rajauri',
            'Rajgarh',
            'Rajgarh (Alwar)',
            'Rajgarh (Churu)',
            'Rajgir',
            'Rajkot',
            'Rajnandgaon',
            'Rajpipla',
            'Rajpura',
            'Rajsamand',
            'Rajula',
            'Rajura',
            'Ramachandrapuram',
            'Ramagundam',
            'Ramanagaram',
            'Ramanathapuram',
            'Ramdurg',
            'Rameshwaram',
            'Ramganj Mandi',
            'Ramgarh',
            'Ramnagar',
            'Ramngarh',
            'Rampur',
            'Rampur Maniharan',
            'Rampura Phul',
            'Rampurhat',
            'Ramtek',
            'Ranaghat',
            'Ranavav',
            'Ranchi',
            'Ranebennuru',
            'Rangia',
            'Rania',
            'Ranibennur',
            'Ranipet',
            'Rapar',
            'Rasipuram',
            'Rasra',
            'Ratangarh',
            'Rath',
            'Ratia',
            'Ratlam',
            'Ratnagiri',
            'Rau',
            'Raurkela',
            'Raver',
            'Rawatbhata',
            'Rawatsar',
            'Raxaul Bazar',
            'Rayachoti',
            'Rayadurg',
            'Rayagada',
            'Reengus',
            'Rehli',
            'Renigunta',
            'Renukoot',
            'Reoti',
            'Repalle',
            'Revelganj',
            'Rewa',
            'Rewari',
            'Rishikesh',
            'Risod',
            'Robertsganj',
            'Robertson Pet',
            'Rohtak',
            'Ron',
            'Roorkee',
            'Rosera',
            'Rudauli',
            'Rudrapur',
            'Rudrapur',
            'Rupnagar',
            'Sabalgarh',
            'Sadabad',
            'Sadalagi',
            'Sadasivpet',
            'Sadri',
            'Sadulpur',
            'Sadulshahar',
            'Safidon',
            'Safipur',
            'Sagar',
            'Sagara',
            'Sagwara',
            'Saharanpur',
            'Saharsa',
            'Sahaspur',
            'Sahaswan',
            'Sahawar',
            'Sahibganj',
            'Sahjanwa',
            'Saidpur',
            'Saiha',
            'Sailu',
            'Sainthia',
            'Sakaleshapura',
            'Sakti',
            'Salaya',
            'Salem',
            'Salur',
            'Samalkha',
            'Samalkot',
            'Samana',
            'Samastipur',
            'Sambalpur',
            'Sambhal',
            'Sambhar',
            'Samdhan',
            'Samthar',
            'Sanand',
            'Sanawad',
            'Sanchore',
            'Sandi',
            'Sandila',
            'Sanduru',
            'Sangamner',
            'Sangareddy',
            'Sangaria',
            'Sangli',
            'Sangole',
            'Sangrur',
            'Sankarankovil',
            'Sankari',
            'Sankeshwara',
            'Santipur',
            'Sarangpur',
            'Sardarshahar',
            'Sardhana',
            'Sarni',
            'Sarsod',
            'Sasaram',
            'Sasvad',
            'Satana',
            'Satara',
            'Sathyamangalam',
            'Satna',
            'Sattenapalle',
            'Sattur',
            'Saunda',
            'Saundatti-Yellamma',
            'Sausar',
            'Savanur',
            'Savarkundla',
            'Savner',
            'Sawai Madhopur',
            'Sawantwadi',
            'Sedam',
            'Sehore',
            'Sendhwa',
            'Seohara',
            'Seoni',
            'Seoni-Malwa',
            'Shahabad',
            'Shahabad, Hardoi',
            'Shahabad, Rampur',
            'Shahade',
            'Shahdol',
            'Shahganj',
            'Shahjahanpur',
            'Shahpur',
            'Shahpura',
            'Shajapur',
            'Shamgarh',
            'Shamli',
            'Shamsabad, Agra',
            'Shamsabad, Farrukhabad',
            'Shegaon',
            'Sheikhpura',
            'Shendurjana',
            'Shenkottai',
            'Sheoganj',
            'Sheohar',
            'Sheopur',
            'Sherghati',
            'Sherkot',
            'Shiggaon',
            'Shikaripur',
            'Shikarpur, Bulandshahr',
            'Shikohabad',
            'Shillong',
            'Shimla',
            'Shirdi',
            'Shirpur-Warwade',
            'Shirur',
            'Shishgarh',
            'Shivamogga',
            'Shivpuri',
            'Sholavandan',
            'Sholingur',
            'Shoranur',
            'Shrigonda',
            'Shrirampur',
            'Shrirangapattana',
            'Shujalpur',
            'Siana',
            'Sibsagar',
            'Siddipet',
            'Sidhi',
            'Sidhpur',
            'Sidlaghatta',
            'Sihor',
            'Sihora',
            'Sikanderpur',
            'Sikandra Rao',
            'Sikandrabad',
            'Sikar',
            'Silao',
            'Silapathar',
            'Silchar',
            'Siliguri',
            'Sillod',
            'Silvassa',
            'Simdega',
            'Sindagi',
            'Sindhagi',
            'Sindhnur',
            'Singrauli',
            'Sinnar',
            'Sira',
            'Sircilla',
            'Sirhind Fatehgarh Sahib',
            'Sirkali',
            'Sirohi',
            'Sironj',
            'Sirsa',
            'Sirsaganj',
            'Sirsi',
            'Siruguppa',
            'Sitamarhi',
            'Sitapur',
            'Sitarganj',
            'Sivaganga',
            'Sivagiri',
            'Sivakasi',
            'Siwan',
            'Sohagpur',
            'Sohna',
            'Sojat',
            'Solan',
            'Solapur',
            'Sonamukhi',
            'Sonepur',
            'Songadh',
            'Sonipat',
            'Sopore',
            'Soro',
            'Soron',
            'Soyagaon',
            'Sri Madhopur',
            'Srikakulam',
            'Srikalahasti',
            'Srinagar',
            'Srinagar',
            'Srinivaspur',
            'Srirampore',
            'Srivilliputhur',
            'Sugauli',
            'Sujangarh',
            'Sujanpur',
            'Sullurpeta',
            'Sultanganj',
            'Sultanpur',
            'Sumerpur',
            'Sumerpur',
            'Sunabeda',
            'Sunam',
            'Sundargarh',
            'Sundarnagar',
            'Supaul',
            'Surandai',
            'Surapura',
            'Surat',
            'Suratgarh',
            'SUrban Agglomerationr',
            'Suri',
            'Suriyampalayam',
            'Suryapet',
            'Tadepalligudem',
            'Tadpatri',
            'Takhatgarh',
            'Taki',
            'Talaja',
            'Talcher',
            'Talegaon Dabhade',
            'Talikota',
            'Taliparamba',
            'Talode',
            'Talwara',
            'Tamluk',
            'Tanda',
            'Tandur',
            'Tanuku',
            'Tarakeswar',
            'Tarana',
            'Taranagar',
            'Taraori',
            'Tarbha',
            'Tarikere',
            'Tarn Taran',
            'Tasgaon',
            'Tehri',
            'Tekkalakote',
            'Tenali',
            'Tenkasi',
            'Tenu dam-cum-Kathhara',
            'Terdal',
            'Tezpur',
            'Thakurdwara',
            'Thammampatti',
            'Thana Bhawan',
            'Thane',
            'Thanesar',
            'Thangadh',
            'Thanjavur',
            'Tharad',
            'Tharamangalam',
            'Tharangambadi',
            'Theni Allinagaram',
            'Thirumangalam',
            'Thirupuvanam',
            'Thiruthuraipoondi',
            'Thiruvalla',
            'Thiruvallur',
            'Thiruvananthapuram',
            'Thiruvarur',
            'Thodupuzha',
            'Thoubal',
            'Thrissur',
            'Thuraiyur',
            'Tikamgarh',
            'Tilda Newra',
            'Tilhar',
            'Tindivanam',
            'Tinsukia',
            'Tiptur',
            'Tirora',
            'Tiruchendur',
            'Tiruchengode',
            'Tiruchirappalli',
            'Tirukalukundram',
            'Tirukkoyilur',
            'Tirunelveli',
            'Tirupathur',
            'Tirupati',
            'Tiruppur',
            'Tirur',
            'Tiruttani',
            'Tiruvannamalai',
            'Tiruvethipuram',
            'Tiruvuru',
            'Tirwaganj',
            'Titlagarh',
            'Tittakudi',
            'Todabhim',
            'Todaraisingh',
            'Tohana',
            'Tonk',
            'Tuensang',
            'Tuljapur',
            'Tulsipur',
            'Tumkur',
            'Tumsar',
            'Tundla',
            'Tuni',
            'Tura',
            'Uchgaon',
            'Udaipur',
            'Udaipurwati',
            'Udgir',
            'Udhagamandalam',
            'Udhampur',
            'Udumalaipettai',
            'Udupi',
            'Ujhani',
            'Ujjain',
            'Umarga',
            'Umaria',
            'Umarkhed',
            'Umbergaon',
            'Umred',
            'Umreth',
            'Una',
            'Unjha',
            'Unnamalaikadai',
            'Unnao',
            'Upleta',
            'Uran',
            'Uran Islampur',
            'Uravakonda',
            'Urmar Tanda',
            'Usilampatti',
            'Uthamapalayam',
            'Uthiramerur',
            'Utraula',
            'Vadakkuvalliyur',
            'Vadalur',
            'Vadgaon Kasba',
            'Vadipatti',
            'Vadnagar',
            'Vadodara',
            'Vaijapur',
            'Vaikom',
            'Valparai',
            'Valsad',
            'Vandavasi',
            'Vaniyambadi',
            'Vapi',
            'Vapi',
            'Varanasi',
            'Varkala',
            'Vasai-Virar',
            'Vatakara',
            'Vedaranyam',
            'Vellakoil',
            'Vellore',
            'Venkatagiri',
            'Veraval',
            'Vidisha',
            'Vijainagar, Ajmer',
            'Vijapur',
            'Vijayapura',
            'Vijayawada',
            'Vijaypur',
            'Vikarabad',
            'Vikramasingapuram',
            'Viluppuram',
            'Vinukonda',
            'Viramgam',
            'Virudhachalam',
            'Virudhunagar',
            'Visakhapatnam',
            'Visnagar',
            'Viswanatham',
            'Vita',
            'Vizianagaram',
            'Vrindavan',
            'Vyara',
            'Wadgaon Road',
            'Wadhwan',
            'Wadi',
            'Wai',
            'Wanaparthy',
            'Wani',
            'Wankaner',
            'Wara Seoni',
            'Warangal',
            'Wardha',
            'Warhapur',
            'Warisaliganj',
            'Warora',
            'Warud',
            'Washim',
            'Wokha',
            'Yadgir',
            'Yamunanagar',
            'Yanam',
            'Yavatmal',
            'Yawal',
            'Yellandu',
            'Yemmiganur',
            'Yerraguntla',
            'Yevla',
            'Zaidpur',
            'Zamania',
            'Zira',
            'Zirakpur',
            'Zunheboto'
        ];
        this.deletedDriverAllowance = [];
        this.deletedSMSNumber = [];
        this.deletedEmailAddresses = [];
    }
    BusinesssettingComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    BusinesssettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            console.log(_this.user);
            _this.customerService.getCustomers(_this.user).subscribe(function (data) {
                _this.customers = data;
                _this.customer = _this.customerCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
            });
            _this.branchService.getBranches(_this.user).subscribe(function (data) {
                console.log(data);
                _this.dispatchCenters = data;
            });
            _this.businessSettingService.getBusinessSettings(_this.user).subscribe(function (data) {
                console.log(data);
                if (data.length != 0) {
                    _this.editState = true;
                    _this.businessSettings = data[0];
                    _this.customerCtrl.setValue(_this.businessSettings.defaultCustomer);
                    _this.cityCtrl.setValue(_this.businessSettings.defaultCity);
                    console.log(_this.businessSettings);
                    var temp = {
                        ownerId: _this.user.ownerId,
                        businessSettingsId: data[0].id,
                    };
                    _this.businessSettingService.getDriverAllowances(temp).subscribe(function (data) {
                        console.log(data);
                        data.forEach(function (element) {
                            var row = _this.fb.group({
                                id: element.id,
                                allowanceType: element.allowanceType,
                                chargedToCustomer: element.chargedToCustomer,
                                amount: element.amount,
                            });
                            _this.driverAllowancesForms.push(row);
                        });
                    });
                    if (_this.businessSettings.SMSEnabled == true) {
                        _this.businessSettingService.getSMSPhoneNumbers(temp).subscribe(function (data) {
                            console.log(data);
                            data.forEach(function (element) {
                                var row = _this.fb.group({
                                    id: element.id,
                                    phoneNumber: element.phoneNumber
                                });
                                _this.SMSPhoneNumbersForms.push(row);
                            });
                        });
                    }
                    if (_this.businessSettings.EmailEnabled == true) {
                        _this.businessSettingService.getEmailAddresses(temp).subscribe(function (data) {
                            console.log(data);
                            data.forEach(function (element) {
                                var row = _this.fb.group({
                                    id: element.id,
                                    emailAddress: element.emailAddress
                                });
                                _this.EmailAddressForms.push(row);
                            });
                        });
                    }
                }
                else {
                    _this.addDriverAllowance();
                }
            });
        });
        this.cities = this.cityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterCity(val); }));
        this.driverAllowanceForm = this.fb.group({
            rows: this.fb.array([])
        });
        this.SMSPhoneNumbersForm = this.fb.group({
            rows: this.fb.array([])
        });
        this.EmailAddressForm = this.fb.group({
            rows: this.fb.array([])
        });
    };
    BusinesssettingComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BusinesssettingComponent.prototype.filterCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    Object.defineProperty(BusinesssettingComponent.prototype, "driverAllowancesForms", {
        get: function () {
            return this.driverAllowanceForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    BusinesssettingComponent.prototype.addDriverAllowance = function () {
        var row = this.fb.group({
            allowanceType: [''],
            chargedToCustomer: [false],
            amount: [0]
        });
        this.driverAllowancesForms.push(row);
    };
    BusinesssettingComponent.prototype.deleteDriverAllowance = function (i, aRow) {
        this.driverAllowancesForms.removeAt(i);
        if (aRow.value.id != '') {
            this.deletedDriverAllowance.push(aRow.value);
        }
    };
    Object.defineProperty(BusinesssettingComponent.prototype, "SMSPhoneNumbersForms", {
        get: function () {
            return this.SMSPhoneNumbersForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    BusinesssettingComponent.prototype.addSMSPhoneNumber = function () {
        var row = this.fb.group({
            phoneNumber: [0]
        });
        this.SMSPhoneNumbersForms.push(row);
    };
    BusinesssettingComponent.prototype.deleteSMSPhoneNumber = function (i, aRow) {
        this.SMSPhoneNumbersForms.removeAt(i);
        if (aRow.value.id != '') {
            this.deletedSMSNumber.push(aRow.value);
        }
    };
    Object.defineProperty(BusinesssettingComponent.prototype, "EmailAddressForms", {
        get: function () {
            return this.EmailAddressForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    BusinesssettingComponent.prototype.addEmailAddress = function () {
        var row = this.fb.group({
            emailAddress: ['']
        });
        this.EmailAddressForms.push(row);
    };
    BusinesssettingComponent.prototype.deleteEmailAddress = function (i, aRow) {
        this.EmailAddressForms.removeAt(i);
        if (aRow.value.id != '') {
            this.deletedEmailAddresses.push(aRow.value);
        }
    };
    BusinesssettingComponent.prototype.saveDutiesBookings = function () {
    };
    BusinesssettingComponent.prototype.selectInvoiceDatesAndNumbering = function (temp) {
        this.businessSettings.invoiceDatesAndNumbering = temp;
    };
    BusinesssettingComponent.prototype.selectProvider = function (temp) {
        this.businessSettings.trackingProvider = temp;
    };
    BusinesssettingComponent.prototype.saveBilling = function () {
    };
    BusinesssettingComponent.prototype.savePurchase = function () {
    };
    BusinesssettingComponent.prototype.setCustomer = function (temp, event) {
        if (event.source.selected == true) {
            this.businessSettings.defaultCustomer = temp.name;
        }
    };
    BusinesssettingComponent.prototype.setCity = function (temp, event) {
        if (event.source.selected == true) {
            this.businessSettings.defaultCity = temp;
        }
    };
    BusinesssettingComponent.prototype.setDispatchCenter = function (temp) {
        this.businessSettings.dispatchCenter = temp;
    };
    BusinesssettingComponent.prototype.saveOthers = function () {
    };
    BusinesssettingComponent.prototype.saveDriverAllowance = function () {
    };
    BusinesssettingComponent.prototype.saveNotification = function () {
    };
    BusinesssettingComponent.prototype.saveEmailTemplates = function () {
    };
    BusinesssettingComponent.prototype.saveBusinessSettings = function () {
        var _this = this;
        console.log(this.businessSettings);
        this.businessSettings.ownerID = this.user.ownerId;
        this.businessSettingService.addBusinessSettings(this.businessSettings).subscribe(function (data) {
            _this.driverAllowancesForms.value.forEach(function (element) {
                element.businessSettingsId = data.insertId;
                element.ownerId = _this.user.ownerId;
                _this.businessSettingService.addDriverAllowances(element).subscribe(function (data) { });
            });
            if (_this.businessSettings.SMSEnabled == true) {
                _this.SMSPhoneNumbersForms.value.forEach(function (element) {
                    element.businessSettingsId = data.insertId;
                    element.ownerId = _this.user.ownerId;
                    _this.businessSettingService.addSMSPhoneNumbers(element).subscribe(function (data) { });
                });
            }
            if (_this.businessSettings.EmailEnabled == true) {
                _this.EmailAddressForms.value.forEach(function (element) {
                    element.businessSettingsId = data.insertId;
                    element.ownerId = _this.user.ownerId;
                    _this.businessSettingService.addEmailAddresses(element).subscribe(function (data) { });
                });
            }
        }, function (err) { }, function () {
            _this.snackBar.open("Business Settings Saved", "X", { duration: 3000 });
            _this.router.navigateByUrl('/pages/circles/businesssetting');
        });
    };
    BusinesssettingComponent.prototype.updateBusinessSettings = function () {
        var _this = this;
        this.businessSettings.ownerID = this.user.ownerId;
        this.businessSettingService.updateBusinessSettings(this.businessSettings).subscribe(function (data) {
            _this.driverAllowancesForms.value.forEach(function (element) {
                if (element.id == '') {
                    element.businessSettingsId = _this.businessSettings.id;
                    element.ownerId = _this.businessSettings.ownerID;
                    _this.businessSettingService.addDriverAllowances(element).subscribe(function (data) {
                        element.id = data.insertId;
                    });
                }
                else {
                    _this.businessSettingService.updateDriverAllowances(element).subscribe(function (data) { });
                }
            });
            if (_this.deletedDriverAllowance.length > 0) {
                _this.deletedDriverAllowance.forEach(function (element) {
                    _this.businessSettingService.deleteDriverAllowances(element).subscribe(function (data) { });
                });
            }
            if (_this.businessSettings.SMSEnabled == true) {
                _this.SMSPhoneNumbersForms.value.forEach(function (element) {
                    if (element.id == '') {
                        element.businessSettingsId = _this.businessSettings.id;
                        element.ownerId = _this.businessSettings.ownerID;
                        _this.businessSettingService.addSMSPhoneNumbers(element).subscribe(function (data) {
                            element.id = data.insertId;
                        });
                    }
                    else {
                        _this.businessSettingService.updateSMSPhoneNumbers(element).subscribe(function (data) { });
                    }
                });
                if (_this.deletedSMSNumber.length > 0) {
                    _this.deletedSMSNumber.forEach(function (element) {
                        _this.businessSettingService.deleteSMSPhoneNumbers(element).subscribe(function (data) { });
                    });
                }
            }
            if (_this.businessSettings.EmailEnabled == true) {
                _this.EmailAddressForms.value.forEach(function (element) {
                    if (element.id == '') {
                        element.businessSettingsId = _this.businessSettings.id;
                        element.ownerId = _this.businessSettings.ownerID;
                        _this.businessSettingService.addEmailAddresses(element).subscribe(function (data) {
                            element.id = data.insertId;
                        });
                    }
                    else {
                        _this.businessSettingService.updateEmailAddresses(element).subscribe(function (data) { });
                    }
                });
                if (_this.deletedEmailAddresses.length > 0) {
                    _this.deletedEmailAddresses.forEach(function (element) {
                        _this.businessSettingService.deleteEmailAddresses(element).subscribe(function (data) { });
                    });
                }
            }
            _this.auth.changeBusinessSettings(_this.businessSettings);
        }, function (err) { }, function () {
            _this.snackBar.open("Business Settings Saved", "X", { duration: 3000 });
            _this.router.navigateByUrl('/pages/circles/businesssetting');
        });
        // this.router.navigateByUrl('/pages/circles/businesssetting');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BusinesssettingComponent.prototype, "unloadHandler", null);
    BusinesssettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'businesssetting',
            template: __webpack_require__("./src/app/pages/circles/businesssetting/businesssetting.component.html"),
            styles: [__webpack_require__("./src/app/pages/circles/businesssetting/businesssetting.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__businesssetting_service__["a" /* BusinesssettingService */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__operations_new_branch_new_branch_service__["a" /* NewBranchService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["I" /* MatSnackBar */]])
    ], BusinesssettingComponent);
    return BusinesssettingComponent;
}());



/***/ }),

/***/ "./src/app/pages/circles/circlerequests/circlerequests.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nb-card>\n        <nb-card-header>\n            Circle Requests\n        </nb-card-header>\n        <nb-card-body>\n\n            <div align=\"center\">\n                <mat-form-field class=\"filter-field\">\n                    <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n                </mat-form-field>\n        \n                <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n                <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n            </div>\n\n            <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                 <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n               </ng-container>\n       \n               <ng-container matColumnDef=\"phone\">\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> Contact Number </mat-header-cell>\n                 <mat-cell *matCellDef=\"let element\"> {{element.phone}} </mat-cell>\n               </ng-container>\n       \n               <ng-container matColumnDef=\"alternatePhone\">\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> Alternate Number </mat-header-cell>\n                 <mat-cell *matCellDef=\"let element\"> {{element.alternatePhone}} </mat-cell>\n               </ng-container>\n       \n               <ng-container matColumnDef=\"email\">\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n                 <mat-cell *matCellDef=\"let element\"> {{element.email}} </mat-cell>\n               </ng-container>\n       \n               <ng-container matColumnDef=\"headOfficeCity\">\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> City </mat-header-cell>\n                 <mat-cell *matCellDef=\"let element\"> {{element.headOfficeCity}} </mat-cell>\n               </ng-container>\n       \n               <ng-container matColumnDef=\"state\">\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> State </mat-header-cell>\n                 <mat-cell *matCellDef=\"let element\"> {{element.state}} </mat-cell>\n               </ng-container>\n       \n               <ng-container matColumnDef=\"Options\">\n                   <mat-header-cell *matHeaderCellDef> Options </mat-header-cell>\n                   <mat-cell *matCellDef=\"let element ;let row\">\n                        <button mat-icon-button color=\"primary\" (click)=\"accept(element)\"><mat-icon>done</mat-icon></button>\n                        <button mat-icon-button color=\"primary\" (click)=\"decline(element)\"><mat-icon>clear</mat-icon></button>\n                   </mat-cell>\n                 </ng-container>\n       \n                 <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n               <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n       \n             </mat-table>\n             <mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n\n        </nb-card-body>\n    </nb-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/circles/circlerequests/circlerequests.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/circles/circlerequests/circlerequests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirclerequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle_service__ = __webpack_require__("./src/app/pages/circles/circle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__companyprofile_companyprofile_service__ = __webpack_require__("./src/app/pages/circles/companyprofile/companyprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masters_addsuppliers_supplier_service__ = __webpack_require__("./src/app/pages/masters/addsuppliers/supplier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__masters_sub_users_sub_user_service__ = __webpack_require__("./src/app/pages/masters/sub-users/sub-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CirclerequestsComponent = (function () {
    function CirclerequestsComponent(circleService, auth, companyProfileService, customerService, supplierService, permissionService) {
        this.circleService = circleService;
        this.auth = auth;
        this.companyProfileService = companyProfileService;
        this.customerService = customerService;
        this.supplierService = supplierService;
        this.permissionService = permissionService;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_6__angular_material__["O" /* MatTableDataSource */];
        this.displayedColumns = ["name", "phone", "alternatePhone", "email", "headOfficeCity", "state", "Options"];
        this.user = {};
        this.customer = {};
        this.supplier = {};
        this.permission = {};
    }
    CirclerequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
                if (_this.permission.acceptDeclineCircleRequests === 0) {
                    _this.displayedColumns.pop();
                }
            });
            _this.circleService.getRequests(_this.user.ownerId).subscribe(function (data) {
                _this.dataSource.data = data;
                _this.length = data.length;
            });
        });
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    CirclerequestsComponent.prototype.accept = function (temp) {
        var _this = this;
        var i = this.dataSource.data.indexOf(temp);
        this.dataSource.data.splice(i, 1);
        var supplier = {
            ownerName: temp.name,
            ownerId: temp.fromOwnerId,
            supplierId: this.user.ownerId,
            supplierName: this.user.name
        };
        var circleData = {
            supplier: supplier,
            id: temp.id
        };
        console.log(supplier);
        this.circleService.acceptRequest(circleData).subscribe(function (data) {
            console.log(data);
            if (data.affectedRows == 1) {
                //to do this only if not following online offline  supplier approach
                //add to request senders supplier db
                var userData = {
                    ownerId: _this.user.ownerId
                };
                _this.companyProfileService.getCompanyProfile(userData).subscribe(function (data) {
                    console.log(data);
                    //put in supplier object and put his ownerid then insert
                    console.log(data);
                    _this.supplier.ownerId = supplier.ownerId;
                    _this.supplier.supplierOwnerId = _this.user.ownerId;
                    _this.supplier.name = data[0].name;
                    _this.supplier.billingName = data[0].name;
                    _this.supplier.saddress = data[0].address;
                    _this.supplier.billingAddress = data[0].address;
                    _this.supplier.headOfficeCity = data[0].headOfficeCity;
                    _this.supplier.state = data[0].state;
                    _this.supplier.billingState = data[0].state;
                    _this.supplier.phone = data[0].phone;
                    _this.supplier.billingPhone = data[0].phone;
                    _this.supplier.email = data[0].email;
                    //this.supplier.billingEmail=data[0].email;
                    _this.supplier.panNo = data[0].email;
                    _this.supplier.gstin = data[0].gstin;
                    console.log(_this.supplier);
                    _this.supplierService.addSupplier(_this.supplier).subscribe(function (data) {
                        console.log(data);
                    });
                });
                ///add to his  own customer db 
                var userData2 = {
                    ownerId: temp.fromOwnerId
                };
                _this.companyProfileService.getCompanyProfile(userData2).subscribe(function (data) {
                    console.log(data);
                    _this.customer.ownerId = _this.user.ownerId;
                    _this.customer.customerOwnerId = supplier.ownerId;
                    _this.customer.name = data[0].name;
                    _this.customer.billingName = data[0].name;
                    _this.customer.caddress = data[0].address;
                    _this.customer.billingAddress = data[0].address;
                    _this.customer.state = data[0].state;
                    _this.customer.billingState = data[0].state;
                    _this.customer.phone = data[0].phone;
                    _this.customer.billingPhone = data[0].phone;
                    _this.customer.email = data[0].email;
                    _this.customer.billingEmail = data[0].email;
                    _this.customer.panNo = data[0].email;
                    _this.customer.gstin = data[0].gstin;
                    _this.customerService.addCustomer(_this.customer).subscribe(function (data) {
                        console.log(data);
                    });
                    //put in customer object and replace his owner id to own then  insert in own db
                });
            }
        });
    };
    CirclerequestsComponent.prototype.decline = function (temp) {
        var circleData = {
            id: temp.id
        };
        this.circleService.declineRequest(circleData).subscribe();
    };
    CirclerequestsComponent.prototype.search = function (filter) {
        this.dataSource.filter = filter.trim().toLowerCase();
    };
    CirclerequestsComponent.prototype.clear = function () {
        this.searchTerm = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["K" /* MatSort */])
    ], CirclerequestsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["A" /* MatPaginator */])
    ], CirclerequestsComponent.prototype, "paginator", void 0);
    CirclerequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-circlerequests',
            template: __webpack_require__("./src/app/pages/circles/circlerequests/circlerequests.component.html"),
            styles: [__webpack_require__("./src/app/pages/circles/circlerequests/circlerequests.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__circle_service__["a" /* CircleService */],
            __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__companyprofile_companyprofile_service__["a" /* CompanyprofileService */],
            __WEBPACK_IMPORTED_MODULE_4__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_5__masters_addsuppliers_supplier_service__["a" /* SupplierService */],
            __WEBPACK_IMPORTED_MODULE_7__masters_sub_users_sub_user_service__["a" /* SubUserService */]])
    ], CirclerequestsComponent);
    return CirclerequestsComponent;
}());



/***/ }),

/***/ "./src/app/pages/circles/circles-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirclesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__circlesdisplay_circlesdisplay_component__ = __webpack_require__("./src/app/pages/circles/circlesdisplay/circlesdisplay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__circles_component__ = __webpack_require__("./src/app/pages/circles/circles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__circlerequests_circlerequests_component__ = __webpack_require__("./src/app/pages/circles/circlerequests/circlerequests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__myrequests_myrequests_component__ = __webpack_require__("./src/app/pages/circles/myrequests/myrequests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__businesssetting_businesssetting_component__ = __webpack_require__("./src/app/pages/circles/businesssetting/businesssetting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__companyprofile_companyprofile_component__ = __webpack_require__("./src/app/pages/circles/companyprofile/companyprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editrequest_editrequest_component__ = __webpack_require__("./src/app/pages/circles/editrequest/editrequest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_deactivate_guard__ = __webpack_require__("./src/app/core/deactivate.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__circles_component__["a" /* CirclesComponent */],
        children: [{
                path: 'circlesdisplay',
                component: __WEBPACK_IMPORTED_MODULE_3__circlesdisplay_circlesdisplay_component__["a" /* CirclesdisplayComponent */],
            },
            {
                path: 'circlerequests',
                component: __WEBPACK_IMPORTED_MODULE_5__circlerequests_circlerequests_component__["a" /* CirclerequestsComponent */]
            },
            {
                path: 'myrequests',
                component: __WEBPACK_IMPORTED_MODULE_6__myrequests_myrequests_component__["a" /* MyrequestsComponent */]
            },
            {
                path: 'businesssetting',
                component: __WEBPACK_IMPORTED_MODULE_7__businesssetting_businesssetting_component__["a" /* BusinesssettingComponent */],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_10__core_deactivate_guard__["a" /* DeactivateGuard */]]
            },
            {
                path: 'companyprofile',
                component: __WEBPACK_IMPORTED_MODULE_8__companyprofile_companyprofile_component__["a" /* CompanyprofileComponent */],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_10__core_deactivate_guard__["a" /* DeactivateGuard */]]
            },
            {
                path: 'companyprofile',
                component: __WEBPACK_IMPORTED_MODULE_8__companyprofile_companyprofile_component__["a" /* CompanyprofileComponent */]
            },
            {
                path: 'editRequest',
                component: __WEBPACK_IMPORTED_MODULE_9__editrequest_editrequest_component__["a" /* EditrequestComponent */]
            }
        ]
    }];
var CirclesRoutingModule = (function () {
    function CirclesRoutingModule() {
    }
    CirclesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            ],
            declarations: []
        })
    ], CirclesRoutingModule);
    return CirclesRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_4__circles_component__["a" /* CirclesComponent */],
    __WEBPACK_IMPORTED_MODULE_3__circlesdisplay_circlesdisplay_component__["a" /* CirclesdisplayComponent */],
    __WEBPACK_IMPORTED_MODULE_5__circlerequests_circlerequests_component__["a" /* CirclerequestsComponent */],
    __WEBPACK_IMPORTED_MODULE_6__myrequests_myrequests_component__["a" /* MyrequestsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__businesssetting_businesssetting_component__["a" /* BusinesssettingComponent */],
    __WEBPACK_IMPORTED_MODULE_8__companyprofile_companyprofile_component__["a" /* CompanyprofileComponent */]
];


/***/ }),

/***/ "./src/app/pages/circles/circles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirclesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CirclesComponent = (function () {
    function CirclesComponent() {
    }
    CirclesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-form-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], CirclesComponent);
    return CirclesComponent;
}());



/***/ }),

/***/ "./src/app/pages/circles/circles.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirclesModule", function() { return CirclesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__circlesdisplay_circlesdisplay_component__ = __webpack_require__("./src/app/pages/circles/circlesdisplay/circlesdisplay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__circles_routing_module__ = __webpack_require__("./src/app/pages/circles/circles-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connectpeople_connectpeople_component__ = __webpack_require__("./src/app/pages/circles/connectpeople/connectpeople.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__circlerequests_circlerequests_component__ = __webpack_require__("./src/app/pages/circles/circlerequests/circlerequests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__confirmrequests_confirmrequests_component__ = __webpack_require__("./src/app/pages/circles/confirmrequests/confirmrequests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__myrequests_myrequests_component__ = __webpack_require__("./src/app/pages/circles/myrequests/myrequests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__businesssetting_businesssetting_component__ = __webpack_require__("./src/app/pages/circles/businesssetting/businesssetting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__companyprofile_companyprofile_component__ = __webpack_require__("./src/app/pages/circles/companyprofile/companyprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mapping_mapping_component__ = __webpack_require__("./src/app/pages/circles/mapping/mapping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__editrequest_editrequest_component__ = __webpack_require__("./src/app/pages/circles/editrequest/editrequest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dutychanges_dutychanges_component__ = __webpack_require__("./src/app/pages/circles/dutychanges/dutychanges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_quill__ = __webpack_require__("./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__operations_new_branch_new_branch_service__ = __webpack_require__("./src/app/pages/operations/new-branch/new-branch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var CirclesModule = (function () {
    function CirclesModule() {
    }
    CirclesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["L" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["F" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["P" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["S" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__circles_routing_module__["a" /* CirclesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["Q" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_quill__["a" /* QuillModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__circlesdisplay_circlesdisplay_component__["a" /* CirclesdisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_3__circles_routing_module__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_6__connectpeople_connectpeople_component__["a" /* ConnectpeopleComponent */],
                __WEBPACK_IMPORTED_MODULE_7__circlerequests_circlerequests_component__["a" /* CirclerequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__confirmrequests_confirmrequests_component__["a" /* ConfirmrequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__myrequests_myrequests_component__["a" /* MyrequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__businesssetting_businesssetting_component__["a" /* BusinesssettingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__companyprofile_companyprofile_component__["a" /* CompanyprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mapping_mapping_component__["a" /* MappingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__editrequest_editrequest_component__["a" /* EditrequestComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dutychanges_dutychanges_component__["a" /* DutychangesComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__connectpeople_connectpeople_component__["a" /* ConnectpeopleComponent */],
                __WEBPACK_IMPORTED_MODULE_8__confirmrequests_confirmrequests_component__["a" /* ConfirmrequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mapping_mapping_component__["a" /* MappingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dutychanges_dutychanges_component__["a" /* DutychangesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__operations_new_branch_new_branch_service__["a" /* NewBranchService */]
            ]
        })
    ], CirclesModule);
    return CirclesModule;
}());



/***/ }),

/***/ "./src/app/pages/circles/circlesdisplay/circlesdisplay.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nb-card>\n    <nb-card-header>\n      Your Circles\n    </nb-card-header>\n    <nb-card-body>\n\n        <div align=\"center\">\n            <mat-form-field class=\"filter-field\">\n              <input matInput placeholder=\"Filter\" [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n            </mat-form-field>\n    \n            <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n            <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n        </div>\n\n      <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n         <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.supplierName}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"phone\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Contact Number </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.phone}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"alternatePhone\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Alternate Number </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.alternatePhone}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"email\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.email}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"headOfficeCity\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> City </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.headOfficeCity}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"state\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> State </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.state}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options </mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item>Edit</button>\n              <button mat-menu-item>Delete</button>\n              <button mat-menu-item>Set Supplier Pricing</button>\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n      </mat-table>\n      <mat-paginator [length]=\"length\"\n                    [pageSize]=\"pageSize\"\n                    [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n      \n    </nb-card-body>\n  </nb-card>\n  <!-- <div align=\"left\">\n    People in Your Circle\n  </div>-->\n  <div class=\"col-lg-12\" align=\"right\">\n    <a *ngIf=\"permission.addToCircle\" (click)=\"connectPeople()\" class=\"float\">\n      <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n    </a>\n    \n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/circles/circlesdisplay/circlesdisplay.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/circles/circlesdisplay/circlesdisplay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirclesdisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connectpeople_connectpeople_component__ = __webpack_require__("./src/app/pages/circles/connectpeople/connectpeople.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__circle_service__ = __webpack_require__("./src/app/pages/circles/circle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CirclesdisplayComponent = (function () {
    function CirclesdisplayComponent(matDialog, circlesService, auth) {
        this.matDialog = matDialog;
        this.circlesService = circlesService;
        this.auth = auth;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */];
        this.displayedColumns = ["name", "phone", "alternatePhone", "email", "headOfficeCity", "state", "Options"];
        this.user = {};
        this.permission = {};
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
    }
    CirclesdisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
                if (_this.permission.manageCircle === 0) {
                    _this.displayedColumns.pop();
                }
            });
            _this.circlesService.getCircle(_this.user).subscribe(function (data) {
                _this.dataSource.data = data;
                _this.length = data.length;
            });
        });
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    CirclesdisplayComponent.prototype.connectPeople = function () {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_2__connectpeople_connectpeople_component__["a" /* ConnectpeopleComponent */]);
    };
    CirclesdisplayComponent.prototype.search = function (filter) {
        this.dataSource.filter = filter.trim().toLowerCase();
    };
    CirclesdisplayComponent.prototype.clear = function () {
        this.searchTerm = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], CirclesdisplayComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], CirclesdisplayComponent.prototype, "paginator", void 0);
    CirclesdisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-circlesdisplay',
            template: __webpack_require__("./src/app/pages/circles/circlesdisplay/circlesdisplay.component.html"),
            styles: [__webpack_require__("./src/app/pages/circles/circlesdisplay/circlesdisplay.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__circle_service__["a" /* CircleService */],
            __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */]])
    ], CirclesdisplayComponent);
    return CirclesdisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/circles/companyprofile/companyprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <nb-card>\n            <nb-card-header>Company Profile</nb-card-header>\n            <nb-card-body>\n                <div class=\"row ptb-10\">\n                    <div class=\"col-lg-6 col-6\" style=\"text-align:right; margin:auto;\">\n                        Upload Company Logo\n                        <br>\n                        <button (click)=\"profilePhoto.click()\" mat-raised-button color=\"primary\"> <mat-icon>cloud_upload</mat-icon>Browse</button>\n                        <input type=\"file\" accept=\"images/*\" #profilePhoto name=\"companyLogo\" hidden (change)=\"uploadImage($event)\">\n                    </div>\n                    <div class=\"col-lg-6 col-6\">\n                        <img alt=\"\" *ngIf=\"companyLogo!=''\" [src]=\"companyLogo\" height=\"100\" width=\"100\"><button mat-icon-button *ngIf=\"companyLogo!=''\" (click)=\"removeImage()\"><mat-icon>clear</mat-icon></button>\n                    </div>\n                </div>\n                <div class=\"row ptb-10\">\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Name\n                            <input [(ngModel)]=\"companyProfile.name\" name=\"name\" matInput>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">                        \n                        <mat-form-field>\n                            Address\n                            <textarea [(ngModel)]=\"companyProfile.address\" name=\"saddress\" matInput #newAddress></textarea>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            State\n                            <input matInput [formControl]=\"companyProfileStateControl\" [matAutocomplete]=\"auto1\">\n                            <mat-autocomplete #auto1=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let option of companyStateOptions | async\" [value]=\"option\" (onSelectionChange)=\"companyStateSelect(option,$event)\">\n                                    {{ option }}\n                                </mat-option>\n                            </mat-autocomplete>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row ptb-10\">\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Phone Number\n                            <input matInput [(ngModel)]=\"companyProfile.phone\" name=\"phone\" #newPhone />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Email\n                            <input matInput [(ngModel)]=\"companyProfile.email\" name=\"email\" #newEmail />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Alternate Phone Number\n                            <input matInput [(ngModel)]=\"companyProfile.alternatePhone\"/>\n                        </mat-form-field>\n                        \n                    </div>\n                </div>\n                <div class=\"row ptb-10\">\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            PAN\n                            <input matInput [(ngModel)]=\"companyProfile.panNo\" name=\"panNo\" #newPAN />\n                        </mat-form-field>\n                        \n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            GSTIN\n                            <input matInput [(ngModel)]=\"companyProfile.gstin\" name=\"gstin\"  #newGSTIN />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            HSN/SAC Code\n                            <input matInput [(ngModel)]=\"companyProfile.hsnCode\" name=\"hsnCode\"  #newHSN />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row ptb-10\">\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Head Office City\n                            <input [(ngModel)]=\"companyProfile.headOfficeCity\" name=\"headOfficeCity\" matInput #newCity />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Invoice Prefix\n                            <input matInput [(ngModel)]=\"companyProfile.invoicePrefix\"/>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Invoice Prefix (Hotel)\n                            <input matInput [(ngModel)]=\"companyProfile.hotelInvoicePrefix\"/>\n                        </mat-form-field>\n                    </div>\n                </div> \n                <div class=\"row ptb-10\">\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Invoice Prefix (Flights)\n                            <input matInput [(ngModel)]=\"companyProfile.flightInvoicePrefix\"/>\n                        </mat-form-field>\n                    </div>\n                </div>               \n            </nb-card-body>\n        </nb-card>\n    </div> \n    <div class=\"col-lg-12\">\n        <button *ngIf=\"permission.editCompanyInfo\" mat-raised-button color=\"primary\"(click)=\" saveCompanyProfile()\">Save</button>\n        <button mat-raised-button color=\"warn\"(click)=\"addBranch()\">Add Branch</button>\n        <br><br>\n    </div>\n</div>    "

/***/ }),

/***/ "./src/app/pages/circles/companyprofile/companyprofile.component.scss":
/***/ (function(module, exports) {

module.exports = ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 100px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n\ntd {\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-lg-4 {\n  margin-bottom: -15px; }\n"

/***/ }),

/***/ "./src/app/pages/circles/companyprofile/companyprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companyprofile_service__ = __webpack_require__("./src/app/pages/circles/companyprofile/companyprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__masters_sub_users_sub_user_service__ = __webpack_require__("./src/app/pages/masters/sub-users/sub-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CompanyprofileComponent = (function () {
    function CompanyprofileComponent(snackBar, auth, dialog, companyService, uploadService, _sanitizer, router, permissionsService) {
        this.snackBar = snackBar;
        this.auth = auth;
        this.dialog = dialog;
        this.companyService = companyService;
        this.uploadService = uploadService;
        this._sanitizer = _sanitizer;
        this.router = router;
        this.permissionsService = permissionsService;
        this.companyProfileStateControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.insert = true;
        this.companyLogo = '';
        this.user = {};
        this.previousImgUrl = '';
        this.permission = {};
        this.states = [
            'Andaman and Nicobar Islands',
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chandigarh',
            'Chhattisgarh',
            'Dadra and Nagar Haveli',
            'Delhi',
            'Goa',
            'Gujarat',
            'Haryana',
            'Himachal Pradesh',
            'Jammu and Kashmir',
            'Jharkhand',
            'Karnataka',
            'Karnatka',
            'Kerala',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Odisha',
            'Puducherry',
            'Punjab',
            'Rajasthan',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttar Pradesh',
            'Uttarakhand',
            'West Bengal'
        ];
        this.companyProfile = {
            companyLogo: '',
            name: '',
            address: '',
            state: '',
            phone: '',
            email: '',
            panNo: '',
            gstin: '',
            alternatePhone: '',
            headOfficeCity: '',
            invoicePrefix: '',
            hotelInvoicePrefix: '',
            flightInvoicePrefix: '',
            ownerId: '',
            hsnCode: ''
        };
    }
    CompanyprofileComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    CompanyprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.permissionsService.getSubUser(_this.user).subscribe(function (data) {
                _this.permission = data[0];
            });
            _this.companyProfile.ownerId = data[0].ownerId;
            _this.companyService.getCompanyProfile(data[0]).subscribe(function (data) {
                if (data.length > 0) {
                    _this.companyProfile = data[0];
                    _this.insert = false;
                    _this.companyProfileStateControl.patchValue(_this.companyProfile.state);
                    if (_this.companyProfile.companyLogo != '' && _this.companyProfile.companyLogo != null)
                        _this.uploadService.getFile(_this.user.companyName, 'profileImages', _this.companyProfile.companyLogo).subscribe(function (data) {
                            _this.companyLogo = _this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                                + data.text());
                            _this.previousImgUrl = _this.companyLogo;
                        });
                }
            });
        });
        this.companyStateOptions = this.companyProfileStateControl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterCompanyStates(val); }));
    };
    CompanyprofileComponent.prototype.filterCompanyStates = function (val) {
        return this.states.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    CompanyprofileComponent.prototype.uploadImage = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) { return _this.companyLogo = reader.result; };
        reader.readAsDataURL(file);
    };
    CompanyprofileComponent.prototype.saveCompanyProfile = function () {
        var _this = this;
        this.companyProfile.companyLogo = this.companyProfile.name + "_Logo.jpg";
        if (this.insert) {
            this.companyService.addCompanyProfile(this.companyProfile).subscribe(function (data) {
                _this.snackBar.open("Company Profile Updated", null, { duration: 3000 });
                _this.upload(data.insertId);
            });
        }
        else {
            this.companyService.updateCompanyProfile(this.companyProfile).subscribe(function (data) {
                _this.snackBar.open("Company Profile Updated", null, { duration: 3000 });
                _this.upload(_this.companyProfile.id);
            });
        }
    };
    CompanyprofileComponent.prototype.companyStateSelect = function (option, event) {
        if (event.source.selected == true) {
            this.companyProfile.state = option;
        }
    };
    CompanyprofileComponent.prototype.addBranch = function () {
        this.router.navigate(['/pages/operations/branch']);
    };
    CompanyprofileComponent.prototype.upload = function (id) {
        var _this = this;
        if (this.companyLogo != '') {
            this.companyProfile.companyLogo = id + this.companyProfile.name + ".jpg";
            this.uploadService.uploadfile(this.user.companyName, 'profileImages', this.companyProfile.companyLogo, this.companyLogo);
        }
        this.companyProfile.id = id;
        this.companyService.updateCompanyProfile(this.companyProfile).subscribe(function (data) {
            _this.dialog.closeAll();
        });
    };
    CompanyprofileComponent.prototype.removeImage = function () {
        this.companyLogo = '';
        this.previousImgUrl = '';
        this.companyProfile.companyLogo = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], CompanyprofileComponent.prototype, "unloadHandler", null);
    CompanyprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'companyprofile',
            template: __webpack_require__("./src/app/pages/circles/companyprofile/companyprofile.component.html"),
            styles: [__webpack_require__("./src/app/pages/circles/companyprofile/companyprofile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__companyprofile_service__["a" /* CompanyprofileService */],
            __WEBPACK_IMPORTED_MODULE_6__fileupload_service__["a" /* FileuploadService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_9__masters_sub_users_sub_user_service__["a" /* SubUserService */]])
    ], CompanyprofileComponent);
    return CompanyprofileComponent;
}());



/***/ }),

/***/ "./src/app/pages/circles/confirmrequests/confirmrequests.component.html":
/***/ (function(module, exports) {

module.exports = "<div>Are you sure you want to send request to {{supplierName}}?</div>\n<div class=\"confirm-container\">\n  <button class=\"confirm-button\" mat-raised-button color=\"primary\" (click)=\"confirmRequest()\">Yes</button>\n  <button class=\"confirm-button\" mat-raised-button color=\"warn\" (click)=\"cancelRequest()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/circles/confirmrequests/confirmrequests.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/circles/confirmrequests/confirmrequests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmrequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__circle_service__ = __webpack_require__("./src/app/pages/circles/circle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ConfirmrequestsComponent = (function () {
    function ConfirmrequestsComponent(data, dialog, circleService, auth, snackBar) {
        this.data = data;
        this.dialog = dialog;
        this.circleService = circleService;
        this.auth = auth;
        this.snackBar = snackBar;
        this.again = false;
        if (data.temp != null) {
            this.supplierName = data.temp.name;
            this.toOwnerId = data.temp.ownerId;
            this.again = data.again;
        }
    }
    ConfirmrequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
        });
    };
    ConfirmrequestsComponent.prototype.confirmRequest = function () {
        var temp = {
            name: this.user.name,
            fromOwnerId: this.user.ownerId,
            toOwnerId: this.toOwnerId
        };
        if (!this.again) {
            this.circleService.sendRequest(temp).subscribe();
        }
        else
            this.circleService.sendRequestAgain(temp).subscribe();
        this.snackBar.open("Your Request has been to sent", null, { duration: 2000 });
        this.dialog.closeAll();
    };
    ConfirmrequestsComponent.prototype.cancelRequest = function () {
        this.dialog.closeAll();
    };
    ConfirmrequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmrequests',
            template: __webpack_require__("./src/app/pages/circles/confirmrequests/confirmrequests.component.html"),
            styles: [__webpack_require__("./src/app/pages/circles/confirmrequests/confirmrequests.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__circle_service__["a" /* CircleService */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBar */]])
    ], ConfirmrequestsComponent);
    return ConfirmrequestsComponent;
}());



/***/ }),

/***/ "./src/app/pages/circles/connectpeople/connectpeople.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Add People\n      </nb-card-header>\n      <nb-card-body>\n        <table class=\"table\">\n          <tr>\n            <th>Name</th>\n            <th>Phone</th>\n            <th>Email</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>&#10004; x</th>\n          </tr>\n          <tr *ngFor=\"let element of users\">\n            <td>\n              <!-- <mat-list>\n                <mat-list-item> -->\n                  {{element.name}}\n                <!-- </mat-list-item>\n              </mat-list> -->\n            </td>\n            <td>\n              <!-- <mat-list>\n                <mat-list-item> -->\n                  {{element.phone}} <ng-container *ngIf=\"element.alternatephone\">, {{element.alternatephone}}</ng-container>\n                <!-- </mat-list-item>\n              </mat-list> -->\n            </td>\n            <td>\n              <!-- <mat-list>\n                <mat-list-item> -->\n                  {{element.email}}\n                <!-- </mat-list-item>\n              </mat-list> -->\n            </td>\n            <td class=\"fit-address\">\n              <!-- <mat-list>\n                <mat-list-item> -->\n                  {{element.address}}\n                <!-- </mat-list-item>\n              </mat-list> -->\n            </td>\n            <td>\n              <!-- <mat-list>\n                <mat-list-item> -->\n                  {{element.headofficecity}}\n                <!-- </mat-list-item>\n              </mat-list> -->\n            </td>\n            <td *ngIf=\"element.status == 'Accepted'\">\n              <mat-chip-list>\n                <mat-chip style=\"margin-top:10px\" class=\"green-color\" selected>Accepted</mat-chip>\n              </mat-chip-list>\n            </td>\n            <td *ngIf=\"element.status == 'Pending'\">\n              <mat-chip-list>\n                <mat-chip style=\"margin-top:10px\" color=\"warn\" selected>Pending</mat-chip>\n              </mat-chip-list>\n            </td>\n            <td *ngIf=\"element.status == null\">\n              <button mat-raised-button color=\"primary\" (click)=\"confirmRequest(element)\">Send Request</button>\n            </td>\n            <td *ngIf=\"element.status == 'Declined'\">\n              <button mat-raised-button color=\"primary\" (click)=\"confirmRequestAgain(element)\">Send Request Again</button>\n            </td>\n          </tr>\n        </table>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/circles/connectpeople/connectpeople.component.scss":
/***/ (function(module, exports) {

module.exports = ".green-color {\n  background-color: #388e3c !important;\n  color: #fff !important; }\n"

/***/ }),

/***/ "./src/app/pages/circles/connectpeople/connectpeople.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectpeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle_service__ = __webpack_require__("./src/app/pages/circles/circle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmrequests_confirmrequests_component__ = __webpack_require__("./src/app/pages/circles/confirmrequests/confirmrequests.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConnectpeopleComponent = (function () {
    function ConnectpeopleComponent(circleService, auth, dialog) {
        this.circleService = circleService;
        this.auth = auth;
        this.dialog = dialog;
        this.accepted = false;
        this.pending = false;
        this.request = false;
        this.user = {};
    }
    ConnectpeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.circleService.getUsers(_this.user.ownerId).subscribe(function (data) {
                data.forEach(function (element) {
                    console.log(element);
                    if (element.status == "Accepted") {
                        _this.accepted = true;
                        _this.pending = false;
                        _this.request = false;
                    }
                    else if (element.status == "Pending") {
                        _this.pending = true;
                        _this.accepted = false;
                        _this.request = false;
                    }
                    else {
                        _this.request = true;
                        _this.accepted = false;
                        _this.pending = false;
                    }
                });
                _this.users = data;
            });
        });
    };
    ConnectpeopleComponent.prototype.confirmRequest = function (temp) {
        var data = {
            temp: temp,
            again: false
        };
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__confirmrequests_confirmrequests_component__["a" /* ConfirmrequestsComponent */], { data: data, autoFocus: false, disableClose: true });
    };
    ConnectpeopleComponent.prototype.confirmRequestAgain = function (temp) {
        var data = {
            temp: temp,
            again: true
        };
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__confirmrequests_confirmrequests_component__["a" /* ConfirmrequestsComponent */], { data: data, autoFocus: false, disableClose: true });
    };
    ConnectpeopleComponent.prototype.sendRequest = function (row) {
        var temp = {
            name: this.user.name,
            fromOwnerId: this.user.ownerId,
            toOwnerId: row.ownerId
        };
        this.circleService.sendRequest(temp).subscribe(function (data) {
        });
    };
    ConnectpeopleComponent.prototype.sendRequestAgain = function (row) {
        var temp = {
            name: this.user.name,
            fromOwnerId: this.user.ownerId,
            toOwnerId: row.ownerId
        };
        this.circleService.sendRequestAgain(temp).subscribe(function (data) {
        });
    };
    ConnectpeopleComponent.prototype.log = function () {
    };
    ConnectpeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connectpeople',
            template: __webpack_require__("./src/app/pages/circles/connectpeople/connectpeople.component.html"),
            styles: [__webpack_require__("./src/app/pages/circles/connectpeople/connectpeople.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__circle_service__["a" /* CircleService */],
            __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatDialog */]])
    ], ConnectpeopleComponent);
    return ConnectpeopleComponent;
}());



/***/ }),

/***/ "./src/app/pages/circles/dutychanges/dutychanges.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-body>\n        <h3 style=\"display: inline-block;\">Duty Details</h3>\n        <mat-chip-list style=\"float: right\">Status:&nbsp;\n          <mat-chip color=\"primary\" selected=\"true\">&nbsp;{{detailsT.status}}</mat-chip>\n        </mat-chip-list>  \n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-body>\n        <mat-list>\n          <mat-list-item>\n            <b>Customer:</b> &nbsp;\n            {{detailsT.cname}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].cname!=null || valueChanges[0].cname!=''\" matTooltip=\"Requested Change:{{valueChanges[0].cname}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>Book By:</b> &nbsp;\n            {{detailsT.bookBy}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].bookBy!=null || valueChanges[0].bookBy!=''\" matTooltip=\"Requested Change:{{valueChanges[0].bookBy}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>ID: </b> &nbsp;\n            {{detailsT.id}}\n            <!-- <button mat-icon-button *ngIf=\"valueChanges[0].id!=null\" matTooltip=\"Requested Change:{{valueChanges[0].id}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button> -->\n          </mat-list-item> \n        </mat-list>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-body>\n        <mat-list>\n          <mat-list-item>\n            <b>Start from Garage:</b>&nbsp;\n            {{detailsT.startFromGarage}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].startFromGarage!=null || valueChanges[0].startFromGarage!=''\" matTooltip=\"Requested Change:{{valueChanges[0].startFromGarage}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>Reporting Time:</b>&nbsp;\n            {{detailsT.reportingTime}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].reportingTime!=null\" matTooltip=\"Requested Change:{{valueChanges[0].reportingTime}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>  \n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>Start Date:</b>&nbsp;\n            {{detailsT.startDate}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].startDate!=null\" matTooltip=\"Requested Change:{{valueChanges[0].startDate}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>  \n        </mat-list>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-body>\n        <mat-list>\n          <mat-list-item>\n            <b>City:</b>&nbsp;\n            {{detailsT.fromLoc}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].fromLoc!=null\" matTooltip=\"Requested Change:{{valueChanges[0].fromLoc}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>To Location:</b>&nbsp;\n            {{detailsT.toLoc}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].toLoc!=null\" matTooltip=\"Requested Change:{{valueChanges[0].toLoc}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>Bill To:</b>&nbsp;\n            {{detailsT.billTo}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].billTo!=null\" matTooltip=\"Requested Change:{{valueChanges[0].billTo}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n        </mat-list>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-body>\n        <mat-list>\n          <mat-list-item>\n            <b>Duty Type:</b>&nbsp;\n            {{detailsT.dutyType}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].dutyType!=null\" matTooltip=\"Requested Change:{{valueChanges[0].dutyType}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>Vehicle Group:</b>&nbsp;\n            {{detailsT.vehicleGroup}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].vehicleGroup!=null\" matTooltip=\"Requested Change:{{valueChanges[0].vehicleGroup}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>Customer:</b>&nbsp;\n            {{detailsT.cname}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].cname!=null\" matTooltip=\"Requested Change:{{valueChanges[0].cname}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n        </mat-list>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-body>\n        <mat-list>\n          <mat-list-item>\n            <b>Booked By:</b>&nbsp;\n            {{detailsT.bookBy}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].bookBy!=null\" matTooltip=\"Requested Change:{{valueChanges[0].bookBy}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>Reporting Address:</b>&nbsp;\n            {{detailsT.reportingAddress}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].reportingAddress!=null\" matTooltip=\"Requested Change:{{valueChanges[0].reportingAddress}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>Drop Address:</b> &nbsp;\n            {{detailsT.dropAddress}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].dropAddress!=null\" matTooltip=\"Requested Change:{{valueChanges[0].dropAddress}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n        </mat-list>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-body>\n        <mat-list>\n          <mat-list-item>\n            <b>Price:</b>&nbsp;\n            {{detailsT.price}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].price!=null\" matTooltip=\"Requested Change:{{valueChanges[0].price}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>Passenger:</b>&nbsp;\n            {{detailsT.passenger}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].passenger!=null\" matTooltip=\"Requested Change:{{valueChanges[0].passenger}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <b>Remarks:</b>&nbsp; \n            {{detailsT.remarks}}\n            <button mat-icon-button *ngIf=\"valueChanges[0].remarks!=null\" matTooltip=\"Requested Change:{{valueChanges[0].remarks}}\">\n              <mat-icon style=\"color:red\">warning</mat-icon>\n            </button>\n          </mat-list-item>\n        </mat-list>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-body>\n        <b>Operator Notes:</b>{{detailsT.operatorNotes}}\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12\">\n    <button mat-raised-button color=\"primary\" *ngIf=\"valueChanges[0]!=null\" (click)=\"save()\">Save</button>\n    <button mat-raised-button color=\"primary\" (click)=\"closeDialog()\">Close</button>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/pages/circles/dutychanges/dutychanges.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/circles/dutychanges/dutychanges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutychangesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duties_duties_service__ = __webpack_require__("./src/app/pages/duties/duties.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DutychangesComponent = (function () {
    function DutychangesComponent(data, dutiesService, dialog) {
        this.data = data;
        this.dutiesService = dutiesService;
        this.dialog = dialog;
        this.detailsT = {};
        if (data) {
            this.detailsT = data.row;
            // this.valueChanges=data.valueChanges
        }
    }
    DutychangesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dutiesService.getValueChanges(this.detailsT).subscribe(function (data) {
            console.log(data);
            _this.valueChanges = data;
        });
    };
    DutychangesComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    DutychangesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dutychanges',
            template: __webpack_require__("./src/app/pages/circles/dutychanges/dutychanges.component.html"),
            styles: [__webpack_require__("./src/app/pages/circles/dutychanges/dutychanges.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__duties_duties_service__["a" /* DutiesService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */]])
    ], DutychangesComponent);
    return DutychangesComponent;
}());



/***/ }),

/***/ "./src/app/pages/circles/editrequest/editrequest.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\" >\n      <nb-card>\n        <nb-card-header>\n            Duties Edit Requests\n         </nb-card-header>\n        <nb-card-body>\n            <div align=\"center\">\n                <mat-form-field class=\"filter-field\">\n                  <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n                </mat-form-field>\n        \n                <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n                <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n              </div>\n              <mat-table  [dataSource]=\"dataSource\" matSort matSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear>\n    \n                         <!-- Date Column -->\n        <ng-container matColumnDef=\"startDate\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Date</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.startDate}} </mat-cell>\n          </ng-container>\n        \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"cname\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Customer </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.cname}} </mat-cell>\n          </ng-container>\n\n          <!-- Booked By Column -->\n          <ng-container matColumnDef=\"bookBy\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Booked by </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"  [matTooltip]=\"element.bookByNo\"> {{element.bookBy}} </mat-cell>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"passenger\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Passenger</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.passengerNo\"> {{element.passenger}} </mat-cell>\n            \n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"driver\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Driver </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.driver}} </mat-cell>\n            \n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"vehicleGroup\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Vehicle Group</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.vehicleGroup}} </mat-cell>\n            \n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"dutyType\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Duty Type</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.dutyType}} </mat-cell>\n              \n            </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"reportingAddress\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Short Reporting Address</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.reportingAddress\"> {{element.shortReportingAddress}} </mat-cell>\n              \n            </ng-container>  \n\n            <!-- Symbol Column -->\n          <ng-container matColumnDef=\"dropAddress\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Drop Address</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.dropAddress}} </mat-cell>\n              \n            </ng-container>\n\n            <!-- Symbol Column -->\n          <ng-container matColumnDef=\"reportingTime\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Reporting Time</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.reportingTime}} </mat-cell>\n              \n            </ng-container>\n          \n            <!-- Symbol Column -->\n          <ng-container matColumnDef=\"remarks\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Remarks</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.remarks}} </mat-cell>\n              \n            </ng-container>\n\n            <!-- Symbol Column -->\n          <ng-container matColumnDef=\"status\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Status</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\">\n                <mat-chip-list>\n                  <mat-chip color=\"primary\" selected=\"true\">{{element.status}}</mat-chip>\n                </mat-chip-list> \n              </mat-cell>\n              \n            </ng-container>\n      \n                  <ng-container matColumnDef=\"Options\">\n                    <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n                    <mat-cell *matCellDef=\"let element ;let row\">\n                      <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n                      <mat-menu #menu=\"matMenu\">\n                      <button mat-menu-item (click)=\"selectRow(row)\">View</button>\n                      <button (click)=\"deleteCust(row)\" mat-menu-item>Delete</button>\n                      </mat-menu>\n                    </mat-cell>\n                  </ng-container>\n            \n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n              </mat-table>\n              <mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n          \n    </nb-card-body>\n  </nb-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/circles/editrequest/editrequest.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/circles/editrequest/editrequest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditrequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__duties_duties_service__ = __webpack_require__("./src/app/pages/duties/duties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dutychanges_dutychanges_component__ = __webpack_require__("./src/app/pages/circles/dutychanges/dutychanges.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditrequestComponent = (function () {
    function EditrequestComponent(auth, dutyService, dialog) {
        this.auth = auth;
        this.dutyService = dutyService;
        this.dialog = dialog;
        this.pageSize = 10;
        this.pageSizeOptions = [10, 15, 25, 40];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.displayedColumns = ['startDate', 'cname', 'bookBy', 'passenger', 'driver', 'dutyType', 'vehicleGroup',
            'reportingAddress', 'dropAddress', 'reportingTime', 'remarks', 'status', 'Options'];
        this.user = {};
    }
    EditrequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.dutyService.getRequestUpdateDuties(_this.user).subscribe(function (data) {
                _this.dataSource = data;
            });
        });
    };
    EditrequestComponent.prototype.selectRow = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dutychanges_dutychanges_component__["a" /* DutychangesComponent */], { autoFocus: false, disableClose: true,
            data: {
                row: row,
                valueChanges: this.valueChanges
            } });
    };
    EditrequestComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    EditrequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'editrequest',
            template: __webpack_require__("./src/app/pages/circles/editrequest/editrequest.component.html"),
            styles: [__webpack_require__("./src/app/pages/circles/editrequest/editrequest.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__duties_duties_service__["a" /* DutiesService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */]])
    ], EditrequestComponent);
    return EditrequestComponent;
}());



/***/ }),

/***/ "./src/app/pages/circles/mapping/mapping.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nb-card style=\"min-width:65vw;\">\n  <nb-card-header>\n    Incoming Request\n  </nb-card-header>\n  <nb-card-body class=\"no-overflow\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"mapping\">\n          <tr>\n            <td>\n              <b>Incoming Duty Type</b>\n            </td>\n          </tr>\n          <tr>\n            Name:{{incomingDuty.dutyType}}\n          </tr>\n          <tr>\n            Duty Type:{{supplierDutyType.dType}}\n            </tr>\n          <tr>\n            Max Hours:{{supplierDutyType.maxHrs}}\n          </tr>\n          <tr>\n            Max Kms:{{supplierDutyType.maxKms}}\n          </tr>\n          <tr>\n            Max Days:{{supplierDutyType.maxDays}}\n          </tr>\n        </div>\n      \n        <mat-divider></mat-divider>\n\n        <div class=\"mapping\">\n          <tr>\n            <b>Incoming Vehicle Group</b>\n          </tr>\n          <tr>\n            Vehicle Group:{{incomingDuty.vehicleGroup}}\n          </tr>\n        </div>\n        \n      </div>\n\n      <mat-divider [vertical]=\"true\"></mat-divider>\n\n      <div class=\"col-lg-5\">\n        <div class=\"mapping\">\n          <tr>\n            <b>Select Duty Type</b>\n          </tr>\n          <tr>\n            <td>\n              <mat-form-field>\n                <input placeholder=\"Pick one\" matInput [formControl]=\"dutyTypeCtrl\"  [matAutocomplete]=\"autoDT\">\n                <mat-autocomplete #autoDT=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of dutyType | async\" [value]=\"option.name\" (onSelectionChange)=\"setDutyType(option,$event)\">\n                    {{ option.name }}\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </td>\n            <td>\n              <p *ngIf=\"errorMatch==false\" style=\"color:red; margin-left: 5px;\"><mat-icon style=\"color:red\">warning</mat-icon>Current Duty Type is not compatiable</p>\n            </td>\n          </tr>\n          <tr>\n            <b>Selected Duty Type</b>\n          </tr>\n          <tr>\n            Max Hours:{{selectedDutyType.maxHrs}}\n          </tr>\n          <tr>\n            Max Kms:{{selectedDutyType.maxKms}}\n          </tr>\n          <tr>\n            Max Days:{{selectedDutyType.maxDays}}\n          </tr>\n        </div>\n      \n        <mat-divider></mat-divider>\n\n        <div class=\"mapping\">\n          <tr>\n            <b>Select vehicle group</b>\n          </tr>\n          <tr>\n            <mat-form-field>\n              <input placeholder=\"Pick one\" matInput [formControl]=\"vehicleGroupCtrl\"  [matAutocomplete]=\"autoVG\">\n              <mat-autocomplete #autoVG=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of vehicleGroup | async\" [value]=\"option.name\" (onSelectionChange)=\"setVehicleGroup(option,$event)\">\n                  {{ option.name }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </tr>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n\n<button mat-raised-button color=\"primary\" [disabled]=\"errorMatch==false\" (click)=\"confirmRequest()\">Confirm</button>\n<button mat-raised-button color=\"warn\" (click)=\"exit()\">Exit</button>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/circles/mapping/mapping.component.scss":
/***/ (function(module, exports) {

module.exports = ".mapping {\n  padding: 10px; }\n\n.no-overflow {\n  overflow: hidden !important; }\n"

/***/ }),

/***/ "./src/app/pages/circles/mapping/mapping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masters_dutytype_duty_type_service__ = __webpack_require__("./src/app/pages/masters/dutytype/duty-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__masters_vehiclegroups_vehiclegroups_component__ = __webpack_require__("./src/app/pages/masters/vehiclegroups/vehiclegroups.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var MappingComponent = (function () {
    function MappingComponent(dutyTypeSerice, userService, dialogRef, data, dutytypeService, vehiclegroupsService, snackbar, fb) {
        this.dutyTypeSerice = dutyTypeSerice;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dutytypeService = dutytypeService;
        this.vehiclegroupsService = vehiclegroupsService;
        this.snackbar = snackbar;
        this.fb = fb;
        this.incomingDuty = {};
        this.dutyTypes = [];
        this.vehicleGroupCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.dutyTypeCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.selectedDutyType = {};
        this.selectedVehicleGroup = {};
        this.supplierDutyType = {};
        this.errorMatch = false;
        console.log(data);
        this.incomingDuty = data.duty;
    }
    MappingComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    MappingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (data) {
            _this.user = data[0];
            _this.dutytypeService.getDutyType(_this.user).subscribe(function (data) {
                console.log(data);
                if (data.length == 0) {
                    _this.snackbar.open("Please register some dutytypes", "X", { duration: 3000 });
                    //this.matDialogRef.close();
                }
                _this.dutyTypes = data;
                _this.dutyType = _this.dutyTypeCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterDutyType(val); }));
            });
            _this.vehiclegroupsService.getvehicleGroup(_this.user).subscribe(function (data) {
                if (data.length == 0) {
                    _this.snackbar.open("Please register some vehicle groups", "X", { duration: 3000 });
                    //this.matDialogRef.close();
                }
                _this.vehicleGroups = data;
                _this.vehicleGroup = _this.vehicleGroupCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterVehicleGroup(val); }));
            });
        });
        this.incomingDutyType();
    };
    MappingComponent.prototype.incomingDutyType = function () {
        var _this = this;
        this.dutyTypeSerice.getDutyTypeofSupplier(this.incomingDuty).subscribe(function (data) {
            _this.supplierDutyType = data[0];
            console.log(_this.supplierDutyType);
        });
    };
    MappingComponent.prototype.checkDutyType = function () {
        if (this.selectedDutyType.maxHrs == this.supplierDutyType.maxHrs) {
            this.errorMatch = true;
        }
    };
    MappingComponent.prototype.setDutyType = function (temp, event) {
        console.log(event);
        if (event.source.selected == true) {
            console.log(temp);
            this.selectedDutyType = temp;
            this.errorMatch = false;
        }
        else if (event.source.selected == false) {
            this.errorMatch = false;
        }
        this.checkDutyType();
    };
    MappingComponent.prototype.setVehicleGroup = function (temp, event) {
        if (event.source.selected == true) {
            this.selectedVehicleGroup = temp;
        }
    };
    MappingComponent.prototype.filterVehicleGroup = function (val) {
        return this.vehicleGroups.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    MappingComponent.prototype.filterDutyType = function (val) {
        return this.dutyTypes.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    MappingComponent.prototype.confirmRequest = function () {
        var temp = {
            dutyType: this.selectedDutyType,
            vehicleGroup: this.selectedVehicleGroup,
            confirm: 'yes'
        };
        this.dialogRef.close(temp);
    };
    MappingComponent.prototype.exit = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], MappingComponent.prototype, "unloadHandler", null);
    MappingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mapping',
            template: __webpack_require__("./src/app/pages/circles/mapping/mapping.component.html"),
            styles: [__webpack_require__("./src/app/pages/circles/mapping/mapping.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__masters_dutytype_duty_type_service__["a" /* DutyTypeService */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__masters_dutytype_duty_type_service__["a" /* DutyTypeService */],
            __WEBPACK_IMPORTED_MODULE_6__masters_vehiclegroups_vehiclegroups_component__["a" /* VehicleGroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]])
    ], MappingComponent);
    return MappingComponent;
}());



/***/ }),

/***/ "./src/app/pages/circles/myrequests/myrequests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>My Requests</nb-card-header>\n      <nb-card-body>\n        <mat-tab-group mat-stretch-tabs>\n          <mat-tab label=\"Received\">\n            <div align=\"center\">\n        \n              <mat-form-field class=\"filter-field\">\n                <input matInput  placeholder=\"Filter\"  [(ngModel)]=\"searchTermReceived\" (keyup)=\"searchReceived($event.target.value)\">\n              </mat-form-field>\n\n              <!-- <mat-form-field class=\"filter-date\">\n                <input matInput [(ngModel)]=\"filterReceivedStart\" [matDatepicker]=\"pickerReceivedStart\" (click)=\"pickerReceivedStart.open()\" readonly placeholder=\"From\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerReceivedStart\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerReceivedStart></mat-datepicker>\n              </mat-form-field>            \n                      \n              <mat-form-field class=\"filter-date\">\n                <input matInput [(ngModel)]=\"filterReceivedEnd\" [matDatepicker]=\"pickerReceivedEnd\" (click)=\"pickerReceivedEnd.open()\" readonly placeholder=\"To\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerReceivedEnd\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerReceivedEnd></mat-datepicker>\n              </mat-form-field> -->\n            \n              <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>                                                              \n              <button matTooltip=\"Clear All\" mat-icon-button (click)=\"clearFilter()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>              \n\n            </div>\n                    \n            <mat-table [dataSource]=\"dataSourceReceived\" #sort1='matSort' matSort>\n      \n              <!-- Date Column -->\n              <ng-container matColumnDef=\"startDate\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Date</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.startDate | date: 'dd-MM-yyyy'}} </mat-cell>\n              </ng-container>\n            \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"cname\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Customer </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.ownerName}} </mat-cell>\n              </ng-container>\n      \n              <!-- Booked By Column -->\n              <ng-container matColumnDef=\"bookBy\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Booked by </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.bookBy}} </mat-cell>\n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"passenger\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Passenger</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.passenger}} </mat-cell>                \n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"driver\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Driver </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.driver}} </mat-cell>                \n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"vehicleGroup\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Vehicle Group</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.vehicleGroup}} </mat-cell>                \n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"dutyType\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Duty Type</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.dutyType}} </mat-cell>                \n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"reportingAddress\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Reporting Address</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.reportingAddress\"> {{element.shortReportingAddress}} </mat-cell>                \n              </ng-container>  \n            \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"dropAddress\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Drop Address</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.dropAddress\"> {{element.dropAddress}} </mat-cell>                \n              </ng-container>\n            \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"reportingTime\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Reporting Time</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.reportingTime}} </mat-cell>                      \n              </ng-container>\n                  \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"remarks\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Remarks</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.remarks}} </mat-cell>                \n              </ng-container>\n        \n              <!-- Symbol Column -->\n              <!-- <ng-container matColumnDef=\"requestsFrom\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Requests From</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  <mat-chip-list>\n                    <mat-chip color=\"primary\" selected=\"true\">{{element.requestsFrom}}</mat-chip>\n                  </mat-chip-list> \n                </mat-cell>                \n              </ng-container> -->\n  \n              <ng-container matColumnDef=\"Options\">\n                <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n                <mat-cell style=\"vertical-align: middle\" *matCellDef=\"let element ;let row\">\n                  <button *ngIf=\"element.requestStatus=='Requested'\" mat-icon-button color=\"primary\" (click)=\"acceptRequest(row)\">Accept</button>\n                  <button style=\"padding-left:5px\" *ngIf=\"element.requestStatus=='Requested'\"  mat-icon-button color=\"warn\" (click)=\"declineRequest(row)\">Decline</button>\n                  <div *ngIf=\"element.requestStatus=='Accepted'\"><mat-icon [matTooltip]=\"element.log\">done</mat-icon></div>\n                  <div *ngIf=\"element.requestStatus=='Declined'\"><mat-icon [matTooltip]=\"element.log\">clear</mat-icon></div>\n                </mat-cell>\n              </ng-container>\n        \n              <mat-header-row *matHeaderRowDef=\"displayedColumnsReceived\"></mat-header-row>\n              <mat-row [ngStyle]=\"{'background-color':(row.startDate===today)?'#e0e0e0':'white'}\" *matRowDef=\"let row; columns: displayedColumnsReceived;\"></mat-row>\n            </mat-table>\n            <mat-paginator #paginator1 [length]=\"lengthReceived\"\n              [pageSize]=\"pageSizeReceived\"\n              [pageSizeOptions]=\"pageSizeOptionsReceived\"></mat-paginator>\n          </mat-tab>\n          <mat-tab label=\"Sent\">\n            <div align=\"center\">\n  \n              <mat-form-field class=\"filter-field\">\n                <input matInput  placeholder=\"Filter\"  [(ngModel)]=\"searchTermSent\" (keyup)=\"searchSent($event.target.value)\">\n              </mat-form-field>\n\n              <!-- <mat-form-field class=\"filter-date\">\n                <input matInput [(ngModel)]=\"filterSentStart\" [matDatepicker]=\"pickerSentStart\" (click)=\"pickerSentStart.open()\" readonly placeholder=\"From\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerSentStart\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerSentStart></mat-datepicker>\n              </mat-form-field>            \n                      \n              <mat-form-field class=\"filter-date\">\n                <input matInput [(ngModel)]=\"filterSentEnd\" [matDatepicker]=\"pickerSentEnd\" (click)=\"pickerSentEnd.open()\" readonly placeholder=\"To\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerSentEnd\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerSentEnd></mat-datepicker>\n              </mat-form-field> -->\n            \n              <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>                                                              \n              <button matTooltip=\"Clear All\" mat-icon-button (click)=\"clearFilter()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n\n            </div>\n              \n            <mat-table [dataSource]=\"dataSourceSent\" #sort2='matSort' matSort>\n\n                <!-- Date Column -->\n              <ng-container matColumnDef=\"supplierName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Supplier Name</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.supplierName}} </mat-cell>\n              </ng-container>\n      \n                <!-- Date Column -->\n              <ng-container matColumnDef=\"startDate\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Date</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.startDate | date: 'dd-MM-yyyy'}} </mat-cell>\n              </ng-container>\n              \n                <!-- Name Column -->\n              <ng-container matColumnDef=\"cname\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Customer </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.cname}} </mat-cell>\n              </ng-container>\n      \n              <!-- Booked By Column -->\n              <ng-container matColumnDef=\"bookBy\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Booked by </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.bookBy}} </mat-cell>\n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"passenger\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Passenger</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.passenger}} </mat-cell>                \n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"driver\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Driver </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.driver}} </mat-cell>                \n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"vehicleGroup\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Vehicle Group</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.vehicleGroup}} </mat-cell>                \n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"dutyType\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Duty Type</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.dutyType}} </mat-cell>                \n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"reportingAddress\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Reporting Address</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.reportingAddress\"> {{element.shortReportingAddress}} </mat-cell>                \n              </ng-container>  \n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"dropAddress\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Drop Address</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.dropAddress\"> {{element.dropAddress}} </mat-cell>                \n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"reportingTime\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Reporting Time</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.reportingTime}} </mat-cell>                \n              </ng-container>\n                \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"remarks\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Remarks</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.remarks}} </mat-cell>                \n              </ng-container>\n      \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"status\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Status</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  <mat-chip-list>\n                    <mat-chip color=\"primary\" selected=\"true\">{{element.status}}</mat-chip>\n                  </mat-chip-list> \n                </mat-cell>                    \n              </ng-container>\n      \n              <ng-container matColumnDef=\"Options\">\n                <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n                <mat-cell style=\"vertical-align: middle\" *matCellDef=\"let element ;let row\">\n\n                </mat-cell>\n              </ng-container>\n      \n              <mat-header-row *matHeaderRowDef=\"displayedColumnsSent\"></mat-header-row>\n              <mat-row [ngStyle]=\"{'background-color':(row.startDate===today)?'#e0e0e0':'white'}\" *matRowDef=\"let row; columns: displayedColumnsSent;\"></mat-row>\n\n            </mat-table>\n            <mat-paginator #paginator2 [length]=\"lengthSent\"\n              [pageSize]=\"pageSizeSent\"\n              [pageSizeOptions]=\"pageSizeOptionsSent\"></mat-paginator>\n          </mat-tab>\n        </mat-tab-group>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/circles/myrequests/myrequests.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-column-dropAddress {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.mat-cell {\n  padding: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/circles/myrequests/myrequests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyrequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__circle_service__ = __webpack_require__("./src/app/pages/circles/circle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapping_mapping_component__ = __webpack_require__("./src/app/pages/circles/mapping/mapping.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyrequestsComponent = (function () {
    function MyrequestsComponent(circleService, auth, dialog) {
        this.circleService = circleService;
        this.auth = auth;
        this.dialog = dialog;
        this.pageSizeReceived = 10; // set default to 10
        this.pageSizeOptionsReceived = [10, 15, 25, 40];
        this.pageSizeSent = 10; // set default to 10
        this.pageSizeOptionsSent = [10, 15, 25, 40];
        this.dataSourceReceived = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.dataSourceSent = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.searchTermReceived = '';
        this.searchTermSent = '';
        this.displayedColumnsReceived = ['startDate', 'cname', 'bookBy', 'passenger', 'driver', 'dutyType', 'reportingAddress', 'dropAddress', 'reportingTime', 'remarks', 'Options'];
        this.displayedColumnsSent = ['supplierName', 'startDate', 'cname', 'bookBy', 'passenger', 'driver', 'dutyType', 'reportingAddress', 'dropAddress', 'reportingTime', 'remarks', 'status', 'Options'];
        this.user = {};
        this.permission = {};
        this.receivedArray = [];
    }
    MyrequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
                if (_this.permission.acceptDeclineDutyRequests === 0) {
                    _this.displayedColumnsReceived.pop();
                }
            });
            _this.circleService.getreceivedDuty(_this.user).subscribe(function (data) {
                console.log("Received");
                console.log(data);
                _this.receivedArray = data;
                _this.dataSourceReceived.data = _this.receivedArray;
                _this.lengthReceived = data.length;
            });
            _this.circleService.getSentDuty(_this.user).subscribe(function (data) {
                console.log("Sent");
                console.log(data);
                _this.dataSourceSent.data = data;
                _this.lengthSent = _this.dataSourceSent.data.length;
            });
        });
        this.dataSourceReceived.paginator = this.paginator1;
        this.dataSourceSent.paginator = this.paginator2;
        this.dataSourceReceived.sort = this.sort1;
        this.dataSourceSent.sort = this.sort2;
    };
    MyrequestsComponent.prototype.acceptRequest = function (row) {
        var _this = this;
        console.log(row);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__mapping_mapping_component__["a" /* MappingComponent */], { data: { duty: row }, autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data.confirm == 'yes') {
                var date = __WEBPACK_IMPORTED_MODULE_4_moment__().format("DD/MM/YYYY, hh:mm:ss a");
                var userName = _this.user.name;
                var log = "Accepted by " + userName + " on " + date;
                var temp = {
                    id: row.dutyId,
                    log: log,
                    ownerId: _this.user.ownerId,
                    companyName: row.ownerName,
                    bookBy: _this.user.name,
                    dutyType: data.dutyType.name,
                    dutyTypeId: data.dutyType.id,
                    vehicleGroup: data.vehicleGroup.name,
                    vehicleGroupId: data.vehicleGroup.id,
                    notificationOwnerId: row.ownerId,
                    notificationCompanyName: _this.user.companyName
                };
                _this.circleService.acceptDuty(temp).subscribe(function (data) {
                    var i = _this.receivedArray.indexOf(row);
                    row.log = log;
                    row.requestStatus = "Accepted";
                    _this.receivedArray.splice(i, 1, row);
                    _this.dataSourceReceived.data = _this.receivedArray;
                });
                console.log(data);
                console.log("Yo");
            }
        });
    };
    MyrequestsComponent.prototype.declineRequest = function (row) {
        var _this = this;
        var date = __WEBPACK_IMPORTED_MODULE_4_moment__().format("DD/MM/YYYY, hh:mm:ss a");
        var userName = this.user.name;
        var log = "Declined by " + userName + " on " + date;
        var temp = {
            id: row.dutyId,
            log: log
        };
        this.circleService.declineDuty(temp).subscribe(function (data) {
            var i = _this.receivedArray.indexOf(row);
            row.log = log;
            row.requestStatus = "Declined";
            _this.receivedArray.splice(i, 1, row);
            _this.dataSourceReceived.data = _this.receivedArray;
        });
    };
    MyrequestsComponent.prototype.clearFilter = function () {
        this.searchTermReceived = "";
        this.searchTermSent = "";
        this.dataSourceReceived.filter = "";
        this.dataSourceSent.filter = "";
    };
    MyrequestsComponent.prototype.searchReceived = function (filterValue) {
        this.dataSourceReceived.filter = filterValue.trim().toLowerCase();
    };
    MyrequestsComponent.prototype.searchSent = function (filterValue) {
        this.dataSourceSent.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], MyrequestsComponent.prototype, "sort1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], MyrequestsComponent.prototype, "sort2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], MyrequestsComponent.prototype, "paginator1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], MyrequestsComponent.prototype, "paginator2", void 0);
    MyrequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myrequests',
            template: __webpack_require__("./src/app/pages/circles/myrequests/myrequests.component.html"),
            styles: [__webpack_require__("./src/app/pages/circles/myrequests/myrequests.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__circle_service__["a" /* CircleService */], __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */]])
    ], MyrequestsComponent);
    return MyrequestsComponent;
}());



/***/ })

});
//# sourceMappingURL=circles.module.chunk.js.map