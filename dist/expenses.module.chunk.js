webpackJsonp(["expenses.module"],{

/***/ "./src/app/pages/expenses/addfuel/addfuel.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"fuelForm\">\n  <fieldset>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">    \n        <nb-card>\n          <nb-card-header>Fuel Expenses</nb-card-header>\n          <nb-card-body>\n            <div class=\"container\">              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Vehicle Name\n                    <input aria-placeholder=\"Pick one\"  name=\"vname\" [formControl]=\"vehicleNameCtrl\" matInput [matAutocomplete]=\"vehiclenameauto\">\n                    <mat-autocomplete #vehiclenameauto=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of vehicles |async\" [value]=\"option.modelname\" (onSelectionChange)=\"setModelName(option,$event)\">\n                        {{ option.modelname }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Vehicle Number\n                    <input aria-placeholder=\"Pick one\"  name=\"vnum\" [formControl]=\"vehicleNumberCtrl\" matInput [matAutocomplete]=\"vehiclenumberauto\">\n                    <mat-autocomplete #vehiclenumberauto=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of vehiclesnumber |async\" [value]=\"option.number\" (onSelectionChange)=\"setVehicleNumber(option,$event)\">\n                        {{ option.number }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Fuel Type\n                    <mat-select matInput formControlName=\"fuelType\">\n                      <mat-option value=\"Petrol\">Petrol</mat-option>\n                      <mat-option value=\"Diesel\">Diesel</mat-option>\n                      <mat-option value=\"CNG\">CNG</mat-option>                      \n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Driver\n                    <input type=\"text\" matInput formControlName=\"driver\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Current KMS\n                    <input type=\"email\" matInput formControlName=\"currentKMS\" [(ngModel)]=\"currKm\" (change)=\"setMileage(currKm,$event)\">                  \n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Date\n                    <input [matDatepicker]=\"date\" matInput formControlName=\"date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n                    <mat-datepicker #date></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Quantity(Fuel)\n                    <input type=\"text\" matInput formControlName=\"quantity\" [(ngModel)]=\"qty\" (change)=\"setQuantity(qty,$event)\">\n                  </mat-form-field>\n                </div>                \n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Fuel Rate\n                    <input type=\"text\" matInput formControlName=\"fuelRate\" [(ngModel)]=\"rate\" (change)=\"setFuelRate(rate,$event)\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Fuel Cost\n                    <input type=\"text\" matInput formControlName=\"fuelCost\" readonly>\n                  </mat-form-field>\n                </div>                \n              </div>              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Fuel Station\n                    <input type=\"text\" matInput formControlName=\"fuelStation\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    City\n                    <input matInput [formControl]=\"cityCtrl\"  [matAutocomplete]=\"auto1\">\n                    <mat-autocomplete #auto1=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of cities | async\" [value]=\"option\" (onSelectionChange)=\"citySelect(option,$event)\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete> \n                    <!-- <mat-select formControlName=\"city\">\n                      <mat-option *ngFor=\" let element of cities\" [value]=\"element\">\n                        {{element}}\n                      </mat-option>                      \n                    </mat-select> -->\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Fuel Receipt No.                  \n                    <input type=\"text\" matInput formControlName=\"fuelReceiptNo\" />\n                  </mat-form-field>                   \n                </div>                              \n              </div>\n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Mileage\n                    <input type=\"text\" matInput formControlName=\"mileage\" readonly>\n                  </mat-form-field>             \n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  Fuel Receipt                \n                  <button (click)=\"fuelreceiptPhoto.click()\" mat-raised-button color=\"primary\"> <mat-icon>cloud_upload</mat-icon>Browse</button>\n                  <input type = \"file\" accept=\"image/*\" #fuelreceiptPhoto hidden (change)=\"selectFile($event)\"/>\n                </div>\n                <div class=\"col-lg-4 col-12\" style=\"margin: auto; text-align:center;\">\n                  <img alt=\"\" *ngIf=\"imgUrl!=''\" [src]=\"imgUrl\" width=\"200px\" height=\"200px\">\n                  <br><button mat-icon-button *ngIf=\"imgUrl!=''\" (click)=\"removeImage()\"><mat-icon>clear</mat-icon></button>\n                </div>\n              </div>            \n            </div>\n          </nb-card-body>\n        </nb-card>        \n      </div>\n    </div>\n    <div class=\"row ptb-10\">\n      <div class=\"col-lg-12 col-12\">          \n        <button *ngIf=\"!editState\" [disabled]=\"fuelForm.invalid\" (click)=\"saveFuel()\" mat-raised-button color=\"primary\">Save</button>\n        <button *ngIf=\"editState\" (click)=\"updateFuel()\" mat-raised-button color=\"primary\">Update</button>      \n        <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>            \n      </div>\n    </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/pages/expenses/addfuel/addfuel.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/expenses/addfuel/addfuel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddfuelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuel_fuel_service__ = __webpack_require__("./src/app/pages/expenses/fuel/fuel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masters_new_vehicles_vehicle_service__ = __webpack_require__("./src/app/pages/masters/new-vehicles/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap_util_util__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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










var AddfuelComponent = (function () {
    function AddfuelComponent(fb, dialog, auth, fuelService, vehicleService, snackBar, uploadService, _sanitizer, data) {
        this.fb = fb;
        this.dialog = dialog;
        this.auth = auth;
        this.fuelService = fuelService;
        this.vehicleService = vehicleService;
        this.snackBar = snackBar;
        this.uploadService = uploadService;
        this._sanitizer = _sanitizer;
        this.data = data;
        this.vehicleNameCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.vehicleNumberCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.prevKms = 0;
        this.prevQuantity = 1;
        this.imgUrl = '';
        this.previousImgUrl = '';
        this.cityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.setMileageValue = true;
        this.qty = 0;
        this.rate = 0;
        this.cost = 0;
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
            'Mancherial',
            'Mandalgarh',
            'Mandamarri',
            'Mandapeta',
            'Mandawa',
            'Mandi',
            'Mandi Dabwali',
            'Mandideep',
            'Mandla',
            'Mandsaur',
            'Mandvi',
            'Mandya',
            'Manendragarh',
            'Maner',
            'Mangaldoi',
            'Mangaluru',
            'Mangalvedhe',
            'Manglaur',
            'Mangrol',
            'Mangrol',
            'Mangrulpir',
            'Manihari',
            'Manjlegaon',
            'Mankachar',
            'Manmad',
            'Mansa',
            'Mansa',
            'Manuguru',
            'Manvi',
            'Manwath',
            'Mapusa',
            'Margao',
            'Margherita',
            'Marhaura',
            'Mariani',
            'Marigaon',
            'Markapur',
            'Marmagao',
            'Masaurhi',
            'Mathabhanga',
            'Mathura',
            'Mattannur',
            'Mauganj',
            'Mavelikkara',
            'Mavoor',
            'Mayang Imphal',
            'Medak',
            'Medininagar (Daltonganj)',
            'Medinipur',
            'Meerut',
            'Mehkar',
            'Memari',
            'Merta City',
            'Mhaswad',
            'Mhow Cantonment',
            'Mhowgaon',
            'Mihijam',
            'Mira-Bhayandar',
            'Mirganj',
            'Miryalaguda',
            'Modasa',
            'Modinagar',
            'Moga',
            'Mohali',
            'Mokameh',
            'Mokokchung',
            'Monoharpur',
            'Moradabad',
            'Morena',
            'Morinda, India',
            'Morshi',
            'Morvi',
            'Motihari',
            'Motipur',
            'Mount Abu',
            'Mudabidri',
            'Mudalagi',
            'Muddebihal',
            'Mudhol',
            'Mukerian',
            'Mukhed',
            'Muktsar',
            'Mul',
            'Mulbagal',
            'Multai',
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
        this.fuelData = {
            vehicleId: '',
            vehicleName: '',
            vehicleNumber: '',
            fuelType: '',
            driver: '',
            currentKMS: '',
            quantity: 0,
            fuelRate: 0,
            date: '',
            fuelCost: 0,
            fuelStation: '',
            city: '',
            fuelReceipt: '',
            fuelReceiptNo: '',
            ownerId: '',
            mileage: 0,
        };
        if (data.row != null) {
            console.log(data);
            this.fuelData = data.row;
        }
    }
    AddfuelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fuelForm = this.fb.group({
            id: [''],
            vehicleName: [''],
            vehicleNumber: [''],
            fuelType: [''],
            driver: [''],
            currentKMS: [''],
            quantity: [''],
            fuelRate: [''],
            date: [''],
            fuelCost: [''],
            fuelStation: [''],
            city: [''],
            fuelReceipt: [''],
            fuelReceiptNo: [''],
            mileage: [''],
        });
        this.fuelForm.patchValue({
            'id': this.fuelData.id,
            'vehicleName': this.fuelData.vehicleName,
            'vehicleNumber': this.fuelData.vehicleNumber,
            'fuelType': this.fuelData.fuelType,
            'driver': this.fuelData.driver,
            'currentKMS': this.fuelData.currentKMS,
            'quantity': this.fuelData.quantity,
            'fuelRate': this.fuelData.fuelRate,
            'date': this.fuelData.date,
            'fuelCost': this.fuelData.fuelCost,
            'fuelStation': this.fuelData.fuelStation,
            'city': this.fuelData.city,
            'fuelReceipt': this.fuelData.fuelReceipt,
            'fuelReceiptNo': this.fuelData.fuelReceiptNo,
            'mileage': this.fuelData.mileage,
        });
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            console.log(_this.user);
            if (_this.data.row != null) {
                _this.editState = true;
                _this.fuelData = _this.data.row;
                _this.cityCtrl.setValue(_this.data.row.city);
                _this.vehicleNameCtrl.setValue(_this.data.row.vehicleName);
                _this.vehicleNumberCtrl.setValue(_this.data.row.vehicleNumber);
                _this.currKm = _this.data.row.currentKMS;
                _this.qty = _this.data.row.quantity;
                _this.rate = _this.data.row.fuelRate;
                if (_this.fuelData.fuelReceipt != null && _this.fuelData.fuelReceipt != '')
                    _this.uploadService.getFile(_this.user.companyName, 'fuelReceipts', _this.fuelData.fuelReceipt).subscribe(function (data) {
                        _this.imgUrl = _this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                            + data.text());
                        _this.previousImgUrl = _this.imgUrl;
                    });
            }
            else {
                _this.editState = false;
            }
        });
        this.vehicleService.getUniqueVehicle(this.user).subscribe(function (data) {
            _this.vehicle = data;
            _this.vehicles = _this.vehicleNameCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (val) { return _this.filterVehicle(val); }));
        });
        this.cities = this.cityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (val) { return _this.filterFromCity(val); }));
    };
    AddfuelComponent.prototype.saveFuel = function () {
        var _this = this;
        this.fuelData.fuelType = this.fuelForm.get('fuelType').value;
        this.fuelData.driver = this.fuelForm.get('driver').value;
        this.fuelData.currentKMS = this.fuelForm.get('currentKMS').value;
        this.fuelData.quantity = this.fuelForm.get('quantity').value;
        this.fuelData.fuelRate = this.fuelForm.get('fuelRate').value;
        this.fuelData.date = this.fuelForm.get('date').value;
        this.fuelData.fuelCost = this.fuelForm.get('fuelCost').value;
        this.fuelData.fuelStation = this.fuelForm.get('fuelStation').value;
        this.fuelData.city = this.cityCtrl.value;
        this.fuelData.fuelReceipt = this.fuelForm.get('fuelReceipt').value;
        this.fuelData.fuelReceiptNo = this.fuelForm.get('fuelReceiptNo').value;
        this.fuelData.mileage = this.fuelForm.get('mileage').value;
        this.fuelData.ownerId = this.user.ownerId;
        this.fuelService.addFuel(this.fuelData).subscribe(function (data) {
            _this.upload(data.insertId);
        }, function (err) { }, function () {
            _this.snackBar.open("Fuel Expense Added", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    AddfuelComponent.prototype.updateFuel = function () {
        var _this = this;
        if (this.previousImgUrl != this.imgUrl) {
            this.upload(this.fuelData.id);
        }
        this.fuelData.fuelType = this.fuelForm.get('fuelType').value;
        this.fuelData.driver = this.fuelForm.get('driver').value;
        this.fuelData.currentKMS = this.fuelForm.get('currentKMS').value;
        this.fuelData.quantity = this.fuelForm.get('quantity').value;
        this.fuelData.fuelRate = this.fuelForm.get('fuelRate').value;
        this.fuelData.date = this.fuelForm.get('date').value;
        this.fuelData.fuelCost = this.fuelForm.get('fuelCost').value;
        this.fuelData.fuelStation = this.fuelForm.get('fuelStation').value;
        this.fuelData.city = this.cityCtrl.value;
        this.fuelData.fuelReceipt = this.fuelForm.get('fuelReceipt').value;
        this.fuelData.fuelReceiptNo = this.fuelForm.get('fuelReceiptNo').value;
        this.fuelData.mileage = this.fuelForm.get('mileage').value;
        this.fuelData.ownerId = this.user.ownerId;
        this.fuelService.updateFuel(this.fuelData).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Fuel Expense Updated", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    AddfuelComponent.prototype.filterFromCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddfuelComponent.prototype.citySelect = function (option, event) {
        if (event.source.selected == true) {
            this.fuelData.city = option;
        }
    };
    AddfuelComponent.prototype.upload = function (id) {
        if (this.imgUrl != '') {
            this.fuelData.id = id;
            this.fuelData.fuelReceipt = id + "_" + this.fuelData.fuelReceiptNo + ".jpg";
            this.uploadService.uploadfile(this.user.companyName, 'fuelReceipts', this.fuelData.fuelReceipt, this.imgUrl);
            this.fuelService.updateFuel(this.fuelData).subscribe(function (data) {
                // this.snackBar.open("Fuel Expense Updated",null,{duration:3000})
                // this.dialog.closeAll()
            });
        }
    };
    AddfuelComponent.prototype.selectFile = function (event) {
        var _this = this;
        this.selectedFiles = event.target.files;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) { return _this.imgUrl = reader.result; };
        reader.readAsDataURL(file);
    };
    AddfuelComponent.prototype.setModelName = function (temp, event) {
        var _this = this;
        if (event.source.selected == true) {
            this.fuelData.vehicleName = temp.modelname;
            this.modelname = temp.id;
        }
        this.vehicleService.getVehicleNumber(this.user.ownerId, this.modelname).subscribe(function (data) {
            _this.vehiclenumber = data;
            _this.vehiclesnumber = _this.vehicleNumberCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (val) { return _this.filterVehicleNumber(val); }));
        });
    };
    AddfuelComponent.prototype.setVehicleNumber = function (temp, event) {
        var _this = this;
        console.log(event);
        if (event.source.selected == true) {
            this.fuelData.vehicleId = temp.id;
            this.fuelData.vehicleNumber = temp.number;
        }
        var data = {
            vehicleNumber: temp.number
        };
        this.fuelService.getCurrentKms(data).subscribe(function (data) {
            if (data.length > 0) {
                console.log(data[0].currentkms);
                _this.prevKms = data[0].currentkms;
                _this.prevQuantity = data[0].quantity;
                _this.fuelForm.patchValue({
                    'currentKMS': data[0].currentkms
                });
            }
            else {
                _this.snackBar.open("Mileage not calculated", "No vehicle details available", { duration: 3000 });
                _this.mileage = 0;
                _this.setMileageValue = false;
            }
        });
    };
    AddfuelComponent.prototype.setMileage = function (temp, event) {
        if (this.setMileageValue == true) {
            this.mileage = (Object(__WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap_util_util__["h" /* toInteger */])(temp) - Object(__WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap_util_util__["h" /* toInteger */])(this.prevKms)) / Object(__WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap_util_util__["h" /* toInteger */])(this.prevQuantity);
        }
        this.fuelForm.patchValue({
            'mileage': this.mileage
        });
    };
    AddfuelComponent.prototype.setQuantity = function (temp, event) {
        this.qty = temp;
        this.setFuelCost(this.qty, this.rate);
    };
    AddfuelComponent.prototype.setFuelRate = function (temp, event) {
        this.rate = temp;
        this.setFuelCost(this.qty, this.rate);
    };
    AddfuelComponent.prototype.setFuelCost = function (qty, rate) {
        this.cost = (Number(qty) * Number(rate));
        console.log(this.cost);
        this.fuelForm.patchValue({
            'fuelCost': this.cost
        });
    };
    AddfuelComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    AddfuelComponent.prototype.filterVehicle = function (val) {
        return this.vehicle.filter(function (option) {
            return option.modelname.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddfuelComponent.prototype.filterVehicleNumber = function (val) {
        return this.vehiclenumber.filter(function (option) {
            return option.number.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddfuelComponent.prototype.removeImage = function () {
        this.imgUrl = '';
        this.previousImgUrl = '';
        this.fuelData.fuelReceipt = '';
    };
    AddfuelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addfuel',
            template: __webpack_require__("./src/app/pages/expenses/addfuel/addfuel.component.html"),
            styles: [__webpack_require__("./src/app/pages/expenses/addfuel/addfuel.component.scss")]
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__fuel_fuel_service__["a" /* FuelService */],
            __WEBPACK_IMPORTED_MODULE_5__masters_new_vehicles_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_8__fileupload_service__["a" /* FileuploadService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["DomSanitizer"], Object])
    ], AddfuelComponent);
    return AddfuelComponent;
}());



/***/ }),

/***/ "./src/app/pages/expenses/addofficeexpenses/addofficeexpenses.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"officeExpensesForm\">\n  <fieldset>\n    <div class=\"row\">\n      <div class=\"col-lg-12\"> \n        <nb-card>\n          <nb-card-header>Office Expenses</nb-card-header>\n          <nb-card-body>\n            <div class=\"container\">              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-12 col-12\">\n                  <mat-form-field>\n                    Date\n                    <input [matDatepicker]=\"date\" matInput formControlName=\"date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n                    <mat-datepicker #date></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row ptb-10\">\n                <div formArrayName=\"rows\">\n                  <div class=\"row ptb-10\" *ngFor=\"let aRow of itemsForm.controls; let i=index\" [formGroupName]=\"i\">                  \n                    <div class=\"col-lg-4 col-12\">\n                      <mat-form-field class=\"w-100\">\n                        Particulars\n                        <input matInput formControlName=\"particulars\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-6\">\n                      <mat-form-field class=\"w-100\">\n                        Qty\n                        <input matInput formControlName=\"quantity\" (change)=\"calculateCharges(aRow)\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-6\">\n                      <mat-form-field class=\"w-100\">\n                        Rate\n                        <input matInput formControlName=\"rate\" (change)=\"calculateCharges(aRow)\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-10\">\n                      <mat-form-field class=\"w-100\">\n                        Amount\n                        <input matInput formControlName=\"amount\" readonly>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-2\">\n                      <br>\n                      <button mat-icon-button color=\"primary\" (click)=\"deleteRow(i)\"> <mat-icon>clear</mat-icon></button>\n                    </div>\n                  </div>                    \n                </div>\n              </div>\n              <div class=\"row pb-10\">\n                <div class=\"col-lg-12 col-12\">\n                  <button mat-fab color=\"primary\" (click)=\"addRow()\" style=\"float:right; margin: 5px;\"><mat-icon>add</mat-icon></button>\n                </div>                \n              </div>\n            </div>\n          </nb-card-body>\n        </nb-card>        \n      </div>\n    </div>\n    <div class=\"row ptb-10\">\n      <div class=\"col-lg-12 col-12\">                  \n        <button (click)=\"saveOfficeExpenses()\" mat-raised-button color=\"primary\">Save</button>\n        <!-- <button *ngIf=\"editState\" (click)=\"updateOfficeExpenses()\" mat-raised-button color=\"primary\">Update</button> -->\n        <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>            \n      </div>\n    </div>\n  </fieldset>\n</form>\n  "

/***/ }),

/***/ "./src/app/pages/expenses/addofficeexpenses/addofficeexpenses.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/expenses/addofficeexpenses/addofficeexpenses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddofficeexpensesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expenses_service__ = __webpack_require__("./src/app/pages/expenses/expenses.service.ts");
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







var AddofficeexpensesComponent = (function () {
    function AddofficeexpensesComponent(fb, dialog, auth, expensesService, snackBar) {
        this.fb = fb;
        this.dialog = dialog;
        this.auth = auth;
        this.expensesService = expensesService;
        this.snackBar = snackBar;
        this.officeExpensesData = {
            date: '',
            ownerId: '',
        };
    }
    AddofficeexpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.officeExpensesForm = this.fb.group({
            date: [''],
            rows: this.fb.array([])
        });
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            console.log(_this.user);
        });
        this.addRow();
    };
    AddofficeexpensesComponent.prototype.saveOfficeExpenses = function () {
        var _this = this;
        this.officeExpensesData.date = this.officeExpensesForm.get('date').value;
        this.officeExpensesData.date = __WEBPACK_IMPORTED_MODULE_5_moment__(this.officeExpensesData.date).format("YYYY-MM-DD");
        this.officeExpensesData.ownerId = this.user.id;
        this.expensesService.addOfficeExpenses(this.officeExpensesData).subscribe(function (data) {
            _this.itemsForm.value.forEach(function (element) {
                element.officeExpensesId = data.id;
                _this.expensesService.addOfficeExpensesData(element).subscribe(function (data) { });
            });
        }, function (err) { }, function () {
            _this.snackBar.open("Office Expense Added", "X", { duration: 3000 });
        });
    };
    Object.defineProperty(AddofficeexpensesComponent.prototype, "itemsForm", {
        get: function () {
            return this.officeExpensesForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    AddofficeexpensesComponent.prototype.addRow = function () {
        var rows = this.fb.group({
            particulars: [''],
            quantity: [''],
            rate: [''],
            amount: [''],
        });
        this.itemsForm.push(rows);
    };
    AddofficeexpensesComponent.prototype.deleteRow = function (i) {
        this.itemsForm.removeAt(i);
    };
    AddofficeexpensesComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    AddofficeexpensesComponent.prototype.calculateCharges = function (element) {
        element.get('amount').setValue(element.value.rate * element.value.quantity);
    };
    AddofficeexpensesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addofficeexpenses',
            template: __webpack_require__("./src/app/pages/expenses/addofficeexpenses/addofficeexpenses.component.html"),
            styles: [__webpack_require__("./src/app/pages/expenses/addofficeexpenses/addofficeexpenses.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__expenses_service__["a" /* ExpensesService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["I" /* MatSnackBar */]])
    ], AddofficeexpensesComponent);
    return AddofficeexpensesComponent;
}());



/***/ }),

/***/ "./src/app/pages/expenses/addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"expensesForm\">\n  <fieldset>\n    <div class=\"row\">\n      <div class=\"col-lg-12\"> \n        <nb-card>\n          <nb-card-header>Vehicle Breakdown Expenses</nb-card-header>\n          <nb-card-body>\n            <div class=\"container\">              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Date\n                    <input [matDatepicker]=\"date\" matInput formControlName=\"date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n                    <mat-datepicker #date></mat-datepicker>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Vehicle Name\n                    <input aria-placeholder=\"Pick one\"  name=\"vname\" [formControl]=\"vehicleNameCtrl\" matInput [matAutocomplete]=\"vehiclenameauto\">\n                    <mat-autocomplete #vehiclenameauto=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of vehicles |async\" [value]=\"option.modelname\" (onSelectionChange)=\"setModelName(option,$event)\">\n                        {{ option.modelname }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Vehicle Number\n                    <input aria-placeholder=\"Pick one\"  name=\"vnum\" [formControl]=\"vehicleNumberCtrl\" matInput [matAutocomplete]=\"vehiclenumberauto\">\n                    <mat-autocomplete #vehiclenumberauto=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of vehiclesnumber |async\" [value]=\"option.number\" (onSelectionChange)=\"setVehicleNumber(option,$event)\">\n                        {{ option.number }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row ptb-10\">\n                <div formArrayName=\"rows\">\n                  <div class=\"row ptb-10\" *ngFor=\"let aRow of itemsForm.controls; let i=index\" [formGroupName]=\"i\">                  \n                    <div class=\"col-lg-4 col-12\">\n                      <mat-form-field class=\"w-100\">\n                        Particulars\n                        <input matInput formControlName=\"particulars\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-6\">\n                      <mat-form-field class=\"w-100\">\n                        Qty\n                        <input matInput formControlName=\"quantity\" (change)=\"calculateCharges(aRow)\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-6\">\n                      <mat-form-field class=\"w-100\">\n                        Rate\n                        <input matInput formControlName=\"rate\" (change)=\"calculateCharges(aRow)\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-10\">\n                      <mat-form-field class=\"w-100\">\n                        Amount\n                        <input matInput formControlName=\"amount\" readonly>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-2\">\n                      <br>\n                      <button mat-icon-button color=\"primary\" (click)=\"deleteRow(i, aRow)\"> <mat-icon>clear</mat-icon></button>\n                    </div>\n                  </div>                    \n                </div>\n              </div>\n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\"></div>\n                <div class=\"col-lg-4 col-12\"></div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    Total\n                    <input matInput formControlName=\"total\" readonly>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row pb-10\">\n                <div class=\"col-lg-12 col-12\">\n                  <button mat-fab color=\"primary\" (click)=\"addRow()\" style=\"float:right; margin: 5px;\"><mat-icon>add</mat-icon></button>\n                </div>                \n              </div>\n            </div>\n          </nb-card-body>\n        </nb-card>        \n      </div>\n    </div>\n    <div class=\"row ptb-10\">\n      <div class=\"col-lg-12 col-12\">          \n        <button *ngIf=\"!editState\" (click)=\"saveVehicleExpenses()\" mat-raised-button color=\"primary\">Save</button>\n        <button *ngIf=\"editState\" (click)=\"updateVehicleExpenses()\" mat-raised-button color=\"primary\">Update</button>\n        <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>            \n      </div>\n    </div>\n  </fieldset>\n</form>\n  "

/***/ }),

/***/ "./src/app/pages/expenses/addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/expenses/addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddvehiclebreakdownexpensesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masters_new_vehicles_vehicle_service__ = __webpack_require__("./src/app/pages/masters/new-vehicles/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__expenses_service__ = __webpack_require__("./src/app/pages/expenses/expenses.service.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var AddvehiclebreakdownexpensesComponent = (function () {
    function AddvehiclebreakdownexpensesComponent(fb, dialog, auth, vehicleService, expensesService, snackBar, data) {
        this.fb = fb;
        this.dialog = dialog;
        this.auth = auth;
        this.vehicleService = vehicleService;
        this.expensesService = expensesService;
        this.snackBar = snackBar;
        this.data = data;
        this.user = {};
        this.editState = false;
        this.editData = [];
        this.vehicleNameCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.vehicleNumberCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.deletedItem = [];
        this.vehicleBreakdownExpensesData = {
            vehicleId: '',
            vehicleName: '',
            vehicleNumber: '',
            date: '',
            ownerId: '',
            total: 0,
        };
        if (data.row != null) {
            console.log(data);
            this.editState = true;
            this.editData = data.row;
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
            this.editState = false;
        }
    }
    AddvehiclebreakdownexpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.expensesForm = this.fb.group({
            date: [''],
            total: [''],
            rows: this.fb.array([])
        });
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            console.log(_this.user);
        });
        this.vehicleService.getUniqueVehicle(this.user).subscribe(function (data) {
            _this.vehicle = data;
            _this.vehicles = _this.vehicleNameCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterVehicle(val); }));
        });
        if (this.editData.length != 0) {
            this.expensesService.getVehicleBreakdownExpensesData(this.editData).subscribe(function (data) {
                data.forEach(function (element) {
                    console.log(element);
                    var row = _this.fb.group({
                        id: element.id,
                        particulars: element.particulars,
                        quantity: element.quantity,
                        rate: element.rate,
                        amount: element.amount,
                    });
                    _this.itemsForm.push(row);
                });
            });
            this.expensesForm.patchValue({
                'date': this.editData.date,
                'total': this.editData.total,
            });
        }
        if (this.editData.length == 0) {
            this.addRow();
        }
    };
    AddvehiclebreakdownexpensesComponent.prototype.saveVehicleExpenses = function () {
        var _this = this;
        this.vehicleBreakdownExpensesData.date = this.expensesForm.get('date').value;
        this.vehicleBreakdownExpensesData.date = __WEBPACK_IMPORTED_MODULE_6_moment__(this.vehicleBreakdownExpensesData.date).format("YYYY-MM-DD");
        this.vehicleBreakdownExpensesData.ownerId = this.user.id;
        this.vehicleBreakdownExpensesData.vehicleId = this.modelId;
        this.vehicleBreakdownExpensesData.vehicleName = this.modelname;
        this.vehicleBreakdownExpensesData.vehicleNumber = this.modelNumber;
        this.expensesService.addVehicleBreakdownExpenses(this.vehicleBreakdownExpensesData).subscribe(function (data) {
            _this.itemsForm.value.forEach(function (element) {
                element.vehicleBreakdownExpensesId = data.insertId;
                _this.expensesService.addVehicleBreakdownExpensesData(element).subscribe(function (data) { });
            });
        }, function (err) { }, function () {
            _this.ws.send(_this.user.ownerId + "vehiclebreakdownexpenses");
            _this.snackBar.open("Vehicle Breakdown Expense Added", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    AddvehiclebreakdownexpensesComponent.prototype.updateVehicleExpenses = function () {
        var _this = this;
        this.vehicleBreakdownExpensesData.date = this.expensesForm.get('date').value;
        this.vehicleBreakdownExpensesData.date = __WEBPACK_IMPORTED_MODULE_6_moment__(this.vehicleBreakdownExpensesData.date).format("YYYY-MM-DD");
        this.vehicleBreakdownExpensesData.ownerId = this.user.id;
        this.vehicleBreakdownExpensesData.vehicleId = this.modelId;
        this.vehicleBreakdownExpensesData.vehicleName = this.modelname;
        this.vehicleBreakdownExpensesData.vehicleNumber = this.modelNumber;
        console.log(this.vehicleBreakdownExpensesData);
        this.expensesService.updateVehicleBreakdownExpenses(this.vehicleBreakdownExpensesData).subscribe(function (data) {
            _this.itemsForm.value.forEach(function (element) {
                if (element.id) {
                    console.log(element);
                    _this.expensesService.updateVehicleBreakdownExpensesData(element).subscribe(function (data) { });
                }
                else {
                    element.vehicleBreakdownExpensesId = _this.vehicleBreakdownExpensesData.id;
                    _this.expensesService.addVehicleBreakdownExpensesData(element).subscribe();
                }
            });
        }, function (err) { }, function () {
            _this.ws.send(_this.user.ownerId + "vehiclebreakdownexpenses");
            _this.snackBar.open("Vehicle Breakdown Expense Updated", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    Object.defineProperty(AddvehiclebreakdownexpensesComponent.prototype, "itemsForm", {
        get: function () {
            return this.expensesForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    AddvehiclebreakdownexpensesComponent.prototype.addRow = function () {
        var rows = this.fb.group({
            particulars: [''],
            quantity: [''],
            rate: [''],
            amount: [''],
        });
        this.itemsForm.push(rows);
    };
    AddvehiclebreakdownexpensesComponent.prototype.deleteRow = function (i, aRow) {
        this.itemsForm.removeAt(i);
        if (aRow.value.id) {
            this.deletedItem.push(aRow.value);
        }
        this.calculateTotal();
    };
    AddvehiclebreakdownexpensesComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    AddvehiclebreakdownexpensesComponent.prototype.setModelName = function (temp, event) {
        var _this = this;
        if (event.source.selected == true) {
            this.modelId = temp.id;
            this.modelname = temp.modelname;
        }
        this.vehicleService.getVehicleNumber(this.user.ownerId, this.modelId).subscribe(function (data) {
            _this.vehiclenumber = data;
            _this.vehiclesnumber = _this.vehicleNumberCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterVehicleNumber(val); }));
        });
    };
    AddvehiclebreakdownexpensesComponent.prototype.setVehicleNumber = function (temp, event) {
        if (event.source.selected == true) {
            this.modelNumber = temp.number;
        }
        var data = {
            vehicleNumber: temp.number
        };
    };
    AddvehiclebreakdownexpensesComponent.prototype.filterVehicle = function (val) {
        return this.vehicle.filter(function (option) {
            return option.modelname.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddvehiclebreakdownexpensesComponent.prototype.filterVehicleNumber = function (val) {
        return this.vehiclenumber.filter(function (option) {
            return option.number.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddvehiclebreakdownexpensesComponent.prototype.calculateCharges = function (element) {
        element.get('amount').setValue(element.value.rate * element.value.quantity);
        this.calculateTotal();
    };
    AddvehiclebreakdownexpensesComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.vehicleBreakdownExpensesData.total = 0;
        this.itemsForm.value.forEach(function (element) {
            _this.vehicleBreakdownExpensesData.total += Number(element.amount);
        });
        this.expensesForm.patchValue({
            'total': this.vehicleBreakdownExpensesData.total,
        });
    };
    AddvehiclebreakdownexpensesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addvehiclebreakdownexpenses',
            template: __webpack_require__("./src/app/pages/expenses/addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component.html"),
            styles: [__webpack_require__("./src/app/pages/expenses/addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component.scss")]
        }),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__masters_new_vehicles_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_7__expenses_service__["a" /* ExpensesService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["I" /* MatSnackBar */], Object])
    ], AddvehiclebreakdownexpensesComponent);
    return AddvehiclebreakdownexpensesComponent;
}());



/***/ }),

/***/ "./src/app/pages/expenses/addvehiclemaintenanceexpenses/addvehiclemaintenanceexpenses.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"expensesForm\">\n  <fieldset>\n    <div class=\"row\">\n      <div class=\"col-lg-12\"> \n        <nb-card>\n          <nb-card-header>Vehicle Maintenance Expenses</nb-card-header>\n          <nb-card-body>\n            <div class=\"container\">              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Date\n                    <input [matDatepicker]=\"date\" matInput formControlName=\"date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n                    <mat-datepicker #date></mat-datepicker>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Vehicle Name\n                    <input aria-placeholder=\"Pick one\"  name=\"vname\" [formControl]=\"vehicleNameCtrl\" matInput [matAutocomplete]=\"vehiclenameauto\">\n                    <mat-autocomplete #vehiclenameauto=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of vehicles |async\" [value]=\"option.modelname\" (onSelectionChange)=\"setModelName(option,$event)\">\n                        {{ option.modelname }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Vehicle Number\n                    <input aria-placeholder=\"Pick one\"  name=\"vnum\" [formControl]=\"vehicleNumberCtrl\" matInput [matAutocomplete]=\"vehiclenumberauto\">\n                    <mat-autocomplete #vehiclenumberauto=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of vehiclesnumber |async\" [value]=\"option.number\" (onSelectionChange)=\"setVehicleNumber(option,$event)\">\n                        {{ option.number }}\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row ptb-10\">\n                <div formArrayName=\"rows\">\n                  <div class=\"row ptb-10\" *ngFor=\"let aRow of itemsForm.controls; let i=index\" [formGroupName]=\"i\">                  \n                    <div class=\"col-lg-4 col-12\">\n                      <mat-form-field class=\"w-100\">\n                        Particulars\n                        <input matInput formControlName=\"particulars\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-6\">\n                      <mat-form-field class=\"w-100\">\n                        Qty\n                        <input matInput formControlName=\"quantity\" (change)=\"calculateCharges(aRow)\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-6\">\n                      <mat-form-field class=\"w-100\">\n                        Rate\n                        <input matInput formControlName=\"rate\" (change)=\"calculateCharges(aRow)\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-10\">\n                      <mat-form-field class=\"w-100\">\n                        Amount\n                        <input matInput formControlName=\"amount\" readonly>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-lg-2 col-2\">\n                      <br>\n                      <button mat-icon-button color=\"primary\" (click)=\"deleteRow(i, aRow)\"> <mat-icon>clear</mat-icon></button>\n                    </div>\n                  </div>                    \n                </div>\n              </div>\n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\"></div>\n                <div class=\"col-lg-4 col-12\"></div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field class=\"w-100\">\n                    Total\n                    <input matInput formControlName=\"total\" readonly>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row pb-10\">\n                <div class=\"col-lg-12 col-12\">\n                  <button mat-fab color=\"primary\" (click)=\"addRow()\" style=\"float:right; margin: 5px;\"><mat-icon>add</mat-icon></button>\n                </div>                \n              </div>\n            </div>\n          </nb-card-body>\n        </nb-card>        \n      </div>\n    </div>\n    <div class=\"row ptb-10\">\n      <div class=\"col-lg-12 col-12\">          \n        <button *ngIf=\"!editState\" (click)=\"saveVehicleExpenses()\" mat-raised-button color=\"primary\">Save</button>\n        <button *ngIf=\"editState\" (click)=\"updateVehicleExpenses()\" mat-raised-button color=\"primary\">Update</button>\n        <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>            \n      </div>\n    </div>\n  </fieldset>\n</form>\n  "

/***/ }),

/***/ "./src/app/pages/expenses/addvehiclemaintenanceexpenses/addvehiclemaintenanceexpenses.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/expenses/addvehiclemaintenanceexpenses/addvehiclemaintenanceexpenses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddvehiclemaintenanceexpensesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masters_new_vehicles_vehicle_service__ = __webpack_require__("./src/app/pages/masters/new-vehicles/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__expenses_service__ = __webpack_require__("./src/app/pages/expenses/expenses.service.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var AddvehiclemaintenanceexpensesComponent = (function () {
    function AddvehiclemaintenanceexpensesComponent(fb, dialog, auth, vehicleService, expensesService, snackBar, data) {
        this.fb = fb;
        this.dialog = dialog;
        this.auth = auth;
        this.vehicleService = vehicleService;
        this.expensesService = expensesService;
        this.snackBar = snackBar;
        this.data = data;
        this.user = {};
        this.editState = false;
        this.editData = [];
        this.cost = [];
        this.vehicleNameCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.vehicleNumberCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.deletedItem = [];
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
        this.vehicleMaintenanceExpensesData = {
            vehicleId: '',
            vehicleName: '',
            vehicleNumber: '',
            date: '',
            ownerId: '',
            total: 0,
        };
        if (data.row != null) {
            console.log(data);
            this.editState = true;
            this.editData = data.row;
            this.vehicleMaintenanceExpensesData.id = data.row.id;
            this.vehicleNameCtrl.setValue(this.editData.vehicleName);
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
            this.editState = false;
        }
    }
    AddvehiclemaintenanceexpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.expensesForm = this.fb.group({
            date: [''],
            total: [''],
            rows: this.fb.array([])
        });
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            console.log(_this.user);
        });
        this.vehicleService.getUniqueVehicle(this.user).subscribe(function (data) {
            _this.vehicle = data;
            _this.vehicles = _this.vehicleNameCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterVehicle(val); }));
        });
        if (this.editData) {
            this.expensesService.getVehicleMaintenanceExpensesData(this.editData).subscribe(function (data) {
                data.forEach(function (element) {
                    var row = _this.fb.group({
                        id: element.id,
                        particulars: element.particulars,
                        quantity: element.quantity,
                        rate: element.rate,
                        amount: element.amount,
                    });
                    _this.itemsForm.push(row);
                });
            });
        }
        if (this.editData.length == 0) {
            this.addRow();
        }
        this.expensesForm.patchValue({
            'date': this.editData.date,
            'total': this.editData.total,
        });
    };
    AddvehiclemaintenanceexpensesComponent.prototype.saveVehicleExpenses = function () {
        var _this = this;
        this.vehicleMaintenanceExpensesData.date = this.expensesForm.get('date').value;
        this.vehicleMaintenanceExpensesData.date = __WEBPACK_IMPORTED_MODULE_6_moment__(this.vehicleMaintenanceExpensesData.date).format("YYYY-MM-DD");
        this.vehicleMaintenanceExpensesData.ownerId = this.user.id;
        this.vehicleMaintenanceExpensesData.vehicleId = this.modelId;
        this.vehicleMaintenanceExpensesData.vehicleName = this.modelname;
        this.vehicleMaintenanceExpensesData.vehicleNumber = this.modelNumber;
        this.expensesService.addVehicleMaintenanceExpenses(this.vehicleMaintenanceExpensesData).subscribe(function (data) {
            _this.itemsForm.value.forEach(function (element) {
                element.vehicleMaintenanceExpensesId = data.insertId;
                _this.expensesService.addVehicleMaintenanceExpensesData(element).subscribe(function (data) { });
            });
        }, function (err) { }, function () {
            _this.ws.send(_this.user.ownerId + "vehiclemaintenanceexpenses");
            _this.snackBar.open("Vehicle Maintenance Expense Added", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    AddvehiclemaintenanceexpensesComponent.prototype.updateVehicleExpenses = function () {
        var _this = this;
        this.vehicleMaintenanceExpensesData.date = this.expensesForm.get('date').value;
        this.vehicleMaintenanceExpensesData.date = __WEBPACK_IMPORTED_MODULE_6_moment__(this.vehicleMaintenanceExpensesData.date).format("YYYY-MM-DD");
        this.vehicleMaintenanceExpensesData.ownerId = this.user.id;
        this.vehicleMaintenanceExpensesData.vehicleId = this.modelId;
        this.vehicleMaintenanceExpensesData.vehicleName = this.modelname;
        this.vehicleMaintenanceExpensesData.vehicleNumber = this.modelNumber;
        this.expensesService.updateVehicleMaintenanceExpenses(this.vehicleMaintenanceExpensesData).subscribe(function (data) {
            _this.itemsForm.value.forEach(function (element) {
                if (element.id) {
                    _this.expensesService.updateVehicleMaintenanceExpensesData(element).subscribe(function (data) { });
                }
                else {
                    element.vehicleMaintenanceExpensesId = _this.vehicleMaintenanceExpensesData.id;
                    _this.expensesService.addVehicleMaintenanceExpensesData(element).subscribe();
                }
            });
        }, function (err) { }, function () {
            _this.ws.send(_this.user.ownerId + "vehiclemaintenanceexpenses");
            _this.snackBar.open("Vehicle Maintenance Expense Updated", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    Object.defineProperty(AddvehiclemaintenanceexpensesComponent.prototype, "itemsForm", {
        get: function () {
            return this.expensesForm.get('rows');
        },
        enumerable: true,
        configurable: true
    });
    AddvehiclemaintenanceexpensesComponent.prototype.addRow = function () {
        var rows = this.fb.group({
            particulars: [''],
            quantity: [''],
            rate: [''],
            amount: [''],
        });
        this.itemsForm.push(rows);
    };
    AddvehiclemaintenanceexpensesComponent.prototype.deleteRow = function (i, aRow) {
        this.itemsForm.removeAt(i);
        if (aRow.value.id) {
            this.deletedItem.push(aRow.value);
        }
        this.calculateTotal();
    };
    AddvehiclemaintenanceexpensesComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    AddvehiclemaintenanceexpensesComponent.prototype.setModelName = function (temp, event) {
        var _this = this;
        if (event.source.selected == true) {
            this.modelId = temp.id;
            this.modelname = temp.modelname;
        }
        this.vehicleService.getVehicleNumber(this.user.ownerId, this.modelId).subscribe(function (data) {
            _this.vehiclenumber = data;
            _this.vehiclesnumber = _this.vehicleNumberCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterVehicleNumber(val); }));
        });
    };
    AddvehiclemaintenanceexpensesComponent.prototype.setVehicleNumber = function (temp, event) {
        if (event.source.selected == true) {
            this.modelNumber = temp.number;
        }
        var data = {
            vehicleNumber: temp.number
        };
    };
    AddvehiclemaintenanceexpensesComponent.prototype.filterVehicle = function (val) {
        return this.vehicle.filter(function (option) {
            return option.modelname.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddvehiclemaintenanceexpensesComponent.prototype.filterVehicleNumber = function (val) {
        return this.vehiclenumber.filter(function (option) {
            return option.number.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddvehiclemaintenanceexpensesComponent.prototype.calculateCharges = function (element) {
        element.get('amount').setValue(element.value.rate * element.value.quantity);
        this.calculateTotal();
    };
    AddvehiclemaintenanceexpensesComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.vehicleMaintenanceExpensesData.total = 0;
        this.itemsForm.value.forEach(function (element) {
            _this.vehicleMaintenanceExpensesData.total += Number(element.amount);
        });
        this.expensesForm.patchValue({
            'total': this.vehicleMaintenanceExpensesData.total,
        });
    };
    AddvehiclemaintenanceexpensesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addvehiclemaintenanceexpenses',
            template: __webpack_require__("./src/app/pages/expenses/addvehiclemaintenanceexpenses/addvehiclemaintenanceexpenses.component.html"),
            styles: [__webpack_require__("./src/app/pages/expenses/addvehiclemaintenanceexpenses/addvehiclemaintenanceexpenses.component.scss")]
        }),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__masters_new_vehicles_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_7__expenses_service__["a" /* ExpensesService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["I" /* MatSnackBar */], Object])
    ], AddvehiclemaintenanceexpensesComponent);
    return AddvehiclemaintenanceexpensesComponent;
}());



/***/ }),

/***/ "./src/app/pages/expenses/expenses-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuel_fuel_component__ = __webpack_require__("./src/app/pages/expenses/fuel/fuel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addfuel_addfuel_component__ = __webpack_require__("./src/app/pages/expenses/addfuel/addfuel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__smsinfo_smsinfo_component__ = __webpack_require__("./src/app/pages/expenses/smsinfo/smsinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__officeexpenses_officeexpenses_component__ = __webpack_require__("./src/app/pages/expenses/officeexpenses/officeexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addofficeexpenses_addofficeexpenses_component__ = __webpack_require__("./src/app/pages/expenses/addofficeexpenses/addofficeexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vehiclemaintenanceexpenses_vehiclemaintenanceexpenses_component__ = __webpack_require__("./src/app/pages/expenses/vehiclemaintenanceexpenses/vehiclemaintenanceexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addvehiclemaintenanceexpenses_addvehiclemaintenanceexpenses_component__ = __webpack_require__("./src/app/pages/expenses/addvehiclemaintenanceexpenses/addvehiclemaintenanceexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vehiclebreakdownexpenses_vehiclebreakdownexpenses_component__ = __webpack_require__("./src/app/pages/expenses/vehiclebreakdownexpenses/vehiclebreakdownexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addvehiclebreakdownexpenses_addvehiclebreakdownexpenses_component__ = __webpack_require__("./src/app/pages/expenses/addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'fuel',
        component: __WEBPACK_IMPORTED_MODULE_2__fuel_fuel_component__["a" /* FuelComponent */]
    },
    {
        path: 'addFuel',
        component: __WEBPACK_IMPORTED_MODULE_3__addfuel_addfuel_component__["a" /* AddfuelComponent */]
    },
    {
        path: 'smsInfo',
        component: __WEBPACK_IMPORTED_MODULE_4__smsinfo_smsinfo_component__["a" /* SmsinfoComponent */]
    },
    {
        path: 'officeExpenses',
        component: __WEBPACK_IMPORTED_MODULE_5__officeexpenses_officeexpenses_component__["a" /* OfficeexpensesComponent */]
    },
    {
        path: 'addOfficeExpenses',
        component: __WEBPACK_IMPORTED_MODULE_6__addofficeexpenses_addofficeexpenses_component__["a" /* AddofficeexpensesComponent */]
    },
    {
        path: 'vehicleMaintenanceExpenses',
        component: __WEBPACK_IMPORTED_MODULE_7__vehiclemaintenanceexpenses_vehiclemaintenanceexpenses_component__["a" /* VehiclemaintenanceexpensesComponent */]
    },
    {
        path: 'addVehicleMaintenanceExpenses',
        component: __WEBPACK_IMPORTED_MODULE_8__addvehiclemaintenanceexpenses_addvehiclemaintenanceexpenses_component__["a" /* AddvehiclemaintenanceexpensesComponent */]
    },
    {
        path: 'vehicleBreakdownExpenses',
        component: __WEBPACK_IMPORTED_MODULE_9__vehiclebreakdownexpenses_vehiclebreakdownexpenses_component__["a" /* VehiclebreakdownexpensesComponent */]
    },
    {
        path: 'addVehicleBreakdownExpenses',
        component: __WEBPACK_IMPORTED_MODULE_10__addvehiclebreakdownexpenses_addvehiclebreakdownexpenses_component__["a" /* AddvehiclebreakdownexpensesComponent */]
    },
];
var ExpensesRoutingModule = (function () {
    function ExpensesRoutingModule() {
    }
    ExpensesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ExpensesRoutingModule);
    return ExpensesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/expenses/expenses.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesModule", function() { return ExpensesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expenses_routing_module__ = __webpack_require__("./src/app/pages/expenses/expenses-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuel_fuel_component__ = __webpack_require__("./src/app/pages/expenses/fuel/fuel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addfuel_addfuel_component__ = __webpack_require__("./src/app/pages/expenses/addfuel/addfuel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fuel_fuel_service__ = __webpack_require__("./src/app/pages/expenses/fuel/fuel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__smsinfo_smsinfo_component__ = __webpack_require__("./src/app/pages/expenses/smsinfo/smsinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__officeexpenses_officeexpenses_component__ = __webpack_require__("./src/app/pages/expenses/officeexpenses/officeexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addofficeexpenses_addofficeexpenses_component__ = __webpack_require__("./src/app/pages/expenses/addofficeexpenses/addofficeexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__vehiclemaintenanceexpenses_vehiclemaintenanceexpenses_component__ = __webpack_require__("./src/app/pages/expenses/vehiclemaintenanceexpenses/vehiclemaintenanceexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vehiclebreakdownexpenses_vehiclebreakdownexpenses_component__ = __webpack_require__("./src/app/pages/expenses/vehiclebreakdownexpenses/vehiclebreakdownexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__addvehiclebreakdownexpenses_addvehiclebreakdownexpenses_component__ = __webpack_require__("./src/app/pages/expenses/addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__addvehiclemaintenanceexpenses_addvehiclemaintenanceexpenses_component__ = __webpack_require__("./src/app/pages/expenses/addvehiclemaintenanceexpenses/addvehiclemaintenanceexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__expenses_service__ = __webpack_require__("./src/app/pages/expenses/expenses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_moment_adapter__ = __webpack_require__("./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ExpensesModule = (function () {
    function ExpensesModule() {
    }
    ExpensesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__expenses_routing_module__["a" /* ExpensesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["P" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["B" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["L" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["S" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["Q" /* MatTabsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__fuel_fuel_component__["a" /* FuelComponent */], __WEBPACK_IMPORTED_MODULE_4__addfuel_addfuel_component__["a" /* AddfuelComponent */], __WEBPACK_IMPORTED_MODULE_9__smsinfo_smsinfo_component__["a" /* SmsinfoComponent */], __WEBPACK_IMPORTED_MODULE_10__officeexpenses_officeexpenses_component__["a" /* OfficeexpensesComponent */], __WEBPACK_IMPORTED_MODULE_11__addofficeexpenses_addofficeexpenses_component__["a" /* AddofficeexpensesComponent */], __WEBPACK_IMPORTED_MODULE_12__vehiclemaintenanceexpenses_vehiclemaintenanceexpenses_component__["a" /* VehiclemaintenanceexpensesComponent */], __WEBPACK_IMPORTED_MODULE_13__vehiclebreakdownexpenses_vehiclebreakdownexpenses_component__["a" /* VehiclebreakdownexpensesComponent */], __WEBPACK_IMPORTED_MODULE_14__addvehiclebreakdownexpenses_addvehiclebreakdownexpenses_component__["a" /* AddvehiclebreakdownexpensesComponent */], __WEBPACK_IMPORTED_MODULE_15__addvehiclemaintenanceexpenses_addvehiclemaintenanceexpenses_component__["a" /* AddvehiclemaintenanceexpensesComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__fuel_fuel_service__["a" /* FuelService */],
                __WEBPACK_IMPORTED_MODULE_16__expenses_service__["a" /* ExpensesService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_17__angular_material_moment_adapter__["a" /* MomentDateAdapter */], deps: [__WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: {
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
    ], ExpensesModule);
    return ExpensesModule;
}());



/***/ }),

/***/ "./src/app/pages/expenses/expenses.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesService; });
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


var ExpensesService = (function () {
    function ExpensesService(http) {
        this.http = http;
    }
    ExpensesService.prototype.getOfficeExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/retrieveOfficeExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.getOfficeExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/retrieveOfficeExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.getVehicleBreakdownExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/retrieveVehicleBreakdownExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.getVehicleBreakdownExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/retrieveVehicleBreakdownExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.getVehicleMaintenanceExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/retrieveVehicleMaintenanceExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.getVehicleMaintenanceExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/retrieveVehicleMaintenanceExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.updateOfficeExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/updateOfficeExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.updateOfficeExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/updateOfficeExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.updateVehicleBreakdownExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/updateVehicleBreakdownExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.updateVehicleBreakdownExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/updateVehicleBreakdownExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.updateVehicleMaintenanceExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/updateVehicleMaintenanceExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.updateVehicleMaintenanceExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/updateVehicleMaintenanceExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.deleteOfficeExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/deleteOfficeExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.deleteOfficeExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/deleteOfficeExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.deleteVehicleBreakdownExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/deleteVehicleBreakdownExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.deleteVehicleBreakdownExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/deleteVehicleBreakdownExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.deleteVehicleMaintenanceExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/deleteVehicleMaintenanceExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.deleteVehicleMaintenanceExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/deleteVehicleMaintenanceExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.addOfficeExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/addOfficeExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.addOfficeExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/addOfficeExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.addVehicleBreakdownExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/addVehicleBreakdownExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.addVehicleBreakdownExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/addVehicleBreakdownExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.addVehicleMaintenanceExpenses = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/addVehicleMaintenanceExpenses', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService.prototype.addVehicleMaintenanceExpensesData = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/expenses/addVehicleMaintenanceExpensesData', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExpensesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ExpensesService);
    return ExpensesService;
}());



/***/ }),

/***/ "./src/app/pages/expenses/fuel/fuel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n          Fuel Expenses\n      </nb-card-header>\n      <nb-card-body>\n          <div align=\"center\">\n              <mat-form-field class=\"filter-field\">\n                <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n              </mat-form-field>\n      \n              <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n              <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n          </div>\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container matColumnDef=\"driver\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Vehicle Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.vehicleName}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"fuelType\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Driver</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.driver}} </mat-cell>\n          </ng-container>\n                    \n          <ng-container matColumnDef=\"currentKMS\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>KMS</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.currentKMS}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"fuelCost\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Mileage</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.mileage}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n                <!-- <button mat-menu-item (click)=\"selectRow(row)\">Edit</button> -->\n                <button (click)=\"deleteFuel(row)\" mat-menu-item>Delete</button>\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n        \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"></mat-row>\n        \n        </mat-table>\n          \n        <mat-paginator\n          [length]=\"length\"\n          [pageSize]=\"pageSize\"\n          [pageSizeOptions]=\"pageSizeOptions\">\n        </mat-paginator>        \n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-12\">\n    <a *ngIf=\"permission.addVehicleFuel\" (click)=\"selectRow(null)\" class=\"float\">\n      <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n    </a>      \n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/expenses/fuel/fuel.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/expenses/fuel/fuel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addfuel_addfuel_component__ = __webpack_require__("./src/app/pages/expenses/addfuel/addfuel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuel_service__ = __webpack_require__("./src/app/pages/expenses/fuel/fuel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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







var FuelComponent = (function () {
    function FuelComponent(dialog, auth, fuelService, router) {
        this.dialog = dialog;
        this.auth = auth;
        this.fuelService = fuelService;
        this.router = router;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.user = {};
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.displayedColumns = ['driver', 'fuelType', 'currentKMS', 'fuelCost', 'Options'];
        this.permission = {};
    }
    FuelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
                if (_this.permission.manageVehicleFuel === 0) {
                    _this.displayedColumns.pop();
                }
            });
            _this.fuelService.getFuel(_this.user).subscribe(function (data) {
                console.log(data);
                _this.tempArray = data;
                _this.dataSource.data = _this.tempArray;
                _this.length = data.length;
            });
        });
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    FuelComponent.prototype.selectRow = function (row) {
        var _this = this;
        console.log(row);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__addfuel_addfuel_component__["a" /* AddfuelComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
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
    FuelComponent.prototype.deleteFuel = function (row) {
        var _this = this;
        console.log("delete called");
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.fuelService.deleteFuel(row).subscribe(function (data) {
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
                    window.alert("Error Cannot be Deleted");
                }
            }
        });
    };
    FuelComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    FuelComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.dataSource.filter = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], FuelComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], FuelComponent.prototype, "paginator", void 0);
    FuelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuel',
            template: __webpack_require__("./src/app/pages/expenses/fuel/fuel.component.html"),
            styles: [__webpack_require__("./src/app/pages/expenses/fuel/fuel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__fuel_service__["a" /* FuelService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], FuelComponent);
    return FuelComponent;
}());



/***/ }),

/***/ "./src/app/pages/expenses/fuel/fuel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelService; });
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


var FuelService = (function () {
    function FuelService(http) {
        this.http = http;
    }
    FuelService.prototype.addFuel = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/fuel/add', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    FuelService.prototype.getFuel = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/fuel/retrieve', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    FuelService.prototype.getCurrentKms = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/fuel/retrieveCurrentKMS', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    FuelService.prototype.deleteFuel = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/fuel/delete', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    FuelService.prototype.updateFuel = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/fuel/update', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    FuelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FuelService);
    return FuelService;
}());



/***/ }),

/***/ "./src/app/pages/expenses/officeexpenses/officeexpenses.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n          Office Expenses\n      </nb-card-header>\n      <nb-card-body>  \n          <div align=\"center\">\n              <mat-form-field class=\"filter-field\">\n                <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n              </mat-form-field>\n      \n              <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n              <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n          </div>             \n        <div>\n          <mat-table #table [dataSource]=\"dataSource\" matSort>\n    \n            <ng-container matColumnDef=\"date\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd-MM-yyyy'}} </mat-cell>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"particulars\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Particulars</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.particulars}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"amount\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Amount</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.amount}} </mat-cell>\n            </ng-container>\n                                    \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    \n          </mat-table>\n    \n          <mat-paginator [length]=\"length\"\n            [pageSize]=\"pageSize\"\n            [pageSizeOptions]=\"pageSizeOptions\">\n          </mat-paginator>\n        </div>                \n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"col-lg-12\">\n  <a *ngIf=\"permission.addOfficeExpenses\" (click)=\"selectRow(null)\" class=\"float\">\n    <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n  </a>      \n</div>"

/***/ }),

/***/ "./src/app/pages/expenses/officeexpenses/officeexpenses.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/expenses/officeexpenses/officeexpenses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeexpensesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_sort__ = __webpack_require__("./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_paginator__ = __webpack_require__("./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addofficeexpenses_addofficeexpenses_component__ = __webpack_require__("./src/app/pages/expenses/addofficeexpenses/addofficeexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expenses_service__ = __webpack_require__("./src/app/pages/expenses/expenses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OfficeexpensesComponent = (function () {
    function OfficeexpensesComponent(dialog, expensesService, auth) {
        this.dialog = dialog;
        this.expensesService = expensesService;
        this.auth = auth;
        this.pageSize = 5;
        this.pageSizeOptions = [10, 15, 25, 40];
        this.user = {};
        this.permission = {};
        this.displayedColumns = ['date', 'particulars', 'amount'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_7__angular_material__["O" /* MatTableDataSource */]();
    }
    OfficeexpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
            });
            _this.expensesService.getOfficeExpenses(_this.user).subscribe(function (data) {
                console.log(data);
                _this.tempArray = data;
                _this.dataSource.data = _this.tempArray;
                _this.length = data.length;
            });
        });
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    OfficeexpensesComponent.prototype.selectRow = function (row) {
        var _this = this;
        console.log(row);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__addofficeexpenses_addofficeexpenses_component__["a" /* AddofficeexpensesComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
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
    OfficeexpensesComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    OfficeexpensesComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.dataSource.filter = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_sort__["a" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material_sort__["a" /* MatSort */])
    ], OfficeexpensesComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material_paginator__["a" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material_paginator__["a" /* MatPaginator */])
    ], OfficeexpensesComponent.prototype, "paginator", void 0);
    OfficeexpensesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'officeexpenses',
            template: __webpack_require__("./src/app/pages/expenses/officeexpenses/officeexpenses.component.html"),
            styles: [__webpack_require__("./src/app/pages/expenses/officeexpenses/officeexpenses.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__expenses_service__["a" /* ExpensesService */],
            __WEBPACK_IMPORTED_MODULE_6__core_auth_service__["a" /* AuthService */]])
    ], OfficeexpensesComponent);
    return OfficeexpensesComponent;
}());



/***/ }),

/***/ "./src/app/pages/expenses/smsinfo/smsinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nb-card>\n    <nb-card-header>\n        SMS/Calls\n        <div style=\"float: right;\" *ngIf=\"screenWidth>=560\">\n            <button class=\"booked\" [disabled]=\"year=='2019'\" mat-button (click)=\"yearChanged('2019');\">2019</button>\n            <button class=\"allotted\" [disabled]=\"year=='2020'\" mat-button (click)=\"yearChanged('2020')\">2020</button>\n            <button class=\"billed\" [disabled]=\"year=='2021'\" mat-button (click)=\"yearChanged('2021')\">2021</button>\n        </div>\n        <div style=\"display:inline; padding-left: 5%;\" *ngIf=\"screenWidth<=560\">\n          <mat-form-field class=\"mobile-select\">\n              <mat-select [value]=\"year\" (selectionChange)=\"filter($event.value)\">\n                <mat-option value=\"2019\">2019</mat-option>\n                <mat-option value=\"2020\">2020</mat-option>\n                <mat-option value=\"2021\">2021</mat-option>\n              </mat-select>\n          </mat-form-field>\n        </div>\n    </nb-card-header>\n    <nb-card-body>\n      <mat-tab-group mat-stretch-tabs #tabGroup (selectedTabChange)=\"tabChanged()\">\n        <mat-tab label=\"SMS\">          \n          <div>\n            <mat-table #sort1='matSort' [dataSource]=\"dataSourceSMS\" matSort>\n      \n              <ng-container matColumnDef=\"date\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.MONTH}} </mat-cell>\n              </ng-container>\n      \n              <ng-container matColumnDef=\"count\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Count</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.SMS}} </mat-cell>\n              </ng-container>\n  \n              <ng-container matColumnDef=\"amount\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Amount(excluding GST)</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Amount}} </mat-cell>\n              </ng-container>\n                                      \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      \n            </mat-table>\n      \n            <mat-paginator #paginator1 [length]=\"lengthSMS\"\n              [pageSize]=\"pageSizeSMS\"\n              [pageSizeOptions]=\"pageSizeOptionsSMS\">\n            </mat-paginator>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Whatsapp\">          \n          <div>\n            <mat-table #sort2='matSort' [dataSource]=\"dataSourceWhatsapp\" matSort>\n                \n              <ng-container matColumnDef=\"date\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.MONTH}} </mat-cell>\n              </ng-container>\n      \n              <ng-container matColumnDef=\"count\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Count</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.WHATSAPP}} </mat-cell>\n              </ng-container>\n  \n              <ng-container matColumnDef=\"amount\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Amount(excluding GST)</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Amount}} </mat-cell>\n              </ng-container>\n    \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    \n            </mat-table>\n    \n            <mat-paginator #paginator2 [length]=\"lengthWhatsapp\"\n              [pageSize]=\"pageSizeWhatsapp\"\n              [pageSizeOptions]=\"pageSizeOptionsWhatsapp\">\n            </mat-paginator>    \n          </div>\n        </mat-tab>\n        <mat-tab label=\"Calls\">\n          <div>\n            <mat-table #sort3='matSort' [dataSource]=\"dataSourceCalls\" matSort>\n                          \n              <ng-container matColumnDef=\"date\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.MONTH}} </mat-cell>\n              </ng-container>\n      \n              <ng-container matColumnDef=\"count\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Count</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.CALLS}} </mat-cell>\n              </ng-container>\n  \n              <ng-container matColumnDef=\"amount\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Amount(excluding GST)</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Amount}} </mat-cell>\n              </ng-container>\n                                            \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      \n            </mat-table>\n      \n            <mat-paginator #paginator3 [length]=\"lengthCalls\"\n              [pageSize]=\"pageSizeCalls\"\n              [pageSizeOptions]=\"pageSizeOptionsCalls\">\n            </mat-paginator>      \n          </div>\n        </mat-tab>\n        <mat-tab label=\"Bookings\">\n          <div>\n            <mat-table #sort4='matSort' [dataSource]=\"dataSourceBookings\" matSort>\n                          \n              <ng-container matColumnDef=\"date\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.MONTH}} </mat-cell>\n              </ng-container>\n      \n              <ng-container matColumnDef=\"count\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Count</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.count}} </mat-cell>\n              </ng-container>\n  \n              <ng-container matColumnDef=\"amount\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Amount(excluding GST)</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Amount}} </mat-cell>\n              </ng-container>\n                                            \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      \n            </mat-table>\n      \n            <mat-paginator #paginator4 [length]=\"lengthBookings\"\n              [pageSize]=\"pageSizeBookings\"\n              [pageSizeOptions]=\"pageSizeOptionsBookings\">\n            </mat-paginator>      \n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </nb-card-body>\n  </nb-card>\n</div>"

/***/ }),

/***/ "./src/app/pages/expenses/smsinfo/smsinfo.component.scss":
/***/ (function(module, exports) {

module.exports = ".booked.mat-button[disabled] {\n  color: white !important;\n  background-color: gray !important; }\n\n.booked.mat-button {\n  color: black !important; }\n\n.allotted.mat-button[disabled] {\n  color: white !important;\n  background-color: gray !important; }\n\n.allotted.mat-button {\n  color: black !important; }\n\n.billed.mat-button[disabled] {\n  color: white !important;\n  background-color: gray !important; }\n\n.billed.mat-button {\n  color: black !important; }\n"

/***/ }),

/***/ "./src/app/pages/expenses/smsinfo/smsinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_sort__ = __webpack_require__("./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_paginator__ = __webpack_require__("./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duties_call_call_service__ = __webpack_require__("./src/app/pages/duties/call/call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SmsinfoComponent = (function () {
    function SmsinfoComponent(auth, callService) {
        this.auth = auth;
        this.callService = callService;
        this.user = {};
        this.year = '2019';
        this.smsYear = '2019';
        this.whatsappYear = '';
        this.callYear = '';
        this.bookingYear = '';
        this.pageSizeSMS = 5;
        this.pageSizeOptionsSMS = [10, 15, 25, 40];
        this.pageSizeWhatsapp = 5;
        this.pageSizeOptionsWhatsapp = [10, 15, 25, 40];
        this.pageSizeCalls = 5;
        this.pageSizeOptionsCalls = [10, 15, 25, 40];
        this.pageSizeBookings = 5;
        this.pageSizeOptionsBookings = [10, 15, 25, 40];
        this.displayedColumns = ['date', 'count', 'amount'];
        this.dataSourceSMS = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["O" /* MatTableDataSource */]();
        this.dataSourceWhatsapp = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["O" /* MatTableDataSource */]();
        this.dataSourceCalls = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["O" /* MatTableDataSource */]();
        this.dataSourceBookings = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["O" /* MatTableDataSource */]();
    }
    SmsinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        var i = 0;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.callService.getSMSCount({ year: _this.year, ownerId: _this.user.ownerId }).subscribe(function (data) {
                data.forEach(function (element) {
                    var monthName = __WEBPACK_IMPORTED_MODULE_6_moment__(data[i].MONTH, 'M').format('MMMM');
                    var startOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).startOf("month").format("DD-MM-YYYY");
                    var endOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).endOf("month").format("DD-MM-YYYY");
                    data[i].MONTH = startOfMonth + " - " + endOfMonth;
                    data[i].Amount = data[i].SMS * 0.20;
                    i = i + 1;
                });
                _this.dataSourceSMS.data = data;
                _this.lengthSMS = data.length;
                _this.dataSourceSMS.sort = _this.sort1;
                _this.dataSourceSMS.paginator = _this.paginator1;
            });
        });
    };
    SmsinfoComponent.prototype.yearChanged = function (year) {
        var _this = this;
        this.dataSourceSMS.data = [];
        this.dataSourceWhatsapp.data = [];
        this.dataSourceCalls.data = [];
        if (this.tabGroup.selectedIndex == 0) {
            var i = 0;
            this.year = year;
            this.smsYear = year;
            this.callService.getSMSCount({ year: this.year, ownerId: this.user.ownerId }).subscribe(function (data) {
                data.forEach(function (element) {
                    var monthName = __WEBPACK_IMPORTED_MODULE_6_moment__(data[i].MONTH, 'M').format('MMMM');
                    var startOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).startOf("month").format("DD-MM-YYYY");
                    var endOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).endOf("month").format("DD-MM-YYYY");
                    data[i].MONTH = startOfMonth + " - " + endOfMonth;
                    data[i].Amount = data[i].SMS * 0.20;
                    i = i + 1;
                });
                _this.dataSourceSMS.data = data;
                _this.lengthSMS = data.length;
                _this.dataSourceSMS.sort = _this.sort1;
                _this.dataSourceSMS.paginator = _this.paginator1;
            });
        }
        if (this.tabGroup.selectedIndex == 1) {
            var i = 0;
            this.year = year;
            this.whatsappYear = year;
            this.callService.getWhatsAppCount({ year: this.year, ownerId: this.user.ownerId }).subscribe(function (data) {
                data.forEach(function (element) {
                    var monthName = __WEBPACK_IMPORTED_MODULE_6_moment__(data[i].MONTH, 'M').format('MMMM');
                    var startOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).startOf("month").format("DD-MM-YYYY");
                    var endOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).endOf("month").format("DD-MM-YYYY");
                    data[i].MONTH = startOfMonth + " - " + endOfMonth;
                    data[i].Amount = data[i].WHATSAPP * 0.30;
                    i = i + 1;
                });
                _this.dataSourceWhatsapp.data = data;
                _this.lengthWhatsapp = data.length;
                _this.dataSourceWhatsapp.sort = _this.sort2;
                _this.dataSourceWhatsapp.paginator = _this.paginator2;
            });
        }
        if (this.tabGroup.selectedIndex == 2) {
            var i = 0;
            this.callYear = year;
            this.year = year;
            this.callService.getCallCount({ year: this.year, ownerId: this.user.ownerId }).subscribe(function (data) {
                data.forEach(function (element) {
                    var monthName = __WEBPACK_IMPORTED_MODULE_6_moment__(data[i].MONTH, 'M').format('MMMM');
                    var startOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).startOf("month").format("DD-MM-YYYY");
                    var endOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).endOf("month").format("DD-MM-YYYY");
                    data[i].MONTH = startOfMonth + " - " + endOfMonth;
                    data[i].Amount = 49;
                    i = i + 1;
                });
                _this.dataSourceCalls.data = data;
                _this.lengthCalls = data.length;
                _this.dataSourceCalls.sort = _this.sort3;
                _this.dataSourceCalls.paginator = _this.paginator3;
            });
        }
        if (this.tabGroup.selectedIndex == 3) {
            var i = 0;
            this.bookingYear = year;
            this.year = year;
            this.callService.getBookingCount({ year: this.year, ownerId: this.user.ownerId }).subscribe(function (data) {
                data.forEach(function (element) {
                    var monthName = __WEBPACK_IMPORTED_MODULE_6_moment__(data[i].MONTH, 'M').format('MMMM');
                    var startOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).startOf("month").format("DD-MM-YYYY");
                    var endOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).endOf("month").format("DD-MM-YYYY");
                    data[i].MONTH = startOfMonth + " - " + endOfMonth;
                    data[i].Amount = 49;
                    i = i + 1;
                });
                _this.dataSourceBookings.data = data;
                _this.lengthBookings = data.length;
                _this.dataSourceBookings.sort = _this.sort4;
                _this.dataSourceBookings.paginator = _this.paginator4;
            });
        }
    };
    SmsinfoComponent.prototype.tabChanged = function () {
        var _this = this;
        if (this.tabGroup.selectedIndex == 0 && this.year != this.smsYear) {
            var i = 0;
            this.smsYear = this.year;
            this.callService.getSMSCount({ year: this.year, ownerId: this.user.ownerId }).subscribe(function (data) {
                data.forEach(function (element) {
                    var monthName = __WEBPACK_IMPORTED_MODULE_6_moment__(data[i].MONTH, 'M').format('MMMM');
                    var startOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).startOf("month").format("DD-MM-YYYY");
                    var endOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).endOf("month").format("DD-MM-YYYY");
                    data[i].MONTH = startOfMonth + " - " + endOfMonth;
                    data[i].Amount = data[i].SMS * 0.20;
                    i = i + 1;
                });
                _this.dataSourceSMS.data = data;
                _this.lengthSMS = data.length;
                _this.dataSourceSMS.sort = _this.sort1;
                _this.dataSourceSMS.paginator = _this.paginator1;
            });
        }
        if (this.tabGroup.selectedIndex == 1 && this.year != this.whatsappYear) {
            var i = 0;
            this.whatsappYear = this.year;
            this.callService.getWhatsAppCount({ year: this.year, ownerId: this.user.ownerId }).subscribe(function (data) {
                data.forEach(function (element) {
                    var monthName = __WEBPACK_IMPORTED_MODULE_6_moment__(data[i].MONTH, 'M').format('MMMM');
                    var startOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).startOf("month").format("DD-MM-YYYY");
                    var endOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).endOf("month").format("DD-MM-YYYY");
                    data[i].MONTH = startOfMonth + " - " + endOfMonth;
                    data[i].Amount = data[i].WHATSAPP * 0.30;
                    i = i + 1;
                });
                _this.dataSourceWhatsapp.data = data;
                _this.lengthWhatsapp = data.length;
                _this.dataSourceWhatsapp.sort = _this.sort2;
                _this.dataSourceWhatsapp.paginator = _this.paginator2;
            });
        }
        if (this.tabGroup.selectedIndex == 2 && this.year != this.callYear) {
            var i = 0;
            this.callYear = this.year;
            this.callService.getCallCount({ year: this.year, ownerId: this.user.ownerId }).subscribe(function (data) {
                data.forEach(function (element) {
                    var monthName = __WEBPACK_IMPORTED_MODULE_6_moment__(data[i].MONTH, 'M').format('MMMM');
                    var startOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).startOf("month").format("DD-MM-YYYY");
                    var endOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).endOf("month").format("DD-MM-YYYY");
                    data[i].MONTH = startOfMonth + " - " + endOfMonth;
                    data[i].Amount = 49;
                    i = i + 1;
                });
                _this.dataSourceCalls.data = data;
                _this.lengthCalls = data.length;
                _this.dataSourceCalls.sort = _this.sort3;
                _this.dataSourceCalls.paginator = _this.paginator3;
            });
        }
        if (this.tabGroup.selectedIndex == 3 && this.year != this.bookingYear) {
            var i = 0;
            this.bookingYear = this.year;
            this.callService.getBookingCount({ year: this.year, ownerId: this.user.ownerId }).subscribe(function (data) {
                data.forEach(function (element) {
                    var monthName = __WEBPACK_IMPORTED_MODULE_6_moment__(data[i].MONTH, 'M').format('MMMM');
                    var startOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).startOf("month").format("DD-MM-YYYY");
                    var endOfMonth = __WEBPACK_IMPORTED_MODULE_6_moment__().month(monthName).endOf("month").format("DD-MM-YYYY");
                    data[i].MONTH = startOfMonth + " - " + endOfMonth;
                    data[i].Amount = 49;
                    i = i + 1;
                });
                _this.dataSourceBookings.data = data;
                _this.lengthBookings = data.length;
                _this.dataSourceBookings.sort = _this.sort4;
                _this.dataSourceBookings.paginator = _this.paginator4;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tabGroup'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["N" /* MatTabGroup */])
    ], SmsinfoComponent.prototype, "tabGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material_sort__["a" /* MatSort */])
    ], SmsinfoComponent.prototype, "sort1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material_sort__["a" /* MatSort */])
    ], SmsinfoComponent.prototype, "sort2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material_sort__["a" /* MatSort */])
    ], SmsinfoComponent.prototype, "sort3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material_sort__["a" /* MatSort */])
    ], SmsinfoComponent.prototype, "sort4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material_paginator__["a" /* MatPaginator */])
    ], SmsinfoComponent.prototype, "paginator1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material_paginator__["a" /* MatPaginator */])
    ], SmsinfoComponent.prototype, "paginator2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material_paginator__["a" /* MatPaginator */])
    ], SmsinfoComponent.prototype, "paginator3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material_paginator__["a" /* MatPaginator */])
    ], SmsinfoComponent.prototype, "paginator4", void 0);
    SmsinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'smsinfo',
            template: __webpack_require__("./src/app/pages/expenses/smsinfo/smsinfo.component.html"),
            styles: [__webpack_require__("./src/app/pages/expenses/smsinfo/smsinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__duties_call_call_service__["a" /* CallService */]])
    ], SmsinfoComponent);
    return SmsinfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/expenses/vehiclebreakdownexpenses/vehiclebreakdownexpenses.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n          Vehicle Breakdown Expenses\n      </nb-card-header>\n      <nb-card-body>\n          <div align=\"center\">\n              <mat-form-field class=\"filter-field\">\n                <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n              </mat-form-field>\n      \n              <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n              <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n          </div>\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd-MM-yyyy'}} </mat-cell>\n          </ng-container>\n  \n          <ng-container matColumnDef=\"vehicleName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Vehicle Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.vehicleName}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"vehicleNumber\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Vehicle Number</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.vehicleNumber}} </mat-cell>\n          </ng-container>\n            \n          <ng-container matColumnDef=\"amount\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Total</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.total}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"selectRow(row)\">Edit</button>\n                <button (click)=\"deleteExpense(row)\" mat-menu-item>Delete</button>\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n        \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        \n        </mat-table>\n          \n        <mat-paginator\n          [length]=\"length\"\n          [pageSize]=\"pageSize\"\n          [pageSizeOptions]=\"pageSizeOptions\">\n        </mat-paginator>        \n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-12\">\n    <a *ngIf=\"permission.addVehicleBreakDowns\" (click)=\"selectRow(null)\" class=\"float\">\n      <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n    </a>      \n  </div>\n</div>\n\n\n  "

/***/ }),

/***/ "./src/app/pages/expenses/vehiclebreakdownexpenses/vehiclebreakdownexpenses.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/expenses/vehiclebreakdownexpenses/vehiclebreakdownexpenses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclebreakdownexpensesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addvehiclebreakdownexpenses_addvehiclebreakdownexpenses_component__ = __webpack_require__("./src/app/pages/expenses/addvehiclebreakdownexpenses/addvehiclebreakdownexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expenses_service__ = __webpack_require__("./src/app/pages/expenses/expenses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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








var VehiclebreakdownexpensesComponent = (function () {
    function VehiclebreakdownexpensesComponent(dialog, auth, expensesService, snackBar) {
        this.dialog = dialog;
        this.auth = auth;
        this.expensesService = expensesService;
        this.snackBar = snackBar;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.user = {};
        this.permission = {};
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableDataSource */]();
        this.displayedColumns = ['date', 'vehicleName', 'vehicleNumber', 'amount', 'Options'];
    }
    VehiclebreakdownexpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
            var _this = this;
            if (event.data == this.user.ownerId + 'vehiclebreakdownexpenses')
                this.expensesService.getVehicleBreakdownExpenses(this.user).subscribe(function (data) {
                    _this.tempArray = data;
                    _this.dataSource.data = _this.tempArray;
                    _this.length = data.length;
                });
        }.bind(this);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
                if (_this.permission.manageVehicleBreakDowns === 0) {
                    _this.displayedColumns.pop();
                }
            });
            _this.expensesService.getVehicleBreakdownExpenses(_this.user).subscribe(function (data) {
                console.log(data);
                _this.tempArray = data;
                _this.dataSource.data = _this.tempArray;
                _this.length = data.length;
            });
        });
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    VehiclebreakdownexpensesComponent.prototype.ngOnDestroy = function () {
        this.ws.close();
    };
    VehiclebreakdownexpensesComponent.prototype.selectRow = function (row) {
        var _this = this;
        console.log(row);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__addvehiclebreakdownexpenses_addvehiclebreakdownexpenses_component__["a" /* AddvehiclebreakdownexpensesComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
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
    VehiclebreakdownexpensesComponent.prototype.deleteExpense = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { disableClose: true, autoFocus: false }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.expensesService.deleteVehicleBreakdownExpensesData(row).subscribe(function (data) {
                    if (data.errno == undefined) {
                        var i = _this.tempArray.indexOf(row);
                        _this.tempArray.splice(i, 1);
                        _this.dataSource.data = _this.tempArray;
                        _this.snackBar.open("Expense Deleted", "X", { duration: 3000 });
                    }
                    else {
                        if (data.errno == 1451) {
                            window.alert("Cannot delete because you have corresponding Duties");
                        }
                        else {
                            window.alert("Error Cannot Delete Expense");
                        }
                    }
                });
            }
        });
    };
    VehiclebreakdownexpensesComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    VehiclebreakdownexpensesComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.dataSource.filter = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["K" /* MatSort */])
    ], VehiclebreakdownexpensesComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["A" /* MatPaginator */])
    ], VehiclebreakdownexpensesComponent.prototype, "paginator", void 0);
    VehiclebreakdownexpensesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vehiclebreakdownexpenses',
            template: __webpack_require__("./src/app/pages/expenses/vehiclebreakdownexpenses/vehiclebreakdownexpenses.component.html"),
            styles: [__webpack_require__("./src/app/pages/expenses/vehiclebreakdownexpenses/vehiclebreakdownexpenses.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__expenses_service__["a" /* ExpensesService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["I" /* MatSnackBar */]])
    ], VehiclebreakdownexpensesComponent);
    return VehiclebreakdownexpensesComponent;
}());



/***/ }),

/***/ "./src/app/pages/expenses/vehiclemaintenanceexpenses/vehiclemaintenanceexpenses.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n          Vehicle Maintenance Expenses\n      </nb-card-header>\n      <nb-card-body>\n          <div align=\"center\">\n              <mat-form-field class=\"filter-field\">\n                <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n              </mat-form-field>\n      \n              <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n              <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n          </div>\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd-MM-yyyy'}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"vehicleName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Vehicle Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.vehicleName}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"vehicleNumber\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Vehicle Number</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.vehicleNumber}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"amount\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Total</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.total}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"selectRow(row)\">Edit</button>\n                <button (click)=\"deleteExpense(row)\" mat-menu-item>Delete</button>\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n        \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        \n        </mat-table>\n          \n        <mat-paginator\n          [length]=\"length\"\n          [pageSize]=\"pageSize\"\n          [pageSizeOptions]=\"pageSizeOptions\">\n        </mat-paginator>        \n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-12\">\n    <a *ngIf=\"permission.addVehicleMaintenance\" (click)=\"selectRow(null)\" class=\"float\">\n      <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n    </a>      \n  </div>\n</div>\n\n\n  "

/***/ }),

/***/ "./src/app/pages/expenses/vehiclemaintenanceexpenses/vehiclemaintenanceexpenses.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/expenses/vehiclemaintenanceexpenses/vehiclemaintenanceexpenses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclemaintenanceexpensesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addvehiclemaintenanceexpenses_addvehiclemaintenanceexpenses_component__ = __webpack_require__("./src/app/pages/expenses/addvehiclemaintenanceexpenses/addvehiclemaintenanceexpenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expenses_service__ = __webpack_require__("./src/app/pages/expenses/expenses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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







var VehiclemaintenanceexpensesComponent = (function () {
    function VehiclemaintenanceexpensesComponent(dialog, auth, expensesService, snackBar) {
        this.dialog = dialog;
        this.auth = auth;
        this.expensesService = expensesService;
        this.snackBar = snackBar;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.user = {};
        this.permission = {};
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["O" /* MatTableDataSource */]();
        this.displayedColumns = ['date', 'vehicleName', 'vehicleNumber', 'amount', 'Options'];
    }
    VehiclemaintenanceexpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
            var _this = this;
            if (event.data == this.user.ownerId + 'vehiclemaintenanceexpenses')
                this.expensesService.getVehicleMaintenanceExpenses(this.user).subscribe(function (data) {
                    _this.tempArray = data;
                    _this.dataSource.data = _this.tempArray;
                    _this.length = data.length;
                });
        }.bind(this);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.auth.permissions.subscribe(function (data) {
                _this.permission = data[0];
                if (_this.permission.manageVehicleMaintenance === 0) {
                    _this.displayedColumns.pop();
                }
            });
            _this.expensesService.getVehicleMaintenanceExpenses(_this.user).subscribe(function (data) {
                console.log(data);
                _this.tempArray = data;
                _this.dataSource.data = _this.tempArray;
                _this.length = data.length;
            });
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    VehiclemaintenanceexpensesComponent.prototype.ngOnDestroy = function () {
        this.ws.close();
    };
    VehiclemaintenanceexpensesComponent.prototype.selectRow = function (row) {
        var _this = this;
        console.log(row);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__addvehiclemaintenanceexpenses_addvehiclemaintenanceexpenses_component__["a" /* AddvehiclemaintenanceexpensesComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
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
    VehiclemaintenanceexpensesComponent.prototype.deleteExpense = function (row) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { disableClose: true, autoFocus: false }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.expensesService.deleteVehicleMaintenanceExpensesData(row).subscribe(function (data) {
                    if (data.errno == undefined) {
                        var i = _this.tempArray.indexOf(row);
                        _this.tempArray.splice(i, 1);
                        _this.dataSource.data = _this.tempArray;
                        _this.snackBar.open("Expense Deleted", "X", { duration: 3000 });
                    }
                    else {
                        if (data.errno == 1451) {
                            window.alert("Cannot delete because you have corresponding Duties");
                        }
                        else {
                            window.alert("Error Cannot Delete Expense");
                        }
                    }
                });
            }
        });
    };
    VehiclemaintenanceexpensesComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    VehiclemaintenanceexpensesComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.dataSource.filter = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["K" /* MatSort */])
    ], VehiclemaintenanceexpensesComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatPaginator */])
    ], VehiclemaintenanceexpensesComponent.prototype, "paginator", void 0);
    VehiclemaintenanceexpensesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vehiclemaintenanceexpenses',
            template: __webpack_require__("./src/app/pages/expenses/vehiclemaintenanceexpenses/vehiclemaintenanceexpenses.component.html"),
            styles: [__webpack_require__("./src/app/pages/expenses/vehiclemaintenanceexpenses/vehiclemaintenanceexpenses.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__expenses_service__["a" /* ExpensesService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatSnackBar */]])
    ], VehiclemaintenanceexpensesComponent);
    return VehiclemaintenanceexpensesComponent;
}());



/***/ })

});
//# sourceMappingURL=expenses.module.chunk.js.map