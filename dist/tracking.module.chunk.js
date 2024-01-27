webpackJsonp(["tracking.module"],{

/***/ "./src/app/pages/tracking/tracking-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trackvehicle_trackvehicle_component__ = __webpack_require__("./src/app/pages/tracking/trackvehicle/trackvehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_deactivate_guard__ = __webpack_require__("./src/app/core/deactivate.guard.ts");
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
                path: 'trackVehicle',
                component: __WEBPACK_IMPORTED_MODULE_2__trackvehicle_trackvehicle_component__["a" /* TrackvehicleComponent */],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__core_deactivate_guard__["a" /* DeactivateGuard */]]
            },
        ]
    }];
var TrackingRoutingModule = (function () {
    function TrackingRoutingModule() {
    }
    TrackingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TrackingRoutingModule);
    return TrackingRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tracking/tracking.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingModule", function() { return TrackingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracking_routing_module__ = __webpack_require__("./src/app/pages/tracking/tracking-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trackvehicle_trackvehicle_component__ = __webpack_require__("./src/app/pages/tracking/trackvehicle/trackvehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TrackingModule = (function () {
    function TrackingModule() {
    }
    TrackingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__tracking_routing_module__["a" /* TrackingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["z" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["u" /* MatIconModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__trackvehicle_trackvehicle_component__["a" /* TrackvehicleComponent */]]
        })
    ], TrackingModule);
    return TrackingModule;
}());



/***/ }),

/***/ "./src/app/pages/tracking/trackvehicle/trackvehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Tracking\n    <button class=\"vehicle\" [disabled]=\"filterClicked=='Vehicle'\" mat-button (click)=\"filter('Vehicle');\">Vehicle</button>\n    <button class=\"driver\" [disabled]=\"filterClicked=='Driver'\" mat-button (click)=\"filter('Driver')\">Driver</button>\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row ptb-10\" *ngIf=\"filterClicked=='Vehicle'\">\n      <!-- <div class=\"col-lg-4 col-12\">\n        <mat-form-field class=\"w-100\">\n          Choose Vehicle Group\n          <input matInput [formControl]=\"vehicleGroupCtrl\"  [matAutocomplete]=\"autoVG\">\n          <mat-autocomplete #autoVG=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of vehicleGroup | async\" [value]=\"option.name\" (onSelectionChange)=\"setVehicleGroup(option,$event)\">\n              {{ option.name }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div> -->\n      <div class=\"col-lg-4 col-12\">\n        <mat-form-field class=\"w-100\">\n          Choose Vehicle\n          <input matInput [formControl]=\"vehicleCtrl\"  [matAutocomplete]=\"autoV\">\n          <mat-autocomplete #autoV=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of vehicle | async\" [value]=\"option.modelname+' ('+option.number+')'\" (onSelectionChange)=\"setVehicle(option,$event)\">\n              {{ option.modelname }} ({{option.number}})\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-4 col-12\">\n        <br>\n        <button (click)=\"track()\" mat-raised-button color=\"primary\">Track</button>        \n        <button (click)=\"refresh()\" mat-icon-button color=\"primary\"><mat-icon>refresh</mat-icon></button>\n      </div>\n    </div>\n    <div class=\"row ptb-10\" *ngIf=\"filterClicked=='Driver'\">\n      <div class=\"col-lg-4 col-12\">\n        <mat-form-field class=\"w-100\">\n          Choose Driver\n          <input matInput [formControl]=\"driverCtrl\"  [matAutocomplete]=\"autoD\">\n          <mat-autocomplete #autoD=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of driver | async\" [value]=\"option.name\" (onSelectionChange)=\"setDriver(option,$event)\">\n              {{ option.name }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-4 col-12\">\n        <br>\n        <button (click)=\"track()\" mat-raised-button color=\"primary\">Track</button>        \n        <button (click)=\"refresh()\" mat-icon-button color=\"primary\"><mat-icon>refresh</mat-icon></button>\n      </div>\n    </div>\n    <div style=\"margin: auto;\" class=\"row ptb-10\" *ngIf=\"filterClicked=='Vehicle'\">        \n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" [streetViewControl]=\"false\">\n        <agm-marker *ngFor = \"let data of markers\"\n          [latitude]=\"data.lattitude\"\n          [longitude]=\"data.longitude\"\n          [iconUrl]=\"{\n              url: './assets/images/cars.svg',\n              scaledSize: {\n                width: 30,\n                height: 50\n              }\n            }\">\n          <agm-info-window>\n            <strong> {{data.CurrentLocation}}</strong>\n            <p style=\"text-align: center;margin-bottom: 0;\">\n              Vehicle No: {{data.Vehicle_No}}\n            </p>\n          </agm-info-window>            \n        </agm-marker>\n      </agm-map>\n    </div>\n    <div style=\"margin: auto;\" class=\"row ptb-10\" *ngIf=\"filterClicked=='Driver'\">        \n        <agm-map [latitude]=\"latitudeDriver\" [longitude]=\"longitudeDriver\" [scrollwheel]=\"false\" [zoom]=\"zoomDriver\" [streetViewControl]=\"false\">\n          <agm-marker *ngFor = \"let data of markerDriver\"\n            [latitude]=\"data.lat\"\n            [longitude]=\"data.lng\"\n            [iconUrl]=\"{\n                url: './assets/images/driver_marker.svg',\n                scaledSize: {\n                  width: 30,\n                  height: 50\n                }\n              }\">\n            <agm-info-window>\n              <div align=\"center\" style=\"padding: 5px;\">\n                <strong> {{data.name}}</strong>\n              </div>\n              <hr>\n              <div style=\"padding: 5px\">\n                <strong>STATUS: </strong><b style=\"color: green\">{{data.status}}</b>\n              </div>\n              <div style=\"padding: 5px\" *ngIf=\"data.status!=null\">\n                  <strong>SPEED: </strong><b style=\"color: brown\">{{data.speed}} KM/HR</b>\n              </div>\n            </agm-info-window>            \n          </agm-marker>\n        </agm-map>\n      </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/tracking/trackvehicle/trackvehicle.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 55vh !important;\n  width: 100%;\n  /* This is really important*/ }\n"

/***/ }),

/***/ "./src/app/pages/tracking/trackvehicle/trackvehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackvehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masters_vehiclegroups_vehiclegroups_component__ = __webpack_require__("./src/app/pages/masters/vehiclegroups/vehiclegroups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__masters_new_vehicles_vehicle_service__ = __webpack_require__("./src/app/pages/masters/new-vehicles/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__masters_new_driver_driver_service__ = __webpack_require__("./src/app/pages/masters/new-driver/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TrackvehicleComponent = (function () {
    function TrackvehicleComponent(auth, vehiclegroupsService, vehicleService, driverService, snackbar, http) {
        this.auth = auth;
        this.vehiclegroupsService = vehiclegroupsService;
        this.vehicleService = vehicleService;
        this.driverService = driverService;
        this.snackbar = snackbar;
        this.http = http;
        this.filterClicked = "Vehicle";
        this.duty = {};
        this.user = {};
        this.driverCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.vehicleGroupCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.vehicleCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.tracking = true;
        this.i = 0;
        this.markers = [];
        this.markersCopy = [];
        this.markerDriver = [];
        this.markerDriverCopy = [];
    }
    TrackvehicleComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    TrackvehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].interval(60000).takeWhile(function () { return _this.tracking; }).subscribe(function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
            _this.http.post('/tracking/retrieve', _this.vehicleNumber, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                var obj = JSON.parse(data);
                _this.markersCopy.length = 0;
                obj.data.detaildata.forEach(function (element) {
                    element.lattitude = Number(element.lattitude);
                    element.longitude = Number(element.longitude);
                    _this.markersCopy.push(element);
                });
            });
            _this.driverService.getDriverForTracking(_this.user).subscribe(function (data) {
                if (data.length == 0) {
                    _this.snackbar.open("Please register some drivers", "X", { duration: 3000 });
                }
                data.forEach(function (element) {
                    element.lat = Number(element.lat);
                    element.lng = Number(element.lng);
                    if (element.status == 'Dispatched') {
                        element.status = 'On Duty';
                    }
                    else {
                        element.status = 'Inactive';
                    }
                });
                _this.markerDriverCopy = data;
                console.log(_this.markerDriverCopy);
            });
            _this.track();
            console.log(_this.markersCopy);
        });
        var dutyData = localStorage.getItem('trackVehicle');
        this.duty = JSON.parse(dutyData);
        this.latitude = 19.07283;
        this.longitude = 72.88261;
        this.zoom = 10;
        this.latitudeDriver = 19.07283;
        this.longitudeDriver = 72.88261;
        this.zoomDriver = 10;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.vehicleService.getVehicle(_this.user).subscribe(function (data) {
                if (data.length == 0) {
                    _this.snackbar.open("Please register some vehicles", "X", { duration: 3000 });
                }
                _this.vehicles = data;
                _this.vehicles.unshift({ modelname: 'All', id: '%%' });
                _this.vehicle = _this.vehicleCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterVehicle(val); }));
            });
            // this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(data=> {
            //   if(data.length== 0) {
            //     this.snackbar.open("Please register some vehicle groups","X",{duration:3000});
            //   }
            //   this.vehicleGroups=data;
            //   this.vehicleGroups.unshift({name:'All',id:'%%'})
            //   this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
            //   .pipe(
            //     startWith(''),
            //     map(val=>this.filterVehicleGroup(val))
            //   );    
            // });
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
            _this.http.post('/tracking/retrieve', _this.vehicleNumber, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                var obj = JSON.parse(data);
                obj.data.detaildata.forEach(function (element) {
                    element.lattitude = Number(element.lattitude);
                    element.longitude = Number(element.longitude);
                    _this.markersCopy.push(element);
                });
            });
            if (_this.duty) {
                // this.vehicleGroupCtrl.setValue(this.duty.vehicleGroup);
                _this.vehicleCtrl.setValue(_this.duty.vehicle);
                _this.vehicleService.getVehicleNumber(_this.user.ownerId, _this.duty.vehicleId).subscribe(function (data) {
                    if (data.length > 0) {
                        _this.vehicleNumber = data[0].number;
                        _this.markers.length = 0;
                        _this.markers.push(_this.markersCopy.find(function (x) { return x.Vehicle_No === _this.vehicleNumber; }));
                        _this.latitude = _this.markers[0].lattitude;
                        _this.longitude = _this.markers[0].longitude;
                        _this.zoom = 16;
                    }
                });
            }
            else {
                _this.markers.length = 0;
                _this.vehicleCtrl.setValue('All');
                // this.vehicleGroupCtrl.setValue('All');
                _this.markers = _this.markersCopy.slice(0);
            }
            _this.track();
        });
    };
    TrackvehicleComponent.prototype.ngOnDestroy = function () {
        this.tracking = false;
    };
    TrackvehicleComponent.prototype.filterVehicleGroup = function (val) {
        return this.vehicleGroups.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    TrackvehicleComponent.prototype.filterDriver = function (val) {
        return this.drivers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    TrackvehicleComponent.prototype.filterVehicle = function (val) {
        return this.vehicles.filter(function (option) {
            return option.modelname.toLowerCase().includes(val.toLowerCase());
        });
    };
    TrackvehicleComponent.prototype.setVehicleGroup = function (temp, event) {
        var _this = this;
        // console.log(temp)
        if (event.source.selected == true) {
            if (temp.name == 'All') {
                this.vehicle = '';
                this.vehicleCtrl.setValue('');
                // this.markers.length=0;
                // this.markers = this.markersCopy.slice(0);
                // this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(data=> {
                //   if(data.length== 0) {
                //     this.snackbar.open("Please register some vehicle groups","X",{duration:3000});
                //   }
                //   this.vehicleGroups=data;
                //   this.vehicleGroups.unshift({name:'All',id:'%%'})
                //   this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
                //   .pipe(
                //     startWith(''),
                //     map(val=>this.filterVehicleGroup(val))
                //   );    
                // });
            }
            else {
                this.vehicleGroupId = temp.id;
                var temp2 = {
                    ownerId: this.user.ownerId,
                    vehicleGroupId: temp.id,
                };
                this.vehicleService.filterVehicleFromVehicleGroups(temp2).subscribe(function (data) {
                    if (data.length == 0) {
                        _this.snackbar.open("Please register some vehicles", "X", { duration: 3000 });
                    }
                    _this.vehicles = data;
                    _this.vehicle = _this.vehicleCtrl.valueChanges
                        .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterVehicle(val); }));
                });
            }
        }
    };
    TrackvehicleComponent.prototype.setDriver = function (temp, event) {
        if (event.source.selected == true) {
            this.driverId = temp.driverId;
        }
    };
    TrackvehicleComponent.prototype.setVehicle = function (temp, event) {
        if (event.source.selected == true) {
            this.vehicleNumber = temp.number;
        }
    };
    TrackvehicleComponent.prototype.track = function () {
        var _this = this;
        this.i++;
        console.log(this.i);
        if (this.filterClicked == 'Vehicle') {
            if (this.vehicleCtrl.value == 'All') {
                console.log("track1");
                this.latitude = 19.07283;
                this.longitude = 72.88261;
                this.zoom = 10;
                this.markers.length = 0;
                this.markers = this.markersCopy.slice(0);
            }
            else {
                if (this.markersCopy.find(function (x) { return x.Vehicle_No === _this.vehicleNumber; }) != undefined) {
                    console.log("track2");
                    this.markers.length = 0;
                    this.markers.push(this.markersCopy.find(function (x) { return x.Vehicle_No === _this.vehicleNumber; }));
                    this.latitude = this.markers[0].lattitude;
                    this.longitude = this.markers[0].longitude;
                    this.zoom = 16;
                }
                else {
                    window.alert("Vehicle Tracking not available for " + this.vehicleCtrl.value);
                    this.vehicleCtrl.setValue('All');
                }
            }
        }
        else {
            // console.log(this.markerDriverCopy.findIndex(x=>x.driverId == this.driverId));
            console.log("track3");
            this.markerDriver.length = 0;
            this.markerDriver.push(this.markerDriverCopy.find(function (x) { return x.driverId === _this.driverId; }));
            this.latitudeDriver = Number(this.markerDriver[0].lat);
            this.longitudeDriver = Number(this.markerDriver[0].lng);
            this.zoomDriver = 16;
            console.log(this.latitudeDriver, this.longitudeDriver);
        }
    };
    TrackvehicleComponent.prototype.filter = function (temp) {
        var _this = this;
        if (temp == 'Vehicle') {
            this.filterClicked = 'Vehicle';
            this.vehicleService.getVehicle(this.user).subscribe(function (data) {
                if (data.length == 0) {
                    _this.snackbar.open("Please register some vehicles", "X", { duration: 3000 });
                }
                _this.vehicles = data;
                _this.vehicles.unshift({ modelname: 'All', id: '%%' });
                _this.vehicle = _this.vehicleCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterVehicle(val); }));
            });
            // this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(data=> {
            //   if(data.length== 0) {
            //     this.snackbar.open("Please register some vehicle groups","X",{duration:3000});
            //   }
            //   this.vehicleGroups=data;
            //   this.vehicleGroups.unshift({name:'All',id:'%%'})
            //   this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
            //   .pipe(
            //     startWith(''),
            //     map(val=>this.filterVehicleGroup(val))
            //   );    
            // });
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
            this.http.post('/tracking/retrieve', this.vehicleNumber, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                var obj = JSON.parse(data);
                obj.data.detaildata.forEach(function (element) {
                    element.lattitude = Number(element.lattitude);
                    element.longitude = Number(element.longitude);
                    _this.markersCopy.push(element);
                });
            });
            if (this.duty) {
                // this.vehicleGroupCtrl.setValue(this.duty.vehicleGroup);
                this.vehicleCtrl.setValue(this.duty.vehicle);
                this.vehicleService.getVehicleNumber(this.user.ownerId, this.duty.vehicleId).subscribe(function (data) {
                    if (data.length > 0) {
                        _this.vehicleNumber = data[0].number;
                        _this.markers.length = 0;
                        _this.markers.push(_this.markersCopy.find(function (x) { return x.Vehicle_No === _this.vehicleNumber; }));
                        _this.latitude = _this.markers[0].lattitude;
                        _this.longitude = _this.markers[0].longitude;
                        _this.zoom = 16;
                    }
                });
            }
            else {
                this.markers.length = 0;
                // this.vehicleGroupCtrl.setValue('All');
                this.vehicleCtrl.setValue('All');
                this.markers = this.markersCopy.slice(0);
            }
            this.track();
        }
        if (temp == "Driver") {
            this.filterClicked = 'Driver';
            this.driverService.getDriverForTracking(this.user).subscribe(function (data) {
                if (data.length == 0) {
                    _this.snackbar.open("Please register some drivers", "X", { duration: 3000 });
                }
                _this.drivers = data;
                data.forEach(function (element) {
                    element.lat = Number(element.lat);
                    element.lng = Number(element.lng);
                    if (element.status == 'Dispatched') {
                        element.status = 'On Duty';
                    }
                    else {
                        element.status = 'Inactive';
                    }
                });
                _this.markerDriverCopy = data;
                console.log(_this.markerDriverCopy);
                // this.drivers.unshift({name:'All',id:'%%'})
                _this.driver = _this.driverCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterDriver(val); }));
            });
        }
    };
    TrackvehicleComponent.prototype.refresh = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        this.http.post('/tracking/retrieve', this.vehicleNumber, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            var obj = JSON.parse(data);
            _this.markersCopy.length = 0;
            obj.data.detaildata.forEach(function (element) {
                element.lattitude = Number(element.lattitude);
                element.longitude = Number(element.longitude);
                _this.markersCopy.push(element);
            });
        });
        this.driverService.getDriverForTracking(this.user).subscribe(function (data) {
            if (data.length == 0) {
                _this.snackbar.open("Please register some drivers", "X", { duration: 3000 });
            }
            data.forEach(function (element) {
                element.lat = Number(element.lat);
                element.lng = Number(element.lng);
                if (element.status == 'Dispatched') {
                    element.status = 'On Duty';
                }
                else {
                    element.status = 'Inactive';
                }
            });
            _this.markerDriverCopy = data;
            console.log(_this.markerDriverCopy);
        });
        this.track();
        console.log(this.markersCopy);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TrackvehicleComponent.prototype, "unloadHandler", null);
    TrackvehicleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'trackvehicle',
            template: __webpack_require__("./src/app/pages/tracking/trackvehicle/trackvehicle.component.html"),
            styles: [__webpack_require__("./src/app/pages/tracking/trackvehicle/trackvehicle.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__masters_vehiclegroups_vehiclegroups_component__["a" /* VehicleGroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__masters_new_vehicles_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_8__masters_new_driver_driver_service__["a" /* DriverService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]])
    ], TrackvehicleComponent);
    return TrackvehicleComponent;
}());



/***/ })

});
//# sourceMappingURL=tracking.module.chunk.js.map