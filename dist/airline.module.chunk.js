webpackJsonp(["airline.module"],{

/***/ "./src/app/pages/airline/addvisa/addvisa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Add Visa\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"container\">\n          <div class=\"row ptb-10\">\n            <div class=\"col-lg-8 col-12\">\n              Customer Name:\n              <mat-form-field class=\"w-100\">\n                <!-- <input aria-placeholder=\"Pick one\" (change)=\"setCustomer(option)\" name=\"cname\" [(ngModel)]=\"bookings.cname\" matInput [matAutocomplete]=\"custauto\"> -->\n                <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput [matAutocomplete]=\"custauto\" >\n                <mat-autocomplete #custauto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of customer |async\" [value]=\"option.name\" (onSelectionChange)=\"setCustomer(option,$event)\">\n                    {{ option.name }}\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row ptb-10\">\n            <div class=\"col-lg-4 col-12\">\n              <mat-form-field>\n                <br>\n                <input aplaceholder=\"Booked By\"  name=\"cname\" [formControl]=\"bookByCtrl\" matInput [matAutocomplete]=\"bookByAuto\" placeholder=\"Name (Booked By)\">\n                <mat-autocomplete #bookByAuto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of bookBy |async\" [value]=\"option.name\" (onSelectionChange)=\"setBookBy(option,$event)\">\n                    {{ option.name }}\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 col-12\">\n              <mat-form-field>\n                <br>\n                <input  matInput #bookedPhoneNumber   [(ngModel)]=\"visaDetails.bookByNo\" name=\"bookByNo\" placeholder=\"Phone No (Booked By)\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 col-12\">\n              <mat-form-field>\n                <br>\n                <input matInput #bookedEmail  name=\"bookByEmail\" [(ngModel)]=\"visaDetails.bookByEmail\" placeholder=\"Email Id (Booked By)\">\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card>\n      <nb-card-header>VISA Details</nb-card-header>\n      <nb-card-body>\n        <div class=\"row ptb-10\">\n          <div class=\"col-lg-3 col-12\">\n            <mat-form-field>\n              Location\n              <input matInput [(ngModel)]=\"visaDetails.location\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-3 col-12\">\n            <mat-form-field>\n              VISA Type\n              <input matInput [(ngModel)]=\"visaDetails.visaType\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-3 col-12\">\n            <mat-form-field class=\"w-100\">\n              From\n              <input matInput [matDatepicker]=\"fromDate\" [(ngModel)]=\"visaDetails.from\">\n              <mat-datepicker-toggle matSuffix [for]=\"fromDate\"></mat-datepicker-toggle>\n              <mat-datepicker #fromDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-3 col-12\">\n            <mat-form-field class=\"w-100\">\n              To\n              <input matInput [matDatepicker]=\"toDate\" [(ngModel)]=\"visaDetails.to\">\n              <mat-datepicker-toggle matSuffix [for]=\"toDate\"></mat-datepicker-toggle>\n              <mat-datepicker #toDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card>\n      <nb-card-header>Travellers</nb-card-header>\n      <nb-card-body>\n        <form [formGroup]=\"myForm\" class=\"w-100\">\n          <div formArrayName=\"rows\">\n            <div *ngFor=\"let aRow of travellerForms.controls; let i=index\" [formGroupName]=\"i\">\n              <div class=\"row\">\n                <div class=\"col-lg-1 col-2\">\n                  <br>\n                  {{i+1}}\n                </div>\n                <div class=\"col-lg-2 col-10\">\n                  <mat-form-field class=\"w-100\">\n                    Name\n                    <input matInput formControlName=\"name\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-2 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    <br>\n                    <mat-select formControlName=\"gender\" placeholder=\"Gender\">\n                      <mat-option value=\"Male\">Male</mat-option>\n                      <mat-option value=\"Female\">Female</mat-option>\n                      <mat-option value=\"Others\">Others</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-2 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    Phone No.\n                    <input matInput formControlName=\"phone\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-2 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    Email\n                    <input matInput formControlName=\"email\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-3 col-2\">\n                  <br>\n                  <button mat-icon-button color=\"primary\" *ngIf=\"i>0\" (click)=\"deleteRow(i, aRow)\"> <mat-icon>clear</mat-icon></button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-1 col-12\"></div>\n                <div class=\"col-lg-2 col-12\">\n                  <br>\n                  <mat-form-field class=\"w-100\">\n                    <input matInput placeholder=\"Date of Birth\" formControlName=\"dob\" [matDatepicker]=\"dateOfBirth\" >\n                    <mat-datepicker-toggle matSuffix [for]=\"dateOfBirth\"></mat-datepicker-toggle>\n                    <mat-datepicker #dateOfBirth></mat-datepicker>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-2 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    Passport No.\n                    <input matInput formControlName=\"passportNo\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-2 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    Issuing Country\n                    <input matInput formControlName=\"issuingCountry\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-2 col-12\">\n                  <b>Upload Passport Photo</b>\n                  <br>\n                  <button *ngIf=\"imgUrl[i]==''\" mat-raised-button color=\"primary\" (click)=\"passportPhoto.click()\"> <mat-icon>cloud_upload</mat-icon>Browse</button>\n                  <button *ngIf=\"imgUrl[i]!=''\" mat-raised-button color=\"warn\" (click)=\"removePhoto(aRow, i)\"><mat-icon>highlight_off</mat-icon>Remove</button><br>\n                  <input type=\"file\" #passportPhoto name=\"passportPhoto\" hidden (change)=\"selectFile($event,i)\">\n                </div>\n                <div class=\"col-lg-3 col-12\">\n                  <img alt=\"\" *ngIf=\"imgUrl[i]!='' && imgUrl[i].includes('data:image')\" [src]=\"imgUrl[i]\" width=\"125px\" height=\"150px\"/>\n                  <p style=\"margin: 2rem;\" *ngIf=\"!imgUrl[i].includes('data:image')\">{{imgName[i]}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"row pb-10\">\n          <div class=\"col-lg-12 col-12\">\n            <button mat-raised-button color=\"primary\" (click)=\"addRow()\" style=\"float:right; margin: 5px;\">Add More Guests</button>\n          </div>\n        </div>\n        <div class=\"row ptb-10\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field>\n              Visa Cost\n              <input matInput [(ngModel)]=\"visaDetails.visaCost\">\n            </mat-form-field>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <button color=\"primary\" *ngIf=\"!editState\" mat-raised-button (click)=\"saveVisa()\">Save</button>\n    <button color=\"primary\" *ngIf=\"editState\" mat-raised-button (click)=\"updateVisa()\">Update</button>\n    <button color=\"warn\" mat-raised-button (click)=\"closeDialog()\">Close</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/airline/addvisa/addvisa.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-icon-button .mat-icon, .mat-icon-button i {\n  line-height: 0rem !important; }\n\n.material-icons {\n  line-height: 1.3 !important; }\n"

/***/ }),

/***/ "./src/app/pages/airline/addvisa/addvisa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddvisaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__operations_bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__visa_visa_service__ = __webpack_require__("./src/app/pages/airline/visa/visa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__masters_new_employees_employee_service__ = __webpack_require__("./src/app/pages/masters/new-employees/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__activitylog_service__ = __webpack_require__("./src/app/activitylog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
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














var AddvisaComponent = (function () {
    function AddvisaComponent(auth, snackbar, fb, customerService, dialog, bookingService, visaService, data, employeeService, activityLogs, uploadService, _sanitizer, http) {
        this.auth = auth;
        this.snackbar = snackbar;
        this.fb = fb;
        this.customerService = customerService;
        this.dialog = dialog;
        this.bookingService = bookingService;
        this.visaService = visaService;
        this.data = data;
        this.employeeService = employeeService;
        this.activityLogs = activityLogs;
        this.uploadService = uploadService;
        this._sanitizer = _sanitizer;
        this.http = http;
        this.bookByCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.user = {};
        this.deletedTraveller = [];
        this.deletedGuest = [];
        this.editState = false;
        this.imgUrl = [];
        this.previousImgUrl = [];
        this.img = [];
        this.imgName = [];
        this.visaDetails = {
            cname: '',
            customerId: '',
            bookBy: '',
            bookByNo: '',
            bookByEmail: '',
            location: '',
            visaType: '',
            from: '',
            to: '',
            visaCost: '',
            ownerId: '',
            status: '',
        };
    }
    AddvisaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.visaDetails.ownerId = _this.user.ownerId;
            if (_this.user.type == 'employee') {
                var body = {
                    userId: _this.user.id
                };
                _this.employeeService.getEmployeeForCustomer(body).subscribe(function (data) {
                    _this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(function (data) {
                        if (data.length != 0) {
                            _this.customers = data;
                            _this.customer = _this.customerCtrl.valueChanges
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
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
        });
        this.myForm = this.fb.group({
            rows: this.fb.array([])
        });
        if (this.data.row != null) {
            this.editState = true;
            console.log(this.data.row);
            this.visaDetails = this.data.row;
            this.customerCtrl.setValue(this.visaDetails.cname);
            this.bookByCtrl.setValue(this.visaDetails.bookBy);
            this.visaService.getVisaTravellers(this.visaDetails).subscribe(function (data) {
                console.log(data);
                if (data.length == 0) {
                    _this.addRow();
                }
                var index = 0;
                data.forEach(function (element) {
                    console.log(element);
                    var row = _this.fb.group({
                        id: element.id,
                        name: element.name,
                        dob: element.dob,
                        gender: element.gender,
                        phone: element.phone,
                        email: element.email,
                        passportNo: element.passportNo,
                        issuingCountry: element.issuingCountry,
                        photo: element.photo,
                    });
                    if (element.photo != '' && element.photo != null) {
                        console.log(element.photo);
                        _this.uploadService.getFile(_this.user.companyName, 'passportPhotos', element.photo).subscribe(function (data) {
                            console.log(data);
                            if (data.text().includes("PDF")) {
                                console.log(row);
                                _this.imgUrl[index] = _this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf' + data.text());
                                _this.imgName[index] = element.photo;
                                _this.previousImgUrl[index] = _this.imgUrl[index].changingThisBreaksApplicationSecurity;
                                _this.imgUrl[index] = _this.previousImgUrl[index];
                                _this.travellerForms.push(row);
                            }
                            else {
                                console.log(row);
                                _this.imgUrl[index] = _this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text());
                                _this.previousImgUrl[index] = _this.imgUrl[index].changingThisBreaksApplicationSecurity;
                                _this.imgUrl[index] = _this.previousImgUrl[index];
                                console.log(_this.imgUrl);
                                index = index + 1;
                                _this.travellerForms.push(row);
                            }
                        });
                    }
                    else {
                        console.log(row);
                        _this.imgUrl[index] = '';
                        _this.travellerForms.push(row);
                        index = index + 1;
                    }
                });
            });
        }
        else {
            this.addRow();
        }
    };
    AddvisaComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers(this.user).subscribe(function (data) {
            _this.customers = data;
            _this.customer = _this.customerCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
        });
    };
    AddvisaComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddvisaComponent.prototype.filterBookBy = function (val) {
        return this.bookByArr.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    Object.defineProperty(AddvisaComponent.prototype, "travellerForms", {
        get: function () {
            return this.myForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    AddvisaComponent.prototype.addRow = function () {
        var row = this.fb.group({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            dob: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            passportNo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            issuingCountry: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            photo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
        });
        this.travellerForms.push(row);
        this.imgUrl.push('');
    };
    AddvisaComponent.prototype.deleteRow = function (i, aRow) {
        console.log(aRow.value);
        var temp = this.myForm.get('rows');
        // this.deletedTraveller.push(temp.value[i].id)
        if (aRow.value.id) {
            this.deletedGuest.push(aRow.value);
            console.log(this.deletedGuest);
        }
        this.travellerForms.removeAt(i);
        this.imgUrl.splice(i);
    };
    AddvisaComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    AddvisaComponent.prototype.setCustomer = function (temp, event) {
        var _this = this;
        if (event.source.selected == true) {
            this.visaDetails.cname = temp.name;
            this.visaDetails.customerId = temp.id;
            var tempCust = {
                ownerId: this.user.ownerId,
                customerId: temp.id
            };
            this.bookingService.getRecurringBookedBy(tempCust).subscribe(function (data) {
                _this.bookByArr = data;
                _this.bookBy = _this.bookByCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterBookBy(val); }));
            });
        }
    };
    AddvisaComponent.prototype.setBookBy = function (temp, event) {
        if (event.source.selected == true) {
            this.visaDetails.bookBy = temp.name;
        }
    };
    AddvisaComponent.prototype.selectFile = function (event, i) {
        var _this = this;
        this.selectedFiles = event.target.files;
        this.img[i] = event.target.files[0];
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) { return _this.imgUrl[i] = reader.result; };
        this.imgName[i] = this.img[i].name;
        reader.readAsDataURL(file);
    };
    AddvisaComponent.prototype.upload = function (filename, i) {
        return __awaiter(this, void 0, void 0, function () {
            var uploadData, headers, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uploadData = new FormData();
                        uploadData.append(this.user.companyName + "/" + "passportPhotos/" + filename, this.img[i], 'passportImage');
                        headers = new Headers();
                        headers.append('Content-Type', 'multipart/form-data');
                        headers.append('Accept', 'application/json');
                        body = JSON.stringify({ headers: headers });
                        return [4 /*yield*/, this.http.post("/files/uploadS3", uploadData, body).map(function (res) { return res.json(); }).subscribe(function (data) {
                                if (data.success) {
                                    // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddvisaComponent.prototype.removePhoto = function (element, i) {
        this.imgUrl[i] = '';
        this.previousImgUrl[i] = '';
        element.photo = '';
    };
    AddvisaComponent.prototype.saveVisa = function () {
        var _this = this;
        this.visaDetails.from = __WEBPACK_IMPORTED_MODULE_8_moment__(this.visaDetails.from).format("YYYY-MM-DD");
        this.visaDetails.to = __WEBPACK_IMPORTED_MODULE_8_moment__(this.visaDetails.to).format("YYYY-MM-DD");
        this.visaDetails.bookBy = this.bookByCtrl.value;
        this.visaDetails.status = 'Booked';
        this.visaService.addVisa(this.visaDetails).subscribe(function (data) {
            _this.visaId = data.insertId;
            var i = 0;
            _this.travellerForms.value.forEach(function (element) {
                element.visaId = _this.visaId;
                element.dob = __WEBPACK_IMPORTED_MODULE_8_moment__(element.dob).format("YYYY-MM-DD");
                var type = _this.img[i].type.split("/");
                element.photo = _this.visaId + "_" + element.name + "_" + "_passportPhoto." + type[1];
                _this.visaService.addTraveller(element).subscribe(function (data) {
                    _this.upload(element.photo, i);
                }, function (err) { }, function () {
                    i++;
                });
            });
            _this.activityLogs.addVisaLogs({
                visaId: data.insertId,
                ownerId: _this.user.ownerId,
                message: "Booking created on " + __WEBPACK_IMPORTED_MODULE_8_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + _this.user.name
            }).subscribe();
        }, function (err) {
        }, function () {
            _this.ws.send(_this.user.ownerId + "visa");
            _this.snackbar.open("Saved", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    AddvisaComponent.prototype.updateVisa = function () {
        var _this = this;
        this.visaDetails.from = __WEBPACK_IMPORTED_MODULE_8_moment__(this.visaDetails.from).format("YYYY-MM-DD");
        this.visaDetails.to = __WEBPACK_IMPORTED_MODULE_8_moment__(this.visaDetails.to).format("YYYY-MM-DD");
        this.visaDetails.bookBy = this.bookByCtrl.value;
        this.visaDetails.status = 'Booked';
        this.visaService.updateVisa(this.visaDetails).subscribe(function (data) {
            _this.visaId = _this.visaDetails.id;
            var i = 0;
            _this.travellerForms.value.forEach(function (element) {
                element.visaId = _this.visaId;
                element.dob = __WEBPACK_IMPORTED_MODULE_8_moment__(element.dob).format("YYYY-MM-DD");
                if (element.id != '' || element.id != null || element.id != undefined) {
                    if (_this.img[i]) {
                        var type = _this.img[i].type.split("/");
                        element.photo = _this.visaId + "_" + element.name + "_" + "_passportPhoto." + type[1];
                        _this.visaService.updateTraveller(element).subscribe(function (data) {
                            if (_this.previousImgUrl[i] != _this.imgUrl[i]) {
                                _this.upload(element.photo, i);
                                i++;
                            }
                        });
                    }
                    else {
                        _this.visaService.updateTraveller(element).subscribe();
                    }
                }
                else {
                    var type = _this.img[i].type.split("/");
                    element.photo = _this.visaId + "_" + element.name + "_" + "_passportPhoto." + type[1];
                    _this.visaService.addTraveller(element).subscribe(function (data) {
                        _this.upload(element.photo, i);
                    }, function (err) { }, function () {
                        i++;
                    });
                }
            });
            _this.deletedGuest.forEach(function (element) {
                _this.visaService.deleteVisaTraveller(element).subscribe();
            });
        }, function (err) {
        }, function () {
            _this.ws.send(_this.user.ownerId + "visa");
            _this.snackbar.open("Updated", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    AddvisaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addvisa',
            template: __webpack_require__("./src/app/pages/airline/addvisa/addvisa.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/addvisa/addvisa.component.scss")]
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__operations_bookings_service__["a" /* BookingsService */],
            __WEBPACK_IMPORTED_MODULE_7__visa_visa_service__["a" /* VisaService */], Object, __WEBPACK_IMPORTED_MODULE_9__masters_new_employees_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_10__activitylog_service__["a" /* ActivitylogService */],
            __WEBPACK_IMPORTED_MODULE_11__fileupload_service__["a" /* FileuploadService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* Http */]])
    ], AddvisaComponent);
    return AddvisaComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/airline-advancepayment/airline-advancepayment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Airline Advance Payment\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            Booking ID #{{bookingId}}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Amount\n              <input matInput [(ngModel)]=\"advancePayment.amount\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            Payment Mode\n            <br><br>\n            <mat-radio-group [(ngModel)]=\"advancePayment.paymentMode\" (change)=\"checkPaymentMode(advancePayment.paymentMode)\">\n              <mat-radio-button value=\"Credit Card\">Credit Card</mat-radio-button>\n              <mat-radio-button value=\"Cheque\">Cheque</mat-radio-button>\n              <mat-radio-button value=\"NEFT\">NEFT</mat-radio-button>\n              <mat-radio-button value=\"Cash\">Cash</mat-radio-button>\n              <mat-radio-button value=\"Others\">Others</mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"cheque\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Cheque Number\n              <input matInput [(ngModel)]=\"advancePayment.chequeNumber\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              Bank Name\n              <input matInput [(ngModel)]=\"advancePayment.bankName\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              Cheque Date\n              <input matInput [(ngModel)]=\"advancePayment.chequeDate\" [matDatepicker]=\"chequeDate\" (click)=\"chequeDate.open()\">\n              <mat-datepicker-toggle matSuffix [for]=\"chequeDate\"></mat-datepicker-toggle>\n              <mat-datepicker #chequeDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"neft\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Transaction Number\n              <input matInput [(ngModel)]=\"advancePayment.transactionNumber\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Bank Name\n              <input matInput [(ngModel)]=\"advancePayment.neftBankName\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field class=\"w-100\">\n              Received in Bank              \n              <input matInput [formControl]=\"receivedInBankCtrl\"  [matAutocomplete]=\"autoRIB\">\n              <mat-autocomplete #autoRIB=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of bankAccount | async\" [value]=\"option.bankName\" (onSelectionChange)=\"setReceivedInBank(option,$event)\">\n                      {{ option.bankName }} ({{option.number}})\n                  </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Bank Credit Date\n              <input matInput [(ngModel)]=\"advancePayment.bankCreditDate\" [matDatepicker]=\"bankCreditDate\" (click)=\"bankCreditDate.open()\">\n              <mat-datepicker-toggle matSuffix [for]=\"bankCreditDate\"></mat-datepicker-toggle>\n              <mat-datepicker #bankCreditDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n      </nb-card-body>  \n    </nb-card>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12\">\n    <button mat-raised-button color=\"primary\" (click)=\"saveAdvancePayment()\">Save</button>\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>  "

/***/ }),

/***/ "./src/app/pages/airline/airline-advancepayment/airline-advancepayment.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/airline-advancepayment/airline-advancepayment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirlineAdvancepaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operations_advancepayment_advancepayment_service__ = __webpack_require__("./src/app/pages/operations/advancepayment/advancepayment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operations_new_bank_account_bank_account_service__ = __webpack_require__("./src/app/pages/operations/new-bank-account/bank-account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
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








var AirlineAdvancepaymentComponent = (function () {
    function AirlineAdvancepaymentComponent(dialog, data, advancepaymentService, auth, bankAccountService, snackBar) {
        this.dialog = dialog;
        this.data = data;
        this.advancepaymentService = advancepaymentService;
        this.auth = auth;
        this.bankAccountService = bankAccountService;
        this.snackBar = snackBar;
        this.user = {};
        this.advancePayment = {};
        this.cheque = false;
        this.neft = false;
        this.receivedInBankCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        if (this.data != null) {
            this.bookingId = data.id;
        }
    }
    AirlineAdvancepaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.bankAccountService.getBankAccount(_this.user).subscribe(function (data) {
                _this.bankAccounts = data;
                _this.bankAccount = _this.receivedInBankCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterBankAccounts(val); }));
            });
        });
    };
    AirlineAdvancepaymentComponent.prototype.checkPaymentMode = function (temp) {
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
    AirlineAdvancepaymentComponent.prototype.setReceivedInBank = function (option, event) {
        if (event.source.selected == true) {
            // console.log(option);
            this.advancePayment.receivedInBank = option.id;
        }
    };
    AirlineAdvancepaymentComponent.prototype.saveAdvancePayment = function () {
        var _this = this;
        this.advancePayment.flightBookingId = this.bookingId;
        this.advancepaymentService.addFlightAdvancePayment(this.advancePayment).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Advance Payment Added", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    AirlineAdvancepaymentComponent.prototype.filterBankAccounts = function (val) {
        return this.bankAccounts.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AirlineAdvancepaymentComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    AirlineAdvancepaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'airline-advancepayment',
            template: __webpack_require__("./src/app/pages/airline/airline-advancepayment/airline-advancepayment.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/airline-advancepayment/airline-advancepayment.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */], Object, __WEBPACK_IMPORTED_MODULE_3__operations_advancepayment_advancepayment_service__["a" /* AdvancepaymentService */],
            __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__operations_new_bank_account_bank_account_service__["a" /* BankAccountService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSnackBar */]])
    ], AirlineAdvancepaymentComponent);
    return AirlineAdvancepaymentComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/airline-files/airline-files.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\">\n\n  <div formArrayName=\"files\">\n\n      <div *ngFor=\"let files of fileForms.controls; let i=index\" [formGroupName]=\"i\">\n\n\n          <mat-form-field class=\"xs\" style=\"padding-right: 20px\">\n              <input matInput placeholder=\"Name\" formControlName=\"name\">\n          </mat-form-field>\n\n          <button (click)=\"bookingImages.click()\" mat-flat-button matTooltip=\"Upload\">Browse</button>\n          <input hidden type=\"file\" formControlName=\"images\" #bookingImages (change)=\"imageSelect($event,i)\">\n          <i *ngIf=\"selectedFiles[i]!=undefined\" style=\"font-size: 11px;\">{{selectedFiles[i].name}}</i>\n\n          <button mat-icon-button color=\"warn\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon></button>\n\n      </div>\n\n  </div>\n\n  <button mat-raised-button color=\"primary\" (click)=\"addRow()\">Add File</button>\n\n  <button mat-raised-button color=\"primary\" (click)=\"uploadFinal()\">Upload</button>\n\n</form>"

/***/ }),

/***/ "./src/app/pages/airline/airline-files/airline-files.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/airline-files/airline-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirlineFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__airlinedisp_airline_service__ = __webpack_require__("./src/app/pages/airline/airlinedisp/airline.service.ts");
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







var AirlineFilesComponent = (function () {
    function AirlineFilesComponent(fb, uploadService, data, airlineService, http, auth, snackBar) {
        this.fb = fb;
        this.uploadService = uploadService;
        this.data = data;
        this.airlineService = airlineService;
        this.http = http;
        this.auth = auth;
        this.snackBar = snackBar;
        this.imgUrl = [];
        this.selectedFiles = [];
        this.booking = {};
        this.user = {};
        this.booking = data;
    }
    AirlineFilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
        });
        this.myForm = this.fb.group({
            files: this.fb.array([])
        });
        this.addRow();
    };
    Object.defineProperty(AirlineFilesComponent.prototype, "fileForms", {
        get: function () {
            return this.myForm.get('files');
        },
        enumerable: true,
        configurable: true
    });
    AirlineFilesComponent.prototype.addRow = function () {
        var phone = this.fb.group({
            name: [],
            images: [],
            imageName: []
        });
        this.fileForms.push(phone);
    };
    AirlineFilesComponent.prototype.deleteRow = function (i) {
        this.fileForms.removeAt(i);
    };
    AirlineFilesComponent.prototype.imageSelect = function (event, i) {
        var file = event.target.files[0];
        this.selectedFiles[i] = file;
    };
    AirlineFilesComponent.prototype.uploadFinal = function () {
        var _this = this;
        var uploadData = new FormData();
        var headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var body = JSON.stringify({ headers: headers });
        var i = 0;
        this.fileForms.value.forEach(function (element) {
            var type = _this.selectedFiles[i].type.split("/");
            var imageName = _this.booking.id + "_" + element.name + "." + type[1];
            var tempArr = {
                bookingId: _this.booking.id,
                fileName: element.name,
                imageName: _this.booking.id + "_" + element.name + "." + type[1]
            };
            _this.airlineService.addAirlineFiles(tempArr).subscribe(function (data) { });
            if (_this.selectedFiles[i] != undefined)
                uploadData.append(_this.user.companyName + '/airlineFiles/' + _this.booking.id + "/" + imageName, _this.selectedFiles[i], 'airlineFiles');
            _this.http.post("/files/uploadS3", uploadData, body).map(function (res) { return res.json(); }).subscribe();
            i = i + 1;
        });
        this.snackBar.open("Files Uploaded", "X", { duration: 3000 });
    };
    AirlineFilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'airline-files',
            template: __webpack_require__("./src/app/pages/airline/airline-files/airline-files.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/airline-files/airline-files.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__fileupload_service__["a" /* FileuploadService */], Object, __WEBPACK_IMPORTED_MODULE_6__airlinedisp_airline_service__["a" /* AirlineService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSnackBar */]])
    ], AirlineFilesComponent);
    return AirlineFilesComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/airline-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirlineRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__airlinedisp_airlinedisp_component__ = __webpack_require__("./src/app/pages/airline/airlinedisp/airlinedisp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bookairline_bookairline_component__ = __webpack_require__("./src/app/pages/airline/bookairline/bookairline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visa_visa_component__ = __webpack_require__("./src/app/pages/airline/visa/visa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addvisa_addvisa_component__ = __webpack_require__("./src/app/pages/airline/addvisa/addvisa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_auth_guard__ = __webpack_require__("./src/app/core/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        children: [
            {
                path: 'airlinedisp',
                component: __WEBPACK_IMPORTED_MODULE_2__airlinedisp_airlinedisp_component__["a" /* AirlinedispComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_6__core_auth_guard__["a" /* AuthGuard */]],
                data: {
                    expectedRole: 'viewFlights'
                }
            },
            {
                path: 'bookairline',
                component: __WEBPACK_IMPORTED_MODULE_3__bookairline_bookairline_component__["a" /* BookairlineComponent */]
            },
            {
                path: 'visa',
                component: __WEBPACK_IMPORTED_MODULE_4__visa_visa_component__["a" /* VisaComponent */]
            },
            {
                path: 'addvisa',
                component: __WEBPACK_IMPORTED_MODULE_5__addvisa_addvisa_component__["a" /* AddvisaComponent */]
            }
        ]
    }];
var AirlineRoutingModule = (function () {
    function AirlineRoutingModule() {
    }
    AirlineRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AirlineRoutingModule);
    return AirlineRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/airline/airline.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineModule", function() { return AirlineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__airline_routing_module__ = __webpack_require__("./src/app/pages/airline/airline-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__airline_airline_component__ = __webpack_require__("./src/app/pages/airline/airline/airline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__airlinedisp_airlinedisp_component__ = __webpack_require__("./src/app/pages/airline/airlinedisp/airlinedisp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookairline_bookairline_component__ = __webpack_require__("./src/app/pages/airline/bookairline/bookairline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__airlinedisp_airline_service__ = __webpack_require__("./src/app/pages/airline/airlinedisp/airline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__visa_visa_component__ = __webpack_require__("./src/app/pages/airline/visa/visa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addvisa_addvisa_component__ = __webpack_require__("./src/app/pages/airline/addvisa/addvisa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__visa_visa_service__ = __webpack_require__("./src/app/pages/airline/visa/visa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__airline_advancepayment_airline_advancepayment_component__ = __webpack_require__("./src/app/pages/airline/airline-advancepayment/airline-advancepayment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__visa_advancepayment_visa_advancepayment_component__ = __webpack_require__("./src/app/pages/airline/visa-advancepayment/visa-advancepayment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__viewflightbooking_viewflightbooking_component__ = __webpack_require__("./src/app/pages/airline/viewflightbooking/viewflightbooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__viewvisabooking_viewvisabooking_component__ = __webpack_require__("./src/app/pages/airline/viewvisabooking/viewvisabooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sendairlineconfirmation_sendairlineconfirmation_component__ = __webpack_require__("./src/app/pages/airline/sendairlineconfirmation/sendairlineconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sendvisaconfirmation_sendvisaconfirmation_component__ = __webpack_require__("./src/app/pages/airline/sendvisaconfirmation/sendvisaconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_lightbox__ = __webpack_require__("./node_modules/ngx-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ngx_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__flightticket_flightticket_component__ = __webpack_require__("./src/app/pages/airline/flightticket/flightticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__viewflightticket_viewflightticket_component__ = __webpack_require__("./src/app/pages/airline/viewflightticket/viewflightticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_moment_adapter__ = __webpack_require__("./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__exportbookings_exportbookings_component__ = __webpack_require__("./src/app/pages/airline/exportbookings/exportbookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__exportvisa_exportvisa_component__ = __webpack_require__("./src/app/pages/airline/exportvisa/exportvisa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__airline_files_airline_files_component__ = __webpack_require__("./src/app/pages/airline/airline-files/airline-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__visa_files_visa_files_component__ = __webpack_require__("./src/app/pages/airline/visa-files/visa-files.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AirlineModule = (function () {
    function AirlineModule() {
    }
    AirlineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__airline_routing_module__["a" /* AirlineRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["F" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["z" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["P" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["B" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["L" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["y" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["E" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["S" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["x" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["C" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["Q" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["D" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_19_ngx_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatDividerModule */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__airline_advancepayment_airline_advancepayment_component__["a" /* AirlineAdvancepaymentComponent */], __WEBPACK_IMPORTED_MODULE_14__visa_advancepayment_visa_advancepayment_component__["a" /* VisaAdvancepaymentComponent */], __WEBPACK_IMPORTED_MODULE_15__viewflightbooking_viewflightbooking_component__["a" /* ViewflightbookingComponent */], __WEBPACK_IMPORTED_MODULE_16__viewvisabooking_viewvisabooking_component__["a" /* ViewvisabookingComponent */], __WEBPACK_IMPORTED_MODULE_17__sendairlineconfirmation_sendairlineconfirmation_component__["a" /* SendairlineconfirmationComponent */], __WEBPACK_IMPORTED_MODULE_18__sendvisaconfirmation_sendvisaconfirmation_component__["a" /* SendvisaconfirmationComponent */], __WEBPACK_IMPORTED_MODULE_20__flightticket_flightticket_component__["a" /* FlightticketComponent */], __WEBPACK_IMPORTED_MODULE_23__exportbookings_exportbookings_component__["a" /* ExportbookingsComponent */], __WEBPACK_IMPORTED_MODULE_24__exportvisa_exportvisa_component__["a" /* ExportvisaComponent */], __WEBPACK_IMPORTED_MODULE_26__visa_files_visa_files_component__["a" /* VisaFilesComponent */], __WEBPACK_IMPORTED_MODULE_25__airline_files_airline_files_component__["a" /* AirlineFilesComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__airline_airline_component__["a" /* AirlineComponent */], __WEBPACK_IMPORTED_MODULE_4__airlinedisp_airlinedisp_component__["a" /* AirlinedispComponent */], __WEBPACK_IMPORTED_MODULE_5__bookairline_bookairline_component__["a" /* BookairlineComponent */], __WEBPACK_IMPORTED_MODULE_10__visa_visa_component__["a" /* VisaComponent */], __WEBPACK_IMPORTED_MODULE_11__addvisa_addvisa_component__["a" /* AddvisaComponent */], __WEBPACK_IMPORTED_MODULE_13__airline_advancepayment_airline_advancepayment_component__["a" /* AirlineAdvancepaymentComponent */], __WEBPACK_IMPORTED_MODULE_14__visa_advancepayment_visa_advancepayment_component__["a" /* VisaAdvancepaymentComponent */], __WEBPACK_IMPORTED_MODULE_15__viewflightbooking_viewflightbooking_component__["a" /* ViewflightbookingComponent */], __WEBPACK_IMPORTED_MODULE_16__viewvisabooking_viewvisabooking_component__["a" /* ViewvisabookingComponent */], __WEBPACK_IMPORTED_MODULE_17__sendairlineconfirmation_sendairlineconfirmation_component__["a" /* SendairlineconfirmationComponent */], __WEBPACK_IMPORTED_MODULE_18__sendvisaconfirmation_sendvisaconfirmation_component__["a" /* SendvisaconfirmationComponent */], __WEBPACK_IMPORTED_MODULE_20__flightticket_flightticket_component__["a" /* FlightticketComponent */], __WEBPACK_IMPORTED_MODULE_21__viewflightticket_viewflightticket_component__["a" /* ViewflightticketComponent */], __WEBPACK_IMPORTED_MODULE_23__exportbookings_exportbookings_component__["a" /* ExportbookingsComponent */], __WEBPACK_IMPORTED_MODULE_24__exportvisa_exportvisa_component__["a" /* ExportvisaComponent */], __WEBPACK_IMPORTED_MODULE_25__airline_files_airline_files_component__["a" /* AirlineFilesComponent */], __WEBPACK_IMPORTED_MODULE_26__visa_files_visa_files_component__["a" /* VisaFilesComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__airlinedisp_airline_service__["a" /* AirlineService */],
                __WEBPACK_IMPORTED_MODULE_12__visa_visa_service__["a" /* VisaService */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_22__angular_material_moment_adapter__["a" /* MomentDateAdapter */], deps: [__WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: {
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
            ]
        })
    ], AirlineModule);
    return AirlineModule;
}());



/***/ }),

/***/ "./src/app/pages/airline/airline/airline.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/airline/airline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirlineComponent; });
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

var AirlineComponent = (function () {
    function AirlineComponent() {
    }
    AirlineComponent.prototype.ngOnInit = function () {
    };
    AirlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'airline',
            styles: [__webpack_require__("./src/app/pages/airline/airline/airline.component.scss")],
            template: "\n    <router-outlet></router-outlet>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], AirlineComponent);
    return AirlineComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/airlinedisp/airlinedisp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Airline\n        <div style=\"display:inline; padding-left: 5%;\" *ngIf=\"screenWidth>=560\">\n          <button class=\"booked\" [disabled]=\"filterClicked=='Booked'\" mat-button (click)=\"filter('Booked');\">Booked</button>          \n          <button class=\"cancelled\" [disabled]=\"filterClicked=='Cancelled'\" mat-button color=\"warn\" (click)=\"filter('Cancelled')\">Cancelled</button>\n          <button class=\"completed\" [disabled]=\"filterClicked=='Completed'\" mat-button (click)=\"filter('Completed')\">Completed</button>\n          <button class=\"billed\" [disabled]=\"filterClicked=='Invoiced'\" mat-button (click)=\"filter('Invoiced')\">Invoiced</button>\n          <button class=\"all\" [disabled]=\"filterClicked=='All'\" mat-button (click)=\"filter('All')\">All</button>\n        </div>\n        <div style=\"display:inline; padding-left: 5%;\" *ngIf=\"screenWidth<=560\">\n          <mat-form-field class=\"mobile-select\">\n              <mat-select [value]=\"status\" (selectionChange)=\"filter($event.value)\">\n                <mat-option value=\"Booked\">Booked</mat-option>                                \n                <mat-option value=\"Cancelled\">Cancelled</mat-option>\n                <mat-option value=\"Completed\">Completed</mat-option>\n                <mat-option value=\"Invoiced\">Invoiced</mat-option>\n                <mat-option value='All'>All</mat-option>\n              </mat-select>\n          </mat-form-field>\n        </div>\n\n        <button style=\"float: right;margin-top: -10px;\" mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>settings</mat-icon></button>\n        <mat-menu #menu=\"matMenu\" class=\"mat-menu-panel\">\n            <!-- <button mat-menu-item (click)=\"openImport()\">Import</button> -->\n          <button mat-menu-item *ngIf=\"permission.exportDuty\" (click)=\"openExport()\">Export</button>\n        </mat-menu>\n      </nb-card-header>\n      <nb-card-body>\n        <div align=\"center\">\n          <mat-form-field class=\"filter-field\">\n            <input matInput   placeholder=\"Filter\" [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n          </mat-form-field>\n      \n          <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n          <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n        </div>\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container matColumnDef=\"customerName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Customer Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.customerName}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"guestName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Guest Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.guestMobile\"> {{element.guestName}} </mat-cell>\n          </ng-container>\n                    \n          <ng-container matColumnDef=\"from\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>From</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.from}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"to\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>To</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.to}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.departureDate}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <mat-chip-list>\n                <mat-chip color=\"primary\" selected=\"true\">{{element.status}}</mat-chip>\n              </mat-chip-list> \n            </mat-cell>            \n          </ng-container>\n        \n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"viewDetails(row)\">View Details</button>\n                <button mat-menu-item *ngIf=\"element.status == 'Complete'\" (click)=\"createInvoice(row)\">Create Invoice</button>\n                <button mat-menu-item *ngIf=\"element.status == 'Booked'\" (click)=\"advancePayment(row)\">Advance Payment</button>\n                <button mat-menu-item *ngIf=\"permission.manageFlights && element.status == 'Booked'\" (click)=\"selectRow(row)\">Edit</button>\n                <button mat-menu-item *ngIf=\"permission.manageFlights && element.status == 'Booked' && element.ticket==null\" (click)=\"uploadTicket(row)\">Upload Ticket</button>\n                <button mat-menu-item *ngIf=\"permission.manageFlights && element.status == 'Booked' && element.ticket!=null\" (click)=\"uploadTicket(row)\">Re-Upload Ticket</button>\n                <button mat-menu-item *ngIf=\"permission.manageFlights && element.status == 'Booked' && element.ticket!=null\" (click)=\"viewTicket(row,'ticket')\">View Ticket</button>\n                <button mat-menu-item *ngIf=\"permission.manageFlights && element.status == 'Booked' && element.returnTicket!=null\" (click)=\"viewTicket(row,'returnTicket')\">View Ticket</button>\n                <button mat-menu-item *ngIf=\"permission.manageFlights && element.status == 'Booked' && permission.smsEmailCallFlights\" (click)=\"sendConfirmation(row)\">Send Confirmation</button>\n                <button mat-menu-item (click)=\"uploadFiles(row)\">Upload/View Files</button>\n                <button mat-menu-item *ngIf=\"permission.manageFlights && element.status == 'Booked'\" (click)=\"completeBooking(row)\">Complete Booking</button>\n                <button mat-menu-item *ngIf=\"permission.manageFlights && element.status == 'Booked'\" (click)=\"cancelBooking(row)\">Cancel</button>\n                <!-- <button (click)=\"deleteFlight(row)\" *ngIf=\"permission.manageFlights\" mat-menu-item>Delete</button> -->\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n        \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row [ngStyle]=\"{'background-color':rowColors(row.departureDate,row.status)}\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        \n        </mat-table>\n        <div *ngIf=\"isLoading\" style=\"display: flex; justify-content: center; align-items: center\">\n          <mat-progress-spinner color=\"warn\" mode=\"indeterminate\"></mat-progress-spinner>\n       </div>\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-12\">\n    <a *ngIf=\"permission.addFlights\" (click)=\"selectRow(null)\" class=\"float\">\n      <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n    </a>      \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/airline/airlinedisp/airlinedisp.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-chip {\n  -webkit-transform: scale(0.85, 0.85);\n          transform: scale(0.85, 0.85); }\n\n.booked.mat-button[disabled] {\n  color: white !important;\n  background-color: #3f51b5 !important; }\n\n.booked.mat-button {\n  color: #3f51b5 !important; }\n\n.completed.mat-button[disabled] {\n  color: white !important;\n  background-color: #02b975 !important; }\n\n.completed.mat-button {\n  color: #02b975 !important; }\n\n.cancelled.mat-button[disabled] {\n  color: white !important;\n  background-color: #f44436 !important; }\n\n.billed.mat-button[disabled] {\n  color: white !important;\n  background-color: #b90064c4 !important; }\n\n.billed.mat-button {\n  color: #b90064c4 !important; }\n\n.all.mat-button[disabled] {\n  color: black !important;\n  background-color: darkgrey !important; }\n\n.all.mat-button {\n  color: darkgrey !important; }\n"

/***/ }),

/***/ "./src/app/pages/airline/airlinedisp/airlinedisp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirlinedispComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookairline_bookairline_component__ = __webpack_require__("./src/app/pages/airline/bookairline/bookairline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__airline_service__ = __webpack_require__("./src/app/pages/airline/airlinedisp/airline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_confirm_confirm_component__ = __webpack_require__("./src/app/pages/modals/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__operations_bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__airline_advancepayment_airline_advancepayment_component__ = __webpack_require__("./src/app/pages/airline/airline-advancepayment/airline-advancepayment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewflightbooking_viewflightbooking_component__ = __webpack_require__("./src/app/pages/airline/viewflightbooking/viewflightbooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sendairlineconfirmation_sendairlineconfirmation_component__ = __webpack_require__("./src/app/pages/airline/sendairlineconfirmation/sendairlineconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__flightticket_flightticket_component__ = __webpack_require__("./src/app/pages/airline/flightticket/flightticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__exportbookings_exportbookings_component__ = __webpack_require__("./src/app/pages/airline/exportbookings/exportbookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__airline_files_airline_files_component__ = __webpack_require__("./src/app/pages/airline/airline-files/airline-files.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AirlinedispComponent = (function () {
    function AirlinedispComponent(auth, dialog, router, airlineService, bookingsService, snackBar, uploadService) {
        this.auth = auth;
        this.dialog = dialog;
        this.router = router;
        this.airlineService = airlineService;
        this.bookingsService = bookingsService;
        this.snackBar = snackBar;
        this.uploadService = uploadService;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.user = {};
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.displayedColumns = ['customerName', 'guestName', 'from', 'to', 'date', 'status', 'Options'];
        this.permission = {};
        this.filterClicked = "Booked";
        this.isLoading = false;
    }
    AirlinedispComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        console.log(this.ws);
        this.ws.onmessage = function (event) {
            var _this = this;
            console.log(this.ws);
            if (event.data == this.user.ownerId + 'airline')
                var body = {
                    ownerId: this.user.ownerId,
                    status: 'Booked'
                };
            this.airlineService.getFlights(body).subscribe(function (data) {
                _this.tempArray = data;
                _this.dataSource.data = _this.tempArray;
                _this.length = data.length;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        }.bind(this);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
            });
            var body = {
                ownerId: _this.user.ownerId,
                status: 'Booked'
            };
            _this.airlineService.getFlights(body).subscribe(function (data) {
                console.log(data);
                _this.tempArray = data;
                _this.dataSource.data = _this.tempArray;
                _this.length = data.length;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        });
        this.today = __WEBPACK_IMPORTED_MODULE_9_moment__().format('YYYY-MM-DD');
    };
    AirlinedispComponent.prototype.openExport = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_14__exportbookings_exportbookings_component__["a" /* ExportbookingsComponent */], { autoFocus: false, disableClose: true });
    };
    AirlinedispComponent.prototype.selectRow = function (row) {
        var _this = this;
        console.log(row);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__bookairline_bookairline_component__["a" /* BookairlineComponent */], { data: { row: row }, autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data == undefined) {
                console.log('no');
            }
            else {
                console.log('yes');
                if (data.inserted == 'yes') {
                    _this.tempArray.push(data.data);
                    _this.dataSource.data = _this.tempArray;
                    console.log(data.data);
                }
            }
        });
    };
    AirlinedispComponent.prototype.viewDetails = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__viewflightbooking_viewflightbooking_component__["a" /* ViewflightbookingComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    AirlinedispComponent.prototype.uploadTicket = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__flightticket_flightticket_component__["a" /* FlightticketComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    AirlinedispComponent.prototype.completeBooking = function (row) {
        var _this = this;
        row.status = 'Completed';
        row.departureDate = __WEBPACK_IMPORTED_MODULE_9_moment__(row.departureDate).format("YYYY-MM-DD");
        if (row.arrivalDate != null) {
            row.arrivalDate = __WEBPACK_IMPORTED_MODULE_9_moment__(row.arrivalDate).format("YYYY-MM-DD");
        }
        console.log(row);
        this.airlineService.updateFlights(row).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Booking Complete", "X", { duration: 3000 });
        });
    };
    AirlinedispComponent.prototype.cancelBooking = function (row) {
        var _this = this;
        row.status = 'Cancelled';
        row.departureDate = __WEBPACK_IMPORTED_MODULE_9_moment__(row.departureDate).format("YYYY-MM-DD");
        if (row.arrivalDate != null) {
            row.arrivalDate = __WEBPACK_IMPORTED_MODULE_9_moment__(row.arrivalDate).format("YYYY-MM-DD");
        }
        console.log(row);
        this.airlineService.updateFlights(row).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Booking Cancelled", "X", { duration: 3000 });
        });
    };
    AirlinedispComponent.prototype.deleteFlight = function (row) {
        var _this = this;
        console.log("delete called");
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.airlineService.deleteFlights(row).subscribe(function (data) {
                    if (data.errno == undefined) {
                        var i = _this.tempArray.indexOf(row);
                        _this.tempArray.splice(i, 1);
                        _this.dataSource.data = _this.tempArray;
                    }
                    console.log("deleted");
                });
            }
            else {
                if (data.errno == 1451) {
                    window.alert("Cannot delete because you have corresponding data");
                }
                else {
                    window.alert("Error: Cannot be Deleted");
                }
            }
        });
    };
    AirlinedispComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AirlinedispComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.dataSource.filter = "";
    };
    AirlinedispComponent.prototype.createInvoice = function (row) {
        this.bookingData = row;
        this.bookingsService.setBookingId(this.bookingData);
        this.router.navigate(['/pages/masters/createflightinvoice']);
    };
    AirlinedispComponent.prototype.advancePayment = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__airline_advancepayment_airline_advancepayment_component__["a" /* AirlineAdvancepaymentComponent */], { autoFocus: false, disableClose: true, data: row });
    };
    AirlinedispComponent.prototype.filter = function (temp) {
        var _this = this;
        this.dataSource.data = [];
        this.isLoading = true;
        this.filterClicked = temp;
        console.log(temp);
        if (temp == 'All') {
            temp = '%%';
        }
        this.paginator._pageIndex = 0;
        var body = {
            ownerId: this.user.ownerId,
            status: temp
        };
        this.airlineService.getFlights(body).subscribe(function (data) {
            _this.tempArray = data;
            _this.dataSource.data = _this.tempArray;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.isLoading = false;
        });
    };
    AirlinedispComponent.prototype.rowColors = function (currDate, status) {
        if (currDate < this.today && status === 'Completed') {
            return '#CCFFE5';
        }
        else if (status === 'Cancelled') {
            return 'lightcoral';
        }
        else {
            return 'white';
        }
    };
    AirlinedispComponent.prototype.sendConfirmation = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__sendairlineconfirmation_sendairlineconfirmation_component__["a" /* SendairlineconfirmationComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    AirlinedispComponent.prototype.viewTicket = function (row, temp) {
        if (temp == 'ticket') {
            this.uploadService.getPresignedUrl(this.user.companyName, row.ticket, 'flightTickets').subscribe(function (data) {
                window.open(data._body, '_blank');
            });
        }
        if (temp == 'returnTicket') {
            this.uploadService.getPresignedUrl(this.user.companyName, row.returnTicket, 'flightTickets').subscribe(function (data) {
                window.open(data._body, '_blank');
            });
        }
    };
    AirlinedispComponent.prototype.uploadFiles = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_15__airline_files_airline_files_component__["a" /* AirlineFilesComponent */], { autoFocus: false, data: row });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], AirlinedispComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], AirlinedispComponent.prototype, "paginator", void 0);
    AirlinedispComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'airlinedisp',
            template: __webpack_require__("./src/app/pages/airline/airlinedisp/airlinedisp.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/airlinedisp/airlinedisp.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__airline_service__["a" /* AirlineService */],
            __WEBPACK_IMPORTED_MODULE_7__operations_bookings_service__["a" /* BookingsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_13__fileupload_service__["a" /* FileuploadService */]])
    ], AirlinedispComponent);
    return AirlinedispComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/bookairline/bookairline.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"bookFlight\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-12\">\n      <nb-card>\n        <nb-card-header>Flight</nb-card-header>\n        <nb-card-body class=\"hide-overflow\">\n          <div class=\"row ptb-10\">\n            <div class=\"col-lg-12 col-12\">\n              <mat-form-field class=\"w-100\">\n                Customer Name\n                <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput [matAutocomplete]=\"custauto\">\n                <mat-autocomplete #custauto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of customer |async\" [value]=\"option.name\" (onSelectionChange)=\"setCustomer(option,$event)\">\n                    {{ option.name }}\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row ptb-10\">\n            <div class=\"col-lg-4 col-12\">\n              <mat-form-field>\n                Guest Name\n                <input matInput formControlName=\"guestName\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 col-12\">\n              <mat-form-field>\n                Guest Mobile\n                <input matInput formControlName=\"guestMobile\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 col-12\">\n              <mat-form-field>\n                Guest Email\n                <input matInput formControlName=\"guestEmail\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row ptb-10\">\n            <div class=\"col-lg-4 col-12\">\n              <mat-form-field>\n                <input aplaceholder=\"Booked By\"  name=\"cname\" [formControl]=\"bookByCtrl\" matInput [matAutocomplete]=\"bookByAuto\" placeholder=\"Name (Booked By)\">\n                  <mat-autocomplete #bookByAuto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of bookBy |async\" [value]=\"option.name\" (onSelectionChange)=\"setBookBy(option,$event)\">\n                      {{ option.name }}\n                    </mat-option>\n                  </mat-autocomplete>\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 col-12\">\n              <mat-form-field>\n                <input  matInput formControlName=\"bookByNo\" placeholder=\"Phone No (Booked By)\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 col-12\">\n              <mat-form-field>\n                <input matInput formControlName=\"bookByEmail\" placeholder=\"Email Id (Booked By)\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row ptb-10\">\n            <div class=\"col-lg-12 col-12\">\n              <mat-radio-group formControlName=\"internationalRadioGroup\">\n                <mat-radio-button value=\"international\" (change)=\"international()\">International</mat-radio-button>\n                &nbsp;\n                <mat-radio-button value=\"domestic\" (change)=\"domestic()\">Domestic</mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n          <div class=\"row ptb-10\" *ngIf=\"internationalFlight != null\">\n            <div class=\"col-lg-12 col-12\">\n              Is it a connecting flight?\n              <mat-radio-group formControlName=\"connectingRadioGroup\">\n                <mat-radio-button value=\"yes\" (change)=\"connectingFlights()\">Yes</mat-radio-button>\n                &nbsp;\n                <mat-radio-button value=\"no\" (change)=\"notConnectingFlight()\">No</mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n          <div *ngIf=\"connectingFlight != null\">\n            <div *ngIf=\"internationalFlight\">\n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field>\n                    Flight No.\n                    <input matInput formControlName=\"flightNo\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-6 col-12\" *ngIf=\"roundTrip\">\n                  <mat-form-field>\n                    Flight No. (Return)\n                    <input matInput formControlName=\"flightNoReturn\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    From\n                    <input name=\"internationalFrom\" [formControl]=\"internationalFromCtrl\" matInput [matAutocomplete]=\"internationalFrom\">\n                    <mat-autocomplete #internationalFrom=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of internationalAirportFrom |async\" [value]=\"option\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    To\n                    <input name=\"internationalTo\" [formControl]=\"internationalToCtrl\" matInput [matAutocomplete]=\"internationalTo\">\n                    <mat-autocomplete #internationalTo=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of internationalAirportTo |async\" [value]=\"option\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row ptb-10\" *ngIf=\"connectingFlight\">\n                <div class=\"col-lg-12 col-12\">\n                  <mat-form-field>\n                    Flight No. (Connecting Flight)\n                    <input matInput formControlName=\"flightNoConnecting\">\n                  </mat-form-field>\n                </div>\n                <!-- <div class=\"col-lg-6 col-12\" *ngIf=\"roundTrip && connectingReturnFlight\">\n                  <mat-form-field>\n                    Flight No. (Connecting Flight Return)\n                    <input matInput formControlName=\"flightNoConnectingReturn\">\n                  </mat-form-field>\n                </div> -->\n              </div>\n              <div class=\"row ptb-10\" *ngIf=\"connectingFlight\">\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    From\n                    <input name=\"internationalConnectingFrom\" [formControl]=\"internationalConnectingFromCtrl\" matInput [matAutocomplete]=\"internationalConnectingFrom\">\n                    <mat-autocomplete #internationalConnectingFrom=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of internationalConnectingAirportFrom |async\" [value]=\"option\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>  \n                </div>\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    To\n                    <input name=\"internationalConnectingTo\" [formControl]=\"internationalConnectingToCtrl\" matInput [matAutocomplete]=\"internationalConnectingTo\">\n                    <mat-autocomplete #internationalConnectingTo=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of internationalConnectingAirportTo |async\" [value]=\"option\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row ptb-10\" *ngIf=\"roundTrip && connectingReturnFlight && internationalFlight\">\n                <!-- <div class=\"col-lg-6 col-12\">\n                  <mat-form-field>\n                    Flight No. (Connecting Flight)\n                    <input matInput formControlName=\"flightNoConnecting\">\n                  </mat-form-field>\n                </div> -->\n                <div class=\"col-lg-12 col-12\">\n                  <mat-form-field>\n                    Flight No. (Connecting Flight Return)\n                    <input matInput formControlName=\"flightNoConnectingReturn\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row ptb-10\" *ngIf=\"roundTrip && connectingReturnFlight && internationalFlight\">\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    From\n                    <input name=\"internationalConnectingReturnFrom\" [formControl]=\"internationalConnectingReturnFromCtrl\" matInput [matAutocomplete]=\"internationalConnectingReturnFrom\">\n                    <mat-autocomplete #internationalConnectingReturnFrom=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of internationalConnectingReturnAirportFrom |async\" [value]=\"option\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>  \n                </div>\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    To\n                    <input name=\"internationalConnectingReturnTo\" [formControl]=\"internationalConnectingReturnToCtrl\" matInput [matAutocomplete]=\"internationalConnectingReturnTo\">\n                    <mat-autocomplete #internationalConnectingReturnTo=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of internationalConnectingReturnAirportTo |async\" [value]=\"option\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"!internationalFlight\">\n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field>\n                    Flight No.\n                    <input matInput formControlName=\"flightNo\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-6 col-12\" *ngIf=\"roundTrip\">\n                  <mat-form-field>\n                    Flight No. (Return)\n                    <input matInput formControlName=\"flightNoReturn\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    From\n                    <input name=\"domesticFrom\" [formControl]=\"domesticFromCtrl\" matInput [matAutocomplete]=\"domesticFrom\">\n                    <mat-autocomplete #domesticFrom=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of domesticAirportsFrom |async\" [value]=\"option\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    To\n                    <input name=\"domesticFrom\" [formControl]=\"domesticToCtrl\" matInput [matAutocomplete]=\"domesticTo\">\n                    <mat-autocomplete #domesticTo=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of domesticAirportsTo |async\" [value]=\"option\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row ptb-10\" *ngIf=\"connectingFlight\">\n                <div class=\"col-lg-12 col-12\">\n                  <mat-form-field>\n                    Flight No. (Connecting)\n                    <input matInput formControlName=\"flightNoConnecting\">\n                  </mat-form-field>\n                </div>\n                <!-- <div class=\"col-lg-6 col-12\" *ngIf=\"roundTrip && connectingReturnFlight\">\n                  <mat-form-field>\n                    Flight No. (Connecting Return)\n                    <input matInput formControlName=\"flightNoConnectingReturn\">\n                  </mat-form-field>\n                </div> -->\n              </div>\n              <div class=\"row ptb-10\" *ngIf=\"connectingFlight\">\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    From\n                    <input name=\"domesticConnectingFrom\" [formControl]=\"domesticConnectingFromCtrl\" matInput [matAutocomplete]=\"domesticConnectingFrom\">\n                    <mat-autocomplete #domesticConnectingFrom=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of domesticConnectingAirportFrom |async\" [value]=\"option\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    To\n                    <input name=\"domesticConnectingTo\" [formControl]=\"domesticConnectingToCtrl\" matInput [matAutocomplete]=\"domesticConnectingTo\">\n                    <mat-autocomplete #domesticConnectingTo=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of domesticConnectingAirportTo |async\" [value]=\"option\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n            <div class=\"row ptb-10\" *ngIf=\"roundTrip && connectingReturnFlight && !internationalFlight\">\n              <!-- <div class=\"col-lg-6 col-12\" *ngIf=\"connectingFlight\">\n                <mat-form-field>\n                  Flight No. (Connecting)\n                  <input matInput formControlName=\"flightNoConnecting\">\n                </mat-form-field>\n              </div> -->\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Flight No. (Connecting Return)\n                  <input matInput formControlName=\"flightNoConnectingReturn\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\" *ngIf=\"roundTrip && connectingReturnFlight && !internationalFlight\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field class=\"w-100\">\n                  From\n                  <input name=\"domesticConnectingReturnFrom\" [formControl]=\"domesticConnectingReturnFromCtrl\" matInput [matAutocomplete]=\"domesticConnectingReturnFrom\">\n                  <mat-autocomplete #domesticConnectingReturnFrom=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of domesticConnectingReturnAirportFrom |async\" [value]=\"option\">\n                      {{ option }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field class=\"w-100\">\n                  To\n                  <input name=\"domesticConnectingReturnTo\" [formControl]=\"domesticConnectingReturnToCtrl\" matInput [matAutocomplete]=\"domesticConnectingReturnTo\">\n                  <mat-autocomplete #domesticConnectingReturnTo=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of domesticConnectingReturnAirportTo |async\" [value]=\"option\">\n                      {{ option }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">                \n                <mat-radio-group formControlName=\"roundTripRadioGroup\">\n                  <mat-radio-button value=\"singleTrip\" (change)=\"singletrip()\">Single Trip</mat-radio-button>\n                  &nbsp;\n                  <mat-radio-button value=\"roundTrip\" (change)=\"roundtrip()\">Round Trip</mat-radio-button>\n                </mat-radio-group>\n              </div>\n              <div class=\"col-lg-6 col-12\" *ngIf=\"roundTrip\">\n                Is it a connecting flight?\n                <mat-radio-group formControlName=\"roundTripConnectingRadioGroup\">\n                  <mat-radio-button value=\"yes\" (change)=\"connectingReturnFlights()\">Yes</mat-radio-button>                  \n                  &nbsp;\n                  <mat-radio-button value=\"no\" (change)=\"notConnectingReturnFlight()\">No</mat-radio-button>                  \n                </mat-radio-group>\n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"departureDate\" placeholder=\"Departure Date\" (click)=\"departureDate.open()\" formControlName=\"departureDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"departureDate\"></mat-datepicker-toggle>\n                  <mat-datepicker #departureDate></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\" *ngIf=\"roundTrip==true\">\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Arrival Date\" (click)=\"picker.open()\" formControlName=\"arrivalDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Price\n                  <input matInput formControlName=\"price\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Handling Charges\n                  <input matInput formControlName=\"handlingCharges\">\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n        </nb-card-body>\n      </nb-card>\n    </div>\n  </div>\n  <div class=\"row ptb-10\">\n    <div class=\"col-lg-12 col-12\">\n      <button *ngIf=\"!editState\" (click)=\"saveFlights()\" mat-raised-button color=\"primary\">Save</button>\n      <button *ngIf=\"editState\" (click)=\"updateFlights()\" mat-raised-button color=\"primary\">Update</button>\n      <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/airline/bookairline/bookairline.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/bookairline/bookairline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookairlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__airlinedisp_airline_service__ = __webpack_require__("./src/app/pages/airline/airlinedisp/airline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__operations_bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__masters_new_employees_employee_service__ = __webpack_require__("./src/app/pages/masters/new-employees/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__activitylog_service__ = __webpack_require__("./src/app/activitylog.service.ts");
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












var BookairlineComponent = (function () {
    function BookairlineComponent(fb, auth, airlineService, customerService, bookingService, dialog, matDialogRef, snackBar, data, employeeService, activityLogs) {
        this.fb = fb;
        this.auth = auth;
        this.airlineService = airlineService;
        this.customerService = customerService;
        this.bookingService = bookingService;
        this.dialog = dialog;
        this.matDialogRef = matDialogRef;
        this.snackBar = snackBar;
        this.data = data;
        this.employeeService = employeeService;
        this.activityLogs = activityLogs;
        this.domesticFromCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.domesticToCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.internationalFromCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.internationalToCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.domesticConnectingFromCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.domesticConnectingToCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.internationalConnectingFromCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.internationalConnectingToCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.domesticConnectingReturnFromCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.domesticConnectingReturnToCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.internationalConnectingReturnFromCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.internationalConnectingReturnToCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.bookByCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.from = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.user = {};
        this.airports = [
            'Agartala, IXA',
            'Agatti Island, AGX',
            'Agra, AGR',
            'Ahmedabad, AMD',
            'Aizawl, AJL',
            'Akola, AKD',
            'Allahabad, IXD',
            'Along, IXV',
            'Amritsar, ATQ',
            'Aurangabad, IXU',
            'Bangalore, BLR',
            'Bareilly, BEK',
            'Bathinda, BUP',
            'Belgaum, IXG',
            'Bellary, BEP',
            'Bellary, VDY',
            'Bhavnagar, BHU',
            'Bhopal, BHO',
            'Bhubaneswar, BBI',
            'Bhuj, BHJ',
            'Bikaner, BKB',
            'Bilaspur, PAB',
            'Car Nicobar, CBD',
            'Chandigarh, IXC',
            'Chennai, MAA',
            'Coimbatore, CJB',
            'Cooch Behar, COH',
            'Daman, NMB',
            'Dehradun, DED',
            'Delhi, DEL',
            'Dhanbad, DBD',
            'Dharmsala, DHM',
            'Dibrugarh, DIB',
            'Dimapur, DMU',
            'Diu, DIU',
            'Durgapur, RDP',
            'Ernakulam, COK',
            'Gaya, GAY',
            'Goa, GOI',
            'Gorakhpur, GOP',
            'Guwahati, GAU',
            'Gwalior, GWL',
            'Hubli, HBX',
            'Hyderabad, HYD',
            'Imphal, IMF',
            'Indore, IDR',
            'Jabalpur, JLR',
            'Jagdalpur, JGB',
            'Jaipur, JAI',
            'Jaisalmer, JSA',
            'Jammu, IXJ',
            'Jamnagar, JGA',
            'Jamshedpur, IXW',
            'Jodhpur, JDH',
            'Jorhat, JRH',
            'Kadapa, CDP',
            'Kailasahar, IXH',
            'Kamalpur, IXQ',
            'Kandla, IXY',
            'Kanpur, KNU',
            'Keshod, IXK',
            'Khajuraho, HJR',
            'Kolhapur, KLH',
            'Kolkata, CCU',
            'Kota, KTU',
            'Kozhikode, CCJ',
            'Kullu, KUU',
            'Latur, LTU',
            'Leh, IXL',
            'Lilabari, IXI',
            'Lucknow, LKO',
            'Ludhiana, LUH',
            'Madurai, IXM',
            'Maldah, LDA',
            'Mangalore, IXE',
            'Mohanbari, MOH',
            'Mumbai, BOM',
            'Mysore, MYQ',
            'Nagpur, NAG',
            'Nalchik, NAL',
            'Nanded, NDC',
            'Nashik, ISK',
            'Neiveli, NVY',
            'Pantnagar, PGH',
            'Pasighat, IXT',
            'Pathankot, IXP',
            'Patna, PAT',
            'Pondicherry, PNY',
            'Porbandar, PBD',
            'Port Blair, IXZ',
            'Pune, PNQ',
            'Puttaparthi, PUT',
            'Raipur, RPR',
            'Rajahmundry, RJA',
            'Rajkot, RAJ',
            'Rajouri, RJI',
            'Ranchi, IXR',
            'Raurkela, RRK',
            'Rewa, REW',
            'Rupshi, RUP',
            'Salem, SXV',
            'Satna, TNI',
            'Shillong, SHL',
            'Shimla, SLV',
            'Shirdi, SAG',
            'Silchar, IXS',
            'Siliguri, IXB',
            'Skardu, KDU',
            'Solapur, SSE',
            'Srinagar, SXR',
            'Surat, STV',
            'Tezpur, TEZ',
            'Tezu, TEI',
            'Thiruvananthapuram, TRV',
            'Thoothukkudi, TCR',
            'Tiruchirappalli, TRZ',
            'Tirupati, TIR',
            'Udaipur, UDR',
            'Vadodara, BDQ',
            'Varanasi, VNS',
            'Vijayawada, VGA',
            'Visakhapatnam, VTZ',
            'Warrangal, WGC'
        ];
        this.internationalAirports = [
            'Aarhus, Denmark, AAR',
            'Abadan, Iran, ABD',
            'Abeche, Chad, AEH',
            'Aberdeen, United Kingdom, ABZ',
            'Aberdeen (SD), USA, ABR',
            'Abidjan, Cote d\'Ivoire, ABJ',
            'Abilene (TX), USA, ABI',
            'Abu Dhabi, United Arab Emirates, AUH',
            'Abuja, Nigeria, ABV',
            'Abu Rudeis, Egypt, AUE',
            'Abu Simbel, Egypt, ABS',
            'Acapulco, Mexico, ACA',
            'Accra, Ghana, ACC',
            'Adana, Turkey, ADA',
            'Addis Ababa, Ethiopia, ADD',
            'Adelaide, Australia, ADL',
            'Aden, Yemen, ADE',
            'Adiyaman, Turkey, ADF',
            'Adler/Sochi, Russia, AER',
            'Agades, Niger, AJY',
            'Agadir, Morocco, AGA',
            'Agana (Hagåtña), Guam, SUM',
            'Aggeneys, South Africa, AGZ',
            'Aguadilla, Puerto Rico, BQN',
            'Aguascaliente, Mexico, AGU',
            'Ahmedabad, India, AMD',
            'Aiyura, Papua New Guinea, AYU',
            'Ajaccio, France, AJA',
            'Akita, Japan, AXT',
            'Akron (OH), USA, CAK',
            'Akrotiri, Cyprus, AKT',
            'Al Ain, United Arab Emirates, AAN',
            'Al Arish, Egypt, AAC',
            'Albany, Australia, ALH',
            'Albany (GA), USA, ABY',
            'Albany (NY), USA, ALB',
            'Albi, France, LBI',
            'Alborg, Denmark, AAL',
            'Albuquerque (NM), USA, ABQ',
            'Albury, Australia, ABX',
            'Alderney, Channel Islands, ACI',
            'Aleppo, Syria, ALP',
            'Alesund, Norway, AES',
            'Alexander Bay, South Africa, ALJ',
            'Alexandria - Borg el Arab Airport, Egypt, HBH',
            'Alexandria - El Nhouza Airport, Egypt, ALY',
            'Alexandria - Esler Field, USA (LA), ESF',
            'Alfujairah (Fujairah), United Arab Emirates, FJR',
            'Alghero Sassari, Italy, AHO',
            'Algiers, Algeria, ALG',
            'Al Hoceima, Morocco, AHU',
            'Alicante, Spain, ALC',
            'Alice Springs, Australia, ASP',
            'Alldays, South Africa, ADY',
            'Allentown (PA), USA, ABE',
            'Almaty (Alma Ata), Kazakhstan, ALA',
            'Almeria, Spain, LEI',
            'Alta, Norway, ALF',
            'Altay, PR China, AAT',
            'Altenrhein, Switzerland, ACH',
            'Altoona (PA), USA, AOO',
            'Altus, USA, AXS',
            'Amami, Japan, ASJ',
            'Amarillo (TX), USA, AMA',
            'Amazon Bay, Papua New Guinea, AZB',
            'Amman - Queen Alia International Airport, Jordan, AMM',
            'Amman - Amman-Marka International Airport, Jordan, ADJ',
            'Amritsar, India, ATQ',
            'Amsterdam, Netherlands, AMS',
            'Anand, India, QNB',
            'Anchorage (AK), USA, ANC',
            'Ancona - Ancona Falconara Airport, Italy, AOI',
            'Andorra La Vella - Heliport, Andorra, ALV',
            'Anguilla, Anguilla, AXA',
            'Anjouan, Comoros (Comores), AJN',
            'Ankara, Turkey, ANK',
            'Ankara, Turkey, ESB',
            'Annaba, Algeria, AAE',
            'Ann Arbor (MI), USA, ARB',
            'Annecy, France, NCY',
            'Anniston (AL), USA, ANB',
            'Antalya, Turkey, AYT',
            'Antananarivo (Tanannarive), Madagascar, TNR',
            'Antigua, Antigua and Barbuda, ANU',
            'Antwerp, Belgium, ANR',
            'Aomori, Japan, AOJ',
            'Apia, Samoa, APW',
            'Appelton/Neenah/Menasha (WI), USA, ATW',
            'Aqaba, Jordan, AQJ',
            'Aracaju, Brazil, AJU',
            'Arkhangelsk, Russia, ARH',
            'Arusha, Tanzania, ARK',
            'Araxos, Greece, GPA',
            'Arlit, Niger, RLT',
            'Arrecife/Lanzarote, Spain, ACE',
            'Aruba, Oranjestad, Aruba, AUA',
            'Asheville (NC), USA, AVL',
            'Ashgabat, Turkmenistan, ASB',
            'Asmara, Eritrea, ASM',
            'Aspen, USA, ASE',
            'Assiut, Egypt, ATZ',
            'Astana, Kazakhstan, TSE',
            'Asuncion, Paraguay, ASU',
            'Aswan, Egypt, ASW',
            'Athens, Greece, ATH',
            'Athens, Hellinikon Airport, Greece, HEW',
            'Athens (GA), USA, AHN',
            'Athens (OH), USA, ATO',
            'Atlanta (GA), USA, ATL',
            'Atlantic City (NJ), USA, ACY',
            'Attawapiskat, NT, Canada, YAT',
            'Auckland, New Zealand, AKL',
            'Augsburg, Germany, AGB',
            'Augusta (GA), USA, AGS',
            'Augusta (ME), USA, AUG',
            'Aurillac, France, AUR',
            'Austin (TX), USA, AUS',
            'Ayawasi, Indonesia, AYW',
            'Ayers Rock - Connellan, Australia, AYQ',
            'Ayr, Australia, AYR',
            'Badajoz, Spain, BJZ',
            'Bagdad, Iraq, BGW',
            'Bagdogra, India, IXB',
            'Bahamas, The Bahamas, NAS',
            'Bahawalpur, Pakistan, BHV',
            'Bahrain, Bahrain, BAH',
            'Bakersfield (CA), USA, BFL',
            'Baku , Azerbaijan, BAK',
            'Ballina, Australia, BNK',
            'Baltimore (MD), USA, BWI',
            'Bamaga, Australia, ABM',
            'Bamako, Mali, BKO',
            'Bambari, Central African Republic, BBY',
            'Bandar Seri Begawan, Brunei, BWN',
            'Bandung, Indonesia, BDO',
            'Bangalore, India, BLR',
            'Bangassou, Central African Republic, BGU',
            'Bangkok, Don Muang, Thailand, DMK',
            'Bangkok, Thailand, BKK',
            'Bangor (ME), USA, BGR',
            'Bangui, Central African Republic, BGF',
            'Banjul, Gambia, BJL',
            'Bannu, Pakistan, BNP',
            'Barcelona, Spain, BCN',
            'Barcelona, Venezuela, BLA',
            'Bardufoss, Norway, BDU',
            'Bari, Italy, BRI',
            'Barisal, Bangladesh, BZL',
            'Baroda, India, BDQ',
            'Barra, United Kingdom, BRR',
            'Barranquilla, Colombia, BAQ',
            'Basel, Switzerland, BSL',
            'Basel/Mulhouse, Switzerland/France, EAP',
            'Basra, Basrah, Iraq, BSR',
            'Basse-Terre, Guadeloupe, PTP',
            'Basseterre, Saint Kitts and Nevis, SKB',
            'Bastia, France, BIA',
            'Baton Rouge (LA), USA, BTR',
            'Bayreuth, Germany, BYU',
            'Beaumont/Pt. Arthur (TX), USA, BPT',
            'Beckley (WV), USA, BKW',
            'Beef Island, Virgin Islands (British), EIS',
            'Beijing, China, PEK',
            'Beijing - Nanyuan Airport, China, NAY',
            'Beira, Mozambique, BEW',
            'Beirut, Lebanon, BEY',
            'Belem, Brazil, BEL',
            'Belfast - George Best Belfast City Airport, United Kingdom, BHD',
            'Belfast - Belfast International Airport, United Kingdom, BFS',
            'Belgaum, India, IXG',
            'Belgrad (Beograd), Serbia, BEG',
            'Belize City , Belize, BZE',
            'Bellingham (WA), USA, BLI',
            'Belo Horizonte, Brazil, CNF',
            'Bemidji (MN), USA, BJI',
            'Benbecula, United Kingdom, BEB',
            'Benghazi (Bengasi), Libya, BEN',
            'Benguela, Angola, BUG',
            'Benton Harbour (MI), USA, BEH',
            'Berberati, Central African Republic, BBT',
            'Bergamo/Milan , Italy, BGY',
            'Bergen, Norway, BGO',
            'Bergerac - Roumanieres, France, EGC',
            'Berlin, Germany, BER',
            'Berlin, Schoenefeld, Germany, SXF',
            'Berlin, Tegel, Germany, TXL',
            'Berlin, Tempelhof, Germany, THF',
            'Bermuda -, Bermuda, BDA',
            'Berne, Bern-Belp, Switzerland, BRN',
            'Berne, Railway Service, Switzerland, ZDJ',
            'Bethel (AK), USA, BET',
            'Bhopal, India, BHO',
            'Bhubaneswar, India, BBI',
            'Biarritz, France, BIQ',
            'Bilbao, Spain, BIO',
            'Billings (MT), USA, BIL',
            'Billund, Denmark, BLL',
            'Bintulu, Malaysia, BTU',
            'Biraro, Central African Republic, IRO',
            'Birmingham, United Kingdom, BHX',
            'Birmingham (AL), USA, BHM',
            'Bishkek, Kyrgyzstan, FRU',
            'Bismarck (ND), USA, BIS',
            'Bissau, Guinea-Bissau, BXO',
            'Blackpool, United Kingdom, BLK',
            'Blackwater, Australia, BLT',
            'Blantyre (Mandala), Malawi, BLZ',
            'Blenheim, New Zealand, BHE',
            'Bloemfontein, South Africa, BFN',
            'Bloomington (IL), USA, BMI',
            'Bloomington (IN), USA, BMG',
            'Bluefield (WV), USA, BLF',
            'Boa Vista, Brazil, BVB',
            'Bobo/Dioulasso, Burkina Faso, BOY',
            'Bodo, Norway, BOO',
            'Bodrum, Turkey, BJV',
            'Bogota, Colombia, BOG',
            'Boise (ID), USA, BOI',
            'Bologna, Italy, BLQ',
            'Bombay (Mumbai), India, BOM',
            'Bonaire, Netherlands Antilles, BON',
            'Bonaventure, PQ, Canada, YVB',
            'Bora Bora, French Polynesia, BOB',
            'Bordeaux - Bordeaux Airport, France, BOD',
            'Borrego Springs (CA), USA, BXS',
            'Boston (MA), USA, BOS',
            'Bouake, Cote d\'Ivoire, BYK',
            'Bourgas/Burgas, Bulgaria, BOJ',
            'Bournemouth, United Kingdom, BOH',
            'Bowen, Australia, ZBO',
            'Bozeman (MT), USA, BZN',
            'Bradford/Warren (PA) /Olean (NY), USA, BFD',
            'Brainerd (MN), USA, BRD',
            'Brampton Island, Australia, BMP',
            'Brasilia, Brazil, BSB',
            'Bratislava, Slovakia, BTS',
            'Brazzaville, Congo (ROC), BZV',
            'Bremen, Germany, BRE',
            'Brescia, Montichiari, Italy, VBS',
            'Brest, France, BES',
            'Bria, Central African Republic, BIV',
            'Bridgeport (CT), USA, BDR',
            'Bridgetown, Barbados, BGI',
            'Brindisi, Italy, BDS',
            'Brisbane, Australia, BNE',
            'Bristol, United Kingdom, BRS',
            'Broennoeysund, Norway, BNN',
            'Broken Hill, Australia, BHQ',
            'Brookings (SD), USA, BKX',
            'Broome, Australia, BME',
            'Brunswick (GA), USA, BQK',
            'Brussels, Belgium, BRU',
            'Bucaramanga, Colombia, BGA',
            'Bucharest, Romania, BUH',
            'Bucharest - Henri Coandă International Airport, Romania, OTP',
            'Budapest, Hungary, BUD',
            'Buenos Aires, Argentina, BUE',
            'Buenos Aires, Ezeiza International Airport, Argentina, EZE',
            'Buenos Aires, Jorge Newbery, Argentina, AEP',
            'Buffalo Range, Zimbabwe, BFO',
            'Buffalo/Niagara Falls (NY), USA, BUF',
            'Bujumbura, Burundi, BJM',
            'Bulawayo, Zimbabwe, BUQ',
            'Bullhead City (NV), USA, BHC',
            'Bundaberg, Australia, BDB',
            'Burbank (CA), USA, BUR',
            'Burlington IA, USA, BRL',
            'Burlington (VT), USA, BTV',
            'Burnie (Wynyard), Australia, BWT',
            'Butte (MT), USA, BTM',
            'Cabinda, Angola, CAB',
            'Cagliari, Italy, CAG',
            'Cairns, Australia, CNS',
            'Cairo, Egypt, CAI',
            'Calama - El Loa, Chile, CJC',
            'Calcutta (Kolkata), India, CCU',
            'Calgary, Canada, YYC',
            'Cali, Colombia, CLO',
            'Calicut, India, CCJ',
            'Calvi, France, CLY',
            'Cambridge Bay, Canada, YCB',
            'Cambrigde, United Kingdom, CBG',
            'Campbeltown, United Kingdom, CAL',
            'Campo Grande, Brazil, CGR',
            'Canberra, Australia, CBR',
            'Cancun, Mexico, CUN',
            'Cannes, France, CEQ',
            'Canouan (island), Saint Vincent & the Grenadines, CIW',
            'Cape Town, South Africa, CPT',
            'Caracas, Venezuela, CCS',
            'Cardiff, United Kingdom, CWL',
            'Carlsbad (CA), USA, CLD',
            'Carnarvon, Australia, CVQ',
            'Carnot, Central African Republic, CRF',
            'Carson City (NV), USA, CSN',
            'Casablanca, Morocco, CAS',
            'Casablanca, Mohamed V, Morocco, CMN',
            'Casa de Campo, Dominican Republic, LRM',
            'Casino, Australia, CSI',
            'Casper (WY), USA, CPR',
            'Castaway, Fiji, CST',
            'Cartagena, Colombia, CTG',
            'Castries, Saint Lucia, SLU',
            'Catania, Italy, CTA',
            'Cayenne, French Guiana, CAY',
            'Cottbus, Germany, CBU',
            'Cebu City, Philippines, CEB',
            'Cedar City (UT), USA, CDC',
            'Cedar Rapids IA, USA, CID',
            'Ceduna, Australia, CED',
            'Cessnock, Australia, CES',
            'Chabarovsk (Khabarovsk), Russia, KHV',
            'Chambery, France, CMF',
            'Champaign (IL), USA, CMI',
            'Chandigarh, India, IXC',
            'Changchun, Jilin, PR China, CGQ',
            'Chania, Greece, CHQ',
            'Chaoyang, Beijing, PR China, CHG',
            'Charleston (SC), USA, CHS',
            'Charleston (WV), USA, CRW',
            'Charlotte (NC), USA, CLT',
            'Charlottesville (VA), USA, CHO',
            'Charters Towers, Australia, CXT',
            'Chattanooga (TN), USA, CHA',
            'Chengdu - Shuangliu, Sichuan, PR China, CTU',
            'Chennai (Madras), India, MAA',
            'Cheyenne (WY), USA, CYS',
            'Chiang Mai, Thailand, CNX',
            'Chiba City, Japan, QCB',
            'Chicago (IL), Midway, USA, MDW',
            'Chicago (IL), O\'Hare International Airport, USA, ORD',
            'Chicago (IL), USA, CHI',
            'Chichen Itza, Mexico, CZA',
            'Chico (CA), USA, CIC',
            'Chihuahua, Mexico, CUU',
            'Chios, Greece, JKH',
            'Chipata, Zambia, CIP',
            'Chisinau, Moldova, KIV',
            'Chita (Tschita), Russia, HTA',
            'Sapporo, Japan, CTS',
            'Chitral, Pakistan, CJL',
            'Chittagong, Bangladesh, CGP',
            'Chongqing, Sichuan, PR China, CKG',
            'Christchurch, New Zealand, CHC',
            'Chub Cay, Bahamas, CCZ',
            'Churchill, Canada, YYQ',
            'Cienfuegos, Cuba, CFG',
            'Cincinnati (OH), USA, CVG',
            'Ciudad Del Carmen, Mexico, CME',
            'Ciudad Guayana, Venezuela, CGU',
            'Ciudad Juarez, Mexico, CJS',
            'Ciudad Obregon, Mexico, CEN',
            'Ciudad Victoria, Mexico, CVM',
            'Clarksburg (WV), USA, CKB',
            'Clermont, Australia, CMQ',
            'Clermont Ferrand, France, CFE',
            'Cleveland (OH) , Burke Lakefront, USA, BKL',
            'Cleveland (OH) - Cleveland Hopkins International, USA, CLE',
            'Cochabamba, Bolivia, CBB',
            'Cochin, India, COK',
            'Cody/Powell/Yellowstone (WY), USA, COD',
            'Coffmann Cove (AK), USA, KCC',
            'Coffs Harbour, Australia, CFS',
            'Coimbatore, India, CJB',
            'Colima, Mexico, CLQ',
            'College Station/Bryan (TX), USA, CLL',
            'Collinsville, Australia, KCE',
            'Cologne, Germany, CGN',
            'Colombo, Sri Lanka, CMB',
            'Colorado Springs (CO), USA, COS',
            'Columbia (SC), USA, CAE',
            'Columbus (GA), USA, CSG',
            'Columbus (OH), USA, CMH',
            'Conakry, Guinea, CKY',
            'Concord (CA) - Buchanan Field, USA, CCR',
            'Concord (NH) - Concord Municipal Airport, USA, CON',
            'Constantine, Algeria, CZL',
            'Constanta (Constanța), Romania, CND',
            'Coober Pedy, Australia, CPD',
            'Cooktown, Australia, CTN',
            'Cooma, Australia, OOM',
            'Copenhagen, Denmark, CPH',
            'Cordoba, Argentina, COR',
            'Cordoba, Spain, ODB',
            'Cordova (AK), USA, CDV',
            'Corfu, Greece, CFU',
            'Cork, Ireland, ORK',
            'Corpus Christi (TX), USA, CRP',
            'Cotonou, Benin, COO',
            'Coventry, United Kingdom, CVT',
            'Cozmel, Mexico, CZM',
            'Craig (AK), USA, CGA',
            'Crescent City (CA), USA, CEC',
            'Cuiaba, Brazil, CGB',
            'Culiacan, Mexico, CUL',
            'Curacao, Netherlands Antilles, CUR',
            'Curitiba, Brazil, CWB',
            'Cuyo, Philippines, CYU',
            'Dakar, Senegal, DKR',
            'Dalaman, Turkey, DLM',
            'Dalby, Australia, DBY',
            'Dalian, Liaoning, PR China, DLC',
            'Dallas (TX) , Love Field, USA, DAL',
            'Dallas/Ft. Worth (TX), USA, DFW',
            'Daloa, Cote d\'Ivoire, DJO',
            'Damascus, Syria, DAM',
            'Dammam, Saudi Arabien, DMM',
            'Danville (VA), USA, DAN',
            'Dar es Salam (Daressalam), Tanzania, DAR',
            'Darwin, Australia, DRW',
            'Daydream Island, Australia, DDI',
            'Dayton (OH), USA, DAY',
            'Daytona Beach (FL), USA, DAB',
            'Decatur (IL), USA, DEC',
            'Deer Lake/Corner Brook, Canada, YDF',
            'Delhi, India, DEL',
            'Den Haag (The Hague), Netherlands, HAG',
            'Denizli, Turkey, DNZ',
            'Denpasar/Bali, Indonesia, DPS',
            'Denver (CO), USA, DEN',
            'Dera Ismail Khan, Pakistan, DSK',
            'Derby, Australia, DRB',
            'Derry (Londonderry), United Kingdom, LDY',
            'Des Moines (IA), USA, DSM',
            'Detroit (MI) , Coleman A. Young Municipal, USA, DET',
            'Detroit (MI) , Wayne County Airport, USA, DTW',
            'Detroit (MI) , Metropolitan Area, USA, DTT',
            'Devils Lake (ND), USA, DVL',
            'Devonport, Australia, DPO',
            'Dhahran, Saudi Arabia, DHA',
            'Dhaka, Bangladesh, DAC',
            'Dili, Timor Leste (East Timor), DIL',
            'Dillingham (AK), USA, DLG',
            'Dinard, France, DNR',
            'Disneyland Paris, France, DLP',
            'Djerba, Tunisia, DJE',
            'Djibouti (city), Djibouti, JIB',
            'Dodoma, Tanzania, DOD',
            'Doha, Qatar, DOH',
            'Doncaster/Sheffield, United Kingdom, DSA',
            'Donegal (Carrickfin), Ireland, CFN',
            'Dortmund, Germany, DTM',
            'Dothan (AL), USA, DHN',
            'Douala, Cameroon, DLA',
            'Dresden, DRS',
            'Dubai, United Arab Emirates, DXB',
            'Dubbo, Australia, DBO',
            'Dublin, Ireland, DUB',
            'Dubois (PA), USA, DUJ',
            'Dubrovnik, Croatia (Hrvatska), DBV',
            'Dubuque IA, USA, DBQ',
            'Duesseldorf, Germany, DUS',
            'Duluth (MN) /Superior (WI), USA, DLH',
            'Dundee, United Kingdom, DND',
            'Dunedin, New Zealand, DUD',
            'Dunk Island, Australia, DKI',
            'Durango (CO), USA, DRO',
            'Durban, South Africa, DUR',
            'Dushanbe (Duschanbe), Tajikistan, DYU',
            'Dutch Harbor (AK), USA, DUT',
            'Dysart, Australia, DYA',
            'Dzaoudzi, Mayotte, DZA',
            'East London, South Africa, ELS',
            'Easter Island, Chile, IPC',
            'Eau Clarie (WI), USA, EAU',
            'Edinburgh, Scotland, UK, EDI',
            'Edmonton, Canada, YEA',
            'Edmonton, International, Canada, YEG',
            'Edmonton, Municipal, Canada, YXD',
            'Egilsstadir, Iceland, EGS',
            'Eindhoven, Netherlands, EIN',
            'Samana, Dominican Republic, AZS',
            'Elba Island, Marina Di Campo, Italy, EBA',
            'Elat, Israel, ETH',
            'Elat, Ovula, Israel, VDA',
            'Elkhart (IN), USA, EKI',
            'Elko (NV), USA, EKO',
            'Ellisras, South Africa, ELL',
            'El Minya, Egypt, EMY',
            'Elmira (NY), USA, ELM',
            'El Paso (TX), USA, ELP',
            'Ely (NV), USA, ELY',
            'Emerald, Australia, EDR',
            'Emerald, Australia, EMD',
            'Enontekioe, Finland, ENF',
            'Entebbe, Uganda, EBB',
            'Erfurt, Germany, ERF',
            'Erie (PA), USA, ERI',
            'Eriwan (Yerevan, Jerevan), Armenia, EVN',
            'Erzincan, Turkey, ERC',
            'Erzurum, Turkey, ERZ',
            'Esbjerg, Denmark, EBJ',
            'Escanaba (MI), USA, ESC',
            'Esperance, Australia, EPR',
            'Eugene (OR), USA, EUG',
            'Eureka (CA), USA, ACV',
            'Evansville (IN), USA, EVV',
            'Evenes, Norway, EVE',
            'Exeter, United Kingdom, EXT',
            'Fairbanks (AK), USA, FAI',
            'Fair Isle (Shetland), United Kingdom, FIE',
            'Faisalabad, Pakistan, LYP',
            'Fargo (ND) (MN), USA, FAR',
            'Farmington (NM), USA, FMN',
            'Faro, Portugal, FAO',
            'Faroer, Denmark, FAE',
            'Fayetteville (AR), USA, FYV',
            'Fayetteville/Ft. Bragg (NC), USA, FAY',
            'Fes, Morocco, FEZ',
            'Figari, France, FSC',
            'Flagstaff (AZ), USA, FLG',
            'Flin Flon, Canada, YFO',
            'Flint (MI), USA, FNT',
            'Florence (Firenze), Italy, FLR',
            'Florence (SC), USA, FLO',
            'Florianopolis, Brazil, FLN',
            'Floro, Norway, FRO',
            'Fort Albert, Canada, YFA',
            'Fortaleza, Brazil, FOR',
            'Fort de France, Martinique, FDF',
            'Fort Dodge IA, USA, FOD',
            'Fort Huachuca/Sierra Vista (AZ), USA, FHU',
            'Fort Lauderdale/Hollywood (FL), USA, FLL',
            'Fort McMurray, Canada, YMM',
            'Fort Myers, Metropolitan Area (FL), USA, FMY',
            'Fort Myers, Southwest Florida Reg (FL), USA, RSW',
            'Fort Riley (KS) - Marshall AAF, USA, FRI',
            'Fort Smith, Canada, YSM',
            'Fort Smith (AR), USA, FSM',
            'Fort St. John, Canada, YXJ',
            'Fort Walton Beach (FL), USA, VPS',
            'Fort Wayne (IN), USA, FWA',
            'Fort Worth (TX), USA, DFW',
            'Foula (Shetland), United Kingdom, FOU',
            'Francistown, Botswana, FRW',
            'Frankfurt/Main, Germany, FRA',
            'Frankfurt/Hahn, Germany, HHN',
            'Franklin/Oil City (PA), USA, FKL',
            'Fredericton, Canada, YFC',
            'Freeport, Bahamas, FPO',
            'Freetown, Sierra Leone, FNA',
            'Frejus, France, FRJ',
            'Fresno (CA), USA, FAT',
            'Friedrichshafen, Germany, FDH',
            'Fuerteventura, Spain, FUE',
            'Fujairah, United Arab Emirates, FJR',
            'Fukuoka, Japan, FUK',
            'Fukushima, Japan, FKS',
            'Funchal, Portugal, FNC',
            'Futuna, Wallis and Futuna Islands, FUT',
            'Gaborone, Botswana, GBE',
            'Gadsden (AL), USA, GAD',
            'Gainesville (FL), USA, GNV',
            'Galway, Ireland, GWY',
            'Gander, Canada, YQX',
            'Garoua, Cameroon, GOU',
            'Gaza City, Palestinian Territory, GZA',
            'Gaziantep, Turkey, GZT',
            'Gdansk, Poland, GDN',
            'Geelong, Australia, GEX',
            'Geneva, Switzerland, GVA',
            'Genoa, Italy, GOA',
            'George, South Africa, GRJ',
            'Georgetown, Guyana, GEO',
            'Geraldton, Australia, GET',
            'Gerona, Spain, GRO',
            'Ghent (Gent), Belgium, GNE',
            'Gibraltar, Gibraltar, GIB',
            'Gilette (WY), USA, GCC',
            'Gilgit, Pakistan, GIL',
            'Gillam, Canada, YGX',
            'Gladstone, Australia, GLT',
            'Glasgow, Prestwick, United Kingdom, PIK',
            'Glasgow, United Kingdom, GLA',
            'Glasgow (MT), USA, GGW',
            'Glendive (MT), USA, GDV',
            'Goa, India, GOI',
            'Goiania, Brazil, GYN',
            'Gold Coast, Australia, OOL',
            'Goondiwindi, Australia, GOO',
            'Goose Bay, Canada, YYR',
            'Gorna, Bulgaria, GOZ',
            'Gothenburg (Göteborg), Sweden, GOT',
            'Gove (Nhulunbuy), Australia, GOV',
            'Govenors Harbour, Bahamas, GHB',
            'Granada, Spain, GRX',
            'Grand Bahama International, Bahamas, FPO',
            'Grand Canyon (AZ), USA, GCN',
            'Grand Cayman - Owen Roberts International, Cayman Islands, GCM',
            'Grand Forks (ND), USA, GFK',
            'Grand Junction (CO), USA, GJT',
            'Grand Rapids (MI), USA, GRR',
            'Grand Rapids (MN), USA, GPZ',
            'Graz, Austria, GRZ',
            'Great Falls (MT), USA, GTF',
            'Great Keppel Island, Australia, GKL',
            'Green Bay (WI), USA, GRB',
            'Greenbrier/Lewisburg (WV), USA, LWB',
            'Greensboro/Winston Salem (NC), USA, GSO',
            'Greenville (MS), USA, GLH',
            'Greenville (NC), USA, PGV',
            'Greenville/Spartanburg (SC), USA, GSP',
            'Grenada, Grenada, GND',
            'Grenoble, France, GNB',
            'Griffith, Australia, GFF',
            'Groningen - Eelde, Netherlands, GRQ',
            'Groote Eylandt - Alyangula, Australia, GTE',
            'Groton/New London (CT), USA, GON',
            'Guadalajara, Mexico, GDL',
            'Guadalcanal, Solomon Islands, GSI',
            'Guam, Guam, GUM',
            'Guangzhou (Canton), Guangdong, PR China, CAN',
            'Sao Paulo , Brazil, GRU',
            'Guatemala City, Guatemala, GUA',
            'Guayaquil, Ecuador, GYE',
            'Guernsey, Channel Islands, GCI',
            'Guettin, Germany, GTI',
            'Gulfport/Biloxi (MS), USA, GPT',
            'Guilin - Liangjiang, Guangxi, PR China, KWL',
            'Gulu, Uganda, ULU',
            'Gunnison/Crested Butte (CO), USA, GUC',
            'Guwahati, India, GAU',
            'Gwadar, Pakistan, GWD',
            'Gweru, Zimbabwe, GWE',
            'Gympie, Australia, GYP',
            'Hachijo Jima, Japan, HAC',
            'Hagåtña, Guam, GUM',
            'Haifa, Israel, HFA',
            'Haines (AK), USA, HNS',
            'Hakodate, Japan, HKD',
            'Halifax International, Canada, YHZ',
            'Hall Beach, Canada, YUX',
            'Hamburg - Fuhlsbuettel, Germany, HAM',
            'Hamilton, Australia, HLT',
            'Hamilton, Canada, YHM',
            'Hamilton, New Zealand, HLZ',
            'Hamilton Island, Australia, HTI',
            'Hammerfest, Norway, HFT',
            'Hancock (MI), USA, CMX',
            'Hangchow (Hangzhou), Zhejiang, PR China, HGH',
            'Hannover, Germany, HAJ',
            'Hanoi, Vietnam, HAN',
            'Harare, Zimbabwe, HRE',
            'Harbin (Haerbin), Heilongjiang, PR China, HRB',
            'Harlingen/South Padre Island (TX), USA, HRL',
            'Harrington Harbour, PQ, Canada, YHR',
            'Harrisburg (PA) - Harrisburg Skyport, USA, HAR',
            'Harrisburg (PA) - Harrisburg International, USA, MDT',
            'Hartford (CT) /Springfield (MA), USA, BDL',
            'Hatyai (Hat Yai), Thailand, HDY',
            'Haugesund, Norway, HAU',
            'Havana, Cuba, HAV',
            'Havre (MT), USA, HVR',
            'Hayman Island, Australia, HIS',
            'Helena (MT), USA, HLN',
            'Helsingborg, Sweden, JHE',
            'Helsinki - Vantaa, Finland, HEL',
            'Heraklion, Greece, HER',
            'Hermosillo - Gen. Pesqueira Garcia, Mexico, HMO',
            'Hervey Bay, Australia, HVB',
            'Hibbing (MN), USA, HIB',
            'Hickory (NC), USA, HKY',
            'Hilo (HI), USA, ITO',
            'Hilton Head Island (SC), USA, HHH',
            'Hinchinbrook Island, Australia, HNK',
            'Hiroshima International, Japan, HIJ',
            'Ho Chi Minh City (Saigon), Viet Nam, SGN',
            'Hobart, Australia, HBA',
            'Hof, Germany, HOQ',
            'Holguin, Cuba, HOG',
            'Home Hill, Australia, HMH',
            'Homer (AK), USA, HOM',
            'Hong Kong - International Airport (HKIA), Hong Kong, HKG',
            'Hong Kong - Chek Lap Kok, Hong Kong, ZJK',
            'Honiara Henderson International, Solomon Islands, HIR',
            'Honolulu (HI), USA, HNL',
            'Hoonah (AK), USA, HNH',
            'Horta, Portugal, HOR',
            'Houston (TX) , Hobby, USA, HOU',
            'Houston, TX - George Bush Intercontinental Airport, USA, IAH',
            'Huahine, French Polynesia, HUH',
            'Huatulco, Mexico, HUX',
            'Hue - Phu Bai, Viet Nam, HUI',
            'Humberside, United Kingdom, HUY',
            'Huntington (WV), USA, HTS',
            'Huntsville (AL), USA, HSV',
            'Hurghada International, Egypt, HRG',
            'Huron (SD), USA, HON',
            'Hwange National Park, Zimbabwe, HWN',
            'Hyannis (MA), USA, HYA',
            'Hydaburg (AK), USA, HYG',
            'Hyderabad, India, HYD',
            'Hyderabad, Pakistan, HDD',
            'Ibiza, Ibiza/Spain, IBZ',
            'Idaho Falls (ID), USA, IDA',
            'Iguazu, Cataratas, Argentina, IGR',
            'Ile des Pins, New Caledonia, ILP',
            'Ile Ouen, New Caledonia, IOU',
            'Iliamna (AK), USA, ILI',
            'Imperial (CA), USA, IPL',
            'Incercargill, New Zealand, IVC',
            'Incheon, Korea South, ICN',
            'Indianapolis (IN) International, USA, IND',
            'Ingham, Australia, IGH',
            'Innisfail, Australia, IFL',
            'Innsbruck - Kranebitten, Austria, INN',
            'International Falls (MN), USA, INL',
            'Inuvik, Canada, YEV',
            'Invercargill, New Zealand, IVC',
            'Inverness, United Kingdom, INV',
            'Inykern (CA), USA, IYK',
            'Iqaluit (Frobisher Bay), Canada, YFB',
            'Iquitos, Peru, IQT',
            'Irkutsk, Russia, IKT',
            'Ishigaki, Japan, ISG',
            'Islamabad, Pakistan, ISB',
            'Islay, United Kingdom, ILY',
            'Isle of Man, , IOM',
            'Istanbul - Istanbul Atatürk Airport, Turkey, IST',
            'Istanbul - Sabiha Gokcen, Turkey, SAW',
            'Ithaca/Cortland (NY), USA, ITH',
            'Ivalo, Finland, IVL',
            'Ixtapa/Zihuatenejo, Mexico, ZIH',
            'Izmir, Turkey, IZM',
            'Izmir - Adnan Menderes Airport, Turkey, ADB',
            'Jackson Hole (WY), USA, JAC',
            'Jackson (MI) - Reynolds Municipal, USA, JXN',
            'Jackson,  MN  , USA, MJQ',
            'Jackson (MS) - Jackson Internationall, USA, JAN',
            'Jackson (MS) - Hawkins Field   , USA, HKS',
            'Jackson (TN) - Mckellar, USA, MKL',
            'Jackson Hole (WY), USA, JAC',
            'Jacksonville (AR)  Little Rock AFB   , USA, LRF',
            'Jacksonville (FL) - Cecil Field NAS   , USA, NZC',
            'Jacksonville (FL) Jacksonville NAS   , USA, NIP',
            'Jacksonville (FL) - International, USA, JAX',
            'Jacksonville (FL) - Craig Municipal   , USA, CRG',
            'Jacksonville (IL) - Municipal Airport, USA, IJX',
            'Jacksonville (NC), USA, OAJ',
            'Jacksonville (TX), USA, JKV',
            'Jacmel   , Haiti, JAK',
            'Jacobabad, Pakistan, JAG',
            'Jacobina   , Brazil, JCM',
            'Jacquinot Bay, Papua New Guinea, JAQ',
            'Jaffna - Kankesanturai, Sri Lanka, JAF',
            'Jagdalpur, India, JGB',
            'Jaipur - Sanganeer, India, JAI',
            'Jaisalmer   , India, JSA',
            'Jakarta - Halim Perdana Kusuma, Indonesia, HLP',
            'Jakarta - Metropolitan Area, Indonesia, JKT',
            'Jakarta - Soekarno-Hatta International, Indonesia, CGK',
            'Jalalabad    , Afghanistan, JAA',
            'Jalandhar, India, JLR',
            'Jalapa, Mexico, JAL',
            'Jales, Brazil, JLS',
            'Jaluit Island  , Marshall Islands, UIT',
            'Jamba, Angola, JMB',
            'Jambi - Sultan Taha Syarifudn, Indonesia , DJB',
            'Jambol, Bulgaria, JAM',
            'Jamestown (ND), USA, JMS',
            'Jamestown (NY), USA, JHW',
            'Jammu - Satwari, India, IXJ',
            'Jamnagar - Govardhanpur, India, JGA',
            'Jamshedpur, India, IXW',
            'Janakpur, Nepal, JKR',
            'Jandakot, Australia, JAD',
            'Janesville (WI) - Rock County, USA, JVL',
            'Januaria, Brazil, JNA',
            'Jaque   , Panama, JQE',
            'Jatai, Brazil, JTI',
            'Jauja, Peru, JAU',
            'Jayapura - Sentani, Indonesia, DJJ',
            'Jeddah, Saudi Arabia, JED',
            'Jefferson City (MO) - Jefferson Memorial, USA, JEF',
            'Jeremie, Haiti, JEE',
            'Jerez de la Frontera/Cadiz - La Parra, Spain, XRY',
            'Jersey, Channel Islands, JER',
            'Jerusalem, Israel, JRS',
            'Jessore, Bangladesh, JSR',
            'Jeypore, India, PYB',
            'Ji\'an, Jiangxi, China, JGS',
            'Jiamusi, PR China, JMU',
            'Jiayuguan, PR China, JGN',
            'Jijel, Algeria, GJL',
            'Jijiga, Ethiopia, JIJ',
            'Jilin, PR China, JIL',
            'Jimma, Ethiopia, JIM',
            'Jinan, Shandong, PR China, TNA',
            'Jingdezhen, PR China, JDZ',
            'Jinghong, PR China, JHG',
            'Jining, PR China, JNG',
            'Jinja, Uganda, JIN',
            'Jinjiang, PR China, JJN',
            'Jinka, Ethiopia, BCO',
            'Jinzhou, PR China, JNZ',
            'Jipijapa, Ecuador, JIP',
            'Jiri, Nepal, JIR',
            'Jiujiang, PR China, JIU',
            'Jiwani, Pakistan, JIW',
            'Joacaba, Brazil, JCB',
            'Joao Pessoa, Brazil, JPA',
            'Jodhpur, India, JDH',
            'Jönköping (Jonkoping), Sweden, JKG',
            'Joensuu, Finland, JOE',
            'Johannesburg, South Africa, JNB',
            'Johnson City (NY) - Binghamton/Endicott/Johnson, USA, BGM',
            'Johnston Island, USA, JON',
            'Johnstown (PA), USA, JST',
            'Johor Bahru, Malaysia, JHB',
            'Joinville, Brazil, JOI',
            'Jolo, Philippines, JOL',
            'Jomsom, Nepal, JMO',
            'Jonesboro (AR), USA, JBR',
            'Joplin (MO), USA, JLN',
            'Jorhat, India, JRH',
            'Jos, Nigeria, JOS',
            'Jose De San Martin, Argentina, JSM',
            'Jouf, Saudi Arabia, AJF',
            'Juanjui, Peru, JJI',
            'Juba, South Sudan, JUB',
            'Juist (island), Germany, JUI',
            'Juiz De Fora, Brazil, JDF',
            'Jujuy, Argentina, JUJ',
            'Julia Creek, Australia, JCK',
            'Juliaca, Peru, JUL',
            'Jumla, Nepal, JUM',
            'Jundah, Australia, JUN',
            'Juneau (AK), USA, JNU',
            'Junin, Argentina, JNI',
            'Juticalpa, Honduras, JUT',
            'Jwaneng, Botswana, JWA',
            'Jyväskylä (Jyvaskyla), Finland, JYV',
            'Kabul, Afghanistan, KBL',
            'Kagoshima, Japan, KOJ',
            'Kahramanmaras, Turkey, KCM',
            'Kahului (HI), USA, OGG',
            'Kajaani, Finland, KAJ',
            'Kalamata, Greece, KLX',
            'Kalamazoo/Battle Creek (MI), USA, AZO',
            'Kalgoorlie, Australia, KGI',
            'Kaliningrad, Russia, KGD',
            'Kalispell (MT), USA, FCA',
            'Kalmar, Sweden, KLR',
            'Kamloops, BC, Canada, YKA',
            'Kamuela (HI), USA, MUE',
            'Kano, Nigeria, KAN',
            'Kanpur, India, KNU',
            'Kansas City (MO), USA, MCI',
            'Kaohsiung International, Taiwan, KHH',
            'Kapalua West (HI), USA, JHM',
            'Karachi, Pakistan, KHI',
            'Karlsruhe-Baden - Soellingen, Germany, FKB',
            'Karlstad, Sweden, KSD',
            'Karpathos, Greece, AOK',
            'Karratha, Australia, KTA',
            'Kars, Turkey, KYS',
            'Karumba, Australia, KRB',
            'Karup, Denmark, KRP',
            'Kaschechawan, PQ, Canada, ZKE',
            'Kassala, Sudan, KSL',
            'Katherine, Australia, KTR',
            'Kathmandu, Nepal, KTM',
            'Katima Mulilo/Mpacha, Namibia, MPA',
            'Kauhajoki, Finland, KHJ',
            'Kaunakakai (HI), USA, MKK',
            'Kavalla, Greece, KVA',
            'Kayseri, Turkey, ASR',
            'Kazan, Russia, KZN',
            'Keetmanshoop, Namibia, KMP',
            'Kelowna, BC, Canada, YLW',
            'Kemi/Tornio, Finland, KEM',
            'Kenai (AK), USA, ENA',
            'Kent (Manston), United Kingdom, MSE',
            'Kerry County, Ireland, KIR',
            'Ketchikan (AK), USA, KTN',
            'Key West (FL), USA, EYW',
            'Khamis Mushayat, Saudi Arabia, AHB',
            'Kharga - New Valley, Egypt, UVL',
            'Kharkov, Ukraine, HRK',
            'Khartoum, Sudan, KRT',
            'Khuzdar, Pakistan, KDD',
            'Kiel - Holtenau, Germany, KEL',
            'Kiev - Borispol, Ukraine, KBP',
            'Kiev - Zhulhany, Ukraine, IEV',
            'Kigali - Gregoire Kayibanda, Rwanda, KGL',
            'Kilimadjaro, Tanzania, JRO',
            'Killeem (TX), USA, ILE',
            'Kimberley, South Africa, KIM',
            'King Island, King Island (Australia), KNS',
            'King Salomon (AK), USA, AKN',
            'Kingscote, Australia, KGC',
            'Kingston - Norman Manley, Jamaica, KIN',
            'Kingston (NC), USA, ISO',
            'Kingstown, Saint Vincent and the Grenadines, SVD',
            'Kinshasa - N\'Djili, Congo (DRC), FIH',
            'Kiritimati (island), Kiribati, CXI',
            'Kirkenes, Norway, KKN',
            'Kirkuk, Iraq, KIK',
            'Kirkwall (Orkney), United Kingdom, KOI',
            'Kiruna, Sweden, KRN',
            'Kisangani, Congo (DRC), FKI',
            'Kittilä, Finland, KTT',
            'Kitwe, Zambia, KIW',
            'Klagenfurt, Austria, KLU',
            'Klamath Fall (OR), USA, LMT',
            'Klawock (AK), USA, KLW',
            'Kleinsee, South Africa, KLZ',
            'Knock, Ireland, NOC',
            'Knoxville (TN), USA, TYS',
            'Kobe, Japan, UKB',
            'Kochi, Japan, KCZ',
            'Köln, Köln/Bonn, Germany, CGN',
            'Kodiak (AK), USA, ADQ',
            'Kohat, Pakistan, OHT',
            'Kokkola/Pietarsaari, Finland, KOK',
            'Kolkata (Calcutta) - Netaji Subhas Chandra, India, CCU',
            'Komatsu, Japan, KMQ',
            'Kona (HI), USA, KOA',
            'Konya, Turkey, KYA',
            'Korhogo, Cote d\'Ivoire, HGO',
            'Kos, Greece, KGS',
            'Kota Kinabalu, Malaysia, BKI',
            'Kotzbue (AK), USA, OTZ',
            'Kowanyama, Australia, KWM',
            'Krakow (Cracow), Poland, KRK',
            'Kristiansand, Norway, KRS',
            'Kristianstad, Sweden, KID',
            'Kristiansund, Norway, KSU',
            'Kuala Lumpur - International Airport, Malaysia, KUL',
            'Kuala Lumpur - Sultan Abdul Aziz Shah, Malaysia, SZB',
            'Kuantan, Malaysia, KUA',
            'Kuching, Malaysia, KCH',
            'Kumamoto, Japan, KMJ',
            'Kununurra, Australia, KNX',
            'Kuopio, Finland, KUO',
            'Kushiro, Japan, KUH',
            'Kuujjuaq (FortChimo), Canada, YVP',
            'Kuujjuarapik, Canada, YGW',
            'Kuusamo, Finland, KAO',
            'Kuwait, Kuwait, KWI',
            'Kyoto, Japan, UKY',
            'Labe, Guinea, LEK',
            'Labouchere Bay (AK), USA, WLB',
            'Labuan, Malaysia, LBU',
            'Lac Brochet, MB, Canada, XLB',
            'La Coruna, Spain, LCG',
            'La Crosse (WI), USA, LSE',
            'Lae, Papua New Guinea, LAE',
            'La Rochelle, France, LRH',
            'Lafayette (IN), USA, LAF',
            'Lafayette, La, USA, LFT',
            'Lagos, Nigeria, LOS',
            'La Grande, Canada, YGL',
            'Lahore, Pakistan, LHE',
            'Lake Charles (LA), USA, LCH',
            'Lake Havasu City (AZ), USA, HII',
            'Lake Tahoe (CA), USA, TVL',
            'Lakselv, Norway, LKL',
            'Lambarene, Gabon, LBQ',
            'Lamezia Terme, Italy, SUF',
            'Lampedusa, Italy, LMP',
            'Lanai City (HI), USA, LNY',
            'Lancaster (PA), USA, LNS',
            'Land\'s End, United Kingdom, LEQ',
            'Langkawi (islands), Malaysia, LGK',
            'Lannion, France, LAI',
            'Lanseria, South Africa, HLA',
            'Lansing (MI), USA, LAN',
            'La Paz - El Alto, Bolivia, LPB',
            'La Paz - Leon, Mexico, LAP',
            'Lappeenranta, Finland, LPP',
            'Laramie (WY), USA, LAR',
            'Laredo (TX), USA, LRD',
            'Larnaca, Cyprus, LCA',
            'Las Palmas, Spain, LPA',
            'Las Vegas (NV), USA, LAS',
            'Latrobe (PA), USA, LBE',
            'Launceston, Australia, LST',
            'Laurel/Hattisburg (MS), USA, PIB',
            'Laverton, Australia, LVO',
            'Lawton (OK), USA, LAW',
            'Lazaro Cardenas, Mexico, LZC',
            'Leaf Rapids, Canada, YLR',
            'Learmouth (Exmouth), Australia, LEA',
            'Lebanon (NH), USA, LEB',
            'Leeds/Bradford, United Kingdom, LBA',
            'Leinster, Australia, LER',
            'Leipzig, Germany, LEJ',
            'Lelystad, Netherlands, LEY',
            'Leon, Mexico, BJX',
            'Leonora, Australia, LNO',
            'Lerwick/Tingwall (Shetland Islands), United Kingdom, LWK',
            'Lewiston (ID), USA, LWS',
            'Lewistown (MT), USA, LWT',
            'Lexington (KY), USA, LEX',
            'Libreville, Gabon, LBV',
            'Lidkoeping, Sweden, LDK',
            'Liege, Belgium, LGG',
            'Lifou, Loyaute, Pazifik, LIF',
            'Lihue (HI), USA, LIH',
            'Lille , France, LIL',
            'Lilongwe, Malawi, LLW',
            'Lima, Peru, LIM',
            'Limassol, Cyprus, QLI',
            'Limoges, France, LIG',
            'Lincoln (NE), USA, LNK',
            'Lindeman Island, Australia, LDC',
            'Linz - Hoersching, Austria, LNZ',
            'Lisala, Congo (DRC), LIQ',
            'Lisbon - Lisboa, Portugal, LIS',
            'Lismore, Australia, LSY',
            'Little Rock (AR), USA, LIT',
            'Liverpool, United Kingdom, LPL',
            'Lizard Island, Australia, LZR',
            'Ljubljana - Brnik, Slovenia, LJU',
            'Lockhart River, Australia, IRG',
            'Lome, Togo, LFW',
            'London, Canada, YXU',
            'London Metropolitan Area, United Kingdom, LON',
            'London - City Airport, United Kingdom, LCY',
            'London - Gatwick, United Kingdom, LGW',
            'London - Heathrow, United Kingdom, LHR',
            'London - Luton, United Kingdom, LTN',
            'London - Stansted, United Kingdom, STN',
            'Londonderry - Eglinton, United Kingdom, LDY',
            'Long Beach (CA), USA, LGB',
            'Long Island (AK), USA, LIJ',
            'Long Island, Islip (NY) - Mac Arthur, USA, ISP',
            'Longreach, Australia, LRE',
            'Longview/Kilgore (TX), USA, GGG',
            'Longyearbyen - Svalbard, Svalbard/Norway, LYR',
            'Loreto, Mexico, LTO',
            'Lorient, France, LRT',
            'Los Angeles (CA), USA, LAX',
            'Los Cabos, Mexico, SJD',
            'Los Mochis, Mexico, LMM',
            'Los Rodeos, Teneriffa/Spain, TFN',
            'Losinj - Losinj Arpt, Croatia (Hrvatska), LSZ',
            'Lourdes/Tarbes, France, LDE',
            'Louisville (KY), USA, SDF',
            'Luanda - 4 de Fevereiro, Angola, LAD',
            'Lubbock (TX), USA, LBB',
            'Lucknow, India, LKO',
            'Luederitz, Namibia, LUD',
            'Luga, Malta, MLA',
            'Lugano, Switzerland, LUG',
            'Lulea, Sweden, LLA',
            'Lumbumbashi, Congo (DRC), FBM',
            'Lusaka, Zambia, LUN',
            'Lusisiki, South Africa, LUJ',
            'Luxembourg, Luxembourg, LUX',
            'Luxi - Mangshi, Yunnan, PR China, LUM',
            'Luxor, Egypt, LXR',
            'Lvov (Lwow, Lemberg), Ukraine, LWO',
            'Lydd, United Kingdom, LYX',
            'Lynchburg (VA), USA, LYH',
            'Lyon , France, LYS',
            'Lyons (KS) - Rice County Municipal, USA, LYO',
            'Maastricht/Aachen, Netherlands, MST',
            'Macapa, Brazil, MCP',
            'Macau, Macau, China SAR, MFM',
            'Maceio, Brazil, MCZ',
            'Mackay, Australia, MKY',
            'Macon (GA), USA, MCN',
            'Mactan Island - Nab, Philippines, NOP',
            'Madinah (Medina) - Mohammad Bin Abdulaziz, Saudi Arabia, MED',
            'Madison (WI), USA, MSN',
            'Madras (Chennai), India, MAA',
            'Madrid, Spain, MAD',
            'Mahe, Seychelles, SEZ',
            'Mahon, Spain, MAH',
            'Maitland, Australia, MTL',
            'Majunga, Madagascar, MJN',
            'Makung, Taiwan, MZG',
            'Malabo , Equatorial Guinea, SSG',
            'Malaga, Spain, AGP',
            'Malatya, Turkey, MLX',
            'Male, Maledives, MLE',
            'Malindi, Kenya, MYD',
            'Malmo (Malmoe), Sweden, MMA',
            'Malmo (Malmö) - Malmö Airport, Sweden, MMX',
            'Man, Cote d\'Ivoire, MJC',
            'Managua - Augusto C Sandino, Nicaragua, MGA',
            'Manaus, Brazil, MAO',
            'Manchester, United Kingdom, MAN',
            'Manchester (NH), USA, MHT',
            'Mandalay , Myanmar, MDL',
            'Manguna, Papua New Guinea, MFO',
            'Manihi, French Polynesia, XMH',
            'Manila, Philippines, MNL',
            'Manzanillo, Mexico, ZLO',
            'Manzini, Swaziland, MTS',
            'Maputo, Mozambique, MPM',
            'Mar del Plata, Argentina, MDQ',
            'Maracaibo, Venezuela, MAR',
            'Maradi, Niger, MFQ',
            'Maras, Turkey, KCM',
            'Marathon (FL), USA, MTH',
            'Mardin, Turkey, MQM',
            'Mare, New Caledonia, MEE',
            'Margate, South Africa, MGH',
            'Margerita, Venezuela, PMV',
            'Maribor, Slovenia, MBX',
            'Mariehamn (Maarianhamina), Finland, MHQ',
            'Maroua, Cameroon, MVR',
            'Marquette (MI), USA, MQT',
            'Marrakesh, Morocco, RAK',
            'Marsa Alam, Egypt, RMF',
            'Marsa Matrah (Marsa Matruh), Egypt, MUH',
            'Marseille, France, MRS',
            'Marsh Harbour, Bahamas, MHH',
            'Martha\'s Vineyard (MA), USA, MVY',
            'Martinsburg (WV), USA, MRB',
            'Maryborough, Australia, MBH',
            'Maseru, Lesotho, MSU',
            'Mason City IA, USA, MCW',
            'Masvingo, Zimbabwe, MVZ',
            'Matsumoto, Nagano, Japan, MMJ',
            'Matsuyama, Japan, MYJ',
            'Mattoon (IL), USA, MTO',
            'Maun, Botswana, MUB',
            'Maupiti, French Polynesia, MAU',
            'Mauritius, Mauritius, MRU',
            'Mayaguez, Puerto Rico, MAZ',
            'Mazatlan, Mexico, MZT',
            'McAllen (TX), USA, MFE',
            'Medan, Indonesia, MES',
            'Medan - Kualanamu International, Indonesia, KNO',
            'Medellin, Colombia, MDE',
            'Medford (OR), USA, MFR',
            'Medina, Saudi Arabia, MED',
            'Meekatharra, Australia, MKR',
            'Melbourne, Australia, MEL',
            'Melbourne (FL), USA, MLB',
            'Melville Hall, Dominica, DOM',
            'Memphis (TN), USA, MEM',
            'Mendoza, Argentina, MDZ',
            'Manado, Indonesia, MDC',
            'Merced (CA), USA, MCE',
            'Merida, Mexico, MID',
            'Meridian (MS), USA, MEI',
            'Merimbula, Australia, MIM',
            'Messina, South Africa, MEZ',
            'Metlakatla (AK), USA, MTM',
            'Metz -  Frescaty, France, MZM',
            'Metz/Nancy Metz-Nancy-Lorraine, France, ETZ',
            'Mexicali, Mexico, MXL',
            'Mexico City - Mexico City International Airport, Mexico, MEX',
            'Mexico City - Atizapan, Mexico, AZP',
            'Mexico City - Juarez International, Mexico, MEX',
            'Mexico City - Santa Lucia, Mexico, NLU',
            'Mfuwe, Zambia, MFU',
            'Miami (FL), USA, MIA',
            'Mianwali, Pakistan, MWD',
            'Middlemount, Australia, MMM',
            'Midland/Odessa (TX), USA, MAF',
            'Midway Island - Sand Island Field, US Minor Outlying Islands, MDY',
            'Mikkeli, Finland, MIK',
            'Milan, Italy, MIL',
            'Milan - Linate, Italy, LIN',
            'Milan - Malpensa, Italy, MXP',
            'Milan - Orio Al Serio, Italy, BGY',
            'Mildura, Australia, MQL',
            'Miles City (MT), USA, MLS',
            'Milford Sound, New Zealand, MFN',
            'Milwaukee (WI), USA, MKE',
            'Minatitlan, Mexico, MTT',
            'Mineralnye Vody, Russia, MRV',
            'Minneapolis (MN), USA, MSP',
            'Minot (ND), USA, MOT',
            'Minsk, International, Belarus, MSQ',
            'Miri, Malaysia, MYY',
            'Mirpur, Pakistan, QML',
            'Missula (MT), USA, MSO',
            'Mitchell (SD), USA, MHE',
            'Miyako Jima (Ryuku Islands) - Hirara, Japan, MMY',
            'Miyazaki, Japan, KMI',
            'Mkambati, South Africa, MBM',
            'Moanda, Gabon, MFF',
            'Mobile (AL) - Pascagoula (MS), USA, MOB',
            'Modesto (CA), USA, MOD',
            'Moenjodaro, Pakistan, MJD',
            'Mogadishu, Somalia, MGQ',
            'Mokuti, Namibia, OKU',
            'Moline/Quad Cities (IL), USA, MLI',
            'Mombasa, Kenya, MBA',
            'Monastir, Tunisia, MIR',
            'Moncton, Canada, YQM',
            'Monroe (LA), USA, MLU',
            'Monrovia - Metropolitan Area, Liberia, MLW',
            'Monrovia - Roberts International, Liberia, ROB',
            'Montego Bay, Jamaica, MBJ',
            'Montenegro, Brazil, QGF',
            'Monterey (CA), USA, MRY',
            'Monterrey - Gen. Mariano Escobedo, Mexico, MTY',
            'Monterrey - Aeropuerto Del Norte, Mexico, NTR',
            'Montevideo , Uruguay, MVD',
            'Montgomery (AL), USA, MGM',
            'Montpellier, France, MPL',
            'Montreal, Canada, YMQ',
            'Montreal - Dorval (Montréal-Trudeau), Canada, YUL',
            'Montreal - Mirabel, Canada, YMX',
            'Montrose/Tellruide (CO), USA, MTJ',
            'Moorea, French Polynesia, MOZ',
            'Moranbah, Australia, MOV',
            'Moree, Australia, MRZ',
            'Morelia, Mexico, MLM',
            'Morgantown (WV), USA, MGW',
            'Morioka, Hanamaki, Japan, HNA',
            'Moroni - Prince Said Ibrahim, Comoros (Comores), HAH',
            'Moruya, Australia, MYA',
            'Moscow - Metropolitan Area, Russia, MOW',
            'Moscow - Domodedovo, Russia, DME',
            'Moscow - Sheremetyevo, Russia, SVO',
            'Moscow - Vnukovo, Russia, VKO',
            'Moses Lake (WA), USA, MWH',
            'Mossel Bay, South Africa, MZY',
            'Mostar, Bosnia and Herzegovina, OMO',
            'Mosul, Iraq, OSM',
            'Mouila, Gabon, MJL',
            'Moundou, Chad, MQQ',
            'Mount Cook, New Zealand, GTN',
            'Mount Gambier, Australia, MGB',
            'Mount Magnet, Australia, MMG',
            'Mt. Isa, Australia, ISA',
            'Mt. McKinley (AK), USA, MCL',
            'Muenchen (Munich) - Franz Josef Strauss, Germany, MUC',
            'Muenster/Osnabrueck, Germany, FMO',
            'Mulhouse, France, MLH',
            'Multan, Pakistan, MUX',
            'Murcia, Spain, MJV',
            'Murmansk, Russia, MMK',
            'Mus, Turkey, MSR',
            'Muscat - Seeb, Oman, MCT',
            'Muscle Shoals (AL), USA, MSL',
            'Muskegon (MI), USA, MKG',
            'Muzaffarabad, Pakistan, MFG',
            'Mvengue, Gabon, MVB',
            'Mykonos, Greece, JMK',
            'Myrtle Beach (SC) - Myrtle Beach AFB, USA, MYR',
            'Myrtle Beach (SC) - Grand Strand Airport, USA, CRE',
            'Mysore, India, MYQ',
            'Mytilene (Lesbos), Greece, MJT',
            'Mzamba, South Africa, MZF',
            'Nadi, Fiji, NAN',
            'Nagasaki, Japan, NGS',
            'Nagoya - Komaki AFB, Japan, NGO',
            'Nagpur, India, NAG',
            'Nairobi, Kenya, NBO',
            'Nakhichevan, Azerbaijan, NAJ',
            'Nakhon Si Thammarat, Thailand, NST',
            'Nancy, France, ENC',
            'Nanisivik, Canada, YSR',
            'Nanning, Guangxi, PR China, NNG',
            'Nantes, France, NTE',
            'Nantucket (MA), USA, ACK',
            'Naples, Italy, NAP',
            'Naples (FL), USA, APF',
            'Narrabri, Australia, NAA',
            'Narrandera, Australia, NRA',
            'Narsarsuaq, Greenland, UAK',
            'Nashville (TN), USA, BNA',
            'Nassau, Bahamas, NAS',
            'Natal, Brazil, NAT',
            'Nausori, Fiji/Suva, SUV',
            'Nawab Shah, Pakistan, WNS',
            'Naxos, Greece, JNX',
            'N\'Djamena, Chad, NDJ',
            'N\'Dola, Zambia, NLA',
            'Nelson, New Zealand, NSN',
            'Nelspruit, South Africa, NLP',
            'Nelspruit, South Africa, MQP',
            'Nevis, St. Kitts and Nevis, NEV',
            'New Bern (NC), USA, EWN',
            'New Haven (CT), USA, HVN',
            'New Orleans, La, USA, MSY',
            'Newquay, United Kingdom, NQY',
            'New Valley - Kharga, Egypt, UVL',
            'New York - John F. Kennedy (NY), USA, JFK',
            'New York - LaGuardia (NY), USA, LGA',
            'New York - Newark (NJ), USA, EWR',
            'New York (NY), USA, NYC',
            'Newburgh (NY), USA, SWF',
            'Newcastle - Belmont, Australia, BEO',
            'Newcastle - Williamtown, Australia, NTL',
            'Newcastle, United Kingdom, NCL',
            'Newcastle, South Africa, NCS',
            'Newman, Australia, ZNE',
            'Newport News/Williamsburg (VA), USA, PHF',
            'N\'Gaoundere, Cameroon, NGE',
            'Niagara Falls International, USA, IAG',
            'Niamey, Niger, NIM',
            'Nice, France, NCE',
            'Nicosia, Cyprus, NIC',
            'Nikolaev, Ukraine, NLV',
            'Niigata, Japan, KIJ',
            'Nimes, France, FNI',
            'Nis, Serbia, INI',
            'Nizhny Novgorod, Russia, GOJ',
            'Nome (AK), USA, OME',
            'Noosa, Australia, NSA',
            'Norfolk Island, Australia, NLK',
            'Norfolk/Virginia Beach (VA), USA, ORF',
            'Norman Wells, Canada, YVQ',
            'Norrkoeping, Sweden, NRK',
            'North Bend (OR), USA, OTH',
            'North Eleuthera, Bahamas, ELH',
            'Norwich, United Kingdom, NWI',
            'Nottingham - East Midlands, United Kingdom, EMA',
            'Nouadhibou, Mauritania, NDB',
            'Nouakchott, Mauritania, NKC',
            'Noumea, New Caledonia, NOU',
            'Novi Sad, Serbia, QND',
            'Novosibirsk, Russia, OVB',
            'Nürnberg (Nuremberg), Germany, NUE',
            'Nuevo Laredo, Mexico, NLD',
            'Nuku\'alofa, Tonga, TBU',
            'Oakland (CA), USA, OAK',
            'Oaxaca - Xoxocotlan, Mexico, OAX',
            'Odense, Denmark, ODE',
            'Odessa, Ukraine, ODS',
            'Oerebro, Sweden, ORB',
            'Ohrid, Macedonia, OHD',
            'Oita, Japan, OIT',
            'Okayama, Japan, OKJ',
            'Okinawa, Ryukyo Island - Naha, Japan, OKA',
            'Oklahoma City (OK) - Will Rogers World, USA, OKC',
            'Olbia, Italy, OLB',
            'Olympic Dam, Australia, OLP',
            'Omaha (NE), USA, OMA',
            'Ondangwa, Namibia, OND',
            'Ontario (CA), USA, ONT',
            'Oran (Ouahran), Algeria, ORN',
            'Orange, Australia, OAG',
            'Orange County (Santa Ana) (CA), USA, SNA',
            'Oranjemund, Namibia, OMD',
            'Oranjestad, Aruba, AUA',
            'Orkney - Kirkwall, United Kingdom, KOI',
            'Orlando Metropolitan Area (FL), USA, ORL',
            'Orlando - International Airport (FL), USA, MCO',
            'Orpheus Island, Australia, ORS',
            'Osaka, Metropolitan Area, Japan, OSA',
            'Osaka - Itami, Japan, ITM',
            'Osaka - Kansai International Airport, Japan, KIX',
            'Oshkosh (WI), USA, OSH',
            'Osijek, Croatia (Hrvatska), OSI',
            'Oslo - Oslo Airport, Gardermoen, Norway, OSL',
            'Oslo - Fornebu, Norway, FBU',
            'Oslo - Sandefjord, Norway, TRF',
            'Ottawa - Hull, Canada, YOW',
            'Ouadda, Central African Republic, ODA',
            'Ouarzazate, Morocco, OZZ',
            'Oudtshoorn, South Africa, OUH',
            'Ouagadougou, Burkina Faso, OUA',
            'Oujda, Morocco, OUD',
            'Oulu, Finland, OUL',
            'Out Skerries (Shetland), United Kingdom, OUK',
            'Oviedo, Spain, OVD',
            'Owensboro (KY), USA, OWB',
            'Oxnard (CA), USA, OXR',
            'Oyem, Gabon/Loyautte, UVE',
            'Paderborn/Lippstadt, Germany, PAD',
            'Paducah (KY), USA, PAH',
            'Page/Lake Powell (AZ), USA, PGA',
            'Pago Pago, American Samoa, PPG',
            'Pakersburg (WV) /Marietta (OH), USA, PKB',
            'Palermo - Punta Raisi, Italy, PMO',
            'Palma de Mallorca, Spain, PMI',
            'Palmas, Brazil, PMW',
            'Palmdale/Lancaster (CA), USA, PMD',
            'Palmerston North, New Zealand, PMR',
            'Palm Springs (CA), USA, PSP',
            'Panama City - Tocumen International, Panama, PTY',
            'Panama City (FL), USA, PFN',
            'Panjgur, Pakistan, PJG',
            'Pantelleria, Italy, PNL',
            'Papeete - Faaa, French Polynesia (Tahiti), PPT',
            'Paphos, Cyprus, PFO',
            'Paraburdoo, Australia, PBO',
            'Paramaribo, Suriname, PBM',
            'Paris, France, PAR',
            'Paris - Charles de Gaulle, France, CDG',
            'Paris - Le Bourget, France, LBG',
            'Paris - Orly, France, ORY',
            'Paro, Bhutan, PBH',
            'Pasco (WA), USA, PSC',
            'Pasni, Pakistan, PSI',
            'Patna, India, PAT',
            'Pattaya, Thailand, PYX',
            'Pau, France, PUF',
            'Pellston (MI), USA, PLN',
            'Penang International, Malaysia, PEN',
            'Pendelton (OR), USA, PDT',
            'Pensacola (FL), USA, PNS',
            'Peoria/Bloomington (IL), USA, PIA',
            'Pereira, Colombia, PEI',
            'Perpignan, France, PGF',
            'Perth International, Australia, PER',
            'Perugia, Italy, PEG',
            'Pescara, Italy, PSR',
            'Peshawar, Pakistan, PEW',
            'Petersburg (AK), USA, PSG',
            'Phalaborwa, South Africa, PHW',
            'Philadelphia (PA), USA, PHL',
            'Phnom Penh - Pochentong, Cambodia, PNH',
            'Phoenix (AZ), USA, PHX',
            'Phuket, Thailand, HKT',
            'Pierre (SD), USA, PIR',
            'Pietermaritzburg, South Africa, PZB',
            'Pietersburg, South Africa, PTG',
            'Pilanesberg/Sun City, South Africa, NTY',
            'Pisa - Galileo Galilei, Italy, PSA',
            'Pittsburgh International Airport (PA), USA, PIT',
            'Plattsburgh (NY), USA, PLB',
            'Plettenberg Bay, South Africa, PBZ',
            'Pocatello (ID), USA, PIH',
            'Podgorica, Montenegro, TGD',
            'Pohnpei, Micronesia, PNI',
            'Pointe a Pitre, Guadeloupe, PTP',
            'Pointe Noire, Congo (ROC), PNR',
            'Poitiers - Biard, France, PIS',
            'Ponce, Puerto Rico, PSE',
            'Ponta Delgada, Portugal, PDL',
            'Pori, Finland, POR',
            'Port Angeles (WA), USA, CLM',
            'Port au Prince, Haiti, PAP',
            'Port Augusta, Australia, PUG',
            'Port Elizabeth, South Africa, PLZ',
            'Port Gentil, Gabon, POG',
            'Port Harcourt, Nigeria, PHC',
            'Port Hedland, Australia, PHE',
            'Portland, Australia, PTJ',
            'Portland (ME), USA, PWM',
            'Portland International (OR), USA, PDX',
            'Port Lincoln, Australia, PLO',
            'Port Macquarie, Australia, PQQ',
            'Port Menier, PQ, Canada, YPN',
            'Port Moresby - Jackson Field, Papua New Guinea, POM',
            'Porto, Portugal, OPO',
            'Porto Alegre, Brazil, POA',
            'Port of Spain, Trinidad and Tobago, POS',
            'Port Said, Egypt, PSD',
            'Porto Santo, Portugal, PXO',
            'Porto Velho, Brazil, PVH',
            'Port Vila, Vanuatu, VLI',
            'Poughkeepsie (NY), USA, POU',
            'Poznan, Lawica, Poland, POZ',
            'Prague, Czech Republic, PRG',
            'Praia, Cape Verde, RAI',
            'Presque Island (ME), USA, PQI',
            'Pretoria - Wonderboom Apt., South Africa, PRY',
            'Preveza/Lefkas, Greece, PVK',
            'Prince George, Canada, YXS',
            'Prince Rupert/Digby Island, Canada, YPR',
            'Pristina, Serbia, PRN',
            'Prosperpine, Australia, PPP',
            'Providence (RI), USA, PVD',
            'Prudhoe Bay (AK), USA, SCC',
            'Puebla, Mexico, PBC',
            'Pueblo (CO), USA, PUB',
            'Puerto Escondido, Mexico, PXM',
            'Puerto Ordaz, Venezuela, PZO',
            'Puerto Plata, Dominican Republic, POP',
            'Puerto Vallarta, Mexico, PVR',
            'Pukatawagan, Canada, XPK',
            'Pula, Croatia (Hrvatska), PUY',
            'Pullman (WA), USA, PUW',
            'Pune, India, Maharashtra, PNQ',
            'Punta Arenas - Presidente Carlos Ibáñez del Campo, Chile, PUQ',
            'Punta Cana, Dominican Republic, PUJ',
            'Pu San (Busan), South Korea, PUS',
            'Pyongyang, North Korea, FNJ',
            'Quebec, Canada, YQB',
            'Queenstown, Australia, UEE',
            'Queenstown, New Zealand, ZQN',
            'Quetta, Pakistan, UET',
            'Qingdao, Shandong, PR China, TAO',
            'Quimper, France, UIP',
            'Quincy (IL), USA, UIN',
            'Quito, Ecuador, UIO',
            'Rabat , Morocco, RBA',
            'Rahim Yar Khan, Pakistan, RYK',
            'Raiatea, French Polynesia, RFP',
            'Rainbow Lake, AB, Canada, YOP',
            'Rajkot, India, RAJ',
            'Raleigh/Durham (NC), USA, RDU',
            'Ranchi, India, IXR',
            'Rangiroa, French Polynesia, RGI',
            'Rangoon (Yangon) - Mingaladon, Myanmar, RGN',
            'Rapid City (SD), USA, RAP',
            'Rarotonga, Cook Island, RAR',
            'Ras al Khaymah (Ras al Khaimah), United Arab Emirates, RKT',
            'Rawala Kot, Pakistan, RAZ',
            'Rawalpindi, Pakistan, RWP',
            'Reading (PA), USA, RDG',
            'Recife, Brazil, REC',
            'Redding (CA), USA, RDD',
            'Redmond (OR), USA, RDM',
            'Reggio Calabria, Italy, REG',
            'Regina, Canada, YQR',
            'Reina Sofia, Teneriffa/Spain, TFS',
            'Rennes, France, RNS',
            'Reno (NV), USA, RNO',
            'Resolute Bay, Canada, YRB',
            'Reus, Spain, REU',
            'Reykjavik - Metropolitan Area, Iceland, REK',
            'Reykjavik - Keflavik International, Iceland, KEF',
            'Rhinelander (WI), USA, RHI',
            'Rhodos, Greece, RHO',
            'Richards Bay, South Africa, RCB',
            'Richmond (VA), USA, RIC',
            'Riga, Latvia, RIX',
            'Rijeka, Croatia (Hrvatska), RJK',
            'Rimini, Italy, RMI',
            'Rio Branco, Brazil, RBR',
            'Rio de Janeiro - Galeao, Brazil, GIG',
            'Rio de Janeiro - Santos Dumont, Brazil, SDU',
            'Rio de Janeiro, Brazil, RIO',
            'Riyadh, Saudi Arabia, RUH',
            'Roanne, France, RNE',
            'Roanoke (VA), USA, ROA',
            'Roatan, Honduras, RTB',
            'Rochester (MN), USA, RST',
            'Rochester (NY), USA, ROC',
            'Rock Sound, Bahamas, RSD',
            'Rock Springs (WY), USA, RKS',
            'Rockford (IL), USA, RFD',
            'Rockhampton, Australia, ROK',
            'Rockland (ME), USA, RKD',
            'Rocky Mount - Wilson (NC), USA, RWI',
            'Rodez, France, RDZ',
            'Rodrigues Island, Mauritius, RRG',
            'Roenne, Denmark, RNN',
            'Rome, Italy, ROM',
            'Rome - Ciampino, Italy, CIA',
            'Rome - Fuimicino, Italy, FCO',
            'Ronneby, Sweden, RNB',
            'Rosario, Argentina, ROS',
            'Rostov-on-Don - Rostov-on-Don Airport, Russia, RVI',
            'Rostov-on-Don - Platov International Airport, Russia, ROV',
            'Rotorua, New Zealand, ROT',
            'Rotterdam, Netherlands, RTM',
            'Rovaniemi, Finland, RVN',
            'Rundu, Namibia, NDU',
            'Ruse, Bulgaria, ROU',
            'Saarbruecken, Germany, SCN',
            'Sacramento (CA), USA, SMF',
            'Sado Shima, Japan, SDS',
            'Saginaw/Bay City/Midland (MI), USA, MBS',
            'Saidu Sharif, Pakistan, SDT',
            'Saigon (Ho Chi Minh City), Viet Nam, SGN',
            'Saint Brieuc, France, SBK',
            'Saint Denis, Reunion, RUN',
            'Saint John, Canada, YSJ',
            'Saipan, Northern Mariana Islands, SPN',
            'Sal, Cape Verde, SID',
            'Salalah, Oman, SLL',
            'Salem (OR), USA, SLE',
            'Salinas (CA), USA, SNS',
            'Salinas, Ecuador, SNC',
            'Salisbury, Zimbabwe, SAY',
            'Salisbury (MD), USA, SBY',
            'Saloniki, Greece, SKG',
            'Salta, Gen Belgrano, Argentina, SLA',
            'Salt Lake City (UT), USA, SLC',
            'Salvador, Brazil, SSA',
            'Salzburg - W.A. Mozart, Austria, SZG',
            'Samara, Russia, KUF',
            'Samarkand, Uzbekistan, SKD',
            'Samos, Greece, SMI',
            'Samsun, Turkey, SZF',
            'San Andres, Colombia, ADZ',
            'San Angelo (TX), USA, SJT',
            'San Antonio (TX), USA, SAT',
            'San Carlos de Bariloche, Argentina, BRC',
            'San Diego (CA), USA, SAN',
            'San Francisco, SA, USA, SFO',
            'San Jose Cabo, Mexico, SJD',
            'San Jose, Costa Rica, SJO',
            'San Jose (CA), USA, SJC',
            'San Juan, Puerto Rico, SJU',
            'San Luis Obisco (CA), USA, SBP',
            'San Luis Potosi, Mexico, SLP',
            'San Pedro, Cote d\'Ivoire, SPY',
            'San Pedro Sula, Honduras, SAP',
            'San Salvador, Bahamas, ZSA',
            'San Salvador, El Salvador, SAL',
            'San Sebastian, Spain, EAS',
            'Sanaa (Sana\'a), Yemen, SAH',
            'Sandspit, Canada, YZP',
            'Santa Ana (CA), USA, SNA',
            'Santa Barbara (CA), USA, SBA',
            'Santa Cruz de la Palma, Spain, SPC',
            'Santa Cruz de la Sierra, Bolivia, SRZ',
            'Santa Katarina - Mount Sinai, Egypt, SKV',
            'Santa Maria, Portugal, SMA',
            'Santa Maria (CA), USA, SMX',
            'Santander, Spain, SDR',
            'Santa Rosa (CA), USA, STS',
            'Santa Rosa, Bolivia, SRB',
            'Santa Rosa, Brazil, SRA',
            'Santa Rosa, Argentina, RSA',
            'Santa Rosa, Copan, Honduras, SDH',
            'Santa Rosalia, Colombia, SSL',
            'Santa Rosalia, Mexico, SRL',
            'Santiago, Cuba, SCU',
            'Santiago de Chile - Arturo Merino Benitez, Chile, SCL',
            'Santiago de Compostela, Spain, SCQ',
            'Santo, Vanuatu, SON',
            'Santo Domingo, Dominican Republic, SDQ',
            'Sao Luis, Brazil, SLZ',
            'Sao Paulo, Brazil, SAO',
            'Sao Paulo - Congonhas, Brazil, CGH',
            'Sao Paulo - Guarulhos, Brazil, GRU',
            'Sao Paulo - Viracopos, Brazil, VCP',
            'Sao Tome, Sao Tome & Principe, TMS',
            'Sapporo, Hokkaido, Japan, SPK',
            'Sapporo - Okadama, Hokkaido, Japan, OKD',
            'Sapporo, Japan, CTS',
            'Sarajevo, Bosnia and Herzegovina, SJJ',
            'Saransk, Russia, SKX',
            'Sarasota/Bradenton (FL), USA, SRQ',
            'Saskatoon, Canada, YXE',
            'Sassandra, Cote d\'Ivoire, ZSS',
            'Savannah (GA), USA, SAV',
            'Savonlinna, Finland, SVL',
            'Scarborough, Trinidad and Tobago, TAB',
            'Scone, Australia, NSO',
            'Scottsdale (AZ), USA, SCF',
            'Seattle/Tacoma (WA), USA, SEA',
            'Sehba, Libya, SEB',
            'Seinaejoki, Finland, SJY',
            'Selibi Phikwe, Botswana, PKW',
            'Sendai, Japan, SDJ',
            'Seoul - Incheon International Airport, South Korea, ICN',
            'Seoul - Kimpo, South Korea, SEL',
            'Sevilla, Spain, SVQ',
            'Sfax, Tunisia, SFA',
            'Shamattawa, MB, Canada, ZTM',
            'Shanghai - Hongqiao, China, SHA',
            'Shanghai - Pu Dong, China, PVG',
            'Shannon (Limerick), Ireland, SNN',
            'Sharjah, United Arab Emirates, SHJ',
            'Sharm El Sheikh, Egypt, SSH',
            'Sheffield, City Airport, United Kingdom, SZD',
            'Sheffield, Doncaster, Robin Hood International Airport, United Kingdom, DSA',
            'Shenandoah Valley/Stauton (VA), USA, SHD',
            'Shenyang, Liaoning, PR China, SHE',
            'Shenzhen, Guangdong, PR China, SZX',
            'Sheridan (WY), USA, SHR',
            'Shreveport, La, USA, SHV',
            'Shute Harbour, Australia, JHQ',
            'Sibu, Malaysia, SBW',
            'Sidney (MT), USA, SDY',
            'Silistra, Bulgaria, SLS',
            'Simferopol, Ukraine, SIP',
            'Sindhri, Pakistan, MPD',
            'Singapore - Changi, Singapore, SIN',
            'Singapore - Paya Lebar, Singapore, QPG',
            'Singapore - Seletar, Singapore, XSP',
            'Singleton, Australia, SIX',
            'Sioux City IA, USA, SUX',
            'Sioux Falls (SD), USA, FSD',
            'Sishen, South Africa, SIS',
            'Sitka (AK), USA, SIT',
            'Sivas, Turkey, VAS',
            'Siwa, Egypt, SEW',
            'Skagway (AK), USA, SGY',
            'Skardu, Pakistan, KDU',
            'Skiathos, Greece, JSI',
            'Skopje, Macedonia, SKP',
            'Skrydstrup, Denmark, SKS',
            'Skukuza, South Africa, SZK',
            'Sligo, Ireland, SXL',
            'Smithers, Canada, YYD',
            'Sodankylae, Finland, SOT',
            'Soenderborg, Denmark, SGD',
            'Soendre Stroemfjord, Greenland, SFJ',
            'Sofia - Vrazhdebna, Bulgaria, SOF',
            'Sogndal, Norway, SOG',
            'Southampton - Eastleigh, United Kingdom, SOU',
            'South Bend (IN), USA, SBN',
            'South Indian Lake, MB, Canada, XSI',
            'South Molle Island, Australia, SOI',
            'Southend (London), United Kingdom, SEN',
            'Split, Croatia (Hrvatska), SPU',
            'Spokane (WA), USA, GEG',
            'Springbok, South Africa, SBU',
            'Springfield (IL), USA, SPI',
            'Springfield (MO), USA, SGF',
            'Srinagar, India, SXR',
            'St. Augustin, PQ, Canada, YIF',
            'St. Croix, Virgin Islands (U.S.), STX',
            'St. Etienne, France, EBU',
            'St. George (UT), USA, SGU',
            'St. John\'s, Canada, YYT',
            'St. Kitts, St. Kitts and Nevis, SKB',
            'St. Louis (MO) Lambert, USA, STL',
            'St. Lucia Hewanorra, Saint Lucia, UVF',
            'St. Lucia Vigle, Saint Lucia, SLU',
            'St. Marteen, Netherlands Antilles, SXM',
            'St. Martin, St. Martin (Guadeloupe), SFG',
            'St. Petersburg (Leningrad) - Pulkovo, Russia, LED',
            'St. Pierre, NF, Canada, FSP',
            'St. Thomas, Virgin Islands (U.S.), STT',
            'St. Vincent, Saint Vincent and the Grenadines, SVD',
            'Stansted (London), United Kingdom, STN',
            'State College/Belefonte (PA), USA, SCE',
            'Stavanger, Norway, SVG',
            'Steamboat Springs (CO), USA, HDN',
            'Stettin, Poland, SZZ',
            'Stockholm Metropolitan Area, Sweden, STO',
            'Stockholm - Arlanda, Sweden, ARN',
            'Stockholm - Bromma, Sweden, BMA',
            'Stockton (CA), USA, SCK',
            'Stornway, United Kingdom, SYY',
            'Strasbourg, France, SXB',
            'Streaky Bay, Australia, KBY',
            'Stuttgart - Echterdingen, Germany, STR',
            'Sui, Pakistan, SUL',
            'Sukkur, Pakistan, SKZ',
            'Sumburgh (Shetland), United Kingdom, LSI',
            'Sun Valley (ID), USA, SUN',
            'Sundsvall, Sweden, SDL',
            'Sunshine Coast, Australia, MCY',
            'Surabaya - Juanda, Indonesia, SUB',
            'Surat, India, STV',
            'Suva, Fiji, SUV',
            'Swakopmund, Namibia, SWP',
            'Sydney, Australia, SYD',
            'Sylhet, Bangladesh, ZYL',
            'Syracuse (NY), USA, SYR',
            'Tabuk, Saudi Arabia, TUU',
            'Taif, Saudi Arabia, TIF',
            'Taipei - Chiang Kai Shek, Taiwan, TPE',
            'Taipei - Sung Shan, Taiwan, TAY',
            'Taiyuan, Shanxi, PR China, TYN',
            'Takamatsu, Japan, TAK',
            'Talkeetna (AK), USA, TKA',
            'Tallahassee (FL), USA, TLH',
            'Tallinn - Pirita Harbour, Estonia, QUF',
            'Tallinn - Ulemiste, Estonia, TLL',
            'Tampa (FL), USA, TPA',
            'Tampere, Finland, TMP',
            'Tampico - Gen. F. Javier Mina, Mexico, TAM',
            'Tamworth, Australia, TMW',
            'Tangier - Boukhalef, Morocco, TNG',
            'Taree, Australia, TRO',
            'Targovishte, Bulgaria, TGV',
            'Tashkent, Uzbekistan, TAS',
            'Tawau, Malaysia, TWU',
            'Tbilisi - Novo Alexeyevka, Georgia, TBS',
            'Te Anau, New Zealand, TEU',
            'Teesside, Durham Tees Valley, United Kingdom, MME',
            'Tegucigalpa, Honduras, TGU',
            'Tehran (Teheran) - Mehrabad, Iran, THR',
            'Tekirdag - Corlu, Turkey, TEQ',
            'Tel Aviv, Israel, TLV',
            'Telluride (CO), USA, TEX',
            'Temora, Australia, TEM',
            'Tenerife, Spain, TCI',
            'Tenerife - Sur Reina Sofia, Spain, TFS',
            'Tenerife - Norte Los Rodeos, Spain, TFN',
            'Tennant Creek, Australia, TCA',
            'Terceira, Portugal, TER',
            'Teresina, Brazil, THE',
            'Termez (Termes), Uzbekistan, TMZ',
            'Terrace, Canada, YXT',
            'Terre Haute (IN), USA, HUF',
            'Texarkana (AR), USA, TXK',
            'Thaba\'Nchu, South Africa, TCU',
            'The Pas, Canada, YQD',
            'Thessaloniki - Makedonia Apt., Greece, SKG',
            'Thief River Falls (MN), USA, TVF',
            'Thira, Greece, JTR',
            'Thiruvananthapuram, India, TRV',
            'Thisted, Denmark, TED',
            'Thompson, Canada, YTH',
            'Thorne Bay (AK), USA, KTB',
            'Thunder Bay, Canada, YQT',
            'Thursday Island, Australia, TIS',
            'Tianjin, China, TSN',
            'Tijuana - Rodriguez, Mexico, TIJ',
            'Tioman, Indonesia, TOD',
            'Tirana - Rinas, Albania, TIA',
            'Tiruchirapally, India, TRZ',
            'Tivat, Montenegro, TIV',
            'Tobago, Trinidad and Tobago, TAB',
            'Tokushima, Japan, TKS',
            'Tokyo, Japan, TYO',
            'Tokyo - Haneda, Japan, HND',
            'Tokyo - Narita, Japan, NRT',
            'Toledo (OH), USA, TOL',
            'Tom Price, Australia, TPR',
            'Toowoomba, Australia, TWB',
            'Toronto - Billy Bishop Toronto City Airport, Canada, YTZ',
            'Toronto - Toronto Pearson International Airport, Canada, YYZ',
            'Toronto, Canada, YTO',
            'Tortola, British Virgin Islands, TOV',
            'Touho, New Caledonia, TOU',
            'Toulouse, France, TLS',
            'Townsville, Australia, TSV',
            'Toyama, Japan, TOY',
            'Trabzon, Turkey, TZX',
            'Trapani, Italy, TPS',
            'Traverse City (MI), USA, TVC',
            'Treasure Cay, Bahamas, TCB',
            'Trenton/Princeton (NJ), USA, TTN',
            'Treviso, Italy, TSF',
            'Tri-Cities Regional (TN) /VA, USA, TRI',
            'Trieste, Italy, TRS',
            'Tripoli , Libya, TIP',
            'Tromsoe, Norway, TOS',
            'Trondheim, Norway, TRD',
            'Tsumeb, Namibia, TSB',
            'Tucson (AZ), USA, TUS',
            'Tulepo (MS), USA, TUP',
            'Tulsa (OK), USA, TUL',
            'Tunis - Carthage, Tunisia, TUN',
            'Turbat, Pakistan, TUK',
            'Turin, Italy, TRN',
            'Turku, Finland, TKU',
            'Tuscaloosa (AL), USA, TCL',
            'Tuxtla Gutierrez, Mexico, TGZ',
            'Twin Falls (ID), USA, TWF',
            'Tyler (TX), USA, TYR',
            'Ua Huka, French Polynesia, UAH',
            'Ua Pou, French Polynesia, UAP',
            'Ube, Japan, UBJ',
            'Uberaba, Brazil, UBA',
            'Uberlandia , Brazil, UDI',
            'Ubon Ratchathani, Thailand, UBP',
            'Udaipur, India, UDR',
            'Uden, Netherlands, UDE',
            'Udon Thani, Thailand, UTH',
            'Ufa, Russia, UFA',
            'Uherske Hradiste, Czech Republic, UHE',
            'Uige, Angola, UGO',
            'Ujung Pandang, Indonesia, UPG',
            'Ukhta, Russia, UCT',
            'Ukiah (CA), USA, UKI',
            'Ulaanbaatar, Mongolia, ULN',
            'Ulan-Ude, Russia, UUD',
            'Ulanhot, PR China, HLH',
            'Ulei, Vanuatu, ULB',
            'Ulsan, South Korea, USN',
            'Ulundi, South Africa, ULD',
            'Umea, Sweden, UME',
            'Umiujaq, Canada, YUD',
            'Umtata, South Africa, UTT',
            'Unalakleet (AK), USA, UNK',
            'Union Island, Saint Vincent and the Grenadines, UNI',
            'Unst (Shetland Island), United Kingdom, UNT',
            'Upala, Costa Rica, UPL',
            'Upernavik - Upernavik Heliport, Greenland, JUV',
            'Upington, South Africa, UTN',
            'Upolu Point (HI), USA, UPP',
            'Uranium City, Canada, YBE',
            'Urgench, Uzbekistan, UGC',
            'Uriman, Venezuela, URM',
            'Urmiehm (Orumieh), Iran, OMH',
            'Uruapan, Mexico, UPN',
            'Urubupunga, Brazil, URB',
            'Uruguaiana, Brazil, URG',
            'Urumqi, Xinjiang, PR China, URC',
            'Uruzgan, Afghanistan, URZ',
            'Ushuaia, Argentina, USH',
            'Utapao (Pattaya), Thailand, UTP',
            'Utica (NY), USA, UCA',
            'Utila, Honduras, UII',
            'Uummannaq, Greenland, UMD',
            'Uzhgorod, Ukraine, UDJ',
            'Vaasa, Finland, VAA',
            'Vaexjoe, Sweden, VXO',
            'Vail (CO), USA, EGE',
            'Val d\'Or, Canada, YVO',
            'Valdez (AK), USA, VDZ',
            'Valdosta (GA), USA, VLD',
            'Valencia, Spain, VLC',
            'Valencia, Venezuela, VLN',
            'Valladolid, Spain, VLL',
            'Valparaiso, Chile, VAP',
            'Valverde, Spain, VDE',
            'Van - Ferit Melen, Turkey, VAN',
            'Vancouver, Canada, YVR',
            'Varadero, Cuba, VRA',
            'Varanasi, India, VNS',
            'Varkaus, Finland, VRK',
            'Varna, Bulgaria, VAR',
            'Vasteras, Sweden, VST',
            'Velikiye Luki (Welikije Luki), Russia, VLU',
            'Venice - Marco Polo, Italy, VCE',
            'Veracruz, Mexico, VER',
            'Vernal (UT), USA, VEL',
            'Vero Beach/Ft. Pierce (FL), USA, VRB',
            'Verona (Brescia) Montichiari, Italy, VBS',
            'Verona, Italy, VRN',
            'Victoria, Canada, YYJ',
            'Victoria Falls, Zimbabwe, VFA',
            'Vidin, Bulgaria, VID',
            'Vientiane - Wattay, Lao PDR, VTE',
            'Vigo, Spain, VGO',
            'Villahermosa, Mexico, VSA',
            'Vilnius, Lithuania, VNO',
            'Virgin Gorda, Virgin Islands (British), VIJ',
            'Visalia (CA), USA, VIS',
            'Visby, Sweden, VBY',
            'Vitoria, Spain, VIT',
            'Vitoria, Brazil, VIX',
            'Vryheid, South Africa, VYD',
            'Wabush, Canada, YWK',
            'Waco (TX), USA, ACT',
            'Wagga, Australia, WGA',
            'Walla Walla (WA), USA, ALW',
            'Wallis, Wallis and Futuna Islands, WLS',
            'Walvis Bay, South Africa, WVB',
            'Warrnambool, Australia, WMB',
            'Warsaw - Frédéric Chopin, Poland, WAW',
            'Washington DC - Baltimore Washington International, USA, BWI',
            'Washington DC - Dulles International, USA, IAD',
            'Washington DC - Ronald Reagan National, USA, DCA',
            'Washington DC, USA, WAS',
            'Waterloo IA, USA, ALO',
            'Watertown (SD), USA, ATY',
            'Wausau/Stevens Point (WI), USA, CWA',
            'Weipa, Australia, WEI',
            'Welkom, South Africa, WEL',
            'Wellington, New Zealand, WLG',
            'Wenatchee (WA), USA, EAT',
            'West Palm Beach (FL), USA, PBI',
            'West Yellowstone (MT), USA, WYS',
            'Westerland, Germany, GWT',
            'Whakatane, New Zealand, WHK',
            'Whale Cove, NT, Canada, YXN',
            'Whangarei, New Zealand, WRE',
            'White Plains (NY), USA, HPN',
            'Whitehorse, Canada, YXY',
            'Whitsunday Resort, Australia, HAP',
            'Whyalla, Australia, WYA',
            'Wichita Falls (TX), USA, SPS',
            'Wichita (KS), USA, ICT',
            'Wick, United Kingdom, WIC',
            'Wickham, Australia, WHM',
            'Wien (Vienna) , Austria, VIE',
            'Wiesbaden, Air Base, Germany, WIE',
            'Wilkes Barre/Scranton (PA), USA, AVP',
            'Williamsport (PA), USA, IPT',
            'Williston (ND), USA, ISL',
            'Wilmington (NC), USA, ILM',
            'Wilna (Vilnius), Lithuania, VNO',
            'Wiluna, Australia, WUN',
            'Windhoek - Eros, Namibia, ERS',
            'Windhoek - Hosea Kutako International, Namibia, WDH',
            'Windsor Ontario, Canada, YQG',
            'Winnipeg International, Canada, YWG',
            'Wolf Point (MT), USA, OLF',
            'Wollongong, Australia, WOL',
            'Woomera, Australia, UMR',
            'Worcester (MA), USA, ORH',
            'Worland (WY), USA, WRL',
            'Wrangell (AK), USA, WRG',
            'Wuhan, Hubei, PR China, WUH',
            'Wyndham, Australia, WYN',
            'Xiamen, Fujian, PR China, XMN',
            'Xi\'an - Xianyang, Shaanxi, PR China, XIY',
            'Yakima (WA), USA, YKM',
            'Yakutat (AK), USA, YAK',
            'Yakutsk, Russia, YKS',
            'Yamagata, Junmachi, Japan, GAJ',
            'Yamoussoukro, Côte d\'Ivoire, ASK',
            'Yanbu, Saudi Arabia, YNB',
            'Yangon (Rangoon) - Mingaladon, Myanmar, RGN',
            'Yaounde, Cameroon, YAO',
            'Yellowknife, Canada, YZF',
            'Yekaterinburg, Russia, SVX',
            'Yichang, Hubei, PR China, YIH',
            'Yokohama, Japan, YOK',
            'Yuma (AZ), USA, YUM',
            'Zacatecas, Mexico, ZCL',
            'Zadar, Croatia (Hrvatska), ZAD',
            'Zagreb, Croatia (Hrvatska), ZAG',
            'Zakynthos, Greece, ZTH',
            'Zaragoza, Spain, ZAZ',
            'Zhob, Pakistan, PZH',
            'Zinder, Niger, ZND',
            'Zouerate, Mauritania, OUZ',
            'Zurich (Zürich) - Kloten, Switzerland, ZRH',
        ];
        this.flightDetails = {
            ownerId: '',
            from: '',
            to: '',
            departureDate: '',
            customerId: '',
            customerName: '',
            guestName: '',
            guestMobile: '',
            guestEmail: '',
            bookByName: '',
            bookByNo: '',
            bookByEmail: '',
            price: 0,
            handlingCharges: '',
            flightNo: '',
            arrivalDate: '',
            flightNoReturn: '',
            flightNoConnecting: '',
            flightNoConnectingReturn: '',
            isInternational: 0,
            status: '',
            connectingFrom: '',
            connectingTo: '',
        };
        if (data.row != null) {
            this.editState = true;
            console.log(data.row);
            this.flightDetails = data.row;
            this.customerCtrl.setValue(data.row.customerName);
            this.bookByCtrl.setValue(data.row.bookByName);
            if (data.row.isInternational == 1) {
                this.internationalFlight = true;
                this.internationalToCtrl.setValue(data.row.to);
                this.internationalFromCtrl.setValue(data.row.from);
                if (data.row.flightNoConnecting != null) {
                    this.connectingFlight = true;
                    this.internationalConnectingToCtrl.setValue(data.row.connectingTo);
                    this.internationalConnectingFromCtrl.setValue(data.row.connectingFrom);
                }
                if (data.row.flightNoConnecting == null) {
                    this.connectingFlight = false;
                }
                if (data.row.flightNoReturn != null) {
                    this.roundTrip = true;
                    if (data.row.flightNoConnectingReturn != null) {
                        this.connectingReturnFlight = true;
                        this.internationalConnectingReturnToCtrl.setValue(data.row.connectingReturnTo);
                        this.internationalConnectingReturnFromCtrl.setValue(data.row.connectingReturnFrom);
                    }
                }
                else if (data.row.flightNoReturn == null) {
                    this.roundTrip = false;
                    this.connectingReturnFlight = false;
                }
            }
            else if (data.row.isInternational == 0) {
                this.internationalFlight = false;
                this.domesticToCtrl.setValue(data.row.to);
                this.domesticFromCtrl.setValue(data.row.from);
                if (data.row.flightNoConnecting != null) {
                    this.connectingFlight = true;
                    this.domesticConnectingToCtrl.setValue(data.row.connectingTo);
                    this.domesticConnectingFromCtrl.setValue(data.row.connectingFrom);
                }
                if (data.row.flightNoConnecting == null) {
                    this.connectingFlight = false;
                }
                if (data.row.flightNoReturn != null) {
                    this.roundTrip = true;
                    if (data.row.flightNoConnectingReturn != null) {
                        this.connectingReturnFlight = true;
                        this.domesticConnectingReturnToCtrl.setValue(data.row.connectingReturnTo);
                        this.domesticConnectingReturnFromCtrl.setValue(data.row.connectingReturnFrom);
                    }
                }
                else if (data.row.flightNoReturn == null) {
                    this.roundTrip = false;
                    this.connectingReturnFlight = false;
                }
            }
        }
        else {
            this.editState = false;
        }
    }
    BookairlineComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    BookairlineComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        console.log(this.internationalFlight);
        this.bookFlight = this.fb.group({
            guestName: [''],
            guestMobile: [''],
            guestEmail: [''],
            internationalRadioGroup: [''],
            connectingRadioGroup: [''],
            roundTripRadioGroup: [''],
            roundTripConnectingRadioGroup: [''],
            internationalFrom: [''],
            internationalTo: [''],
            from: [''],
            to: [''],
            departureDate: [''],
            arrivalDate: [''],
            bookByName: [''],
            bookByNo: [''],
            bookByEmail: [''],
            price: [''],
            handlingCharges: [''],
            flightNo: [''],
            flightNoReturn: [''],
            flightNoConnecting: [''],
            flightNoConnectingReturn: [''],
        });
        this.bookFlight.patchValue({
            'guestName': this.flightDetails.guestName,
            'guestMobile': this.flightDetails.guestMobile,
            'guestEmail': this.flightDetails.guestEmail,
            'departureDate': this.flightDetails.departureDate,
            'arrivalDate': this.flightDetails.arrivalDate,
            'bookByName': this.flightDetails.bookByName,
            'bookByNo': this.flightDetails.bookByNo,
            'bookByEmail': this.flightDetails.bookByEmail,
            'price': this.flightDetails.price,
            'handlingCharges': this.flightDetails.handlingCharges,
            'flightNo': this.flightDetails.flightNo,
        });
        if (this.internationalFlight == true) {
            this.bookFlight.patchValue({
                'internationalRadioGroup': 'international'
            });
        }
        if (this.internationalFlight == false) {
            this.bookFlight.patchValue({
                'internationalRadioGroup': 'domestic'
            });
        }
        if (this.connectingFlight == true) {
            this.bookFlight.patchValue({
                'connectingRadioGroup': 'yes',
                'flightNoConnecting': this.flightDetails.flightNoConnecting
            });
        }
        if (this.connectingFlight == false) {
            this.bookFlight.patchValue({
                'connectingRadioGroup': 'no'
            });
        }
        if (this.roundTrip == true) {
            this.bookFlight.patchValue({
                'roundTripRadioGroup': 'roundTrip',
                'flightNoReturn': this.flightDetails.flightNoReturn
            });
            if (this.connectingReturnFlight == true) {
                this.bookFlight.patchValue({
                    'roundTripConnectingRadioGroup': 'yes',
                    'flightNoConnectingReturn': this.flightDetails.flightNoConnectingReturn
                });
            }
        }
        if (this.roundTrip == false) {
            this.bookFlight.patchValue({
                'roundTripRadioGroup': 'singleTrip',
                'roundTripConnectingRadioGroup': 'no',
            });
        }
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            console.log(_this.user);
            if (_this.user.type == 'employee') {
                var body = {
                    userId: _this.user.id
                };
                _this.employeeService.getEmployeeForCustomer(body).subscribe(function (data) {
                    _this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(function (data) {
                        if (data.length != 0) {
                            _this.customers = data;
                            _this.customer = _this.customerCtrl.valueChanges
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterCustomer(val); }));
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
            _this.domesticAirportsFrom = _this.domesticFromCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterdomesticAirports(val); }));
            _this.domesticAirportsTo = _this.domesticToCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterdomesticAirports(val); }));
            _this.internationalAirportFrom = _this.internationalFromCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterinternationalAirports(val); }));
            _this.internationalAirportTo = _this.internationalToCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterinternationalAirports(val); }));
            _this.domesticConnectingAirportFrom = _this.domesticConnectingFromCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterdomesticAirports(val); }));
            _this.domesticConnectingAirportTo = _this.domesticConnectingToCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterdomesticAirports(val); }));
            _this.internationalConnectingAirportFrom = _this.internationalConnectingFromCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterinternationalAirports(val); }));
            _this.internationalConnectingAirportTo = _this.internationalConnectingToCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterinternationalAirports(val); }));
            _this.domesticConnectingReturnAirportFrom = _this.domesticConnectingReturnFromCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterdomesticAirports(val); }));
            _this.domesticConnectingReturnAirportTo = _this.domesticConnectingReturnToCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterdomesticAirports(val); }));
            _this.internationalConnectingReturnAirportFrom = _this.internationalConnectingReturnFromCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterinternationalAirports(val); }));
            _this.internationalConnectingReturnAirportTo = _this.internationalConnectingReturnToCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterinternationalAirports(val); }));
        });
    };
    BookairlineComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers(this.user).subscribe(function (data) {
            _this.customers = data;
            _this.customer = _this.customerCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterCustomer(val); }));
        });
    };
    BookairlineComponent.prototype.saveFlights = function () {
        var _this = this;
        if (this.internationalFlight == true) {
            this.flightDetails.isInternational = 1;
            this.flightDetails.from = this.internationalFromCtrl.value;
            this.flightDetails.to = this.internationalToCtrl.value;
        }
        if (this.internationalFlight == false) {
            this.flightDetails.from = this.domesticFromCtrl.value;
            this.flightDetails.to = this.domesticToCtrl.value;
        }
        if (this.connectingFlight == true) {
            this.flightDetails.flightNoConnecting = this.bookFlight.get('flightNoConnecting').value;
            if (this.internationalFlight == true) {
                this.flightDetails.connectingFrom = this.internationalConnectingFromCtrl.value;
                this.flightDetails.connectingTo = this.internationalConnectingToCtrl.value;
            }
            else {
                this.flightDetails.connectingFrom = this.domesticConnectingFromCtrl.value;
                this.flightDetails.connectingTo = this.domesticConnectingToCtrl.value;
            }
        }
        if (this.roundTrip == true) {
            this.flightDetails.arrivalDate = this.bookFlight.get('arrivalDate').value;
            this.flightDetails.arrivalDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.flightDetails.arrivalDate).format("YYYY-MM-DD");
            this.flightDetails.flightNoReturn = this.bookFlight.get('flightNoReturn').value;
            if (this.connectingReturnFlight == true) {
                this.flightDetails.flightNoConnectingReturn = this.bookFlight.get('flightNoConnectingReturn').value;
                if (this.internationalFlight == true) {
                    this.flightDetails.connectingReturnFrom = this.internationalConnectingReturnFromCtrl.value;
                    this.flightDetails.connectingReturnTo = this.internationalConnectingReturnToCtrl.value;
                }
                else {
                    this.flightDetails.connectingReturnFrom = this.domesticConnectingReturnFromCtrl.value;
                    this.flightDetails.connectingReturnTo = this.domesticConnectingReturnToCtrl.value;
                }
            }
        }
        this.flightDetails.guestName = this.bookFlight.get('guestName').value;
        this.flightDetails.guestMobile = this.bookFlight.get('guestMobile').value;
        this.flightDetails.guestEmail = this.bookFlight.get('guestEmail').value;
        this.flightDetails.departureDate = this.bookFlight.get('departureDate').value;
        this.flightDetails.departureDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.flightDetails.departureDate).format("YYYY-MM-DD");
        //moment(this.flightDetails.departureDate).format("YYYY-MM-DD");    
        this.flightDetails.bookByName = this.bookByCtrl.value;
        this.flightDetails.bookByNo = this.bookFlight.get('bookByNo').value;
        this.flightDetails.bookByEmail = this.bookFlight.get('bookByEmail').value;
        this.flightDetails.price = this.bookFlight.get('price').value;
        this.flightDetails.handlingCharges = this.bookFlight.get('handlingCharges').value;
        this.flightDetails.flightNo = this.bookFlight.get('flightNo').value;
        this.flightDetails.ownerId = this.user.ownerId;
        this.flightDetails.status = 'Booked';
        this.airlineService.addFlights(this.flightDetails).subscribe(function (data) {
            _this.activityLogs.addFlightLogs({
                flightBookingId: data.insertId,
                ownerId: _this.user.ownerId,
                message: "Booking created on " + __WEBPACK_IMPORTED_MODULE_4_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + _this.user.name
            }).subscribe();
        }, function (err) { }, function () {
            _this.ws.send(_this.user.ownerId + "airline");
            _this.snackBar.open("Flight Booking Added", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    BookairlineComponent.prototype.updateFlights = function () {
        var _this = this;
        if (this.internationalFlight == true) {
            this.flightDetails.isInternational = 1;
            this.flightDetails.from = this.internationalFromCtrl.value;
            this.flightDetails.to = this.internationalToCtrl.value;
        }
        if (this.internationalFlight == false) {
            this.flightDetails.from = this.domesticFromCtrl.value;
            this.flightDetails.to = this.domesticToCtrl.value;
        }
        if (this.connectingFlight == true) {
            this.flightDetails.flightNoConnecting = this.bookFlight.get('flightNoConnecting').value;
            if (this.internationalFlight == true) {
                this.flightDetails.connectingFrom = this.internationalConnectingFromCtrl.value;
                this.flightDetails.connectingTo = this.internationalConnectingToCtrl.value;
            }
            else {
                this.flightDetails.connectingFrom = this.domesticConnectingFromCtrl.value;
                this.flightDetails.connectingTo = this.domesticConnectingToCtrl.value;
            }
        }
        if (this.roundTrip == true) {
            this.flightDetails.arrivalDate = this.bookFlight.get('arrivalDate').value;
            this.flightDetails.arrivalDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.flightDetails.arrivalDate).format("YYYY-MM-DD");
            this.flightDetails.flightNoReturn = this.bookFlight.get('flightNoReturn').value;
            if (this.connectingReturnFlight == true) {
                this.flightDetails.flightNoConnectingReturn = this.bookFlight.get('flightNoConnectingReturn').value;
                if (this.internationalFlight == true) {
                    this.flightDetails.connectingReturnFrom = this.internationalConnectingReturnFromCtrl.value;
                    this.flightDetails.connectingReturnTo = this.internationalConnectingReturnToCtrl.value;
                }
                else {
                    this.flightDetails.connectingReturnFrom = this.domesticConnectingReturnFromCtrl.value;
                    this.flightDetails.connectingReturnTo = this.domesticConnectingReturnToCtrl.value;
                }
            }
        }
        this.flightDetails.guestName = this.bookFlight.get('guestName').value;
        this.flightDetails.guestMobile = this.bookFlight.get('guestMobile').value;
        this.flightDetails.guestEmail = this.bookFlight.get('guestEmail').value;
        this.flightDetails.departureDate = this.bookFlight.get('departureDate').value;
        this.flightDetails.departureDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.flightDetails.departureDate).format("YYYY-MM-DD");
        //moment(this.flightDetails.departureDate).format("YYYY-MM-DD");    
        this.flightDetails.bookByName = this.bookByCtrl.value;
        this.flightDetails.bookByNo = this.bookFlight.get('bookByNo').value;
        this.flightDetails.bookByEmail = this.bookFlight.get('bookByEmail').value;
        this.flightDetails.price = this.bookFlight.get('price').value;
        this.flightDetails.handlingCharges = this.bookFlight.get('handlingCharges').value;
        this.flightDetails.flightNo = this.bookFlight.get('flightNo').value;
        this.flightDetails.ownerId = this.user.ownerId;
        this.flightDetails.status = 'Booked';
        this.airlineService.updateFlights(this.flightDetails).subscribe(function (data) { }, function (err) { }, function () {
            _this.ws.send(_this.user.ownerId + "airline");
            _this.snackBar.open("Flight Booking Updated", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    BookairlineComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    BookairlineComponent.prototype.international = function () {
        this.internationalFlight = true;
    };
    BookairlineComponent.prototype.domestic = function () {
        this.internationalFlight = false;
    };
    BookairlineComponent.prototype.roundtrip = function () {
        this.roundTrip = true;
        console.log(this.roundTrip);
    };
    BookairlineComponent.prototype.singletrip = function () {
        this.roundTrip = false;
    };
    BookairlineComponent.prototype.connectingFlights = function () {
        this.connectingFlight = true;
    };
    BookairlineComponent.prototype.notConnectingFlight = function () {
        this.connectingFlight = false;
    };
    BookairlineComponent.prototype.connectingReturnFlights = function () {
        this.connectingReturnFlight = true;
    };
    BookairlineComponent.prototype.notConnectingReturnFlight = function () {
        this.connectingReturnFlight = false;
    };
    BookairlineComponent.prototype.setCustomer = function (temp, event) {
        var _this = this;
        if (event.source.selected == true) {
            this.flightDetails.customerId = temp.id;
            this.flightDetails.customerName = temp.name;
        }
        var tempCust = {
            ownerId: this.user.ownerId,
            customerId: temp.id
        };
        this.bookingService.getRecurringBookedBy(tempCust).subscribe(function (data) {
            _this.bookByArr = data;
            _this.bookBy = _this.bookByCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterBookBy(val); }));
        });
    };
    BookairlineComponent.prototype.setBookBy = function (option, event) {
        if (event.source.selected == true) {
            this.flightDetails.bookByName = option.name;
            this.flightDetails.bookByNo = option.phoneNo;
            this.flightDetails.bookByEmail = option.emailId;
            this.bookFlight.patchValue({
                'bookByNo': this.flightDetails.bookByNo,
                'bookByEmail': this.flightDetails.bookByEmail
            });
        }
    };
    BookairlineComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookairlineComponent.prototype.filterBookBy = function (val) {
        return this.bookByArr.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookairlineComponent.prototype.filterdomesticAirports = function (val) {
        return this.airports.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookairlineComponent.prototype.filterinternationalAirports = function (val) {
        return this.internationalAirports.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BookairlineComponent.prototype, "unloadHandler", null);
    BookairlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bookairline',
            template: __webpack_require__("./src/app/pages/airline/bookairline/bookairline.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/bookairline/bookairline.component.scss")]
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__airlinedisp_airline_service__["a" /* AirlineService */],
            __WEBPACK_IMPORTED_MODULE_5__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_8__operations_bookings_service__["a" /* BookingsService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["I" /* MatSnackBar */], Object, __WEBPACK_IMPORTED_MODULE_10__masters_new_employees_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_11__activitylog_service__["a" /* ActivitylogService */]])
    ], BookairlineComponent);
    return BookairlineComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/exportbookings/exportbookings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"width: 800px\">\n  <div class=\"col-lg-12 col-12\">    \n    <nb-card>      \n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field>\n              <mat-select [(ngModel)]=\"predefined\"  placeholder=\"Preset\" >\n                <mat-option *ngFor=\"let element of presets\" [value]=\"element.name\" (click)=\"predefinedRoles(element)\"> \n                  {{element.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-6 col-12\">\n            <form [formGroup]=\"preset\">\n              <mat-form-field>\n                <input matInput placeholder=\"Preset Name\" formControlName=\"permissionName\">\n                <mat-error>\n                  Enter a Permission Name to save as a preset\n                </mat-error>  \n              </mat-form-field>\n              <button mat-raised-button color=\"primary\" [disabled]=\"preset.invalid\" (click)=\"savePreset()\">Save Preset</button>\n            </form>\n            <!-- <button mat-icon-button class=\"close-button\" color=\"warn\" (click)=\"close()\"><mat-icon style=\"font-size: 25px;\">close</mat-icon></button> -->      \n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-12\">\n            Customer Name:\n            <mat-form-field class=\"w-100\">\n              <!-- <input aria-placeholder=\"Pick one\" (change)=\"setCustomer(option)\" name=\"cname\" [(ngModel)]=\"bookings.cname\" matInput [matAutocomplete]=\"custauto\"> -->\n              <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput [matAutocomplete]=\"custauto\" >\n              <mat-autocomplete #custauto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of customer |async\" [value]=\"option.name\" (onSelectionChange)=\"setCustomer(option,$event)\">\n                  {{ option.name }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>      \n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field class=\"w-100\">\n              Start Date\n              <input matInput [(ngModel)]=\"bookings.startDate\" [matDatepicker]=\"startDate\" (click)=\"startDate.open()\" readonly name=\"startDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n              <mat-datepicker #startDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field class=\"w-100\">\n              End Date\n              <input matInput [(ngModel)]=\"bookings.endDate\" [matDatepicker]=\"endDate\" (click)=\"endDate.open()\" readonly name=\"endDate\">         \n              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n              <mat-datepicker #endDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-12\">\n            <mat-checkbox [(ngModel)]=\"exportBookings.fromLoc\" (change)=\"change($event,&quot;fb.from as 'From'&quot;)\">\n              From\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.toLoc\" (change)=\"change($event,&quot;fb.to as 'To'&quot;)\">\n              To\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.departureDate\" (change)=\"change($event,&quot;fb.departureDate as 'Departure Date'&quot;)\">\n              Departure Date\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.customerName\" (change)=\"change($event,&quot;fb.customerName as 'Customer Name'&quot;)\">\n              Customer Name\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.bookByName\" (change)=\"change($event,&quot;fb.bookByName as 'Book By'&quot;)\">\n              Book By\n            </mat-checkbox><br><mat-checkbox [(ngModel)]=\"exportBookings.bookByNo\" (change)=\"change($event,&quot;fb.bookByNo as 'Book By Number'&quot;)\">\n              Book By Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.guestName\" (change)=\"change($event,&quot;fb.guestName as 'Guest Name'&quot;)\">\n              Guest Name\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.price\" (change)=\"change($event,&quot;fb.price as 'Price'&quot;)\">\n              Price\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.guestMobile\" (change)=\"change($event,&quot;fb.guestMobile as 'Guest Mobile Number'&quot;)\">\n              Guest Mobile\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.handlingCharges\" (change)=\"change($event,&quot;fb.handlingCharges as 'Handling Charges'&quot;)\">\n              Handling Charges\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.flightNo\" (change)=\"change($event,&quot;fb.flightNo as 'Flight Number'&quot;)\">\n              Flight Number\n            </mat-checkbox><br>\n          </div>\n          <div class=\"col-lg-4 col-12\">\n            <mat-checkbox [(ngModel)]=\"exportBookings.arrivalDate\" (change)=\"change($event,&quot;fb.arrivalDate as 'Arrival Date'&quot;)\">\n              Arrival Date\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.flightNoReturn\" (change)=\"change($event,&quot;fb.flightNoReturn as 'Flight Number Return'&quot;)\">\n              Flight Number Return\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.flightNoConnecting\" (change)=\"change($event,&quot;fb.flightNoConnecting as 'Flight Number Connecting'&quot;)\">\n              Flight Number Connecting\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.flightNoConnectingReturn\" (change)=\"change($event,&quot;fb.flightNoConnectingReturn as 'Flight Number Connecting Return'&quot;)\">\n              Flight Number Connnecting Return\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.isInternational\" (change)=\"change($event,&quot;fb.international as 'International'&quot;)\">\n              International\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.status\" (change)=\"change($event,&quot;fb.status as 'Status'&quot;)\">\n              Status\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.connectingReturnFrom\" (change)=\"change($event,&quot;fb.connectingReturnFrom as 'Connecting Return From'&quot;)\">\n              Connecting Return From \n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.connectingReturnTo\" (change)=\"change($event,&quot;fb.connectingReturnTo as 'Connecting Return To'&quot;)\">\n              Connecting Return To\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoiceNumber\" (change)=\"change($event,&quot;iv.invoiceNumber as 'Invoice Number'&quot;)\">\n              Invoice Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoiceDate\" (change)=\"change($event,&quot;iv.invoiceDate as 'Invoice Date'&quot;)\">\n              Invoice Date\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoicePeriodFrom\" (change)=\"change($event,&quot;iv.invoicePeriodFrom as 'Invoice Period From'&quot;)\">\n              Invoice Period From\n            </mat-checkbox><br>\n          </div>\n          <div class=\"col-lg-4 col-12\">\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoicePeriodTo\" (change)=\"change($event,&quot;iv.invoicePeriodTo as 'Invoice Period To'&quot;)\">\n              Invoice Period To\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.poNumber\" (change)=\"change($event,&quot;iv.poNumber as 'PO Number'&quot;)\">\n              PO Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.ccNumber\" (change)=\"change($event,&quot;iv.ccNumber as 'CC Number'&quot;)\">\n              CC Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.totalAmount\" (change)=\"change($event,&quot;iv.totalAmount as 'totalAmount'&quot;)\">\n              Total Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.taxType\" (change)=\"change($event,&quot;iv.taxType as 'Tax Type'&quot;)\">\n              Tax Type\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.taxRate\" (change)=\"change($event,&quot;iv.taxRate as 'Tax Rate'&quot;)\">\n              Tax Rate\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.taxAmount\" (change)=\"change($event,&quot;iv.taxAmount as 'Tax Amount'&quot;)\">\n              Tax Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.discountType\" (change)=\"change($event,&quot;iv.discountType as 'Discount Type'&quot;)\">\n              Discount Type\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.discountAmount\" (change)=\"change($event,&quot;iv.discountAmount as 'Discount Amount'&quot;)\">\n              Discount Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoiceStatus\" (change)=\"change($event,&quot;iv.status as 'Invoice Status'&quot;)\">\n              Invoice Status\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.advancedReceived\" (change)=\"change($event,&quot;iv.advanceReceived as 'Advanced Received'&quot;)\">\n              Advanced Received\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.extraCharges\" (change)=\"change($event,&quot;sum(ie.amount) as 'Total Extra Charges'&quot;)\">\n              Extra Charges\n            </mat-checkbox><br> \n          </div>                             \n      </div>\n    </nb-card-body>\n  </nb-card>    \n</div>\n</div>\n<div class=\"row ptb-10\">\n<div class=\"col-lg-12 col-12\">\n  <button mat-raised-button color=\"primary\" (click)=\"getFlightBookings()\">Export</button>\n  <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">Close</button>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/airline/exportbookings/exportbookings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/exportbookings/exportbookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportbookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masters_new_employees_employee_service__ = __webpack_require__("./src/app/pages/masters/new-employees/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
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
    function ExportbookingsComponent(auth, dialogRef, http, fb, customerService, employeeService, snackBar) {
        this.auth = auth;
        this.dialogRef = dialogRef;
        this.http = http;
        this.fb = fb;
        this.customerService = customerService;
        this.employeeService = employeeService;
        this.snackBar = snackBar;
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.permissionName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.user = {};
        this.columns = [];
        this.bookings = {
            startDate: '',
            endDate: ''
        };
        this.exportBookings = {};
    }
    ExportbookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.exportBookings.ownerId = _this.user.ownerId;
            _this.getFlightProfiles(_this.user).subscribe(function (data) {
                console.log(data);
                _this.presets = data;
            });
            if (_this.user.type == 'employee') {
                var body = {
                    userId: _this.user.id
                };
                _this.employeeService.getEmployeeForCustomer(body).subscribe(function (data) {
                    _this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(function (data) {
                        console.log(data);
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
        });
        this.preset = this.fb.group({
            permissionName: ['']
        });
    };
    ExportbookingsComponent.prototype.predefinedRoles = function (temp) {
        this.columns = [];
        this.exportBookings = temp;
        if (this.exportBookings.fromLoc) {
            this.columns.push("fb.from as 'From Location'");
        }
        if (this.exportBookings.toLoc) {
            this.columns.push("fb.to as 'To Location'");
        }
        if (this.exportBookings.fromLoc) {
            this.columns.push("fb.from as 'From Location'");
        }
        if (this.exportBookings.departureDate) {
            this.columns.push("fb.departureDate as 'Departure Date'");
        }
        if (this.exportBookings.customerName) {
            this.columns.push("fb.customerName as 'Customer Name'");
        }
        if (this.exportBookings.bookByName) {
            this.columns.push("fb.bookByName as 'Booked By'");
        }
        if (this.exportBookings.bookByNo) {
            this.columns.push("fb.bookByNo as 'Booked By No'");
        }
        if (this.exportBookings.bookByEmail) {
            this.columns.push("fb.bookByEmail as 'Booked By Email'");
        }
        if (this.exportBookings.guestName) {
            this.columns.push("fb.guestName as 'Guest Name'");
        }
        if (this.exportBookings.handlingCharges) {
            this.columns.push("fb.handlingCharges as 'Handling Charges'");
        }
        if (this.exportBookings.flightNo) {
            this.columns.push("fb.flightNo as 'Flight Number'");
        }
        if (this.exportBookings.arrivalDate) {
            this.columns.push("fb.arrivalDate as 'Arrival Date'");
        }
        if (this.exportBookings.flightNoReturn) {
            this.columns.push("fb.flightNoReturn as 'Flight No Return'");
        }
        if (this.exportBookings.flightNoConnecting) {
            this.columns.push("fb.flightNoConnecting as 'FlightNoConnecting'");
        }
        if (this.exportBookings.flightNoConnectingReturn) {
            this.columns.push("fb.flightNoConnectingReturn as 'Booked By Email'");
        }
        if (this.exportBookings.isInternational) {
            this.columns.push("fb.isInternational as 'International'");
        }
        if (this.exportBookings.status) {
            this.columns.push("fb.status as 'Status'");
        }
        if (this.exportBookings.connectingReturnFrom) {
            this.columns.push("fb.connectingReturnFrom as 'Connecting Return From'");
        }
        if (this.exportBookings.connectingReturnTo) {
            this.columns.push("fb.connectingReturnTo as 'Connecting Return To'");
        }
        if (this.exportBookings.invoiceNumber) {
            this.columns.push("iv.invoiceNumber as 'Invoice Number'");
        }
        if (this.exportBookings.invoiceDate) {
            this.columns.push("iv.invoiceDate as 'Invoice Date'");
        }
        if (this.exportBookings.invoicePeriodFrom) {
            this.columns.push("iv.invoicePeriodFrom as 'Invoice Period'");
        }
        if (this.exportBookings.invoicePeriodTo) {
            this.columns.push("iv.invoicePeriodTo as 'Invoice Period To'");
        }
        if (this.exportBookings.poNumber) {
            this.columns.push("iv.poNumber as 'PO Number'");
        }
        if (this.exportBookings.ccNumber) {
            this.columns.push("iv.ccNumber as 'CC Number'");
        }
        if (this.exportBookings.totalAmount) {
            this.columns.push("iv.totalAmount as 'totalAmount'");
        }
        if (this.exportBookings.taxType) {
            this.columns.push("iv.taxType as 'Tax Type'");
        }
        if (this.exportBookings.taxRate) {
            this.columns.push("iv.taxRate as 'Tax Rate'");
        }
        if (this.exportBookings.taxAmount) {
            this.columns.push("iv.taxAmount as 'Tax Amount'");
        }
        if (this.exportBookings.discountType) {
            this.columns.push("iv.discountType as 'Discount Type'");
        }
        if (this.exportBookings.discountAmount) {
            this.columns.push("iv.discountAmount as 'Discount Amount'");
        }
        if (this.exportBookings.advancedReceived) {
            this.columns.push("iv.advanceReceived as 'Advanced Received'");
        }
        if (this.exportBookings.extraCharges) {
            this.columns.push("sum(ie.amount) as 'Total Extra Charges'");
        }
        console.log(this.columns);
    };
    ExportbookingsComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers(this.user).subscribe(function (data) {
            console.log(data);
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
    ExportbookingsComponent.prototype.getFlightBookings = function () {
        var _this = this;
        var temp = {
            columns: this.columns
        };
        this.getFlightBookingsForExport(temp).subscribe(function (data) {
            console.log(data);
            _this.hotelData = data;
        });
    };
    ExportbookingsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
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
    ExportbookingsComponent.prototype.savePreset = function () {
        var _this = this;
        this.exportBookings.name = this.preset.get('permissionName').value;
        this.addFlightProfiles(this.exportBookings).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Preset Saved", "X", { duration: 3000 });
        });
    };
    ExportbookingsComponent.prototype.getFlightBookingsForExport = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/airline/getFlightBookingForExports', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExportbookingsComponent.prototype.addFlightProfiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/airline/addFlightBookingExportsProfiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExportbookingsComponent.prototype.getFlightProfiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/airline/getFlightBookingExportsProfiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExportbookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'exportbookings',
            template: __webpack_require__("./src/app/pages/airline/exportbookings/exportbookings.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/exportbookings/exportbookings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_5__masters_new_employees_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSnackBar */]])
    ], ExportbookingsComponent);
    return ExportbookingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/exportvisa/exportvisa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-12\">    \n    <nb-card>      \n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field>\n              <mat-select [(ngModel)]=\"predefined\"  placeholder=\"Preset\" >\n                <mat-option *ngFor=\"let element of presets\" [value]=\"element.name\" (click)=\"predefinedRoles(element)\"> \n                  {{element.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-6 col-12\">\n            <form [formGroup]=\"preset\">\n              <mat-form-field>\n                <input matInput placeholder=\"Preset Name\" formControlName=\"permissionName\">\n                <mat-error>\n                  Enter a Permission Name to save as a preset\n                </mat-error>  \n              </mat-form-field>\n              <button mat-raised-button color=\"primary\" [disabled]=\"preset.invalid\" (click)=\"savePreset()\">Save Preset</button>\n            </form>\n            <!-- <button mat-icon-button class=\"close-button\" color=\"warn\" (click)=\"close()\"><mat-icon style=\"font-size: 25px;\">close</mat-icon></button> -->      \n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-12\">\n            Customer Name:\n            <mat-form-field class=\"w-100\">\n              <!-- <input aria-placeholder=\"Pick one\" (change)=\"setCustomer(option)\" name=\"cname\" [(ngModel)]=\"bookings.cname\" matInput [matAutocomplete]=\"custauto\"> -->\n              <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput [matAutocomplete]=\"custauto\" >\n              <mat-autocomplete #custauto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of customer |async\" [value]=\"option.name\" (onSelectionChange)=\"setCustomer(option,$event)\">\n                  {{ option.name }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>      \n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field class=\"w-100\">\n              Start Date\n              <input matInput [(ngModel)]=\"bookings.startDate\" [matDatepicker]=\"startDate\" (click)=\"startDate.open()\" readonly name=\"startDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n              <mat-datepicker #startDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field class=\"w-100\">\n              End Date\n              <input matInput [(ngModel)]=\"bookings.endDate\" [matDatepicker]=\"endDate\" (click)=\"endDate.open()\" readonly name=\"endDate\">         \n              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n              <mat-datepicker #endDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-checkbox [(ngModel)]=\"exportBookings.fromLoc\" (change)=\"change($event,&quot;fb.from as 'From'&quot;)\">\n              From\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.toLoc\" (change)=\"change($event,&quot;fb.to as 'To'&quot;)\">\n              To\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.departureDate\" (change)=\"change($event,&quot;fb.departureDate as 'Departure Date'&quot;)\">\n              Departure Date\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.customerName\" (change)=\"change($event,&quot;fb.customerName as 'Customer Name'&quot;)\">\n              Customer Name\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.bookByName\" (change)=\"change($event,&quot;fb.bookByName as 'Book By'&quot;)\">\n              Book By\n            </mat-checkbox><br><mat-checkbox [(ngModel)]=\"exportBookings.bookByNo\" (change)=\"change($event,&quot;fb.bookByNo as 'Book By Number'&quot;)\">\n              Book By Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.guestName\" (change)=\"change($event,&quot;fb.guestName as 'Guest Name'&quot;)\">\n              Guest Name\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.price\" (change)=\"change($event,&quot;fb.price as 'Price'&quot;)\">\n              Price\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.guestMobile\" (change)=\"change($event,&quot;fb.guestMobile as 'Guest Mobile Number'&quot;)\">\n              Guest Mobile\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.handlingCharges\" (change)=\"change($event,&quot;fb.handlingCharges as 'Handling Charges'&quot;)\">\n              Handling Charges\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.flightNo\" (change)=\"change($event,&quot;fb.flightNo as 'Flight Number'&quot;)\">\n              Flight Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.arrivalDate\" (change)=\"change($event,&quot;fb.arrivalDate as 'Arrival Date'&quot;)\">\n              Arrival Date\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.flightNoReturn\" (change)=\"change($event,&quot;fb.flightNoReturn as 'Flight Number Return'&quot;)\">\n              Flight Number Return\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.flightNoConnecting\" (change)=\"change($event,&quot;fb.flightNoConnecting as 'Flight Number Connecting'&quot;)\">\n              Flight Number Connecting\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.flightNoConnectingReturn\" (change)=\"change($event,&quot;fb.flightNoConnectingReturn as 'Flight Number Connecting Return'&quot;)\">\n              Flight Number Connnecting Return\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.isInternational\" (change)=\"change($event,&quot;fb.international as 'International'&quot;)\">\n              International\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.status\" (change)=\"change($event,&quot;fb.status as 'Status'&quot;)\">\n              Status\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.connectingReturnFrom\" (change)=\"change($event,&quot;fb.connectingReturnFrom as 'Connecting Return From'&quot;)\">\n              Connecting Return From \n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.connectingReturnTo\" (change)=\"change($event,&quot;fb.connectingReturnTo as 'Connecting Return To'&quot;)\">\n              Connecting Return To\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoiceNumber\" (change)=\"change($event,&quot;iv.invoiceNumber as 'Invoice Number'&quot;)\">\n              Invoice Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoiceDate\" (change)=\"change($event,&quot;iv.invoiceDate as 'Invoice Date'&quot;)\">\n              Invoice Date\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoicePeriodFrom\" (change)=\"change($event,&quot;iv.invoicePeriodFrom as 'Invoice Period From'&quot;)\">\n              Invoice Period From\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoicePeriodTo\" (change)=\"change($event,&quot;iv.invoicePeriodTo as 'Invoice Period To'&quot;)\">\n              Invoice Period To\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.poNumber\" (change)=\"change($event,&quot;iv.poNumber as 'PO Number'&quot;)\">\n              PO Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.ccNumber\" (change)=\"change($event,&quot;iv.ccNumber as 'CC Number'&quot;)\">\n              CC Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.totalAmount\" (change)=\"change($event,&quot;iv.totalAmount as 'totalAmount'&quot;)\">\n              Total Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.taxType\" (change)=\"change($event,&quot;iv.taxType as 'Tax Type'&quot;)\">\n              Tax Type\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.taxRate\" (change)=\"change($event,&quot;iv.taxRate as 'Tax Rate'&quot;)\">\n              Tax Rate\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.taxAmount\" (change)=\"change($event,&quot;iv.taxAmount as 'Tax Amount'&quot;)\">\n              Tax Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.discountType\" (change)=\"change($event,&quot;iv.discountType as 'Discount Type'&quot;)\">\n              Discount Type\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.discountAmount\" (change)=\"change($event,&quot;iv.discountAmount as 'Discount Amount'&quot;)\">\n              Discount Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoiceStatus\" (change)=\"change($event,&quot;iv.status as 'Invoice Status'&quot;)\">\n              Invoice Status\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.advancedReceived\" (change)=\"change($event,&quot;iv.advanceReceived as 'Advanced Received'&quot;)\">\n              Advanced Received\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.extraCharges\" (change)=\"change($event,&quot;sum(ie.amount) as 'Total Extra Charges'&quot;)\">\n              Extra Charges\n            </mat-checkbox><br>\n            \n        </div>                             \n      </div>\n    </nb-card-body>\n  </nb-card>    \n</div>\n</div>\n<div class=\"row ptb-10\">\n<div class=\"col-lg-12 col-12\">\n  <button mat-raised-button color=\"primary\" (click)=\"getVisaBookings()\">Export</button>\n  <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">Close</button>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/airline/exportvisa/exportvisa.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/exportvisa/exportvisa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportvisaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__masters_new_employees_employee_service__ = __webpack_require__("./src/app/pages/masters/new-employees/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExportvisaComponent = (function () {
    function ExportvisaComponent(auth, dialogRef, http, fb, customerService, employeeService) {
        this.auth = auth;
        this.dialogRef = dialogRef;
        this.http = http;
        this.fb = fb;
        this.customerService = customerService;
        this.employeeService = employeeService;
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.permissionName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.user = {};
        this.columns = [];
        this.bookings = {
            startDate: '',
            endDate: ''
        };
        this.exportBookings = {};
    }
    ExportvisaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.getVisaBookingsProfiles(_this.user).subscribe(function (data) {
                console.log(data);
                _this.presets = data;
            });
            if (_this.user.type == 'employee') {
                var body = {
                    userId: _this.user.id
                };
                _this.employeeService.getEmployeeForCustomer(body).subscribe(function (data) {
                    _this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(function (data) {
                        console.log(data);
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
        });
        this.preset = this.fb.group({
            permissionName: ['']
        });
    };
    ExportvisaComponent.prototype.predefinedRoles = function () {
    };
    ExportvisaComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers(this.user).subscribe(function (data) {
            console.log(data);
            _this.customers = data;
            _this.customer = _this.customerCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
        });
    };
    ExportvisaComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    ExportvisaComponent.prototype.change = function (event, temp) {
    };
    ExportvisaComponent.prototype.closeDialog = function () {
    };
    ExportvisaComponent.prototype.savePreset = function () {
    };
    ExportvisaComponent.prototype.getVisaBookings = function () {
    };
    ExportvisaComponent.prototype.getVisaBookingsProfiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/airline/getFlightBookingExportsProfiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExportvisaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'exportvisa',
            template: __webpack_require__("./src/app/pages/airline/exportvisa/exportvisa.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/exportvisa/exportvisa.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_6__masters_new_employees_employee_service__["a" /* EmployeeService */]])
    ], ExportvisaComponent);
    return ExportvisaComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/flightticket/flightticket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-body style=\"min-width:50vw;\">\n        <div class=\"row\" style=\"min-height: 20vh;\">\n          <div class=\"col-lg-12 col-12\" style=\"margin: auto;text-align: center;\" *ngIf=\"data.row.flightNo\">\n            <b>Upload Ticket</b>\n            <br>\n            <button style=\"margin-top: 10px;\" (click)=\"ticket.click()\" mat-raised-button color=\"primary\" [disabled]=\"isUploading\"><mat-icon>cloud_upload</mat-icon>Browse</button>\n            <input type=\"file\" #ticket accept=\"application/msword, application/pdf, image/*\" name=\"ticket\" hidden (change)=\"Upload($event)\">\n            <br>\n            <table style=\"width:100%;margin-top: 10px;\" *ngIf=\"sTicket\">\n              <tr>\n                <td>File Name: {{ticketName}}</td><td>Size: {{ticketSize}}</td><td><button mat-icon-button (click)=\"removeTicket()\"><mat-icon>clear</mat-icon></button></td>\n              </tr>\n            </table>    \n          </div>\n        </div>\n        <div class=\"row\" style=\"min-height: 20vh;\" *ngIf=\"data.row.flightNoReturn\">\n          <hr>\n          <div class=\"col-lg-12 col-12\" style=\"margin-top: 10px; text-align: center;\">\n            <b>Upload Return Ticket</b>\n            <br>\n            <button style=\"margin-top: 10px;\" (click)=\"returnTicket.click()\" mat-raised-button color=\"primary\"><mat-icon>cloud_upload</mat-icon>Browse</button>\n            <input type=\"file\" #returnTicket accept=\"application/msword, application/pdf, image/*\" name=\"returnTicket\" hidden (change)=\"Upload($event)\">\n            <br>\n            <table style=\"width:100%;margin-top: 10px;\" *ngIf=\"rTicket\">\n              <tr>\n                <td>File Name: {{returnTicketName}}</td><td>Size: {{returnTicketSize}}</td><td><button mat-icon-button (click)=\"removeReturnTicket()\"><mat-icon>clear</mat-icon></button></td>\n              </tr>\n            </table> \n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12 col-12\">\n    <button (click)=\"saveTickets()\" mat-raised-button color=\"primary\" *ngIf=\"!isUploading\">Save</button>\n    <button mat-raised-button color=\"primary\" disabled *ngIf=\"isUploading\"><mat-icon class=\"fa fa-refresh\"></mat-icon>Uploading</button>\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/airline/flightticket/flightticket.component.scss":
/***/ (function(module, exports) {

module.exports = "td {\n  border: 1px solid lightgrey; }\n"

/***/ }),

/***/ "./src/app/pages/airline/flightticket/flightticket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightticketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__airlinedisp_airline_service__ = __webpack_require__("./src/app/pages/airline/airlinedisp/airline.service.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var FlightticketComponent = (function () {
    function FlightticketComponent(snackBar, dialog, http, airlineService, auth, data) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.http = http;
        this.airlineService = airlineService;
        this.auth = auth;
        this.data = data;
        this.selectedFile = [undefined, undefined];
        this.user = {};
        this.isUploading = false;
        this.ticket = false;
        this.sTicket = false;
        this.rTicket = false;
        if (data.row != null) {
            this.flightDetails = data.row;
        }
    }
    FlightticketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
        });
    };
    FlightticketComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    FlightticketComponent.prototype.Upload = function (event) {
        if (event.srcElement.name == 'ticket') {
            this.selectedFile[0] = event.target.files[0];
            this.sTicket = true;
            this.ticketName = this.selectedFile[0].name;
            this.ticketSize = Number(this.selectedFile[0].size / 1024 / 1024).toFixed(2) + ' MB';
        }
        if (event.srcElement.name == 'returnTicket') {
            this.selectedFile[1] = event.target.files[0];
            this.rTicket = true;
            this.returnTicketName = this.selectedFile[1].name;
            this.returnTicketSize = Number(this.selectedFile[1].size / 1024 / 1024).toFixed(2) + ' MB';
        }
    };
    FlightticketComponent.prototype.uploadPics = function () {
        var _this = this;
        var fileName = this.flightDetails.id + "_" + this.flightDetails.flightNo + "_" + this.flightDetails.from + "_" + this.flightDetails.departureDate;
        var i = 0;
        var tempFileName;
        var uploadData = new FormData();
        this.selectedFile.forEach(function (file) {
            if (file != undefined) {
                if (i == 0) {
                    tempFileName = _this.user.companyName + "/flightTickets/" + fileName + "_One Way.pdf";
                    _this.flightDetails.ticket = fileName + "_One Way.pdf";
                }
                if (i == 1) {
                    tempFileName = _this.user.companyName + "/flightTickets/" + fileName + "Return.pdf";
                    _this.flightDetails.returnTicket = fileName + "Return.pdf";
                }
                uploadData.append(tempFileName, file, 'ticket');
                console.log(uploadData);
            }
            i++;
        });
        setTimeout(function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            var body = JSON.stringify({ headers: headers });
            return _this.http.post("/files/uploadS3", uploadData, body).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.success) {
                    _this.snackBar.open("Flight Details Updated", "X", { duration: 3000 });
                    _this.isUploading = false;
                }
            });
            ;
        }, 500);
    };
    FlightticketComponent.prototype.saveTickets = function () {
        var _this = this;
        if (this.selectedFile[0] != undefined) {
            this.isUploading = true;
            this.airlineService.updateFlights(this.flightDetails).subscribe(function (data) {
                _this.uploadPics();
            });
        }
        else {
            this.snackBar.open("Nothing to upload", "X", { duration: 3000 });
        }
    };
    FlightticketComponent.prototype.removeTicket = function () {
        this.selectedFile[0] = undefined;
        this.sTicket = false;
        this.ticketName = '';
        this.ticketSize = '';
    };
    FlightticketComponent.prototype.removeReturnTicket = function () {
        this.selectedFile[1] = undefined;
        this.rTicket = false;
        this.returnTicketName = '';
        this.returnTicketSize = '';
    };
    FlightticketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'flightticket',
            template: __webpack_require__("./src/app/pages/airline/flightticket/flightticket.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/flightticket/flightticket.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__airlinedisp_airline_service__["a" /* AirlineService */],
            __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */], Object])
    ], FlightticketComponent);
    return FlightticketComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/sendairlineconfirmation/sendairlineconfirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"min-width:60vw;\">\n    <div class=\"col-lg-12\">\n      <nb-card>\n        <nb-card-header>Contact</nb-card-header>\n        <nb-card-body>\n          <div class=\"call-container\">\n            <mat-accordion *ngIf=\"logDisplay.length>0\">\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title style=\"justify-content: center;\">\n                    Logs\n                  </mat-panel-title>\n                  <mat-panel-description style=\"justify-content: center;\">\n                    Click here to open logs\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n                <div *ngFor=\"let element of logDisplay\" style=\"text-align: center;color:brown;\">\n                  {{element.log}}\n                </div>\n              </mat-expansion-panel>\n            </mat-accordion>\n            <div style=\"margin-top:15px;\">\n              <table class=\"callTable\">\n                <tbody>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Customer: </b> {{customer.name}}\n                    </td>\n                    <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                      <mat-checkbox (change)=\"sendSMS($event,customer.phone,'customer',customer.name)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,customer.phone,'customer',customer.name)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,customer.email,'customer',customer.name)\">E-mail</mat-checkbox><br>\n                      <mat-checkbox *ngIf=\"booking.ticket!=null || booking.returnTicket!=null\" [(ngModel)]=\"ticketCustomer\">Attach Ticket</mat-checkbox>             \n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Number: </b> {{customer.phone}}\n                      <button (click)=\"makeAppCall(customer.phone)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Email: </b> {{customer.email}}\n                    </td>\n                  </tr>\n                </tbody>\n                <tbody *ngFor=\"let element of allBookedBy;\">\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Booked By: </b> {{element.bookByName}}\n                    </td>\n                    <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                      <mat-checkbox (change)=\"sendSMS($event,element.bookByNo,'bookedBy',element.bookByName)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,element.bookByNo,'bookedBy',element.bookByName)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,element.bookByEmail,'bookedBy')\">E-mail</mat-checkbox><br>\n                      <mat-checkbox *ngIf=\"booking.ticket!=null || booking.returnTicket!=null\" [(ngModel)]=\"ticketBookBy\">Attach Ticket</mat-checkbox>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Number: </b> {{element.bookByNo}}\n                      <button (click)=\"makeAppCall(element.bookByNo)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Email: </b> {{element.bookByEmail}}\n                    </td>\n                  </tr>\n                </tbody>\n                <tbody *ngFor=\"let temp of allPassengers\">\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Passenger: </b> {{temp.passenger}}\n                    </td>\n                    <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                      <mat-checkbox (change)=\"sendSMS($event,temp.passengerNo,'passenger',temp.passenger)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,temp.passengerNo,'passenger',temp.passenger)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,temp.passengerEmail,'passenger',temp.passenger)\">E-mail</mat-checkbox><br>\n                      <mat-checkbox *ngIf=\"booking.ticket!=null || booking.returnTicket!=null\" [(ngModel)]=\"ticketPassenger\">Attach Ticket</mat-checkbox>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Number: </b> {{temp.passengerNo}} \n                      <button (click)=\"makeAppCall(temp.passengerNo)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Email: </b> {{temp.passengerEmail}}\n                    </td>\n                  </tr>\n                </tbody>\n                <tbody>\n                  <tr>\n                    <td class=\"callCell\">\n                      <mat-form-field>\n                        <b>Custom Phone: </b>\n                        <input matInput [(ngModel)]=\"customNumber\">\n                      </mat-form-field>   \n                      <br>\n                      <mat-checkbox (change)=\"sendSMS($event,customNumber,'custom')\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,customNumber,'custom')\">WhatApp</mat-checkbox>                   \n                    </td>\n                    <td class=\"callCell\" style=\"padding-left: 30px\">\n                      <mat-form-field>\n                        <b>Custom Email: </b>\n                        <input matInput [(ngModel)]=\"customEmail\">\n                      </mat-form-field>        \n                    </td>\n                  </tr>                  \n                </tbody>\n              </table> \n            </div>\n            <div class=\"invoice-button-container\" style=\"margin-top: 10px;\">\n              <div style=\"width: 60%;margin:auto;\">\n                <label style=\"text-align: left;font-size:14px;\">\n                  <p>Flight No(s): <span>{{data.row.flightNo}}</span> <span *ngIf=\"data.row.flightNoConnecting\">, {{data.row.flightNoConnecting}}</span></p>\n                  <p><span>{{data.row.from}}-{{data.row.to}}</span> <span *ngIf=\"data.row.flightNoConnecting\">, {{data.row.connectingFrom}}-{{data.row.connectingTo}}</span></p>\n                  <p>Date: {{data.row.departureDate}}</p>\n                  <p *ngIf=\"data.row.flightNoReturn\">Flight No(s): <span>{{data.row.flightNoReturn}}</span> <span *ngIf=\"data.row.flightNoConnecting\">, {{data.row.flightNoConnectingReturn}}</span></p>\n                  <p *ngIf=\"data.row.flightNoReturn\"><span>{{data.row.to}}-{{data.row.from}}</span> <span *ngIf=\"data.row.flightNoConnecting\">, {{data.row.connectingTo}}-{{data.row.connectingFrom}}</span></p>\n                  <p *ngIf=\"data.row.flightNoReturn\">Date: {{data.row.arrivalDate}}</p>\n                </label>\n                <hr style=\"border-top:1px solid black\">\n              </div>\n              <button class=\"invoice-button\" color=\"primary\" mat-raised-button (click)=\"send()\">Send</button>\n              <button *ngIf=\"!mailPassenger\" (click)=\"mailPassenger = true\" class=\"invoice-button\" mat-raised-button color=\"primary\" >Preview E-mail</button>            \n              <button *ngIf=\"mailPassenger\" class=\"invoice-button\" mat-raised-button color=\"primary\" (click)=\"mailPassenger=false; mailSupplier=false\">Close Preview</button>\n            </div>\n  \n            <mat-divider></mat-divider>\n            <div [hidden]=\"!mailPassenger\">\n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-12\">          \n            <div #dutyPassengerTemplate id=\"dutyPassengerTemplate\">\n      <!DOCTYPE html>\n      <html lang=\"en\">          \n        <head>\n          <title></title>\n          <meta charset=\"utf-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n          <style type=\"text/css\">\n            @font-face {font-family: 'sofia';  src: url('http://media.firebox.com/fonts/sofiapro_regular_macroman/SofiaProRegular-webfont.woff') format('woff');  mso-font-alt: 'Arial';  font-weight: normal !important;  font-style: normal !important;}\n            body,table,td,a{\n              -webkit-text-size-adjust:100%;\n              -ms-text-size-adjust:100%;\n              -webkit-font-smoothing: antialiased;\n            }\n            table,td{\n              mso-table-lspace:0pt;\n              mso-table-rspace:0pt;\n            }\n            img{\n              -ms-interpolation-mode:bicubic;\n            }\n            body{\n              margin:0;\n              padding:0;\n            }\n            img{\n              border:0;\n              height:auto;\n              line-height:100%;\n              outline:none;\n              text-decoration:none;\n            }\n            table{\n              border-collapse:collapse !important;\n            }\n            body{\n              height:100% !important;\n              margin:0;\n              padding:0;\n              width:100% !important;\n            }\n          \n            .appleBody a{\n              color: #0087DB !important;\n              text-decoration: underline !important;;\n            }\n          \n            .appleFooter a{\n              color: #343434 !important;\n              text-decoration: none;\n            }\n            td[class=btn]{\n              width:50% !important;\n            }\n          \n            span.preheader { display: none !important; }\n            @media screen and (max-width: 525px){\n              table[class=wrapper]{\n                width:100% !important;\n              }\n            \n            }\t/*@media screen and (max-width: 525px){\n              td[class=wrapper]{\n                width:100% !important;\n              }*/\n            \n            @media screen and (max-width: 525px){\n              td[class=mobile-hide]{\n                display:none;\n              }\n            \n            }\n            @media screen and (max-width: 525px){\n              img[class=mobile-show]{\n                display:block !important;\n                height:60px !important;\n                width:60px !important;\n                overflow:auto !important;\n              }\n            \n            }\n            @media screen and (max-width: 525px){\n              img[class=mobile-hide]{\n                display:none !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              img[class=img-max]{\n                max-width:100% !important;\n                width:100% !important;\n                height:auto !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              img[class=img-picture]{\n                max-width:60% !important;\n                width:60% !important;\n                height:auto !important;\n                float:right !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              table[class=responsive-table]{\n                width:100%!important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              table[class=responsive-column]{\n                width:100%!important;\n                padding:0px 0px 15px 0px !important;\n                display:block !important;\n              }\n            }\t\n            @media screen and (max-width: 525px){\n              td[class=top-padding]{\n                padding: 0px 0px 10px 0px !important;\n              }\n            \n            } \n            @media screen and (max-width: 525px){\n              td[class=slice-padding]{\n                padding:0px 15px 0px 15px !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              td[class=smaller-padding]{\n                padding:15px 0px 15px 0px !important;\n              }\n            \n            }\n            @media screen and (max-width: 525px){\n              td[class=section-padding]{\n                padding: 0px 10px 20px 10px !important;\n              }\n            }\n            @media screen and (max-width: 525px){\n              .height {\n                height: 100% !important;\n              }        \n            }\n            @media screen and (max-width: 525px){\n              td[class=mobile-wrapper]{\n                padding:0 !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              td[class=title]{\n                font-size: 16px !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              td[class=btn]{\n                width:80% !important;\n              }\n            \n            }\n          </style>\n          <!--[if gte mso 9]>\n            <style type=\"text/css\">\n              .img-max {\n                  width: 246px !important;\n              }\n            </style>\n          <![endif]-->\n        </head>\n      \n        <body style=\"margin: 0; padding: 0;\">\n          <div style=\"display:none !important; font-size:1px; color:#FFFFFF;\">\n            <!-- It&#039;s on the way to XXXXX, Really Good Emails -->\n          </div>\n          <!-- HEADER LOGO -->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#00C186\" style=\"background-color: #00C186;\">\n                <div align=\"center\" style=\"padding: 0px 20px 0px 20px;\">\n                  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                    <tr>\n                      <td bgcolor=\"#00C186\" style=\"background-color: #00C186;\">\n                        <div align=\"center\" style=\"padding: 0px 20px 0px 20px;\">\n                          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"wrapper\" align=\"center\">\n                            <tr align=\"center\">\n                              <td style=\"padding: 10px 0px 10px 0px; text-align: center; width: 400px;\" class=\"logo\" align=\"center\">\n                                <a>\n                                  <!-- <img alt=\"header\" src=\"http://media.firebox.com/i/nl/fb_light.png\" width=\"130\" border=\"0\"> -->\n                                  \n                                  <img alt=\"header\" [src]=\"companyLogo\" width=\"70\" border=\"0\">\n                                </a>\n                              </td>\n                            </tr>\n                            <!-- <tr align=\"center\">\n                              <td style=\"padding: 0px 0px 15px 0px; text-align: center; width: 400px;\" class=\"logo\" align=\"center\"> -->\n                                <!-- <img src=\"https://media.firebox.com/i/transactional/header-dispatch.png\" width=\"100%\" class=\"img-max\"> -->\n                              <!-- </td>\n                            </tr> -->\n                          </table>\n                        </div>\n                      </td>\n                    </tr>\n                  </table>   \n                </div>\n              </td>\n            </tr>\n          </table>\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" *ngIf=\"businessSettings.bookingConfirmationHeader != ''\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 20px 15px 20px 15px;\" class=\"top-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <p [innerHtml]=\"businessSettings.bookingConfirmationHeader\"></p>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!-- ORDER CONFIRMATION -->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 5px 15px 5px 15px;\" class=\"top-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 15px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <span style=\"color: #343434; text-transform: uppercase; font-size: 14px; -webkit-font-smoothing: auto; font-weight: bold;\" class=\"appleBody\">\n                                                Booking date\n                                              </span>\n                                              <br />\n                                              <span class=\"appleBody\">\n                                                {{bookingDate}}\n                                              </span>\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: right; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <span style=\"color: #343434; text-transform: uppercase; font-size: 14px; -webkit-font-smoothing: auto; font-weight: bold;\" class=\"appleBody\" *ngIf=\"data.row.id\">\n                                                Booking no.\n                                              </span>\n                                              <br />\n                                              <a href=\"#\" style=\"color: #0087DB !important;\">\n                                                {{data.row.id}}\n                                              </a>\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!-- END ORDER CONFIRMATION -->\n          <!-- COPY SIMPLE SECTION-->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 2px 15px;\" class=\"section-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                          <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 20px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                              Guest Details\n                                            </td>                                    \n                                          </tr>                                                                    \n                                          <!-- <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                              Sent using Airmail\n                                            </td>\n                                          </tr> -->                                  \n                                          <!--<tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                              <span class=\"appleBody\">\n                                                <a href=\"#\">\n                                                  More info\n                                                </a>\n                                              </span>\n                                            </td>\n                                          </tr> \n                                          <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                            <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px 20px 10px 0px; width: 400px;\">\n                                              <a href=\"#\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0087DB; border-top: 12px solid #0087DB; border-bottom: 12px solid #0087DB; border-right: 18px solid #0087DB; border-left: 18px solid #0087DB; display: inline-block; color: #ffffff;\">\n                                                Track my order\n                                              </a>\n                                            </td>\n                                          </tr> -->\n                                        </table>\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; border: 1px solid lightgray\" class=\"responsive-table\" width=\"500\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Sr.\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Guest Name\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Phone No.\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Email\n                                            </td>\n                                          </tr>\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              1\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              {{data.row.guestName}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              {{data.row.guestMobile}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              {{data.row.guestEmail}}\n                                            </td>\n                                          </tr>\n                                        </table>                                \n                                        <!-- <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"5\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                              Reporting Time: {{data.row.reportingTime}}\n                                            </td>\n                                          </tr>\n                                        </table> -->\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!-- END COPY SIMPLE SECTION-->          \n        <!-- COPY SIMPLE SECTION-->\n        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n          <tr>\n            <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 2px 15px;\" class=\"section-padding\">\n              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                <tr>\n                  <td>\n                    <!-- TWO COLUMNS -->\n                    <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                      <tr>\n                        <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                          <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                            <tr>\n                              <td valign=\"top\" align=\"left\">\n                                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                  <tr>\n                                    <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                      <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                        <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                        <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 20px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                            Flight Details\n                                          </td>                                    \n                                        </tr>                                                                    \n                                        <!-- <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                            Sent using Airmail\n                                          </td>\n                                        </tr> -->                                  \n                                        <!--<tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                            <span class=\"appleBody\">\n                                              <a href=\"#\">\n                                                More info\n                                              </a>\n                                            </span>\n                                          </td>\n                                        </tr> \n                                        <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                          <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px 20px 10px 0px; width: 400px;\">\n                                            <a href=\"#\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0087DB; border-top: 12px solid #0087DB; border-bottom: 12px solid #0087DB; border-right: 18px solid #0087DB; border-left: 18px solid #0087DB; display: inline-block; color: #ffffff;\">\n                                              Track my order\n                                            </a>\n                                          </td>\n                                        </tr> -->\n                                      </table>\n                                      <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; border: 1px solid lightgray\" class=\"responsive-table\" width=\"500\">\n                                        <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                            Flight No\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                            From\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                            To\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                            Date\n                                          </td>\n                                        </tr>\n                                        <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.flightNo}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.from}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.to}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.departureDate | date:'dd-MM-yyyy'}}\n                                          </td>\n                                        </tr>\n                                        <tr cellspacing=\"0\" cellpadding=\"0\" *ngIf=\"data.row.flightNoConnecting\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.flightNoConnecting}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.connectingFrom}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.connectingTo}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.departureDate | date:'dd-MM-yyyy'}}\n                                          </td>\n                                        </tr>\n                                        <tr cellspacing=\"0\" cellpadding=\"0\" *ngIf=\"data.row.flightNoReturn\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.flightNoReturn}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.to}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.from}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.arrivalDate | date:'dd-MM-yyyy'}}\n                                          </td>\n                                        </tr>\n                                        <tr cellspacing=\"0\" cellpadding=\"0\" *ngIf=\"data.row.flightNoConnectingReturn\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.flightNoConnectingReturn}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.connectingReturnFrom}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.connectingReturnTo}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.arrivalDate | date:'dd-MM-yyyy'}}\n                                          </td>\n                                        </tr>\n                                      </table>                                \n                                      <!-- <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                        <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"5\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                            Reporting Time: {{data.row.reportingTime}}\n                                          </td>\n                                        </tr>\n                                      </table> -->\n                                    </td>\n                                  </tr>\n                                </table>\n                              </td>\n                            </tr>\n                          </table>\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n        </table>\n        <!-- END COPY SIMPLE SECTION-->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 5px 15px;\" class=\"section-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 18px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 15px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                              Booked By\n                                            </td>                                    \n                                          </tr>                    \n                                        </table>\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">                                  \n                                          <tr cellspacing=\"0\" cellpadding=\"0\">                                    \n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                              {{data.row.bookByName}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                              {{data.row.bookByNo}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                              {{data.row.bookByEmail}}\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n        \n          <!-- ROW CS CONTACT SECTION-->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n              <tr>\n                <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 5px 15px;\" class=\"section-padding\">\n                  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                    <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                    <tr>\n                      <td>\n                        <!-- TWO COLUMNS -->\n                        <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                          <tr>\n                            <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                              <!-- LEFT COLUMN -->\n                              <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"290\" align=\"left\" class=\"responsive-table\">\n                                <tr>\n                                  <td valign=\"top\" align=\"left\">\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                      <tr>\n                                        <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" height=\"250\" width=\"290\" class=\"wrapper\" style=\"border: 1px solid #EFEFEF; width: 400px;\">\n                                          <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width: 100%;\" class=\"responsive-table\">\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #333333; font-size: 18px; font-weight: bold; text-align: center; padding: 15px 20px 10px 20px; width: 400px;\">\n                                                <img alt=\"\" src=\"https://media.firebox.com/i/transactional/icon-customer-service.png\" width=\"100\">\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #333333; font-size: 16px; font-weight: bold; text-align: center; padding: 0px 20px 10px 20px; width: 400px; text-transform: uppercase;\">\n                                                Got a query?\n                                                <br />\n                                                Get in touch\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 0px 20px 20px 20px; color: #888888 !important; line-height: 1.44; font-size: 14px;\">\n                                                Hit us up on the numbers featured\n                                              </td>\n                                            </tr>\n                                            <!-- <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                              <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 0px 20px 20px 20px; width: 400px;\">\n                                                <a href=\"https://www.firebox.com/admin/faqs?itc=915&utm_source=email&utm_medium=transactional&utm_campaign=order_dispatch\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0099E0; border-top: 12px solid #0099E0; border-bottom: 12px solid #0099E0; border-right: 18px solid #0099E0; border-left: 18px solid #0099E0; display: inline-block; color: #ffffff;\">\n                                                  FAQ ME\n                                                </a>\n                                              </td>\n                                            </tr> -->\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </table>\n                              <!-- RIGHT COLUMN -->\n                              <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"290\" align=\"right\" class=\"responsive-table\">\n                                <tr>\n                                  <td valign=\"top\" align=\"left\">\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                      <tr>\n                                        <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" height=\"250\" width=\"290\" class=\"wrapper\" style=\"border: 1px solid #EFEFEF; width: 400px;\">\n                                          <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width: 100%;\" class=\"responsive-table\">\n                                            <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 10px 20px 10px 20px; color: #343434; text-transform: uppercase; width: 400px;\">\n                                                Phone\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #0087DB; font-size: 16px; font-weight: bold; text-align: center; padding: 0px 20px 10px 20px;\">\n                                                <span class=\"appleBody\">{{companyProfile.phone}}</span>                                                                                                                \n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 10px 20px 10px 20px; color: #343434; text-transform: uppercase;\">\n                                                Email\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; color: #0087DB; padding: 0px 20px 20px 20px; font-weight: bold; font-size: 16px;\">\n                                                <span class=\"appleBody\">\n                                                  <a style=\"color: #0087DB; text-decoration: none !important;\">\n                                                    {{companyProfile.email}}\n                                                  </a>\n                                                </span>\n                                              </td>\n                                            </tr>\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </table>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n            </table>\n          <!-- END CS CONTACT ROW SECTION-->\n          \n          <!-- FOOTER -->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n              <tr>\n                <td bgcolor=\"#ffffff\" align=\"center\" style=\"padding: 20px 0px;\">\n                  <!-- UNSUBSCRIBE COPY -->\n                  <table width=\"600\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\" class=\"responsive-table\">\n                    <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 0 20px 0; font-size: 14px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#888888;\">\n                        Until next time, <strong>Techsimians Team</strong>\n                      </td>\n                    </tr>\n                    <!-- <tr>\n                      <td>\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                          <tr width=\"183\">\n                            <td>\n                              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                                <tr width=\"157\">\n                                  <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://www.facebook.com/Firebox\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/facebook_icon.png\" width=\"16\" height=\"16\">\n                                    </a>\n                                  </td>\n                                  <td width=\"19\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://twitter.com/Firebox\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/twitter_icon.png\" width=\"19\" height=\"16\">\n                                    </a>\n                                  </td>\n                                  <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://www.instagram.com/Firebox/\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/instagram_icon.png\" width=\"16\" height=\"16\">\n                                    </a>\n                                  </td>\n                                  <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://www.pinterest.com/firebox/\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/pinterest_icon.png\" width=\"16\" height=\"16\">\n                                    </a>\n                                  </td>\n                                </tr>\n                              </table>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n                    </tr> -->\n                    <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 0 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                        <span class=\"appleBody\">\n                          <strong>Techsimians</strong><br /> Mumbai, Maharashtra, India.\n                        </span>\n                      </td>\n                    </tr>\n                    <!-- <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 20px 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                        <span class=\"appleBody\">\n                          VAT Reg. No.: 798 6593 41 Registered in England & Wales, No. 3874477\n                        </span>\n                      </td>\n                    </tr> -->\n                    <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 20px 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                        <span class=\"appleBody\" style=\"color:#888888;\">\n                          <a style=\"color:#888888 !important;\">info@yourfleetman.com</a>\n                        </span>\n                        <span class=\"hide-mobile\">&nbsp; | &nbsp;</span>\n                        <span class=\"appleBody break\" style=\"color:#888888;\">\n                          <a href=\"http://www.techsimians.com\"\n                            style=\"color: #888888 !important;\">www.techsimians.com</a>\n                        </span>\n                        <span class=\"hide-mobile\">&nbsp; | &nbsp;</span>\n                        <span class=\"appleBody break\" style=\"color:#888888;\">\n                          8080 425 120\n                        </span>\n                      </td>\n                    </tr>\n                  </table>\n                </td>                \n            </tr>\n          </table>\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" *ngIf=\"businessSettings.bookingConfirmationFooter != ''\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 20px 15px 20px 15px;\" class=\"top-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <p [innerHTML]=\"businessSettings.bookingConfirmationFooter\"></p>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n        </body>\n      </html>\n    </div></div></div></div></div></nb-card-body></nb-card>    \n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12 col-12\">\n    <!-- <button mat-raised-button color=\"primary\" (click)=\"sendMail(template)\">Send Mail</button> -->\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/airline/sendairlineconfirmation/sendairlineconfirmation.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Share+Tech+Mono);\nb {\n  display: inline-block; }\nbody,\np {\n  padding: 0;\n  margin: 0; }\n.blockDiv {\n  margin: 0px 20px 0px 20px; }\nbody {\n  background: #272726; }\nlabel {\n  text-align: center;\n  font-family: Helvetica, sans-serif;\n  font-size: 1.25em;\n  color: #000000;\n  display: block; }\ndiv#controls {\n  padding: 3em;\n  max-width: 1200px;\n  margin: 0 auto; }\ndiv#controls div {\n  float: left; }\ndiv#controls div#call-controls,\ndiv#controls div#info {\n  width: 16em;\n  margin: 0 11.5em;\n  text-align: center; }\ndiv#controls div#info div#output-selection {\n  display: none; }\ndiv#controls div#info a {\n  font-size: 1.1em;\n  color: black;\n  text-decoration: underline;\n  cursor: pointer; }\ndiv#controls div#info select {\n  width: 300px;\n  height: 60px;\n  margin-bottom: 2em; }\ndiv#controls div#info label {\n  width: 300px; }\ndiv#controls div#call-controls div#volume-indicators {\n  display: none;\n  padding: 10px;\n  margin-top: 20px;\n  width: 500px;\n  text-align: center; }\ndiv#controls div#call-controls div#volume-indicators > div {\n  display: block;\n  height: 20px;\n  width: 0; }\ndiv#controls p.instructions {\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: Helvetica-LightOblique, Helvetica, sans-serif;\n  font-style: oblique;\n  font-size: 1.25em;\n  color: #000000; }\ndiv#controls div#info #client-name {\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: \"Helvetica Light\", Helvetica, sans-serif;\n  font-size: 1.25em;\n  color: #000000; }\ndiv#controls button {\n  width: 15em;\n  height: 2.5em;\n  margin-top: 1.75em;\n  border-radius: 1em;\n  font-family: \"Helvetica Light\", Helvetica, sans-serif;\n  font-size: .8em;\n  font-weight: lighter;\n  outline: 0; }\ndiv#controls button:active {\n  position: relative;\n  top: 1px; }\ndiv#controls div#call-controls {\n  display: none; }\ndiv#controls div#call-controls input {\n  font-family: Helvetica-LightOblique, Helvetica, sans-serif;\n  font-style: oblique;\n  font-size: 1em;\n  width: 100%;\n  height: 2.5em;\n  padding: .5em;\n  display: block; }\ndiv#controls div#call-controls button {\n  color: black;\n  background: 0 0;\n  border: 1px solid #000000; }\ndiv#controls div#call-controls button#button-hangup {\n  display: none; }\ndiv#controls div#log {\n  border: 1px solid #000000;\n  width: 35%;\n  height: 9.5em;\n  margin-top: 2.75em;\n  text-align: center;\n  padding: 1.5em;\n  float: right;\n  overflow-y: scroll; }\ndiv#controls div#log p {\n  color: #686865;\n  font-family: 'Share Tech Mono', 'Courier New', Courier, fixed-width;\n  font-size: 1.25em;\n  line-height: 1.25em;\n  margin-left: 1em;\n  text-indent: -1.25em;\n  width: 90%; }\n.whatsappBlock {\n  text-align: center; }\n.whatsappTo {\n  margin-left: -188px; }\n.whatsappTextArea {\n  width: 300px;\n  height: 200px; }\n.checkbox {\n  margin-left: 30px; }\n.driver {\n  margin-top: 5px; }\n.driverName {\n  margin: 10px 90px 5px 0px; }\n.driverNumber {\n  margin: 10px 87px 5px 0px; }\n.callTable {\n  border-collapse: collapse;\n  width: 100%; }\n.callCell {\n  padding: 5px;\n  border: 1px solid lightgrey;\n  line-height: 40px; }\n.mat-checkbox-inner-container {\n  margin-right: 3px !important; }\n.mat-checkbox {\n  margin-right: 15px !important; }\n"

/***/ }),

/***/ "./src/app/pages/airline/sendairlineconfirmation/sendairlineconfirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendairlineconfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__circles_companyprofile_companyprofile_service__ = __webpack_require__("./src/app/pages/circles/companyprofile/companyprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__duties_call_call_service__ = __webpack_require__("./src/app/pages/duties/call/call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__messaging_service__ = __webpack_require__("./src/app/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__airlinedisp_airline_service__ = __webpack_require__("./src/app/pages/airline/airlinedisp/airline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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













var SendairlineconfirmationComponent = (function () {
    function SendairlineconfirmationComponent(data, http, dialog, auth, companyProfileService, callService, snackBar, msgService, airlineService, customerService, uploadService, _sanitizer) {
        this.data = data;
        this.http = http;
        this.dialog = dialog;
        this.auth = auth;
        this.companyProfileService = companyProfileService;
        this.callService = callService;
        this.snackBar = snackBar;
        this.msgService = msgService;
        this.airlineService = airlineService;
        this.customerService = customerService;
        this.uploadService = uploadService;
        this._sanitizer = _sanitizer;
        this.callNumber = 0;
        this.deviceStatus = 'Offline';
        this.customNumber = '';
        this.customEmail = '';
        this.mailSubject = "Your booking has been confirmed";
        this.bookingDate = new Date().toISOString().split('T')[0];
        this.businessSettings = {};
        this.user = {};
        this.companyProfile = {};
        this.allPassengers = [];
        this.allBookedBy = [];
        this.booking = {};
        this.message = '';
        this.whatsappMessage = '';
        this.smsArray = [];
        this.whatsAppArray = [];
        this.bookedByArray = [];
        this.passengerArray = [];
        this.customerArray = [];
        this.bookByLogCount = 0;
        this.customerLogCount = 0;
        this.passengerLogCount = 0;
        this.driverLogCount = 0;
        this.customLogCount = 0;
        this.logDisplay = [];
        this.logs = [];
        this.mailPassenger = false;
        this.customer = {};
        this.companyLogo = '';
        this.ticketBookyBy = false;
        this.ticketPassenger = false;
        this.ticketCustomer = false;
    }
    SendairlineconfirmationComponent.prototype.ngAfterViewInit = function () {
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
    SendairlineconfirmationComponent.prototype.checkNumber = function (data) {
        try {
            var notify = JSON.parse(data.notification.body);
            return notify.number;
        }
        catch (e) {
            return 0;
        }
    };
    SendairlineconfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.auth.businessSettings.subscribe(function (data) {
            _this.businessSettings = data;
        });
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.booking = _this.data.row;
            if (data) {
                _this.customerService.getSingleCustomer({ customerId: _this.booking.customerId }).subscribe(function (data) {
                    _this.customer = data[0];
                });
                _this.allPassengers[0] = {
                    passengerNo: _this.booking.guestMobile,
                    passenger: _this.booking.guestName,
                    passengerEmail: _this.booking.guestEmail,
                };
                _this.allBookedBy[0] = {
                    bookByName: _this.booking.bookByName,
                    bookByNo: _this.booking.bookByNo,
                    bookByEmail: _this.booking.bookByEmail,
                };
                _this.callService.checkDevice(_this.user).subscribe();
                console.log(_this.data);
                // this.callService.getAllPassengers({bookingId:this.data.bid}).subscribe(data=>{
                // })
                // this.callService.getAllBookedBy({bookingId:this.data.bid}).subscribe(data=>{
                // })
                _this.callService.getFlightBookingLogs({ flightBookingId: _this.booking.id }).subscribe(function (data) {
                    _this.logDisplay = data;
                });
                // this.callService.getLogs({flightBookingId:this.data.id,type:'driver'}).subscribe(data=>{
                //   this.driverLogsDisplay=data
                // })
                console.log(_this.allBookedBy, _this.allPassengers);
            }
            _this.companyProfileService.getCompanyProfile(_this.user).subscribe(function (data) {
                _this.companyProfile = data[0];
                _this.uploadService.getFile(_this.user.companyName, 'profileImages', _this.companyProfile.companyLogo).subscribe(function (data) {
                    _this.companyLogo = _this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                        + data.text());
                });
                if (_this.businessSettings.UseBookingsIDInSMS == true) {
                    if (_this.data.row.flightNoConnecting) {
                        _this.message = "Flight No(s): " + _this.data.row.flightNo + ", " + _this.data.row.flightNoConnecting + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ", " + _this.data.row.connectingFrom + "-" + _this.data.row.connectingTo + ".%0aDate: " + _this.data.row.departureDate + ".%0aYour Booking ID is " + _this.data.row.id;
                        _this.whatsappMessage = "Flight No(s): " + _this.data.row.flightNo + ", " + _this.data.row.flightNoConnecting + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ", " + _this.data.row.connectingFrom + "-" + _this.data.row.connectingTo + ".%0aDate: " + _this.data.row.departureDate + ".%0aYour Booking ID is " + _this.data.row.id + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                    }
                    else if (_this.data.row.flightNoReturn) {
                        _this.message = "Flight No(s): " + _this.data.row.flightNo + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ".%0aDate: " + _this.data.row.departureDate + ".%0aFlight No(s): " + _this.data.row.flightNoReturn + ".%0a" + _this.data.row.to + "-" + _this.data.row.from + ".%0aDate: " + _this.data.row.arrivalDate + ".%0aYour Booking ID is " + _this.data.row.id;
                        _this.whatsappMessage = "Flight No(s): " + _this.data.row.flightNo + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ".%0aDate: " + _this.data.row.departureDate + ".%0aFlight No(s): " + _this.data.row.flightNoReturn + ".%0a" + _this.data.row.to + "-" + _this.data.row.from + ".%0a Date: " + _this.data.row.arrivalDate + ".%0aYour Booking ID is " + _this.data.row.id + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                        if (_this.data.row.flightNoConnectingReturn) {
                            _this.message = "Flight No(s): " + _this.data.row.flightNo + ", " + _this.data.row.flightNoConnecting + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ", " + _this.data.row.connectingFrom + "-" + _this.data.row.connectingTo + ".%0aDate: " + _this.data.row.departureDate + ".%0aFlight No(s): " + _this.data.row.flightNoReturn + ", " + _this.data.row.flightNoConnectingReturn + " " + _this.data.row.to + "-" + _this.data.row.from + ", " + _this.data.row.connectingTo + "-" + _this.data.row.connectingFrom + ".%0aDate: " + _this.data.row.arrivalDate + ".%0aYour Booking ID is " + _this.data.row.id;
                            _this.whatsappMessage = "Flight No(s): " + _this.data.row.flightNo + ", " + _this.data.row.flightNoConnecting + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ", " + _this.data.row.connectingFrom + "-" + _this.data.row.connectingTo + ".%0aDate: " + _this.data.row.departureDate + ".%0aFlight No(s): " + _this.data.row.flightNoReturn + ", " + _this.data.row.flightNoConnectingReturn + " " + _this.data.row.to + "-" + _this.data.row.from + ", " + _this.data.row.connectingTo + "-" + _this.data.row.connectingFrom + ".%0aDate: " + _this.data.row.arrivalDate + ".%0aYour Booking ID is " + _this.data.row.id + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                        }
                    }
                    else {
                        _this.message = "Flight No(s): " + _this.data.row.flightNo + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ".%0aDate: " + _this.data.row.departureDate + ".%0aYour Booking ID is " + _this.data.row.id;
                        _this.whatsappMessage = "Flight No(s): " + _this.data.row.flightNo + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ".%0aDate: " + _this.data.row.departureDate + ".%0aYour Booking ID is " + _this.data.row.id + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                    }
                }
                else {
                    if (_this.data.row.flightNoConnecting) {
                        _this.message = "Flight No(s): " + _this.data.row.flightNo + ", " + _this.data.row.flightNoConnecting + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ", " + _this.data.row.connectingFrom + "-" + _this.data.row.connectingTo + ".%0aDate: " + _this.data.row.departureDate;
                        _this.whatsappMessage = "Flight No(s): " + _this.data.row.flightNo + ", " + _this.data.row.flightNoConnecting + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ", " + _this.data.row.connectingFrom + "-" + _this.data.row.connectingTo + ".%0aDate: " + _this.data.row.departureDate + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                    }
                    else if (_this.data.row.flightNoReturn) {
                        _this.message = "Flight No(s): " + _this.data.row.flightNo + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ".%0aDate: " + _this.data.row.departureDate + ".%0aFlight No(s): " + _this.data.row.flightNoReturn + " " + _this.data.row.to + "-" + _this.data.row.from + ".%0aDate: " + _this.data.row.arrivalDate;
                        _this.whatsappMessage = "Flight No(s): " + _this.data.row.flightNo + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ".%0aDate: " + _this.data.row.departureDate + ".%0aFlight No(s): " + _this.data.row.flightNoReturn + " " + _this.data.row.to + "-" + _this.data.row.from + ".%0aDate: " + _this.data.row.arrivalDate + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                        if (_this.data.row.flightNoConnectingReturn) {
                            _this.message = "Flight No(s): " + _this.data.row.flightNo + ", " + _this.data.row.flightNoConnecting + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ", " + _this.data.row.connectingFrom + "-" + _this.data.row.connectingTo + ".%0aDate: " + _this.data.row.departureDate + ".%0aFlight No(s): " + _this.data.row.flightNoReturn + ", " + _this.data.row.flightNoConnectingReturn + " " + _this.data.row.to + "-" + _this.data.row.from + ", " + _this.data.row.connectingTo + "-" + _this.data.row.connectingFrom + ".%0aDate: " + _this.data.row.arrivalDate;
                            _this.whatsappMessage = "Flight No(s): " + _this.data.row.flightNo + ", " + _this.data.row.flightNoConnecting + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ", " + _this.data.row.connectingFrom + "-" + _this.data.row.connectingTo + ".%0aDate: " + _this.data.row.departureDate + ".%0aFlight No(s): " + _this.data.row.flightNoReturn + ", " + _this.data.row.flightNoConnectingReturn + " " + _this.data.row.to + "-" + _this.data.row.from + ", " + _this.data.row.connectingTo + "-" + _this.data.row.connectingFrom + ".%0aDate: " + _this.data.row.arrivalDate + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                        }
                    }
                    else {
                        _this.message = "Flight No(s): " + _this.data.row.flightNo + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ".%0aDate: " + _this.data.row.departureDate;
                        _this.whatsappMessage = "Flight No(s): " + _this.data.row.flightNo + ".%0a" + _this.data.row.from + "-" + _this.data.row.to + ".%0aDate: " + _this.data.row.departureDate + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                    }
                }
            });
        });
    };
    SendairlineconfirmationComponent.prototype.makeAppCall = function (number) {
        var temp = {
            userId: this.user.id,
            number: number,
            ownerId: this.user.ownerId,
            date: __WEBPACK_IMPORTED_MODULE_5_moment__().format("YYYY-MM-DD")
        };
        this.callService.makeCall(temp);
    };
    SendairlineconfirmationComponent.prototype.messageSize = function () {
        this.messageLength = Math.ceil(this.message.length / 160);
        return this.messageLength;
    };
    SendairlineconfirmationComponent.prototype.closeDialog = function () {
        this.callService.unsubscribe(this.user).subscribe();
        this.dialog.closeAll();
    };
    SendairlineconfirmationComponent.prototype.sendSMS = function (event, number, type, name) {
        if (event.checked) {
            if (type == 'bookedBy') {
                this.logs.push({ flightBookingId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'passenger') {
                this.logs.push({ flightBookingId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'customer') {
                this.logs.push({ flightBookingId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customerLogCount = this.customerLogCount + 1;
            }
            if (type == 'custom') {
                this.logs.push({ flightBookingId: this.data.row.id, log: "SMS was sent to " + number + " on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
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
        console.log(this.logs);
    };
    SendairlineconfirmationComponent.prototype.sendWhatsApp = function (event, number, type, name) {
        if (event.checked) {
            if (type == 'Booked By') {
                this.logs.push({ flightBookingId: this.data.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'Passenger') {
                this.logs.push({ flightBookingId: this.data.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'Customer') {
                this.logs.push({ flightBookingId: this.data.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customerLogCount = this.customerLogCount + 1;
            }
            if (type == 'custom') {
                this.logs.push({ flightBookingId: this.data.id, log: "WhatsApp was sent to " + number + " on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
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
    SendairlineconfirmationComponent.prototype.sendEmail = function (event, email, type, name) {
        if (event.checked) {
            if (type == 'Booked By') {
                this.logs.push({ flightBookingId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookedByArray.push(email);
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'Passenger') {
                this.logs.push({ flightBookingId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerArray.push(email);
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'Customer') {
                this.logs.push({ flightBookingId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customerArray.push(email);
                this.customerLogCount = this.customerLogCount + 1;
            }
        }
        else {
            if (type == 'Booked By') {
                var i = this.bookedByArray.findIndex(function (x) { return x === email; });
                this.bookedByArray.splice(i, 1);
                this.bookByLogCount = this.bookByLogCount - 1;
            }
            if (type == 'Passenger') {
                var i = this.passengerArray.findIndex(function (x) { return x === email; });
                this.passengerArray.splice(i, 1);
                this.passengerLogCount = this.passengerLogCount - 1;
            }
            if (type == 'Customer') {
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
    SendairlineconfirmationComponent.prototype.send = function () {
        var _this = this;
        var key = [];
        var files = [];
        if (this.booking.ticket != null) {
            key.push(this.user.companyName + "/flightTickets/" + this.booking.ticket);
            files.push(this.booking.ticket);
        }
        if (this.booking.returnTicket != null) {
            key.push(this.user.companyName + "/flightTickets/" + this.booking.returnTicket);
            files.push(this.booking.returnTicket);
        }
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
            this.callService.sendSMS({ number: this.smsArray, message: this.message }).subscribe(function (data) { }, function (err) { }, function () {
                var i = _this.smsArray.findIndex(function (x) { return x === _this.customNumber; });
                _this.smsArray.splice(i, 1);
                _this.customNumber = '';
                _this.snackBar.open("SMS Sent", "X", { duration: 3000 });
            });
        }
        if (this.whatsAppArray.length > 0) {
            this.callService.sendWhatsApp({ number: this.whatsAppArray, message: this.whatsappMessage }).subscribe(function (data) { }, function (err) { }, function () {
                var i = _this.whatsAppArray.findIndex(function (x) { return x === _this.customNumber; });
                _this.whatsAppArray.splice(i, 1);
                _this.customNumber = '';
                _this.snackBar.open("Whatsapp Sent", "X", { duration: 3000 });
            });
        }
        if (this.bookedByArray.length > 0) {
            if (this.businessSettings.CCAllAllotmentEmails) {
                var temp = {
                    name: this.companyProfile.name,
                    email: this.bookedByArray,
                    cc: this.businessSettings.AutoCCEmail,
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_5_moment__(this.booking.departureDate).format("DD-MM-YYYY"),
                    mailBody: this.dataPassengerTemplate.nativeElement.innerHTML,
                    key: key,
                    files: files
                };
            }
            else {
                var temp = {
                    name: this.companyProfile.name,
                    email: this.bookedByArray,
                    cc: '',
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_5_moment__(this.booking.departureDate).format("DD-MM-YYYY"),
                    mailBody: this.dataPassengerTemplate.nativeElement.innerHTML,
                    key: key,
                    files: files
                };
            }
            if (this.ticketBookyBy == false) {
                delete temp.files;
                delete temp.key;
            }
            this.airlineService.emailTicket(temp).subscribe(function (data) {
                console.log(data);
            }, function (err) { }, function () {
                _this.snackBar.open("Email Sent", "X", { duration: 3000 });
            });
        }
        if (this.passengerArray.length > 0) {
            if (this.businessSettings.CCAllAllotmentEmails) {
                var temp = {
                    name: this.companyProfile.name,
                    email: this.passengerArray,
                    cc: this.businessSettings.AutoCCEmail,
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_5_moment__(this.booking.departureDate).format("DD-MM-YYYY"),
                    mailBody: this.dataPassengerTemplate.nativeElement.innerHTML,
                    key: key,
                    files: files
                };
            }
            else {
                var temp = {
                    name: this.companyProfile.name,
                    email: this.passengerArray,
                    cc: '',
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_5_moment__(this.booking.departureDate).format("DD-MM-YYYY"),
                    mailBody: this.dataPassengerTemplate.nativeElement.innerHTML,
                    key: key,
                    files: files
                };
            }
            if (this.ticketPassenger == false) {
                delete temp.files;
                delete temp.key;
            }
            this.airlineService.emailTicket(temp).subscribe(function (data) {
                console.log(data);
            }, function (err) { }, function () {
                _this.snackBar.open("Email Sent", "X", { duration: 3000 });
            });
        }
        if (this.customerArray.length > 0) {
            if (this.businessSettings.CCAllAllotmentEmails) {
                var temp = {
                    name: this.companyProfile.name,
                    email: this.customerArray,
                    cc: this.businessSettings.AutoCCEmail,
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_5_moment__(this.booking.departureDate).format("DD-MM-YYYY"),
                    mailBody: this.dataPassengerTemplate.nativeElement.innerHTML,
                    key: key,
                    files: files
                };
            }
            else {
                var temp = {
                    name: this.companyProfile.name,
                    email: this.customerArray,
                    cc: '',
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_5_moment__(this.booking.departureDate).format("DD-MM-YYYY"),
                    mailBody: this.dataPassengerTemplate.nativeElement.innerHTML,
                    key: key,
                    files: files
                };
            }
            if (this.ticketCustomer == false) {
                delete temp.files;
                delete temp.key;
            }
            this.airlineService.emailTicket(temp).subscribe(function (data) {
                console.log(data);
            }, function (err) { }, function () {
                _this.snackBar.open("Email Sent", "X", { duration: 3000 });
            });
        }
        var count = {
            sms: this.smsArray.length,
            whatsApp: this.whatsAppArray.length,
            email: this.bookedByArray.length + this.passengerArray.length + this.customerArray.length,
            date: __WEBPACK_IMPORTED_MODULE_5_moment__().format("YYYY-MM-DD"),
            ownerId: this.user.ownerId
        };
        this.callService.insertCount(count).subscribe(function (data) {
            _this.snackBar.open("Sent", "X", { duration: 3000 });
        });
        this.insertLog();
    };
    SendairlineconfirmationComponent.prototype.insertLog = function () {
        var _this = this;
        this.logs.forEach(function (element) {
            _this.callService.insertFlightBookingLogs(element).subscribe(function (data) {
                console.log(data);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dataPassengerTemplate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SendairlineconfirmationComponent.prototype, "dataPassengerTemplate", void 0);
    SendairlineconfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sendairlineconfirmation',
            template: __webpack_require__("./src/app/pages/airline/sendairlineconfirmation/sendairlineconfirmation.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/sendairlineconfirmation/sendairlineconfirmation.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__circles_companyprofile_companyprofile_service__["a" /* CompanyprofileService */],
            __WEBPACK_IMPORTED_MODULE_6__duties_call_call_service__["a" /* CallService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_8__messaging_service__["a" /* MessagingService */],
            __WEBPACK_IMPORTED_MODULE_9__airlinedisp_airline_service__["a" /* AirlineService */],
            __WEBPACK_IMPORTED_MODULE_10__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_11__fileupload_service__["a" /* FileuploadService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["DomSanitizer"]])
    ], SendairlineconfirmationComponent);
    return SendairlineconfirmationComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/sendvisaconfirmation/sendvisaconfirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"min-width:60vw;\">\n    <div class=\"col-lg-12\">\n      <nb-card>\n        <nb-card-header>Contact</nb-card-header>\n        <nb-card-body>\n          <div class=\"call-container\">\n            <mat-accordion *ngIf=\"logDisplay.length>0\">\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title style=\"justify-content: center;\">\n                    Logs\n                  </mat-panel-title>\n                  <mat-panel-description style=\"justify-content: center;\">\n                    Click here to open logs\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n                <div *ngFor=\"let element of logDisplay\" style=\"text-align: center;color:brown;\">\n                  {{element.log}}\n                </div>\n              </mat-expansion-panel>\n            </mat-accordion>\n            <div style=\"margin-top:15px;\">\n              <table class=\"callTable\">\n                <tbody>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Customer: </b> {{customer.name}}\n                    </td>\n                    <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                      <mat-checkbox (change)=\"sendSMS($event,customer.phone,'customer',customer.name)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,customer.phone,'customer',customer.name)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,customer.email,'customer',customer.name)\">E-mail</mat-checkbox><br>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Number: </b> {{customer.phone}}\n                      <button (click)=\"makeAppCall(customer.phone)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Email: </b> {{customer.email}}\n                    </td>\n                  </tr>\n                </tbody>\n                <tbody *ngFor=\"let element of allBookedBy;\">\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Booked By: </b> {{element.bookByName}}\n                    </td>\n                    <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                      <mat-checkbox (change)=\"sendSMS($event,element.bookByNo,'bookedBy',element.bookByName)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,element.bookByNo,'bookedBy',element.bookByName)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,element.bookByEmail,'bookedBy',element.bookByName)\">E-mail</mat-checkbox><br>                    \n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Number: </b> {{element.bookByNo}}\n                      <button (click)=\"makeAppCall(element.bookByNo)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Email: </b> {{element.bookByEmail}}\n                    </td>\n                  </tr>\n                </tbody>\n                <tbody *ngFor=\"let temp of allPassengers\">\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Passenger: </b> {{temp.name}}\n                    </td>\n                    <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                      <mat-checkbox (change)=\"sendSMS($event,temp.passengerNo,'passenger',temp.passenger)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,temp.passengerNo,'passenger',temp.passenger)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,temp.passengerEmail,'passenger',temp.passenger)\">E-mail</mat-checkbox><br>                    \n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Number: </b> {{temp.phone}} \n                      <button (click)=\"makeAppCall(temp.passengerNo)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"callCell\">\n                      <b>Email: </b> {{temp.email}}\n                    </td>\n                  </tr>\n                </tbody>\n                <tbody>\n                  <tr>\n                    <td class=\"callCell\">\n                      <mat-form-field>\n                        <b>Custom Phone: </b>\n                        <input matInput [(ngModel)]=\"customNumber\">\n                      </mat-form-field>\n                      <br>\n                      <mat-checkbox (change)=\"sendSMS($event,customNumber,'custom')\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,customNumber,'custom')\">WhatApp</mat-checkbox>\n                    </td>\n                    <td class=\"callCell\" style=\"padding-left: 30px\">\n                      <mat-form-field>\n                        <b>Custom Email: </b>\n                        <input matInput [(ngModel)]=\"customEmail\">\n                      </mat-form-field>        \n                    </td>\n                  </tr>                  \n                </tbody>\n                <tbody *ngIf=\"emailAttachments==true\">\n                    <tr>\n                      <td class=\"callCell\" colspan=\"2\">\n                        <b>Email Attachments:</b><br>\n                        <div style=\"display:inline-block;\" *ngFor=\"let element of attachments\">\n                          <mat-checkbox (change)=\"addAttachments($event,element.imageName)\">{{element.fileName}}</mat-checkbox>\n                        </div>\n                      </td>\n                    </tr>                  \n                </tbody>\n              </table> \n            </div>\n            <div class=\"invoice-button-container\" style=\"margin-top: 10px;\">\n              <div style=\"width: 60%;margin:auto;\">\n                <label style=\"text-align: left;font-size:14px;\">\n                  <p>Location: {{data.row.location}}</p>\n                  <p>Type: {{data.row.visaType}}</p>\n                  <p>From: {{data.row.from | date: 'dd-MM-yyyy'}}</p>\n                  <p>To: {{data.row.to | date: 'dd-MM-yyyy'}}</p>\n                  <p>Cost: {{data.row.visaCost}}</p>                    \n                </label>\n                <hr style=\"border-top:1px solid black\">\n              </div>\n              <button class=\"invoice-button\" color=\"primary\" mat-raised-button (click)=\"send()\">Send</button>\n              <button *ngIf=\"!mailPassenger\" (click)=\"mailPassenger = true\" class=\"invoice-button\" mat-raised-button color=\"primary\" >Preview E-mail</button>            \n              <button *ngIf=\"mailPassenger\" class=\"invoice-button\" mat-raised-button color=\"primary\" (click)=\"mailPassenger=false; mailSupplier=false\">Close Preview</button>\n            </div>\n  \n            <mat-divider></mat-divider>\n            <div [hidden]=\"!mailPassenger\">\n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-12\">          \n            <div #dutyPassengerTemplate id=\"dutyPassengerTemplate\">\n      <!DOCTYPE html>\n      <html lang=\"en\">          \n        <head>\n          <title></title>\n          <meta charset=\"utf-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n          <style type=\"text/css\">\n            @font-face {font-family: 'sofia';  src: url('http://media.firebox.com/fonts/sofiapro_regular_macroman/SofiaProRegular-webfont.woff') format('woff');  mso-font-alt: 'Arial';  font-weight: normal !important;  font-style: normal !important;}\n            body,table,td,a{\n              -webkit-text-size-adjust:100%;\n              -ms-text-size-adjust:100%;\n              -webkit-font-smoothing: antialiased;\n            }\n            table,td{\n              mso-table-lspace:0pt;\n              mso-table-rspace:0pt;\n            }\n            img{\n              -ms-interpolation-mode:bicubic;\n            }\n            body{\n              margin:0;\n              padding:0;\n            }\n            img{\n              border:0;\n              height:auto;\n              line-height:100%;\n              outline:none;\n              text-decoration:none;\n            }\n            table{\n              border-collapse:collapse !important;\n            }\n            body{\n              height:100% !important;\n              margin:0;\n              padding:0;\n              width:100% !important;\n            }\n          \n            .appleBody a{\n              color: #0087DB !important;\n              text-decoration: underline !important;;\n            }\n          \n            .appleFooter a{\n              color: #343434 !important;\n              text-decoration: none;\n            }\n            td[class=btn]{\n              width:50% !important;\n            }\n          \n            span.preheader { display: none !important; }\n            @media screen and (max-width: 525px){\n              table[class=wrapper]{\n                width:100% !important;\n              }\n            \n            }\t/*@media screen and (max-width: 525px){\n              td[class=wrapper]{\n                width:100% !important;\n              }*/\n            \n            @media screen and (max-width: 525px){\n              td[class=mobile-hide]{\n                display:none;\n              }\n            \n            }\n            @media screen and (max-width: 525px){\n              img[class=mobile-show]{\n                display:block !important;\n                height:60px !important;\n                width:60px !important;\n                overflow:auto !important;\n              }\n            \n            }\n            @media screen and (max-width: 525px){\n              img[class=mobile-hide]{\n                display:none !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              img[class=img-max]{\n                max-width:100% !important;\n                width:100% !important;\n                height:auto !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              img[class=img-picture]{\n                max-width:60% !important;\n                width:60% !important;\n                height:auto !important;\n                float:right !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              table[class=responsive-table]{\n                width:100%!important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              table[class=responsive-column]{\n                width:100%!important;\n                padding:0px 0px 15px 0px !important;\n                display:block !important;\n              }\n            }\t\n            @media screen and (max-width: 525px){\n              td[class=top-padding]{\n                padding: 0px 0px 10px 0px !important;\n              }\n            \n            } \n            @media screen and (max-width: 525px){\n              td[class=slice-padding]{\n                padding:0px 15px 0px 15px !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              td[class=smaller-padding]{\n                padding:15px 0px 15px 0px !important;\n              }\n            \n            }\n            @media screen and (max-width: 525px){\n              td[class=section-padding]{\n                padding: 0px 10px 20px 10px !important;\n              }\n            }\n            @media screen and (max-width: 525px){\n              .height {\n                height: 100% !important;\n              }        \n            }\n            @media screen and (max-width: 525px){\n              td[class=mobile-wrapper]{\n                padding:0 !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              td[class=title]{\n                font-size: 16px !important;\n              }\n            \n            }\t\n            @media screen and (max-width: 525px){\n              td[class=btn]{\n                width:80% !important;\n              }\n            \n            }\n          </style>\n          <!--[if gte mso 9]>\n            <style type=\"text/css\">\n              .img-max {\n                  width: 246px !important;\n              }\n            </style>\n          <![endif]-->\n        </head>\n      \n        <body style=\"margin: 0; padding: 0;\">\n          <div style=\"display:none !important; font-size:1px; color:#FFFFFF;\">\n            <!-- It&#039;s on the way to XXXXX, Really Good Emails -->\n          </div>\n          <!-- HEADER LOGO -->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#00C186\" style=\"background-color: #00C186;\">\n                <div align=\"center\" style=\"padding: 0px 20px 0px 20px;\">\n                  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                    <tr>\n                      <td bgcolor=\"#00C186\" style=\"background-color: #00C186;\">\n                        <div align=\"center\" style=\"padding: 0px 20px 0px 20px;\">\n                          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"wrapper\" align=\"center\">\n                            <tr align=\"center\">\n                              <td style=\"padding: 10px 0px 10px 0px; text-align: center; width: 400px;\" class=\"logo\" align=\"center\">\n                                <a>                                  \n                                  <img alt=\"header\" [src]=\"companyLogo\" width=\"70\" border=\"0\">\n                                </a>\n                              </td>\n                            </tr>\n                            <!-- <tr align=\"center\">\n                              <td style=\"padding: 0px 0px 15px 0px; text-align: center; width: 400px;\" class=\"logo\" align=\"center\"> -->\n                                <!-- <img src=\"https://media.firebox.com/i/transactional/header-dispatch.png\" width=\"100%\" class=\"img-max\"> -->\n                              <!-- </td>\n                            </tr> -->\n                          </table>\n                        </div>\n                      </td>\n                    </tr>\n                  </table>   \n                </div>\n              </td>\n            </tr>\n          </table>\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" *ngIf=\"businessSettings.bookingConfirmationHeader != ''\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 20px 15px 20px 15px;\" class=\"top-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <p [innerHtml]=\"businessSettings.bookingConfirmationHeader\"></p>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!-- ORDER CONFIRMATION -->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 5px 15px 5px 15px;\" class=\"top-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 15px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <span style=\"color: #343434; text-transform: uppercase; font-size: 14px; -webkit-font-smoothing: auto; font-weight: bold;\" class=\"appleBody\">\n                                                Booking date\n                                              </span>\n                                              <br />\n                                              <span class=\"appleBody\">\n                                                {{bookingDate}}\n                                              </span>\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: right; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <span style=\"color: #343434; text-transform: uppercase; font-size: 14px; -webkit-font-smoothing: auto; font-weight: bold;\" class=\"appleBody\" *ngIf=\"data.row.id\">\n                                                Booking no.\n                                              </span>\n                                              <br />\n                                              <a href=\"#\" style=\"color: #0087DB !important;\">\n                                                {{data.row.id}}\n                                              </a>\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!-- END ORDER CONFIRMATION -->\n          <!-- COPY SIMPLE SECTION-->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 2px 15px;\" class=\"section-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                          <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 20px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                              Traveller Details\n                                            </td>                                    \n                                          </tr>                                                                    \n                                          <!-- <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                              Sent using Airmail\n                                            </td>\n                                          </tr> -->                                  \n                                          <!--<tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                              <span class=\"appleBody\">\n                                                <a href=\"#\">\n                                                  More info\n                                                </a>\n                                              </span>\n                                            </td>\n                                          </tr> \n                                          <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                            <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px 20px 10px 0px; width: 400px;\">\n                                              <a href=\"#\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0087DB; border-top: 12px solid #0087DB; border-bottom: 12px solid #0087DB; border-right: 18px solid #0087DB; border-left: 18px solid #0087DB; display: inline-block; color: #ffffff;\">\n                                                Track my order\n                                              </a>\n                                            </td>\n                                          </tr> -->\n                                        </table>\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; border: 1px solid lightgray\" class=\"responsive-table\" width=\"500\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Sr.\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Traveller Name\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Phone No.\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                              Email\n                                            </td>\n                                          </tr>\n                                          <tr cellspacing=\"0\" cellpadding=\"0\" *ngFor=\"let element of travellers; let i=index\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              {{i+1}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              {{element.name}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              {{element.phone}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                              {{element.email}}\n                                            </td>\n                                          </tr>\n                                        </table>                                \n                                        <!-- <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"5\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                              Reporting Time: {{data.row.reportingTime}}\n                                            </td>\n                                          </tr>\n                                        </table> -->\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!-- END COPY SIMPLE SECTION-->          \n        <!-- COPY SIMPLE SECTION-->\n        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n          <tr>\n            <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 2px 15px;\" class=\"section-padding\">\n              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                <tr>\n                  <td>\n                    <!-- TWO COLUMNS -->\n                    <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                      <tr>\n                        <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                          <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                            <tr>\n                              <td valign=\"top\" align=\"left\">\n                                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                  <tr>\n                                    <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                      <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                        <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                        <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 20px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                            Visa Details\n                                          </td>                                    \n                                        </tr>                                                                    \n                                        <!-- <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                            Sent using Airmail\n                                          </td>\n                                        </tr> -->                                  \n                                        <!--<tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                            <span class=\"appleBody\">\n                                              <a href=\"#\">\n                                                More info\n                                              </a>\n                                            </span>\n                                          </td>\n                                        </tr> \n                                        <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                          <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px 20px 10px 0px; width: 400px;\">\n                                            <a href=\"#\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0087DB; border-top: 12px solid #0087DB; border-bottom: 12px solid #0087DB; border-right: 18px solid #0087DB; border-left: 18px solid #0087DB; display: inline-block; color: #ffffff;\">\n                                              Track my order\n                                            </a>\n                                          </td>\n                                        </tr> -->\n                                      </table>\n                                      <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; border: 1px solid lightgray\" class=\"responsive-table\" width=\"500\">\n                                        <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                            Location\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                            Type\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                            From\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                            To\n                                          </td>\n                                        </tr>\n                                        <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.location}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.visaType}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.from | date: 'dd-MM-yyyy'}}\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.to | date: 'dd-MM-yyyy'}}\n                                          </td>\n                                        </tr>\n                                        <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"8\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            <b>Cost</b>\n                                          </td>\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"8\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                            {{data.row.visaCost}}\n                                          </td>                                          \n                                        </tr>\n                                      </table>                                \n                                      <!-- <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                        <tr cellspacing=\"0\" cellpadding=\"0\">\n                                          <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"5\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                            Reporting Time: {{data.row.reportingTime}}\n                                          </td>\n                                        </tr>\n                                      </table> -->\n                                    </td>\n                                  </tr>\n                                </table>\n                              </td>\n                            </tr>\n                          </table>\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n        </table>\n        <!-- END COPY SIMPLE SECTION-->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 5px 15px;\" class=\"section-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 18px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 15px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                              Booked By\n                                            </td>                                    \n                                          </tr>                    \n                                        </table>\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">                                  \n                                          <tr cellspacing=\"0\" cellpadding=\"0\">                                    \n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                              {{data.row.bookBy}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                              {{data.row.bookByNo}}\n                                            </td>\n                                            <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                              {{data.row.bookByEmail}}\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n        \n          <!-- ROW CS CONTACT SECTION-->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n              <tr>\n                <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 5px 15px;\" class=\"section-padding\">\n                  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                    <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                    <tr>\n                      <td>\n                        <!-- TWO COLUMNS -->\n                        <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                          <tr>\n                            <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                              <!-- LEFT COLUMN -->\n                              <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"290\" align=\"left\" class=\"responsive-table\">\n                                <tr>\n                                  <td valign=\"top\" align=\"left\">\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                      <tr>\n                                        <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" height=\"250\" width=\"290\" class=\"wrapper\" style=\"border: 1px solid #EFEFEF; width: 400px;\">\n                                          <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width: 100%;\" class=\"responsive-table\">\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #333333; font-size: 18px; font-weight: bold; text-align: center; padding: 15px 20px 10px 20px; width: 400px;\">\n                                                <img alt=\"\" src=\"https://media.firebox.com/i/transactional/icon-customer-service.png\" width=\"100\">\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #333333; font-size: 16px; font-weight: bold; text-align: center; padding: 0px 20px 10px 20px; width: 400px; text-transform: uppercase;\">\n                                                Got a query?\n                                                <br />\n                                                Get in touch\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 0px 20px 20px 20px; color: #888888 !important; line-height: 1.44; font-size: 14px;\">\n                                                Hit us up on the numbers featured\n                                              </td>\n                                            </tr>\n                                            <!-- <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                              <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 0px 20px 20px 20px; width: 400px;\">\n                                                <a href=\"https://www.firebox.com/admin/faqs?itc=915&utm_source=email&utm_medium=transactional&utm_campaign=order_dispatch\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0099E0; border-top: 12px solid #0099E0; border-bottom: 12px solid #0099E0; border-right: 18px solid #0099E0; border-left: 18px solid #0099E0; display: inline-block; color: #ffffff;\">\n                                                  FAQ ME\n                                                </a>\n                                              </td>\n                                            </tr> -->\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </table>\n                              <!-- RIGHT COLUMN -->\n                              <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"290\" align=\"right\" class=\"responsive-table\">\n                                <tr>\n                                  <td valign=\"top\" align=\"left\">\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                      <tr>\n                                        <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" height=\"250\" width=\"290\" class=\"wrapper\" style=\"border: 1px solid #EFEFEF; width: 400px;\">\n                                          <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width: 100%;\" class=\"responsive-table\">\n                                            <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 10px 20px 10px 20px; color: #343434; text-transform: uppercase; width: 400px;\">\n                                                Phone\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #0087DB; font-size: 16px; font-weight: bold; text-align: center; padding: 0px 20px 10px 20px;\">\n                                                <span class=\"appleBody\">{{companyProfile.phone}}</span>                                                                                                                \n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 10px 20px 10px 20px; color: #343434; text-transform: uppercase;\">\n                                                Email\n                                              </td>\n                                            </tr>\n                                            <tr cellspacing=\"0\" cellpadding=\"0\">\n                                              <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; color: #0087DB; padding: 0px 20px 20px 20px; font-weight: bold; font-size: 16px;\">\n                                                <span class=\"appleBody\">\n                                                  <a style=\"color: #0087DB; text-decoration: none !important;\">\n                                                    {{companyProfile.email}}\n                                                  </a>\n                                                </span>\n                                              </td>\n                                            </tr>\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </table>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n            </table>\n          <!-- END CS CONTACT ROW SECTION-->\n          \n          <!-- FOOTER -->\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n              <tr>\n                <td bgcolor=\"#ffffff\" align=\"center\" style=\"padding: 20px 0px;\">\n                  <!-- UNSUBSCRIBE COPY -->\n                  <table width=\"600\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\" class=\"responsive-table\">\n                    <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 0 20px 0; font-size: 14px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#888888;\">\n                        Until next time, <strong>Techsimians Team</strong>\n                      </td>\n                    </tr>\n                    <!-- <tr>\n                      <td>\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                          <tr width=\"183\">\n                            <td>\n                              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                                <tr width=\"157\">\n                                  <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://www.facebook.com/Firebox\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/facebook_icon.png\" width=\"16\" height=\"16\">\n                                    </a>\n                                  </td>\n                                  <td width=\"19\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://twitter.com/Firebox\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/twitter_icon.png\" width=\"19\" height=\"16\">\n                                    </a>\n                                  </td>\n                                  <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://www.instagram.com/Firebox/\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/instagram_icon.png\" width=\"16\" height=\"16\">\n                                    </a>\n                                  </td>\n                                  <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                    <a href=\"https://www.pinterest.com/firebox/\" target=\"blank\">\n                                      <img src=\"http://media.firebox.com/i/nl/pinterest_icon.png\" width=\"16\" height=\"16\">\n                                    </a>\n                                  </td>\n                                </tr>\n                              </table>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n                    </tr> -->\n                    <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 0 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                        <span class=\"appleBody\">\n                          <strong>Techsimians</strong><br /> Mumbai, Maharashtra, India.\n                        </span>\n                      </td>\n                    </tr>\n                    <!-- <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 20px 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                        <span class=\"appleBody\">\n                          VAT Reg. No.: 798 6593 41 Registered in England & Wales, No. 3874477\n                        </span>\n                      </td>\n                    </tr> -->\n                    <tr>\n                      <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 20px 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                        <span class=\"appleBody\" style=\"color:#888888;\">\n                          <a style=\"color:#888888 !important;\">info@yourfleetman.com</a>\n                        </span>\n                        <span class=\"hide-mobile\">&nbsp; | &nbsp;</span>\n                        <span class=\"appleBody break\" style=\"color:#888888;\">\n                          <a href=\"http://www.techsimians.com\"\n                            style=\"color: #888888 !important;\">www.techsimians.com</a>\n                        </span>\n                        <span class=\"hide-mobile\">&nbsp; | &nbsp;</span>\n                        <span class=\"appleBody break\" style=\"color:#888888;\">\n                          8080 425 120\n                        </span>\n                      </td>\n                    </tr>\n                  </table>\n                </td>                \n            </tr>\n          </table>\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" *ngIf=\"businessSettings.bookingConfirmationFooter != ''\">\n            <tr>\n              <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 20px 15px 20px 15px;\" class=\"top-padding\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                  <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                  <tr>\n                    <td>\n                      <!-- TWO COLUMNS -->\n                      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        <tr>\n                          <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                              <tr>\n                                <td valign=\"top\" align=\"left\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                    <tr>\n                                      <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px; border: 1px solid #EFEFEF;\">\n                                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                          <tr cellspacing=\"0\" cellpadding=\"0\">\n                                            <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                              <p [innerHTML]=\"businessSettings.bookingConfirmationFooter\"></p>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n        </body>\n      </html>\n    </div></div></div></div></div></nb-card-body></nb-card>    \n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12 col-12\">\n    <!-- <button mat-raised-button color=\"primary\" (click)=\"sendMail(template)\">Send Mail</button> -->\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/airline/sendvisaconfirmation/sendvisaconfirmation.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Share+Tech+Mono);\nb {\n  display: inline-block; }\nbody,\np {\n  padding: 0;\n  margin: 0; }\n.blockDiv {\n  margin: 0px 20px 0px 20px; }\nbody {\n  background: #272726; }\nlabel {\n  text-align: center;\n  font-family: Helvetica, sans-serif;\n  font-size: 1.25em;\n  color: #000000;\n  display: block; }\ndiv#controls {\n  padding: 3em;\n  max-width: 1200px;\n  margin: 0 auto; }\ndiv#controls div {\n  float: left; }\ndiv#controls div#call-controls,\ndiv#controls div#info {\n  width: 16em;\n  margin: 0 11.5em;\n  text-align: center; }\ndiv#controls div#info div#output-selection {\n  display: none; }\ndiv#controls div#info a {\n  font-size: 1.1em;\n  color: black;\n  text-decoration: underline;\n  cursor: pointer; }\ndiv#controls div#info select {\n  width: 300px;\n  height: 60px;\n  margin-bottom: 2em; }\ndiv#controls div#info label {\n  width: 300px; }\ndiv#controls div#call-controls div#volume-indicators {\n  display: none;\n  padding: 10px;\n  margin-top: 20px;\n  width: 500px;\n  text-align: center; }\ndiv#controls div#call-controls div#volume-indicators > div {\n  display: block;\n  height: 20px;\n  width: 0; }\ndiv#controls p.instructions {\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: Helvetica-LightOblique, Helvetica, sans-serif;\n  font-style: oblique;\n  font-size: 1.25em;\n  color: #000000; }\ndiv#controls div#info #client-name {\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: \"Helvetica Light\", Helvetica, sans-serif;\n  font-size: 1.25em;\n  color: #000000; }\ndiv#controls button {\n  width: 15em;\n  height: 2.5em;\n  margin-top: 1.75em;\n  border-radius: 1em;\n  font-family: \"Helvetica Light\", Helvetica, sans-serif;\n  font-size: .8em;\n  font-weight: lighter;\n  outline: 0; }\ndiv#controls button:active {\n  position: relative;\n  top: 1px; }\ndiv#controls div#call-controls {\n  display: none; }\ndiv#controls div#call-controls input {\n  font-family: Helvetica-LightOblique, Helvetica, sans-serif;\n  font-style: oblique;\n  font-size: 1em;\n  width: 100%;\n  height: 2.5em;\n  padding: .5em;\n  display: block; }\ndiv#controls div#call-controls button {\n  color: black;\n  background: 0 0;\n  border: 1px solid #000000; }\ndiv#controls div#call-controls button#button-hangup {\n  display: none; }\ndiv#controls div#log {\n  border: 1px solid #000000;\n  width: 35%;\n  height: 9.5em;\n  margin-top: 2.75em;\n  text-align: center;\n  padding: 1.5em;\n  float: right;\n  overflow-y: scroll; }\ndiv#controls div#log p {\n  color: #686865;\n  font-family: 'Share Tech Mono', 'Courier New', Courier, fixed-width;\n  font-size: 1.25em;\n  line-height: 1.25em;\n  margin-left: 1em;\n  text-indent: -1.25em;\n  width: 90%; }\n.whatsappBlock {\n  text-align: center; }\n.whatsappTo {\n  margin-left: -188px; }\n.whatsappTextArea {\n  width: 300px;\n  height: 200px; }\n.checkbox {\n  margin-left: 30px; }\n.driver {\n  margin-top: 5px; }\n.driverName {\n  margin: 10px 90px 5px 0px; }\n.driverNumber {\n  margin: 10px 87px 5px 0px; }\n.callTable {\n  border-collapse: collapse;\n  width: 100%; }\n.callCell {\n  padding: 5px;\n  border: 1px solid lightgrey;\n  line-height: 40px; }\n.mat-checkbox-inner-container {\n  margin-right: 3px !important; }\n.mat-checkbox {\n  margin-right: 15px !important; }\n"

/***/ }),

/***/ "./src/app/pages/airline/sendvisaconfirmation/sendvisaconfirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendvisaconfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__circles_companyprofile_companyprofile_service__ = __webpack_require__("./src/app/pages/circles/companyprofile/companyprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visa_visa_service__ = __webpack_require__("./src/app/pages/airline/visa/visa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__duties_call_call_service__ = __webpack_require__("./src/app/pages/duties/call/call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__messaging_service__ = __webpack_require__("./src/app/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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













var SendvisaconfirmationComponent = (function () {
    function SendvisaconfirmationComponent(data, http, dialog, auth, companyProfileService, visaService, callService, snackBar, msgService, customerService, uploadService, _sanitizer) {
        this.data = data;
        this.http = http;
        this.dialog = dialog;
        this.auth = auth;
        this.companyProfileService = companyProfileService;
        this.visaService = visaService;
        this.callService = callService;
        this.snackBar = snackBar;
        this.msgService = msgService;
        this.customerService = customerService;
        this.uploadService = uploadService;
        this._sanitizer = _sanitizer;
        this.callNumber = 0;
        this.deviceStatus = 'Offline';
        this.customNumber = '';
        this.customEmail = '';
        this.companyLogo = '';
        this.emailAttachments = false;
        this.attachments = [];
        this.addedAttachments = [];
        this.attachmentNames = [];
        this.mailSubject = "Your booking has been confirmed";
        this.bookingDate = new Date().toISOString().split('T')[0];
        this.businessSettings = {};
        this.user = {};
        this.companyProfile = {};
        this.travellers = [];
        this.allPassengers = [];
        this.allBookedBy = [];
        this.booking = {};
        this.message = '';
        this.whatsappMessage = '';
        this.smsArray = [];
        this.whatsAppArray = [];
        this.bookedByArray = [];
        this.passengerArray = [];
        this.customerArray = [];
        this.bookByLogCount = 0;
        this.passengerLogCount = 0;
        this.driverLogCount = 0;
        this.customerLogCount = 0;
        this.customLogCount = 0;
        this.logDisplay = [];
        this.logs = [];
        this.mailPassenger = false;
        this.customer = {};
    }
    SendvisaconfirmationComponent.prototype.ngAfterViewInit = function () {
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
    SendvisaconfirmationComponent.prototype.checkNumber = function (data) {
        try {
            var notify = JSON.parse(data.notification.body);
            return notify.number;
        }
        catch (e) {
            return 0;
        }
    };
    SendvisaconfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.auth.businessSettings.subscribe(function (data) {
            _this.businessSettings = data;
        });
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.booking = _this.data.row;
            if (data) {
                _this.customerService.getSingleCustomer({ customerId: _this.booking.customerId }).subscribe(function (data) {
                    console.log(data);
                    _this.customer = data[0];
                });
                _this.visaService.getVisaTravellers(_this.data.row).subscribe(function (data) {
                    _this.travellers = data;
                    _this.allPassengers = data;
                    _this.allBookedBy[0] = {
                        bookByName: _this.booking.bookBy,
                        bookByNo: _this.booking.bookByNo,
                        bookByEmail: _this.booking.bookByEmail,
                    };
                    _this.callService.checkDevice(_this.user).subscribe();
                    console.log(_this.allBookedBy, _this.allPassengers);
                    console.log(_this.data);
                });
                _this.visaService.getVisaFiles({ id: _this.booking.id }).subscribe(function (data) {
                    _this.emailAttachments = true;
                    _this.attachments = data;
                });
                // this.callService.getAllPassengers({bookingId:this.data.bid}).subscribe(data=>{
                // })
                // this.callService.getAllBookedBy({bookingId:this.data.bid}).subscribe(data=>{
                // })
                _this.callService.getVisaLogs({ visaId: _this.booking.id }).subscribe(function (data) {
                    _this.logDisplay = data;
                });
                // this.callService.getLogs({visaId:this.data.row.id,type:'driver'}).subscribe(data=>{
                //   this.driverLogsDisplay=data
                // })
            }
            _this.companyProfileService.getCompanyProfile(_this.user).subscribe(function (data) {
                _this.companyProfile = data[0];
                _this.uploadService.getFile(_this.user.companyName, 'profileImages', _this.companyProfile.companyLogo).subscribe(function (data) {
                    _this.companyLogo = _this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                        + data.text());
                });
                if (_this.businessSettings.UseBookingsIDInSMS == true) {
                    _this.message = "Location: " + _this.data.row.location + ".%0aType: " + _this.data.row.visaType + ".%0aFrom: " + __WEBPACK_IMPORTED_MODULE_6_moment__(_this.data.row.from).format('DD-MM-YYYY') + ".%0aTo: " + __WEBPACK_IMPORTED_MODULE_6_moment__(_this.data.row.to).format('DD-MM-YYYY') + ".%0aCost: " + _this.data.row.visaCost + ".%0aYour Booking ID is " + _this.data.row.id;
                    _this.whatsappMessage = "Location: " + _this.data.row.location + ".%0aType: " + _this.data.row.visaType + ".%0aFrom: " + __WEBPACK_IMPORTED_MODULE_6_moment__(_this.data.row.from).format('DD-MM-YYYY') + ".%0aTo: " + __WEBPACK_IMPORTED_MODULE_6_moment__(_this.data.row.to).format('DD-MM-YYYY') + ".%0aCost: " + _this.data.row.visaCost + ".%0aYour Booking ID is " + _this.data.row.id + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0a This is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                }
                else {
                    _this.message = "Location: " + _this.data.row.location + ".%0aType: " + _this.data.row.visaType + ".%0aFrom: " + __WEBPACK_IMPORTED_MODULE_6_moment__(_this.data.row.from).format('DD-MM-YYYY') + ".%0aTo: " + __WEBPACK_IMPORTED_MODULE_6_moment__(_this.data.row.to).format('DD-MM-YYYY') + ".%0aCost: " + _this.data.row.visaCost;
                    _this.whatsappMessage = "Location: " + _this.data.row.location + ".%0aType: " + _this.data.row.visaType + ".%0aFrom: " + __WEBPACK_IMPORTED_MODULE_6_moment__(_this.data.row.from).format('DD-MM-YYYY') + ".%0aTo: " + __WEBPACK_IMPORTED_MODULE_6_moment__(_this.data.row.to).format('DD-MM-YYYY') + ".%0aCost: " + _this.data.row.visaCost + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                }
            });
        });
    };
    SendvisaconfirmationComponent.prototype.makeAppCall = function (number) {
        var temp = {
            userId: this.user.id,
            number: number,
            ownerId: this.user.ownerId,
            date: __WEBPACK_IMPORTED_MODULE_6_moment__().format("YYYY-MM-DD")
        };
        this.callService.makeCall(temp);
    };
    SendvisaconfirmationComponent.prototype.sendMail = function (div1) {
        var _this = this;
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
            _this.snackBar.open("Mail Sent", "X", { duration: 3000 });
            _this.dialog.closeAll();
            console.log(data);
        });
        console.log(this.mailSubject);
        console.log(this.mailBody.innerHTML);
    };
    SendvisaconfirmationComponent.prototype.messageSize = function () {
        this.messageLength = Math.ceil(this.message.length / 160);
        return this.messageLength;
    };
    SendvisaconfirmationComponent.prototype.closeDialog = function () {
        this.callService.unsubscribe(this.user).subscribe();
        this.dialog.closeAll();
    };
    SendvisaconfirmationComponent.prototype.sendSMS = function (event, number, type, name) {
        if (event.checked) {
            if (type == 'bookedBy') {
                this.logs.push({ visaId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'passenger') {
                this.logs.push({ visaId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'customer') {
                this.logs.push({ visaId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customerLogCount = this.customerLogCount + 1;
            }
            if (type == 'custom') {
                this.logs.push({ visaId: this.data.row.id, log: "SMS was sent to " + number + " on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
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
    SendvisaconfirmationComponent.prototype.sendWhatsApp = function (event, number, type, name) {
        if (event.checked) {
            if (type == 'bookedBy') {
                this.logs.push({ visaId: this.data.row.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'passenger') {
                this.logs.push({ visaId: this.data.row.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'customer') {
                this.logs.push({ visaId: this.data.row.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customerLogCount = this.customerLogCount + 1;
            }
            if (type == 'custom') {
                this.logs.push({ visaId: this.data.row.id, log: "WhatsApp was sent to " + number + " on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
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
    SendvisaconfirmationComponent.prototype.sendEmail = function (event, email, type, name) {
        if (event.checked) {
            if (type == 'bookedBy') {
                this.logs.push({ visaId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookedByArray.push(email);
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'passenger') {
                this.logs.push({ visaId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerArray.push(email);
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'customer') {
                this.logs.push({ visaId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_6_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
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
    SendvisaconfirmationComponent.prototype.send = function () {
        var _this = this;
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
            this.callService.sendSMS({ number: this.smsArray, message: this.message }).subscribe(function (data) { }, function (err) { }, function () {
                var i = _this.smsArray.findIndex(function (x) { return x === _this.customNumber; });
                _this.smsArray.splice(i, 1);
                _this.customNumber = '';
                _this.snackBar.open("SMS Sent", "X", { duration: 3000 });
            });
        }
        if (this.whatsAppArray.length > 0) {
            this.callService.sendWhatsApp({ number: this.whatsAppArray, message: this.whatsappMessage }).subscribe(function (data) { }, function (err) { }, function () {
                var i = _this.whatsAppArray.findIndex(function (x) { return x === _this.customNumber; });
                _this.whatsAppArray.splice(i, 1);
                _this.customNumber = '';
                _this.snackBar.open("Whatsapp Sent", "X", { duration: 3000 });
            });
        }
        if (this.bookedByArray.length > 0) {
            if (this.businessSettings.CCAllAllotmentEmails) {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.bookedByArray,
                    cc: this.businessSettings.AutoCCEmail,
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_6_moment__(this.booking.from).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.booking.id
                };
            }
            else {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.bookedByArray,
                    cc: '',
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_6_moment__(this.booking.from).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.booking.id
                };
            }
            this.http.post('/Voip/sendMailVisaConfirm', temp).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
            }, function (err) { }, function () {
                _this.snackBar.open("Email Sent", "X", { duration: 3000 });
            });
        }
        if (this.passengerArray.length > 0) {
            if (this.businessSettings.CCAllAllotmentEmails) {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.passengerArray,
                    cc: this.businessSettings.AutoCCEmail,
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_6_moment__(this.booking.from).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.booking.id
                };
            }
            else {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.passengerArray,
                    cc: '',
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_6_moment__(this.booking.from).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.booking.id
                };
            }
            this.http.post('/Voip/sendMailVisaConfirm', temp).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
            }, function (err) { }, function () {
                _this.snackBar.open("Email Sent", "X", { duration: 3000 });
            });
        }
        if (this.customerArray.length > 0) {
            if (this.businessSettings.CCAllAllotmentEmails) {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.customerArray,
                    cc: this.businessSettings.AutoCCEmail,
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_6_moment__(this.booking.from).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.booking.id
                };
            }
            else {
                var temp = {
                    companyEmail: this.companyProfile.email,
                    name: this.companyProfile.name,
                    email: this.customerArray,
                    cc: '',
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_6_moment__(this.booking.from).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.booking.id
                };
            }
            this.http.post('/Voip/sendMailVisaConfirm', temp).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
            }, function (err) { }, function () {
                _this.snackBar.open("Email Sent", "X", { duration: 3000 });
            });
        }
        var count = {
            sms: this.smsArray.length,
            whatsApp: this.whatsAppArray.length,
            email: this.bookedByArray.length + this.passengerArray.length + this.customerArray.length,
            date: __WEBPACK_IMPORTED_MODULE_6_moment__().format("YYYY-MM-DD"),
            ownerId: this.user.ownerId
        };
        this.callService.insertCount(count).subscribe(function (data) {
            console.log(data);
        });
        this.insertLog();
    };
    SendvisaconfirmationComponent.prototype.insertLog = function () {
        var _this = this;
        this.logs.forEach(function (element) {
            _this.callService.insertVisaLogs(element).subscribe(function (data) {
                console.log(data);
            });
        });
    };
    SendvisaconfirmationComponent.prototype.addAttachments = function (event, key) {
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
    ], SendvisaconfirmationComponent.prototype, "dutyPassengerTemplate", void 0);
    SendvisaconfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sendvisaconfirmation',
            template: __webpack_require__("./src/app/pages/airline/sendvisaconfirmation/sendvisaconfirmation.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/sendvisaconfirmation/sendvisaconfirmation.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__circles_companyprofile_companyprofile_service__["a" /* CompanyprofileService */],
            __WEBPACK_IMPORTED_MODULE_5__visa_visa_service__["a" /* VisaService */],
            __WEBPACK_IMPORTED_MODULE_7__duties_call_call_service__["a" /* CallService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_9__messaging_service__["a" /* MessagingService */],
            __WEBPACK_IMPORTED_MODULE_10__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_11__fileupload_service__["a" /* FileuploadService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["DomSanitizer"]])
    ], SendvisaconfirmationComponent);
    return SendvisaconfirmationComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/viewflightbooking/viewflightbooking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-12\">\n    <nb-card>\n      <nb-card-header>Flight</nb-card-header>\n      <nb-card-body class=\"hide-overflow\">\n        <div class=\"row ptb-10\">\n          <div class=\"col-lg-12 col-12\">              \n            <b>Customer Name:</b> {{flightDetails.customerName}}                  \n          </div>                      \n        </div>\n        <div class=\"row ptb-10\">\n          <div class=\"col-lg-4 col-12\">              \n            <b>Guest Name:</b> {{ flightDetails.guestName }}                \n          </div>\n          <div class=\"col-lg-4 col-12\">                            \n            <b>Guest Mobile:</b> {{ flightDetails.guestMobile }}                \n          </div>\n          <div class=\"col-lg-4 col-12\">              \n            <b>Guest Email:</b> {{ flightDetails.guestEmail }}                \n          </div>\n        </div>\n        <div class=\"row ptb-10\">\n          <div class=\"col-lg-4 col-12\">\n            <b>Name (Booked By):</b> {{ flightDetails.bookByName }}\n          </div>\n          <div class=\"col-lg-4 col-12\">\n            <b>Phone No (Booked By):</b> {{ flightDetails.bookByNo }}                \n          </div>\n          <div class=\"col-lg-4 col-12\">              \n            <b>Email Id (Booked By):</b> {{ flightDetails.bookByEmail }}                \n          </div>\n        </div>                  \n        <div class=\"row ptb-10\" *ngIf=\"internationalFlight != null\">\n          <div class=\"col-lg-12 col-12\">\n            <!-- Is it a connecting flight?  -->\n            <mat-radio-group hidden>\n              <mat-radio-button value=\"yes\" (change)=\"connectingFlights()\">Yes</mat-radio-button>\n              &nbsp;\n              <mat-radio-button value=\"no\" (change)=\"notConnectingFlight()\">No</mat-radio-button>\n            </mat-radio-group>     \n          </div>\n        </div>\n        <div class=\"row\">\n          <table class=\"table table-bordered\">\n            <tr >\n              <td>\n                Flight No\n              </td>\n              <td>\n                From\n              </td>\n              <td>\n                To\n              </td>\n              <td>\n                Date\n              </td>\n            </tr>\n            <tr>\n              <td>\n                {{data.row.flightNo}}\n              </td>\n              <td>\n                {{data.row.from}}\n              </td>\n              <td>\n                {{data.row.to}}\n              </td>\n              <td>\n                {{data.row.departureDate | date:'dd-MM-yyyy'}}\n              </td>\n            </tr>\n            <tr *ngIf=\"data.row.flightNoConnecting\">\n              <td>\n                {{data.row.flightNoConnecting}}\n              </td>\n              <td>\n                {{data.row.connectingFrom}}\n              </td>\n              <td>\n                {{data.row.connectingTo}}\n              </td>\n              <td>\n                {{data.row.departureDate | date:'dd-MM-yyyy'}}\n              </td>\n            </tr>\n            <tr *ngIf=\"data.row.flightNoReturn\">\n              <td>\n                {{data.row.flightNoReturn}}\n              </td>\n              <td>\n                {{data.row.to}}\n              </td>\n              <td>\n                {{data.row.from}}\n              </td>\n              <td>\n                {{data.row.arrivalDate | date:'dd-MM-yyyy'}}\n              </td>\n            </tr>\n            <tr *ngIf=\"data.row.flightNoConnectingReturn\">\n              <td>\n                {{data.row.flightNoConnectingReturn}}\n              </td>\n              <td>\n                {{data.row.connectingReturnFrom}}\n              </td>\n              <td>\n                {{data.row.connectingReturnTo}}\n              </td>\n              <td>\n                {{data.row.arrivalDate | date:'dd-MM-yyyy'}}\n              </td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"row ptb-10\">\n          <div class=\"col-lg-6 col-12\">                              \n            <b>Price:</b> {{ flightDetails.price }}                  \n          </div>\n          <div class=\"col-lg-6 col-12\">              \n            <b>Handling Charges:</b> {{ flightDetails.handlingCharges }}                  \n          </div>            \n        </div>\n      </nb-card-body>\n    </nb-card>\n    <div style=\"bottom: 5%\" *ngIf=\"logs.length>0\">\n      <ul>\n        <li *ngFor=\"let element of logs\">\n          {{element.message}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12 col-12\">      \n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/airline/viewflightbooking/viewflightbooking.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/viewflightbooking/viewflightbooking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewflightbookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activitylog_service__ = __webpack_require__("./src/app/activitylog.service.ts");
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



var ViewflightbookingComponent = (function () {
    function ViewflightbookingComponent(data, dialog, activityLogs) {
        var _this = this;
        this.data = data;
        this.dialog = dialog;
        this.activityLogs = activityLogs;
        this.flightDetails = {};
        this.logs = [];
        if (data.row != null) {
            console.log(data.row);
            this.flightDetails = data.row;
            if (data.row.isInternational == 1) {
                this.internationalFlight = true;
                // this.bookFlight.patchValue({
                //   'internationalRadioGroup': 'international'
                // // })
                // this.internationalToCtrl.setValue(data.row.to);
                // this.internationalFromCtrl.setValue(data.row.from);
            }
            else if (data.row.isInternational == 0) {
                this.internationalFlight = false;
                // this.bookFlight.patchValue({
                //   'internationalRadioGroup': 'domestic'
                // })
                // this.domesticToCtrl.setValue(data.row.to);
                // this.domesticFromCtrl.setValue(data.row.from);     
            }
            if (data.row.flightNoReturn != null) {
                this.roundTrip = true;
            }
            else if (data.row.flightNoReturn == null) {
                this.roundTrip = false;
            }
            if (data.row.flightNoConnecting != null) {
                this.connectingFlight = true;
            }
            if (data.row.flightNoConnecting == null) {
                this.connectingFlight = false;
            }
            if (data.row.flightNoConnectingReturn != null) {
                this.connectingFlight = true;
                this.roundTrip = true;
            }
            this.activityLogs.getFlightLogs({ id: data.row.id }).subscribe(function (data) {
                console.log(data);
                _this.logs = data;
            });
        }
    }
    ViewflightbookingComponent.prototype.ngOnInit = function () {
    };
    ViewflightbookingComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    ViewflightbookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'viewflightbooking',
            template: __webpack_require__("./src/app/pages/airline/viewflightbooking/viewflightbooking.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/viewflightbooking/viewflightbooking.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__activitylog_service__["a" /* ActivitylogService */]])
    ], ViewflightbookingComponent);
    return ViewflightbookingComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/viewflightticket/viewflightticket.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  viewflightticket works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/airline/viewflightticket/viewflightticket.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/viewflightticket/viewflightticket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewflightticketComponent; });
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

var ViewflightticketComponent = (function () {
    function ViewflightticketComponent() {
    }
    ViewflightticketComponent.prototype.ngOnInit = function () {
    };
    ViewflightticketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'viewflightticket',
            template: __webpack_require__("./src/app/pages/airline/viewflightticket/viewflightticket.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/viewflightticket/viewflightticket.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewflightticketComponent);
    return ViewflightticketComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/viewvisabooking/viewvisabooking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Visa\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"container\">\n          <div class=\"row ptb-10\">\n            <div class=\"col-lg-8 col-12\">\n              <b>Customer Name:</b> {{visaDetails.cname}}\n            </div>\n          </div>\n          <div class=\"row ptb-10\">\n            <div class=\"col-lg-4 col-12\">\n              <b>Name (Booked By):</b> {{visaDetails.bookBy}}\n            </div>\n            <div class=\"col-lg-4 col-12\">\n              <b>Phone No (Booked By):</b> {{visaDetails.bookByNo}}\n            </div>\n            <div class=\"col-lg-4 col-12\">\n              <b>Email Id (Booked By):</b> {{visaDetails.bookByEmail}}\n            </div>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card>\n      <nb-card-header>VISA Details</nb-card-header>\n      <nb-card-body>\n        <div class=\"row ptb-10\">\n          <div class=\"col-lg-3 col-12\">\n            <b>Location:</b> {{visaDetails.location}}\n          </div>\n          <div class=\"col-lg-3 col-12\">\n            <b>VISA Type:</b> {{visaDetails.visaType}}\n          </div>\n          <div class=\"col-lg-3 col-12\">\n            <b>From:</b> {{visaDetails.from | date:'dd-MM-yyyy'}}\n          </div>\n          <div class=\"col-lg-3 col-12\">\n            <b>To:</b> {{visaDetails.to | date:'dd-MM-yyyy'}}\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <nb-card>\n      <nb-card-header>Travellers</nb-card-header>\n      <nb-card-body>\n        <div class=\"row w-100\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <th>Sr No.</th>\n              <th>Name</th>\n              <th>Phone</th>\n              <th>Email</th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let element of travellers; let i=index\">\n                <td>\n                  {{i+1}}\n                </td>\n                <td>\n                  {{element.name}}\n                </td>\n                <td>\n                  {{element.phone}}\n                </td>\n                <td>\n                  {{element.email}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"row ptb-10\">\n          <div class=\"col-lg-6 col-12\">\n            <b>Visa Cost:</b> {{visaDetails.visaCost}}\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <div style=\"bottom: 5%\" *ngIf=\"logs.length>0\">\n      <ul>\n        <li *ngFor=\"let element of logs\">\n          {{element.message}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <button color=\"warn\" mat-raised-button (click)=\"closeDialog()\">Close</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/airline/viewvisabooking/viewvisabooking.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/viewvisabooking/viewvisabooking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewvisabookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visa_visa_service__ = __webpack_require__("./src/app/pages/airline/visa/visa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activitylog_service__ = __webpack_require__("./src/app/activitylog.service.ts");
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




var ViewvisabookingComponent = (function () {
    function ViewvisabookingComponent(data, visaService, dialog, activityLogs) {
        var _this = this;
        this.data = data;
        this.visaService = visaService;
        this.dialog = dialog;
        this.activityLogs = activityLogs;
        this.travellers = [];
        this.visaDetails = {};
        this.logs = [];
        if (data.row != null) {
            console.log(data.row);
            this.visaDetails = data.row;
            this.visaService.getVisaTravellers(this.visaDetails).subscribe(function (data) {
                _this.travellers = data;
            });
            this.activityLogs.getVisaLogs({ id: data.row.id }).subscribe(function (data) {
                _this.logs = data;
            });
        }
    }
    ViewvisabookingComponent.prototype.ngOnInit = function () {
    };
    ViewvisabookingComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    ViewvisabookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'viewvisabooking',
            template: __webpack_require__("./src/app/pages/airline/viewvisabooking/viewvisabooking.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/viewvisabooking/viewvisabooking.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__visa_visa_service__["a" /* VisaService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__activitylog_service__["a" /* ActivitylogService */]])
    ], ViewvisabookingComponent);
    return ViewvisabookingComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/visa-advancepayment/visa-advancepayment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Visa Advance Payment\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            Booking ID #{{bookingId}}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Amount\n              <input matInput [(ngModel)]=\"advancePayment.amount\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            Payment Mode\n            <br><br>\n            <mat-radio-group [(ngModel)]=\"advancePayment.paymentMode\" (change)=\"checkPaymentMode(advancePayment.paymentMode)\">\n              <mat-radio-button value=\"Credit Card\">Credit Card</mat-radio-button>\n              <mat-radio-button value=\"Cheque\">Cheque</mat-radio-button>\n              <mat-radio-button value=\"NEFT\">NEFT</mat-radio-button>\n              <mat-radio-button value=\"Cash\">Cash</mat-radio-button>\n              <mat-radio-button value=\"Others\">Others</mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"cheque\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Cheque Number\n              <input matInput [(ngModel)]=\"advancePayment.chequeNumber\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              Bank Name\n              <input matInput [(ngModel)]=\"advancePayment.bankName\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              Cheque Date\n              <input matInput [(ngModel)]=\"advancePayment.chequeDate\" [matDatepicker]=\"chequeDate\" (click)=\"chequeDate.open()\">\n              <mat-datepicker-toggle matSuffix [for]=\"chequeDate\"></mat-datepicker-toggle>\n              <mat-datepicker #chequeDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"neft\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Transaction Number\n              <input matInput [(ngModel)]=\"advancePayment.transactionNumber\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Bank Name\n              <input matInput [(ngModel)]=\"advancePayment.neftBankName\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field class=\"w-100\">\n              Received in Bank              \n              <input matInput [formControl]=\"receivedInBankCtrl\"  [matAutocomplete]=\"autoRIB\">\n              <mat-autocomplete #autoRIB=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of bankAccount | async\" [value]=\"option.bankName\" (onSelectionChange)=\"setReceivedInBank(option,$event)\">\n                      {{ option.bankName }} ({{option.number}})\n                  </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Bank Credit Date\n              <input matInput [(ngModel)]=\"advancePayment.bankCreditDate\" [matDatepicker]=\"bankCreditDate\" (click)=\"bankCreditDate.open()\">\n              <mat-datepicker-toggle matSuffix [for]=\"bankCreditDate\"></mat-datepicker-toggle>\n              <mat-datepicker #bankCreditDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n      </nb-card-body>  \n    </nb-card>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12\">\n    <button mat-raised-button color=\"primary\" (click)=\"saveAdvancePayment()\">Save</button>\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>  "

/***/ }),

/***/ "./src/app/pages/airline/visa-advancepayment/visa-advancepayment.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/visa-advancepayment/visa-advancepayment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisaAdvancepaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operations_advancepayment_advancepayment_service__ = __webpack_require__("./src/app/pages/operations/advancepayment/advancepayment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operations_new_bank_account_bank_account_service__ = __webpack_require__("./src/app/pages/operations/new-bank-account/bank-account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
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








var VisaAdvancepaymentComponent = (function () {
    function VisaAdvancepaymentComponent(dialog, data, advancepaymentService, auth, bankAccountService, snackBar) {
        this.dialog = dialog;
        this.data = data;
        this.advancepaymentService = advancepaymentService;
        this.auth = auth;
        this.bankAccountService = bankAccountService;
        this.snackBar = snackBar;
        this.user = {};
        this.advancePayment = {};
        this.cheque = false;
        this.neft = false;
        this.receivedInBankCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        if (this.data != null) {
            this.bookingId = data.visaId;
        }
    }
    VisaAdvancepaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.bankAccountService.getBankAccount(_this.user).subscribe(function (data) {
                _this.bankAccounts = data;
                _this.bankAccount = _this.receivedInBankCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterBankAccounts(val); }));
            });
        });
    };
    VisaAdvancepaymentComponent.prototype.checkPaymentMode = function (temp) {
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
    VisaAdvancepaymentComponent.prototype.setReceivedInBank = function (option, event) {
        if (event.source.selected == true) {
            // console.log(option);
            this.advancePayment.receivedInBank = option.id;
        }
    };
    VisaAdvancepaymentComponent.prototype.saveAdvancePayment = function () {
        var _this = this;
        this.advancePayment.visaId = this.bookingId;
        this.advancepaymentService.addVisaAdvancePayment(this.advancePayment).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Advance Payment Added", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    VisaAdvancepaymentComponent.prototype.filterBankAccounts = function (val) {
        return this.bankAccounts.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    VisaAdvancepaymentComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    VisaAdvancepaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'visa-advancepayment',
            template: __webpack_require__("./src/app/pages/airline/visa-advancepayment/visa-advancepayment.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/visa-advancepayment/visa-advancepayment.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */], Object, __WEBPACK_IMPORTED_MODULE_3__operations_advancepayment_advancepayment_service__["a" /* AdvancepaymentService */],
            __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__operations_new_bank_account_bank_account_service__["a" /* BankAccountService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSnackBar */]])
    ], VisaAdvancepaymentComponent);
    return VisaAdvancepaymentComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/visa-files/visa-files.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\">\n\n  <div formArrayName=\"files\">\n\n      <div *ngFor=\"let files of fileForms.controls; let i=index\" [formGroupName]=\"i\">\n\n\n          <mat-form-field class=\"xs\" style=\"padding-right: 20px\">\n              <input matInput placeholder=\"Name\" formControlName=\"name\">\n          </mat-form-field>\n\n          <button (click)=\"bookingImages.click()\" mat-flat-button matTooltip=\"Upload\">Browse</button>\n          <input hidden type=\"file\" formControlName=\"images\" #bookingImages (change)=\"imageSelect($event,i)\">\n          <i *ngIf=\"selectedFiles[i]!=undefined\" style=\"font-size: 11px;\">{{selectedFiles[i].name}}</i>\n\n          <button mat-icon-button color=\"warn\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon></button>\n\n      </div>\n\n  </div>\n\n  <button mat-raised-button color=\"primary\" (click)=\"addRow()\">Add File</button>\n\n  <button mat-raised-button color=\"primary\" (click)=\"uploadFinal()\">Upload</button>\n\n</form>"

/***/ }),

/***/ "./src/app/pages/airline/visa-files/visa-files.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/airline/visa-files/visa-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisaFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__visa_visa_service__ = __webpack_require__("./src/app/pages/airline/visa/visa.service.ts");
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







var VisaFilesComponent = (function () {
    function VisaFilesComponent(fb, uploadService, data, visaService, http, auth, snackBar) {
        this.fb = fb;
        this.uploadService = uploadService;
        this.data = data;
        this.visaService = visaService;
        this.http = http;
        this.auth = auth;
        this.snackBar = snackBar;
        this.imgUrl = [];
        this.selectedFiles = [];
        this.booking = {};
        this.user = {};
        this.booking = data;
    }
    VisaFilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
        });
        this.myForm = this.fb.group({
            files: this.fb.array([])
        });
        this.addRow();
    };
    Object.defineProperty(VisaFilesComponent.prototype, "fileForms", {
        get: function () {
            return this.myForm.get('files');
        },
        enumerable: true,
        configurable: true
    });
    VisaFilesComponent.prototype.addRow = function () {
        var phone = this.fb.group({
            name: [],
            images: [],
            imageName: []
        });
        this.fileForms.push(phone);
    };
    VisaFilesComponent.prototype.deleteRow = function (i) {
        this.fileForms.removeAt(i);
    };
    VisaFilesComponent.prototype.imageSelect = function (event, i) {
        var file = event.target.files[0];
        this.selectedFiles[i] = file;
    };
    VisaFilesComponent.prototype.uploadFinal = function () {
        var _this = this;
        var uploadData = new FormData();
        var headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var body = JSON.stringify({ headers: headers });
        var i = 0;
        this.fileForms.value.forEach(function (element) {
            var type = _this.selectedFiles[i].type.split("/");
            var imageName = _this.booking.id + "_" + element.name + "." + type[1];
            var tempArr = {
                bookingId: _this.booking.id,
                fileName: element.name,
                imageName: _this.booking.id + "_" + element.name + "." + type[1]
            };
            _this.visaService.addVisaFiles(tempArr).subscribe(function (data) { });
            if (_this.selectedFiles[i] != undefined)
                uploadData.append(_this.user.companyName + '/visaFiles/' + _this.booking.id + "/" + imageName, _this.selectedFiles[i], 'visaFiles');
            _this.http.post("/files/uploadS3", uploadData, body).map(function (res) { return res.json(); }).subscribe();
            i = i + 1;
        });
        this.snackBar.open("Files Uploaded", "X", { duration: 3000 });
    };
    VisaFilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'visa-files',
            template: __webpack_require__("./src/app/pages/airline/visa-files/visa-files.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/visa-files/visa-files.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__fileupload_service__["a" /* FileuploadService */], Object, __WEBPACK_IMPORTED_MODULE_6__visa_visa_service__["a" /* VisaService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSnackBar */]])
    ], VisaFilesComponent);
    return VisaFilesComponent;
}());



/***/ }),

/***/ "./src/app/pages/airline/visa/visa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        VISA\n        <div style=\"display:inline; padding-left: 5%;\" *ngIf=\"screenWidth>=560\">\n          <button class=\"booked\" [disabled]=\"filterClicked=='Booked'\" mat-button (click)=\"filter('Booked');\">Booked</button>          \n          <button class=\"cancelled\" [disabled]=\"filterClicked=='Cancelled'\" mat-button color=\"warn\" (click)=\"filter('Cancelled')\">Cancelled</button>\n          <button class=\"completed\" [disabled]=\"filterClicked=='Completed'\" mat-button (click)=\"filter('Completed')\">Completed</button>\n          <button class=\"billed\" [disabled]=\"filterClicked=='Invoiced'\" mat-button (click)=\"filter('Invoiced')\">Invoiced</button>\n          <button class=\"all\" [disabled]=\"filterClicked=='All'\" mat-button (click)=\"filter('All')\">All</button>\n        </div>\n        <div style=\"display:inline; padding-left: 5%;\" *ngIf=\"screenWidth<=560\">\n          <mat-form-field class=\"mobile-select\">\n              <mat-select [value]=\"status\" (selectionChange)=\"filter($event.value)\">\n                <mat-option value=\"Booked\">Booked</mat-option>                                \n                <mat-option value=\"Cancelled\">Cancelled</mat-option>\n                <mat-option value=\"Completed\">Completed</mat-option>\n                <mat-option value=\"Invoiced\">Invoiced</mat-option>\n                <mat-option value='All'>All</mat-option>\n              </mat-select>\n          </mat-form-field>\n        </div>\n\n        <button style=\"float: right;margin-top: -10px;\" mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>settings</mat-icon></button>\n        <mat-menu #menu=\"matMenu\" class=\"mat-menu-panel\">\n            <!-- <button mat-menu-item (click)=\"openImport()\">Import</button> -->\n          <button mat-menu-item *ngIf=\"permission.exportDuty\" (click)=\"openExport()\">Export</button>\n        </mat-menu>\n      </nb-card-header>\n      <nb-card-body>\n        <div align=\"center\">\n          <mat-form-field class=\"filter-field\">\n            <input matInput   placeholder=\"Filter\" [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n          </mat-form-field>\n      \n          <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n          <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n        </div>\n\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container matColumnDef=\"cname\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Customer Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.cname}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"visaCost\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Visa Cost</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.visaCost}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"visaType\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Visa Type</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.visaType}} </mat-cell>\n          </ng-container>\n                    \n          <ng-container matColumnDef=\"from\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>From</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.from | date:'dd-MM-yyyy'}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"to\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>To</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.to | date:'dd-MM-yyyy'}} </mat-cell>\n          </ng-container>          \n\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <mat-chip-list>\n                <mat-chip color=\"primary\" selected=\"true\">{{element.status}}</mat-chip>\n              </mat-chip-list> \n            </mat-cell>            \n          </ng-container>\n        \n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"viewDetails(row)\">View Details</button>\n                <button mat-menu-item *ngIf=\"element.status == 'Booked'\" (click)=\"createInvoice(row)\">Create Invoice</button>\n                <button mat-menu-item *ngIf=\"element.status == 'Booked'\" (click)=\"advancePayment(row)\">Advance Payment</button>\n                <button *ngIf=\"permission.manageVisa && element.status == 'Booked'\" mat-menu-item (click)=\"selectRow(row)\">Edit</button>\n                <button *ngIf=\"permission.manageVisa && element.status == 'Booked' && permission.smsEmailCallVisa\" mat-menu-item (click)=\"sendConfirmation(row)\">Send Confirmation</button>\n                <button *ngIf=\"permission.manageVisa && element.status == 'Booked'\" mat-menu-item (click)=\"completeBooking(row)\">Complete Booking</button>\n                <button mat-menu-item (click)=\"uploadFiles(row)\">Upload/View Files</button>\n                <button *ngIf=\"permission.manageVisa && element.status == 'Booked'\" mat-menu-item (click)=\"cancelBooking(row)\">Cancel</button>\n                <!-- <button (click)=\"deleteVisa(row)\" mat-menu-item>Delete</button> -->\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n        \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row [ngStyle]=\"{'background-color':rowColors(row.to,row.status)}\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        \n        </mat-table>\n        <div *ngIf=\"isLoading\" style=\"display: flex; justify-content: center; align-items: center\">\n          <mat-progress-spinner color=\"warn\" mode=\"indeterminate\"></mat-progress-spinner>\n       </div>\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-12\">\n    <a *ngIf=\"permission.addVisa\" (click)=\"selectRow(null)\" class=\"float\">\n      <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n    </a>      \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/airline/visa/visa.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-chip {\n  -webkit-transform: scale(0.85, 0.85);\n          transform: scale(0.85, 0.85); }\n\n.booked.mat-button[disabled] {\n  color: white !important;\n  background-color: #3f51b5 !important; }\n\n.booked.mat-button {\n  color: #3f51b5 !important; }\n\n.completed.mat-button[disabled] {\n  color: white !important;\n  background-color: #02b975 !important; }\n\n.completed.mat-button {\n  color: #02b975 !important; }\n\n.cancelled.mat-button[disabled] {\n  color: white !important;\n  background-color: #f44436 !important; }\n\n.billed.mat-button[disabled] {\n  color: white !important;\n  background-color: #b90064c4 !important; }\n\n.billed.mat-button {\n  color: #b90064c4 !important; }\n\n.all.mat-button[disabled] {\n  color: black !important;\n  background-color: darkgrey !important; }\n\n.all.mat-button {\n  color: darkgrey !important; }\n"

/***/ }),

/***/ "./src/app/pages/airline/visa/visa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addvisa_addvisa_component__ = __webpack_require__("./src/app/pages/airline/addvisa/addvisa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visa_service__ = __webpack_require__("./src/app/pages/airline/visa/visa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visa_advancepayment_visa_advancepayment_component__ = __webpack_require__("./src/app/pages/airline/visa-advancepayment/visa-advancepayment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_confirm_confirm_component__ = __webpack_require__("./src/app/pages/modals/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewvisabooking_viewvisabooking_component__ = __webpack_require__("./src/app/pages/airline/viewvisabooking/viewvisabooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sendvisaconfirmation_sendvisaconfirmation_component__ = __webpack_require__("./src/app/pages/airline/sendvisaconfirmation/sendvisaconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__exportvisa_exportvisa_component__ = __webpack_require__("./src/app/pages/airline/exportvisa/exportvisa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__visa_files_visa_files_component__ = __webpack_require__("./src/app/pages/airline/visa-files/visa-files.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var VisaComponent = (function () {
    function VisaComponent(auth, dialog, visaService, snackbar, router, snackBar) {
        this.auth = auth;
        this.dialog = dialog;
        this.visaService = visaService;
        this.snackbar = snackbar;
        this.router = router;
        this.snackBar = snackBar;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.user = {};
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material_table__["a" /* MatTableDataSource */]();
        this.displayedColumns = ['cname', 'visaType', 'visaCost', 'from', 'to', 'status', 'Options'];
        this.permission = {};
        this.filterClicked = "Booked";
        this.isLoading = false;
    }
    VisaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
            var _this = this;
            if (event.data == this.user.ownerId + 'visa')
                var body = {
                    ownerId: this.user.ownerId,
                    status: 'Booked'
                };
            this.visaService.getVisa(body).subscribe(function (data) {
                _this.tempArray = data;
                _this.dataSource.data = _this.tempArray;
                _this.length = data.length;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        }.bind(this);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
            });
            var body = {
                ownerId: _this.user.ownerId,
                status: 'Booked'
            };
            _this.visaService.getVisa(body).subscribe(function (data) {
                console.log(data);
                _this.tempArray = data;
                _this.dataSource.data = _this.tempArray;
                _this.length = data.length;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        });
        this.today = __WEBPACK_IMPORTED_MODULE_10_moment__().format('YYYY-MM-DD');
    };
    VisaComponent.prototype.openExport = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_13__exportvisa_exportvisa_component__["a" /* ExportvisaComponent */], { autoFocus: false, disableClose: true });
    };
    VisaComponent.prototype.selectRow = function (row) {
        var _this = this;
        console.log(row);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__addvisa_addvisa_component__["a" /* AddvisaComponent */], { data: { row: row }, autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data == undefined) {
                console.log('no');
            }
            else {
                console.log('yes');
                if (data.inserted == 'yes') {
                    _this.tempArray.push(data.data);
                    _this.dataSource.data = _this.tempArray;
                    console.log(data.data);
                }
            }
        });
    };
    VisaComponent.prototype.viewDetails = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__viewvisabooking_viewvisabooking_component__["a" /* ViewvisabookingComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    VisaComponent.prototype.completeBooking = function (row) {
        var _this = this;
        row.from = __WEBPACK_IMPORTED_MODULE_10_moment__(row.from).format("YYYY-MM-DD");
        row.to = __WEBPACK_IMPORTED_MODULE_10_moment__(row.to).format("YYYY-MM-DD");
        row.status = 'Completed';
        console.log(row);
        this.visaService.updateVisa(row).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Booking Complete", "X", { duration: 3000 });
        });
    };
    VisaComponent.prototype.cancelBooking = function (row) {
        var _this = this;
        row.from = __WEBPACK_IMPORTED_MODULE_10_moment__(row.from).format("YYYY-MM-DD");
        row.to = __WEBPACK_IMPORTED_MODULE_10_moment__(row.to).format("YYYY-MM-DD");
        row.status = 'Cancelled';
        console.log(row);
        this.visaService.updateVisa(row).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Booking Cancelled", "X", { duration: 3000 });
        });
    };
    VisaComponent.prototype.deleteVisa = function (row) {
        var _this = this;
        console.log("delete called");
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.visaService.deleteVisa(row).subscribe(function (data) {
                    if (data.errno == undefined) {
                        var i = _this.tempArray.indexOf(row);
                        _this.tempArray.splice(i, 1);
                        _this.dataSource.data = _this.tempArray;
                    }
                    console.log("deleted");
                });
            }
            else {
                if (data.errno == 1451) {
                    window.alert("Cannot delete because you have corresponding data");
                }
                else {
                    window.alert("Error: Cannot be Deleted");
                }
            }
        });
    };
    VisaComponent.prototype.createInvoice = function (row) {
        this.bookingData = row;
        // this.bookingsService.setBookingId(this.bookingData)
        this.router.navigate(['/pages/masters/createvisainvoice']);
    };
    VisaComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    VisaComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.dataSource.filter = "";
    };
    VisaComponent.prototype.advancePayment = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__visa_advancepayment_visa_advancepayment_component__["a" /* VisaAdvancepaymentComponent */], { autoFocus: false, disableClose: true, data: row });
    };
    VisaComponent.prototype.filter = function (temp) {
        var _this = this;
        this.dataSource.data = [];
        this.isLoading = true;
        this.filterClicked = temp;
        console.log(temp);
        if (temp == 'All') {
            temp = '%%';
        }
        this.paginator._pageIndex = 0;
        var body = {
            ownerId: this.user.ownerId,
            status: temp
        };
        this.visaService.getVisa(body).subscribe(function (data) {
            _this.tempArray = data;
            _this.dataSource.data = _this.tempArray;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.isLoading = false;
        });
    };
    VisaComponent.prototype.rowColors = function (currDate, status) {
        if (currDate < this.today && status === 'Completed') {
            return '#CCFFE5';
        }
        else if (status === 'Cancelled') {
            return 'lightcoral';
        }
        else {
            return 'white';
        }
    };
    VisaComponent.prototype.sendConfirmation = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__sendvisaconfirmation_sendvisaconfirmation_component__["a" /* SendvisaconfirmationComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    VisaComponent.prototype.uploadFiles = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_14__visa_files_visa_files_component__["a" /* VisaFilesComponent */], { autoFocus: false, data: row });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["K" /* MatSort */])
    ], VisaComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["A" /* MatPaginator */])
    ], VisaComponent.prototype, "paginator", void 0);
    VisaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'visa',
            template: __webpack_require__("./src/app/pages/airline/visa/visa.component.html"),
            styles: [__webpack_require__("./src/app/pages/airline/visa/visa.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__visa_service__["a" /* VisaService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["I" /* MatSnackBar */]])
    ], VisaComponent);
    return VisaComponent;
}());



/***/ })

});
//# sourceMappingURL=airline.module.chunk.js.map