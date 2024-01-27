webpackJsonp(["operations.module"],{

/***/ "./src/app/pages/operations/addbooking/addbooking.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n    <nb-card-header>\n        Add Booking\n    </nb-card-header>\n    <nb-card-body>\n        <div class=\"container\">\n            <div class=\"row\">                \n                <div class=\"col-lg-8 col-12\">\n                    Customer Name:\n                    <mat-form-field class=\"w-100\">\n                        <!-- <input aria-placeholder=\"Pick one\" (change)=\"setCustomer(option)\" name=\"cname\" [(ngModel)]=\"bookings.cname\" matInput [matAutocomplete]=\"custauto\"> -->\n                        <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput [matAutocomplete]=\"custauto\" >\n                        <mat-autocomplete #custauto=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of customer |async\" [value]=\"option.name\" (onSelectionChange)=\"setCustomer(option,$event)\">\n                                {{ option.name }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div style=\"margin: auto;\">\n                    <button mat-raised-button color=\"primary\" (click)=\"addCustomer()\">Add Customer</button>\n                </div>                \n            </div>            \n          <form [formGroup]=\"bookedByForm\" class=\"w-100\">\n                <div formArrayName=\"rows\">\n                    <div class=\"row\" *ngFor=\"let aRow of bookedByForms.controls; let i=index\" [formGroupName]=\"i\">                        \n                        <div class=\"col-lg-3 col-12\">\n                            <mat-form-field>\n                                Name (Booked By)\n                                <input formControlName=\"bookByName\" matInput [matAutocomplete]=\"bookByAuto\">\n                                <mat-autocomplete #bookByAuto=\"matAutocomplete\">\n                                    <mat-option *ngFor=\"let option of bookBy |async\" [value]=\"option.name\" (onSelectionChange)=\"setBookBy(option,$event,aRow)\">\n                                        {{ option.name }}\n                                    </mat-option>\n                                </mat-autocomplete>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-3 col-12\">\n                            <mat-form-field>\n                                Phone No (Booked By)\n                                <input matInput formControlName=\"bookByNo\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-3 col-12\">\n                            <mat-form-field>\n                                Email Id (Booked By)\n                                <input matInput formControlName=\"bookByEmail\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-10\">\n                            <mat-form-field>\n                                CC ID\n                                <input matInput formControlName=\"CCID\">\n                            </mat-form-field>\n                        </div>                \n                        <div class=\"col-lg-1 col-2\">\n                            <button mat-icon-button color=\"primary\" *ngIf=\"i>0\" (click)=\"deleteBookedBy(i)\"> <mat-icon>clear</mat-icon></button>\n                        </div>\n                    </div>\n                </div>                \n            </form>\n            <div class=\"row pb-10\">\n                <div class=\"col-lg-12 col-12\">\n                    <button mat-raised-button color=\"primary\" (click)=\"addBookedBy()\" style=\"float:right; margin: 5px;\">Add Booked By</button>\n                </div>                \n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n<nb-card>\n    <nb-card-header>Guests</nb-card-header>\n    <nb-card-body>\n        <div class=\"row\" style=\"padding:15px\">\n            <form [formGroup]=\"myForm\" class=\"w-100\">\n                <div formArrayName=\"rows\">                    \n                    <div class=\"row\" *ngFor=\"let aRow of passengerForms.controls; let i=index\" [formGroupName]=\"i\">\n                        <div class=\"col-lg-1 col-2\">\n                            <br>\n                            {{i+1}}\n                        </div>\n                        <div class=\"col-lg-3 col-10\">\n                            <mat-form-field>\n                                <input matInput formControlName=\"passenger\" (keypress)=\"filterPass(i)\" [matAutocomplete]=\"passengerAuto\" placeholder=\"Name\">\n                                <mat-autocomplete #passengerAuto=\"matAutocomplete\">\n                                    <mat-option *ngFor=\"let element of passengers | async\" [value]=\"element.name\" (onSelectionChange)=\"setPassenger(element,$event,aRow)\">\n                                        {{element.name}}\n                                    </mat-option>\n                                </mat-autocomplete>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-3 col-5\">\n                            <mat-form-field class=\"w-100\">\n                                <input matInput formControlName=\"passengerNo\" placeholder=\"Phone No\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-3 col-5\">\n                            <mat-form-field class=\"w-100\">\n                                <input matInput formControlName=\"passengerEmail\" placeholder=\"Email Id\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-2\">\n                            <br>\n                            <button mat-icon-button color=\"primary\" *ngIf=\"i>0\" (click)=\"deleteRow(i)\"> <mat-icon>clear</mat-icon></button>\n                        </div>\n                    </div>                    \n                </div>\n            </form>                 \n            <div class=\"row ptb-10\">\n                <div class=\"col-lg-12 col-12\">\n                    <button mat-raised-button color=\"primary\" (click)=\"addRow()\" style=\"float:right; margin: 5px;\">Add More Guests</button>\n                </div>                \n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n<nb-card>\n    <nb-card-body>\n        <div class=\"container\">            \n            <div class=\"row\">\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        From\n                        <!-- <input placeholder=\"Pick one\" matInput [(ngModel)]=\"bookings.fromLoc\" (change)=\"setCity(option)\" [matAutocomplete]=\"auto1\"> -->\n                        <input matInput [formControl]=\"fromCityCtrl\"  [matAutocomplete]=\"auto1\">\n                        <mat-autocomplete #auto1=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of fromCity | async\" [value]=\"option\" (onSelectionChange)=\"fromCitySelect(option,$event)\">\n                                {{ option }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        To\n                        <input matInput [formControl]=\"toCityCtrl\" [matAutocomplete]=\"auto2\">\n                        <mat-autocomplete #auto2=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of toCity | async\" [value]=\"option\" (onSelectionChange)=\"toCitySelect(option,$event)\">\n                                {{ option }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        Vehicle Group*\n                        <!-- <input placeholder=\"Pick one\" matInput [(ngModel)]=\"bookings.vehicleGroup\" (change)=\"setVehicleGroup(option)\" [matAutocomplete]=\"autoVG\"> -->\n                        <input matInput [formControl]=\"vehicleGroupCtrl\"  [matAutocomplete]=\"autoVG\">\n                        <mat-autocomplete #autoVG=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of vehicleGroup | async\" [value]=\"option.name\" (onSelectionChange)=\"setVehicleGroup(option,$event)\">\n                                {{ option.name }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        Duty Type*\n                        <!-- <input placeholder=\"Pick one\" matInput [(ngModel)]=\"bookings.dutyType\" (change)=\"setDutyType(option)\" [matAutocomplete]=\"autoDT\"> -->\n                        <input matInput [formControl]=\"dutyTypeCtrl\"  [matAutocomplete]=\"autoDT\">\n                        <mat-autocomplete #autoDT=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of dutyType | async\" [value]=\"option.name\" (onSelectionChange)=\"setDutyType(option,$event)\">\n                                {{ option.name }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>                \n            </div>                      \n            <div class=\"row\">\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field class=\"w-100\">\n                        Start Date\n                        <input matInput [(ngModel)]=\"bookings.startDate\" [matDatepicker]=\"startDate\" (click)=\"startDate.open()\" readonly name=\"startDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #startDate></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field class=\"w-100\">\n                        End Date\n                        <input matInput [(ngModel)]=\"bookings.endDate\" [matDatepicker]=\"endDate\" [min]=\"bookings.startDate\" (click)=\"endDate.open()\" readonly name=\"endDate\">         \n                        <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #endDate></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        Reporting Time\n                        <input type=\"time\" matInput [(ngModel)]=\"bookings.reportingTime\" name=\"reportingTime\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        Start From Garage before(in mins)\n                        <input matInput [(ngModel)]=\"bookings.startFromGarage\" name=\"startFromGarage\">\n                    </mat-form-field>\n                </div>\n            </div>            \n            <div class=\"row\">\n                <!-- <div class=\"col-lg-3 col-12\">\n                    \n                </div> -->\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        Extra Kms\n                        <input matInput #bookedEmail  name=\"bookByEmail\" [(ngModel)]=\"bookings.extraKms\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        Extra Hours\n                        <input matInput #bookedEmail  name=\"bookByEmail\" [(ngModel)]=\"bookings.extraHours\">\n                    </mat-form-field>\n                    </div>\n                <div class=\"col-lg-3 col-8\">\n                    <mat-form-field>\n                        Rate:\n                        <input matInput name=\"price\" [(ngModel)]=\"bookings.price\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-4\">\n                    <br>\n                    <button mat-raised-button color=\"primary\" (click)=\"getPrice()\">Get Cost</button>\n                </div>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n<nb-card>\n    <nb-card-body>\n        <div class=\"container\">           \n            <div class=\"row\">\n                <div class=\"col-lg-6 col-12\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-12 col-12\">\n                            <h5>\n                                Reporting Address \n                                <mat-slide-toggle (change)=\"reportingAddressChange($event)\" style=\"float:right\">Google Maps</mat-slide-toggle>\n                            </h5>\n                            <mat-form-field *ngIf=\"reportingAddressMaps==false\" class=\"w-100\">\n                                <textarea rows=\"4\" matInput placeholder=\"Reporting Address\" [(ngModel)]=\"bookings.reportingAddress\"></textarea>\n                            </mat-form-field>\n                            <mat-form-field [hidden]=\"reportingAddressMaps==false\" class=\"w-100\">\n                                <input matInput placeholder=\"Reporting Address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #searchReporting [(ngModel)]=\"bookings.reportingAddress\" (change)=\"setReportingAddress($event.target.value)\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12 col-12\">\n                            <agm-map (mapClick)=\"mapClickedReporting($event)\" [hidden]=\"reportingAddressMaps==false\" [latitude]=\"latitudeReporting\" [longitude]=\"longitudeReporting\" [scrollwheel]=\"false\" [zoom]=\"zoom\" [streetViewControl]=\"false\">\n                                <agm-marker \n                                    [latitude]=\"latitudeReporting\"\n                                    [longitude]=\"longitudeReporting\"\n                                    [markerDraggable]=\"reportingDraggable\"\n                                    (dragEnd)=\"markerReportingDragEnd($event)\">\n                                    <agm-info-window>\n                                        <strong>Reporting Address</strong>\n                                    </agm-info-window>            \n                                </agm-marker>\n                            </agm-map>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-12\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-12 col-12\">\n                            <h5>\n                                Drop Address\n                                <mat-slide-toggle (change)=\"dropAddressChange($event)\" style=\"float:right\">Google Maps</mat-slide-toggle>\n                            </h5>\n                            <mat-form-field *ngIf=\"dropAddressMaps==false\" class=\"w-100\">\n                                <textarea rows=\"4\" matInput placeholder=\"Drop Address\" [(ngModel)]=\"bookings.dropAddress\"></textarea>\n                            </mat-form-field>\n                            <mat-form-field [hidden]=\"dropAddressMaps==false\" class=\"w-100\">\n                                <input matInput placeholder=\"Drop Address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #searchDrop [(ngModel)]=\"bookings.dropAddress\" (change)=\"setDropAddress($event.target.value)\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12 col-12\">\n                            <agm-map (mapClick)=\"mapClickedDrop($event)\" [hidden]=\"dropAddressMaps==false\" [latitude]=\"latitudeDrop\" [longitude]=\"longitudeDrop\" [scrollwheel]=\"false\" [zoom]=\"zoom\" [streetViewControl]=\"false\">\n                                <agm-marker \n                                    [latitude]=\"latitudeDrop\"\n                                    [longitude]=\"longitudeDrop\"\n                                    [markerDraggable]=\"dropDraggable\"\n                                    (dragEnd)=\"markerDropDragEnd($event)\">\n                                    <agm-info-window>\n                                        <strong>Drop Address</strong>\n                                    </agm-info-window>            \n                                </agm-marker>\n                            </agm-map>\n                        </div>\n                    </div>   \n                </div>\n            </div>            \n            <div class=\"row\">\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field matTooltip=\"Displayed in Duties\">\n                        Short Reporting Address\n                        <input matInput name=\"shortReportingAddress\" [(ngModel)]=\"bookings.shortReportingAddress\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        Dispatch Center\n                        <input matInput [matAutocomplete]=\"dispatchCenter\" [(ngModel)]=\"bookings.dispatchCenter\" [formControl]=\"branchCtrl\">\n                        <mat-autocomplete #dispatchCenter=\"matAutocomplete\">\n                        <mat-option *ngFor=\"let element of branch | async\" [value]=\"element.name\" (onSelectionChange)=\"setDispatchCenter(element,$event)\">\n                            {{element.name}}\n                        </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        Flight/Train Number\n                        <input matInput [(ngModel)]=\"bookings.flightTrainNo\" name=\"flightTrainNo\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                    <mat-form-field>\n                        PO Number\n                        <input matInput #bookedEmail  name=\"bookByEmail\" [(ngModel)]=\"bookings.poNumber\">\n                    </mat-form-field>\n                    <!-- <mat-form-field>\n                        Bill To\n                        <mat-select [(ngModel)]=\"bookings.billTo\" name=\"billTo\">\n                            <mat-option value=\"option\">Option</mat-option>\n                        </mat-select>\n                    </mat-form-field> -->\n                </div>\n            </div>            \n            <div class=\"row\">\n                <div class=\"col-lg-6 col-12\">\n                    <mat-form-field class=\"w-100\">\n                        Remarks\n                        <textarea matInput name=\"Remarks\"[(ngModel)]=\"bookings.remarks\"></textarea>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-6 col-12\">\n                    <mat-form-field class=\"w-100\">\n                        Additional Notes\n                        <textarea matInput name=\"operatorNotes\"[(ngModel)]=\"bookings.operatorNotes\"></textarea>\n                    </mat-form-field>\n                </div>                        \n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12 col-12\">\n                    <mat-checkbox [(ngModel)]=\"bookings.unconfirmed\"> Mark as unconfirmed booking</mat-checkbox>\n                </div>\n            </div>\n            <div class=\"row ptb-10\">\n                <div class=\"col-lg-12 col-12\">\n                    <button mat-raised-button color=\"primary\" (click)=\"addBooking()\">Add</button>\n                </div>\n            </div>\n        </div>                \n    </nb-card-body>\n</nb-card>\n                    \n                              "

/***/ }),

/***/ "./src/app/pages/operations/addbooking/addbooking.component.scss":
/***/ (function(module, exports) {

module.exports = ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 100px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n\ninput[type=date]::-webkit-inner-spin-button,\ninput[type=date]::-webkit-outer-spin-button {\n  -webkit-appearance: none; }\n\ntable {\n  width: 100%; }\n\nagm-map {\n  height: 150px !important;\n  width: 100%;\n  /* This is really important*/ }\n"

/***/ }),

/***/ "./src/app/pages/operations/addbooking/addbooking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masters_vehiclegroups_vehiclegroups_component__ = __webpack_require__("./src/app/pages/masters/vehiclegroups/vehiclegroups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__duties_duties_service__ = __webpack_require__("./src/app/pages/duties/duties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__masters_dutytype_duty_type_service__ = __webpack_require__("./src/app/pages/masters/dutytype/duty-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__masters_pricing_pricing_service__ = __webpack_require__("./src/app/pages/masters/pricing/pricing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new_branch_new_branch_service__ = __webpack_require__("./src/app/pages/operations/new-branch/new-branch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__date_confirm_date_confirm_component__ = __webpack_require__("./src/app/pages/operations/date-confirm/date-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__masters_new_employees_employee_service__ = __webpack_require__("./src/app/pages/masters/new-employees/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__addcustomerinbooking_addcustomerinbooking_component__ = __webpack_require__("./src/app/pages/operations/addcustomerinbooking/addcustomerinbooking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















// import { LatLng, LatLngBounds } from 'googlemaps'
var AddbookingComponent = (function () {
    function AddbookingComponent(snackbar, fb, bookingService, dutiesService, vehiclegroupsService, dutytypeService, dialog, customerService, pricingService, auth, branchService, router, mapsAPILoader, ngZone, employeeService) {
        this.snackbar = snackbar;
        this.fb = fb;
        this.bookingService = bookingService;
        this.dutiesService = dutiesService;
        this.vehiclegroupsService = vehiclegroupsService;
        this.dutytypeService = dutytypeService;
        this.dialog = dialog;
        this.customerService = customerService;
        this.pricingService = pricingService;
        this.auth = auth;
        this.branchService = branchService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.employeeService = employeeService;
        //MAPS API
        this.reportingDraggable = true;
        this.dropDraggable = true;
        this.deletedPassenger = [];
        this.deletedBookedBy = [];
        this.bookings = {};
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.branchCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.passenger = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.passengerEmail = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.passengerNo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.reportingAddressMaps = false;
        this.dropAddressMaps = false;
        this.bookByCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.passengerArr = [];
        this.fromCityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.toCityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.vehicleGroupCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.dutyTypeCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.user = {};
        this.isBookingMonthly = false;
        this.dutyArray = [];
        this.city = [];
        // getPassenger()
        // {
        //   this.passengerList=[]
        //   this.bookingService.getPassenger(this.data.row.id).subscribe(
        //     data=>
        //   {
        //     data.forEach(element => {
        //       const row=this.fb.group({
        //         id:element.id,
        //         passenger:element.passenger,
        //         passengerEmail:element.passengerEmail,
        //         passengerNo:element.passengerNo
        //       })
        //       this.passengerForms.push(row);
        //     });
        //   }
        //   )
        // }
        this.monthlyBookings = {
            booking: {},
            duties: [],
            passenger: [],
            bookedBy: [],
        };
        // setCity(temp:any,event:any)
        // {
        //   if(event.source.selected==true)
        //   {
        //     this.temp2.city=temp
        //   }
        // }
        this.temp2 = {
            city: '',
            vehicleGroupId: '',
            customerId: '',
            dutyTypeId: ''
        };
        this.param = {
            inserted: 'no',
            data: null
        };
        this.temp = {
            status: 'Booked',
            cname: '',
            passenger: '',
            vehicleGroup: '',
            dutyType: '',
            bookBy: '',
            bookByNo: '',
            bookByEmail: '',
            ccId: '',
            passengerNo: '',
            passengerEmail: '',
            fromLoc: '',
            toLoc: '',
            startDate: null,
            endDate: null,
            reportingTime: '',
            startFromGarage: '',
            reportingAddress: '',
            dropAddress: '',
            shortReportingAddress: '',
            flightTrainNo: '',
            dispatchCenter: '',
            dispatchCenterId: null,
            billTo: '',
            price: '',
            remarks: '',
            operatorNotes: '',
            label: '',
            vehicleGroupId: '',
            customerId: '',
            poNumber: '',
            extraHours: '0',
            extraKms: '0'
        };
    }
    AddbookingComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    AddbookingComponent.prototype.mapClickedReporting = function (event) {
        this.latitudeReporting = event.coords.lat;
        this.longitudeReporting = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: 'in' } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.reportingAddress = (results[0].formatted_address);
                console.log(results[0].formatted_address);
            }
        }.bind(this));
    };
    AddbookingComponent.prototype.markerReportingDragEnd = function (event) {
        this.latitudeReporting = event.coords.lat;
        this.longitudeReporting = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: 'in' } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.reportingAddress = (results[0].formatted_address);
                console.log(results[0].formatted_address);
            }
        }.bind(this));
    };
    AddbookingComponent.prototype.mapClickedDrop = function (event) {
        this.latitudeDrop = event.coords.lat;
        this.longitudeDrop = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: 'in' } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.dropAddress = (results[0].formatted_address);
            }
        }.bind(this));
    };
    AddbookingComponent.prototype.markerDropDragEnd = function (event) {
        this.latitudeDrop = event.coords.lat;
        this.longitudeDrop = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: 'in' } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.dropAddress = (results[0].formatted_address);
            }
        }.bind(this));
    };
    AddbookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.searchControl = new FormControl();
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.bookings.ownerID = data[0].ownerID;
            _this.getCustomer();
            _this.getCities();
            _this.getDutyTypes();
            _this.getVehicleGroups();
            if (_this.user.type == 'employee') {
                var body = {
                    userId: _this.user.id
                };
                _this.employeeService.getEmployeeForCustomer(body).subscribe(function (data) {
                    _this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(function (data) {
                        if (data.length != 0) {
                            _this.customers = data;
                            _this.customer = _this.customerCtrl.valueChanges
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
                        }
                        else {
                            _this.getCustomer();
                        }
                    });
                });
            }
            else {
                _this.getCustomer();
            }
            _this.branchService.getBranches(_this.user).subscribe(function (data) {
                _this.branches = data;
                _this.branch = _this.branchCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterBranch(val); }));
            });
        });
        this.auth.businessSettings.subscribe(function (data) {
            _this.businessSettings = data;
            if (data.DefaultStartFromGarage != '') {
                _this.bookings.startFromGarage = data.DefaultStartFromGarage;
            }
            if (data.defaultCity != '') {
                _this.fromCityCtrl.setValue(data.defaultCity);
                _this.toCityCtrl.setValue(data.defaultCity);
            }
        });
        this.myForm = this.fb.group({
            rows: this.fb.array([])
        });
        this.bookedByForm = this.fb.group({
            rows: this.fb.array([])
        });
        this.addRow();
        this.addBookedBy();
        //filters
        //Maps 
        //set google maps defaults
        this.zoom = 4;
        this.latitudeReporting = 39.8282;
        this.longitudeReporting = -98.5795;
        this.latitudeDrop = 39.8282;
        this.longitudeDrop = -98.5795;
        //create search FormControl
        this.searchControlDrop = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.searchControlReporting = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        var options = {
            componentRestrictions: { country: "in" }
        };
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocompleteReporting = new google.maps.places.Autocomplete(_this.searchReportingRef.nativeElement, options);
            var autocompleteDrop = new google.maps.places.Autocomplete(_this.searchDropRef.nativeElement, options);
            autocompleteReporting.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocompleteReporting.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitudeReporting = place.geometry.location.lat();
                    _this.longitudeReporting = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
            autocompleteDrop.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocompleteDrop.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitudeDrop = place.geometry.location.lat();
                    _this.longitudeDrop = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
            _this.bookings.startDate = (new Date()).toISOString();
            _this.bookings.endDate = (new Date()).toISOString();
            // this.fromCityCtrl.setValue('Mumbai');
        });
    };
    AddbookingComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers(this.user).subscribe(function (data) {
            _this.customers = data;
            _this.customer = _this.customerCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
        });
    };
    AddbookingComponent.prototype.getCities = function () {
        this.city = [
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
    };
    AddbookingComponent.prototype.filterCities = function () {
        var _this = this;
        this.fromCity = this.fromCityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterFromCity(val); }));
        this.toCity = this.toCityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterToCity(val); }));
    };
    AddbookingComponent.prototype.getVehicleGroups = function () {
        var _this = this;
        this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(function (data) {
            if (data.length == 0) {
                _this.snackbar.open("Please register some vehicle groups", "X", { duration: 3000 });
                //this.matDialogRef.close();
            }
            _this.vehicleGroups = data;
            _this.vehicleGroup = _this.vehicleGroupCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterVehicleGroup(val); }));
        });
    };
    AddbookingComponent.prototype.getDutyTypes = function () {
        var _this = this;
        this.dutytypeService.getDutyType(this.user).subscribe(function (data) {
            if (data.length == 0) {
                _this.snackbar.open("Please register some dutytypes", "X", { duration: 3000 });
            }
            console.log(data);
            _this.dutyTypes = data;
            _this.dutyType = _this.dutyTypeCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterDutyType(val); }));
        });
    };
    AddbookingComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitudeReporting = position.coords.latitude;
                _this.longitudeReporting = position.coords.longitude;
                _this.latitudeDrop = position.coords.latitude;
                _this.longitudeDrop = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    AddbookingComponent.prototype.reportingAddressChange = function (temp) {
        if (temp.checked == true) {
            this.reportingAddressMaps = true;
        }
        else if (temp.checked == false) {
            this.reportingAddressMaps = false;
        }
    };
    AddbookingComponent.prototype.dropAddressChange = function (temp) {
        if (temp.checked == true) {
            this.dropAddressMaps = true;
        }
        else if (temp.checked == false) {
            this.dropAddressMaps = false;
        }
    };
    AddbookingComponent.prototype.filterFromCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddbookingComponent.prototype.filterToCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddbookingComponent.prototype.filterVehicleGroup = function (val) {
        return this.vehicleGroups.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddbookingComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddbookingComponent.prototype.filterDutyType = function (val) {
        return this.dutyTypes.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddbookingComponent.prototype.filterBranch = function (val) {
        return this.branches.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddbookingComponent.prototype.filterBookBy = function (val) {
        return this.bookByArr.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddbookingComponent.prototype.fromCitySelect = function (option, event) {
        if (event.source.selected == true) {
            this.bookings.fromLoc = option;
            this.temp2.city = option;
        }
    };
    AddbookingComponent.prototype.toCitySelect = function (option, event) {
        if (event.source.selected == true) {
            this.bookings.toLoc = option;
        }
    };
    AddbookingComponent.prototype.setBookBy = function (option, event, element) {
        if (event.source.selected == true) {
            element.get('bookByName').setValue(option.name);
            element.get('bookByNo').setValue(option.phoneNo);
            element.get('bookByEmail').setValue(option.emailId);
            element.get('CCID').setValue(option.CCID);
        }
    };
    AddbookingComponent.prototype.setPassenger = function (option, event, element) {
        if (event.source.selected == true) {
            element.get('passenger').setValue(option.name);
            element.get('passengerNo').setValue(option.phoneNo);
            element.get('passengerEmail').setValue(option.emailId);
        }
    };
    AddbookingComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    Object.defineProperty(AddbookingComponent.prototype, "passengerForms", {
        get: function () {
            return this.myForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddbookingComponent.prototype, "bookedByForms", {
        get: function () {
            return this.bookedByForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    AddbookingComponent.prototype.addRow = function () {
        var row = this.fb.group({
            id: '',
            passenger: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            passengerEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            passengerNo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.passengerForms.push(row);
    };
    AddbookingComponent.prototype.deleteRow = function (i) {
        this.passengerForms.removeAt(i);
    };
    AddbookingComponent.prototype.addBookedBy = function () {
        var row = this.fb.group({
            id: '',
            bookByName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            bookByNo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            bookByEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            CCID: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
        });
        this.bookedByForms.push(row);
    };
    AddbookingComponent.prototype.deleteBookedBy = function (i) {
        this.bookedByForms.removeAt(i);
    };
    AddbookingComponent.prototype.deleteBooking = function (row) {
        this.bookingService.deleteBooking(row);
    };
    AddbookingComponent.prototype.addBooking = function () {
        var _this = this;
        console.log(this.bookings);
        if (this.dropAddressMaps == true) {
            this.bookings.dropAddress = this.searchDropRef.nativeElement.value;
        }
        if (this.reportingAddressMaps == true) {
            this.bookings.reportingAddress = this.searchReportingRef.nativeElement.value;
        }
        this.bookings.startDate = __WEBPACK_IMPORTED_MODULE_13_moment__(this.bookings.startDate).format("YYYY-MM-DD");
        this.bookings.endDate = __WEBPACK_IMPORTED_MODULE_13_moment__(this.bookings.endDate).format("YYYY-MM-DD");
        if (this.bookings.startDate != this.bookings.endDate) {
            this.isBookingMonthly = true;
            console.log(this.bookings.startDate, "ah", this.bookings.endDate);
            if (this.bookings.unconfirmed != true) {
                console.log("Cehck");
                this.bookings.unconfirmed = false;
            }
        }
        if (this.isBookingMonthly === true && this.bookings.unconfirmed === false) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_15__date_confirm_date_confirm_component__["a" /* DateConfirmComponent */], { data: { booking: this.bookings }, autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
                console.log(data);
                if (data === undefined || data === '') {
                    _this.isBookingMonthly = false;
                }
                else {
                    console.log("Monthly CLLLED");
                    if (data[data.length - 1].startDate != _this.bookings.endDate) {
                        _this.bookings.endDate = data[data.length - 1].startDate;
                    }
                    console.log(_this.bookings);
                    _this.monthlyBookings.duties = data;
                    _this.insertBooking();
                }
            });
        }
        else {
            console.log("Called");
            this.insertBooking();
        }
    };
    AddbookingComponent.prototype.insertBooking = function () {
        var _this = this;
        var temp = this.myForm.get('rows');
        var temp2 = this.bookedByForm.get('rows');
        console.log(this.bookByArr);
        console.log(temp2.value);
        temp2.value.forEach(function (element) {
            if (_this.bookByArr.findIndex(function (x) { return x.name.toLowerCase() == element.bookByName.toLowerCase(); }) == -1) {
                _this.bookingService.addRecurringBookedBy({
                    name: element.bookByName,
                    phoneNo: element.bookByNo,
                    emailId: element.bookByEmail,
                    ownerId: _this.user.ownerId,
                    customerId: _this.bookings.customerId,
                }).subscribe(function (data) { return data; });
            }
        });
        temp.value.forEach(function (element) {
            if (_this.passengerArr.findIndex(function (x) { return x.name.toLowerCase() == element.passenger.toLowerCase(); }) == -1) {
                _this.bookingService.addRecurringPassenger({
                    name: element.passenger,
                    phoneNo: element.passengerNo,
                    emailId: element.passengerEmail,
                    ownerId: _this.user.ownerId,
                    customerId: _this.bookings.customerId,
                }).subscribe(function (data) { return data; });
            }
        });
        var bookingData = {
            booking: {},
            passenger: [],
            bookedBy: [],
        };
        var tempid;
        this.bookings.status = 'Booked';
        if (this.passengerForms.controls[0] != undefined) {
            this.bookings.passenger = this.passengerForms.controls[0].value.passenger;
            this.bookings.passengerNo = this.passengerForms.controls[0].value.passengerNo;
            this.bookings.passengerEmail = this.passengerForms.controls[0].value.passengerEmail;
            if (this.passengerForms.controls.length > 1)
                this.bookings.passenger = this.bookings.passenger + "+" + (this.passengerForms.controls.length - 1);
        }
        if (this.bookedByForms.controls[0] != undefined) {
            this.bookings.bookBy = this.bookedByForms.controls[0].value.bookByName;
            this.bookings.bookByNo = this.bookedByForms.controls[0].value.bookByNo;
            this.bookings.bookByEmail = this.bookedByForms.controls[0].value.bookByEmail;
            this.bookings.ccId = this.bookedByForms.controls[0].value.CCID;
            if (this.bookedByForms.controls.length > 1) {
                this.bookings.bookBy = this.bookings.bookBy + "+" + (this.bookedByForms.controls.length - 1);
            }
        }
        this.getVehicleGroup(this.bookings.vehicleGroup, this.user.ownerId).subscribe(function (data) {
            if (data.length != 0) {
                _this.bookings.vehicleGroupId = data[0].id;
                _this.getDutyType(_this.bookings.dutyType, _this.user.ownerId).subscribe(function (data) {
                    if (data.length != 0) {
                        if (_this.isBookingMonthly && _this.bookings.unconfirmed === false) {
                            _this.bookings.dutyTypeId = data[0].id;
                            _this.monthlyBookings.booking = _this.bookings;
                            _this.monthlyBookings.passenger = temp.value;
                            _this.monthlyBookings.bookedBy = temp2.value;
                        }
                        else {
                            _this.bookings.dutyTypeId = data[0].id;
                            bookingData.booking = _this.bookings;
                            bookingData.passenger = temp.value;
                            bookingData.bookedBy = temp2.value;
                        }
                        if ((_this.bookings.price == '' && _this.businessSettings.AllowBookingsToBeAddedWithoutAnyPricing == true)) {
                            _this.bookings.price = null;
                            console.log(_this.bookings);
                            if (_this.isBookingMonthly === true && _this.bookings.unconfirmed === false) {
                                _this.bookingService.addMonthlyBooking(_this.monthlyBookings);
                            }
                            if (_this.bookings.unconfirmed == true && _this.isBookingMonthly == true) {
                                // this.bookingService.addUnconfirmedBooking(bookingData)
                                _this.bookingService.addUnconfirmedMonthlyBooking(bookingData);
                            }
                            if (_this.bookings.unconfirmed == true && _this.isBookingMonthly == false) {
                                _this.bookingService.addUnconfirmedBooking(bookingData);
                            }
                            else {
                                _this.bookingService.addBooking(bookingData);
                            }
                        }
                        else if (_this.bookings.price != '') {
                            console.log(bookingData);
                            if (_this.isBookingMonthly === true && _this.bookings.unconfirmed === false) {
                                _this.bookingService.addMonthlyBooking(_this.monthlyBookings);
                            }
                            if (_this.bookings.unconfirmed == true) {
                                _this.bookingService.addUnconfirmedBooking(bookingData);
                            }
                            else {
                                _this.bookingService.addBooking(bookingData);
                            }
                        }
                        else {
                            _this.snackbar.open("Rate cannot be empty", "X", { duration: 3000 });
                        }
                    }
                    else {
                        _this.snackbar.open("Choose a valid Duty Type", "X", { duration: 3000 });
                    }
                });
            }
            else {
                _this.snackbar.open("Choose a valid vehicle group", "X", { duration: 3000 });
            }
            //this.defaltVal();
        });
    };
    AddbookingComponent.prototype.setReportingAddress = function (temp) {
        this.bookings.reportingAddress = temp;
    };
    AddbookingComponent.prototype.setDropAddress = function (temp) {
        this.bookings.dropAddress = temp;
    };
    AddbookingComponent.prototype.setCustomer = function (temp, event) {
        var _this = this;
        if (event.source.selected == true) {
            this.bookings.cname = temp.name;
            this.temp2.customerId = temp.id;
            this.bookings.customerId = temp.id;
            var tempCust = {
                ownerId: this.user.ownerId,
                customerId: temp.id
            };
            this.bookingService.getRecurringBookedBy(tempCust).subscribe(function (data) {
                _this.bookByArr = data;
                _this.bookBy = _this.bookByCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterBookBy(val); }));
            });
            this.bookingService.getRecurringPassenger(tempCust).subscribe(function (data) {
                if (data != null) {
                    _this.passengerArr = data;
                    _this.passengers = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(_this.passengerArr);
                }
                else {
                    _this.passengerArr = [];
                    _this.passengers = Object(__WEBPACK_IMPORTED_MODULE_17_rxjs_observable_empty__["a" /* empty */])();
                }
            });
            this.customerService.getCustomerLimitCity(temp).subscribe(function (data) {
                if (data.length != 0) {
                    _this.city.length = 0;
                    data.forEach(function (element) {
                        _this.city.push(element.city);
                    });
                }
                else {
                    _this.getCities();
                }
            }, function (err) { }, function () {
                _this.filterCities();
            });
            this.customerService.getCustomerLimitVehicleGroupForBookings(temp).subscribe(function (data) {
                if (data.length != 0) {
                    _this.vehicleGroups = data;
                    _this.vehicleGroup = _this.vehicleGroupCtrl.valueChanges
                        .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterVehicleGroup(val); }));
                }
                else {
                    _this.getVehicleGroups();
                }
            });
            this.customerService.getCustomerLimitDutyTypeForBookings(temp).subscribe(function (data) {
                if (data.length != 0) {
                    _this.dutyTypes = data;
                    _this.dutyType = _this.dutyTypeCtrl.valueChanges
                        .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterDutyType(val); }));
                }
                else {
                    _this.getDutyTypes();
                }
            });
        }
    };
    AddbookingComponent.prototype.filterPass = function (i) {
        var _this = this;
        if (this.passengerArr.length > 0) {
            this.passengers = this.passengerForms.at(i).get('passenger').valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterPassenger(val); }));
        }
    };
    AddbookingComponent.prototype.filterPassenger = function (val) {
        return this.passengerArr.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddbookingComponent.prototype.setVehicleGroup = function (temp, event) {
        console.log(temp);
        if (event.source.selected == true) {
            this.temp2.vehicleGroupId = temp.id;
            this.bookings.vehicleGroup = temp.name;
            this.bookings.vehicleGroupId = temp.id;
        }
    };
    AddbookingComponent.prototype.setDispatchCenter = function (temp, event) {
        if (event.source.selected == true) {
            this.temp2.vehicleGroupId = temp.id;
            this.bookings.dispatchCenter = temp.name;
            this.bookings.dispatchCenterId = temp.id;
            console.log(this.bookings.dispatchCenterId);
        }
    };
    AddbookingComponent.prototype.setDutyType = function (temp, event) {
        if (event.source.selected == true) {
            this.temp2.dutyTypeId = temp.id;
            this.bookings.dutyType = temp.name;
            this.bookings.dutyTypeId = temp.id;
            if (temp.dType == "Long Duration-Total KM Daily HR(Monthly Bookings)" || temp.dType == "Long Duration-Total KM and HR(Monthly Bookings)") {
                this.isBookingMonthly = true;
            }
            else if (temp.dType == "Day-KM(Outstation)") {
                this.isBookingMonthly = false;
            }
            else {
                this.isBookingMonthly = false;
            }
        }
    };
    AddbookingComponent.prototype.addCustomer = function () {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_19__addcustomerinbooking_addcustomerinbooking_component__["a" /* AddcustomerinbookingComponent */], { disableClose: true, autoFocus: false }).afterClosed().subscribe(function (data) {
            console.log(data);
            _this.getCustomer();
            _this.customerCtrl.setValue(data.name);
            _this.setCustomerByAddCustomer(data);
        });
    };
    AddbookingComponent.prototype.setCustomerByAddCustomer = function (temp) {
        var _this = this;
        this.bookings.cname = temp.name;
        this.temp2.customerId = temp.id;
        this.bookings.customerId = temp.id;
        var tempCust = {
            ownerId: this.user.ownerId,
            customerId: temp.id
        };
        this.bookingService.getRecurringBookedBy(tempCust).subscribe(function (data) {
            _this.bookByArr = data;
            _this.bookBy = _this.bookByCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterBookBy(val); }));
        });
        this.bookingService.getRecurringPassenger(tempCust).subscribe(function (data) {
            if (data != null) {
                _this.passengerArr = data;
                _this.passengers = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(_this.passengerArr);
            }
            else {
                _this.passengerArr = [];
                _this.passengers = Object(__WEBPACK_IMPORTED_MODULE_17_rxjs_observable_empty__["a" /* empty */])();
            }
        });
        this.customerService.getCustomerLimitCity(temp).subscribe(function (data) {
            if (data.length != 0) {
                _this.city.length = 0;
                data.forEach(function (element) {
                    _this.city.push(element.city);
                });
            }
            else {
                _this.getCities();
            }
        }, function (err) { }, function () {
            _this.filterCities();
        });
        this.customerService.getCustomerLimitVehicleGroupForBookings(temp).subscribe(function (data) {
            if (data.length != 0) {
                _this.vehicleGroups = data;
                _this.vehicleGroup = _this.vehicleGroupCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterVehicleGroup(val); }));
            }
            else {
                _this.getVehicleGroups();
            }
        });
        this.customerService.getCustomerLimitDutyTypeForBookings(temp).subscribe(function (data) {
            if (data.length != 0) {
                _this.dutyTypes = data;
                _this.dutyType = _this.dutyTypeCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterDutyType(val); }));
            }
            else {
                _this.getDutyTypes();
            }
        });
    };
    AddbookingComponent.prototype.getPrice = function () {
        var _this = this;
        if (this.temp2.customerId == '') {
            this.snackbar.open('Please select Customer', 'X', { duration: 3000 });
        }
        else if (this.temp2.vehicleGroupId == '') {
            this.snackbar.open('Please select Vehicle Group', 'X', { duration: 3000 });
        }
        else if (this.temp2.dutyTypeId == '') {
            this.snackbar.open('Please select Duty Type', 'X', { duration: 3000 });
        }
        else if (this.temp2.city == '') {
            this.snackbar.open('Please select City', 'X', { duration: 3000 });
        }
        else {
            this.pricingService.getCustomerPrice(this.temp2).subscribe(function (data) {
                if (data.length != 0)
                    _this.bookings.price = (data[0].baseRate);
                else
                    _this.snackbar.open('Price is not entered for current combination', 'X', { duration: 3000 });
            });
        }
    };
    AddbookingComponent.prototype.saveBooking = function () {
        this.bookings.status = 'Booked';
        var temp = this.myForm.get('rows');
        this.bookingService.updateBooking(this.bookings);
        if (this.deletedPassenger.length > 0) {
            this.bookingService.deletePassenger(this.deletedPassenger);
        }
        if (this.deletedBookedBy.length > 0) {
            this.bookingService.deleteBookedBy(this.deletedBookedBy);
        }
        this.bookingService.addPassengers(this.bookings.id, temp.value);
        //this.defaltVal();
        this.dialog.closeAll();
        this.snackbar.open("Booking Added Successfully", null, { duration: 5000 });
    };
    AddbookingComponent.prototype.getVehicleGroup = function (temp, ownerId) {
        return this.bookingService.getVehilceGroup(temp, ownerId);
    };
    AddbookingComponent.prototype.getDutyType = function (temp, ownerId) {
        return this.bookingService.getDutyType(temp, ownerId);
    };
    AddbookingComponent.prototype.defaltVal = function () {
        this.bookings.bookBy = '';
        this.bookings.passenger = '';
        this.bookings.vehicleGroup = '';
        this.bookings.dutyType = '';
        this.bookings.status = '';
        this.bookings.cname = '';
        this.bookings.bookByNo = '';
        this.bookings.bookByEmail = '';
        this.bookings.ccId = '';
        this.bookings.passenger = '';
        this.bookings.passengerNo = '';
        this.bookings.passengerEmail = '';
        this.bookings.fromLoc = '';
        this.bookings.toLoc = '';
        this.bookings.endDate = null;
        this.bookings.reportingTime = '';
        this.bookings.startFromGarage = '';
        this.bookings.reportingAddress = '';
        this.bookings.dropAddress = '';
        this.bookings.shortReportingAddress = '';
        this.bookings.flightTrainNo = '';
        this.bookings.dispatchCenter = '';
        this.bookings.dispatchCenterId = null;
        this.bookings.billTo = '';
        this.bookings.price = '';
        this.bookings.remarks = '';
        this.bookings.operatorNotes = '';
        this.bookings.label = '';
        this.bookings.vehicleGroup = '';
        this.bookings.dutyType = '';
        this.bookings.status = '';
        this.bookings.startDate = null;
        this.bookings.vehicleGroupId = '';
        this.bookings.customerId = '';
        this.bookings.poNumber = '';
        this.bookings.extraHours = '',
            this.bookings.extraKms = '',
            this.bookings.unconfirmed = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], AddbookingComponent.prototype, "unloadHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchReporting"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddbookingComponent.prototype, "searchReportingRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchDrop"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddbookingComponent.prototype, "searchDropRef", void 0);
    AddbookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addbooking',
            template: __webpack_require__("./src/app/pages/operations/addbooking/addbooking.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/addbooking/addbooking.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__bookings_service__["a" /* BookingsService */],
            __WEBPACK_IMPORTED_MODULE_7__duties_duties_service__["a" /* DutiesService */],
            __WEBPACK_IMPORTED_MODULE_2__masters_vehiclegroups_vehiclegroups_component__["a" /* VehicleGroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__masters_dutytype_duty_type_service__["a" /* DutyTypeService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_9__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_10__masters_pricing_pricing_service__["a" /* PricingService */],
            __WEBPACK_IMPORTED_MODULE_11__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__new_branch_new_branch_service__["a" /* NewBranchService */],
            __WEBPACK_IMPORTED_MODULE_14__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_16__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_18__masters_new_employees_employee_service__["a" /* EmployeeService */]])
    ], AddbookingComponent);
    return AddbookingComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/addcustomerinbooking/addcustomerinbooking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <nb-card>\n            <nb-card-header>\n                Customer\n            </nb-card-header>\n            <nb-card-body class=\"hide-overflow\">                \n                <div class=\"row pb-10\">\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field class=\"bottom-align\">\n                            Name\n                            <input matInput [(ngModel)]=\"customer.name\" name=\"name\"#custName required minlength=\"4\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Email\n                            <input matInput [(ngModel)]=\"customer.email\" name=\"email\" #custEmail>\n                        </mat-form-field>                        \n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Phone Number\n                            <input matInput [(ngModel)]=\"customer.phone\" name=\"cid\"#custPhone>\n                        </mat-form-field>                        \n                    </div>\n                </div>\n                <div class=\"row pb-10\">\n                    <div class=\"col-lg-8 col-12\">\n                        <mat-form-field class=\"w-100\">\n                            Address\n                            <textarea matInput [(ngModel)]=\"customer.caddress\" name=\"caddress\"#custAddress></textarea>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field class=\"bottom-align\">\n                            State\n                            <input type=\"text\" matInput [formControl]=\"custStateCtrl\" [matAutocomplete]=\"custState\">\n                            <mat-autocomplete #custState=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let option of custStateOptions | async\" [value]=\"option\" (onSelectionChange)=\"custStateSelect(option,$event)\">\n                                    {{ option }}\n                                </mat-option>\n                            </mat-autocomplete>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row pb-10\">\n                    <div class=\"col-lg-8 col-12\">\n                        <mat-form-field class=\"w-100\">\n                            Billing Address\n                            <textarea matInput [(ngModel)]=\"customer.billingAddress\" name=\"billingAddress\"  #gstBillAddress></textarea>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field class=\"bottom-align\">\n                            Billing State\n                            <input type=\"text\" aria-label=\"Number\" matInput [formControl]=\"billingStateCtrl\" [matAutocomplete]=\"billingState\">\n                            <mat-autocomplete #billingState=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let option of billingStateOptions | async\" [value]=\"option\" (onSelectionChange)=\"billingStateSelect(option,$event)\">\n                                    {{ option }}\n                                </mat-option>\n                            </mat-autocomplete>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row pb-10\">\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Alternate Phone Number\n                            <input matInput [(ngModel)]=\"customer.alternatePhone\" name=\"cid\"#custPhone>\n                        </mat-form-field>\n                    </div>                                        \n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Customer Group\n                            <mat-select [(ngModel)]=\"customer.custGroup\" placeholder=\"\">\n                                <mat-option *ngFor=\"let element of customerGroups\" [value]=\"element.name\" (onSelectionChange)=\"setCustGroupId(element,$event)\">\n                                    {{element.name}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Pan Number\n                            <input matInput [(ngModel)]=\"customer.panNo\" name=\"panNo\"  #custPAN>\n                        </mat-form-field>\n                    </div>\n                </div>                \n                <div class=\"row pb-10\">\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            GSTIN Number\n                            <input matInput [(ngModel)]=\"customer.gstin\" name=\"gstin\"  #custGST>\n                        </mat-form-field>\n                    </div>   \n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Contract Start Date\n                            <input [matDatepicker]=\"contractSDate\" (click)=\"contractSDate.open()\" readonly matInput [(ngModel)]=\"customer.contractSDate\" name=\"date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"contractSDate\"></mat-datepicker-toggle>\n                            <mat-datepicker #contractSDate></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Contract End Date\n                            <input matInput [(ngModel)]=\"customer.billingContractEndDate\"  (click)=\"contractEndDate.open()\" readonly [matDatepicker]=\"contractEndDate\" name=\"billingContractEndDate\">\n                            <mat-datepicker-toggle matSuffix [for]=\"contractEndDate\"></mat-datepicker-toggle>\n                            <mat-datepicker #contractEndDate></mat-datepicker>\n                        </mat-form-field>\n                    </div>                                                                             \n                </div>                \n                <div class=\"row pb-10\">                    \n                    <div class=\"col-lg-4 col-12\">\n                            <mat-form-field>\n                                TDS Percentage\n                                <input matInput  [(ngModel)]=\"customer.tdsPercent\" name=\"tdsPercent\"  #custTDS>\n                            </mat-form-field>\n                        </div>                    \n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Surchage Percentage\n                            <input matInput [(ngModel)]=\"customer.surchargePercent\" name=\"surchargePercent\" #custSurchargePer>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Select Base City for fuel surcharge\n                            <input matInput [formControl]=\"cityCtrl\"  [matAutocomplete]=\"auto1\">\n                            <mat-autocomplete #auto1=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let option of cities | async\" [value]=\"option\" (onSelectionChange)=\"citySelect(option,$event)\">\n                                    {{ option }}\n                                </mat-option>\n                            </mat-autocomplete>                            \n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row pb-10\">                    \n                    <div class=\"col-lg-4 col-12\">\n                        <mat-form-field>\n                            Forced Fuel Type\n                            <mat-select [(ngModel)]=\"customer.billingForcedFuel\">\n                                <mat-option value=\"Petrol\">Petrol</mat-option>\n                                <mat-option value=\"Diesel\">Diesel</mat-option>\n                                <mat-option value=\"Diesel\">Diesel</mat-option>\n                                <mat-option value=\"Electric\">Electric</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>                \n            </nb-card-body>\n        </nb-card>\n    </div>\n</div>\n<!-- <div class=\"row\">\n    <div class=\"col-lg-12\">\n        <nb-card>\n            <nb-card-header>GSTIN Billing Details-<i>Only to be filled if this customer has different GSTIN billing details</i></nb-card-header>\n            <nb-card-body class=\"hide-overflow\">\n                <div class=\"container\">                    \n                    <div class=\"row pb-10\">\n                        <div class=\"col-lg-4 col-12\">\n                            <mat-form-field class=\"bottom-align\">\n                                Billing Name\n                                <input matInput [(ngModel)]=\"customer.billingName\" name=\"billingName\" #gstBillName>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-4 col-12\">\n                            \n                        </div>\n                        <div class=\"col-lg-4 col-12\">\n                            \n                        </div>\n                    </div>                    \n                    <div class=\"row pb-10\">\n                        <div class=\"col-lg-4 col-12\">\n                            <mat-form-field>\n                                Alternate Phone Number\n                                <input matInput [(ngModel)]=\"customer.billingPhone\" name=\"billingPhone\"  #altPhone>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-4 col-12\">\n                            <mat-form-field>\n                                Alternate Email Address\n                                <input matInput [(ngModel)]=\"customer.billingEmail\" name=\"billingEmail\"  #altEmail>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-4 col-12\">\n                            <mat-form-field>\n                                Service Tax Number\n                                <input matInput [(ngModel)]=\"customer.billingServiceTax\" name=\"billingServiceTax\"  #gstTaxNum>\n                            </mat-form-field>\n                        </div>\n                    </div>                    \n                    <div class=\"row pb-10\">                         -->\n                        <!-- <div class=\"col-lg-4 col-12\">                            \n                            GST Type\n                            <br>\n                            <mat-checkbox name=\"cgstsgst\" value=\"cgstsgst\">CGST + SGST</mat-checkbox>                            \n                            <mat-checkbox name=\"igst\" value=\"cgstsgst\">IGST</mat-checkbox>                            \n                        </div> -->\n                        <!-- <div class=\"col-lg-4 col-12\">\n                            \n                        </div>\n                        <div class=\"col-lg-4 col-12\">\n                            \n                        </div> -->\n                        <!-- <div class=\"col-lg-6 col-12\">\n                            <mat-form-field>\n                                Reverse Applicable Charges\n                                <mat-select>\n                                    <mat-option value=\"option\">Option</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div> -->\n                    <!-- </div>                     -->\n                    <!-- <div class=\"row pb-10\">\n                        \n                    </div>                 -->\n                <!-- </div>\n            </nb-card-body>\n        </nb-card>\n    </div>\n</div> -->\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <nb-card>\n            <nb-card-header>\n                Driver Allowance Settings\n            </nb-card-header>\n            <nb-card-body class=\"hide-overflow\">                \n                <div class=\"row pb-10\">\n                    <div class=\"col-lg-6 col-12\">\n                        <mat-form-field>\n                            Early Time\n                            <input type=\"time\" matInput [(ngModel)]=\"customer.earlyTime\" name=\"earlyTime\"  #earlyTime>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-6 col-12\">\n                        <mat-form-field>\n                            Late Time\n                            <input type=\"time\" matInput [(ngModel)]=\"customer.lateTime\" name=\"lateTime\"  #lateTime>\n                        </mat-form-field>\n                    </div>\n                </div>                \n            </nb-card-body>\n        </nb-card>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <nb-card>\n            <nb-card-header>\n                Applicable Taxes\n            </nb-card-header>\n            <nb-card-body class=\"hide-overflow\">\n                <form [formGroup]=\"myForm\">\n                    <div formArrayName=\"rows\">\n                        <div class=\"row pt-10\">                            \n                            <div class=\"col-lg-6 col-10\">\n                                Tax\n                            </div>\n                            <div class=\"col-lg-2 col-2\"></div>\n                        </div>\n                        <div class=\"row pb-10\" *ngFor=\"let temp of applicableTaxes.controls; let i=index\" [formGroupName]=\"i\">                            \n                            <div class=\"col-lg-6 col-10\">\n                                <mat-form-field class=\"w-100\">\n                                    <input placeholder=\"Charges\" [formControl]=\"taxCtrl\" matInput [matAutocomplete]=\"taxauto\">\n                                    <mat-autocomplete #taxauto=\"matAutocomplete\">\n                                        <mat-option *ngFor=\"let option of taxes |async\" [value]=\"option.name\" (onSelectionChange)=\"setTax(option,$event)\">\n                                            {{ option.name }}&nbsp;-{{option.percent}}%\n                                        </mat-option>\n                                    </mat-autocomplete>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-lg-2 col-2\">\n                                <button mat-icon-button color=\"primary\" (click)=\"deleteRow(i)\"><mat-icon>clear</mat-icon></button>\n                            </div>\n                        </div>                                            \n                    </div>\n                </form>\n                <div class=\"row ptb-10\">\n                    <div class=\"col-lg-12 col-12\">\n                        <button [disabled]=\"taxStatus\" mat-raised-button color=\"primary\" (click)=\"addRow(true)\">Add Tax</button>\n                    </div>\n                </div>                \n            </nb-card-body>\n        </nb-card>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <nb-card>\n            <nb-card-header>\n                Notes\n            </nb-card-header>\n            <nb-card-body class=\"hide-overflow\">\n                <div class=\"container\">                    \n                    <div class=\"row pb-10\">\n                        <div class=\"col-lg-12 col-12\">\n                            <mat-form-field class=\"w-100\">\n                                Notes\n                                <textarea matInput [(ngModel)]=\"customer.notes\" name=\"notes\"  #notes></textarea>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row pb-10\">\n                        <div class=\"col-lg-12 col-12\">\n                            <mat-checkbox> Enable Custom Pricing.</mat-checkbox>\n                        </div>\n                    </div>\n                    <div class=\"row pb-10\">\n                        <div class=\"col-lg-12 col-12\">\n                            <mat-checkbox> Deny Booked by Passenger and Additional contact info to be added to Master while adding a booking.</mat-checkbox>\n                        </div>\n                    </div>\n                    <div class=\"row pb-10\">\n                        <div class=\"col-lg-12 col-12\">\n                            <mat-checkbox [(ngModel)]=\"customer.active\"> Active</mat-checkbox>\n                        </div>\n                    </div>\n                </div>\n            </nb-card-body>\n        </nb-card>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <nb-card>\n            <nb-card-body class=\"hide-overflow\">\n                <div class=\"container\">\n                    <form [formGroup]=\"cityForm\">\n                        <div class=\"row pb-10\">\n                            <div class=\"col-lg-12 col-12\">\n                                <br>\n                                Limit ability to allot bookings to these cities\n                            </div>                            \n                        </div>\n                        <div formArrayName=\"cities\">\n                            <div class=\"row pb-10\" *ngFor=\"let temp of citiesFormCtrl.controls; let i=index\" [formGroupName]=\"i\"> \n                                <div class=\"col-lg-9 col-9\">\n                                    <mat-form-field>\n                                        <input matInput formControlName=\"city\" (keypress)=\"filterCity(i)\" [matAutocomplete]=\"auto1\">\n                                        <mat-autocomplete #auto1=\"matAutocomplete\">\n                                            <mat-option *ngFor=\"let option of cities | async\" [value]=\"option\">\n                                                {{ option }}\n                                            </mat-option>\n                                        </mat-autocomplete> \n                                        <!-- <mat-select placeholder=\"Choose One\" formControlName=\"city\">\n                                            <mat-option *ngFor=\"let element of cities\" [value]=\"element\">\n                                                {{element}}\n                                            </mat-option>\n                                        </mat-select> -->\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-lg-3 col-3\">\n                                    <button mat-icon-button color=\"primary\" (click)=\"deleteCity(i, temp)\"><mat-icon>clear</mat-icon></button>                                \n                                </div>         \n                            </div>\n                        </div>\n                        <div class=\"row pb-10\">\n                            <div class=\"col-lg-12 col-12\">\n                                <button mat-raised-button color=\"primary\" (click)=\"addCity(true)\">Add</button>\n                            </div>                        \n                        </div>\n                    </form>\n                    <form [formGroup]=\"vehicleGroupsForm\">\n                        <div class=\"row pb-10\">\n                            <div class=\"col-lg-12 col-12\">\n                                Vehicle Group - Limit ability to allot bookings to these Vehicle Groups\n                            </div>                            \n                        </div>\n                        <div formArrayName=\"vehicleGroups\">\n                            <div class=\"row pb-10\" *ngFor=\"let temp of vehicleGroupsFormCtrl.controls; let i=index\" [formGroupName]=\"i\">\n                                <div class=\"col-lg-9 col-9\">\n                                    <mat-form-field>\n                                        <mat-select formControlName=\"vehicleGroupId\">\n                                            <mat-option *ngFor=\"let element of vehicleGroups\" [value]=\"element.id\">\n                                                {{element.name}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-lg-3 col-3\">\n                                    <button mat-icon-button color=\"primary\" (click)=\"deleteVehicleGroup(i,temp)\"><mat-icon>clear</mat-icon></button>                                \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row pb-10\">\n                            <div class=\"col-lg-12 col-12\">\n                                <button mat-raised-button color=\"primary\" (click)=\"addVehicleGroup(true)\">Add</button>\n                            </div>                        \n                        </div>\n                    </form>\n                    <form [formGroup]=\"dutyTypesForm\">\n                        <div class=\"row ptb-10\">\n                            <div class=\"col-lg-12 col-12\">\n                                Duty Type - Limit ability to allot bookings to these Duty Types\n                            </div>                            \n                        </div>\n                        <div formArrayName=\"dutyTypes\">\n                            <div class=\"row pb-10\" *ngFor=\"let temp of dutyTypesFormCtrl.controls; let i=index\" [formGroupName]=\"i\">\n                                <div class=\"col-lg-9 col-9\">\n                                    <mat-form-field>\n                                        <mat-select formControlName=\"dutyTypeId\">\n                                            <mat-option *ngFor=\"let element of dutyTypes\" [value]=\"element.id\">\n                                                {{element.name}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-lg-3 col-3\">\n                                    <button mat-icon-button color=\"primary\" (click)=\"deleteDutyType(i,temp)\"><mat-icon>clear</mat-icon></button>                                \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row ptb-10\">\n                            <div class=\"col-lg-12 col-12\">\n                                <button mat-raised-button color=\"primary\" (click)=\"addDutyType(true)\">Add</button>\n                            </div>                        \n                        </div>\n                    </form>\n                </div>\n            </nb-card-body>\n        </nb-card>\n    </div>\n</div>\n<div class=\"row ptb-10\">\n    <div class=\"col-lg-12\">\n        <button mat-raised-button color=\"primary\" *ngIf=\"editState==false\" (click)=\"saveCustomer()\">Add</button>\n        <button mat-raised-button color=\"primary\" *ngIf=\"editState==true\" (click)=\"editCustomer()\">Save</button>\n        <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n    </div>\n</div>    "

/***/ }),

/***/ "./src/app/pages/operations/addcustomerinbooking/addcustomerinbooking.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/addcustomerinbooking/addcustomerinbooking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcustomerinbookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masters_newcustomergroup_newcustomergroup_component__ = __webpack_require__("./src/app/pages/masters/newcustomergroup/newcustomergroup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__masters_vehiclegroups_vehiclegroups_component__ = __webpack_require__("./src/app/pages/masters/vehiclegroups/vehiclegroups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__masters_dutytype_duty_type_service__ = __webpack_require__("./src/app/pages/masters/dutytype/duty-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__masters_createinvoice_invoice_service__ = __webpack_require__("./src/app/pages/masters/createinvoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
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












var AddcustomerinbookingComponent = (function () {
    function AddcustomerinbookingComponent(customerGroupService, matDialogRef, data, customerService, dutyTypeService, snackBar, fb, dialog, auth, invoiceService, vehicleGroupService, router) {
        this.customerGroupService = customerGroupService;
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.customerService = customerService;
        this.dutyTypeService = dutyTypeService;
        this.snackBar = snackBar;
        this.fb = fb;
        this.dialog = dialog;
        this.auth = auth;
        this.invoiceService = invoiceService;
        this.vehicleGroupService = vehicleGroupService;
        this.router = router;
        this.city = [
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
        this.cityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.user = {};
        this.editState = false;
        this.tax = [];
        this.taxCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.taxStatus = false;
        this.deletedCity = [];
        this.deletedVehicleGroup = [];
        this.deletedDutyType = [];
        this.param = {
            inserted: 'no',
            data: null
        };
        this.custStateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.billingStateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
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
        this.customer = {
            //Customer Details
            ownerId: '',
            name: '',
            caddress: '',
            state: '',
            custGroup: '',
            customerGroupId: null,
            phone: '',
            alternatePhone: '',
            email: '',
            panNo: '',
            gstin: '',
            tdsPercent: '',
            contractSDate: '',
            surchargePercent: '',
            baseCityForFuel: '',
            //GSTin details 
            billingName: '',
            billingAddress: '',
            billingState: '',
            billingPhone: '',
            billingEmail: '',
            billingServiceTax: '',
            billingGSTType: '',
            billingReverseChargeApplicable: '',
            billingContractEndDate: '',
            billingForcedFuel: '',
            //Applicable taxes
            applicableTaxes: 0,
            //Driver Allowance
            earlyTime: '',
            lateTime: '',
            //Misc
            notes: '',
            enableCustomPricing: '',
            denyBookbyPassenger: '',
            active: true,
            //Temp
            date: '',
            status: '',
        };
        if (this.customer == undefined) {
            this.router.navigate(['/pages/masters/customer']);
        }
    }
    AddcustomerinbookingComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    AddcustomerinbookingComponent.prototype.saveCustomer = function () {
        var _this = this;
        if (this.customer.name.trim() == "") {
            this.snackBar.open('Enter Name', null, {
                duration: 5000
            });
        }
        else if (this.customer.caddress.trim() == "") {
            this.snackBar.open('Enter Address', null, {
                duration: 5000
            });
        }
        else if (!this.customer.phone.match(/\b([789]\d{9}$)\b/)) {
            this.snackBar.open('Enter a valid Phone Number', null, {
                duration: 5000
            });
        }
        else if (!this.customer.email.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/)) {
            this.snackBar.open('Enter a valid Email', null, {
                duration: 5000
            });
        }
        else if (this.customer.panNo.match("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/")) {
            this.snackBar.open('Enter a Pan', null, {
                duration: 5000
            });
        }
        else {
            this.customer.contractSDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.customer.contractSDate).format("YYYY-MM-DD");
            this.customer.billingContractEndDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.customer.billingContractEndDate).format("YYYY-MM-DD");
            this.customerService.addCustomer(this.customer).subscribe(function (data) {
                if (data.affectedRows == 1) {
                    _this.param.inserted = 'yes';
                    console.log(data);
                    _this.customer.id = data.insertId;
                    _this.param.data = _this.customer;
                    if (_this.citiesFormCtrl.length > 0) {
                        _this.citiesFormCtrl.value.forEach(function (element) {
                            element.ownerId = _this.user.ownerId;
                            element.customerId = data.insertId;
                            _this.customerService.addCustomerLimitCity(element).subscribe();
                            console.log(element);
                        });
                    }
                    // console.log(this.vehicleGroupsFormCtrl)
                    if (_this.vehicleGroupsFormCtrl.length > 0) {
                        _this.vehicleGroupsFormCtrl.value.forEach(function (element) {
                            element.ownerId = _this.user.ownerId;
                            element.customerId = data.insertId;
                            _this.customerService.addCustomerLimitVehicleGroup(element).subscribe();
                            console.log(element);
                        });
                    }
                    if (_this.dutyTypesFormCtrl.length > 0) {
                        _this.dutyTypesFormCtrl.value.forEach(function (element) {
                            element.ownerId = _this.user.ownerId;
                            element.customerId = data.insertId;
                            _this.customerService.addCustomerLimitDutyType(element).subscribe();
                            console.log(element);
                        });
                    }
                }
            }, function (err) { }, function () {
                _this.snackBar.open("Customer Added", "X", { duration: 3000 });
                console.log(_this.param.data);
                _this.matDialogRef.close(_this.param.data);
            });
            // this.customer.cid='';
            //  this.customer.name='';
            // this.customer.date='';
            // this.customer.email='';
            // this.customer.gstin='';
            // this.customer.status='';
        }
    };
    AddcustomerinbookingComponent.prototype.editCustomer = function () {
        var _this = this;
        if (this.customer.name.trim() == "") {
            this.snackBar.open('Enter Name', null, {
                duration: 5000
            });
        }
        else if (!this.customer.phone.match(/\b([789]\d{9}$)\b/)) {
            this.snackBar.open('Enter a valid Phone Number', null, {
                duration: 5000
            });
        }
        else if (!this.customer.email.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/)) {
            this.snackBar.open('Enter a valid Email', null, {
                duration: 5000
            });
        }
        else if (this.customer.panNo.match("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/")) {
            this.snackBar.open('Enter a valid Pan card number', null, {
                duration: 5000
            });
        }
        else {
            this.customer.contractSDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.customer.contractSDate).format("YYYY-MM-DD");
            this.customer.billingContractEndDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.customer.billingContractEndDate).format("YYYY-MM-DD");
            this.customerService.updateCustomer(this.customer).subscribe(function (data) {
                if (_this.citiesFormCtrl.length > 0) {
                    _this.citiesFormCtrl.value.forEach(function (element) {
                        if (element.id) {
                            _this.customerService.updateCustomerLimitCity(element).subscribe();
                        }
                        else {
                            element.ownerId = _this.user.ownerId;
                            element.customerId = _this.customer.id;
                            _this.customerService.addCustomerLimitCity(element).subscribe();
                            console.log(element);
                        }
                    });
                }
                _this.deletedCity.forEach(function (element) {
                    _this.customerService.deleteCustomerLimitCity(element).subscribe();
                });
                // console.log(this.vehicleGroupsFormCtrl)
                if (_this.vehicleGroupsFormCtrl.length > 0) {
                    _this.vehicleGroupsFormCtrl.value.forEach(function (element) {
                        if (element.id) {
                            _this.customerService.updateCustomerLimitVehicleGroup(element).subscribe();
                        }
                        else {
                            element.ownerId = _this.user.ownerId;
                            element.customerId = _this.customer.id;
                            _this.customerService.addCustomerLimitVehicleGroup(element).subscribe();
                            console.log(element);
                        }
                    });
                }
                _this.deletedVehicleGroup.forEach(function (element) {
                    _this.customerService.deleteCustomerLimitVehicleGroup(element).subscribe();
                });
                if (_this.dutyTypesFormCtrl.length > 0) {
                    _this.dutyTypesFormCtrl.value.forEach(function (element) {
                        if (element.id) {
                            _this.customerService.updateCustomerLimitDutyType(element).subscribe();
                        }
                        else {
                            element.ownerId = _this.user.ownerId;
                            element.customerId = _this.customer.id;
                            _this.customerService.addCustomerLimitDutyType(element).subscribe();
                            console.log(element);
                        }
                    });
                }
                _this.deletedDutyType.forEach(function (element) {
                    _this.customerService.deleteCustomerLimitDutyType(element).subscribe();
                });
            }, function (err) { }, function () {
                _this.snackBar.open("Customer Updated", null, { duration: 2000 });
                _this.dialog.closeAll();
            });
        }
    };
    AddcustomerinbookingComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    AddcustomerinbookingComponent.prototype.updateCustomer = function () {
        this.customerService.updateCustomer(this.customer);
    };
    AddcustomerinbookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this.fb.group({
            rows: this.fb.array([])
        });
        this.cityForm = this.fb.group({
            cities: this.fb.array([])
        });
        this.vehicleGroupsForm = this.fb.group({
            vehicleGroups: this.fb.array([])
        });
        this.dutyTypesForm = this.fb.group({
            dutyTypes: this.fb.array([])
        });
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.customer.ownerId = data[0].ownerId;
            _this.invoiceService.getTaxes(data[0]).subscribe(function (data) {
                console.log(data);
                _this.tax = data;
                if (_this.customer != null) {
                    _this.taxId = _this.customer.applicableTaxes;
                    var cTax = _this.tax.find(function (x) { return x.id === Number(_this.taxId); });
                    if (cTax != undefined) {
                        var row = _this.fb.group({
                            tax: cTax.name,
                            tempTax: true
                        });
                        _this.applicableTaxes.push(row);
                        _this.taxStatus = true;
                        _this.taxCtrl.setValue(cTax.name);
                    }
                }
                _this.taxes = _this.taxCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["map"])(function (val) { return _this.filterTax(val); }));
            });
        });
        this.customerGroupService.getCustomerGroups(this.customer).subscribe(function (data) {
            _this.customerGroups = data;
        });
        this.vehicleGroupService.getvehicleGroup(this.user).subscribe(function (data) {
            _this.vehicleGroups = data;
        });
        this.dutyTypeService.getDutyType(this.user).subscribe(function (data) {
            _this.dutyTypes = data;
        });
        this.custStateOptions = this.custStateCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["map"])(function (val) { return _this.filterCustStates(val); }));
        this.billingStateOptions = this.billingStateCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["map"])(function (val) { return _this.filterBillingStates(val); }));
    };
    AddcustomerinbookingComponent.prototype.filterCity = function (i) {
        var _this = this;
        this.cities = this.citiesFormCtrl.at(i).get('city').valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["map"])(function (val) { return _this.filterFromCity(val); }));
    };
    AddcustomerinbookingComponent.prototype.filterCustStates = function (val) {
        return this.states.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddcustomerinbookingComponent.prototype.filterBillingStates = function (val) {
        return this.states.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddcustomerinbookingComponent.prototype.filterFromCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddcustomerinbookingComponent.prototype.custStateSelect = function (option, event) {
        if (event.source.selected == true) {
            this.customer.state = option;
        }
    };
    AddcustomerinbookingComponent.prototype.setCustGroupId = function (option, event) {
        if (event.source.selected == true) {
            this.customer.customerGroupId = option.id;
        }
    };
    AddcustomerinbookingComponent.prototype.billingStateSelect = function (option, event) {
        if (event.source.selected == true) {
            this.customer.billingState = option;
        }
    };
    AddcustomerinbookingComponent.prototype.citySelect = function (option, event) {
        if (event.source.selected == true) {
            this.customer.baseCityForFuel = option;
        }
    };
    Object.defineProperty(AddcustomerinbookingComponent.prototype, "applicableTaxes", {
        get: function () {
            return this.myForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddcustomerinbookingComponent.prototype, "citiesFormCtrl", {
        get: function () {
            return this.cityForm.get('cities');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddcustomerinbookingComponent.prototype, "vehicleGroupsFormCtrl", {
        get: function () {
            return this.vehicleGroupsForm.get('vehicleGroups');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddcustomerinbookingComponent.prototype, "dutyTypesFormCtrl", {
        get: function () {
            return this.dutyTypesForm.get('dutyTypes');
        },
        enumerable: true,
        configurable: true
    });
    AddcustomerinbookingComponent.prototype.deleteRow = function (i) {
        this.applicableTaxes.removeAt(i);
        this.taxStatus = false;
        this.customer.applicableTaxes = null;
    };
    AddcustomerinbookingComponent.prototype.addRow = function (temp) {
        var row = this.fb.group({
            tax: '',
            tempTax: temp
        });
        this.applicableTaxes.push(row);
        this.taxStatus = true;
    };
    AddcustomerinbookingComponent.prototype.addCity = function (temp) {
        var city = this.fb.group({
            city: '',
        });
        this.citiesFormCtrl.push(city);
    };
    AddcustomerinbookingComponent.prototype.deleteCity = function (i, aRow) {
        this.citiesFormCtrl.removeAt(i);
        if (aRow.value.id) {
            this.deletedCity.push(aRow.value);
        }
    };
    AddcustomerinbookingComponent.prototype.addVehicleGroup = function (temp) {
        var vehicleGroups = this.fb.group({
            vehicleGroupId: '',
            vehicleGroupName: '',
        });
        this.vehicleGroupsFormCtrl.push(vehicleGroups);
    };
    AddcustomerinbookingComponent.prototype.deleteVehicleGroup = function (i, aRow) {
        this.vehicleGroupsFormCtrl.removeAt(i);
        if (aRow.value.id) {
            this.deletedVehicleGroup.push(aRow.value);
        }
    };
    AddcustomerinbookingComponent.prototype.addDutyType = function (temp) {
        var dutyTypes = this.fb.group({
            dutyTypeId: '',
        });
        this.dutyTypesFormCtrl.push(dutyTypes);
    };
    AddcustomerinbookingComponent.prototype.deleteDutyType = function (i, aRow) {
        this.dutyTypesFormCtrl.removeAt(i);
        if (aRow.value.id) {
            this.deletedDutyType.push(aRow.value);
        }
    };
    AddcustomerinbookingComponent.prototype.filterTax = function (val) {
        return this.tax.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddcustomerinbookingComponent.prototype.setTax = function (option, $event) {
        this.customer.applicableTaxes = option.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], AddcustomerinbookingComponent.prototype, "unloadHandler", null);
    AddcustomerinbookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addcustomerinbooking',
            template: __webpack_require__("./src/app/pages/operations/addcustomerinbooking/addcustomerinbooking.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/addcustomerinbooking/addcustomerinbooking.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__masters_newcustomergroup_newcustomergroup_component__["a" /* NewcustomergroupComponent */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_5__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_6__masters_dutytype_duty_type_service__["a" /* DutyTypeService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__masters_createinvoice_invoice_service__["a" /* InvoiceService */],
            __WEBPACK_IMPORTED_MODULE_3__masters_vehiclegroups_vehiclegroups_component__["a" /* VehicleGroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* Router */]])
    ], AddcustomerinbookingComponent);
    return AddcustomerinbookingComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/bank-account-display/bank-account-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n\n        <nb-card-header>Bank Accounts\n          <!-- <button style=\"float: right;\" mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>settings</mat-icon></button>\n          <mat-menu #menu=\"matMenu\" class=\"mat-menu-panel\">\n            <button mat-menu-item (click)=\"openImport()\">Import</button>\n            <button mat-menu-item>Export</button>\n          </mat-menu> -->\n        </nb-card-header>\n          <nb-card-body>\n          <div align=\"center\">\n            <mat-form-field class=\"filter-field\">\n              <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n            </mat-form-field>\n    \n            <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n            <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n          </div>\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"accountName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Account Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n      \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"accountNumber\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Account Number </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.bookByNo\"> {{element.number}} </mat-cell>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"bankName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Bank Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.bankName}} </mat-cell>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"bankBranch\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Bank Branch </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.branch}} </mat-cell>\n          </ng-container>\n          \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"ifscCode\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> IFSC Code </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.ifscCode}} </mat-cell>\n          </ng-container>\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"chequeInTheNameOf\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Cheques in the name of  </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.chequeInTheNameOf}} </mat-cell>\n            </ng-container>\n\n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Options</mat-header-cell>\n            <mat-cell style=\"line-height: 2px;\" *matCellDef=\"let element ;let row\" (click)=\"$event.stopPropagation()\">\n              <button mat-icon-button *ngIf=\"permission.manageBankAccounts==1\" [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n                <!-- <button (click)=\"addBankAccount(row)\" mat-menu-item>Edit</button> -->\n                <button (click)=\"deleteBankAccount(row)\" mat-menu-item>Delete</button>\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n      \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"addBankAccount(row)\"></mat-row>\n        </mat-table>\n        <mat-paginator [length]=\"length\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"\n        ></mat-paginator>\n\n    </nb-card-body>\n  </nb-card>\n  </div>\n  <div class=\"col-lg-12\" align=\"right\">\n    \n    <a *ngIf=\"permission.addBankAccounts==1\" (click)=\"addBankAccount(null)\" class=\"float\">\n        <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n        </a>\n    <!-- <button mat-raised-button (click)=\"add(null)\" color=\"primary\" >\n        Add Bank Account\n    </button> -->\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/operations/bank-account-display/bank-account-display.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/bank-account-display/bank-account-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankAccountDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_bank_account_new_bank_account_component__ = __webpack_require__("./src/app/pages/operations/new-bank-account/new-bank-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_bank_account_bank_account_service__ = __webpack_require__("./src/app/pages/operations/new-bank-account/bank-account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masters_sub_users_sub_user_service__ = __webpack_require__("./src/app/pages/masters/sub-users/sub-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BankAccountDisplayComponent = (function () {
    function BankAccountDisplayComponent(dialog, auth, bankAccountService, permissionService) {
        this.dialog = dialog;
        this.auth = auth;
        this.bankAccountService = bankAccountService;
        this.permissionService = permissionService;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.user = {};
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.permission = {};
        this.displayedColumns = ['accountName', 'accountNumber', 'bankName', 'bankBranch', 'ifscCode', 'chequeInTheNameOf', 'Options'];
    }
    BankAccountDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
            var _this = this;
            if (event.data == this.user.ownerId + 'bankAccount') {
                this.bankAccountService.getBankAccount(this.user).subscribe(function (data) {
                    _this.dataSource.data = data;
                });
            }
        }.bind(this);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
                if (_this.permission.manageBankAccounts === 0) {
                    _this.displayedColumns.pop();
                }
                if (data[0].viewBankAccounts == 1) {
                    _this.bankAccountService.getBankAccount(_this.user).subscribe(function (data) {
                        _this.dataSource.data = data;
                    });
                }
                else {
                    window.alert("You do not have permission to view bank accounts");
                }
            });
        });
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    BankAccountDisplayComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    BankAccountDisplayComponent.prototype.addBankAccount = function (temp) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__new_bank_account_new_bank_account_component__["a" /* NewBankAccountComponent */], { data: temp, autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data == undefined) {
            }
            else {
                if (data.inserted == 'yes') {
                    console.log(data);
                    _this.ws.send(_this.user.ownerId + 'bankAccount');
                }
            }
        });
    };
    BankAccountDisplayComponent.prototype.deleteBankAccount = function (temp) {
        var _this = this;
        this.bankAccountService.deleteBankAccount(temp).subscribe(function (data) {
            _this.ws.send(_this.user.ownerId + 'bankAccount');
        });
    };
    BankAccountDisplayComponent.prototype.clear = function () {
        this.searchTerm = '',
            this.dataSource.filter = '';
    };
    BankAccountDisplayComponent.prototype.ngOnDestroy = function () {
        this.ws.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], BankAccountDisplayComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], BankAccountDisplayComponent.prototype, "paginator", void 0);
    BankAccountDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bank-account-display',
            template: __webpack_require__("./src/app/pages/operations/bank-account-display/bank-account-display.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/bank-account-display/bank-account-display.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__new_bank_account_bank_account_service__["a" /* BankAccountService */],
            __WEBPACK_IMPORTED_MODULE_5__masters_sub_users_sub_user_service__["a" /* SubUserService */]])
    ], BankAccountDisplayComponent);
    return BankAccountDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/billingitemdisplay/billingitemdisplay.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nb-card>\n    <nb-card-header>\n      Billing Items\n    </nb-card-header>\n    \n    <nb-card-body>\n      <div align=\"center\">\n        <mat-form-field class=\"filter-field\">\n          <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n        </mat-form-field>\n\n        <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n        <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n      </div>\n      <div>\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n          <!-- Date Column -->\n          <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Name</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n        \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"shortName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Short Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.shortName}} </mat-cell>\n          </ng-container>\n\n          <!-- Booked By Column -->\n          <ng-container matColumnDef=\"taxable\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Taxable </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <p style=\"margin:auto\" *ngIf=\"element.taxable==1\">Yes</p><p style=\"margin:auto\" *ngIf=\"element.taxable==0\">No</p>\n            </mat-cell>\n          </ng-container>\n\n          <!-- Booked By Column -->\n          <ng-container matColumnDef=\"allowDriverToAdd\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Allow Driver To Add </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <p style=\"margin:auto\" *ngIf=\"element.allowDriverToAdd==1\">Yes</p><p style=\"margin:auto\" *ngIf=\"element.allowDriverToAdd==0\">No</p>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">                \n                <!-- <button mat-menu-item *ngIf=\"permission.manageBillingItems\" (click)=\"selectRow(row)\">Edit</button>                 -->\n                <button mat-menu-item *ngIf=\"permission.manageBillingItems\" (click)=\"deleteRow(row)\">Delete</button>                                \n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"></mat-row>\n        </mat-table>\n\n        <mat-paginator [length]=\"length\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n      </div>\n      <div class=\"col-lg-12\" align=\"right\">\n        <a *ngIf=\"permission.addBillingItems\" (click)=\"selectRow(null)\" class=\"float\">\n          <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n        </a>\n      </div>\n    </nb-card-body>\n  </nb-card>\n</div>"

/***/ }),

/***/ "./src/app/pages/operations/billingitemdisplay/billingitemdisplay.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/billingitemdisplay/billingitemdisplay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingitemdisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_billing_new_billing_component__ = __webpack_require__("./src/app/pages/operations/new-billing/new-billing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_billing_billing_service__ = __webpack_require__("./src/app/pages/operations/new-billing/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__masters_sub_users_sub_user_service__ = __webpack_require__("./src/app/pages/masters/sub-users/sub-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_confirm_confirm_component__ = __webpack_require__("./src/app/pages/modals/confirm/confirm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BillingitemdisplayComponent = (function () {
    function BillingitemdisplayComponent(dialog, billingService, auth, router, permissionService, snackBar) {
        this.dialog = dialog;
        this.billingService = billingService;
        this.auth = auth;
        this.router = router;
        this.permissionService = permissionService;
        this.snackBar = snackBar;
        this.pageSize = 5;
        this.pageSizeOptions = [10, 15, 25, 40];
        this.displayedColumns = ['name', 'shortName', 'taxable', 'allowDriverToAdd', 'Options'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["O" /* MatTableDataSource */]();
        this.permission = {};
        this.user = {};
    }
    BillingitemdisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
            var _this = this;
            if (event.data == this.user.ownerId + 'employeedisp')
                this.billingService.getBilling(this.user).subscribe(function (data) {
                    _this.tempArray = data;
                    _this.dataSource.data = _this.tempArray;
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                });
        }.bind(this);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
                if (data[0].viewBillingItems == 1) {
                    _this.billingService.getBilling(_this.user).subscribe(function (data) {
                        _this.tempArray = data;
                        _this.dataSource.data = _this.tempArray;
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                    });
                }
                else {
                    window.alert("You do not have permission to view billing items");
                }
            });
        });
    };
    BillingitemdisplayComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    BillingitemdisplayComponent.prototype.addBillingItems = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__new_billing_new_billing_component__["a" /* NewBillingComponent */], { autoFocus: false, disableClose: true });
    };
    BillingitemdisplayComponent.prototype.clear = function () {
        this.searchTerm = '',
            this.dataSource.filter = '';
    };
    BillingitemdisplayComponent.prototype.selectRow = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__new_billing_new_billing_component__["a" /* NewBillingComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
            if (data == undefined) {
            }
            else {
                if (data.inserted == 'yes') {
                    _this.tempArray.push(data.data);
                    _this.dataSource.data = _this.tempArray;
                }
            }
        });
        ;
    };
    BillingitemdisplayComponent.prototype.deleteRow = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { disableClose: true, autoFocus: false }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.billingService.deleteBilling(row).subscribe(function (data) {
                    if (data.errno == undefined) {
                        var i = _this.tempArray.indexOf(row);
                        _this.tempArray.splice(i, 1);
                        _this.dataSource.data = _this.tempArray;
                    }
                    else {
                        if (data.errno == 1451) {
                            window.alert("Cannot delete because you have corresponding Data");
                        }
                        else {
                            window.alert("Error Cannot Delete Booking");
                        }
                    }
                }, function (errr) { }, function () {
                    _this.snackBar.open("Billing Items Deleted", "X", { duration: 3000 });
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatSort */])
    ], BillingitemdisplayComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatPaginator */])
    ], BillingitemdisplayComponent.prototype, "paginator", void 0);
    BillingitemdisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'billingitemdisplay',
            template: __webpack_require__("./src/app/pages/operations/billingitemdisplay/billingitemdisplay.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/billingitemdisplay/billingitemdisplay.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__new_billing_billing_service__["a" /* BillingService */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__masters_sub_users_sub_user_service__["a" /* SubUserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSnackBar */]])
    ], BillingitemdisplayComponent);
    return BillingitemdisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/bookinginvoice/createbookinginvoice/createbookinginvoice.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  createbookinginvoice works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/operations/bookinginvoice/createbookinginvoice/createbookinginvoice.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/bookinginvoice/createbookinginvoice/createbookinginvoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatebookinginvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreatebookinginvoiceComponent = (function () {
    function CreatebookinginvoiceComponent() {
    }
    CreatebookinginvoiceComponent.prototype.ngOnInit = function () {
    };
    CreatebookinginvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'createbookinginvoice',
            template: __webpack_require__("./src/app/pages/operations/bookinginvoice/createbookinginvoice/createbookinginvoice.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/bookinginvoice/createbookinginvoice/createbookinginvoice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatebookinginvoiceComponent);
    return CreatebookinginvoiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/bookings/bookings.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n    <nb-card-header>\r\n        Add Booking\r\n    </nb-card-header>\r\n    <nb-card-body>\r\n        <div class=\"container\">\r\n            <div class=\"row\">                \r\n                <div class=\"col-lg-8 col-12\">\r\n                    Customer Name:\r\n                    <mat-form-field class=\"w-100\">\r\n                       <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput readonly>\r\n                    </mat-form-field>\r\n                </div>                \r\n            </div>\r\n            <form [formGroup]=\"bookedByForm\" class=\"w-100\">\r\n                <div formArrayName=\"rows\">\r\n                    <div class=\"row\" *ngFor=\"let aRow of bookedByForms.controls; let i=index\" [formGroupName]=\"i\">                        \r\n                        <div class=\"col-lg-3 col-12\">\r\n                            <mat-form-field>\r\n                                Name (Booked By)\r\n                                <input formControlName=\"bookByName\" matInput [matAutocomplete]=\"bookByAuto\">\r\n                                <mat-autocomplete #bookByAuto=\"matAutocomplete\">\r\n                                    <mat-option *ngFor=\"let option of bookBy |async\" [value]=\"option.name\" (onSelectionChange)=\"setBookBy(option,$event)\">\r\n                                        {{ option.name }}\r\n                                    </mat-option>\r\n                                </mat-autocomplete>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-12\">\r\n                            <mat-form-field>\r\n                                Phone No (Booked By)\r\n                                <input matInput formControlName=\"bookByNo\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-12\">\r\n                            <mat-form-field>\r\n                                Email Id (Booked By)\r\n                                <input matInput formControlName=\"bookByEmail\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-10\">\r\n                            <mat-form-field>\r\n                                CC ID\r\n                                <input matInput formControlName=\"CCID\">\r\n                            </mat-form-field>\r\n                        </div>                \r\n                        <div class=\"col-lg-1 col-2\">\r\n                            <button mat-icon-button color=\"primary\" *ngIf=\"i>0\" (click)=\"deleteBookedBy(i)\"> <mat-icon>clear</mat-icon></button>\r\n                        </div>\r\n                    </div>\r\n                </div>                \r\n            </form>\r\n            <div class=\"row ptb-10\">\r\n                <div class=\"col-lg-12 col-12\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"addBookedBy()\" style=\"float:right; margin: 5px;\">Add Booked By</button>\r\n                </div>                \r\n            </div>            \r\n        </div>\r\n    </nb-card-body>\r\n</nb-card>\r\n<nb-card>\r\n    <nb-card-header>Guests</nb-card-header>\r\n    <nb-card-body>\r\n        <div class=\"row\" style=\"padding:15px\">\r\n            <form [formGroup]=\"myForm\" class=\"w-100\">\r\n                <div formArrayName=\"rows\">                    \r\n                    <div class=\"row\" *ngFor=\"let aRow of passengerForms.controls; let i=index\" [formGroupName]=\"i\">\r\n                        <div class=\"col-lg-1 col-2\">\r\n                            <br>\r\n                            {{i+1}}\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-10\">\r\n                            <mat-form-field>\r\n                                <input matInput formControlName=\"passenger\" (keypress)=\"filterPass(i)\" [matAutocomplete]=\"passengerAuto\" placeholder=\"Name\">\r\n                                <mat-autocomplete #passengerAuto=\"matAutocomplete\">\r\n                                    <mat-option *ngFor=\"let element of passengers | async\" [value]=\"element.name\" (onSelectionChange)=\"setPassenger(element,$event,aRow)\">\r\n                                        {{element.name}}\r\n                                    </mat-option>\r\n                                </mat-autocomplete>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-5\">\r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput formControlName=\"passengerNo\" placeholder=\"Phone No\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-5\">\r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput formControlName=\"passengerEmail\" placeholder=\"Email Id\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-2\">\r\n                            <br>\r\n                            <button mat-icon-button color=\"primary\" (click)=\"deleteRow(i)\"> <mat-icon>clear</mat-icon></button>\r\n                        </div>\r\n                    </div>                    \r\n                </div>\r\n            </form>                 \r\n            <div class=\"row ptb-10\">\r\n                <div class=\"col-lg-12 col-12\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"addRow()\" style=\"float:right; margin: 5px;\">Add More Guests</button>\r\n                </div>                \r\n            </div>\r\n        </div>\r\n    </nb-card-body>\r\n</nb-card>\r\n<nb-card>\r\n    <nb-card-body>\r\n        <div class=\"container\">            \r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        From*\r\n                        <!-- <input placeholder=\"Pick one\" matInput [(ngModel)]=\"bookings.fromLoc\" (change)=\"setCity(option)\" [matAutocomplete]=\"auto1\"> -->\r\n                        <input matInput [formControl]=\"fromCityCtrl\"  [matAutocomplete]=\"auto1\">\r\n                        <mat-autocomplete #auto1=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of fromCity | async\" [value]=\"option\" (onSelectionChange)=\"fromCitySelect(option,$event)\">\r\n                                {{ option }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        To\r\n                        <input matInput [formControl]=\"toCityCtrl\" [matAutocomplete]=\"auto2\">\r\n                        <mat-autocomplete #auto2=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of toCity | async\" [value]=\"option\" (onSelectionChange)=\"toCitySelect(option,$event)\">\r\n                                {{ option }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        Vehicle Group*\r\n                        <!-- <input placeholder=\"Pick one\" matInput [(ngModel)]=\"bookings.vehicleGroup\" (change)=\"setVehicleGroup(option)\" [matAutocomplete]=\"autoVG\"> -->\r\n                        <input matInput [formControl]=\"vehicleGroupCtrl\"  [matAutocomplete]=\"autoVG\">\r\n                        <mat-autocomplete #autoVG=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of vehicleGroup | async\" [value]=\"option.name\" (onSelectionChange)=\"setVehicleGroup(option,$event)\">\r\n                                {{ option.name }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        Duty Type*\r\n                        <!-- <input placeholder=\"Pick one\" matInput [(ngModel)]=\"bookings.dutyType\" (change)=\"setDutyType(option)\" [matAutocomplete]=\"autoDT\"> -->\r\n                        <input matInput [formControl]=\"dutyTypeCtrl\"  [matAutocomplete]=\"autoDT\">\r\n                        <mat-autocomplete #autoDT=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of dutyType | async\" [value]=\"option.name\" (onSelectionChange)=\"setDutyType(option,$event)\">\r\n                                {{ option.name }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </div>                \r\n            </div>                      \r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        Start Date\r\n                        <input matInput disabled [(ngModel)]=\"bookings.startDate\" [matDatepicker]=\"startDate\" name=\"startDate\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #startDate></mat-datepicker>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        End Date\r\n                        <input matInput disabled [(ngModel)]=\"bookings.endDate\" [matDatepicker]=\"endDate\" name=\"endDate\">         \r\n                        <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #endDate></mat-datepicker>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        Reporting Time*\r\n                        <input type=\"time\" matInput  [(ngModel)]=\"bookings.reportingTime\" name=\"reportingTime\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        Start From Garage before(in mins)\r\n                        <input matInput [(ngModel)]=\"bookings.startFromGarage\" name=\"startFromGarage\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>            \r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-lg-6 col-12\">\r\n                    \r\n                </div> -->\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        Extra Kms\r\n                        <input matInput #bookedEmail  name=\"bookByEmail\" [(ngModel)]=\"bookings.extraKms\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        Extra Hours\r\n                        <input matInput #bookedEmail  name=\"bookByEmail\" [(ngModel)]=\"bookings.extraHours\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-8\">\r\n                    <mat-form-field>\r\n                        Rate:\r\n                        <input matInput name=\"price\" [(ngModel)]=\"bookings.price\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-4\">\r\n                    <br>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"getPrice()\">Get Cost</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nb-card-body>\r\n</nb-card>\r\n<nb-card>\r\n    <nb-card-body>\r\n        <div class=\"container\">\r\n            \r\n                        \r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-12\">\r\n                                <h5>\r\n                                       Reporting Address\r\n                                        <mat-slide-toggle (change)=\"reportingAddressChange($event)\" style=\"float:right\">Google Maps</mat-slide-toggle>\r\n                                    </h5>\r\n                                    <mat-form-field *ngIf=\"reportingAddressMaps==false\" class=\"w-100\">\r\n                                        <textarea rows=\"4\" matInput placeholder=\"Reporting Address\" [(ngModel)]=\"bookings.reportingAddress\"></textarea>\r\n                                    </mat-form-field>\r\n                                    <mat-form-field [hidden]=\"reportingAddressMaps==false\" class=\"w-100\">\r\n                                        <input matInput placeholder=\"Reporting Address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #searchReporting [(ngModel)]=\"bookings.reportingAddress\" (change)=\"setReportingAddress($event.target.value)\">\r\n                                    </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-12\">\r\n                                <agm-map (mapClick)=\"mapClickedReporting($event)\" [hidden]=\"reportingAddressMaps==false\" [latitude]=\"latitudeReporting\" [longitude]=\"longitudeReporting\" [scrollwheel]=\"false\" [zoom]=\"zoom\" [streetViewControl]=\"false\">\r\n                                        <agm-marker \r\n                                            [latitude]=\"latitudeReporting\"\r\n                                            [longitude]=\"longitudeReporting\"\r\n                                            [markerDraggable]=\"reportingDraggable\"\r\n                                            (dragEnd)=\"markerReportingDragEnd($event)\">\r\n                                            <agm-info-window>\r\n                                                <strong>Reporting Address</strong>\r\n                                            </agm-info-window>            \r\n                                        </agm-marker>\r\n                                </agm-map>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    \r\n                </div>\r\n                <div class=\"col-lg-6 col-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-12\">\r\n                                    <h5>\r\n                                           Drop Address\r\n                                            <mat-slide-toggle (change)=\"dropAddressChange($event)\" style=\"float:right\">Google Maps</mat-slide-toggle>\r\n                                        </h5>\r\n                                        <mat-form-field *ngIf=\"dropAddressMaps==false\" class=\"w-100\">\r\n                                            <textarea rows=\"4\" matInput placeholder=\"Drop Address\" [(ngModel)]=\"bookings.dropAddress\"></textarea>\r\n                                        </mat-form-field>\r\n                                        <mat-form-field [hidden]=\"dropAddressMaps==false\" class=\"w-100\">\r\n                                            <input matInput placeholder=\"Drop Address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #searchDrop [(ngModel)]=\"bookings.dropAddress\" (change)=\"setDropAddress($event.target.value)\">\r\n                                        </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-12\">\r\n                                    <agm-map (mapClick)=\"mapClickedDrop($event)\" [hidden]=\"dropAddressMaps==false\" [latitude]=\"latitudeDrop\" [longitude]=\"longitudeDrop\" [scrollwheel]=\"false\" [zoom]=\"zoom\" [streetViewControl]=\"false\">\r\n                                            <agm-marker \r\n                                            [latitude]=\"latitudeDrop\"\r\n                                            [longitude]=\"longitudeDrop\"\r\n                                            [markerDraggable]=\"dropDraggable\"\r\n                                            (dragEnd)=\"markerDropDragEnd($event)\">\r\n                                            <agm-info-window>\r\n                                                <strong>Drop Address</strong>\r\n                                            </agm-info-window>            \r\n                                        </agm-marker>\r\n                                    </agm-map>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        \r\n                </div>\r\n            </div>            \r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field matTooltip=\"Displayed in Duties\">\r\n                        Short Reporting Address\r\n                        <input matInput name=\"shortReportingAddress\" [(ngModel)]=\"bookings.shortReportingAddress\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        Dispatch Center\r\n                        <input matInput [matAutocomplete]=\"dispatchCenter\" [(ngModel)]=\"bookings.dispatchCenter\" [formControl]=\"branchCtrl\">\r\n                        <mat-autocomplete #dispatchCenter=\"matAutocomplete\">\r\n                        <mat-option *ngFor=\"let element of branch | async\" [value]=\"element.name\" (onSelectionChange)=\"setDispatchCenter(element,$event)\">\r\n                            {{element.name}}\r\n                        </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        Flight/Train Number\r\n                        <input matInput [(ngModel)]=\"bookings.flightTrainNo\" name=\"flightTrainNo\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-3 col-12\">\r\n                    <mat-form-field>\r\n                        PO Number\r\n                        <input matInput #bookedEmail  name=\"bookByEmail\" [(ngModel)]=\"bookings.poNumber\">\r\n                    </mat-form-field>\r\n                    <!-- <mat-form-field>\r\n                        Bill To\r\n                        <mat-select [(ngModel)]=\"bookings.billTo\" name=\"billTo\">\r\n                            <mat-option value=\"option\">Option</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field> -->\r\n                </div>\r\n            </div>            \r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-12\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        Remarks\r\n                        <textarea matInput name=\"Remarks\"[(ngModel)]=\"bookings.remarks\"></textarea>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-6 col-12\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        Additional Notes\r\n                        <textarea matInput name=\"operatorNotes\"[(ngModel)]=\"bookings.operatorNotes\"></textarea>\r\n                    </mat-form-field>\r\n                </div>                        \r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-12\">\r\n                    <mat-checkbox [(ngModel)]=\"bookings.unconfirmed\" *ngIf=\"bookings.status!='Unconfirmed'\"> Mark as unconfirmed booking</mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"row ptb-10\">\r\n                <div class=\"col-lg-12 col-12\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"saveBooking()\">Save</button>\r\n                    <button mat-raised-button *ngIf=\"bookings.status=='Unconfirmed'\" color=\"primary\" (click)=\"confirmBooking()\">Confirm Booking</button>\r\n                </div>\r\n            </div>\r\n        </div>                \r\n    </nb-card-body>\r\n</nb-card>\r\n                    \r\n                              "

/***/ }),

/***/ "./src/app/pages/operations/bookings/bookings.component.scss":
/***/ (function(module, exports) {

module.exports = ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 100px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n\ninput[type=date]::-webkit-inner-spin-button,\ninput[type=date]::-webkit-outer-spin-button {\n  -webkit-appearance: none; }\n\ntable {\n  width: 100%; }\n\nagm-map {\n  height: 150px !important;\n  width: 100%;\n  /* This is really important*/ }\n"

/***/ }),

/***/ "./src/app/pages/operations/bookings/bookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masters_vehiclegroups_vehiclegroups_component__ = __webpack_require__("./src/app/pages/masters/vehiclegroups/vehiclegroups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__masters_dutytype_duty_type_service__ = __webpack_require__("./src/app/pages/masters/dutytype/duty-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__masters_pricing_pricing_service__ = __webpack_require__("./src/app/pages/masters/pricing/pricing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_branch_new_branch_service__ = __webpack_require__("./src/app/pages/operations/new-branch/new-branch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__date_confirm_date_confirm_component__ = __webpack_require__("./src/app/pages/operations/date-confirm/date-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__duties_duties_component__ = __webpack_require__("./src/app/pages/duties/duties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__duties_duties_service__ = __webpack_require__("./src/app/pages/duties/duties.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var BookingsComponent = (function () {
    function BookingsComponent(snackbar, fb, bookingService, vehiclegroupsService, dutytypeService, dialog, customerService, pricingService, auth, branchService, router, mapsAPILoader, ngZone, dutyComponenet, DutiesService) {
        this.snackbar = snackbar;
        this.fb = fb;
        this.bookingService = bookingService;
        this.vehiclegroupsService = vehiclegroupsService;
        this.dutytypeService = dutytypeService;
        this.dialog = dialog;
        this.customerService = customerService;
        this.pricingService = pricingService;
        this.auth = auth;
        this.branchService = branchService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.dutyComponenet = dutyComponenet;
        this.DutiesService = DutiesService;
        this.deletedPassenger = [];
        this.deletedBookedBy = [];
        this.bookings = {};
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.branchCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.passenger = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.passengerEmail = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.passengerNo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.reportingAddressMaps = false;
        this.dropAddressMaps = false;
        this.city = [];
        this.bookByCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.fromCityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.toCityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.vehicleGroupCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.dutyTypeCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.user = {};
        this.isBookingMonthly = false;
        this.dutyArray = [];
        //MAPS API
        this.reportingDraggable = true;
        this.dropDraggable = true;
        // setCity(temp:any,event:any)
        // {
        //   if(event.source.selected==true)
        //   {
        //     this.temp2.city=temp
        //   }
        // }
        this.temp2 = {
            city: '',
            vehicleGroupId: '',
            customerId: '',
            dutyTypeId: ''
        };
        this.tempArray = [];
        this.param = {
            inserted: 'no',
            data: null
        };
        this.temp = {
            status: 'Booked',
            cname: '',
            passenger: '',
            vehicleGroup: '',
            dutyType: '',
            bookBy: '',
            bookByNo: '',
            bookByEmail: '',
            ccId: '',
            passengerNo: '',
            passengerEmail: '',
            fromLoc: '',
            toLoc: '',
            startDate: null,
            endDate: null,
            reportingTime: '',
            startFromGarage: '',
            reportingAddress: '',
            dropAddress: '',
            shortReportingAddress: '',
            flightTrainNo: '',
            dispatchCenter: '',
            dispatchCenterId: null,
            billTo: '',
            price: '',
            remarks: '',
            operatorNotes: '',
            label: '',
            vehicleGroupId: '',
            customerId: '',
            poNumber: '',
        };
    }
    BookingsComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    BookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this.fb.group({
            rows: this.fb.array([])
        });
        this.bookedByForm = this.fb.group({
            rows: this.fb.array([])
        });
        var bk = localStorage.getItem('uclueldata');
        this.bookings = JSON.parse(bk);
        console.log(this.bookings);
        this.setData(this.bookings);
        this.getPassenger();
        this.getBookedBy();
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.bookings.ownerID = data[0].ownerId;
            _this.customerService.getCustomers(_this.user).subscribe(function (data) {
                _this.customers = data;
                _this.customer = _this.customerCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
            });
            _this.branchService.getBranches(_this.user).subscribe(function (data) {
                _this.branches = data;
                _this.branch = _this.branchCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterBranch(val); }));
            });
            _this.setCustomer();
        });
        //Maps 
        //set google maps defaults
        this.zoom = 4;
        this.latitudeReporting = 39.8282;
        this.longitudeReporting = -98.5795;
        this.latitudeDrop = 39.8282;
        this.longitudeDrop = -98.5795;
        //create search FormControl
        this.searchControlDrop = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.searchControlReporting = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        var options = {
            componentRestrictions: { country: "in" }
        };
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocompleteReporting = new google.maps.places.Autocomplete(_this.searchReportingRef.nativeElement, options);
            var autocompleteDrop = new google.maps.places.Autocomplete(_this.searchDropRef.nativeElement, options);
            autocompleteReporting.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocompleteReporting.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitudeReporting = place.geometry.location.lat();
                    _this.longitudeReporting = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
            autocompleteDrop.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocompleteDrop.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitudeDrop = place.geometry.location.lat();
                    _this.longitudeDrop = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    BookingsComponent.prototype.confirmBooking = function () {
        var _this = this;
        this.bookings.status = 'Booked';
        this.bookings.startDate = __WEBPACK_IMPORTED_MODULE_12_moment__(this.bookings.startDate).format("YYYY-MM-DD");
        this.bookings.endDate = __WEBPACK_IMPORTED_MODULE_12_moment__(this.bookings.endDate).format("YYYY-MM-DD");
        var temp = this.myForm.get('rows');
        var temp2 = this.bookedByForm.get('rows');
        if (this.bookings.startDate != this.bookings.endDate) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_14__date_confirm_date_confirm_component__["a" /* DateConfirmComponent */], { data: { booking: this.bookings }, autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
                console.log(data);
                var monthlyBookingData = {
                    duties: data,
                    booking: _this.bookings
                };
                _this.bookingService.updateUnconfirmedMonthlyBooking(monthlyBookingData);
                // this.bookingService.updateUnconfirmedBooking(this.bookings);
                if (_this.deletedPassenger.length > 0) {
                    _this.bookingService.deletePassenger(_this.deletedPassenger);
                }
                if (_this.deletedBookedBy.length > 0) {
                    _this.bookingService.deleteBookedBy(_this.deletedBookedBy);
                }
                _this.bookingService.addPassengers(_this.bookings.id, temp.value);
                _this.bookingService.addBookedBy(_this.bookings.id, temp2.value);
                //this.defaltVal();
                _this.dialog.closeAll();
                _this.snackbar.open("Booking Updated Successfully", null, { duration: 5000 });
                _this.router.navigateByUrl('/pages/operations/bookingsdisp');
            });
        }
        else {
            this.bookingService.updateUnconfirmedBooking(this.bookings);
            if (this.deletedPassenger.length > 0) {
                this.bookingService.deletePassenger(this.deletedPassenger);
            }
            if (this.deletedBookedBy.length > 0) {
                this.bookingService.deleteBookedBy(this.deletedBookedBy);
            }
            this.bookingService.addPassengers(this.bookings.id, temp.value);
            this.bookingService.addBookedBy(this.bookings.id, temp2.value);
            //this.defaltVal();
            this.dialog.closeAll();
            this.snackbar.open("Booking Updated Successfully", null, { duration: 5000 });
            this.router.navigateByUrl('/pages/operations/bookingsdisp');
        }
    };
    BookingsComponent.prototype.getCities = function () {
        this.city = [
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
    };
    BookingsComponent.prototype.filterCities = function () {
        var _this = this;
        this.fromCity = this.fromCityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterFromCity(val); }));
        this.toCity = this.toCityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterToCity(val); }));
    };
    BookingsComponent.prototype.getVehicleGroups = function () {
        var _this = this;
        this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(function (data) {
            if (data.length == 0) {
                _this.snackbar.open("Please register some vehicle groups", "X", { duration: 3000 });
                //this.matDialogRef.close();
            }
            _this.vehicleGroups = data;
            _this.vehicleGroup = _this.vehicleGroupCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterVehicleGroup(val); }));
        });
    };
    BookingsComponent.prototype.getDutyTypes = function () {
        var _this = this;
        this.dutytypeService.getDutyType(this.user).subscribe(function (data) {
            if (data.length == 0) {
                _this.snackbar.open("Please register some dutytypes", "X", { duration: 3000 });
            }
            console.log(data);
            _this.dutyTypes = data;
            _this.dutyType = _this.dutyTypeCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterDutyType(val); }));
        });
    };
    BookingsComponent.prototype.setCustomer = function () {
        var _this = this;
        this.temp2.customerId = this.bookings.customerId;
        // console.log(this.temp2);
        var tempCust = {
            ownerId: this.user.ownerId,
            customerId: this.temp2.customerId
        };
        // console.log(tempCust);
        this.bookingService.getRecurringBookedBy(tempCust).subscribe(function (data) {
            _this.bookByArr = data;
            _this.bookBy = _this.bookByCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterBookBy(val); }));
        });
        this.bookingService.getRecurringPassenger(tempCust).subscribe(function (data) {
            _this.passengerArr = data;
            _this.passengers = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(_this.passengerArr);
            // console.log(data);
        });
        var temp = {
            id: this.bookings.customerId
        };
        console.log(this.bookings);
        this.customerService.getCustomerLimitCity({ id: this.bookings.customerId }).subscribe(function (data) {
            console.log(data);
            if (data.length != 0) {
                _this.city.length = 0;
                data.forEach(function (element) {
                    _this.city.push(element.city);
                });
            }
            else {
                _this.getCities();
            }
        }, function (err) { }, function () {
            _this.filterCities();
        });
        this.customerService.getCustomerLimitVehicleGroupForBookings({ id: this.bookings.customerId }).subscribe(function (data) {
            console.log(data);
            if (data.length != 0) {
                _this.vehicleGroups = data;
                _this.vehicleGroup = _this.vehicleGroupCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterVehicleGroup(val); }));
            }
            else {
                _this.getVehicleGroups();
            }
        });
        this.customerService.getCustomerLimitDutyTypeForBookings(temp).subscribe(function (data) {
            if (data.length != 0) {
                _this.dutyTypes = data;
                _this.dutyType = _this.dutyTypeCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterDutyType(val); }));
            }
            else {
                _this.getDutyTypes();
            }
        });
    };
    BookingsComponent.prototype.setData = function (temp) {
        this.customerCtrl.setValue(temp.cname);
        this.bookByCtrl.setValue(temp.bookBy);
        // const guests = this.fb.group({
        //   id: '',
        //   passenger: temp.passenger,
        //   passengerNo: temp.passengerNo,
        //   passengerEmail: temp.passengerEmail
        // })
        // this.passengerForms.push(guests);
        this.fromCityCtrl.setValue(temp.fromLoc);
        this.toCityCtrl.setValue(temp.toLoc);
        this.vehicleGroupCtrl.setValue(temp.vehicleGroup);
        this.dutyTypeCtrl.setValue(temp.dutyType);
    };
    BookingsComponent.prototype.setDispatchCenter = function (temp, event) {
        if (event.source.selected == true) {
            this.temp2.vehicleGroupId = temp.id;
            this.bookings.dispatchCenter = temp.name;
            this.bookings.dispatchCenterId = temp.id;
        }
    };
    BookingsComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitudeReporting = position.coords.latitude;
                _this.longitudeReporting = position.coords.longitude;
                _this.latitudeDrop = position.coords.latitude;
                _this.longitudeDrop = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    BookingsComponent.prototype.mapClickedReporting = function (event) {
        this.latitudeReporting = event.coords.lat;
        this.longitudeReporting = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: "in" } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.reportingAddress = (results[0].formatted_address);
                console.log(results[0].formatted_address);
            }
        }.bind(this));
    };
    BookingsComponent.prototype.markerReportingDragEnd = function (event) {
        this.latitudeReporting = event.coords.lat;
        this.longitudeReporting = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: "in" } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.reportingAddress = (results[0].formatted_address);
                console.log(results[0].formatted_address);
            }
        }.bind(this));
    };
    BookingsComponent.prototype.mapClickedDrop = function (event) {
        this.latitudeDrop = event.coords.lat;
        this.longitudeDrop = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: "in" } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.dropAddress = (results[0].formatted_address);
            }
        }.bind(this));
    };
    BookingsComponent.prototype.markerDropDragEnd = function (event) {
        this.latitudeDrop = event.coords.lat;
        this.longitudeDrop = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: "in" } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.dropAddress = (results[0].formatted_address);
            }
        }.bind(this));
    };
    BookingsComponent.prototype.reportingAddressChange = function (temp) {
        if (temp.checked == true) {
            this.reportingAddressMaps = true;
            this.geocodeReportingAddress();
        }
        else if (temp.checked == false) {
            this.reportingAddressMaps = false;
        }
    };
    BookingsComponent.prototype.geocodeReportingAddress = function () {
        var address = this.bookings.reportingAddress;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address, componentRestrictions: { country: 'in' } }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                this.latitudeReporting = results[0].geometry.location.lat();
                this.longitudeReporting = results[0].geometry.location.lng();
                console.log(results[0]);
            }
            else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        }.bind(this));
    };
    BookingsComponent.prototype.dropAddressChange = function (temp) {
        if (temp.checked == true) {
            this.dropAddressMaps = true;
            this.geocodeDropAddress();
        }
        else if (temp.checked == false) {
            this.dropAddressMaps = false;
        }
    };
    BookingsComponent.prototype.geocodeDropAddress = function () {
        var address = this.bookings.dropAddress;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address, componentRestrictions: { country: 'in' } }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                this.latitudeDrop = results[0].geometry.location.lat();
                this.longitudeDrop = results[0].geometry.location.lng();
            }
            else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        }.bind(this));
    };
    BookingsComponent.prototype.filterFromCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookingsComponent.prototype.filterToCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookingsComponent.prototype.filterVehicleGroup = function (val) {
        return this.vehicleGroups.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookingsComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookingsComponent.prototype.filterDutyType = function (val) {
        return this.dutyTypes.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookingsComponent.prototype.filterBranch = function (val) {
        return this.branches.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookingsComponent.prototype.filterBookBy = function (val) {
        return this.bookByArr.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookingsComponent.prototype.fromCitySelect = function (option, event) {
        if (event.source.selected == true) {
            this.bookings.fromLoc = option;
            this.temp2.city = option;
        }
    };
    BookingsComponent.prototype.toCitySelect = function (option, event) {
        if (event.source.selected == true) {
            this.bookings.toLoc = option;
        }
    };
    BookingsComponent.prototype.setBookBy = function (option, event, element) {
        if (event.source.selected == true) {
            element.get('bookByName').setValue(option.name);
            element.get('bookByNo').setValue(option.phoneNo);
            element.get('bookByEmail').setValue(option.emailId);
            element.get('CCID').setValue(option.CCID);
        }
    };
    BookingsComponent.prototype.setPassenger = function (option, event, element) {
        if (event.source.selected == true) {
            element.get('passenger').setValue(option.name);
            element.get('passengerNo').setValue(option.phoneNo);
            element.get('passengerEmail').setValue(option.emailId);
        }
    };
    BookingsComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    Object.defineProperty(BookingsComponent.prototype, "passengerForms", {
        get: function () {
            return this.myForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookingsComponent.prototype, "bookedByForms", {
        get: function () {
            return this.bookedByForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    BookingsComponent.prototype.addRow = function () {
        var row = this.fb.group({
            id: '',
            passenger: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            passengerEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            passengerNo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.passengerForms.push(row);
    };
    BookingsComponent.prototype.deleteRow = function (i) {
        var temp = this.myForm.get('rows');
        if (temp.value[i].id != "")
            this.deletedPassenger.push(temp.value[i].id);
        this.passengerForms.removeAt(i);
    };
    BookingsComponent.prototype.addBookedBy = function () {
        var row = this.fb.group({
            id: '',
            bookByName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            bookByNo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            bookByEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            CCID: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
        });
        this.bookedByForms.push(row);
    };
    BookingsComponent.prototype.deleteBookedBy = function (i) {
        var temp = this.bookedByForm.get('rows');
        if (temp.value[i].id != "")
            this.deletedBookedBy.push(temp.value[i].id);
        this.bookedByForms.removeAt(i);
    };
    BookingsComponent.prototype.deleteBooking = function (row) {
        this.bookingService.deleteBooking(row);
    };
    BookingsComponent.prototype.getPassenger = function () {
        var _this = this;
        this.passengerList = [];
        this.bookingService.getPassenger(this.bookings.id).subscribe(function (data) {
            data.forEach(function (element) {
                var row = _this.fb.group({
                    id: element.id,
                    passenger: element.passenger,
                    passengerEmail: element.passengerEmail,
                    passengerNo: element.passengerNo
                });
                _this.passengerForms.push(row);
            });
        });
    };
    BookingsComponent.prototype.getBookedBy = function () {
        var _this = this;
        this.bookedByList = [];
        this.bookingService.getBookedBy(this.bookings.id).subscribe(function (data) {
            data.forEach(function (element) {
                var row = _this.fb.group({
                    id: element.id,
                    bookByName: element.bookByName,
                    bookByNo: element.bookByNo,
                    bookByEmail: element.bookByEmail,
                    CCID: element.CCID,
                });
                _this.bookedByForms.push(row);
            });
        });
    };
    BookingsComponent.prototype.addBooking = function () {
        console.log(this.bookings.endDate);
        this.bookings.startDate = __WEBPACK_IMPORTED_MODULE_12_moment__(this.bookings.startDate).format("YYYY-MM-DD");
        this.bookings.endDate = __WEBPACK_IMPORTED_MODULE_12_moment__(this.bookings.endDate).format("YYYY-MM-DD");
        console.log(this.bookings.endDate);
        if (this.isBookingMonthly) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_14__date_confirm_date_confirm_component__["a" /* DateConfirmComponent */], { data: { booking: this.bookings }, autoFocus: false, disableClose: true });
        }
        else {
            console.log("Called");
            this.insertBooking();
        }
    };
    BookingsComponent.prototype.insertBooking = function () {
        var _this = this;
        var temp = this.myForm.get('rows');
        if (this.bookings.bookBy == '' || this.bookings.bookBy == null) {
            this.bookings.bookBy = this.bookByCtrl.value;
        }
        else {
            if (this.bookByArr.findIndex(function (x) { return x.name.toLowerCase() == _this.bookByCtrl.value.toLowerCase(); }) == -1) {
                this.bookingService.addRecurringBookedBy({
                    name: this.bookByCtrl.value,
                    phoneNo: this.bookings.bookByNo,
                    emailId: this.bookings.bookByEmail,
                    ownerId: this.user.ownerId,
                    customerId: this.bookings.customerId,
                }).subscribe(function (data) { return data; });
            }
        }
        temp.value.forEach(function (element) {
            if (_this.passengerArr.findIndex(function (x) { return x.name.toLowerCase() == element.passenger.toLowerCase(); }) == -1) {
                _this.bookingService.addRecurringPassenger({
                    name: element.passenger,
                    phoneNo: element.passengerNo,
                    emailId: element.passengerEmail,
                    ownerId: _this.user.ownerId,
                    customerId: _this.bookings.customerId,
                }).subscribe(function (data) { return data; });
            }
        });
        var bookingData = {
            booking: {},
            passenger: []
        };
        var tempid;
        this.bookings.status = 'Booked';
        if (this.passengerForms.controls[0] != undefined) {
            this.bookings.passenger = this.passengerForms.controls[0].value.passenger;
            this.bookings.passengerNo = this.passengerForms.controls[0].value.passengerNo;
            this.bookings.passengerEmail = this.passengerForms.controls[0].value.passengerEmail;
            if (this.passengerForms.controls.length > 1)
                this.bookings.passenger = this.bookings.passenger + "+" + (this.passengerForms.controls.length - 1);
        }
        this.getVehicleGroup(this.bookings.vehicleGroup, this.user.ownerId).subscribe(function (data) {
            if (data.length != 0) {
                _this.bookings.vehicleGroupId = data[0].id;
                _this.getDutyType(_this.bookings.dutyType, _this.user.ownerId).subscribe(function (data) {
                    if (data.length != 0) {
                        _this.bookings.dutyTypeId = data[0].id;
                        bookingData.booking = _this.bookings;
                        bookingData.passenger = temp.value;
                        _this.bookingService.addBooking(bookingData);
                        //this.matDialogRef.close();
                        _this.snackbar.open("Booking Completed", "X", { duration: 5000 });
                        _this.router.navigateByUrl('/pages/operations/bookingsdisp');
                    }
                    else {
                        _this.snackbar.open("Choose a valid Duty Type", "X", { duration: 3000 });
                    }
                });
            }
            else {
                _this.snackbar.open("Choose a valid vehicle group", "X", { duration: 3000 });
            }
            //this.defaltVal();
        });
    };
    // setCustomer(temp:any,event:any)
    // {
    //   if(event.source.selected==true)
    //   {
    //     this.bookings.cname=temp.name
    //     this.temp2.customerId=temp.id;
    //     this.bookings.customerId=temp.id;
    //     var tempCust=
    //     {
    //       ownerId:this.user.ownerId,
    //       customerId:temp.id
    //     }
    //     this.bookingService.getRecurringBookedBy(tempCust).subscribe(data=>{
    //       this.bookByArr=data;
    //       this.bookBy = this.bookByCtrl.valueChanges
    //       .pipe(
    //         startWith(''),
    //         map(val => this.filterBookBy(val))
    //       ); 
    //     })
    //     this.bookingService.getRecurringPassenger(tempCust).subscribe(data=>{
    //       this.passengerArr=data;
    //       this.passengers=Observable.of(this.passengerArr)
    //     })
    //   }
    // }
    BookingsComponent.prototype.filterPass = function (i) {
        var _this = this;
        this.passengers = this.passengerForms.at(i).get('passenger').valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (val) { return _this.filterPassenger(val); }));
    };
    BookingsComponent.prototype.filterPassenger = function (val) {
        return this.passengerArr.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookingsComponent.prototype.setVehicleGroup = function (temp, event) {
        console.log(temp);
        if (event.source.selected == true) {
            this.temp2.vehicleGroupId = temp.id;
            this.bookings.vehicleGroup = temp.name;
            this.bookings.vehicleGroupId = temp.id;
        }
    };
    BookingsComponent.prototype.setDutyType = function (temp, event) {
        if (event.source.selected == true) {
            this.temp2.dutyTypeId = temp.id;
            this.bookings.dutyType = temp.name;
            this.bookings.dutyTypeId = temp.id;
            if (temp.dType == "Long Duration-Total KM Daily HR(Monthly Bookings)" || temp.dType == "Long Duration-Total KM and HR(Monthly Bookings)") {
                this.isBookingMonthly = true;
            }
            else {
                this.isBookingMonthly = false;
            }
        }
    };
    BookingsComponent.prototype.getPrice = function () {
        var _this = this;
        if (this.temp2.customerId == '') {
            this.snackbar.open('Please select Customer', 'X', { duration: 3000 });
        }
        else if (this.temp2.vehicleGroupId == '') {
            this.snackbar.open('Please select Vehicle Group', 'X', { duration: 3000 });
        }
        else if (this.temp2.dutyTypeId == '') {
            this.snackbar.open('Please select Duty Type', 'X', { duration: 3000 });
        }
        else if (this.temp2.city == '') {
            this.snackbar.open('Please select City', 'X', { duration: 3000 });
        }
        else {
            this.pricingService.getCustomerPrice(this.temp2).subscribe(function (data) {
                if (data.length != 0)
                    _this.bookings.price = (data[0].baseRate);
                else
                    _this.snackbar.open('Price is not entered for current combination', 'X', { duration: 3000 });
            });
        }
    };
    BookingsComponent.prototype.saveBooking = function () {
        // this.DutiesService.getDutiesByBooking(this.bookings).subscribe(data => {
        //   console.log(data);
        //   var idArray=[]
        //   this.tempArray=data;
        //   this.tempArray.forEach(element=>{
        //     idArray.push(element.id)
        //   })
        //   if(this.tempArray.length > 1) {
        //       this.dialog.open(DateConfirmComponent,{autoFocus:false,disableClose:true,data:{
        //         booking:this.tempArray,endDate:this.bookings.endDate,type:'edit'
        //       }}).afterClosed().subscribe(data=>{
        //       })
        //   }
        // })
        this.bookings.status = 'Booked';
        if (this.dropAddressMaps == true) {
            this.bookings.dropAddress = this.searchDropRef.nativeElement.value;
        }
        if (this.reportingAddressMaps == true) {
            this.bookings.reportingAddress = this.searchReportingRef.nativeElement.value;
        }
        if (this.bookings.unconfirmed === true) {
            this.bookings.status = 'Unconfirmed';
        }
        else {
            this.bookings.status = 'Booked';
        }
        this.bookings.startDate = __WEBPACK_IMPORTED_MODULE_12_moment__(this.bookings.startDate).format("YYYY-MM-DD");
        this.bookings.endDate = __WEBPACK_IMPORTED_MODULE_12_moment__(this.bookings.endDate).format("YYYY-MM-DD");
        var temp = this.myForm.get('rows');
        var temp2 = this.bookedByForm.get('rows');
        this.bookingService.updateBooking(this.bookings);
        if (this.deletedPassenger.length > 0) {
            this.bookingService.deletePassenger(this.deletedPassenger);
        }
        if (this.deletedBookedBy.length > 0) {
            this.bookingService.deleteBookedBy(this.deletedBookedBy);
        }
        this.bookingService.addPassengers(this.bookings.id, temp.value);
        this.bookingService.addBookedBy(this.bookings.id, temp2.value);
        //this.defaltVal();
        this.dialog.closeAll();
        this.snackbar.open("Booking Updated Successfully", null, { duration: 5000 });
        this.router.navigateByUrl('/pages/operations/bookingsdisp');
    };
    BookingsComponent.prototype.getVehicleGroup = function (temp, ownerId) {
        return this.bookingService.getVehilceGroup(temp, ownerId);
    };
    BookingsComponent.prototype.getDutyType = function (temp, ownerId) {
        return this.bookingService.getDutyType(temp, ownerId);
    };
    BookingsComponent.prototype.defaltVal = function () {
        this.bookings.bookBy = '';
        this.bookings.passenger = '';
        this.bookings.vehicleGroup = '';
        this.bookings.dutyType = '';
        this.bookings.status = '';
        this.bookings.cname = '';
        this.bookings.bookByNo = '';
        this.bookings.bookByEmail = '';
        this.bookings.ccId = '';
        this.bookings.passenger = '';
        this.bookings.passengerNo = '';
        this.bookings.passengerEmail = '';
        this.bookings.fromLoc = '';
        this.bookings.toLoc = '';
        this.bookings.endDate = null;
        this.bookings.reportingTime = '';
        this.bookings.startFromGarage = '';
        this.bookings.reportingAddress = '';
        this.bookings.dropAddress = '';
        this.bookings.shortReportingAddress = '';
        this.bookings.flightTrainNo = '';
        this.bookings.dispatchCenter = '';
        this.bookings.dispatchCenterId = null;
        this.bookings.billTo = '';
        this.bookings.price = '';
        this.bookings.remarks = '';
        this.bookings.operatorNotes = '';
        this.bookings.label = '';
        this.bookings.vehicleGroup = '';
        this.bookings.dutyType = '';
        this.bookings.status = '';
        this.bookings.startDate = null;
        this.bookings.vehicleGroupId = '';
        this.bookings.customerId = '';
        this.bookings.poNumber = '';
    };
    BookingsComponent.prototype.setReportingAddress = function (temp) {
        this.bookings.reportingAddress = temp;
    };
    BookingsComponent.prototype.setDropAddress = function (temp) {
        this.bookings.dropAddress = temp;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BookingsComponent.prototype, "unloadHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchReporting"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], BookingsComponent.prototype, "searchReportingRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchDrop"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], BookingsComponent.prototype, "searchDropRef", void 0);
    BookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-form-layouts',
            styles: [__webpack_require__("./src/app/pages/operations/bookings/bookings.component.scss")],
            template: __webpack_require__("./src/app/pages/operations/bookings/bookings.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__bookings_service__["a" /* BookingsService */],
            __WEBPACK_IMPORTED_MODULE_2__masters_vehiclegroups_vehiclegroups_component__["a" /* VehicleGroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__masters_dutytype_duty_type_service__["a" /* DutyTypeService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_8__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_9__masters_pricing_pricing_service__["a" /* PricingService */],
            __WEBPACK_IMPORTED_MODULE_10__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__new_branch_new_branch_service__["a" /* NewBranchService */],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_15__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_16__duties_duties_component__["a" /* DutiesComponent */],
            __WEBPACK_IMPORTED_MODULE_17__duties_duties_service__["a" /* DutiesService */]])
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/bookingsexport/bookingsexport.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12 col-12\">    \n      <nb-card>              \n        <nb-card-body>\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-12\">\n              <mat-form-field>\n                <mat-select [(ngModel)]=\"predefined\"  placeholder=\"Preset\" >\n                  <mat-option *ngFor=\"let element of presets\" [value]=\"element.name\" (click)=\"predefinedRoles(element)\"> \n                    {{element.name}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-6 col-12\">\n              <form [formGroup]=\"preset\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Preset Name\" formControlName=\"permissionName\">\n                  <mat-error>\n                    Enter a Permission Name to save as a preset\n                  </mat-error>  \n                </mat-form-field>\n                <button mat-raised-button color=\"primary\" [disabled]=\"preset.invalid\" (click)=\"savePreset()\">Save Preset</button>\n              </form>            \n              <!-- <button mat-icon-button class=\"close-button\" color=\"warn\" (click)=\"close()\"><mat-icon style=\"font-size: 25px;\">close</mat-icon></button> -->      \n            </div>\n          </div>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-lg-8 col-12\">\n              Customer Name:\n              <mat-form-field class=\"w-100\">\n                <!-- <input aria-placeholder=\"Pick one\" (change)=\"setCustomer(option)\" name=\"cname\" [(ngModel)]=\"bookings.cname\" matInput [matAutocomplete]=\"custauto\"> -->\n                <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput [matAutocomplete]=\"custauto\" >\n                <mat-autocomplete #custauto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of customer |async\" [value]=\"option.name\" (onSelectionChange)=\"setCustomer(option,$event)\">\n                    {{ option.name }}\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>      \n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-12\">\n              <mat-form-field class=\"w-100\">\n                Start Date\n                <input matInput [(ngModel)]=\"filterStart\" [matDatepicker]=\"startDate\" (click)=\"startDate.open()\" readonly name=\"startDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n                <mat-datepicker #startDate></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-6 col-12\">\n              <mat-form-field class=\"w-100\">\n                End Date\n                <input matInput [(ngModel)]=\"filterEnd\" [matDatepicker]=\"endDate\" (click)=\"endDate.open()\" readonly name=\"endDate\">         \n                <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                <mat-datepicker #endDate></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-12\">\n              <mat-checkbox [(ngModel)]=\"exportBookings.id\" (change)=\"change($event,&quot;id as 'Booking ID'&quot;)\">\n                BookingId\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.cname\" (change)=\"change($event,&quot;cname as 'Customer Name'&quot;)\">\n                Customer Name\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.bookBy\" (change)=\"change($event,&quot;bookBy as 'Booked By'&quot;)\">\n                Booked by\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.bookByNo\" (change)=\"change($event,&quot;bookByNo as 'Booked By No'&quot;)\">\n                Booked by Phone\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.bookByEmail\" (change)=\"change($event,&quot;bookByEmail as 'Booked By Email'&quot;)\">\n                Booked by Email\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.ccId\" (change)=\"change($event,&quot;ccId as 'CCID'&quot;)\">\n                CCID\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.passenger\" (change)=\"change($event,&quot;passenger as 'Passenger'&quot;)\"> \n                Passenger Name\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.passengerNo\" (change)=\"change($event,&quot;passengerNo as 'PassengerNo'&quot;)\">\n                Passenger Phone\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.passengerEmail\" (change)=\"change($event,&quot;passengerEmail as 'Passenger Email'&quot;)\">\n                Passenger Email\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.fromLoc\" (change)=\"change($event,&quot;fromLoc as 'From Location'&quot;)\">\n                From city\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.toLoc\" (change)=\"change($event,&quot;toLoc as 'To Location'&quot;)\">\n                To city\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.startDate\" (change)=\"change($event,&quot;startDate as 'Start Date'&quot;)\">\n                Start Date\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.endDate\" (change)=\"change($event,&quot;endDate as 'End Date'&quot;)\">\n                End Date\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.reportingTime\" (change)=\"change($event,&quot;reportingTime as 'Reporting Time'&quot;)\">\n                Reporting Time\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.startFromGarage\" (change)=\"change($event,&quot;startFromGarage as 'Start From Garage'&quot;)\">\n                Start From Garage\n              </mat-checkbox><br>      \n            </div>\n            <div class=\"col-lg-6 col-12\">\n              <mat-checkbox [(ngModel)]=\"exportBookings.reportingAddress\" (change)=\"change($event,&quot;reportingAddress as 'Reporting Address'&quot;)\">\n                Reporting Address\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.shortReportingAddress\" (change)=\"change($event,&quot;shortReportingAddress as 'Short Reporting Address'&quot;)\">\n                Short reporting Address\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.dropAddress\" (change)=\"change($event,&quot;dropAddress as 'Drop Address'&quot;)\">\n                Drop Address\n              </mat-checkbox><br>        \n              <mat-checkbox [(ngModel)]=\"exportBookings.flightTrainNo\" (change)=\"change($event,&quot;flightTrainNo as 'Flight/Train No'&quot;)\">\n                Flight/Train Number            \n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.poNumber\" (change)=\"change($event,&quot;poNumber as 'PO Number'&quot;)\">\n                PO Number\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.dispatchCenter\" (change)=\"change($event,&quot;dispatchCenter as 'Dispatch Center'&quot;)\">\n                Dispatch Center\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.billTo\" (change)=\"change($event,&quot;billTo as 'Billed To'&quot;)\">\n                Bill To\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.price\" (change)=\"change($event,&quot;price as 'Price'&quot;)\">\n                Duty price\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.remarks\" (change)=\"change($event,&quot;remarks as 'Remarks'&quot;)\">\n                Remarks\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.operatorNotes\" (change)=\"change($event,&quot;operatorNotes as 'Operator Notes'&quot;)\">\n                Operator Notes\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.label\" (change)=\"change($event,&quot;label as 'Label'&quot;)\">\n                Label\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.vehicleGroup\" (change)=\"change($event,&quot;vehicleGroup as 'Vehicle Group'&quot;)\">\n                Vehicle Group\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.dutyType\" (change)=\"change($event,&quot;dutyType as 'Duty Type'&quot;)\">\n                Duty Type\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.totalPrice\" (change)=\"change($event,&quot;totalPrice as 'Total Price'&quot;)\">\n                Total Price\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.extraHours\" (change)=\"change($event,&quot;extraHours as 'Extra Hours'&quot;)\">\n                Extra Hours\n              </mat-checkbox><br>\n              <mat-checkbox [(ngModel)]=\"exportBookings.extraKms\" (change)=\"change($event,&quot;extraKms as 'Extra Kms'&quot;)\">\n                Extra Kms \n              </mat-checkbox><br>      \n            </div>                             \n          </div>\n        </nb-card-body>\n      </nb-card>    \n    </div>\n  </div>\n  <div class=\"row ptb-10\">\n    <div class=\"col-lg-12 col-12\">\n      <button mat-raised-button color=\"primary\" (click)=\"filterByDate()\">Export</button>\n      <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">Close</button>\n    </div>\n  </div>\n    "

/***/ }),

/***/ "./src/app/pages/operations/bookingsexport/bookingsexport.component.scss":
/***/ (function(module, exports) {

module.exports = "form {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/pages/operations/bookingsexport/bookingsexport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsexportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masters_new_employees_employee_service__ = __webpack_require__("./src/app/pages/masters/new-employees/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exportbookings_export_service__ = __webpack_require__("./src/app/pages/operations/exportbookings/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BookingsexportComponent = (function () {
    function BookingsexportComponent(dialog, bookingService, auth, employeeService, customerService, exportService, snackBar, fb) {
        this.dialog = dialog;
        this.bookingService = bookingService;
        this.auth = auth;
        this.employeeService = employeeService;
        this.customerService = customerService;
        this.exportService = exportService;
        this.snackBar = snackBar;
        this.fb = fb;
        this.columns = [];
        this.filterStart = '';
        this.filterEnd = '';
        this.user = {};
        this.temp = {
            customerId: '',
            startDate: '',
            endDate: '',
            columns: this.columns,
        };
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
        this.exportBookings = {
            name: '',
            bookingId: false,
            cname: false,
            bookBy: false,
            bookByNo: false,
            bookByEmail: false,
            passenger: false,
            passengerNo: false,
            passengerEmail: false,
            fromLoc: false,
            toLoc: false,
            startDate: false,
            endDate: false,
            reportingTime: false,
            startFromGarage: false,
            reportingAddress: false,
            dropAddress: false,
            shortReportingAddress: false,
            flightTrainNo: false,
            dispatchCenter: false,
            billTo: false,
            price: false,
            remarks: false,
            operatorNotes: false,
            label: false,
            vehicleGroup: false,
            dutyType: false,
            totalPrice: false,
            ownerId: '',
            poNumber: false,
            ccId: false,
            extraHours: false,
            extraKms: false,
        };
    }
    BookingsexportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            if (_this.user.type == 'employee') {
                var body = {
                    userId: _this.user.id
                };
                _this.employeeService.getEmployeeForCustomer(body).subscribe(function (data) {
                    _this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(function (data) {
                        if (data.length != 0) {
                            _this.customers = data;
                            _this.customer = _this.customerCtrl.valueChanges
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
                        }
                        else {
                            _this.getCustomer();
                        }
                    });
                });
            }
            else {
                _this.getCustomer();
            }
            _this.exportService.getExportBookingProfile(_this.user).subscribe(function (data) {
                _this.presets = data;
            });
        });
        this.preset = this.fb.group({
            permissionName: ['']
        });
    };
    BookingsexportComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers(this.user).subscribe(function (data) {
            _this.customers = data;
            _this.customer = _this.customerCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
        });
    };
    BookingsexportComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookingsexportComponent.prototype.filterByDate = function () {
        var _this = this;
        console.log(this.columns);
        var startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.filterStart).format('YYYY-MM-DD');
        var endDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.filterEnd).format('YYYY-MM-DD');
        this.temp.startDate = startDate;
        this.temp.endDate = endDate;
        this.temp.columns = this.columns;
        this.bookingService.getBookingForExport(this.temp).subscribe(function (data) {
            console.log(data);
            _this.bookingData = data;
            _this.exportBooking();
        });
    };
    BookingsexportComponent.prototype.change = function (event, temp) {
        console.log(event);
        if (event.checked == true) {
            this.columns.push(temp);
        }
    };
    BookingsexportComponent.prototype.setCustomer = function (temp, event) {
        console.log(temp);
        if (event.source.selected == true) {
            this.temp.customerId = temp.id;
        }
    };
    BookingsexportComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    BookingsexportComponent.prototype.exportBooking = function () {
        console.log(this.bookingData);
        var workBook = __WEBPACK_IMPORTED_MODULE_8_xlsx__["utils"].book_new();
        var workSheet = __WEBPACK_IMPORTED_MODULE_8_xlsx__["utils"].json_to_sheet(this.bookingData);
        __WEBPACK_IMPORTED_MODULE_8_xlsx__["utils"].book_append_sheet(workBook, workSheet, 'data');
        __WEBPACK_IMPORTED_MODULE_8_xlsx__["writeFile"](workBook, "_Bookings.xlsx");
    };
    BookingsexportComponent.prototype.savePreset = function () {
        var _this = this;
        delete this.exportBookings.id;
        this.exportBookings.name = this.preset.get('permissionName').value;
        this.exportService.addExportBookingProfile(this.exportBookings).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Preset Saved", "X", { duration: 3000 });
        });
    };
    BookingsexportComponent.prototype.predefinedRoles = function (temp) {
        console.log(temp);
        this.exportBookings = temp;
    };
    BookingsexportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bookingsexport',
            template: __webpack_require__("./src/app/pages/operations/bookingsexport/bookingsexport.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/bookingsexport/bookingsexport.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__bookings_service__["a" /* BookingsService */], __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__masters_new_employees_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_6__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_9__exportbookings_export_service__["a" /* ExportService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */]])
    ], BookingsexportComponent);
    return BookingsexportComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/branchdisplay/branchdisplay.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n      <nb-card>\n  \n          <nb-card-header>Branch\n            <!-- <button style=\"float: right;\" mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>settings</mat-icon></button>\n            <mat-menu #menu=\"matMenu\" class=\"mat-menu-panel\">\n              <button mat-menu-item (click)=\"openImport()\">Import</button>\n              <button mat-menu-item>Export</button>\n            </mat-menu> -->\n          </nb-card-header>\n            <nb-card-body>\n            <div align=\"center\">\n                <mat-form-field class=\"filter-field\">\n                  <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n                </mat-form-field>\n        \n                <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n                <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button></div>\n          <mat-table #table [dataSource]=\"dataSource\" matSort>\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n            </ng-container>\n        \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"type\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Type</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.type}} </mat-cell>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"phoneNumber\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Phone Number</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.phoneNumber}} </mat-cell>\n            </ng-container>\n            \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"cityOfOperation\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>City of Operation</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.address\"> {{element.cityOfOperations}} </mat-cell>\n              </ng-container>\n  \n            <ng-container matColumnDef=\"Options\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Options</mat-header-cell>\n              <mat-cell *matCellDef=\"let element ;let row\" (click)=\"$event.stopPropagation()\">\n                <button mat-icon-button *ngIf=\"permission.manageBranches==1\" [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n                <mat-menu #menu=\"matMenu\">\n                <button (click)=\"deleteRow(row)\" mat-menu-item>Delete</button>\n                </mat-menu>\n              </mat-cell>\n            </ng-container>\n        \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"></mat-row>\n          </mat-table>\n          <mat-paginator [length]=\"length\"\n          [pageSize]=\"pageSize\"\n          [pageSizeOptions]=\"pageSizeOptions\"\n          ></mat-paginator>\n  \n      </nb-card-body>\n    </nb-card>\n    </div>\n    <div class=\"col-lg-12\" align=\"right\">\n      <a *ngIf=\"permission.addBranches==1\" (click)=\"newBranch()\" class=\"float\">\n        <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n      </a>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/operations/branchdisplay/branchdisplay.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/branchdisplay/branchdisplay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchdisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_branch_new_branch_component__ = __webpack_require__("./src/app/pages/operations/new-branch/new-branch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_branch_new_branch_service__ = __webpack_require__("./src/app/pages/operations/new-branch/new-branch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masters_sub_users_sub_user_service__ = __webpack_require__("./src/app/pages/masters/sub-users/sub-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_confirm_confirm_component__ = __webpack_require__("./src/app/pages/modals/confirm/confirm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BranchdisplayComponent = (function () {
    function BranchdisplayComponent(dialog, auth, branchService, permissionSerivce, snackBar) {
        this.dialog = dialog;
        this.auth = auth;
        this.branchService = branchService;
        this.permissionSerivce = permissionSerivce;
        this.snackBar = snackBar;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.displayedColumns = ['name', 'type', 'phoneNumber', 'cityOfOperation', 'Options'];
        this.user = {};
        this.permission = {};
    }
    BranchdisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
            var _this = this;
            if (event.data == this.user.ownerId + 'branch') {
                this.branchService.getBranches(this.user).subscribe(function (data) {
                    _this.dataSource.data = data;
                });
            }
        }.bind(this);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
                if (_this.permission.manageBranches === 0) {
                    _this.displayedColumns.pop();
                }
                if (data[0].viewBranches == 1) {
                    _this.branchService.getBranches(_this.user).subscribe(function (data) {
                        _this.dataSource.data = data;
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                    });
                }
                else {
                    window.alert("You do not have permission to view branches");
                }
            });
        });
    };
    BranchdisplayComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    BranchdisplayComponent.prototype.clear = function () {
        this.searchTerm = '',
            this.dataSource.filter = '';
    };
    BranchdisplayComponent.prototype.newBranch = function () {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__new_branch_new_branch_component__["a" /* NewBranchComponent */], { autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data == "yes") {
                _this.ws.send(_this.user.ownerId + 'branch');
            }
        });
    };
    BranchdisplayComponent.prototype.selectRow = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__new_branch_new_branch_component__["a" /* NewBranchComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    BranchdisplayComponent.prototype.deleteRow = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.branchService.deleteBranches(row).subscribe(function (data) {
                    if (data.errno == undefined) {
                        _this.ws.send(_this.user.ownerId + "driver-disp");
                        _this.snackBar.open("Branch Deleted", "X", { duration: 3000 });
                    }
                });
            }
            else {
                if (data.errno == 1451) {
                    window.alert("Cannot delete because you have corresponding data");
                }
                else {
                    window.alert("Error Cannot be Deleted");
                }
            }
        });
    };
    BranchdisplayComponent.prototype.ngOnDestroy = function () {
        this.ws.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], BranchdisplayComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], BranchdisplayComponent.prototype, "paginator", void 0);
    BranchdisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'branchdisplay',
            template: __webpack_require__("./src/app/pages/operations/branchdisplay/branchdisplay.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/branchdisplay/branchdisplay.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__new_branch_new_branch_service__["a" /* NewBranchService */],
            __WEBPACK_IMPORTED_MODULE_5__masters_sub_users_sub_user_service__["a" /* SubUserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBar */]])
    ], BranchdisplayComponent);
    return BranchdisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/contactlogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactlogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactlogsService = (function () {
    function ContactlogsService(http) {
        this.http = http;
    }
    ContactlogsService.prototype.getDutyContactLogs = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/contactLogs/retrieveDuty', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ContactlogsService.prototype.getBookingsContactLogs = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/contactLogs/retrieveBookings', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ContactlogsService.prototype.getFlightContactLogs = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/contactLogs/retrieveFlight', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ContactlogsService.prototype.getHotelContactLogs = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/contactLogs/retrieveHotel', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ContactlogsService.prototype.getVisaContactLogs = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/contactLogs/retrieveVisa', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ContactlogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ContactlogsService);
    return ContactlogsService;
}());



/***/ }),

/***/ "./src/app/pages/operations/contactlogs/contactlogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n\n        <nb-card-header>Contact Logs</nb-card-header>\n          <nb-card-body>\n          <div align=\"center\">\n              <mat-form-field class=\"filter-field\">\n                <input matInput   placeholder=\"Filter\"  [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n              </mat-form-field>\n      \n              <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n              <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button></div>\n              <mat-tab-group mat-stretch-tabs #tabGroup (selectedTabChange)=\"tabChanged()\">\n                <mat-tab label=\"Duty\">\n                  <div>\n                      <mat-table #sort1='matSort' [dataSource]=\"dataSourceDuty\" matSort>\n                          <!-- Name Column -->\n                          <ng-container matColumnDef=\"log\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header>Log</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\"> {{element.log}} </mat-cell>\n                          </ng-container>\n\n                          <!-- Name Column -->\n                          <ng-container matColumnDef=\"date\">\n                              <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n                              <mat-cell *matCellDef=\"let element\"> {{element.date}} </mat-cell>\n                            </ng-container>\n\n                          <!-- Name Column -->\n                          <ng-container matColumnDef=\"userName\">\n                              <mat-header-cell *matHeaderCellDef mat-sort-header>By</mat-header-cell>\n                              <mat-cell *matCellDef=\"let element\"> {{element.userName}} </mat-cell>\n                            </ng-container>\n                      \n                          <!-- Weight Column -->\n                          <ng-container matColumnDef=\"dutyId\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Duty Id</mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\"> {{element.dutyId}} </mat-cell>\n                          </ng-container>\n                      \n                          <mat-header-row *matHeaderRowDef=\"displayedColumnsDuty\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: displayedColumnsDuty;\" (click)=\"selectRow(row)\"></mat-row>\n                        </mat-table>\n                        <mat-paginator [length]=\"lengthDuty\"\n                          [pageSize]=\"pageSizeDuty\"\n                          [pageSizeOptions]=\"pageSizeOptionsDuty\">\n                        </mat-paginator>\n                  </div>\n                  \n                </mat-tab>\n                <mat-tab label=\"Bookings\">\n                  <mat-table #sort2='matSort' [dataSource]=\"dataSourceBooking\" matSort>\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"log\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header>Log</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.log}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"date\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\"> {{element.date}} </mat-cell>\n                      </ng-container>\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"userName\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>By</mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\"> {{element.userName}} </mat-cell>\n                      </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"bookingId\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> Booking Id</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.bookingId}} </mat-cell>\n                    </ng-container>\n                \n                    <mat-header-row *matHeaderRowDef=\"displayedColumnsBookings\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumnsBookings;\"></mat-row>\n                  </mat-table>\n                  <mat-paginator [length]=\"lengthBooking\"\n                    [pageSize]=\"pageSizeBooking\"\n                    [pageSizeOptions]=\"pageSizeOptionsBooking\">\n                  </mat-paginator>\n                </mat-tab>\n                <mat-tab label=\"Flight\">\n                  <mat-table #sort3='matSort' [dataSource]=\"dataSourceFlight\" matSort>\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"log\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header>Log</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.log}} </mat-cell>\n                    </ng-container>\n                 <!-- Name Column -->\n                 <ng-container matColumnDef=\"date\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.date}} </mat-cell>\n                  </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"userName\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>By</mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.userName}} </mat-cell>\n                  </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"flightBookingId\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> Flight booking Id</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.flightBookingId}} </mat-cell>\n                    </ng-container>\n                \n                    <mat-header-row *matHeaderRowDef=\"displayedColumnsFlights\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumnsFlights;\"></mat-row>\n                  </mat-table>\n                  <mat-paginator [length]=\"lengthFlights\"\n                    [pageSize]=\"pageSizeFlights\"\n                    [pageSizeOptions]=\"pageSizeOptionsFlights\">\n                  </mat-paginator>\n                </mat-tab>\n                <mat-tab label=\"Hotels\">\n                  <mat-table #sort4='matSort' [dataSource]=\"dataSourceHotel\" matSort>\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"log\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header>Log</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.log}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"date\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\"> {{element.date}} </mat-cell>\n                      </ng-container>\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"userName\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>By</mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\"> {{element.userName}} </mat-cell>\n                      </ng-container>\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"hotelBookingId\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> Hotel booking Id</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.hotelBookingId}} </mat-cell>\n                    </ng-container>\n                \n                    <mat-header-row *matHeaderRowDef=\"displayedColumnsHotels\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumnsHotels;\"></mat-row>\n                  </mat-table>\n                  <mat-paginator #paginator1 [length]=\"lengthHotels\"\n                    [pageSize]=\"pageSizeHotels\"\n                    [pageSizeOptions]=\"pageSizeOptionsHotels\">\n                  </mat-paginator>\n                </mat-tab>\n                <mat-tab label=\"Visa\">\n                  <mat-table #sort5='matSort' [dataSource]=\"dataSourceVisa\" matSort>\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"log\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header>Log</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.log}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"date\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\"> {{element.date}} </mat-cell>\n                      </ng-container>\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"userName\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>By</mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\"> {{element.userName}} </mat-cell>\n                      </ng-container>\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"visaBookingId\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> Visa booking Id</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.visaId}} </mat-cell>\n                    </ng-container>\n                \n                    <mat-header-row *matHeaderRowDef=\"displayedColumnsVisa\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumnsVisa;\"></mat-row>\n                  </mat-table>\n                  <mat-paginator [length]=\"lengthVisa\"\n                    [pageSize]=\"pageSizeVisa\"\n                    [pageSizeOptions]=\"pageSizeOptionsVisa\">\n                  </mat-paginator>\n                </mat-tab>\n              </mat-tab-group>\n\n          </nb-card-body>\n        </nb-card>\n        </div>\n  <div class=\"col-lg-12\" align=\"right\">\n    <a *ngIf=\"permission.addBranches==1\" (click)=\"newBranch()\" class=\"float\">\n      <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n    </a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/operations/contactlogs/contactlogs.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/contactlogs/contactlogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactlogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactlogs_service__ = __webpack_require__("./src/app/pages/operations/contactlogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duties_details_details_component__ = __webpack_require__("./src/app/pages/duties/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duties_duties_service__ = __webpack_require__("./src/app/pages/duties/duties.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactlogsComponent = (function () {
    function ContactlogsComponent(auth, contactLogsService, dialog, dutyService) {
        this.auth = auth;
        this.contactLogsService = contactLogsService;
        this.dialog = dialog;
        this.dutyService = dutyService;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.displayedColumnsDuty = ['log', 'date', 'userName', 'dutyId'];
        this.displayedColumnsBookings = ['log', 'date', 'userName', 'bookingId'];
        this.displayedColumnsFlights = ['log', 'date', 'userName', 'flightBookingId'];
        this.displayedColumnsHotels = ['log', 'date', 'userName', 'hotelBookingId'];
        this.displayedColumnsVisa = ['log', 'date', 'userName', 'visaBookingId'];
        this.user = {};
        this.permission = {};
        this.pageSizeDuty = 5;
        this.pageSizeOptionsDuty = [10, 15, 25, 40];
        this.pageSizeBooking = 5;
        this.pageSizeOptionsBooking = [10, 15, 25, 40];
        this.pageSizeFlights = 5;
        this.pageSizeOptionsFlights = [10, 15, 25, 40];
        this.pageSizeHotels = 5;
        this.pageSizeOptionsHotels = [10, 15, 25, 40];
        this.pageSizeVisa = 5;
        this.pageSizeOptionsVisa = [10, 15, 25, 40];
        this.sampleDuty = [];
        this.dataSourceDuty = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.dataSourceBooking = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.dataSourceFlight = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.dataSourceHotel = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.dataSourceVisa = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
    }
    ContactlogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.contactLogsService.getDutyContactLogs(_this.user).subscribe(function (data) {
                data.forEach(function (element) {
                    var str = element.log;
                    var res = str.split(" on");
                    var res1 = res[1].split(" at");
                    var res2 = res1[1].split("by");
                    var finalData = {
                        id: element.id,
                        dutyId: element.dutyId,
                        log: res[0] + " at" + res2[0],
                        userName: res2[1],
                        date: res1[0]
                    };
                    _this.sampleDuty.push(finalData);
                });
                _this.dataSourceDuty.data = _this.sampleDuty;
                console.log(_this.dataSourceDuty);
            });
        });
    };
    ContactlogsComponent.prototype.search = function (value) {
    };
    ContactlogsComponent.prototype.clear = function () {
    };
    ContactlogsComponent.prototype.tabChanged = function () {
        var _this = this;
        console.log(this.tabGroup.selectedIndex);
        if (this.tabGroup.selectedIndex == 1) {
            this.contactLogsService.getBookingsContactLogs(this.user).subscribe(function (data) {
                _this.sampleDuty = [];
                data.forEach(function (element) {
                    var str = element.log;
                    var res = str.split(" on");
                    var res1 = res[1].split(" at");
                    var res2 = res1[1].split("by");
                    var finalData = {
                        id: element.id,
                        bookingId: element.bookingId,
                        log: res[0] + " at" + res2[0],
                        userName: res2[1],
                        date: res1[0]
                    };
                    _this.sampleDuty.push(finalData);
                });
                _this.dataSourceBooking.data = _this.sampleDuty;
                console.log(_this.dataSourceBooking);
            });
        }
        if (this.tabGroup.selectedIndex == 2) {
            this.contactLogsService.getFlightContactLogs(this.user).subscribe(function (data) {
                _this.sampleDuty = [];
                data.forEach(function (element) {
                    var str = element.log;
                    var res = str.split(" on");
                    var res1 = res[1].split(" at");
                    var res2 = res1[1].split("by");
                    var finalData = {
                        id: element.id,
                        flightBookingId: element.flightBookingId,
                        log: res[0] + " at" + res2[0],
                        userName: res2[1],
                        date: res1[0]
                    };
                    _this.sampleDuty.push(finalData);
                });
                _this.dataSourceFlight.data = _this.sampleDuty;
                console.log(_this.dataSourceFlight);
            });
        }
        if (this.tabGroup.selectedIndex == 3) {
            this.contactLogsService.getHotelContactLogs(this.user).subscribe(function (data) {
                _this.sampleDuty = [];
                data.forEach(function (element) {
                    var str = element.log;
                    var res = str.split(" on");
                    var res1 = res[1].split(" at");
                    var res2 = res1[1].split("by");
                    var finalData = {
                        id: element.id,
                        hotelBookingId: element.hotelBookingId,
                        log: res[0] + " at" + res2[0],
                        userName: res2[1],
                        date: res1[0]
                    };
                    _this.sampleDuty.push(finalData);
                });
                _this.dataSourceHotel.data = _this.sampleDuty;
                console.log(_this.dataSourceHotel);
            });
        }
        if (this.tabGroup.selectedIndex == 4) {
            this.contactLogsService.getVisaContactLogs(this.user).subscribe(function (data) {
                _this.sampleDuty = [];
                data.forEach(function (element) {
                    var str = element.log;
                    var res = str.split(" on");
                    var res1 = res[1].split(" at");
                    var res2 = res1[1].split("by");
                    var finalData = {
                        id: element.id,
                        visaId: element.visaId,
                        log: res[0] + " at" + res2[0],
                        userName: res2[1],
                        date: res1[0]
                    };
                    _this.sampleDuty.push(finalData);
                });
                _this.dataSourceVisa.data = _this.sampleDuty;
                console.log(_this.dataSourceVisa);
            });
        }
    };
    ContactlogsComponent.prototype.selectRow = function (row) {
        var _this = this;
        var temp = {
            id: row.dutyId
        };
        this.dutyService.getDutyById(temp).subscribe(function (data) {
            console.log(data);
            var dutyData = {
                row: data[0]
            };
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__duties_details_details_component__["a" /* DetailsComponent */], { data: dutyData, autoFocus: false, disableClose: true });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], ContactlogsComponent.prototype, "sort1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], ContactlogsComponent.prototype, "sort2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], ContactlogsComponent.prototype, "sort3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], ContactlogsComponent.prototype, "sort4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort5'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], ContactlogsComponent.prototype, "sort5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], ContactlogsComponent.prototype, "paginator1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], ContactlogsComponent.prototype, "paginator2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], ContactlogsComponent.prototype, "paginator3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], ContactlogsComponent.prototype, "paginator4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator5'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], ContactlogsComponent.prototype, "paginator5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tabGroup'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["N" /* MatTabGroup */])
    ], ContactlogsComponent.prototype, "tabGroup", void 0);
    ContactlogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contactlogs',
            template: __webpack_require__("./src/app/pages/operations/contactlogs/contactlogs.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/contactlogs/contactlogs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__contactlogs_service__["a" /* ContactlogsService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__duties_duties_service__["a" /* DutiesService */]])
    ], ContactlogsComponent);
    return ContactlogsComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/date-confirm/date-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <!-- Editable table -->\n    <div style=\"width: max-content\" class=\"card\">\n      <h4 class=\"card-header text-center\">Duties</h4>\n      <div class=\"card-body\" style=\"padding: 0;\">\n        <div id=\"table\" class=\"table-editable\">\n          <table class=\"table table-bordered table-responsive-md table-striped text-center\" style=\"margin-bottom: 0;\">\n            <tr>\n              <th class=\"text-center\">Date</th>\n              <!-- <th class=\"text-center\">Customer</th> -->\n              <!-- <th class=\"text-center\">Booked By</th> -->\n              <th class=\"text-center\">Duty Type</th>\n              <th class=\"text-center\">Vehicle Group</th>\n              <!-- <th class=\"text-center\">Vehicle</th>\n              <th class=\"text-center\">Reporting Address</th>\n              <th class=\"text-center\">Drop Address</th>\n              <th class=\"text-center\">Passenger</th> -->\n              <th class=\"text-center\">Clear</th>\n            </tr>\n            <tr *ngFor=\"let dutyArray of dutyArray; let id = index\">\n              <td>\n                <!-- <span (keyup)=\"changeValue(id, 'name', $event)\" (blur)=\"updateList(id, 'name', $event)\" contenteditable=\"true\">{{dutyArray.startDate}}</span> -->\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"dutyArray.startDate\" [min]=\"bookings.startDate\" [max]=\"bookings.endDate\" (dateChange)=\"changeDate(id,'startDate',dutyArray.startDate);\" (click)=\"picker.open();\"  placeholder=\"Choose a date\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker  #picker></mat-datepicker>\n                </mat-form-field>\n              </td>\n              <!-- <td>\n                <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'cname', $event)\" (blur)=\"updateList(id, 'cname', $event)\">{{dutyArray.cname}}</span>\n              </td> -->\n              <!-- <td>\n                <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'bookBy', $event)\" (blur)=\"updateList(id, 'bookBy', $event)\">{{dutyArray.bookBy}}</span>\n              </td> -->\n              <td [formGroup]=\"dutyTypeForm\">\n                <!-- <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'dutyType', $event)\" (click)=\"openDutyType()\" (blur)=\"updateList(id, 'dutyType', $event)\">{{dutyArray.dutyType}}</span> -->\n                <mat-form-field>\n                  <input matInput placeholder=\"Duty Type\" formControlName=\"dutyType\" [formControl]=\"dutyTypeCtrl\"  [matAutocomplete]=\"autoDT\">\n                  <mat-autocomplete #autoDT=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of dutyType | async\" [value]=\"option.name\" (onSelectionChange)=\"setDutyType(option,id,'dutyType')\">\n                      {{ option.name }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </td>\n              <td [formGroup]=\"vehicleGroupForm\">\n                <!-- <span readonly contenteditable=\"true\" (keyup)=\"changeValue(id, 'vehicleGroup', $event)\" (click)=\"openVehicleGroup()\" (blur)=\"updateList(id, 'vehicleGroup', $event)\">{{dutyArray.vehicleGroup}}</span> -->\n                <mat-form-field>\n                  <input matInput [formControl]=\"vehicleGroupCtrl\" formControlName=\"vehicleGroup\" placeholder=\"Vehicle Group\" [matAutocomplete]=\"autoVG\">\n                  <mat-autocomplete #autoVG=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of vehicleGroup | async\" [value]=\"option.name\" (onSelectionChange)=\"setVehicleGroup(option,id,'vehicleGroup')\">\n                      {{ option.name }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </td>\n              <!-- <td>\n                <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'vehicle', $event)\" (blur)=\"updateList(id, 'vehicle', $event)\">{{dutyArray.vehicle}}</span>\n              </td>\n              <td>\n                <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'fromLoc', $event)\" (blur)=\"updateList(id, 'fromLoc', $event)\">{{dutyArray.reportingAddress}}</span>\n              </td>\n              <td>\n                <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'toLoc', $event)\" (blur)=\"updateList(id, 'toLoc', $event)\">{{dutyArray.dropAddress}}</span>\n              </td>\n              <td>\n                <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'passenger', $event)\" (blur)=\"updateList(id, 'passenger', $event)\">{{dutyArray.passenger}}</span>\n              </td> -->\n              <td style=\"vertical-align: middle;\">\n                <button mat-icon-button (click)=\"clear(id)\"><mat-icon>clear</mat-icon></button>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n      <!-- Editable table -->\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12\">\n    <button mat-raised-button color=\"primary\" (click)=\"closeDialog()\">Save & Close</button>\n    <button mat-raised-button color=\"warn\" (click)=\"addMoreDuties()\">Add more duties</button>\n    <button mat-raised-button color=\"warn\" (click)=\"close()\">Exit</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/operations/date-confirm/date-confirm.component.scss":
/***/ (function(module, exports) {

module.exports = ".hide {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/pages/operations/date-confirm/date-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masters_vehiclegroups_vehiclegroups_component__ = __webpack_require__("./src/app/pages/masters/vehiclegroups/vehiclegroups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__masters_dutytype_duty_type_service__ = __webpack_require__("./src/app/pages/masters/dutytype/duty-type.service.ts");
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









var DateConfirmComponent = (function () {
    function DateConfirmComponent(datePipe, dialogRef, data, vehiclegroupsService, snackbar, auth, fb, dutytypeService, dialog) {
        var _this = this;
        this.datePipe = datePipe;
        this.dialogRef = dialogRef;
        this.data = data;
        this.vehiclegroupsService = vehiclegroupsService;
        this.snackbar = snackbar;
        this.auth = auth;
        this.fb = fb;
        this.dutytypeService = dutytypeService;
        this.dialog = dialog;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        // dataSource=new MatTableDataSource<Branch>();
        this.displayedColumns = ['startDate', 'Customer', 'bookedBy', 'dutyType', 'vehicleGroup', 'fromLoc', 'toLoc', 'Passenger', 'Options'];
        this.dutyArray = [];
        this.selectedDuties = {};
        this.duties = [];
        this.vehicleGroupCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.user = {};
        this.vehicleGroupDropDown = false;
        this.dutyTypeCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.dutyTypeDropDown = false;
        this.duty = {
            status: '',
            cname: '',
            startDate: null,
            passenger: '',
            vehicleGroup: '',
            dutyType: '',
            bookBy: '',
            bookByNo: '',
            bookByEmail: '',
            passengerNo: '',
            passengerEmail: '',
            fromLoc: '',
            toLoc: '',
            reportingTime: '',
            startFromGarage: '',
            reportingAddress: '',
            dropAddress: '',
            shortReportingAddress: '',
            flightTrainNo: '',
            dispatchCenter: '',
            billTo: '',
            price: '',
            remarks: '',
            operatorNotes: '',
            label: '',
            driverId: null,
            vehicleId: null,
            ownerId: '',
            dutyTypeId: null,
            vehicleGroupId: null,
            customerId: null
        };
        console.log(data);
        if (data.type == 'edit') {
            var i = 0;
            data.booking.forEach(function (element) {
                console.log(element);
                _this.bookings = element;
                console.log(_this.bookings);
                var sDate = new Date(element.startDate);
                var eDate = new Date(element.endDate);
                //   //this.duty.bid=tempid;
                _this.duty.startDate = _this.datePipe.transform(sDate, 'yyyy-MM-dd');
                sDate.setDate(sDate.getDate() + 1);
                _this.dutyArray.push(Object.assign({}, _this.duty));
                _this.dutyTypeCtrl.setValue(_this.dutyArray[i].dutyType);
                _this.vehicleGroupCtrl.setValue(_this.dutyArray[i].vehicleGroup);
                console.log(_this.dutyArray);
                i++;
                _this.loadDutyVal();
            });
            if (data.endDate != this.dutyArray[this.dutyArray.length - 1].startDate) {
                var eDate = new Date(data.endDate);
                var sDate = new Date(this.dutyArray[this.dutyArray.length - 1].startDate);
                sDate.setDate(sDate.getDate() + 1);
                console.log(sDate, eDate);
                while (sDate <= eDate) {
                    this.duty.startDate = this.datePipe.transform(sDate, 'yyyy-MM-dd');
                    sDate.setDate(sDate.getDate() + 1);
                    console.log(this.duty.startDate);
                    console.log(this.duty.endDate);
                    this.dutyArray.push(Object.assign({}, this.duty));
                    this.dutyTypeCtrl.setValue(this.dutyArray[0].dutyType);
                    this.vehicleGroupCtrl.setValue(this.dutyArray[0].vehicleGroup);
                    console.log(this.dutyArray);
                }
            }
        }
        else {
            this.bookings = data.booking;
            this.loadDutyVal();
            if (this.bookings.startDate != this.bookings.endDate) {
                var sDate = new Date(this.bookings.startDate);
                var eDate = new Date(this.bookings.endDate);
                //this.duty.bid=tempid;
                var i = 0;
                while (sDate <= eDate) {
                    var checkDate = void 0;
                    checkDate = this.datePipe.transform(sDate, 'EEEE');
                    console.log(checkDate, "Before check");
                    if (checkDate === 'Saturday' || checkDate === 'Sunday') {
                        sDate.setDate(sDate.getDate() + 1);
                        console.log(sDate);
                    }
                    else {
                        this.duty.startDate = this.datePipe.transform(sDate, 'yyyy-MM-dd');
                        //  this.duty.endDate=this.datePipe.transform(eDate,'yyyy-MM-dd')
                        sDate.setDate(sDate.getDate() + 1);
                        //  eDate.setDate(eDate.getDate()+1);
                        this.dutyArray.push(Object.assign({}, this.duty));
                        this.dutyTypeCtrl.setValue(this.dutyArray[0].dutyType);
                        this.vehicleGroupCtrl.setValue(this.dutyArray[0].vehicleGroup);
                    }
                }
            }
            else {
                var sDate = new Date(this.bookings.startDate);
                //this.duty.bid=tempid;
                this.duty.startDate = this.datePipe.transform(sDate, 'yyyy-MM-dd');
                this.dutyArray.push(this.duty);
            }
            this.vehicleGroupForm = this.fb.group({
                vehicleGroup: []
            });
            this.dutyTypeForm = this.fb.group({
                dutyType: []
            });
        }
    }
    DateConfirmComponent.prototype.clear = function (id) {
        this.dutyArray.splice(id, 1);
    };
    DateConfirmComponent.prototype.addMoreDuties = function () {
        this.snackbar.open("Adding more duties would result in change of the booking end date", "x", { duration: 5000 });
        var lastDate = this.dutyArray[this.dutyArray.length - 1].startDate;
        lastDate = new Date(lastDate);
        lastDate.setDate(lastDate.getDate() + 1);
        this.duty.startDate = this.datePipe.transform(lastDate, 'yyyy-MM-dd');
        this.dutyArray.push(Object.assign({}, this.duty));
    };
    DateConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
        });
        this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(function (data) {
            if (data.length == 0) {
                _this.snackbar.open("Please register some vehicle groups", "X", { duration: 3000 });
            }
            _this.vehicleGroups = data;
            _this.vehicleGroup = _this.vehicleGroupCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (val) { return _this.filterVehicleGroup(val); }));
        });
        this.dutytypeService.getDutyType(this.user).subscribe(function (data) {
            if (data.length == 0) {
                _this.snackbar.open("Please register some dutytypes", "X", { duration: 3000 });
            }
            _this.dutyTypes = data;
            _this.dutyType = _this.dutyTypeCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (val) { return _this.filterDutyType(val); }));
        });
    };
    DateConfirmComponent.prototype.setVehicleGroup = function (option, id, property) {
        console.log(option, id, property);
        this.dutyArray[id][property] = option.name;
        this.dutyArray[id]['vehicleGroupId'] = option.id;
        console.log(this.dutyArray);
        this.vehicleGroupCtrl.reset;
    };
    DateConfirmComponent.prototype.setDutyType = function (option, id, property) {
        this.dutyArray[id][property] = option.name;
        this.dutyArray[id]['dutyTypeId'] = option.id;
    };
    DateConfirmComponent.prototype.changeDate = function (id, property, startDate) {
        console.log(id, property, startDate);
        var date = __WEBPACK_IMPORTED_MODULE_3_moment__(startDate).format("YYYY-MM-DD");
        this.dutyArray[id][property] = date;
        console.log(this.dutyArray);
    };
    DateConfirmComponent.prototype.filterVehicleGroup = function (val) {
        return this.vehicleGroups.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    DateConfirmComponent.prototype.filterDutyType = function (val) {
        return this.dutyTypes.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    DateConfirmComponent.prototype.updateList = function (id, property, event) {
        var editField = event.target.textContent;
        this.dutyArray[id][property] = editField;
        console.log(this.dutyArray);
    };
    DateConfirmComponent.prototype.changeValue = function (id, property, event) {
        this.editField = event.target.textContent;
    };
    DateConfirmComponent.prototype.openVehicleGroup = function () {
        this.vehicleGroupDropDown = true;
    };
    DateConfirmComponent.prototype.openDutyType = function () {
        this.dutyTypeDropDown = true;
    };
    DateConfirmComponent.prototype.closeDialog = function () {
        this.dialogRef.close(this.dutyArray);
    };
    DateConfirmComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DateConfirmComponent.prototype.loadDutyVal = function () {
        this.duty.bookBy = this.bookings.bookBy;
        //this.duty.date= this.bookings.date;  it is not same as booking date
        this.duty.passenger = this.bookings.passenger;
        this.duty.vehicleGroup = this.bookings.vehicleGroup;
        this.duty.dutyType = this.bookings.dutyType;
        this.duty.status = this.bookings.status;
        this.duty.cname = this.bookings.cname;
        this.duty.bookByNo = this.bookings.bookByNo;
        this.duty.bookByEmail = this.bookings.bookByEmail;
        this.duty.passenger = this.bookings.passenger;
        this.duty.passengerNo = this.bookings.passengerNo;
        this.duty.passengerEmail = this.bookings.passengerEmail;
        this.duty.fromLoc = this.bookings.fromLoc;
        this.duty.toLoc = this.bookings.toLoc;
        //this.duty.endDate=this.bookings.endDate;
        this.duty.reportingTime = this.bookings.reportingTime;
        this.duty.startFromGarage = this.bookings.startFromGarage;
        this.duty.reportingAddress = this.bookings.reportingAddress;
        this.duty.dropAddress = this.bookings.dropAddress;
        this.duty.shortReportingAddress = this.bookings.shortReportingAddress;
        this.duty.flightTrainNo = this.bookings.flightTrainNo;
        this.duty.dispatchCenter = this.bookings.dispatchCenter;
        this.duty.billTo = this.bookings.billTo;
        this.duty.price = this.bookings.price;
        this.duty.remarks = this.bookings.remarks;
        this.duty.operatorNotes = this.bookings.operatorNotes;
        this.duty.label = this.bookings.label;
        this.duty.vehicleGroup = this.bookings.vehicleGroup;
        this.duty.dutyType = this.bookings.dutyType;
        this.bookings.status;
        this.duty.vehicleGroupId = this.bookings.vehicleGroupId;
        this.duty.dutyTypeId = this.bookings.dutyTypeId;
        this.duty.ownerId = this.bookings.ownerID;
        this.duty.customerId = this.bookings.customerId;
        // this.duty.startDate=this.bookings.startDate;
    };
    DateConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'date-confirm',
            template: __webpack_require__("./src/app/pages/operations/date-confirm/date-confirm.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/date-confirm/date-confirm.component.scss")],
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_5__masters_vehiclegroups_vehiclegroups_component__["a" /* VehicleGroupsComponent */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__masters_dutytype_duty_type_service__["a" /* DutyTypeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */]])
    ], DateConfirmComponent);
    return DateConfirmComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/dutydisp/dutydisp.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>Duties</nb-card-header>\n      <nb-card-body>\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n          \n          <ng-container matColumnDef=\"startDate\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Date </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.startDate | date: 'dd-MM-yyyy'}} </mat-cell>\n          </ng-container>\n        \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"cname\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Customer </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.cname}} </mat-cell>\n          </ng-container>\n\n          <!-- Booked By Column -->\n          <ng-container matColumnDef=\"bookBy\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Booked by </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"  [matTooltip]=\"element.bookByNo\"> {{element.bookBy}} </mat-cell>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"passenger\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Passenger </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.passengerNo\"> {{element.passenger}} </mat-cell>            \n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"driver\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Driver/Supplier  </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.supplierId==null\"> {{element.driver}} </span>\n              <span *ngIf=\"element.supplierId!=null\"> {{element.supplierName}} </span>\n            </mat-cell>           \n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"vehicleGroup\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Vehicle Group </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.vehicleGroup}} </mat-cell>            \n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"dutyType\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Duty Type </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.dutyType}} </mat-cell>              \n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"fromLoc\">            \n            <mat-header-cell *matHeaderCellDef mat-sort-header> From City </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.fromLoc}} </mat-cell>              \n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"reportingAddress\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Short Reporting Address </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.reportingAddress\"> {{element.shortReportingAddress}} </mat-cell>              \n          </ng-container>  \n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"vehicle\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Vehicle </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.vehicle}} </mat-cell>              \n          </ng-container>  \n\n            <!-- Symbol Column -->\n          <ng-container matColumnDef=\"dropAddress\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Drop Address </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.dropAddress\"> {{element.dropAddress}} </mat-cell>              \n          </ng-container>\n\n          <!-- Symbol Column -->\n          <!-- <ng-container matColumnDef=\"startFromGarage\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Start Time From Garage </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.startFromGarage}} </mat-cell>              \n          </ng-container> -->\n          \n            <!-- Symbol Column -->\n          <ng-container matColumnDef=\"reportingTime\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Reporting Time </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.reportingTime}} </mat-cell>              \n          </ng-container>\n          \n            <!-- Symbol Column -->\n          <ng-container matColumnDef=\"remarks\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Remarks </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.remarks}} </mat-cell>\n          </ng-container>\n\n            <!-- <ng-container matColumnDef=\"remarks\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Labels </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.remarks}} </mat-cell>\n          </ng-container> -->\n\n          <ng-container matColumnDef=\"labelArray\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Labels </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <mat-chip-list *ngFor=\"let skelement of element.labelArray\">\n                <mat-chip [style.background-color]=\"skelement.color\" [ngStyle]=\"{'color': setTextColor(skelement.color)}\" style=\"transform: scale(0.80,0.80);border-radius: 0;margin-bottom: -3px;animation: blink 1s linear infinite;\" selected=\"true\">{{skelement.labelName}}</mat-chip>\n              </mat-chip-list> \n            </mat-cell>  \n          </ng-container>\n\n          \n            <!-- Symbol Column -->\n          <ng-container matColumnDef=\"status\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\">\n                <mat-chip-list>\n                  <mat-chip color=\"primary\" selected=\"true\">{{element.status}}</mat-chip>\n                </mat-chip-list> \n              </mat-cell>  \n          </ng-container>\n\n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options </mat-header-cell>\n            <mat-cell style=\"vertical-align: middle\" *matCellDef=\"let element ;let row\" (click)=\"$event.stopPropagation()\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              \n              <mat-menu #menu=\"matMenu\">\n                \n              <!-- <button  mat-menu-item >Details</button> -->\n              <!-- <button  *ngIf=\"row.status=='Completed'\" mat-menu-item (click)=\"createInvoice(row)\">Create Invoice</button> -->\n              <button *ngIf=\"row.status=='Booked' || row.status=='Allotted' || permission.manageLabels==1\" mat-menu-item (click)=\"addRemoveLabels(row)\">Add/Remove Labels</button>\n              <button *ngIf=\"permission.smsEmailCallDuties\" mat-menu-item (click)=\"call(row)\">Contact</button>\n              <!-- <button *ngIf=\"row.status=='Booked' || row.status=='Allotted'\" mat-menu-item (click)=\"allotSupporters(row)\">Allot Supporters</button> -->\n              <button *ngIf=\"row.status=='Allotted' && row.supplierBId==null\" mat-menu-item (click)=\"selectAllotments(row)\">Re-Allot on Duty</button>\n              <button *ngIf=\"row.status=='Allotted' && row.supplierBId==null\" mat-menu-item (click)=\"clearAllotment(row)\">Clear Allotment</button>\n              <button *ngIf=\"row.status=='Booked' || row.status=='Allotted' && permission.editDuties\" mat-menu-item (click)=\"selectRow(row)\">Edit</button>\n              <button *ngIf=\"row.status=='Booked' && row.supplierDId==null && permission.allotVehiclesDriver\" mat-menu-item (click)=\"selectAllotments(row)\">Allot Driver & Vehicle</button>\n              <button mat-menu-item (click)=\"setOfflineAllotment(row)\">Set Driver/Vehicle Details</button>\n              <button *ngIf=\"row.ownerDId!=null && permission.sendInfoDuty\" mat-menu-item (click)=\"sendInfo2(row)\">Send Info</button>\n              <button *ngIf=\"row.status=='Allotted' && row.supplierBId==null && permission.viewDutySlip\" mat-menu-item (click)=\"printDutySlip(row)\">Print Duty Slip</button>\n              <button *ngIf=\"row.status=='Allotted'\" mat-menu-item (click)=\"createPlacard(row)\">Create Placard</button>\n              <button *ngIf=\"row.status=='Allotted' && row.supplierDId==null && permission.dispatchDuty\" mat-menu-item (click)=\"dispatched(row)\">Mark as Dispatched</button>\n              <button *ngIf=\"row.status=='Dispatched' && row.supplierDId==null && permission.dispatchDuty\" mat-menu-item (click)=\"dispatched(row)\">Revert Dispatch</button>\n              <button *ngIf=\"row.status=='Dispatched' && row.supplierDId==null && permission.viewTracking\" mat-menu-item (click)=\"trackVehicle(row)\">Track Vehicle</button>\n              <button *ngIf=\"row.status=='Dispatched' && row.supplierDId==null && row.ownerDId==null && permission.closeDuty\" mat-menu-item (click)=\"openCloseDuty(row)\">Close Duty</button>\n              <button *ngIf=\"row.status=='Dispatched' && row.ownerDId!=null\" mat-menu-item (click)=\"openCloseSupplierDuty(row)\">Close Supplier Duty</button>\n              <button *ngIf=\"row.status!='Cancelled' && permission.addPettyCash\" mat-menu-item (click)=\"addPettyCash(row)\">Add Petty Cash</button>\n              <button *ngIf=\"permission.viewBookings\" mat-menu-item (click)=\"viewBookings(row)\">View Booking</button>\n              <button *ngIf=\"row.status=='Booked' || row.status=='Allotted' && permission.cancelDuty\" mat-menu-item (click)=\"cancelDuty(row)\">Cancel Duty</button>\n              </mat-menu>\n              <mat-icon style=\"display:table;margin:auto;\" *ngIf=\"row.ownerDId\" matTooltip=\"Duty From Circles\" matTooltipClass=\"example-tooltip-green\">redo</mat-icon>\n              <mat-icon style=\"display:table;margin:auto;\" *ngIf=\"row.supplierDId\" matTooltip=\"Allotted To Supplier\" matTooltipClass=\"example-tooltip-green\">how_to_reg</mat-icon>\n            </mat-cell>\n            \n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row [ngStyle]=\"{'background-color':rowColors(row.startDate,row.status)}\" *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"details(row)\"></mat-row>\n\n        </mat-table>\n        <mat-paginator [length]=\"length\"\n            [pageSize]=\"pageSize\"\n            [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n      </nb-card-body>\n    </nb-card>\n\n    <div style=\"bottom: 5%\" *ngIf=\"logs.length>0\">\n      <ul>\n        <li *ngFor=\"let element of logs\">\n          {{element.message}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/operations/dutydisp/dutydisp.component.scss":
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes blink {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: .6; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blink {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: .6; }\n  100% {\n    opacity: 1; } }\n\n.mat-column-dropAddress {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.mat-column-startDate {\n  white-space: nowrap; }\n"

/***/ }),

/***/ "./src/app/pages/operations/dutydisp/dutydisp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutydispComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_sort__ = __webpack_require__("./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_paginator__ = __webpack_require__("./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duties_duties_service__ = __webpack_require__("./src/app/pages/duties/duties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__duties_addremovelabels_addremovelabels_component__ = __webpack_require__("./src/app/pages/duties/addremovelabels/addremovelabels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__duties_call_call_component__ = __webpack_require__("./src/app/pages/duties/call/call.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__duties_driverallotment_driverallotment_component__ = __webpack_require__("./src/app/pages/duties/driverallotment/driverallotment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__duties_offlineallottment_offlineallottment_component__ = __webpack_require__("./src/app/pages/duties/offlineallottment/offlineallottment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__duties_sendinfo_sendinfo_component__ = __webpack_require__("./src/app/pages/duties/sendinfo/sendinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__duties_duty_slip_duty_slip_component__ = __webpack_require__("./src/app/pages/duties/duty-slip/duty-slip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__duties_createplacard_createplacard_component__ = __webpack_require__("./src/app/pages/duties/createplacard/createplacard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modals_confirm_confirm_component__ = __webpack_require__("./src/app/pages/modals/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__duties_selfdrive_selfdrive_component__ = __webpack_require__("./src/app/pages/duties/selfdrive/selfdrive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__duties_closeduty_closeduty_component__ = __webpack_require__("./src/app/pages/duties/closeduty/closeduty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__duties_newpettycash_newpettycash_component__ = __webpack_require__("./src/app/pages/duties/newpettycash/newpettycash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__duties_close_supplier_duty_close_supplier_duty_component__ = __webpack_require__("./src/app/pages/duties/close-supplier-duty/close-supplier-duty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__duties_bookingdetails_bookingdetails_component__ = __webpack_require__("./src/app/pages/duties/bookingdetails/bookingdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__duties_details_details_component__ = __webpack_require__("./src/app/pages/duties/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__activitylog_service__ = __webpack_require__("./src/app/activitylog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var DutydispComponent = (function () {
    function DutydispComponent(DutiesService, dialog, snackBar, authService, router, activityLogs) {
        this.DutiesService = DutiesService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.activityLogs = activityLogs;
        this.pageSize = 10;
        this.pageSizeOptions = [10, 15, 25, 40];
        this.displayedColumns = ['startDate', 'cname', 'bookBy', 'passenger', 'driver', 'dutyType',
            'reportingAddress', 'vehicle'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material_table__["a" /* MatTableDataSource */]();
        this.permission = {};
        this.user = {};
        this.tempArray = [];
        this.businessSettings = {};
        this.bookings = {};
        this.logs = [];
        this.idArray = [];
    }
    DutydispComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
            var _this = this;
            if (event.data == this.user.ownerId + 'dutydisp')
                this.DutiesService.getDutiesByBooking(this.bookings).subscribe(function (data) {
                    console.log(data);
                    var idArray = [];
                    _this.tempArray = data;
                    _this.tempArray.forEach(function (element) {
                        idArray.push(element.id);
                    });
                    _this.loadLabels(idArray);
                    _this.dataSource.data = _this.tempArray;
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                });
        }.bind(this);
        var bk = localStorage.getItem('uclueldata');
        if (bk == null || bk == undefined) {
            this.router.navigateByUrl('/pages/operations/bookingsdisp');
        }
        this.bookings = JSON.parse(bk);
        console.log(this.bookings);
        this.activityLogs.getBookingLogs({ id: this.bookings.id }).subscribe(function (data) {
            _this.logs = data;
        });
        this.authService.user.subscribe(function (data) {
            _this.user = data[0];
            _this.authService.permissions.subscribe(function (data) {
                _this.permission = data[0];
            });
            _this.authService.businessSettings.subscribe(function (data) {
                console.log(data);
                _this.businessSettings = data;
                if (_this.businessSettings.ShowVehicleGroup) {
                    _this.displayedColumns.push('vehicleGroup');
                }
                if (_this.businessSettings.ShowFromCity) {
                    _this.displayedColumns.push('fromLoc');
                }
                else if (_this.businessSettings.ShowDropAddress) {
                    _this.displayedColumns.push('dropAddress');
                }
                else if (_this.businessSettings.ShowGarageStartTimeInsteadOfReportingTime) {
                    _this.displayedColumns.push('startFromGarage');
                }
                else if (!_this.businessSettings.ShowGarageStartTimeInsteadOfReportingTime) {
                    _this.displayedColumns.push('reportingTime');
                }
                else if (_this.businessSettings.ShowRemarks) {
                    _this.displayedColumns.push('remarks');
                }
                _this.displayedColumns.push('labelArray', 'status', 'Options');
                console.log(_this.displayedColumns);
            });
            _this.today = __WEBPACK_IMPORTED_MODULE_8_moment__().format('YYYY-MM-DD');
            _this.DutiesService.getDutiesByBooking(_this.bookings).subscribe(function (data) {
                console.log(data);
                _this.tempArray = data;
                _this.tempArray.forEach(function (element) {
                    console.log(_this.idArray);
                    _this.idArray.push(element.id);
                });
            }, function (err) { }, function () {
                console.log(_this.idArray);
                _this.loadLabels(_this.idArray);
            });
        });
    };
    DutydispComponent.prototype.rowColors = function (currDate, status) {
        if (currDate === this.today && (status === 'Allotted' || status === 'Dispatched' || status === 'Booked')) {
            return '#FFE5CC';
        }
        else if (currDate < this.today && status === 'Completed') {
            return '#CCFFE5';
        }
        else if (status === 'Cancelled') {
            return 'lightcoral';
        }
        else {
            return 'white';
        }
    };
    DutydispComponent.prototype.details = function (row) {
        //  this.detail.getDuties(this.user).subscribe(data=>{
        //   this.tempdetails=data
        //  });
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_23__duties_details_details_component__["a" /* DetailsComponent */], {
            autoFocus: false, disableClose: true,
            data: {
                row: row,
                details: 'true'
            }
        });
    };
    DutydispComponent.prototype.addRemoveLabels = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__duties_addremovelabels_addremovelabels_component__["a" /* AddremovelabelsComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    DutydispComponent.prototype.call = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__duties_call_call_component__["a" /* CallComponent */], { autoFocus: false, disableClose: true, data: row });
    };
    DutydispComponent.prototype.selectAllotments = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__duties_driverallotment_driverallotment_component__["a" /* DriverallotmentComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
            if (data == 'yes') {
                _this.ws.send(_this.user.ownerId + "duty");
            }
        });
    };
    DutydispComponent.prototype.clearAllotment = function (row) {
        row.driverId = null;
        row.vehicleId = null;
        row.status = "Booked";
        row.driver = null;
        row.vehicle = null;
        row.supplierId = null;
        row.supplier = null;
        this.DutiesService.updateduties(row);
        this.ws.send(this.user.ownerId + "duty");
    };
    DutydispComponent.prototype.selectRow = function (row) {
        localStorage.setItem('dutyedit', JSON.stringify(row));
        this.router.navigate(['/pages/editduties']);
        // this.dialog.open(DutieseditComponent,{autoFocus:false,disableClose:true,data:{row}});
    };
    DutydispComponent.prototype.setOfflineAllotment = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_13__duties_offlineallottment_offlineallottment_component__["a" /* OfflineallottmentComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
            if (data == 'yes') {
                _this.ws.send(_this.user.ownerId + "duty");
            }
        });
    };
    DutydispComponent.prototype.sendInfo2 = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_14__duties_sendinfo_sendinfo_component__["a" /* SendinfoComponent */], { data: row, autoFocus: false, disableClose: true }).afterClosed().subscribe();
    };
    DutydispComponent.prototype.printDutySlip = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_15__duties_duty_slip_duty_slip_component__["a" /* DutySlipComponent */], { data: row, autoFocus: false, disableClose: true });
    };
    DutydispComponent.prototype.createPlacard = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_16__duties_createplacard_createplacard_component__["a" /* CreateplacardComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    DutydispComponent.prototype.dispatched = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_17__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { disableClose: true, autoFocus: false }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                if (row.status == "Allotted") {
                    if (row.dutyType == 'Self Drive') {
                        alert("To dispatch this duty use the mobile application and upload vehicle videos/images");
                    }
                    else {
                        row.status = "Dispatched";
                        _this.DutiesService.updateDutiesDispatched(row);
                        _this.ws.send(_this.user.ownerId + "duty");
                    }
                }
                else if (row.status == 'Dispatched') {
                    row.status = "Allotted";
                    _this.DutiesService.updateDutiesDispatched(row);
                    _this.ws.send(_this.user.ownerId + "duty");
                }
                else {
                    window.alert("Please Allot Driver and Vehicle Before Dispatching");
                }
            }
        });
    };
    DutydispComponent.prototype.trackVehicle = function (row) {
        localStorage.setItem('trackVehicle', JSON.stringify(row));
        this.router.navigate(['/pages/tracking/trackVehicle']);
    };
    DutydispComponent.prototype.openCloseDuty = function (row) {
        var _this = this;
        this.DutiesService.checkSelfDrive(row).subscribe(function (data) {
            if (data[0].dType == "Self Drive") {
                _this.dialog.open(__WEBPACK_IMPORTED_MODULE_18__duties_selfdrive_selfdrive_component__["a" /* SelfdriveComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
                    if (data == 'yes') {
                        _this.dialog.open(__WEBPACK_IMPORTED_MODULE_19__duties_closeduty_closeduty_component__["a" /* ClosedutyComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
                            if (data == 'yes') {
                                _this.ws.send(_this.user.ownerId + "duty");
                                _this.ws.send(row.id + "closeTracker");
                            }
                        });
                    }
                });
            }
            else {
                _this.dialog.open(__WEBPACK_IMPORTED_MODULE_19__duties_closeduty_closeduty_component__["a" /* ClosedutyComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
                    if (data == 'yes') {
                        _this.ws.send(_this.user.ownerId + "duty");
                        _this.ws.send(row.id + "closeTracker");
                    }
                });
            }
        });
    };
    DutydispComponent.prototype.addPettyCash = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_20__duties_newpettycash_newpettycash_component__["a" /* NewpettycashComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    DutydispComponent.prototype.openCloseSupplierDuty = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_21__duties_close_supplier_duty_close_supplier_duty_component__["a" /* CloseSupplierDutyComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
            if (data == 'yes') {
                _this.ws.send(_this.user.ownerId + "duty");
            }
        });
    };
    DutydispComponent.prototype.viewBookings = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_22__duties_bookingdetails_bookingdetails_component__["a" /* BookingdetailsComponent */], { autoFocus: false, disableClose: true,
            data: {
                row: row,
                details: 'true'
            }
        });
    };
    DutydispComponent.prototype.cancelDuty = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_17__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { disableClose: true, autoFocus: false }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                row.driverId = null;
                row.vehicleId = null;
                row.status = "Cancelled";
                row.driver = null;
                row.vehicle = null;
                _this.DutiesService.updateduties(row);
                _this.ws.send(_this.user.ownerId + "duty");
            }
        });
    };
    DutydispComponent.prototype.loadLabels = function (idArray) {
        var _this = this;
        console.log(this.tempArray);
        this.DutiesService.getLabels({ idArray: idArray }).subscribe(function (data) {
            data.forEach(function (element) {
                var tempIndex = _this.tempArray.findIndex(function (x) { return x.id == element.dutyId; });
                console.log(tempIndex);
                if (tempIndex >= 0) {
                    if (_this.tempArray[tempIndex].labelArray == undefined) {
                        _this.tempArray[tempIndex].labelArray = [element];
                    }
                    else {
                        _this.tempArray[tempIndex].labelArray.push(element);
                    }
                }
            });
        }, function (err) { }, function () {
            _this.dataSource.data = _this.tempArray;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            console.log(_this.dataSource.data);
        });
    };
    DutydispComponent.prototype.setTextColor = function (color) {
        var r, g, b, hsp;
        // Check the format of the color, HEX or RGB?
        if (color.match(/^rgb/)) {
            // If HEX --> store the red, green, blue values in separate variables
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            r = color[1];
            g = color[2];
            b = color[3];
        }
        else {
            // If RGB --> Convert it to HEX: http://gist.github.com/983661
            color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
            r = color >> 16;
            g = color >> 8 & 255;
            b = color & 255;
        }
        // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
        hsp = Math.sqrt(0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b));
        // Using the HSP value, determine whether the color is light or dark
        if (hsp < 150) {
            return '#ffffff';
        }
        else {
            return '#000000';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material_sort__["a" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material_sort__["a" /* MatSort */])
    ], DutydispComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material_paginator__["a" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material_paginator__["a" /* MatPaginator */])
    ], DutydispComponent.prototype, "paginator", void 0);
    DutydispComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dutydisp',
            template: __webpack_require__("./src/app/pages/operations/dutydisp/dutydisp.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/dutydisp/dutydisp.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__duties_duties_service__["a" /* DutiesService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material_snack_bar__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_24__activitylog_service__["a" /* ActivitylogService */]])
    ], DutydispComponent);
    return DutydispComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/new-bank-account/new-bank-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>\n        New Bank Account\n      </nb-card-header>\n      <nb-card-body>\n        <table>\n          <tr>\n            <td>\n              Account Name* \n            </td>\n            <td>\n              <mat-form-field><input matInput [(ngModel)]=\"bankAccount.name\"></mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Account Number*\n            </td>\n            <td>\n              <mat-form-field><input matInput [(ngModel)]=\"bankAccount.number\"></mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Bank Name*\n            </td>\n            <td>\n              <mat-form-field><input matInput [(ngModel)]=\"bankAccount.bankName\"></mat-form-field>\n            </td>\n          </tr>\n        </table>\n        <br>\n        <br>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header><br></nb-card-header>\n      <nb-card-body>\n        <table>\n          <tr>\n            <td>\n              Bank Branch*\n            </td>\n            <td>\n              <mat-form-field><input matInput [(ngModel)]=\"bankAccount.branch\"></mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              IFSC Code\n            </td>\n            <td>\n              <mat-form-field><input matInput [(ngModel)]=\"bankAccount.ifscCode\"></mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Cheques in the name of\n            </td>\n            <td>\n              <mat-form-field><input matInput [(ngModel)]=\"bankAccount.chequeInTheNameOf\"></mat-form-field>\n            </td>\n          </tr>\n        </table>\n        <br>\n        <br>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12\">\n    <button *ngIf=\"!editData\" mat-raised-button color=\"primary\" (click)=\"saveBankAccount()\">Submit</button>\n    <button *ngIf=\"editData\" mat-raised-button color=\"primary\" (click)=\"updateBankAccount()\">Update</button>\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/operations/new-bank-account/new-bank-account.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/new-bank-account/new-bank-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBankAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bank_account_service__ = __webpack_require__("./src/app/pages/operations/new-bank-account/bank-account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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




var NewBankAccountComponent = (function () {
    function NewBankAccountComponent(bankAccountService, auth, matDialogRef, dialog, data, snackBar) {
        this.bankAccountService = bankAccountService;
        this.auth = auth;
        this.matDialogRef = matDialogRef;
        this.dialog = dialog;
        this.data = data;
        this.snackBar = snackBar;
        this.editData = false;
        this.param = {
            inserted: 'no',
            data: null
        };
        this.bankAccount = {
            name: '',
            number: '',
            bankName: '',
            branch: '',
            ifscCode: '',
            chequeInTheNameOf: '',
            ownerID: '',
        };
        console.log(data);
        if (this.data != null) {
            this.bankAccount = data;
            this.editData = true;
        }
    }
    NewBankAccountComponent.prototype.saveBankAccount = function () {
        var _this = this;
        this.bankAccountService.addBankAccount(this.bankAccount).subscribe(function (data) {
            if (data.affectedRows == 1) {
                console.log(data);
                _this.param.inserted = 'yes';
                _this.bankAccount = data.insertId;
                _this.param.data = _this.bankAccount;
                _this.matDialogRef.close(_this.param);
            }
        }, function (err) { }, function () {
            _this.snackBar.open("Bank Account Added", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    NewBankAccountComponent.prototype.updateBankAccount = function () {
        var _this = this;
        this.bankAccountService.updateBankAccount(this.bankAccount).subscribe(function (data) {
            _this.snackBar.open("Bank Account Updated", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    NewBankAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.bankAccount.ownerID = data[0].ownerId;
        });
    };
    NewBankAccountComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    NewBankAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-bank-account',
            template: __webpack_require__("./src/app/pages/operations/new-bank-account/new-bank-account.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/new-bank-account/new-bank-account.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__bank_account_service__["a" /* BankAccountService */],
            __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatDialog */], Object, __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSnackBar */]])
    ], NewBankAccountComponent);
    return NewBankAccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/new-billing/new-billing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        New Billing Item\n      </nb-card-header>\n      <nb-card-body>    \n        <form [formGroup]=\"billingItem\">\n          <table>\n            <tr>\n              <td colspan=\"2\">\n                <mat-form-field>\n                  <input matInput style=\"width:400px\" formControlName=\"name\" placeholder=\"Name\">\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td colspan=\"2\">\n                <mat-form-field>\n                  <input matInput [(ngModel)]=\"billing.shortName\" formControlName=\"shortName\" placeholder=\"Short Name\">\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <mat-checkbox formControlName=\"taxable\">Taxable</mat-checkbox>\n              </td>\n              <td>\n                <mat-checkbox formControlName=\"allowDriverToAdd\">Allow driver to add?</mat-checkbox>\n              </td>\n            </tr>\n          </table>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12 col-md-12\">\n    <button mat-raised-button color=\"primary\" *ngIf=\"!editState\" (click)=\"saveBilling()\">Submit</button>\n    <button mat-raised-button color=\"primary\" *ngIf=\"editState\" (click)=\"updateBilling()\">Update</button>\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>\n                  "

/***/ }),

/***/ "./src/app/pages/operations/new-billing/new-billing.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/new-billing/new-billing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBillingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__billing_service__ = __webpack_require__("./src/app/pages/operations/new-billing/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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





var NewBillingComponent = (function () {
    function NewBillingComponent(billingService, fb, auth, dialog, snackBar, data, matDialogRef) {
        this.billingService = billingService;
        this.fb = fb;
        this.auth = auth;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.data = data;
        this.matDialogRef = matDialogRef;
        this.editState = false;
        this.user = {};
        this.billing = {
            name: '',
            shortName: '',
            taxable: false,
            allowDriverToAdd: false,
            ownerId: '',
        };
        this.param = {
            inserted: 'no',
            data: null
        };
        if (data.row != null) {
            console.log(data);
            this.editState = true;
            this.billing = data.row;
            console.log(this.billing);
        }
        else {
            this.editState = false;
        }
    }
    NewBillingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.billingItem = _this.fb.group({
                name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
                shortName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
                taxable: [],
                allowDriverToAdd: []
            });
            _this.billingItem.patchValue({
                'name': _this.billing.name,
                'shortName': _this.billing.shortName,
                'taxable': _this.billing.taxable,
                'allowDriverToAdd': _this.billing.allowDriverToAdd,
            });
        });
    };
    NewBillingComponent.prototype.saveBilling = function () {
        var _this = this;
        this.billing.name = this.billingItem.get('name').value;
        this.billing.shortName = this.billingItem.get('shortName').value;
        this.billing.taxable = this.billingItem.get('taxable').value;
        this.billing.allowDriverToAdd = this.billingItem.get('allowDriverToAdd').value;
        this.billing.ownerId = this.user.ownerId;
        this.billingService.addBilling(this.billing).subscribe(function (data) {
            if (data.affectedRows == 1) {
                _this.param.inserted = 'yes';
                _this.param.data = _this.billing;
            }
        }, function (err) { }, function () {
            _this.snackBar.open("Billing Item Added", "X", { duration: 3000 });
            console.log(_this.param);
            _this.matDialogRef.close(_this.param);
        });
    };
    NewBillingComponent.prototype.updateBilling = function () {
        var _this = this;
        this.billing.name = this.billingItem.get('name').value;
        this.billing.shortName = this.billingItem.get('shortName').value;
        this.billing.taxable = this.billingItem.get('taxable').value;
        this.billing.allowDriverToAdd = this.billingItem.get('allowDriverToAdd').value;
        this.billingService.updateBilling(this.billing).subscribe(function (data) {
        }, function (err) { }, function () {
            _this.snackBar.open("Billing Item Updated", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    NewBillingComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    NewBillingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-billing',
            template: __webpack_require__("./src/app/pages/operations/new-billing/new-billing.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/new-billing/new-billing.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__billing_service__["a" /* BillingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MatSnackBar */], Object, __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatDialogRef */]])
    ], NewBillingComponent);
    return NewBillingComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/operations-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operations_component__ = __webpack_require__("./src/app/pages/operations/operations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bookings_bookings_component__ = __webpack_require__("./src/app/pages/operations/bookings/bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookingsdisp_bookingsdisp_component__ = __webpack_require__("./src/app/pages/operations/bookingsdisp/bookingsdisp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__billingitemdisplay_billingitemdisplay_component__ = __webpack_require__("./src/app/pages/operations/billingitemdisplay/billingitemdisplay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bank_account_display_bank_account_display_component__ = __webpack_require__("./src/app/pages/operations/bank-account-display/bank-account-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__branchdisplay_branchdisplay_component__ = __webpack_require__("./src/app/pages/operations/branchdisplay/branchdisplay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addbooking_addbooking_component__ = __webpack_require__("./src/app/pages/operations/addbooking/addbooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_deactivate_guard__ = __webpack_require__("./src/app/core/deactivate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dutydisp_dutydisp_component__ = __webpack_require__("./src/app/pages/operations/dutydisp/dutydisp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contactlogs_contactlogs_component__ = __webpack_require__("./src/app/pages/operations/contactlogs/contactlogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reviewneededbookings_reviewneededbookings_component__ = __webpack_require__("./src/app/pages/operations/reviewneededbookings/reviewneededbookings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__operations_component__["a" /* OperationsComponent */],
        children: [{
                path: 'bookings',
                component: __WEBPACK_IMPORTED_MODULE_3__bookings_bookings_component__["a" /* BookingsComponent */]
            },
            {
                path: 'addbooking',
                component: __WEBPACK_IMPORTED_MODULE_8__addbooking_addbooking_component__["a" /* AddbookingComponent */],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_9__core_deactivate_guard__["a" /* DeactivateGuard */]]
            },
            {
                path: 'bookingsdisp',
                component: __WEBPACK_IMPORTED_MODULE_4__bookingsdisp_bookingsdisp_component__["a" /* BookingsdispComponent */]
            },
            {
                path: 'bank-account-display',
                component: __WEBPACK_IMPORTED_MODULE_6__bank_account_display_bank_account_display_component__["a" /* BankAccountDisplayComponent */],
            },
            {
                path: 'billingitemdisplay',
                component: __WEBPACK_IMPORTED_MODULE_5__billingitemdisplay_billingitemdisplay_component__["a" /* BillingitemdisplayComponent */],
            },
            {
                path: 'branch',
                component: __WEBPACK_IMPORTED_MODULE_7__branchdisplay_branchdisplay_component__["a" /* BranchdisplayComponent */],
            },
            {
                path: 'dutydisp',
                component: __WEBPACK_IMPORTED_MODULE_10__dutydisp_dutydisp_component__["a" /* DutydispComponent */],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_9__core_deactivate_guard__["a" /* DeactivateGuard */]]
            },
            {
                path: 'contactlogs',
                component: __WEBPACK_IMPORTED_MODULE_11__contactlogs_contactlogs_component__["a" /* ContactlogsComponent */]
            },
            {
                path: 'reviewneededbookings',
                component: __WEBPACK_IMPORTED_MODULE_12__reviewneededbookings_reviewneededbookings_component__["a" /* ReviewneededbookingsComponent */]
            }
        ],
    }];
var OperationsRoutingModule = (function () {
    function OperationsRoutingModule() {
    }
    OperationsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], OperationsRoutingModule);
    return OperationsRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__operations_component__["a" /* OperationsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__bookings_bookings_component__["a" /* BookingsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__bookingsdisp_bookingsdisp_component__["a" /* BookingsdispComponent */],
];


/***/ }),

/***/ "./src/app/pages/operations/operations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OperationsComponent = (function () {
    function OperationsComponent() {
    }
    OperationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-form-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], OperationsComponent);
    return OperationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/operations.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsModule", function() { return OperationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operations_routing_module__ = __webpack_require__("./src/app/pages/operations/operations-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bookingsdisp_bookingsdisp_component__ = __webpack_require__("./src/app/pages/operations/bookingsdisp/bookingsdisp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_bank_account_new_bank_account_component__ = __webpack_require__("./src/app/pages/operations/new-bank-account/new-bank-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_billing_new_billing_component__ = __webpack_require__("./src/app/pages/operations/new-billing/new-billing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_branch_new_branch_component__ = __webpack_require__("./src/app/pages/operations/new-branch/new-branch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__duties_duties_component__ = __webpack_require__("./src/app/pages/duties/duties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__masters_extendbooking_extendbooking_component__ = __webpack_require__("./src/app/pages/masters/extendbooking/extendbooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__advancepayment_advancepayment_component__ = __webpack_require__("./src/app/pages/operations/advancepayment/advancepayment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sendconfirmation_sendconfirmation_component__ = __webpack_require__("./src/app/pages/operations/sendconfirmation/sendconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__importbookings_importbookings_component__ = __webpack_require__("./src/app/pages/operations/importbookings/importbookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__billingitemdisplay_billingitemdisplay_component__ = __webpack_require__("./src/app/pages/operations/billingitemdisplay/billingitemdisplay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bank_account_display_bank_account_display_component__ = __webpack_require__("./src/app/pages/operations/bank-account-display/bank-account-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__branchdisplay_branchdisplay_component__ = __webpack_require__("./src/app/pages/operations/branchdisplay/branchdisplay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__new_branch_new_branch_service__ = __webpack_require__("./src/app/pages/operations/new-branch/new-branch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bookinginvoice_createbookinginvoice_createbookinginvoice_component__ = __webpack_require__("./src/app/pages/operations/bookinginvoice/createbookinginvoice/createbookinginvoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__addbooking_addbooking_component__ = __webpack_require__("./src/app/pages/operations/addbooking/addbooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__date_confirm_date_confirm_component__ = __webpack_require__("./src/app/pages/operations/date-confirm/date-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scheduler_scheduler_component__ = __webpack_require__("./src/app/pages/operations/scheduler/scheduler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__advancepayment_advancepayment_service__ = __webpack_require__("./src/app/pages/operations/advancepayment/advancepayment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_lightbox__ = __webpack_require__("./node_modules/ngx-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ngx_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__addcustomerinbooking_addcustomerinbooking_component__ = __webpack_require__("./src/app/pages/operations/addcustomerinbooking/addcustomerinbooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__exportbookings_exportbookings_component__ = __webpack_require__("./src/app/pages/operations/exportbookings/exportbookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__exportbookings_export_service__ = __webpack_require__("./src/app/pages/operations/exportbookings/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__bookingsexport_bookingsexport_component__ = __webpack_require__("./src/app/pages/operations/bookingsexport/bookingsexport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dutydisp_dutydisp_component__ = __webpack_require__("./src/app/pages/operations/dutydisp/dutydisp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__contactlogs_contactlogs_component__ = __webpack_require__("./src/app/pages/operations/contactlogs/contactlogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__contactlogs_service__ = __webpack_require__("./src/app/pages/operations/contactlogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_moment_adapter__ = __webpack_require__("./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__reviewneededbookings_reviewneededbookings_component__ = __webpack_require__("./src/app/pages/operations/reviewneededbookings/reviewneededbookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__bookingfiles_bookingfiles_component__ = __webpack_require__("./src/app/pages/operations/bookingfiles/bookingfiles.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var OperationsModule = (function () {
    function OperationsModule() {
    }
    OperationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["P" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__operations_routing_module__["a" /* OperationsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["L" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["S" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_21__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_23_ngx_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["Q" /* MatTabsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatMenuModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_31__angular_material_moment_adapter__["a" /* MomentDateAdapter */], deps: [__WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: {
                        parse: {
                            dateInput: 'input',
                        },
                        display: {
                            dateInput: 'DD/MM/YYYY',
                            monthYearLabel: 'MMM YYYY',
                            dateA11yLabel: 'DD/MM/YYYY',
                            monthYearA11yLabel: 'MMMM YYYY',
                        }
                    }
                },
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["K" /* MatSort */],
                __WEBPACK_IMPORTED_MODULE_8__duties_duties_component__["a" /* DutiesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__new_branch_new_branch_component__["a" /* NewBranchComponent */],
                __WEBPACK_IMPORTED_MODULE_16__new_branch_new_branch_service__["a" /* NewBranchService */],
                __WEBPACK_IMPORTED_MODULE_3__bookingsdisp_bookingsdisp_component__["a" /* BookingsdispComponent */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatDatepicker */],
                __WEBPACK_IMPORTED_MODULE_22__advancepayment_advancepayment_service__["a" /* AdvancepaymentService */],
                __WEBPACK_IMPORTED_MODULE_26__exportbookings_export_service__["a" /* ExportService */],
                __WEBPACK_IMPORTED_MODULE_30__contactlogs_service__["a" /* ContactlogsService */]
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_2__operations_routing_module__["b" /* routedComponents */].concat([
                __WEBPACK_IMPORTED_MODULE_3__bookingsdisp_bookingsdisp_component__["a" /* BookingsdispComponent */],
                __WEBPACK_IMPORTED_MODULE_5__new_bank_account_new_bank_account_component__["a" /* NewBankAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_6__new_billing_new_billing_component__["a" /* NewBillingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__new_branch_new_branch_component__["a" /* NewBranchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__masters_extendbooking_extendbooking_component__["a" /* ExtendbookingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__advancepayment_advancepayment_component__["a" /* AdvancepaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_11__sendconfirmation_sendconfirmation_component__["a" /* SendconfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__importbookings_importbookings_component__["a" /* ImportbookingsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__billingitemdisplay_billingitemdisplay_component__["a" /* BillingitemdisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_14__bank_account_display_bank_account_display_component__["a" /* BankAccountDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_15__branchdisplay_branchdisplay_component__["a" /* BranchdisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_17__bookinginvoice_createbookinginvoice_createbookinginvoice_component__["a" /* CreatebookinginvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_18__addbooking_addbooking_component__["a" /* AddbookingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__date_confirm_date_confirm_component__["a" /* DateConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_20__scheduler_scheduler_component__["a" /* SchedulerComponent */],
                __WEBPACK_IMPORTED_MODULE_24__addcustomerinbooking_addcustomerinbooking_component__["a" /* AddcustomerinbookingComponent */],
                __WEBPACK_IMPORTED_MODULE_25__exportbookings_exportbookings_component__["a" /* ExportbookingsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__bookingsexport_bookingsexport_component__["a" /* BookingsexportComponent */],
                __WEBPACK_IMPORTED_MODULE_28__dutydisp_dutydisp_component__["a" /* DutydispComponent */],
                __WEBPACK_IMPORTED_MODULE_29__contactlogs_contactlogs_component__["a" /* ContactlogsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__reviewneededbookings_reviewneededbookings_component__["a" /* ReviewneededbookingsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__bookingfiles_bookingfiles_component__["a" /* BookingfilesComponent */]
            ]),
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__masters_extendbooking_extendbooking_component__["a" /* ExtendbookingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__advancepayment_advancepayment_component__["a" /* AdvancepaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_11__sendconfirmation_sendconfirmation_component__["a" /* SendconfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__importbookings_importbookings_component__["a" /* ImportbookingsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__new_billing_new_billing_component__["a" /* NewBillingComponent */],
                __WEBPACK_IMPORTED_MODULE_5__new_bank_account_new_bank_account_component__["a" /* NewBankAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_7__new_branch_new_branch_component__["a" /* NewBranchComponent */],
                __WEBPACK_IMPORTED_MODULE_19__date_confirm_date_confirm_component__["a" /* DateConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_10__advancepayment_advancepayment_component__["a" /* AdvancepaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_24__addcustomerinbooking_addcustomerinbooking_component__["a" /* AddcustomerinbookingComponent */],
                __WEBPACK_IMPORTED_MODULE_25__exportbookings_exportbookings_component__["a" /* ExportbookingsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__bookingsexport_bookingsexport_component__["a" /* BookingsexportComponent */],
                __WEBPACK_IMPORTED_MODULE_33__bookingfiles_bookingfiles_component__["a" /* BookingfilesComponent */]
            ]
        })
    ], OperationsModule);
    return OperationsModule;
}());



/***/ }),

/***/ "./src/app/pages/operations/reviewneededbookings/reviewneededbookings.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Add Booking\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"container\">\n      <div class=\"row\">                \n        <div class=\"col-lg-8 col-12\">\n          Customer Name:\n          <mat-form-field class=\"w-100\">\n            <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput readonly>\n            <mat-error *ngIf=\"bookings.customerId == null\">Please Select a Customer</mat-error>\n          </mat-form-field>\n        </div>                \n      </div>\n      <form [formGroup]=\"bookedByForm\" class=\"w-100\">\n        <div formArrayName=\"rows\">\n          <div class=\"row\" *ngFor=\"let aRow of bookedByForms.controls; let i=index\" [formGroupName]=\"i\">                        \n            <div class=\"col-lg-3 col-12\">\n              <mat-form-field>\n                Name (Booked By)\n                <input formControlName=\"bookByName\" matInput [matAutocomplete]=\"bookByAuto\">\n                <mat-autocomplete #bookByAuto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of bookBy |async\" [value]=\"option.name\" (onSelectionChange)=\"setBookBy(option,$event)\">\n                    {{ option.name }}\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-3 col-12\">\n              <mat-form-field>\n                Phone No (Booked By)\n                <input matInput formControlName=\"bookByNo\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-3 col-12\">\n              <mat-form-field>\n                Email Id (Booked By)\n                <input matInput formControlName=\"bookByEmail\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-2 col-10\">\n              <mat-form-field>\n                CC ID\n                <input matInput formControlName=\"CCID\">\n              </mat-form-field>\n            </div>                \n            <div class=\"col-lg-1 col-2\">\n              <button mat-icon-button color=\"primary\" *ngIf=\"i>0\" (click)=\"deleteBookedBy(i)\"> <mat-icon>clear</mat-icon></button>\n            </div>\n          </div>\n        </div>                \n      </form>\n      <div class=\"row ptb-10\">\n        <div class=\"col-lg-12 col-12\">\n          <button mat-raised-button color=\"primary\" (click)=\"addBookedBy()\" style=\"float:right; margin: 5px;\">Add Booked By</button>\n        </div>                \n      </div>            \n    </div>\n  </nb-card-body>\n</nb-card>\n<nb-card>\n  <nb-card-header>Guests</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\" style=\"padding:15px\">\n      <form [formGroup]=\"myForm\" class=\"w-100\">\n        <div formArrayName=\"rows\">                    \n          <div class=\"row\" *ngFor=\"let aRow of passengerForms.controls; let i=index\" [formGroupName]=\"i\">\n            <div class=\"col-lg-1 col-2\">\n              <br>\n              {{i+1}}\n            </div>\n            <div class=\"col-lg-3 col-10\">\n              <mat-form-field>\n                <input matInput formControlName=\"passenger\" (keypress)=\"filterPass(i)\" [matAutocomplete]=\"passengerAuto\" placeholder=\"Name\">\n                <mat-autocomplete #passengerAuto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let element of passengers | async\" [value]=\"element.name\" (onSelectionChange)=\"setPassenger(element,$event,aRow)\">\n                    {{element.name}}\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-3 col-5\">\n              <mat-form-field class=\"w-100\">\n                <input matInput formControlName=\"passengerNo\" placeholder=\"Phone No\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-3 col-5\">\n              <mat-form-field class=\"w-100\">\n                <input matInput formControlName=\"passengerEmail\" placeholder=\"Email Id\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-2 col-2\">\n              <br>\n              <button mat-icon-button color=\"primary\" (click)=\"deleteRow(i)\"> <mat-icon>clear</mat-icon></button>\n            </div>\n          </div>                    \n        </div>\n      </form>                 \n      <div class=\"row ptb-10\">\n        <div class=\"col-lg-12 col-12\">\n          <button mat-raised-button color=\"primary\" (click)=\"addRow()\" style=\"float:right; margin: 5px;\">Add More Guests</button>\n        </div>                \n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n<nb-card>\n  <nb-card-body>\n    <div class=\"container\">            \n      <div class=\"row\">\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            From*\n            <!-- <input placeholder=\"Pick one\" matInput [(ngModel)]=\"bookings.fromLoc\" (change)=\"setCity(option)\" [matAutocomplete]=\"auto1\"> -->\n            <input matInput [formControl]=\"fromCityCtrl\"  [matAutocomplete]=\"auto1\">\n            <mat-autocomplete #auto1=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option of fromCity | async\" [value]=\"option\" (onSelectionChange)=\"fromCitySelect(option,$event)\">\n                {{ option }}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            To\n            <input matInput [formControl]=\"toCityCtrl\" [matAutocomplete]=\"auto2\">\n            <mat-autocomplete #auto2=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option of toCity | async\" [value]=\"option\" (onSelectionChange)=\"toCitySelect(option,$event)\">\n                {{ option }}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            Vehicle Group*\n            <!-- <input placeholder=\"Pick one\" matInput [(ngModel)]=\"bookings.vehicleGroup\" (change)=\"setVehicleGroup(option)\" [matAutocomplete]=\"autoVG\"> -->\n            <input matInput [formControl]=\"vehicleGroupCtrl\"  [matAutocomplete]=\"autoVG\">\n            <mat-error *ngIf=\"bookings.vehicleGroupId == null\">Please Select a Vehicle Group</mat-error>\n            <mat-autocomplete #autoVG=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option of vehicleGroup | async\" [value]=\"option.name\" (onSelectionChange)=\"setVehicleGroup(option,$event)\">\n                {{ option.name }}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            Duty Type*\n            <!-- <input placeholder=\"Pick one\" matInput [(ngModel)]=\"bookings.dutyType\" (change)=\"setDutyType(option)\" [matAutocomplete]=\"autoDT\"> -->\n            <input matInput [formControl]=\"dutyTypeCtrl\"  [matAutocomplete]=\"autoDT\">\n            <mat-error *ngIf=\"bookings.dutyTypeId == null\">Please Select a Duty Type</mat-error>\n            <mat-autocomplete #autoDT=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option of dutyType | async\" [value]=\"option.name\" (onSelectionChange)=\"setDutyType(option,$event)\">\n                {{ option.name }}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>                \n      </div>                      \n      <div class=\"row\">\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field class=\"w-100\">\n            Start Date\n            <input matInput [(ngModel)]=\"bookings.startDate\" [matDatepicker]=\"startDate\" readonly name=\"startDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n            <mat-datepicker #startDate></mat-datepicker>\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field class=\"w-100\">\n            End Date\n            <input matInput [(ngModel)]=\"bookings.endDate\" [matDatepicker]=\"endDate\" readonly name=\"endDate\">         \n            <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n            <mat-datepicker #endDate></mat-datepicker>\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            Reporting Time*\n            <input type=\"time\" matInput  [(ngModel)]=\"bookings.reportingTime\" name=\"reportingTime\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            Start From Garage before(in mins)\n            <input matInput [(ngModel)]=\"bookings.startFromGarage\" name=\"startFromGarage\">\n          </mat-form-field>\n        </div>\n      </div>            \n      <div class=\"row\">\n        <!-- <div class=\"col-lg-6 col-12\">\n            \n        </div> -->\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            Extra Kms\n            <input matInput #extraKms  name=\"extraKms\" [(ngModel)]=\"bookings.extraKms\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            Extra Hours\n            <input matInput #extraHours id=\"extraHours\" [(ngModel)]=\"bookings.extraHours\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-8\">\n          <mat-form-field>\n            Rate:\n            <input matInput name=\"price\" [(ngModel)]=\"bookings.price\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-4\">\n          <br>\n          <button mat-raised-button color=\"primary\" (click)=\"getPrice()\">Get Cost</button>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n<nb-card>\n  <nb-card-body>\n    <div class=\"container\">              \n      <div class=\"row\">\n        <div class=\"col-lg-6 col-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-12\">\n              <h5>\n                Reporting Address\n                <mat-slide-toggle (change)=\"reportingAddressChange($event)\" style=\"float:right\">Google Maps</mat-slide-toggle>\n              </h5>\n              <mat-form-field *ngIf=\"reportingAddressMaps==false\" class=\"w-100\">\n                <textarea rows=\"4\" matInput placeholder=\"Reporting Address\" [(ngModel)]=\"bookings.reportingAddress\"></textarea>\n              </mat-form-field>\n              <mat-form-field [hidden]=\"reportingAddressMaps==false\" class=\"w-100\">\n                <input matInput placeholder=\"Reporting Address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #searchReporting [(ngModel)]=\"bookings.reportingAddress\" (change)=\"setReportingAddress($event.target.value)\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-12\">\n              <agm-map (mapClick)=\"mapClickedReporting($event)\" [hidden]=\"reportingAddressMaps==false\" [latitude]=\"latitudeReporting\" [longitude]=\"longitudeReporting\" [scrollwheel]=\"false\" [zoom]=\"zoom\" [streetViewControl]=\"false\">\n                <agm-marker \n                  [latitude]=\"latitudeReporting\"\n                  [longitude]=\"longitudeReporting\"\n                  [markerDraggable]=\"reportingDraggable\"\n                  (dragEnd)=\"markerReportingDragEnd($event)\">\n                  <agm-info-window>\n                    <strong>Reporting Address</strong>\n                  </agm-info-window>            \n                </agm-marker>\n              </agm-map>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-12\">\n              <h5>\n                Drop Address\n                <mat-slide-toggle (change)=\"dropAddressChange($event)\" style=\"float:right\">Google Maps</mat-slide-toggle>\n              </h5>\n              <mat-form-field *ngIf=\"dropAddressMaps==false\" class=\"w-100\">\n                <textarea rows=\"4\" matInput placeholder=\"Drop Address\" [(ngModel)]=\"bookings.dropAddress\"></textarea>\n              </mat-form-field>\n              <mat-form-field [hidden]=\"dropAddressMaps==false\" class=\"w-100\">\n                <input matInput placeholder=\"Drop Address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #searchDrop [(ngModel)]=\"bookings.dropAddress\" (change)=\"setDropAddress($event.target.value)\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-12\">\n              <agm-map (mapClick)=\"mapClickedDrop($event)\" [hidden]=\"dropAddressMaps==false\" [latitude]=\"latitudeDrop\" [longitude]=\"longitudeDrop\" [scrollwheel]=\"false\" [zoom]=\"zoom\" [streetViewControl]=\"false\">\n                <agm-marker \n                  [latitude]=\"latitudeDrop\"\n                  [longitude]=\"longitudeDrop\"\n                  [markerDraggable]=\"dropDraggable\"\n                  (dragEnd)=\"markerDropDragEnd($event)\">\n                  <agm-info-window>\n                    <strong>Drop Address</strong>\n                  </agm-info-window>            \n                </agm-marker>\n              </agm-map>\n            </div>\n          </div>\n        </div>\n      </div>            \n      <div class=\"row\">\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field matTooltip=\"Displayed in Duties\">\n            Short Reporting Address\n            <input matInput name=\"shortReportingAddress\" [(ngModel)]=\"bookings.shortReportingAddress\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            Dispatch Center\n            <input matInput [matAutocomplete]=\"dispatchCenter\" [(ngModel)]=\"bookings.dispatchCenter\" [formControl]=\"branchCtrl\">\n            <mat-autocomplete #dispatchCenter=\"matAutocomplete\">\n              <mat-option *ngFor=\"let element of branch | async\" [value]=\"element.name\" (onSelectionChange)=\"setDispatchCenter(element,$event)\">\n                {{element.name}}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            Flight/Train Number\n            <input matInput [(ngModel)]=\"bookings.flightTrainNo\" name=\"flightTrainNo\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <mat-form-field>\n            PO Number\n            <input matInput #bookedEmail  name=\"bookByEmail\" [(ngModel)]=\"bookings.poNumber\">\n          </mat-form-field>\n          <!-- <mat-form-field>\n            Bill To\n            <mat-select [(ngModel)]=\"bookings.billTo\" name=\"billTo\">\n                <mat-option value=\"option\">Option</mat-option>\n            </mat-select>\n          </mat-form-field> -->\n        </div>\n      </div>            \n      <div class=\"row\">\n        <div class=\"col-lg-6 col-12\">\n          <mat-form-field class=\"w-100\">\n            Remarks\n            <textarea matInput name=\"Remarks\"[(ngModel)]=\"bookings.remarks\"></textarea>\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-6 col-12\">\n          <mat-form-field class=\"w-100\">\n            Additional Notes\n            <textarea matInput name=\"operatorNotes\"[(ngModel)]=\"bookings.operatorNotes\"></textarea>\n          </mat-form-field>\n        </div>                        \n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-12\">\n          <mat-checkbox [(ngModel)]=\"bookings.unconfirmed\" *ngIf=\"bookings.status!='Unconfirmed'\"> Mark as unconfirmed booking</mat-checkbox>\n        </div>\n      </div>\n      <div class=\"row ptb-10\">\n        <div class=\"col-lg-12 col-12\">\n          <button mat-raised-button color=\"primary\" (click)=\"saveBooking()\">Save</button>\n          <button mat-raised-button *ngIf=\"bookings.status=='Unconfirmed'\" color=\"primary\" (click)=\"confirmBooking()\">Confirm Booking</button>\n        </div>\n      </div>\n    </div>                \n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/operations/reviewneededbookings/reviewneededbookings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/reviewneededbookings/reviewneededbookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewneededbookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masters_vehiclegroups_vehiclegroups_component__ = __webpack_require__("./src/app/pages/masters/vehiclegroups/vehiclegroups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__date_confirm_date_confirm_component__ = __webpack_require__("./src/app/pages/operations/date-confirm/date-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__masters_dutytype_duty_type_service__ = __webpack_require__("./src/app/pages/masters/dutytype/duty-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__masters_pricing_pricing_service__ = __webpack_require__("./src/app/pages/masters/pricing/pricing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new_branch_new_branch_service__ = __webpack_require__("./src/app/pages/operations/new-branch/new-branch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__duties_duties_component__ = __webpack_require__("./src/app/pages/duties/duties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ReviewneededbookingsComponent = (function () {
    function ReviewneededbookingsComponent(snackbar, fb, bookingService, vehiclegroupsService, dutytypeService, dialog, customerService, pricingService, auth, branchService, router, mapsAPILoader, ngZone, dutyComponenet) {
        this.snackbar = snackbar;
        this.fb = fb;
        this.bookingService = bookingService;
        this.vehiclegroupsService = vehiclegroupsService;
        this.dutytypeService = dutytypeService;
        this.dialog = dialog;
        this.customerService = customerService;
        this.pricingService = pricingService;
        this.auth = auth;
        this.branchService = branchService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.dutyComponenet = dutyComponenet;
        this.deletedPassenger = [];
        this.deletedBookedBy = [];
        this.bookings = {};
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.branchCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.passenger = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.passengerEmail = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.passengerNo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.reportingAddressMaps = false;
        this.dropAddressMaps = false;
        this.city = [];
        this.bookByCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.fromCityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.toCityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.vehicleGroupCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.dutyTypeCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.user = {};
        this.isBookingMonthly = false;
        this.dutyArray = [];
        //MAPS API
        this.reportingDraggable = true;
        this.dropDraggable = true;
        // setCity(temp:any,event:any)
        // {
        //   if(event.source.selected==true)
        //   {
        //     this.temp2.city=temp
        //   }
        // }
        this.temp2 = {
            city: '',
            vehicleGroupId: '',
            customerId: '',
            dutyTypeId: ''
        };
        this.param = {
            inserted: 'no',
            data: null
        };
        this.temp = {
            status: 'Booked',
            cname: '',
            passenger: '',
            vehicleGroup: '',
            dutyType: '',
            bookBy: '',
            bookByNo: '',
            bookByEmail: '',
            ccId: '',
            passengerNo: '',
            passengerEmail: '',
            fromLoc: '',
            toLoc: '',
            startDate: null,
            endDate: null,
            reportingTime: '',
            startFromGarage: '',
            reportingAddress: '',
            dropAddress: '',
            shortReportingAddress: '',
            flightTrainNo: '',
            dispatchCenter: '',
            dispatchCenterId: null,
            billTo: '',
            price: '',
            remarks: '',
            operatorNotes: '',
            label: '',
            vehicleGroupId: '',
            customerId: '',
            poNumber: '',
        };
    }
    ReviewneededbookingsComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    ReviewneededbookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this.fb.group({
            rows: this.fb.array([])
        });
        this.bookedByForm = this.fb.group({
            rows: this.fb.array([])
        });
        var bk = localStorage.getItem('uclueldata');
        this.bookings = JSON.parse(bk);
        console.log(this.bookings);
        this.setData(this.bookings);
        this.getPassenger();
        this.getBookedBy(this.bookings);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.bookings.ownerID = data[0].ownerId;
            _this.customerService.getCustomers(_this.user).subscribe(function (data) {
                _this.customers = data;
                _this.customer = _this.customerCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
            });
            _this.branchService.getBranches(_this.user).subscribe(function (data) {
                _this.branches = data;
                _this.branch = _this.branchCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (val) { return _this.filterBranch(val); }));
            });
            _this.setCustomer();
        });
        //Maps 
        //set google maps defaults
        this.zoom = 4;
        this.latitudeReporting = 39.8282;
        this.longitudeReporting = -98.5795;
        this.latitudeDrop = 39.8282;
        this.longitudeDrop = -98.5795;
        //create search FormControl
        this.searchControlDrop = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.searchControlReporting = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        var options = {
            componentRestrictions: { country: "in" }
        };
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocompleteReporting = new google.maps.places.Autocomplete(_this.searchReportingRef.nativeElement, options);
            var autocompleteDrop = new google.maps.places.Autocomplete(_this.searchDropRef.nativeElement, options);
            autocompleteReporting.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocompleteReporting.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitudeReporting = place.geometry.location.lat();
                    _this.longitudeReporting = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
            autocompleteDrop.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocompleteDrop.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitudeDrop = place.geometry.location.lat();
                    _this.longitudeDrop = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    ReviewneededbookingsComponent.prototype.confirmBooking = function () {
        var _this = this;
        this.bookings.status = 'Booked';
        this.bookings.startDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.bookings.startDate).format("YYYY-MM-DD");
        this.bookings.endDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.bookings.endDate).format("YYYY-MM-DD");
        var temp = this.myForm.get('rows');
        var temp2 = this.bookedByForm.get('rows');
        if (this.bookings.startDate != this.bookings.endDate) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__date_confirm_date_confirm_component__["a" /* DateConfirmComponent */], { data: { booking: this.bookings }, autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
                console.log(data);
                var monthlyBookingData = {
                    duties: data,
                    booking: _this.bookings
                };
                _this.bookingService.updateUnconfirmedMonthlyBooking(monthlyBookingData);
                // this.bookingService.updateUnconfirmedBooking(this.bookings);
                if (_this.deletedPassenger.length > 0) {
                    _this.bookingService.deletePassenger(_this.deletedPassenger);
                }
                if (_this.deletedBookedBy.length > 0) {
                    _this.bookingService.deleteBookedBy(_this.deletedBookedBy);
                }
                _this.bookingService.addPassengers(_this.bookings.id, temp.value);
                _this.bookingService.addBookedBy(_this.bookings.id, temp2.value);
                //this.defaltVal();
                _this.dialog.closeAll();
                _this.snackbar.open("Booking Updated Successfully", null, { duration: 5000 });
                _this.router.navigateByUrl('/pages/operations/bookingsdisp');
            });
        }
        else {
            this.bookingService.updateUnconfirmedBooking(this.bookings);
            if (this.deletedPassenger.length > 0) {
                this.bookingService.deletePassenger(this.deletedPassenger);
            }
            if (this.deletedBookedBy.length > 0) {
                this.bookingService.deleteBookedBy(this.deletedBookedBy);
            }
            this.bookingService.addPassengers(this.bookings.id, temp.value);
            this.bookingService.addBookedBy(this.bookings.id, temp2.value);
            //this.defaltVal();
            this.dialog.closeAll();
            this.snackbar.open("Booking Updated Successfully", null, { duration: 5000 });
            this.router.navigateByUrl('/pages/operations/bookingsdisp');
        }
    };
    ReviewneededbookingsComponent.prototype.getCities = function () {
        this.city = [
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
    };
    ReviewneededbookingsComponent.prototype.filterCities = function () {
        var _this = this;
        this.fromCity = this.fromCityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (val) { return _this.filterFromCity(val); }));
        this.toCity = this.toCityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (val) { return _this.filterToCity(val); }));
    };
    ReviewneededbookingsComponent.prototype.getVehicleGroups = function () {
        var _this = this;
        this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(function (data) {
            if (data.length == 0) {
                _this.snackbar.open("Please register some vehicle groups", "X", { duration: 3000 });
                //this.matDialogRef.close();
            }
            _this.vehicleGroups = data;
            _this.vehicleGroup = _this.vehicleGroupCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (val) { return _this.filterVehicleGroup(val); }));
        });
    };
    ReviewneededbookingsComponent.prototype.getDutyTypes = function () {
        var _this = this;
        this.dutytypeService.getDutyType(this.user).subscribe(function (data) {
            if (data.length == 0) {
                _this.snackbar.open("Please register some dutytypes", "X", { duration: 3000 });
            }
            console.log(data);
            _this.dutyTypes = data;
            _this.dutyType = _this.dutyTypeCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (val) { return _this.filterDutyType(val); }));
        });
    };
    ReviewneededbookingsComponent.prototype.setCustomer = function () {
        var _this = this;
        this.temp2.customerId = this.bookings.customerId;
        // console.log(this.temp2);
        var tempCust = {
            ownerId: this.user.ownerId,
            customerId: this.temp2.customerId
        };
        // console.log(tempCust);
        this.bookingService.getRecurringBookedBy(tempCust).subscribe(function (data) {
            _this.bookByArr = data;
            _this.bookBy = _this.bookByCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (val) { return _this.filterBookBy(val); }));
        });
        this.bookingService.getRecurringPassenger(tempCust).subscribe(function (data) {
            _this.passengerArr = data;
            _this.passengers = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(_this.passengerArr);
            // console.log(data);
        });
        var temp = {
            id: this.bookings.customerId
        };
        console.log(this.bookings);
        this.customerService.getCustomerLimitCity({ id: this.bookings.customerId }).subscribe(function (data) {
            console.log(data);
            if (data.length != 0) {
                _this.city.length = 0;
                data.forEach(function (element) {
                    _this.city.push(element.city);
                });
            }
            else {
                _this.getCities();
            }
        }, function (err) { }, function () {
            _this.filterCities();
        });
        this.customerService.getCustomerLimitVehicleGroupForBookings({ id: this.bookings.customerId }).subscribe(function (data) {
            console.log(data);
            if (data.length != 0) {
                _this.vehicleGroups = data;
                _this.vehicleGroup = _this.vehicleGroupCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (val) { return _this.filterVehicleGroup(val); }));
            }
            else {
                _this.getVehicleGroups();
            }
        });
        this.customerService.getCustomerLimitDutyTypeForBookings(temp).subscribe(function (data) {
            if (data.length != 0) {
                _this.dutyTypes = data;
                _this.dutyType = _this.dutyTypeCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (val) { return _this.filterDutyType(val); }));
            }
            else {
                _this.getDutyTypes();
            }
        });
    };
    ReviewneededbookingsComponent.prototype.setData = function (temp) {
        this.customerCtrl.setValue(temp.cname);
        this.bookByCtrl.setValue(temp.bookBy);
        // const guests = this.fb.group({
        //   id: '',
        //   passenger: temp.passenger,
        //   passengerNo: temp.passengerNo,
        //   passengerEmail: temp.passengerEmail
        // })
        // this.passengerForms.push(guests);
        this.fromCityCtrl.setValue(temp.fromLoc);
        this.toCityCtrl.setValue(temp.toLoc);
        this.vehicleGroupCtrl.setValue(temp.vehicleGroup);
        this.dutyTypeCtrl.setValue(temp.dutyType);
    };
    ReviewneededbookingsComponent.prototype.setDispatchCenter = function (temp, event) {
        if (event.source.selected == true) {
            this.temp2.vehicleGroupId = temp.id;
            this.bookings.dispatchCenter = temp.name;
            this.bookings.dispatchCenterId = temp.id;
        }
    };
    ReviewneededbookingsComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitudeReporting = position.coords.latitude;
                _this.longitudeReporting = position.coords.longitude;
                _this.latitudeDrop = position.coords.latitude;
                _this.longitudeDrop = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    ReviewneededbookingsComponent.prototype.mapClickedReporting = function (event) {
        this.latitudeReporting = event.coords.lat;
        this.longitudeReporting = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: "in" } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.reportingAddress = (results[0].formatted_address);
                console.log(results[0].formatted_address);
            }
        }.bind(this));
    };
    ReviewneededbookingsComponent.prototype.markerReportingDragEnd = function (event) {
        this.latitudeReporting = event.coords.lat;
        this.longitudeReporting = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: "in" } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.reportingAddress = (results[0].formatted_address);
                console.log(results[0].formatted_address);
            }
        }.bind(this));
    };
    ReviewneededbookingsComponent.prototype.mapClickedDrop = function (event) {
        this.latitudeDrop = event.coords.lat;
        this.longitudeDrop = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: "in" } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.dropAddress = (results[0].formatted_address);
            }
        }.bind(this));
    };
    ReviewneededbookingsComponent.prototype.markerDropDragEnd = function (event) {
        this.latitudeDrop = event.coords.lat;
        this.longitudeDrop = event.coords.lng;
        var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng, componentRestrictions: { country: "in" } }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                this.bookings.dropAddress = (results[0].formatted_address);
            }
        }.bind(this));
    };
    ReviewneededbookingsComponent.prototype.reportingAddressChange = function (temp) {
        if (temp.checked == true) {
            this.reportingAddressMaps = true;
            this.geocodeReportingAddress();
        }
        else if (temp.checked == false) {
            this.reportingAddressMaps = false;
        }
    };
    ReviewneededbookingsComponent.prototype.geocodeReportingAddress = function () {
        var address = this.bookings.reportingAddress;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address, componentRestrictions: { country: 'in' } }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                this.latitudeReporting = results[0].geometry.location.lat();
                this.longitudeReporting = results[0].geometry.location.lng();
                console.log(results[0]);
            }
            else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        }.bind(this));
    };
    ReviewneededbookingsComponent.prototype.dropAddressChange = function (temp) {
        if (temp.checked == true) {
            this.dropAddressMaps = true;
            this.geocodeDropAddress();
        }
        else if (temp.checked == false) {
            this.dropAddressMaps = false;
        }
    };
    ReviewneededbookingsComponent.prototype.geocodeDropAddress = function () {
        var address = this.bookings.dropAddress;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address, componentRestrictions: { country: 'in' } }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                this.latitudeDrop = results[0].geometry.location.lat();
                this.longitudeDrop = results[0].geometry.location.lng();
            }
            else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        }.bind(this));
    };
    ReviewneededbookingsComponent.prototype.filterFromCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    ReviewneededbookingsComponent.prototype.filterToCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    ReviewneededbookingsComponent.prototype.filterVehicleGroup = function (val) {
        return this.vehicleGroups.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    ReviewneededbookingsComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    ReviewneededbookingsComponent.prototype.filterDutyType = function (val) {
        return this.dutyTypes.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    ReviewneededbookingsComponent.prototype.filterBranch = function (val) {
        return this.branches.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    ReviewneededbookingsComponent.prototype.filterBookBy = function (val) {
        return this.bookByArr.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    ReviewneededbookingsComponent.prototype.fromCitySelect = function (option, event) {
        if (event.source.selected == true) {
            this.bookings.fromLoc = option;
            this.temp2.city = option;
        }
    };
    ReviewneededbookingsComponent.prototype.toCitySelect = function (option, event) {
        if (event.source.selected == true) {
            this.bookings.toLoc = option;
        }
    };
    ReviewneededbookingsComponent.prototype.setBookBy = function (option, event, element) {
        if (event.source.selected == true) {
            element.get('bookByName').setValue(option.name);
            element.get('bookByNo').setValue(option.phoneNo);
            element.get('bookByEmail').setValue(option.emailId);
            element.get('CCID').setValue(option.CCID);
        }
    };
    ReviewneededbookingsComponent.prototype.setPassenger = function (option, event, element) {
        if (event.source.selected == true) {
            element.get('passenger').setValue(option.name);
            element.get('passengerNo').setValue(option.phoneNo);
            element.get('passengerEmail').setValue(option.emailId);
        }
    };
    ReviewneededbookingsComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    Object.defineProperty(ReviewneededbookingsComponent.prototype, "passengerForms", {
        get: function () {
            return this.myForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewneededbookingsComponent.prototype, "bookedByForms", {
        get: function () {
            return this.bookedByForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    ReviewneededbookingsComponent.prototype.addRow = function () {
        var row = this.fb.group({
            id: '',
            passenger: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            passengerEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            passengerNo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.passengerForms.push(row);
    };
    ReviewneededbookingsComponent.prototype.deleteRow = function (i) {
        var temp = this.myForm.get('rows');
        if (temp.value[i].id != "")
            this.deletedPassenger.push(temp.value[i].id);
        this.passengerForms.removeAt(i);
    };
    ReviewneededbookingsComponent.prototype.addBookedBy = function () {
        var row = this.fb.group({
            id: '',
            bookByName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            bookByNo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            bookByEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            CCID: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
        });
        this.bookedByForms.push(row);
    };
    ReviewneededbookingsComponent.prototype.deleteBookedBy = function (i) {
        var temp = this.bookedByForm.get('rows');
        if (temp.value[i].id != "")
            this.deletedBookedBy.push(temp.value[i].id);
        this.bookedByForms.removeAt(i);
    };
    ReviewneededbookingsComponent.prototype.deleteBooking = function (row) {
        this.bookingService.deleteBooking(row);
    };
    ReviewneededbookingsComponent.prototype.getPassenger = function () {
        var _this = this;
        this.passengerList = [];
        this.bookingService.getPassenger(this.bookings.id).subscribe(function (data) {
            data.forEach(function (element) {
                var row = _this.fb.group({
                    id: element.id,
                    passenger: element.passenger,
                    passengerEmail: element.passengerEmail,
                    passengerNo: element.passengerNo
                });
                _this.passengerForms.push(row);
            });
        });
    };
    ReviewneededbookingsComponent.prototype.getBookedBy = function (bookings) {
        var row = this.fb.group({
            bookByName: bookings.bookBy,
            bookByNo: bookings.bookByNo,
            bookByEmail: bookings.bookByEmail,
            CCID: bookings.ccId,
        });
        this.bookedByForms.push(row);
    };
    ReviewneededbookingsComponent.prototype.addBooking = function () {
        console.log(this.bookings.endDate);
        this.bookings.startDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.bookings.startDate).format("YYYY-MM-DD");
        this.bookings.endDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.bookings.endDate).format("YYYY-MM-DD");
        console.log(this.bookings.endDate);
        if (this.isBookingMonthly) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__date_confirm_date_confirm_component__["a" /* DateConfirmComponent */], { data: { booking: this.bookings }, autoFocus: false, disableClose: true });
        }
        else {
            console.log("Called");
            this.insertBooking();
        }
    };
    ReviewneededbookingsComponent.prototype.insertBooking = function () {
        var _this = this;
        var temp = this.myForm.get('rows');
        if (this.bookings.bookBy == '' || this.bookings.bookBy == null) {
            this.bookings.bookBy = this.bookByCtrl.value;
        }
        else {
            if (this.bookByArr.findIndex(function (x) { return x.name.toLowerCase() == _this.bookByCtrl.value.toLowerCase(); }) == -1) {
                this.bookingService.addRecurringBookedBy({
                    name: this.bookByCtrl.value,
                    phoneNo: this.bookings.bookByNo,
                    emailId: this.bookings.bookByEmail,
                    ownerId: this.user.ownerId,
                    customerId: this.bookings.customerId,
                }).subscribe(function (data) { return data; });
            }
        }
        temp.value.forEach(function (element) {
            if (_this.passengerArr.findIndex(function (x) { return x.name.toLowerCase() == element.passenger.toLowerCase(); }) == -1) {
                _this.bookingService.addRecurringPassenger({
                    name: element.passenger,
                    phoneNo: element.passengerNo,
                    emailId: element.passengerEmail,
                    ownerId: _this.user.ownerId,
                    customerId: _this.bookings.customerId,
                }).subscribe(function (data) { return data; });
            }
        });
        var bookingData = {
            booking: {},
            passenger: []
        };
        var tempid;
        this.bookings.status = 'Booked';
        if (this.passengerForms.controls[0] != undefined) {
            this.bookings.passenger = this.passengerForms.controls[0].value.passenger;
            this.bookings.passengerNo = this.passengerForms.controls[0].value.passengerNo;
            this.bookings.passengerEmail = this.passengerForms.controls[0].value.passengerEmail;
            if (this.passengerForms.controls.length > 1)
                this.bookings.passenger = this.bookings.passenger + "+" + (this.passengerForms.controls.length - 1);
        }
        this.getVehicleGroup(this.bookings.vehicleGroup, this.user.ownerId).subscribe(function (data) {
            if (data.length != 0) {
                _this.bookings.vehicleGroupId = data[0].id;
                _this.getDutyType(_this.bookings.dutyType, _this.user.ownerId).subscribe(function (data) {
                    if (data.length != 0) {
                        _this.bookings.dutyTypeId = data[0].id;
                        bookingData.booking = _this.bookings;
                        bookingData.passenger = temp.value;
                        _this.bookingService.addBooking(bookingData);
                        //this.matDialogRef.close();
                        _this.snackbar.open("Booking Completed", "X", { duration: 5000 });
                        _this.router.navigateByUrl('/pages/operations/bookingsdisp');
                    }
                    else {
                        _this.snackbar.open("Choose a valid Duty Type", "X", { duration: 3000 });
                    }
                });
            }
            else {
                _this.snackbar.open("Choose a valid vehicle group", "X", { duration: 3000 });
            }
            //this.defaltVal();
        });
    };
    // setCustomer(temp:any,event:any)
    // {
    //   if(event.source.selected==true)
    //   {
    //     this.bookings.cname=temp.name
    //     this.temp2.customerId=temp.id;
    //     this.bookings.customerId=temp.id;
    //     var tempCust=
    //     {
    //       ownerId:this.user.ownerId,
    //       customerId:temp.id
    //     }
    //     this.bookingService.getRecurringBookedBy(tempCust).subscribe(data=>{
    //       this.bookByArr=data;
    //       this.bookBy = this.bookByCtrl.valueChanges
    //       .pipe(
    //         startWith(''),
    //         map(val => this.filterBookBy(val))
    //       ); 
    //     })
    //     this.bookingService.getRecurringPassenger(tempCust).subscribe(data=>{
    //       this.passengerArr=data;
    //       this.passengers=Observable.of(this.passengerArr)
    //     })
    //   }
    // }
    ReviewneededbookingsComponent.prototype.filterPass = function (i) {
        var _this = this;
        this.passengers = this.passengerForms.at(i).get('passenger').valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (val) { return _this.filterPassenger(val); }));
    };
    ReviewneededbookingsComponent.prototype.filterPassenger = function (val) {
        return this.passengerArr.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    ReviewneededbookingsComponent.prototype.setVehicleGroup = function (temp, event) {
        console.log(temp);
        if (event.source.selected == true) {
            this.temp2.vehicleGroupId = temp.id;
            this.bookings.vehicleGroup = temp.name;
            this.bookings.vehicleGroupId = temp.id;
        }
    };
    ReviewneededbookingsComponent.prototype.setDutyType = function (temp, event) {
        if (event.source.selected == true) {
            this.temp2.dutyTypeId = temp.id;
            this.bookings.dutyType = temp.name;
            this.bookings.dutyTypeId = temp.id;
            if (temp.dType == "Long Duration-Total KM Daily HR(Monthly Bookings)" || temp.dType == "Long Duration-Total KM and HR(Monthly Bookings)") {
                this.isBookingMonthly = true;
            }
            else {
                this.isBookingMonthly = false;
            }
        }
    };
    ReviewneededbookingsComponent.prototype.getPrice = function () {
        var _this = this;
        if (this.temp2.customerId == '') {
            this.snackbar.open('Please select Customer', 'X', { duration: 3000 });
        }
        else if (this.temp2.vehicleGroupId == '') {
            this.snackbar.open('Please select Vehicle Group', 'X', { duration: 3000 });
        }
        else if (this.temp2.dutyTypeId == '') {
            this.snackbar.open('Please select Duty Type', 'X', { duration: 3000 });
        }
        else if (this.temp2.city == '') {
            this.snackbar.open('Please select City', 'X', { duration: 3000 });
        }
        else {
            this.pricingService.getCustomerPrice(this.temp2).subscribe(function (data) {
                if (data.length != 0)
                    _this.bookings.price = (data[0].baseRate);
                else
                    _this.snackbar.open('Price is not entered for current combination', 'X', { duration: 3000 });
            });
        }
    };
    ReviewneededbookingsComponent.prototype.saveBooking = function () {
        if (this.bookings.customerId == null) {
            this.snackbar.open("Please Enter Customer", "X", { duration: 3000 });
        }
        else if (this.bookings.vehicleGroupId == null) {
            this.snackbar.open("Please Enter Vehicle Group", "X", { duration: 3000 });
        }
        else if (this.bookings.dutyTypeId == null) {
            this.snackbar.open("Please Enter Duty Type", "X", { duration: 3000 });
        }
        else {
            this.bookings.status = 'Booked';
            if (this.dropAddressMaps == true) {
                this.bookings.dropAddress = this.searchDropRef.nativeElement.value;
            }
            if (this.reportingAddressMaps == true) {
                this.bookings.reportingAddress = this.searchReportingRef.nativeElement.value;
            }
            if (this.bookings.unconfirmed === true) {
                this.bookings.status = 'Unconfirmed';
            }
            else {
                this.bookings.status = 'Booked';
            }
            this.bookings.startDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.bookings.startDate).format("YYYY-MM-DD");
            this.bookings.endDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.bookings.endDate).format("YYYY-MM-DD");
            var temp = this.myForm.get('rows');
            var temp2 = this.bookedByForm.get('rows');
            this.bookingService.updateBooking(this.bookings);
            if (this.deletedPassenger.length > 0) {
                this.bookingService.deletePassenger(this.deletedPassenger);
            }
            if (this.deletedBookedBy.length > 0) {
                this.bookingService.deleteBookedBy(this.deletedBookedBy);
            }
            this.bookingService.addPassengers(this.bookings.id, temp.value);
            this.bookingService.addBookedBy(this.bookings.id, temp2.value);
            //this.defaltVal();
            this.dialog.closeAll();
            this.snackbar.open("Booking Updated Successfully", null, { duration: 5000 });
            this.router.navigateByUrl('/pages/operations/bookingsdisp');
        }
    };
    ReviewneededbookingsComponent.prototype.getVehicleGroup = function (temp, ownerId) {
        return this.bookingService.getVehilceGroup(temp, ownerId);
    };
    ReviewneededbookingsComponent.prototype.getDutyType = function (temp, ownerId) {
        return this.bookingService.getDutyType(temp, ownerId);
    };
    ReviewneededbookingsComponent.prototype.defaltVal = function () {
        this.bookings.bookBy = '';
        this.bookings.passenger = '';
        this.bookings.vehicleGroup = '';
        this.bookings.dutyType = '';
        this.bookings.status = '';
        this.bookings.cname = '';
        this.bookings.bookByNo = '';
        this.bookings.bookByEmail = '';
        this.bookings.ccId = '';
        this.bookings.passenger = '';
        this.bookings.passengerNo = '';
        this.bookings.passengerEmail = '';
        this.bookings.fromLoc = '';
        this.bookings.toLoc = '';
        this.bookings.endDate = null;
        this.bookings.reportingTime = '';
        this.bookings.startFromGarage = '';
        this.bookings.reportingAddress = '';
        this.bookings.dropAddress = '';
        this.bookings.shortReportingAddress = '';
        this.bookings.flightTrainNo = '';
        this.bookings.dispatchCenter = '';
        this.bookings.dispatchCenterId = null;
        this.bookings.billTo = '';
        this.bookings.price = '';
        this.bookings.remarks = '';
        this.bookings.operatorNotes = '';
        this.bookings.label = '';
        this.bookings.vehicleGroup = '';
        this.bookings.dutyType = '';
        this.bookings.status = '';
        this.bookings.startDate = null;
        this.bookings.vehicleGroupId = '';
        this.bookings.customerId = '';
        this.bookings.poNumber = '';
    };
    ReviewneededbookingsComponent.prototype.setReportingAddress = function (temp) {
        this.bookings.reportingAddress = temp;
    };
    ReviewneededbookingsComponent.prototype.setDropAddress = function (temp) {
        this.bookings.dropAddress = temp;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ReviewneededbookingsComponent.prototype, "unloadHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchReporting"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ReviewneededbookingsComponent.prototype, "searchReportingRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchDrop"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ReviewneededbookingsComponent.prototype, "searchDropRef", void 0);
    ReviewneededbookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'reviewneededbookings',
            template: __webpack_require__("./src/app/pages/operations/reviewneededbookings/reviewneededbookings.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/reviewneededbookings/reviewneededbookings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__bookings_service__["a" /* BookingsService */],
            __WEBPACK_IMPORTED_MODULE_2__masters_vehiclegroups_vehiclegroups_component__["a" /* VehicleGroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__masters_dutytype_duty_type_service__["a" /* DutyTypeService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_9__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_10__masters_pricing_pricing_service__["a" /* PricingService */],
            __WEBPACK_IMPORTED_MODULE_11__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__new_branch_new_branch_service__["a" /* NewBranchService */],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_14__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_15__duties_duties_component__["a" /* DutiesComponent */]])
    ], ReviewneededbookingsComponent);
    return ReviewneededbookingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/scheduler/scheduler.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  scheduler works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/operations/scheduler/scheduler.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/scheduler/scheduler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchedulerComponent = (function () {
    function SchedulerComponent() {
    }
    SchedulerComponent.prototype.ngOnInit = function () {
    };
    SchedulerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'scheduler',
            template: __webpack_require__("./src/app/pages/operations/scheduler/scheduler.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/scheduler/scheduler.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SchedulerComponent);
    return SchedulerComponent;
}());



/***/ })

});
//# sourceMappingURL=operations.module.chunk.js.map