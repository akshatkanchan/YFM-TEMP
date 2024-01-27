webpackJsonp(["common"],{

/***/ "./src/app/pages/airline/airlinedisp/airline.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirlineService; });
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


var AirlineService = (function () {
    function AirlineService(http) {
        this.http = http;
    }
    AirlineService.prototype.addFlights = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/airline/add', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    AirlineService.prototype.getFlights = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/airline/retrieve', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    AirlineService.prototype.getFlightsAccordingToCustomer = function (temp) {
        var temp1 = {
            customerId: temp
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/airline/retrieveForInvoice', temp1, { headers: headers }).map(function (res) { return res.json(); });
    };
    AirlineService.prototype.getFlightsForInvoice = function (temp) {
        var temp1 = {
            customerId: temp
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/airline/retrieveForCreateInvoice', temp1, { headers: headers }).map(function (res) { return res.json(); });
    };
    AirlineService.prototype.deleteFlights = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/airline/delete', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    AirlineService.prototype.updateFlights = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/airline/update', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    AirlineService.prototype.emailTicket = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/Voip/sendMailFlight', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    AirlineService.prototype.addAirlineFiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/bookings/addAirlineFiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    AirlineService.prototype.getAirlineFiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/bookings/getAirlineFiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    AirlineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AirlineService);
    return AirlineService;
}());



/***/ }),

/***/ "./src/app/pages/airline/visa/visa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisaService; });
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


var VisaService = (function () {
    function VisaService(http) {
        this.http = http;
    }
    VisaService.prototype.getVisa = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/visa/retrieve', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService.prototype.getVisaTravellers = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/visa/retrieveTravellers', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService.prototype.getVisaByCustomer = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/visa/retrieveVisaByCustomer', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService.prototype.addVisa = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/visa/add', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService.prototype.addTraveller = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/visa/addTravellers', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService.prototype.updateVisa = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/visa/update', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService.prototype.updateTraveller = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/visa/updateTraveller', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService.prototype.deleteVisa = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/visa/delete', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService.prototype.deleteVisaTraveller = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/visa/deleteTraveller', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService.prototype.addVisaFiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/bookings/addVisaFiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService.prototype.getVisaFiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/bookings/getVisaFiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    VisaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], VisaService);
    return VisaService;
}());



/***/ }),

/***/ "./src/app/pages/hotels/displayhotels/hotel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
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


var HotelService = (function () {
    function HotelService(http) {
        this.http = http;
    }
    HotelService.prototype.addHotels = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/add', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.addRooms = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/addRooms', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.addBooking = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/addBooking', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.addBookingAdditionalCharges = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/addBookingAdditionalCharges', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.getBookings = function (temp) {
        var temp1 = {
            customerId: temp
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/getBooking', temp1, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.getHotels = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/retrieve', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.getHotelCity = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/retrieveHotelCity', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.getHotelBookings = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/retrieveHotelBookings', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.getHotelBookingForMail = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/retrieveForMail', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.getHotelBookingsAdditionalCharges = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/retrieveHotelBookingAdditionalCharges', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.getHotelBookingsForCustomer = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/retrieveHotelBookingsForCustomer', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.deleteHotel = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/delete', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.deleteHotelBooking = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/deleteHotelBooking', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.deleteHotelBookingAdditionalCharges = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/deleteHotelBookingAdditionalCharges', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.updateHotel = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/update', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.updateRooms = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/updateRooms', temp, { headers: headers }).subscribe(function (res) { return res; });
    };
    HotelService.prototype.updateHotelBooking = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/updateHotelBooking', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.updateHotelBookingAdditionalCharges = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/updatehotelBookingAdditionalCharges', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.getHotelTermsAndConditions = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/retrieveHotelTermsAndConditions', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.addHotelFiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/bookings/addHotelFiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService.prototype.getHotelFiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/bookings/getHotelFiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    HotelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HotelService);
    return HotelService;
}());



/***/ }),

/***/ "./src/app/pages/operations/advancepayment/advancepayment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Advance Payment\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            Booking ID #{{bookingId}}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Amount\n              <input matInput [(ngModel)]=\"advancePayment.amount\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            Payment Mode\n            <br><br>\n            <mat-radio-group [(ngModel)]=\"advancePayment.paymentMode\" (change)=\"checkPaymentMode(advancePayment.paymentMode)\">\n              <mat-radio-button value=\"Credit Card\">Credit Card</mat-radio-button>\n              <mat-radio-button value=\"Cheque\">Cheque</mat-radio-button>\n              <mat-radio-button value=\"NEFT\">NEFT</mat-radio-button>\n              <mat-radio-button value=\"Cash\">Cash</mat-radio-button>\n              <mat-radio-button value=\"Others\">Others</mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"cheque\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Cheque Number\n              <input matInput [(ngModel)]=\"advancePayment.chequeNumber\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              Bank Name\n              <input matInput [(ngModel)]=\"advancePayment.bankName\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              Cheque Date\n              <input matInput [(ngModel)]=\"advancePayment.chequeDate\" [matDatepicker]=\"chequeDate\" (click)=\"chequeDate.open()\">\n              <mat-datepicker-toggle matSuffix [for]=\"chequeDate\"></mat-datepicker-toggle>\n              <mat-datepicker #chequeDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"neft\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Transaction Number\n              <input matInput [(ngModel)]=\"advancePayment.transactionNumber\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Bank Name\n              <input matInput [(ngModel)]=\"advancePayment.neftBankName\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field class=\"w-100\">\n              Received in Bank              \n              <input matInput [formControl]=\"receivedInBankCtrl\"  [matAutocomplete]=\"autoRIB\">\n              <mat-autocomplete #autoRIB=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of bankAccount | async\" [value]=\"option.bankName\" (onSelectionChange)=\"setReceivedInBank(option,$event)\">\n                      {{ option.bankName }} ({{option.number}})\n                  </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Bank Credit Date\n              <input matInput [(ngModel)]=\"advancePayment.bankCreditDate\" [matDatepicker]=\"bankCreditDate\" (click)=\"bankCreditDate.open()\">\n              <mat-datepicker-toggle matSuffix [for]=\"bankCreditDate\"></mat-datepicker-toggle>\n              <mat-datepicker #bankCreditDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n      </nb-card-body>  \n    </nb-card>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12\">\n    <button mat-raised-button color=\"primary\" (click)=\"saveAdvancePayment()\">Save</button>\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>  "

/***/ }),

/***/ "./src/app/pages/operations/advancepayment/advancepayment.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/advancepayment/advancepayment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancepaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advancepayment_service__ = __webpack_require__("./src/app/pages/operations/advancepayment/advancepayment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_bank_account_bank_account_service__ = __webpack_require__("./src/app/pages/operations/new-bank-account/bank-account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
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







var AdvancepaymentComponent = (function () {
    function AdvancepaymentComponent(dialog, data, advancepaymentService, auth, bankAccountService) {
        this.dialog = dialog;
        this.data = data;
        this.advancepaymentService = advancepaymentService;
        this.auth = auth;
        this.bankAccountService = bankAccountService;
        this.user = {};
        this.advancePayment = {};
        this.cheque = false;
        this.neft = false;
        this.receivedInBankCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
        if (this.data != null) {
            this.bookingId = data.id;
        }
    }
    AdvancepaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.bankAccountService.getBankAccount(_this.user).subscribe(function (data) {
                _this.bankAccounts = data;
                _this.bankAccount = _this.receivedInBankCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (val) { return _this.filterBankAccounts(val); }));
            });
        });
    };
    AdvancepaymentComponent.prototype.checkPaymentMode = function (temp) {
        console.log(temp);
        if (temp == "Cheque") {
            this.cheque = true;
            this.neft = false;
        }
        else if (temp == "NEFT") {
            this.cheque = false;
            this.neft = true;
        }
        else {
            this.cheque = false;
            this.neft = false;
        }
    };
    AdvancepaymentComponent.prototype.setReceivedInBank = function (option, event) {
        if (event.source.selected == true) {
            // console.log(option);
            this.advancePayment.receivedInBank = option.id;
        }
    };
    AdvancepaymentComponent.prototype.saveAdvancePayment = function () {
        var _this = this;
        this.advancePayment.bid = this.bookingId;
        this.advancepaymentService.addAdvancePayment(this.advancePayment).subscribe(function (data) {
            _this.dialog.closeAll();
        });
    };
    AdvancepaymentComponent.prototype.filterBankAccounts = function (val) {
        return this.bankAccounts.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AdvancepaymentComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    AdvancepaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-advancepayment',
            template: __webpack_require__("./src/app/pages/operations/advancepayment/advancepayment.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/advancepayment/advancepayment.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */], Object, __WEBPACK_IMPORTED_MODULE_2__advancepayment_service__["a" /* AdvancepaymentService */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__new_bank_account_bank_account_service__["a" /* BankAccountService */]])
    ], AdvancepaymentComponent);
    return AdvancepaymentComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/bookingfiles/bookingfiles.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\">\n\n  <div formArrayName=\"files\">\n\n      <div *ngFor=\"let files of fileForms.controls; let i=index\" [formGroupName]=\"i\">\n\n\n          <mat-form-field class=\"xs\" style=\"padding-right: 20px\">\n              <input matInput placeholder=\"Name\" formControlName=\"name\">\n          </mat-form-field>\n\n          <button (click)=\"bookingImages.click()\" mat-flat-button matTooltip=\"Upload\">Browse</button>\n          <input hidden type=\"file\" formControlName=\"images\" #bookingImages (change)=\"imageSelect($event,i)\">\n          <i *ngIf=\"selectedFiles[i]!=undefined\" style=\"font-size: 11px;\">{{selectedFiles[i].name}}</i>\n\n          <button mat-icon-button color=\"warn\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon></button>\n\n      </div>\n\n  </div>\n\n  <button mat-raised-button color=\"primary\" (click)=\"addRow()\">Add File</button>\n\n  <button mat-raised-button color=\"primary\" (click)=\"uploadFinal()\">Upload</button>\n\n</form>"

/***/ }),

/***/ "./src/app/pages/operations/bookingfiles/bookingfiles.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/bookingfiles/bookingfiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingfilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
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







var BookingfilesComponent = (function () {
    function BookingfilesComponent(fb, uploadService, data, bookingService, http, auth, snackBar) {
        this.fb = fb;
        this.uploadService = uploadService;
        this.data = data;
        this.bookingService = bookingService;
        this.http = http;
        this.auth = auth;
        this.snackBar = snackBar;
        this.imgUrl = [];
        this.selectedFiles = [];
        this.booking = {};
        this.user = {};
        this.booking = data;
    }
    BookingfilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
        });
        this.myForm = this.fb.group({
            files: this.fb.array([])
        });
        this.addRow();
    };
    Object.defineProperty(BookingfilesComponent.prototype, "fileForms", {
        get: function () {
            return this.myForm.get('files');
        },
        enumerable: true,
        configurable: true
    });
    BookingfilesComponent.prototype.addRow = function () {
        var phone = this.fb.group({
            name: [],
            images: [],
            imageName: []
        });
        this.fileForms.push(phone);
    };
    BookingfilesComponent.prototype.deleteRow = function (i) {
        this.fileForms.removeAt(i);
    };
    BookingfilesComponent.prototype.imageSelect = function (event, i) {
        console.log(event.target.files[0], i);
        var file = event.target.files[0];
        this.selectedFiles[i] = file;
        console.log(this.selectedFiles);
    };
    BookingfilesComponent.prototype.uploadFinal = function () {
        var _this = this;
        var uploadData = new FormData();
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var body = JSON.stringify({ headers: headers });
        var i = 0;
        this.fileForms.value.forEach(function (element) {
            var type = _this.selectedFiles[i].type.split("/");
            var imageName = _this.booking.id + "_" + element.name + "." + type[1];
            console.log(_this.selectedFiles[i].name);
            var tempArr = {
                bookingId: _this.booking.id,
                fileName: element.name,
                imageName: _this.booking.id + "_" + element.name + "." + type[1]
            };
            _this.bookingService.addBookingFiles(tempArr).subscribe(function (data) { });
            if (_this.selectedFiles[i] != undefined)
                uploadData.append(_this.user.companyName + '/bookingFiles/' + _this.booking.id + "/" + imageName, _this.selectedFiles[i], 'bookingFiles');
            _this.http.post("/files/uploadS3", uploadData, body).map(function (res) { return res.json(); }).subscribe();
            i = i + 1;
        });
        this.snackBar.open("Files Uploaded", "X", { duration: 3000 });
    };
    BookingfilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bookingfiles',
            template: __webpack_require__("./src/app/pages/operations/bookingfiles/bookingfiles.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/bookingfiles/bookingfiles.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__fileupload_service__["a" /* FileuploadService */], Object, __WEBPACK_IMPORTED_MODULE_4__bookings_service__["a" /* BookingsService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSnackBar */]])
    ], BookingfilesComponent);
    return BookingfilesComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/bookingsdisp/bookingsdisp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n\n        <nb-card-header>Bookings<button style=\"float: right;margin-top: -10px;\" mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>settings</mat-icon></button>\n          <mat-menu #menu=\"matMenu\" class=\"mat-menu-panel\">\n              <button mat-menu-item (click)=\"openImport()\">Import</button>\n              <button *ngIf=\"permission.exportBookings\" (click)=\"exportBookings()\" mat-menu-item>Export</button>\n          </mat-menu>\n        </nb-card-header>\n          <nb-card-body>\n          <div align=\"center\">\n            <mat-form-field class=\"filter-field\">\n              <input matInput   placeholder=\"Filter\"   #input>\n            </mat-form-field> \n        \n            <mat-form-field class=\"filter-date\">\n              <input matInput [(ngModel)]=\"filterStart\" [matDatepicker]=\"pickerStart\" (click)=\"pickerStart.open()\" readonly placeholder=\"From\">\n              <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\n              <mat-datepicker #pickerStart></mat-datepicker>\n            </mat-form-field>            \n              \n            <mat-form-field class=\"filter-date\">\n              <input matInput [(ngModel)]=\"filterEnd\" [matDatepicker]=\"pickerEnd\" (click)=\"pickerEnd.open()\" readonly placeholder=\"To\">\n              <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n              <mat-datepicker #pickerEnd></mat-datepicker>\n            </mat-form-field>\n            \n      \n              <button matTooltip=\"Search\" mat-icon-button (click)=\"filterByDate()\"><mat-icon class=\"filter-icon\">search</mat-icon></button>\n              <button matTooltip=\"Clear All\" mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n              <mat-form-field class=\"mobile-select\">\n                <mat-select [value]=\"status\" (selectionChange)=\"filter($event.value)\">\n                  <mat-option value=\"Booked\">Booked</mat-option>\n                  <mat-option value=\"Completed\">Completed</mat-option>\n                  <mat-option value=\"Cancelled\">Cancelled</mat-option>\n                  <mat-option value=\"Billed\">Billed</mat-option>\n                  <mat-option value=\"Unconfirmed\">Unconfirmed</mat-option>\n                  <mat-option value=\"Review Needed\">Review Needed</mat-option>\n                  <mat-option value=''>All</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n        <mat-table [hidden]=\"isLoading\" #table [dataSource]=\"dataSource\" matSort matSortActive=\"startDate\" matSortDirection=\"asc\" matSortDisableClear >\n      \n        <ng-container matColumnDef=\"startDate\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Date </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.startDate | date: 'dd-MM-yyyy'}} </mat-cell>\n        </ng-container>\n\n          <ng-container matColumnDef=\"Customer\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Customer </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.cname}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Booked by\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Booked by </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.bookByNo\"> {{element.bookBy}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Passenger\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Passenger </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.passengerNo\"> {{element.passenger}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"dutyType\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Duty Type </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.dutyType}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"vehicleGroup\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Vehicle Group </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.vehicleGroup}} </mat-cell>\n          </ng-container>\n          \n          <ng-container matColumnDef=\"fromLoc\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> From </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.fromLoc}} </mat-cell>\n          </ng-container>\n          \n          <ng-container matColumnDef=\"toLoc\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> To </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.toLoc}} </mat-cell>\n            </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <mat-chip-list>\n                  <mat-chip color=\"primary\" selected=\"true\"> {{element.status}} </mat-chip>\n                </mat-chip-list> \n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Duties\">\n            <mat-header-cell *matHeaderCellDef> Completed Duties </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.duties_completed}}/{{element.number_of_duties}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options </mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\" (click)=\"$event.stopPropagation()\">\n              <button *ngIf=\"element.status!='Cancelled'\" mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n              <button *ngIf=\"element.status==='Completed'\" mat-menu-item (click)=\"createInvoice(row)\">Create Invoice</button>\n              <button *ngIf=\"element.status=='Booked' && permission.manageBooking\" mat-menu-item (click)=\"selectRow(row)\">Edit</button>\n              <button *ngIf=\"element.status=='Review Needed' && permission.manageBooking\" mat-menu-item (click)=\"reviewNeededRow(row)\">Review</button>\n              <button mat-menu-item (click)=\"uploadFiles(row)\">Upload Files</button>\n              <button *ngIf=\"element.status=='Booked'\" mat-menu-item (click)=\"extendBooking(row)\">Extend Booking</button>\n              <button *ngIf=\"element.status=='Booked'\" mat-menu-item (click)=\"advancePayment(row)\">Advance Payment</button>\n              <button *ngIf=\"element.status=='Booked' && permission.smsEmailCallBookings\" mat-menu-item (click)=\"sendConfirmation(row)\">Send Confirmation</button>\n              <button *ngIf=\"element.status=='Booked' && permission.manageBooking\" (click)=\"cancelBooking(row)\" mat-menu-item>Cancel</button>\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n      \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row [ngStyle]=\"{'background-color':rowColors(row.startDate,row.status)}\" (click)=\"viewDuties(row)\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n        <div *ngIf=\"isLoading\" \n        style=\"display: flex; justify-content: center; align-items: center\">\n       <mat-progress-spinner \n         color=\"primary\" \n         mode=\"indeterminate\">\n       </mat-progress-spinner>\n       </div>\n\n        <mat-paginator [length]=\"length\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"\n        ></mat-paginator>\n\n    </nb-card-body>\n  </nb-card>\n  </div>\n  <div class=\"col-lg-12\" align=\"right\">\n    \n    <a *ngIf=\"permission.addBookings\" (click)=\"addBooking()\" class=\"float\">\n        <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n    </a>\n        \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/operations/bookingsdisp/bookingsdisp.component.scss":
/***/ (function(module, exports) {

module.exports = "nb-card-body {\n  padding: 10px 5px 5px 5px !important; }\n"

/***/ }),

/***/ "./src/app/pages/operations/bookingsdisp/bookingsdisp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsdispComponent; });
/* unused harmony export BookingDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__advancepayment_advancepayment_component__ = __webpack_require__("./src/app/pages/operations/advancepayment/advancepayment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sendconfirmation_sendconfirmation_component__ = __webpack_require__("./src/app/pages/operations/sendconfirmation/sendconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__importbookings_importbookings_component__ = __webpack_require__("./src/app/pages/operations/importbookings/importbookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_confirm_confirm_component__ = __webpack_require__("./src/app/pages/modals/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__masters_extendbooking_extendbooking_component__ = __webpack_require__("./src/app/pages/masters/extendbooking/extendbooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__masters_sub_users_sub_user_service__ = __webpack_require__("./src/app/pages/masters/sub-users/sub-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__exportbookings_exportbookings_component__ = __webpack_require__("./src/app/pages/operations/exportbookings/exportbookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bookingfiles_bookingfiles_component__ = __webpack_require__("./src/app/pages/operations/bookingfiles/bookingfiles.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var BookingsdispComponent = (function () {
    function BookingsdispComponent(matSnackBar, bookingsService, dialog, auth, router, permissionService) {
        this.matSnackBar = matSnackBar;
        this.bookingsService = bookingsService;
        this.dialog = dialog;
        this.auth = auth;
        this.router = router;
        this.permissionService = permissionService;
        this.isLoading = true;
        this.status = "Booked";
        this.filterStart = '';
        this.filterEnd = '';
        this.pageSize = 10;
        this.pageSizeOptions = [10, 15, 25, 40];
        this.displayedColumns = ['startDate', 'Customer', 'Booked by', 'Passenger', 'dutyType', 'vehicleGroup', 'fromLoc', 'toLoc', 'status', 'Duties', 'Options']; //,'Passenger','vgroup','dutyt','status'];
        this.bookings = {};
        this.permission = {};
        this.user = {};
    }
    BookingsdispComponent.prototype.rowColors = function (currDate, status) {
        if (currDate === this.today && (status === 'Booked' || status === 'Allotted' || status === 'Dispatched')) {
            return '#FFE5CC';
        }
        else if (status === 'Cancelled') {
            return 'indianred';
        }
        else if (currDate < this.today && status === 'Completed') {
            return '#CCFFE5';
        }
        else {
            return 'white';
        }
    };
    BookingsdispComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
            if (event.data == this.user.ownerId + 'bookings') {
                this.loadDutiesPage();
            }
        }.bind(this);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
            });
            _this.today = __WEBPACK_IMPORTED_MODULE_15_moment__().format('YYYY-MM-DD');
            _this.dataSource = new BookingDataSource(_this.bookingsService);
            _this.dataSource.loadDuties('bookBy', '', 'startDate', 'asc', 0, 10, 'Booked', '1970-01-01', '2050-12-31', _this.user.ownerId);
            _this.dataSource.loading$.subscribe(function (data) {
                if (data === true)
                    _this.isLoading = true;
                else
                    _this.isLoading = false;
            });
            _this.input.nativeElement.value = '';
            if (_this.filterStart == '' && _this.filterEnd == '') {
                _this.bookingsService.getCount(_this.bookings.id, _this.input.nativeElement.value, _this.sort.active, _this.sort.direction, _this.paginator.pageIndex, _this.paginator.pageSize, _this.status, '1970-01-01', '2050-12-31', _this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                    _this.length = res.count;
                }); });
            }
            else if (_this.filterStart == '') {
                _this.bookingsService.getCount(_this.bookings.id, _this.input.nativeElement.value, _this.sort.active, _this.sort.direction, _this.paginator.pageIndex, _this.paginator.pageSize, _this.status, '1970-01-01', _this.filterEnd, _this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                    _this.length = res.count;
                }); });
            }
            else if (_this.filterEnd == '') {
                _this.bookingsService.getCount(_this.bookings.id, _this.input.nativeElement.value, _this.sort.active, _this.sort.direction, _this.paginator.pageIndex, _this.paginator.pageSize, _this.status, _this.filterStart, '2050-12-31', _this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                    _this.length = res.count;
                }); });
            }
            else {
                _this.bookingsService.getCount(_this.bookings.id, _this.input.nativeElement.value, _this.sort.active, _this.sort.direction, _this.paginator.pageIndex, _this.paginator.pageSize, _this.status, _this.filterStart, _this.filterEnd, _this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                    _this.length = res.count;
                }); });
            }
        });
    };
    BookingsdispComponent.prototype.ngOnDestroy = function () {
        this.ws.close();
    };
    BookingsdispComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.input.nativeElement, 'keyup')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_13_rxjs_operators__["debounceTime"])(150), Object(__WEBPACK_IMPORTED_MODULE_13_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_13_rxjs_operators__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadDutiesPage();
            if (_this.filterStart == '' && _this.filterEnd == '') {
                _this.bookingsService.getCount(_this.bookings.id, _this.input.nativeElement.value, _this.sort.active, _this.sort.direction, _this.paginator.pageIndex, _this.paginator.pageSize, _this.status, '1970-01-01', '2050-12-31', _this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                    _this.length = res.count;
                }); });
            }
            else if (_this.filterStart == '') {
                _this.bookingsService.getCount(_this.bookings.id, _this.input.nativeElement.value, _this.sort.active, _this.sort.direction, _this.paginator.pageIndex, _this.paginator.pageSize, _this.status, '1970-01-01', _this.filterEnd, _this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                    _this.length = res.count;
                }); });
            }
            else if (_this.filterEnd == '') {
                _this.bookingsService.getCount(_this.bookings.id, _this.input.nativeElement.value, _this.sort.active, _this.sort.direction, _this.paginator.pageIndex, _this.paginator.pageSize, _this.status, _this.filterStart, '2050-12-31', _this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                    _this.length = res.count;
                }); });
            }
            else {
                _this.bookingsService.getCount(_this.bookings.id, _this.input.nativeElement.value, _this.sort.active, _this.sort.direction, _this.paginator.pageIndex, _this.paginator.pageSize, _this.status, _this.filterStart, _this.filterEnd, _this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                    _this.length = res.count;
                }); });
            }
        }))
            .subscribe();
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        // on sort or paginate events, load a new page
        Object.assign(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_13_rxjs_operators__["tap"])(function () { return _this.loadDutiesPage(); }))
            .subscribe();
    };
    BookingsdispComponent.prototype.filter = function (temp) {
        var _this = this;
        if (temp == 'All') {
            this.status = '';
        }
        else {
            this.status = temp;
        }
        if (this.filterStart == '' && this.filterEnd == '') {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, '1970-01-01', '2050-12-31', this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        else if (this.filterStart == '') {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, '1970-01-01', this.filterEnd, this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        else if (this.filterEnd == '') {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, this.filterStart, '2050-12-31', this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        else {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, this.filterStart, this.filterEnd, this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        this.paginator._pageIndex = 0;
        this.loadDutiesPage();
    };
    BookingsdispComponent.prototype.filterByDate = function () {
        var _this = this;
        var sDate = __WEBPACK_IMPORTED_MODULE_15_moment__(this.filterStart).format('YYYY-MM-DD');
        var eDate = __WEBPACK_IMPORTED_MODULE_15_moment__(this.filterEnd).format('YYYY-MM-DD');
        if (this.filterStart == '' && this.filterEnd == '') {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, '1970-01-01', '2050-12-31', this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        else if (this.filterStart == '') {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, '1970-01-01', eDate, this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        else if (this.filterEnd == '') {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, sDate, '2050-12-31', this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        else {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, sDate, eDate, this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        this.loadDutiesPage();
    };
    BookingsdispComponent.prototype.search = function () {
        // this.dataSource.filter=filterValue.trim().toLowerCase();
    };
    BookingsdispComponent.prototype.clear = function () {
        var _this = this;
        this.input.nativeElement.value = '';
        this.filterStart = '';
        this.filterEnd = '';
        if (this.filterStart == '' && this.filterEnd == '') {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, '1970-01-01', '2050-12-31', this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        else if (this.filterStart == '') {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, '1970-01-01', this.filterEnd, this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        else if (this.filterEnd == '') {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, this.filterStart, '2050-12-31', this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        else {
            this.bookingsService.getCount(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, this.filterStart, this.filterEnd, this.user.ownerId).subscribe(function (data) { return data.map(function (res) {
                _this.length = res.count;
            }); });
        }
        this.loadDutiesPage();
    };
    BookingsdispComponent.prototype.openImport = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__importbookings_importbookings_component__["a" /* ImportbookingsComponent */], { autoFocus: false, disableClose: true });
    };
    BookingsdispComponent.prototype.viewDuties = function (row) {
        console.log(row);
        this.bookingsService.setEditData(row);
        this.router.navigate(['/pages/operations/dutydisp']);
    };
    BookingsdispComponent.prototype.selectRow = function (row) {
        console.log(row);
        delete row.number_of_duties;
        delete row.duties_completed;
        this.bookingsService.setEditData(row);
        this.router.navigate(['/pages/operations/bookings']);
    };
    BookingsdispComponent.prototype.reviewNeededRow = function (row) {
        console.log(row);
        delete row.number_of_duties;
        delete row.duties_completed;
        this.bookingsService.setEditData(row);
        this.router.navigate(['/pages/operations/reviewneededbookings']);
    };
    BookingsdispComponent.prototype.addBooking = function () {
        this.router.navigate(['/pages/operations/addbooking']);
    };
    BookingsdispComponent.prototype.createInvoice = function (row) {
        this.bookingData = row;
        this.bookingsService.setBookingId(this.bookingData);
        this.router.navigate(['/pages/masters/createinvoice']);
    };
    BookingsdispComponent.prototype.advancePayment = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__advancepayment_advancepayment_component__["a" /* AdvancepaymentComponent */], { autoFocus: false, disableClose: true, data: row });
    };
    BookingsdispComponent.prototype.sendConfirmation = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__sendconfirmation_sendconfirmation_component__["a" /* SendconfirmationComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    BookingsdispComponent.prototype.deleteBooking = function (booking) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { disableClose: true, autoFocus: false }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.bookingsService.deleteBooking(booking).subscribe(function (data) {
                    if (data.errno == undefined) {
                        // var i=this.tempArray.indexOf(booking);
                        // this.tempArray.splice(i,1);
                        // this.dataSource.data=this.tempArray;
                        _this.matSnackBar.open("One Booking Deleted", "X", { duration: 3000 });
                    }
                    else {
                        if (data.errno == 1451) {
                            window.alert("Cannot delete because you have corresponding Duties");
                        }
                        else {
                            window.alert("Error Cannot Delete Booking");
                        }
                    }
                });
            }
        });
    };
    BookingsdispComponent.prototype.openExport = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_16__exportbookings_exportbookings_component__["a" /* ExportbookingsComponent */], { autoFocus: false, disableClose: true });
    };
    BookingsdispComponent.prototype.extendBooking = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__masters_extendbooking_extendbooking_component__["a" /* ExtendbookingComponent */], { data: { row: row }, autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data === "yes") {
                _this.ws.send(_this.user.ownerId + 'bookings');
                console.log("Done");
            }
        });
    };
    BookingsdispComponent.prototype.cancelBooking = function (booking) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { disableClose: true, autoFocus: false }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.bookingsService.cancelBooking(booking).subscribe(function (data) {
                    _this.ws.send(_this.user.ownerId + 'bookings');
                    _this.matSnackBar.open("One Booking Cancelled", "X", { duration: 3000 });
                });
            }
        });
    };
    BookingsdispComponent.prototype.loadDutiesPage = function () {
        if (this.filterStart == '' && this.filterEnd == '') {
            this.dataSource.loadDuties(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, '1970-01-01', '2050-12-31', this.user.ownerId);
        }
        else if (this.filterStart == '') {
            this.dataSource.loadDuties(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, '1970-01-01', this.filterEnd, this.user.ownerId);
        }
        else if (this.filterEnd == '') {
            this.dataSource.loadDuties(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, this.filterStart, '2050-12-31', this.user.ownerId);
        }
        else {
            this.dataSource.loadDuties(this.bookings.id, this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, this.status, this.filterStart, this.filterEnd, this.user.ownerId);
        }
    };
    BookingsdispComponent.prototype.exportBookings = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_16__exportbookings_exportbookings_component__["a" /* ExportbookingsComponent */], { autoFocus: false, disableClose: true });
    };
    BookingsdispComponent.prototype.uploadFiles = function (row) {
        delete row.number_of_duties;
        delete row.duties_completed;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_17__bookingfiles_bookingfiles_component__["a" /* BookingfilesComponent */], { autoFocus: false, data: row });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatSort */])
    ], BookingsdispComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatPaginator */])
    ], BookingsdispComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], BookingsdispComponent.prototype, "input", void 0);
    BookingsdispComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bookingsdisp',
            template: __webpack_require__("./src/app/pages/operations/bookingsdisp/bookingsdisp.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/bookingsdisp/bookingsdisp.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__bookings_service__["a" /* BookingsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_11__masters_sub_users_sub_user_service__["a" /* SubUserService */]])
    ], BookingsdispComponent);
    return BookingsdispComponent;
}());

var BookingDataSource = (function () {
    function BookingDataSource(bookingService) {
        this.bookingService = bookingService;
        this.bookingSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* BehaviorSubject */]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* BehaviorSubject */](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    BookingDataSource.prototype.connect = function (collectionViewer) {
        return this.bookingSubject.asObservable();
    };
    BookingDataSource.prototype.disconnect = function (collectionViewer) {
        this.bookingSubject.complete();
        this.loadingSubject.complete();
    };
    BookingDataSource.prototype.loadDuties = function (columnName, filter, sortcolumn, sortDirection, pageIndex, pageSize, status, startDate, endDate, ownerId) {
        var _this = this;
        if (columnName === void 0) { columnName = 'bookBy'; }
        if (filter === void 0) { filter = ''; }
        if (sortcolumn === void 0) { sortcolumn = 'startDate'; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        if (status === void 0) { status = 'Booked'; }
        if (ownerId === void 0) { ownerId = ''; }
        this.loadingSubject.next(true);
        this.bookingService.findBookings(columnName, filter, sortcolumn, sortDirection, pageIndex, pageSize, status, startDate, endDate, ownerId).pipe(Object(__WEBPACK_IMPORTED_MODULE_13_rxjs_operators__["catchError"])(function () { return Object(__WEBPACK_IMPORTED_MODULE_14_rxjs_observable_of__["a" /* of */])([]); }), Object(__WEBPACK_IMPORTED_MODULE_13_rxjs_operators__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (lessons) {
            var data = lessons;
            var array = [];
            data.forEach(function (element) {
                array.push(element.id);
            });
            var temp = {
                idArray: array
            };
            _this.bookingService.loadCompletedDuties(temp).subscribe(function (data) {
                data.forEach(function (element) {
                    var index = lessons.findIndex(function (x) { return x.id == element.id; });
                    lessons[index].duties_completed = element.duties_completed;
                });
            });
            _this.bookingSubject.next(lessons);
        });
    };
    return BookingDataSource;
}());



/***/ }),

/***/ "./src/app/pages/operations/exportbookings/exportbookings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-12\">    \n    <nb-card>              \n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              <mat-select [(ngModel)]=\"predefined\"  placeholder=\"Preset\" >\n                <mat-option *ngFor=\"let element of presets\" [value]=\"element.name\" (click)=\"predefinedRoles(element)\"> \n                  {{element.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <form [formGroup]=\"preset\">\n              <mat-form-field>\n                <input matInput placeholder=\"Preset Name\" formControlName=\"permissionName\">\n                <mat-error>\n                  Enter a Permission Name to save as a preset\n                </mat-error>  \n              </mat-form-field>\n              <button mat-raised-button color=\"primary\" [disabled]=\"preset.invalid\" (click)=\"savePreset()\">Save Preset</button>\n            </form>            \n            <!-- <button mat-icon-button class=\"close-button\" color=\"warn\" (click)=\"close()\"><mat-icon style=\"font-size: 25px;\">close</mat-icon></button> -->      \n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-12\">\n            Customer Name:\n            <mat-form-field class=\"w-100\">\n              <!-- <input aria-placeholder=\"Pick one\" (change)=\"setCustomer(option)\" name=\"cname\" [(ngModel)]=\"bookings.cname\" matInput [matAutocomplete]=\"custauto\"> -->\n              <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput [matAutocomplete]=\"custauto\" >\n              <mat-autocomplete #custauto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of customer |async\" [value]=\"option.name\" (onSelectionChange)=\"setCustomer(option,$event)\">\n                  {{ option.name }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>      \n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field class=\"w-100\">\n              Start Date\n              <input matInput [(ngModel)]=\"bookings.startDate\" [matDatepicker]=\"startDate\" (click)=\"startDate.open()\" readonly name=\"startDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n              <mat-datepicker #startDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field class=\"w-100\">\n              End Date\n              <input matInput [(ngModel)]=\"bookings.endDate\" [matDatepicker]=\"endDate\" (click)=\"endDate.open()\" readonly name=\"endDate\">         \n              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n              <mat-datepicker #endDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-checkbox [ngModel]=\"exportBookings.id\" (ngModelChange)=\"change($event,&quot;bid as 'Booking ID'&quot;)\">\n              BookingId\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.cname\" (change)=\"change($event,&quot;cname as 'Customer Name'&quot;)\">\n              Customer Name\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.bookBy\" (change)=\"change($event,&quot;bookBy as 'Booked By'&quot;)\">\n              Booked by\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.bookByNo\" (change)=\"change($event,&quot;bookByNo as 'Booked By No'&quot;)\">\n              Booked by Phone\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.bookByEmail\" (change)=\"change($event,&quot;bookByEmail as 'Booked By Email'&quot;)\">\n              Booked by Email\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.ccId\" (change)=\"change($event,&quot;ccId as 'CCID'&quot;)\">\n              CCID\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.passenger\" (change)=\"change($event,&quot;passenger as 'Passenger'&quot;)\"> \n              Passenger Name\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.passengerNo\" (change)=\"change($event,&quot;passengerNo as 'PassengerNo'&quot;)\">\n              Passenger Phone\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.passengerEmail\" (change)=\"change($event,&quot;passengerEmail as 'Passenger Email'&quot;)\">\n              Passenger Email\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.fromLoc\" (change)=\"change($event,&quot;fromLoc as 'From Location'&quot;)\">\n              From city\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.toLoc\" (change)=\"change($event,&quot;toLoc as 'To Location'&quot;)\">\n              To city\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.startDate\" (change)=\"change($event,&quot;startDate as 'Start Date'&quot;)\">\n              Start Date\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.endDate\" (change)=\"change($event,&quot;endDate as 'End Date'&quot;)\">\n              End Date\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.reportingTime\" (change)=\"change($event,&quot;reportingTime as 'Reporting Time'&quot;)\">\n              Reporting Time\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.startFromGarage\" (change)=\"change($event,&quot;startFromGarage as 'Start From Garage'&quot;)\">\n              Start From Garage\n            </mat-checkbox><br>      \n          </div>\n          <div class=\"col-lg-6 col-12\">\n            <mat-checkbox [(ngModel)]=\"exportBookings.reportingAddress\" (change)=\"change($event,&quot;reportingAddress as 'Reporting Address'&quot;)\">\n              Reporting Address\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.shortReportingAddress\" (change)=\"change($event,&quot;shortReportingAddress as 'Short Reporting Address'&quot;)\">\n              Short reporting Address\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.dropAddress\" (change)=\"change($event,&quot;dropAddress as 'Drop Address'&quot;)\">\n              Drop Address\n            </mat-checkbox><br>        \n            <mat-checkbox [(ngModel)]=\"exportBookings.flightTrainNo\" (change)=\"change($event,&quot;flightTrainNo as 'Flight/Train No'&quot;)\">\n              Flight/Train Number            \n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.poNumber\" (change)=\"change($event,&quot;poNumber as 'PO Number'&quot;)\">\n              PO Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.dispatchCenter\" (change)=\"change($event,&quot;dispatchCenter as 'Dispatch Center'&quot;)\">\n              Dispatch Center\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.billTo\" (change)=\"change($event,&quot;billTo as 'Billed To'&quot;)\">\n              Bill To\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.price\" (change)=\"change($event,&quot;price as 'Price'&quot;)\">\n              Duty price\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.remarks\" (change)=\"change($event,&quot;remarks as 'Remarks'&quot;)\">\n              Remarks\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.operatorNotes\" (change)=\"change($event,&quot;operatorNotes as 'Operator Notes'&quot;)\">\n              Operator Notes\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.label\" (change)=\"change($event,&quot;label as 'Label'&quot;)\">\n              Label\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.vehicleGroup\" (change)=\"change($event,&quot;vehicleGroup as 'Vehicle Group'&quot;)\">\n              Vehicle Group\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.dutyType\" (change)=\"change($event,&quot;dutyType as 'Duty Type'&quot;)\">\n              Duty Type\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.totalPrice\" (change)=\"change($event,&quot;totalPrice as 'Total Price'&quot;)\">\n              Total Price\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.extraHours\" (change)=\"change($event,&quot;extraHours as 'Extra Hours'&quot;)\">\n              Extra Hours\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.extraKms\" (change)=\"change($event,&quot;extraKms as 'Extra Kms'&quot;)\">\n              Extra Kms \n            </mat-checkbox><br>  \n          </div>                             \n        </div>\n      </nb-card-body>\n    </nb-card>    \n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12 col-12\">\n    <button mat-raised-button color=\"primary\" (click)=\"getBookingsForExport()\">12Export</button>\n    <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">Close</button>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/pages/operations/exportbookings/exportbookings.component.scss":
/***/ (function(module, exports) {

module.exports = "form {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/pages/operations/exportbookings/exportbookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportbookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masters_new_employees_employee_service__ = __webpack_require__("./src/app/pages/masters/new-employees/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__export_service__ = __webpack_require__("./src/app/pages/operations/exportbookings/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ExportbookingsComponent = (function () {
    function ExportbookingsComponent(dialog, customerService, employeeService, auth, fb, snackBar, exportService, bookingService) {
        this.dialog = dialog;
        this.customerService = customerService;
        this.employeeService = employeeService;
        this.auth = auth;
        this.fb = fb;
        this.snackBar = snackBar;
        this.exportService = exportService;
        this.bookingService = bookingService;
        this.user = {};
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.bookings = {};
        this.columns = [];
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
    ExportbookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.bookings.ownerID = data[0].ownerId;
            _this.exportBookings.ownerId = data[0].ownerId;
            if (_this.user.type == 'employee') {
                var body = {
                    userId: _this.user.id
                };
                _this.employeeService.getEmployeeForCustomer(body).subscribe(function (data) {
                    _this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(function (data) {
                        if (data.length != 0) {
                            _this.customers = data;
                            _this.customer = _this.customerCtrl.valueChanges
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
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
                console.log(_this.presets);
            });
        });
        this.preset = this.fb.group({
            permissionName: ['']
        });
    };
    ExportbookingsComponent.prototype.setCustomer = function (temp, event) {
        if (event.source.selected == true) {
            this.bookings.cname = temp.name;
            this.bookings.customerId = temp.id;
            this.exportBookings.cname = temp.name;
        }
        if (this.exportBookings.cname) {
            this.columns.push("cname as 'Customer Name'");
        }
    };
    ExportbookingsComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers(this.user).subscribe(function (data) {
            _this.customers = data;
            _this.customer = _this.customerCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
        });
    };
    ExportbookingsComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    ExportbookingsComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    ExportbookingsComponent.prototype.getBookingsForExport = function () {
        var _this = this;
        console.log("DAS");
        var temp = {
            columns: this.columns,
            startDate: this.bookings.startDate,
            endDate: this.bookings.endDate,
            customerId: this.bookings.customerId
        };
        this.bookingService.getBookingsForExport(temp).subscribe(function (data) {
            _this.bookingsData = data;
            console.log(data);
        });
        this.exportBooking();
    };
    ExportbookingsComponent.prototype.exportBooking = function () {
        console.log(this.exportBookings);
        var workBook = __WEBPACK_IMPORTED_MODULE_8_xlsx__["utils"].book_new();
        var workSheet = __WEBPACK_IMPORTED_MODULE_8_xlsx__["utils"].json_to_sheet(this.bookingsData);
        __WEBPACK_IMPORTED_MODULE_8_xlsx__["utils"].book_append_sheet(workBook, workSheet, 'data');
        __WEBPACK_IMPORTED_MODULE_8_xlsx__["writeFile"](workBook, "_Duties.xlsx");
    };
    ExportbookingsComponent.prototype.savePreset = function () {
        var _this = this;
        delete this.exportBookings.id;
        this.exportBookings.name = this.preset.get('permissionName').value;
        this.exportService.addExportBookingProfile(this.exportBookings).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Preset Saved", "X", { duration: 3000 });
        });
    };
    ExportbookingsComponent.prototype.change = function (event, temp) {
        console.log(event);
        console.log(temp);
        if (event.checked == true) {
            this.columns.push(temp);
            console.log(this.columns);
        }
        if (event.checked == false) {
            console.log(temp);
            var index = this.columns.findIndex(function (x) { return x === temp; });
            this.columns.splice(index, 1);
            console.log(this.columns);
        }
    };
    ExportbookingsComponent.prototype.predefinedRoles = function (temp) {
        this.columns = [];
        console.log(temp);
        this.exportBookings = temp;
        if (this.exportBookings.bookingId) {
            this.columns.push("id as 'Booking Id'");
        }
        if (this.exportBookings.name) {
            this.columns.push("name as 'Name'");
        }
        if (this.exportBookings.cname) {
            this.columns.push("cname as 'Customer Name'");
        }
        if (this.exportBookings.bookBy) {
            this.columns.push("bookBy as 'Book By'");
        }
        if (this.exportBookings.bookByEmail) {
            this.columns.push("bookByEmail as 'Booked By Email'");
        }
        if (this.exportBookings.bookByNo) {
            this.columns.push("bookByNo as 'Booked By No'");
        }
        if (this.exportBookings.cname) {
            this.columns.push("cname as 'Customer Name'");
        }
        if (this.exportBookings.ccId) {
            this.columns.push("ccId as 'CCID'");
        }
        if (this.exportBookings.passenger) {
            this.columns.push("passenger as 'Passenger'");
        }
        if (this.exportBookings.passengerEmail) {
            this.columns.push("passengerEmail as 'Passenger Email'");
        }
        if (this.exportBookings.passengerNo) {
            this.columns.push("passengerNo as 'Passenger No'");
        }
        if (this.exportBookings.fromLoc) {
            this.columns.push("fromLoc as 'From Location'");
        }
        if (this.exportBookings.toLoc) {
            this.columns.push("toLoc as 'To Location'");
        }
        if (this.exportBookings.startDate) {
            this.columns.push("startDate as 'Start Date'");
        }
        if (this.exportBookings.endDate) {
            this.columns.push("endDate as 'End Date'");
        }
        if (this.exportBookings.reportingTime) {
            this.columns.push("reportingTime as 'Reporting Time'");
        }
        if (this.exportBookings.startFromGarage) {
            this.columns.push("startFromGarage as 'Start From Garage'");
        }
        if (this.exportBookings.reportingAddress) {
            this.columns.push("reportingAddress as 'Reporting Address'");
        }
        if (this.exportBookings.shortReportingAddress) {
            this.columns.push("shortReportingAddress as 'Short Reporting Address'");
        }
        if (this.exportBookings.dropAddress) {
            this.columns.push("dropAddress as 'Drop Address'");
        }
        if (this.exportBookings.flightTrainNo) {
            this.columns.push("flightTrainNo as 'Flight/Train No'");
        }
        if (this.exportBookings.poNumber) {
            this.columns.push("bo.poNumber as 'PO Number'");
        }
        if (this.exportBookings.dispatchCenter) {
            this.columns.push("dispatchCenter as 'Dispatch Center'");
        }
        if (this.exportBookings.billTo) {
            this.columns.push("billTo as 'Billed To'");
        }
        if (this.exportBookings.price) {
            this.columns.push("price as 'Price'");
        }
        if (this.exportBookings.operatorNotes) {
            this.columns.push("operatorNotes as 'Operator Notes'");
        }
        if (this.exportBookings.remarks) {
            this.columns.push("remarks as 'Remarks'");
        }
        if (this.exportBookings.dutyType) {
            this.columns.push("dutyType as 'Duty Type'");
        }
        if (this.exportBookings.label) {
            this.columns.push("label as 'Label'");
        }
        if (this.exportBookings.vehicleGroup) {
            this.columns.push("vehicleGroup as 'Vehicle Group'");
        }
        if (this.exportBookings.totalPrice) {
            this.columns.push("bo.totalPrice as 'Total Price'");
        }
        if (this.exportBookings.extraHours) {
            this.columns.push("extraHours as 'Extra Hours'");
        }
        if (this.exportBookings.extraKms) {
            this.columns.push("extraKms as 'Extra Kms'");
        }
    };
    ExportbookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'exportbookings',
            template: __webpack_require__("./src/app/pages/operations/exportbookings/exportbookings.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/exportbookings/exportbookings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_4__masters_new_employees_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__export_service__["a" /* ExportService */],
            __WEBPACK_IMPORTED_MODULE_9__bookings_service__["a" /* BookingsService */]])
    ], ExportbookingsComponent);
    return ExportbookingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/importbookings/importbookings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div style=\"margin-bottom:15px; color: brown;\">Please use the following format to import bookings: <a style=\"color:#14902b;\" (click)=\"getDownloadFormat()\">Booking Format</a> </div>\n    <input type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\" style=\"display: inline-block;\" (change)=\"incomingfile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\n    <button mat-raised-button style=\"float:right\" [disabled]=\"disable\" (click)=\"Upload()\">Upload</button>\n    <div *ngIf=\"totalRows>0\" style=\"padding-top:5px;\">\n      <mat-progress-bar color=\"primary\" mode=\"determinate\" [value]=\"progressBarValue\"></mat-progress-bar>\n      <p style=\"float:right;\">{{rowsCompleted}}/{{totalRows}} Completed</p>\n    </div>\n    <div *ngIf=\"invalidData.length>0\" style=\"padding-top:5px;\">\n      Invalid Data in Rows:\n      <ul>\n        <li *ngFor=\"let rows of invalidData\">\n          {{rows}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12\">\n    <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/operations/importbookings/importbookings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/operations/importbookings/importbookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportbookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncIterator) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};







var ImportbookingsComponent = (function () {
    function ImportbookingsComponent(bookingService, auth, http, dialog) {
        this.bookingService = bookingService;
        this.auth = auth;
        this.http = http;
        this.dialog = dialog;
        this.disable = true;
        this.rowsCompleted = 0;
        this.totalRows = 0;
        this.user = {};
        this.temp = [];
        this.booking = {
            status: 'Booked',
            cname: '',
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
            customerId: '',
            dutyTypeId: '',
            vehicleGroupId: '',
            startDate: null,
            endDate: null,
            ccId: '',
            poNumber: '',
            ownerID: ''
        };
        this.observables = [];
        this.invalidData = [];
        this.i = 0;
        this.progressBarValue = 0;
    }
    ImportbookingsComponent.prototype.getDownloadFormat = function () {
        window.open("http://www.yourfleetman.com/importExcel/bookingFormat", '_blank'); //change domain
    };
    ImportbookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
        });
    };
    ImportbookingsComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
        this.disable = false;
    };
    ImportbookingsComponent.prototype.Upload = function () {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function () {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = __WEBPACK_IMPORTED_MODULE_1_xlsx__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            _this.temp = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].sheet_to_json(worksheet, { raw: true });
        };
        fileReader.readAsArrayBuffer(this.file);
        setTimeout(function () {
            _this.totalRows = _this.temp.length;
            if (_this.totalRows > 0) {
                _this.disable = true;
                _this.log();
            }
            else {
                window.alert("There are no rows to be inserted");
            }
        }, 1000);
    };
    ImportbookingsComponent.prototype.log = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, element, res, e_1_1, e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.i = 0;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 8, 9, 14]);
                        _a = __asyncValues(this.temp);
                        _d.label = 2;
                    case 2: return [4 /*yield*/, _a.next()];
                    case 3:
                        if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 7];
                        return [4 /*yield*/, _b.value];
                    case 4:
                        element = _d.sent();
                        this.i++;
                        return [4 /*yield*/, this.compute(element)];
                    case 5:
                        res = _d.sent();
                        this.rowsCompleted = this.i;
                        this.progressBarValue = ((this.rowsCompleted / this.totalRows) * 100);
                        _d.label = 6;
                    case 6: return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _d.trys.push([9, , 12, 13]);
                        if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _c.call(_a)];
                    case 10:
                        _d.sent();
                        _d.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    ImportbookingsComponent.prototype.compute = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var tempData, sDate, eDate, rTime, temp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(element["Customer Name"] == undefined && element["Vehicle Group"] == undefined && element["Duty Type"] == undefined)) return [3 /*break*/, 1];
                        this.booking.cname = '';
                        this.booking.dutyType = '';
                        this.booking.vehicleGroup = '';
                        this.invalidData.push("Row number: " + this.i);
                        return [3 /*break*/, 3];
                    case 1:
                        this.booking.cname = element["Customer Name"];
                        this.booking.vehicleGroup = element["Vehicle Group"];
                        this.booking.dutyType = element["Duty Type"];
                        tempData = {
                            cname: element["Customer Name"],
                            dType: element["Duty Type"],
                            vGroup: element["Vehicle Group"],
                            ownerId: this.user.ownerId
                        };
                        return [4 /*yield*/, this.getDetails(tempData).toPromise().then(function (data) {
                                if (data[0][0] != undefined && data[1][0] != undefined && data[2][0] != undefined) {
                                    _this.booking.customerId = data[0][0].id;
                                    _this.booking.dutyTypeId = data[1][0].id;
                                    _this.booking.vehicleGroupId = data[2][0].id;
                                }
                                else {
                                    _this.invalidData.push("Row number: " + _this.i);
                                }
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (element["Booked By"] == undefined) {
                            this.booking.bookBy = '';
                        }
                        else {
                            this.booking.bookBy = element["Booked By"];
                        }
                        if (element["Booked By Number"] == undefined) {
                            this.booking.bookByNo = '';
                        }
                        else {
                            this.booking.bookByNo = element["Booked By Number"];
                        }
                        if (element["Booked By Email"] == undefined) {
                            this.booking.bookByEmail = '';
                        }
                        else {
                            this.booking.bookByEmail = element["Booked By Email"];
                        }
                        if (element["Passenger"] == undefined) {
                            this.booking.passenger = '';
                        }
                        else {
                            this.booking.passenger = element["Passenger"];
                        }
                        if (element["Passenger Number"] == undefined) {
                            this.booking.passengerNo = '';
                        }
                        else {
                            this.booking.passengerNo = element["Passenger Number"];
                        }
                        if (element["Passenger Email"] == undefined) {
                            this.booking.passengerEmail = '';
                        }
                        else {
                            this.booking.passengerEmail = element["Passenger Email"];
                        }
                        if (element["From city"] == undefined) {
                            this.booking.fromLoc = '';
                        }
                        else {
                            this.booking.fromLoc = element["From city"];
                        }
                        if (element["To city"] == undefined) {
                            this.booking.toLoc = '';
                        }
                        else {
                            this.booking.toLoc = element["To city"];
                        }
                        if (element["Start Date"] == undefined) {
                            this.booking.startDate = null;
                        }
                        else {
                            sDate = (element["Start Date"]);
                            this.booking.startDate = __WEBPACK_IMPORTED_MODULE_5_moment__(sDate, "DD-MM-YYYY").format('YYYY-MM-DD');
                        }
                        if (element["End Date"] == undefined) {
                            this.booking.endDate = null;
                        }
                        else {
                            eDate = element["End Date"];
                            this.booking.endDate = __WEBPACK_IMPORTED_MODULE_5_moment__(eDate, "DD-MM-YYYY").format('YYYY-MM-DD');
                        }
                        if (element["Reporting Time"] == undefined) {
                            this.booking.reportingTime = '';
                        }
                        else {
                            rTime = element["Reporting Time"];
                            this.booking.reportingTime = __WEBPACK_IMPORTED_MODULE_5_moment__(rTime, "h:mm A").format("hh:mm A");
                        }
                        if (element["Garage Start before (in mins)"] == undefined) {
                            this.booking.startFromGarage = '';
                        }
                        else {
                            this.booking.startFromGarage = element["Garage Start before (in mins)"];
                        }
                        if (element["Reporting Address"] == undefined) {
                            this.booking.reportingAddress = '';
                        }
                        else {
                            this.booking.reportingAddress = element["Reporting Address"];
                        }
                        if (element["Drop Address"] == undefined) {
                            this.booking.dropAddress = '';
                        }
                        else {
                            this.booking.dropAddress = element["Drop Address"];
                        }
                        if (element["Dispatch Center"] == undefined) {
                            this.booking.dispatchCenter = '';
                        }
                        else {
                            this.booking.dispatchCenter = element["Dispatch Center"];
                        }
                        if (element["Remarks"] == undefined) {
                            this.booking.remarks = '';
                        }
                        else {
                            this.booking.remarks = element["Remarks"];
                        }
                        if (element["Operator notes"] == undefined) {
                            this.booking.operatorNotes = '';
                        }
                        else {
                            this.booking.operatorNotes = element["Operator notes"];
                        }
                        if (element["Duty price"] == undefined) {
                            this.booking.price = '';
                        }
                        else {
                            this.booking.price = element["Duty price"];
                        }
                        if (element["Short reporting Address"] == undefined) {
                            this.booking.shortReportingAddress = '';
                        }
                        else {
                            this.booking.shortReportingAddress = element["Short reporting Address"];
                        }
                        if (!(this.booking.customerId != '' && this.booking.dutyTypeId != '' && this.booking.vehicleGroupId != '')) return [3 /*break*/, 5];
                        temp = {
                            booking: {
                                status: 'Booked',
                                cname: this.booking.cname,
                                passenger: this.booking.passenger,
                                vehicleGroup: this.booking.vehicleGroup,
                                dutyType: this.booking.dutyType,
                                bookBy: this.booking.bookBy,
                                bookByNo: this.booking.bookByNo,
                                bookByEmail: this.booking.bookByEmail,
                                passengerNo: this.booking.passengerNo,
                                passengerEmail: this.booking.passengerEmail,
                                fromLoc: this.booking.fromLoc,
                                toLoc: this.booking.toLoc,
                                reportingTime: this.booking.reportingTime,
                                startFromGarage: this.booking.startFromGarage,
                                reportingAddress: this.booking.reportingAddress,
                                dropAddress: this.booking.dropAddress,
                                shortReportingAddress: this.booking.shortReportingAddress,
                                flightTrainNo: this.booking.flightTrainNo,
                                dispatchCenter: this.booking.dispatchCenter,
                                billTo: this.booking.billTo,
                                price: this.booking.price,
                                remarks: this.booking.remarks,
                                operatorNotes: this.booking.operatorNotes,
                                label: this.booking.label,
                                customerId: this.booking.customerId,
                                dutyTypeId: this.booking.dutyTypeId,
                                vehicleGroupId: this.booking.vehicleGroupId,
                                startDate: this.booking.startDate,
                                endDate: this.booking.endDate,
                                ccId: this.booking.ccId,
                                poNumber: this.booking.poNumber,
                                ownerID: this.booking.ownerID
                            },
                            passenger: {
                                id: '',
                                passenger: this.booking.passenger,
                                passengerNo: this.booking.passengerNo,
                                passengerEmail: this.booking.passengerEmail
                            },
                            bookedBy: {
                                id: '',
                                bookByName: this.booking.bookBy,
                                bookByNo: this.booking.bookByNo,
                                bookByEmail: this.booking.bookByEmail,
                                CCID: this.booking.ccId
                            }
                        };
                        return [4 /*yield*/, this.bookingService.addExcelBooking(temp).toPromise().then(function (res) {
                                res;
                            })];
                    case 4:
                        _a.sent();
                        this.setDefault();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ImportbookingsComponent.prototype.getCustomerId = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/importExcel/getCustomerId', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ImportbookingsComponent.prototype.getDutyTypeId = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/importExcel/getDutyTypeId', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ImportbookingsComponent.prototype.getVehicleGroupId = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/importExcel/getVehicleGroupId', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ImportbookingsComponent.prototype.getDetails = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/importExcel/getDetails', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ImportbookingsComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    ImportbookingsComponent.prototype.setDefault = function () {
        this.booking = {
            status: 'Booked',
            cname: '',
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
            customerId: '',
            dutyTypeId: '',
            vehicleGroupId: '',
            startDate: null,
            endDate: null,
            ccId: '',
            poNumber: '',
            ownerID: ''
        };
    };
    ImportbookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-importbookings',
            template: __webpack_require__("./src/app/pages/operations/importbookings/importbookings.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/importbookings/importbookings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__bookings_service__["a" /* BookingsService */], __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatDialog */]])
    ], ImportbookingsComponent);
    return ImportbookingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/operations/sendconfirmation/sendconfirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"min-width:60vw;\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>Contact</nb-card-header>\n      <nb-card-body>\n        <div class=\"call-container\">\n          <mat-accordion *ngIf=\"logDisplay.length>0\">\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title style=\"justify-content: center;\">\n                  Logs\n                </mat-panel-title>\n                <mat-panel-description style=\"justify-content: center;\">\n                  Click here to open logs\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <div *ngFor=\"let element of logDisplay\" style=\"text-align: center;color:brown;\">\n                {{element.log}}\n              </div>\n            </mat-expansion-panel>\n          </mat-accordion>\n          <div style=\"margin-top:15px;\">\n            <table class=\"callTable\">\n              <tbody>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Customer: </b> {{customer.name}}\n                  </td>\n                  <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                    <mat-checkbox (change)=\"sendSMS($event,customer.phone,'customer',customer.name)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,customer.phone,'customer',customer.name)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,customer.email,'customer',customer.name)\">E-mail</mat-checkbox><br>\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Number: </b> {{customer.phone}}\n                    <button (click)=\"makeAppCall(customer.phone)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Email: </b> {{customer.email}}\n                  </td>\n                </tr>\n              </tbody>\n              <tbody *ngFor=\"let element of allBookedBy;\">\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Booked By: </b> {{element.bookByName}}\n                  </td>\n                  <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                    <mat-checkbox (change)=\"sendSMS($event,element.bookByNo,'bookedBy',element.bookByName)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,element.bookByNo,'bookedBy',element.bookByName)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,element.bookByEmail,'bookedBy',element.bookByName)\">E-mail</mat-checkbox><br>                    \n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Number: </b> {{element.bookByNo}}\n                    <button (click)=\"makeAppCall(element.bookByNo)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Email: </b> {{element.bookByEmail}}\n                  </td>\n                </tr>\n              </tbody>\n              <tbody *ngFor=\"let temp of allPassengers\">\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Passenger: </b> {{temp.passenger}}\n                  </td>\n                  <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                    <mat-checkbox (change)=\"sendSMS($event,temp.passengerNo,'passenger',temp.passenger)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,temp.passengerNo,'passenger',temp.passenger)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,temp.passengerEmail,'passenger',temp.passenger)\">E-mail</mat-checkbox><br>                    \n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Number: </b> {{temp.passengerNo}} \n                    <button (click)=\"makeAppCall(temp.passengerNo)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Email: </b> {{temp.passengerEmail}}\n                  </td>\n                </tr>\n              </tbody>\n              <tbody>\n                <tr>\n                  <td class=\"callCell\">\n                    <mat-form-field>\n                      <b>Custom Phone: </b>\n                      <input matInput [(ngModel)]=\"customNumber\">\n                    </mat-form-field>                      \n                    <br>\n                      <mat-checkbox (change)=\"sendSMS($event,customNumber,'custom')\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,customNumber,'custom')\">WhatApp</mat-checkbox>\n                  </td>\n                  <td class=\"callCell\" style=\"padding-left: 30px\">\n                    <mat-form-field>\n                      <b>Custom Email: </b>\n                      <input matInput [(ngModel)]=\"customEmail\">\n                    </mat-form-field>        \n                  </td>\n                </tr>                  \n              </tbody>\n              <tbody *ngIf=\"emailAttachments==true\">\n                <tr>\n                  <td class=\"callCell\" colspan=\"2\">\n                    <b>Email Attachments:</b><br>\n                    <div style=\"display:inline-block;\" *ngFor=\"let element of attachments\">\n                      <mat-checkbox (change)=\"addAttachments($event,element.imageName)\">{{element.fileName}}</mat-checkbox>\n                    </div>\n                  </td>\n                </tr>                  \n              </tbody>\n            </table> \n          </div>\n          <div class=\"invoice-button-container\" style=\"margin-top: 10px;\">\n            <div style=\"width: 60%;margin:auto;\">\n                <label style=\"text-align: left;font-size:14px;\">\n                  <p>For: {{duty.passenger}} ({{duty.passengerNo}})</p>                  \n                  <p>Type: {{duty.dutyType}}</p>                  \n                  <p>Vehicle Group: {{duty.vehicleGroup}}</p>\n                  <p>Reporting: {{duty.reportingAddress}}</p>\n              </label>\n              <hr style=\"border-top:1px solid black\">\n            </div>\n            <button class=\"invoice-button\" color=\"primary\" mat-raised-button (click)=\"send()\">Send</button>\n            <button *ngIf=\"!mailPassenger\" (click)=\"mailPassenger = true\" class=\"invoice-button\" mat-raised-button color=\"primary\" >Preview E-mail</button>            \n            <button *ngIf=\"mailPassenger\" class=\"invoice-button\" mat-raised-button color=\"primary\" (click)=\"mailPassenger=false; mailSupplier=false\">Close Preview</button>\n          </div>\n\n          <mat-divider></mat-divider>\n          <div [hidden]=\"!mailPassenger\">\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-12\">          \n          <div #dutyPassengerTemplate id=\"dutyPassengerTemplate\">\n      <!DOCTYPE html>\n      <html lang=\"en\">          \n        <head>\n          <title></title>\n          <meta charset=\"utf-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n          <style type=\"text/css\">\n            @font-face {font-family: 'sofia';  src: url('http://media.firebox.com/fonts/sofiapro_regular_macroman/SofiaProRegular-webfont.woff') format('woff');  mso-font-alt: 'Arial';  font-weight: normal !important;  font-style: normal !important;}\n            body,table,td,a{\n              -webkit-text-size-adjust:100%;\n              -ms-text-size-adjust:100%;\n              -webkit-font-smoothing: antialiased;\n            }\n            table,td{\n              mso-table-lspace:0pt;\n              mso-table-rspace:0pt;\n            }\n            img{\n              -ms-interpolation-mode:bicubic;\n            }\n            body{\n              margin:0;\n              padding:0;\n            }\n            img{\n              border:0;\n              height:auto;\n              line-height:100%;\n              outline:none;\n              text-decoration:none;\n            }\n            table{\n              border-collapse:collapse !important;\n            }\n            body{\n              height:100% !important;\n              margin:0;\n              padding:0;\n              width:100% !important;\n            }\n          \n            .appleBody a{\n              color: #0087DB !important;\n              text-decoration: underline !important;;\n            }\n          \n            .appleFooter a{\n              color: #343434 !important;\n              text-decoration: none;\n            }\n            td[class=btn]{\n              width:50% !important;\n            }\n          \n            span.preheader { display: none !important; }\n            @media screen and (max-width: 525px){\n              table[class=wrapper]{\n                width:100% !important;\n              }\n            \n            }\t/*@media screen and (max-width: 525px){\n              td[class=wrapper]{\n                width:100% !important;\n              }*/\n            \n            @media screen and (max-width: 525px){\n              td[class=mobile-hide]{\n                display:none;\n              }\n            \n            }\n            @media screen and (max-width: 525px){\n              img[class=mobile-show]{\n                display:block !important;\n                height:60px !important;\n                width:60px !important;\n                overflow:auto !important;\n              }\n            \n            }\n            @media screen and (max-width: 525px){\n              img[class=mobile-hide]{\n                display:none !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              img[class=img-max]{\n                max-width:100% !important;\n                width:100% !important;\n                height:auto !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              img[class=img-picture]{\n                max-width:60% !important;\n                width:60% !important;\n                height:auto !important;\n                float:right !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              table[class=responsive-table]{\n                width:100%!important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              table[class=responsive-column]{\n                width:100%!important;\n                padding:0px 0px 15px 0px !important;\n                display:block !important;\n              }\n            }\t\n            @media screen and (max-width: 525px){\n              td[class=top-padding]{\n                padding: 0px 0px 10px 0px !important;\n              }\n            \n            } \n            @media screen and (max-width: 525px){\n              td[class=slice-padding]{\n                padding:0px 15px 0px 15px !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              td[class=smaller-padding]{\n                padding:15px 0px 15px 0px !important;\n              }\n            \n            }\n            @media screen and (max-width: 525px){\n              td[class=section-padding]{\n                padding: 0px 10px 20px 10px !important;\n              }\n            }\n            @media screen and (max-width: 525px){\n              .height {\n                height: 100% !important;\n              }        \n            }\n            @media screen and (max-width: 525px){\n              td[class=mobile-wrapper]{\n                padding:0 !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              td[class=title]{\n                font-size: 16px !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              td[class=btn]{\n                width:80% !important;\n              }\n            \n            }\n          </style>\n          <!--[if gte mso 9]>\n            <style type=\"text/css\">\n              .img-max {\n                  width: 246px !important;\n              }\n            </style>\n          <![endif]-->\n        </head>\n      \n        <body style=\"margin: 0; padding: 0;\">\n          <div style=\"display:none !important; font-size:1px; color:#FFFFFF;\">\n            <!-- It&#039;s on the way to XXXXX, Really Good Emails -->\n          </div>\n          <!-- HEADER LOGO -->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#00C186\" style=\"background-color: #00C186;\">\n                <div align=\"center\" style=\"padding: 0px 20px 0px 20px;\">\n                  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                    <tr>\n                      <td bgcolor=\"#00C186\" style=\"background-color: #00C186;\">\n                        <div align=\"center\" style=\"padding: 0px 20px 0px 20px;\">\n                          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"wrapper\" align=\"center\">\n                            <tr align=\"center\">\n                              <td style=\"padding: 10px 0px 10px 0px; text-align: center; width: 400px;\" class=\"logo\" align=\"center\">\n                                <a>\n                                  <!-- <img alt=\"header\" src=\"http://media.firebox.com/i/nl/fb_light.png\" width=\"130\" border=\"0\"> -->\n                                  <img alt=\"header\" [src]=\"companyLogo\" width=\"70\" border=\"0\">\n                                </a>\n                              </td>\n                            </tr>\n                            <!-- <tr align=\"center\">\n                              <td style=\"padding: 0px 0px 15px 0px; text-align: center; width: 400px;\" class=\"logo\" align=\"center\"> -->\n                                <!-- <img src=\"https://media.firebox.com/i/transactional/header-dispatch.png\" width=\"100%\" class=\"img-max\"> -->\n                              <!-- </td>\n                            </tr> -->\n                          </table>\n                        </div>\n                      </td>\n                    </tr>\n                  </table>   \n                </div>\n              </td>\n            </tr>\n          </table>\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" *ngIf=\"businessSettings.bookingConfirmationHeader != ''\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 20px 15px 20px 15px;\" class=\"top-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <p [innerHtml]=\"businessSettings.bookingConfirmationHeader\"></p>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!-- ORDER CONFIRMATION -->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 5px 15px 5px 15px;\" class=\"top-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 15px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <span style=\"color: #343434; text-transform: uppercase; font-size: 14px; -webkit-font-smoothing: auto; font-weight: bold;\" class=\"appleBody\">\n                                                Booking date\n                                              </span>\n                                              <br />\n                                              <span class=\"appleBody\">\n                                                {{bookingDate}}\n                                              </span>\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: right; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <span style=\"color: #343434; text-transform: uppercase; font-size: 14px; -webkit-font-smoothing: auto; font-weight: bold;\" class=\"appleBody\" *ngIf=\"data.row.id\">\n                                                Booking no.\n                                              </span>\n                                              <br />\n                                              <a href=\"#\" style=\"color: #0087DB !important;\">\n                                                {{data.row.id}}\n                                              </a>\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!-- END ORDER CONFIRMATION -->\n          <!-- COPY SIMPLE SECTION-->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 2px 15px;\" class=\"section-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                          <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 20px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                              Passenger Details\n                                            </td>                                    \n                                          </tr>                                                                    \n                                          <!-- <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                              Sent using Airmail\n                                            </td>\n                                          </tr> -->                                  \n                                          <!--<tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                              <span class=\"appleBody\">\n                                                <a href=\"#\">\n                                                  More info\n                                                </a>\n                                              </span>\n                                            </td>\n                                          </tr> \n                                          <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                            <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px 20px 10px 0px; width: 400px;\">\n                                              <a href=\"#\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0087DB; border-top: 12px solid #0087DB; border-bottom: 12px solid #0087DB; border-right: 18px solid #0087DB; border-left: 18px solid #0087DB; display: inline-block; color: #ffffff;\">\n                                                Track my order\n                                              </a>\n                                            </td>\n                                          </tr> -->\n                                        </table>\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; border: 1px solid lightgray\" class=\"responsive-table\" width=\"500\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Sr.\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Guest Name\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Phone No.\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Email\n                                            </td>\n                                          </tr>\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              1\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              {{data.row.passenger}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              {{data.row.passengerNo}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              {{data.row.passengerEmail}}\n                                            </td>\n                                          </tr>\n                                        </table>                                \n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"5\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                              Reporting Time: {{data.row.reportingTime}}\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!-- END COPY SIMPLE SECTION-->\n          <!-- DELIVERY SECTION-->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 5px 15px;\" class=\"section-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <!-- LEFT COLUMN -->\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"290\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" width=\"290\" height=\"150\" class=\"wrapper height\" valign=\"top\" style=\"padding: 10px 0; border: 1px solid #EFEFEF; width: 400px;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"100%\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td class=\"title\" cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; padding: 0px 20px 10px 20px; text-transform: uppercase;\">\n                                              Reporting Address\n                                            </td>\n                                          </tr>\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888; font-size: 15px; line-height: 1.44; font-weight: normal; text-align: left; padding: 0px 20px 10px 20px;\">\n                                              <!-- Dosti Acres, Antop Hill, Mumbai, Maharashtra 400037 -->\n                                              {{data.row.reportingAddress}}\n                                            </td>\n                                          </tr>                                  \n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                            <!-- RIGHT COLUMN -->\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"290\" align=\"right\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" width=\"290\" height=\"150\" class=\"wrapper height\" valign=\"top\" style=\"padding: 10px 0; border: 1px solid #EFEFEF; width: 400px;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"100%\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td class=\"title\" cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; padding: 0px 20px 10px 20px; text-transform: uppercase;\">\n                                              Drop Address\n                                            </td>\n                                          </tr>\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888; font-size: 15px; line-height: 1.44; font-weight: normal; text-align: left; padding: 0px 20px 10px 20px;\">\n                                              {{data.row.dropAddress}}\n                                            </td>\n                                          </tr>                                  \n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!-- END DELIVERY SECTION-->\n        \n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 5px 15px;\" class=\"section-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 18px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 15px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                              Booked By\n                                            </td>                                    \n                                          </tr>                    \n                                        </table>\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">                                  \n                                          <tr cellspacing=\"0\" cellpadding=\"0\">                                    \n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                              {{data.row.bookBy}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                              {{data.row.bookByNo}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                              {{data.row.bookByEmail}}\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n        \n          <!-- ROW CS CONTACT SECTION-->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n              <tr>\n                <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 5px 15px;\" class=\"section-padding\">\n                  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                    <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                    <tr>\n                      <td>\n                        <!-- TWO COLUMNS -->\n                        <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                          <tr>\n                            <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                              <!-- LEFT COLUMN -->\n                              <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"290\" align=\"left\" class=\"responsive-table\">\n                                <tr>\n                                  <td valign=\"top\" align=\"left\">\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                      <tr>\n                                        <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" height=\"250\" width=\"290\" class=\"wrapper\" style=\"border: 1px solid #EFEFEF; width: 400px;\">\n                                          <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width: 100%;\" class=\"responsive-table\">\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #333333; font-size: 18px; font-weight: bold; text-align: center; padding: 15px 20px 10px 20px; width: 400px;\">\n                                                <img alt=\"\" src=\"https://media.firebox.com/i/transactional/icon-customer-service.png\" width=\"100\">\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #333333; font-size: 16px; font-weight: bold; text-align: center; padding: 0px 20px 10px 20px; width: 400px; text-transform: uppercase;\">\n                                                Got a query?\n                                                <br />\n                                                Get in touch\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 0px 20px 20px 20px; color: #888888 !important; line-height: 1.44; font-size: 14px;\">\n                                                Hit us up on the numbers featured\n                                              </td>\n                                            </tr>\n                                            <!-- <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                              <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 0px 20px 20px 20px; width: 400px;\">\n                                                <a href=\"https://www.firebox.com/admin/faqs?itc=915&utm_source=email&utm_medium=transactional&utm_campaign=order_dispatch\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0099E0; border-top: 12px solid #0099E0; border-bottom: 12px solid #0099E0; border-right: 18px solid #0099E0; border-left: 18px solid #0099E0; display: inline-block; color: #ffffff;\">\n                                                  FAQ ME\n                                                </a>\n                                              </td>\n                                            </tr> -->\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </table>\n                              <!-- RIGHT COLUMN -->\n                              <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"290\" align=\"right\" class=\"responsive-table\">\n                                <tr>\n                                  <td valign=\"top\" align=\"left\">\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                      <tr>\n                                        <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" height=\"250\" width=\"290\" class=\"wrapper\" style=\"border: 1px solid #EFEFEF; width: 400px;\">\n                                          <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width: 100%;\" class=\"responsive-table\">\n                                            <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 10px 20px 10px 20px; color: #343434; text-transform: uppercase; width: 400px;\">\n                                                Phone\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #0087DB; font-size: 16px; font-weight: bold; text-align: center; padding: 0px 20px 10px 20px;\">\n                                                <span class=\"appleBody\">{{companyProfile.phone}}</span>                                                                                                                \n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 10px 20px 10px 20px; color: #343434; text-transform: uppercase;\">\n                                                Email\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; color: #0087DB; padding: 0px 20px 20px 20px; font-weight: bold; font-size: 16px;\">\n                                                <span class=\"appleBody\">\n                                                  <a style=\"color: #0087DB; text-decoration: none !important;\">\n                                                    {{companyProfile.email}}\n                                                  </a>\n                                                </span>\n                                              </td>\n                                            </tr>\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </table>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n            </table>\n          <!-- END CS CONTACT ROW SECTION-->\n          \n          <!-- FOOTER -->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n              <tr>\n                <td bgcolor=\"#ffffff\" align=\"center\" style=\"padding: 20px 0px;\">\n                  <!-- UNSUBSCRIBE COPY -->\n                  <table width=\"600\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\" class=\"responsive-table\">\n                    <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 0 20px 0; font-size: 14px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#888888;\">\n                        Until next time, <strong>Techsimians Team</strong>\n                      </td>\n                    </tr>\n                    <!-- <tr>\n                      <td>\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                          <tr width=\"183\">\n                            <td>\n                              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                                <tr width=\"157\">\n                                  <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://www.facebook.com/Firebox\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/facebook_icon.png\" width=\"16\" height=\"16\">\n                                    </a>\n                                  </td>\n                                  <td width=\"19\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://twitter.com/Firebox\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/twitter_icon.png\" width=\"19\" height=\"16\">\n                                    </a>\n                                  </td>\n                                  <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://www.instagram.com/Firebox/\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/instagram_icon.png\" width=\"16\" height=\"16\">\n                                    </a>\n                                  </td>\n                                  <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://www.pinterest.com/firebox/\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/pinterest_icon.png\" width=\"16\" height=\"16\">\n                                    </a>\n                                  </td>\n                                </tr>\n                              </table>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n                    </tr> -->\n                    <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 0 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                        <span class=\"appleBody\">\n                          <strong>Techsimians</strong><br /> Mumbai, Maharashtra, India.\n                        </span>\n                      </td>\n                    </tr>\n                    <!-- <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 20px 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                        <span class=\"appleBody\">\n                          VAT Reg. No.: 798 6593 41 Registered in England & Wales, No. 3874477\n                        </span>\n                      </td>\n                    </tr> -->\n                    <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 20px 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                        <span class=\"appleBody\" style=\"color:#888888;\">\n                          <a style=\"color:#888888 !important;\">info@yourfleetman.com</a>\n                        </span>\n                        <span class=\"hide-mobile\">&nbsp; | &nbsp;</span>\n                        <span class=\"appleBody break\" style=\"color:#888888;\">\n                          <a href=\"http://www.techsimians.com\"\n                            style=\"color: #888888 !important;\">www.techsimians.com</a>\n                        </span>\n                        <span class=\"hide-mobile\">&nbsp; | &nbsp;</span>\n                        <span class=\"appleBody break\" style=\"color:#888888;\">\n                          8080 425 120\n                        </span>\n                      </td>\n                    </tr>\n                  </table>\n                </td>                \n            </tr>\n          </table>\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" *ngIf=\"businessSettings.bookingConfirmationFooter != ''\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 20px 15px 20px 15px;\" class=\"top-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <p [innerHTML]=\"businessSettings.bookingConfirmationFooter\"></p>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n        </body>\n      </html>\n    </div></div></div></div></div></nb-card-body></nb-card>    \n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12 col-12\">\n    <!-- <button mat-raised-button color=\"primary\" (click)=\"sendMail(template)\">Send Mail</button> -->\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/operations/sendconfirmation/sendconfirmation.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Share+Tech+Mono);\nb {\n  display: inline-block; }\nbody,\np {\n  padding: 0;\n  margin: 0; }\n.blockDiv {\n  margin: 0px 20px 0px 20px; }\nbody {\n  background: #272726; }\nlabel {\n  text-align: center;\n  font-family: Helvetica, sans-serif;\n  font-size: 1.25em;\n  color: #000000;\n  display: block; }\ndiv#controls {\n  padding: 3em;\n  max-width: 1200px;\n  margin: 0 auto; }\ndiv#controls div {\n  float: left; }\ndiv#controls div#call-controls,\ndiv#controls div#info {\n  width: 16em;\n  margin: 0 11.5em;\n  text-align: center; }\ndiv#controls div#info div#output-selection {\n  display: none; }\ndiv#controls div#info a {\n  font-size: 1.1em;\n  color: black;\n  text-decoration: underline;\n  cursor: pointer; }\ndiv#controls div#info select {\n  width: 300px;\n  height: 60px;\n  margin-bottom: 2em; }\ndiv#controls div#info label {\n  width: 300px; }\ndiv#controls div#call-controls div#volume-indicators {\n  display: none;\n  padding: 10px;\n  margin-top: 20px;\n  width: 500px;\n  text-align: center; }\ndiv#controls div#call-controls div#volume-indicators > div {\n  display: block;\n  height: 20px;\n  width: 0; }\ndiv#controls p.instructions {\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: Helvetica-LightOblique, Helvetica, sans-serif;\n  font-style: oblique;\n  font-size: 1.25em;\n  color: #000000; }\ndiv#controls div#info #client-name {\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: \"Helvetica Light\", Helvetica, sans-serif;\n  font-size: 1.25em;\n  color: #000000; }\ndiv#controls button {\n  width: 15em;\n  height: 2.5em;\n  margin-top: 1.75em;\n  border-radius: 1em;\n  font-family: \"Helvetica Light\", Helvetica, sans-serif;\n  font-size: .8em;\n  font-weight: lighter;\n  outline: 0; }\ndiv#controls button:active {\n  position: relative;\n  top: 1px; }\ndiv#controls div#call-controls {\n  display: none; }\ndiv#controls div#call-controls input {\n  font-family: Helvetica-LightOblique, Helvetica, sans-serif;\n  font-style: oblique;\n  font-size: 1em;\n  width: 100%;\n  height: 2.5em;\n  padding: .5em;\n  display: block; }\ndiv#controls div#call-controls button {\n  color: black;\n  background: 0 0;\n  border: 1px solid #000000; }\ndiv#controls div#call-controls button#button-hangup {\n  display: none; }\ndiv#controls div#log {\n  border: 1px solid #000000;\n  width: 35%;\n  height: 9.5em;\n  margin-top: 2.75em;\n  text-align: center;\n  padding: 1.5em;\n  float: right;\n  overflow-y: scroll; }\ndiv#controls div#log p {\n  color: #686865;\n  font-family: 'Share Tech Mono', 'Courier New', Courier, fixed-width;\n  font-size: 1.25em;\n  line-height: 1.25em;\n  margin-left: 1em;\n  text-indent: -1.25em;\n  width: 90%; }\n.whatsappBlock {\n  text-align: center; }\n.whatsappTo {\n  margin-left: -188px; }\n.whatsappTextArea {\n  width: 300px;\n  height: 200px; }\n.checkbox {\n  margin-left: 30px; }\n.driver {\n  margin-top: 5px; }\n.driverName {\n  margin: 10px 90px 5px 0px; }\n.driverNumber {\n  margin: 10px 87px 5px 0px; }\n.callTable {\n  border-collapse: collapse;\n  width: 100%; }\n.callCell {\n  padding: 5px;\n  border: 1px solid lightgrey;\n  line-height: 40px; }\n.mat-checkbox-inner-container {\n  margin-right: 3px !important; }\n.mat-checkbox {\n  margin-right: 15px !important; }\n"

/***/ }),

/***/ "./src/app/pages/operations/sendconfirmation/sendconfirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendconfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__circles_companyprofile_companyprofile_service__ = __webpack_require__("./src/app/pages/circles/companyprofile/companyprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duties_call_call_service__ = __webpack_require__("./src/app/pages/duties/call/call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messaging_service__ = __webpack_require__("./src/app/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
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












var SendconfirmationComponent = (function () {
    function SendconfirmationComponent(data, http, dialog, auth, companyProfileService, callService, snackBar, msgService, customerService, uploadService, _sanitizer, bookingService) {
        this.data = data;
        this.http = http;
        this.dialog = dialog;
        this.auth = auth;
        this.companyProfileService = companyProfileService;
        this.callService = callService;
        this.snackBar = snackBar;
        this.msgService = msgService;
        this.customerService = customerService;
        this.uploadService = uploadService;
        this._sanitizer = _sanitizer;
        this.bookingService = bookingService;
        this.callNumber = 0;
        this.deviceStatus = 'Offline';
        this.customNumber = '';
        this.customEmail = '';
        this.emailAttachments = false;
        this.attachments = [];
        this.addedAttachments = [];
        this.attachmentNames = [];
        this.mailSubject = "Your booking has been confirmed";
        this.bookingDate = new Date().toISOString().split('T')[0];
        this.businessSettings = {};
        this.user = {};
        this.companyProfile = {};
        this.allPassengers = [];
        this.allBookedBy = [];
        this.duty = {};
        this.message = '';
        this.whatsappMessage = '';
        this.smsArray = [];
        this.whatsAppArray = [];
        this.bookedByArray = [];
        this.passengerArray = [];
        this.customerArray = [];
        this.bookByLogCount = 0;
        this.passengerLogCount = 0;
        this.customerLogCount = 0;
        this.driverLogCount = 0;
        this.customLogCount = 0;
        this.logDisplay = [];
        this.logs = [];
        this.mailPassenger = false;
        this.customer = {};
        this.companyLogo = '';
    }
    SendconfirmationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.msgService.receiveMessage();
        this.callStatus = this.msgService.currentMessage;
        this.callStatus.subscribe(function (payload) {
            if (payload) {
                _this.callNumber = _this.checkNumber(payload);
                if (_this.callNumber != 0) {
                    _this.deviceStatus = 'Online';
                }
            }
        });
    };
    SendconfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.auth.businessSettings.subscribe(function (data) {
            _this.businessSettings = data;
        });
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.duty = _this.data.row;
            if (data) {
                _this.customerService.getSingleCustomer({ customerId: _this.duty.customerId }).subscribe(function (data) {
                    _this.customer = data[0];
                });
                console.log(_this.data);
                _this.callService.getAllPassengers({ bookingId: _this.duty.id }).subscribe(function (data) {
                    _this.allPassengers = data;
                });
                _this.callService.getAllBookedBy({ bookingId: _this.duty.id }).subscribe(function (data) {
                    _this.allBookedBy = data;
                });
                _this.callService.getBookingLogs({ bookingId: _this.duty.id }).subscribe(function (data) {
                    _this.logDisplay = data;
                });
                _this.callService.checkDevice(_this.user).subscribe();
                _this.bookingService.getBookingFiles({ id: _this.duty.id }).subscribe(function (data) {
                    _this.emailAttachments = true;
                    _this.attachments = data;
                });
            }
            _this.companyProfileService.getCompanyProfile(_this.user).subscribe(function (data) {
                _this.companyProfile = data[0];
                _this.uploadService.getFile(_this.user.companyName, 'profileImages', _this.companyProfile.companyLogo).subscribe(function (data) {
                    _this.companyLogo = _this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                        + data.text());
                });
                if (_this.businessSettings.UseBookingsIDInSMS == true) {
                    _this.message = "For: " + _this.duty.passenger.replace('+', '%2B') + " (" + _this.duty.passengerNo + ").%0aType: " + _this.duty.dutyType.replace('&', 'and') + ".%0aVehicle Group: " + _this.duty.vehicleGroup + ".%0aReporting: " + _this.duty.reportingAddress + ".%0aYour Booking ID is " + _this.duty.id;
                    _this.whatsappMessage = "For: " + _this.duty.passenger.replace('+', '%2B') + " (" + _this.duty.passengerNo + ").%0aType: " + _this.duty.dutyType.replace('&', 'and') + ".%0aVehicle Group: " + _this.duty.vehicleGroup + ".%0aReporting: " + _this.duty.reportingAddress + ".%0aYour Booking ID is " + _this.duty.id + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0a This is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                }
                else {
                    _this.message = "For: " + _this.duty.passenger.replace('+', '%2B') + " (" + _this.duty.passengerNo + ").%0aType: " + _this.duty.dutyType.replace('&', 'and') + ".%0aVehicle Group: " + _this.duty.vehicleGroup + ".%0aReporting: " + _this.duty.reportingAddress;
                    _this.whatsappMessage = "For: " + _this.duty.passenger.replace('+', '%2B') + " (" + _this.duty.passengerNo + ").%0aType: " + _this.duty.dutyType.replace('&', 'and') + ".%0aVehicle Group: " + _this.duty.vehicleGroup + ".%0aReporting: " + _this.duty.reportingAddress + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                }
            });
        });
    };
    SendconfirmationComponent.prototype.makeAppCall = function (number) {
        var _this = this;
        var temp = {
            userId: this.user.id,
            number: number,
            ownerId: this.user.ownerId,
            date: __WEBPACK_IMPORTED_MODULE_7_moment__().format("YYYY-MM-DD")
        };
        this.callService.makeCall(temp).subscribe(function (data) {
            console.log(data);
            _this.snackBar.open("Calling " + number + ". Check device", "X", { duration: 5000 });
        });
    };
    SendconfirmationComponent.prototype.sendMail = function (div1) {
        this.mailBody = div1;
        if (this.businessSettings.CCAllConfirmationAndCancellationEmails) {
            var temp = {
                companyEmail: this.companyProfile.email,
                name: this.companyProfile.name,
                email: this.data.row.bookByEmail,
                cc: this.businessSettings.AutoCCEmail,
                subject: this.mailSubject,
                mailBody: this.mailBody.innerHTML,
            };
        }
        else {
            var temp = {
                companyEmail: this.companyProfile.email,
                name: this.companyProfile.name,
                email: this.data.row.bookByEmail,
                cc: '',
                subject: this.mailSubject,
                mailBody: this.mailBody.innerHTML,
            };
        }
        console.log(temp);
        this.http.post('/Voip/sendMail', temp).subscribe(function (data) {
            console.log(data);
        });
        console.log(this.mailSubject);
        console.log(this.mailBody.innerHTML);
    };
    SendconfirmationComponent.prototype.messageSize = function () {
        this.messageLength = Math.ceil(this.message.length / 160);
        return this.messageLength;
    };
    SendconfirmationComponent.prototype.closeDialog = function () {
        this.callService.unsubscribe(this.user).subscribe();
        this.dialog.closeAll();
    };
    SendconfirmationComponent.prototype.sendSMS = function (event, number, type, name) {
        if (event.checked) {
            if (type == 'bookedBy') {
                this.logs.push({ bookingId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'passenger') {
                this.logs.push({ bookingId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'customer') {
                this.logs.push({ bookingId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customerLogCount = this.customerLogCount + 1;
            }
            if (type == 'custom') {
                this.logs.push({ bookingId: this.data.row.id, log: "SMS was sent to " + number + " on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customLogCount = this.customLogCount + 1;
            }
            this.smsArray.push(number);
            console.log(this.smsArray);
            console.log(this.logs);
        }
        else {
            if (type != 'custom') {
                for (var i = 0; i < this.logs.length; i++) {
                    if (this.logs[i].log.indexOf("SMS was sent to " + name + " (" + type + ")") != -1) {
                        this.logs.splice(i, 1);
                    }
                }
                this.bookByLogCount = this.bookByLogCount - 1;
            }
            else if (type == 'custom') {
                for (var i = 0; i < this.logs.length; i++) {
                    if (this.logs[i].log.indexOf("SMS was sent to " + number) != -1) {
                        this.logs.splice(i, 1);
                    }
                }
                this.customLogCount = this.customLogCount - 1;
            }
            var i = this.smsArray.findIndex(function (x) { return x === number; });
            this.smsArray.splice(i, 1);
            console.log(this.logs);
        }
    };
    SendconfirmationComponent.prototype.sendWhatsApp = function (event, number, type, name) {
        if (event.checked) {
            if (type == 'bookedBy') {
                this.logs.push({ bookingId: this.data.row.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'passenger') {
                this.logs.push({ bookingId: this.data.row.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'customer') {
                this.logs.push({ bookingId: this.data.row.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customerLogCount = this.customerLogCount + 1;
            }
            if (type == 'custom') {
                this.logs.push({ bookingId: this.data.row.id, log: "WhatsApp was sent to " + number + " on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customLogCount = this.customLogCount + 1;
            }
            this.whatsAppArray.push(number);
            console.log(this.whatsAppArray);
        }
        else {
            if (type != 'custom') {
                for (var i = 0; i < this.logs.length; i++) {
                    if (this.logs[i].log.indexOf("WhatsApp was sent to " + name + " (" + type + ")") != -1) {
                        this.logs.splice(i, 1);
                    }
                }
                this.bookByLogCount = this.bookByLogCount - 1;
            }
            else if (type == 'custom') {
                for (var i = 0; i < this.logs.length; i++) {
                    if (this.logs[i].log.indexOf("WhatsApp was sent to " + number) != -1) {
                        this.logs.splice(i, 1);
                    }
                }
                this.customLogCount = this.customLogCount - 1;
            }
            var i = this.whatsAppArray.findIndex(function (x) { return x === number; });
            this.whatsAppArray.splice(i, 1);
        }
    };
    SendconfirmationComponent.prototype.sendEmail = function (event, email, type, name) {
        if (event.checked) {
            if (type == 'bookedBy') {
                this.logs.push({ bookingId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookedByArray.push(email);
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'passenger') {
                this.logs.push({ bookingId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerArray.push(email);
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'customer') {
                this.logs.push({ bookingId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customerArray.push(email);
                this.customerLogCount = this.customerLogCount + 1;
            }
        }
        else {
            if (type == 'bookedBy') {
                var i = this.bookedByArray.findIndex(function (x) { return x === email; });
                this.bookedByArray.splice(i, 1);
                this.bookByLogCount = this.bookByLogCount - 1;
            }
            if (type == 'passenger') {
                var i = this.passengerArray.findIndex(function (x) { return x === email; });
                this.passengerArray.splice(i, 1);
                this.passengerLogCount = this.passengerLogCount - 1;
            }
            if (type == 'customer') {
                this.customerArray.pop();
                this.customerLogCount = this.customerLogCount + 1;
            }
            for (var i = 0; i < this.logs.length; i++) {
                if (this.logs[i].log.indexOf("Email was sent to " + name + " (" + type + ")") != -1) {
                    this.logs.splice(i, 1);
                }
            }
        }
    };
    SendconfirmationComponent.prototype.send = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        if (this.customEmail != '') {
            if (this.customEmail.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/)) {
                var i = this.passengerArray.findIndex(function (x) { return x === _this.customEmail; });
                this.passengerArray.push(this.customEmail);
            }
            else {
                this.snackBar.open("Please Enter a valid email address", "X", { duration: 3000 });
            }
        }
        if (this.customNumber != '') {
            if (this.customNumber.match(/\b([789]\d{9}$)\b/)) {
                var i = this.smsArray.findIndex(function (x) { return x === _this.customNumber; });
                var j = this.whatsAppArray.findIndex(function (x) { return x === _this.customNumber; });
                // this.smsArray.splice(i,1);
                // this.whatsAppArray.splice(j,1);
            }
            else {
                this.snackBar.open("Please Enter a valid phone number", "X", { duration: 3000 });
            }
        }
        if (this.smsArray.length > 0) {
            this.callService.sendSMS({ number: this.smsArray, message: this.message }).subscribe();
        }
        if (this.whatsAppArray.length > 0) {
            this.callService.sendWhatsApp({ number: this.whatsAppArray, message: this.whatsappMessage }).subscribe();
        }
        if (this.bookedByArray.length > 0) {
            if (this.businessSettings.CCAllAllotmentEmails) {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.bookedByArray,
                    cc: this.businessSettings.AutoCCEmail,
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.duty.startDate).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.duty.id
                };
            }
            else {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.bookedByArray,
                    cc: '',
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.duty.startDate).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.duty.id
                };
            }
            this.http.post('/Voip/sendMailBookingConfirm', temp, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
            });
        }
        if (this.passengerArray.length > 0) {
            if (this.businessSettings.CCAllAllotmentEmails) {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.passengerArray,
                    cc: this.businessSettings.AutoCCEmail,
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.duty.startDate).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.duty.id
                };
            }
            else {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.passengerArray,
                    cc: '',
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.duty.startDate).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.duty.id
                };
            }
            this.http.post('/Voip/sendMailBookingConfirm', temp, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
            });
        }
        if (this.customerArray.length > 0) {
            if (this.businessSettings.CCAllAllotmentEmails) {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.customerArray,
                    cc: this.businessSettings.AutoCCEmail,
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.duty.startDate).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.duty.id
                };
            }
            else {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.customerArray,
                    cc: '',
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.duty.startDate).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.duty.id
                };
            }
            this.http.post('/Voip/sendMailBookingConfirm', temp, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
            });
        }
        var count = {
            sms: this.smsArray.length,
            whatsApp: this.whatsAppArray.length,
            email: this.bookedByArray.length + this.passengerArray.length + this.customerArray.length,
            date: __WEBPACK_IMPORTED_MODULE_7_moment__().format("YYYY-MM-DD"),
            ownerId: this.user.ownerId
        };
        this.callService.insertCount(count).subscribe(function (data) {
            console.log(data);
        });
        this.insertLog();
    };
    SendconfirmationComponent.prototype.insertLog = function () {
        var _this = this;
        this.logs.forEach(function (element) {
            _this.callService.insertBookingLogs(element).subscribe(function (data) {
                console.log(data);
            });
        });
    };
    SendconfirmationComponent.prototype.checkNumber = function (data) {
        try {
            var notify = JSON.parse(data.notification.body);
            return notify.number;
        }
        catch (e) {
            return 0;
        }
    };
    SendconfirmationComponent.prototype.addAttachments = function (event, key) {
        console.log(this.addedAttachments);
        if (event.checked) {
            this.addedAttachments.push(key);
        }
        else {
            var i = this.addedAttachments.findIndex(function (x) { return x === key; });
            this.addedAttachments.splice(i, 1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dutyPassengerTemplate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SendconfirmationComponent.prototype, "dutyPassengerTemplate", void 0);
    SendconfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sendconfirmation',
            template: __webpack_require__("./src/app/pages/operations/sendconfirmation/sendconfirmation.component.html"),
            styles: [__webpack_require__("./src/app/pages/operations/sendconfirmation/sendconfirmation.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__circles_companyprofile_companyprofile_service__["a" /* CompanyprofileService */],
            __WEBPACK_IMPORTED_MODULE_5__duties_call_call_service__["a" /* CallService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_6__messaging_service__["a" /* MessagingService */],
            __WEBPACK_IMPORTED_MODULE_8__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_9__fileupload_service__["a" /* FileuploadService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_11__bookings_service__["a" /* BookingsService */]])
    ], SendconfirmationComponent);
    return SendconfirmationComponent;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map