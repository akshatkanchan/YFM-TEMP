webpackJsonp(["hotels.module"],{

/***/ "./src/app/pages/hotels/addhotels/addhotels.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"newHotel\">\n  <fieldset>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-12\">    \n        <nb-card>\n          <nb-card-header>New Hotel</nb-card-header>\n          <nb-card-body class=\"hide-overflow\">\n            <div class=\"container\">              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Hotel Name\n                    <input type=\"text\" matInput formControlName=\"hotelName\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Hotel Type\n                    <input type=\"text\" matInput formControlName=\"hotelType\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Star Rating\n                    <mat-select formControlName=\"hotelRating\">\n                      <mat-option value=\"-\">-</mat-option>\n                      <mat-option value=\"1 Star\">1 Star</mat-option>\n                      <mat-option value=\"2 Star\">2 Star</mat-option>\n                      <mat-option value=\"3 Star\">3 Star</mat-option>\n                      <mat-option value=\"4 Star\">4 Star</mat-option>\n                      <mat-option value=\"5 Star\">5 Star</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Email Address\n                    <input type=\"email\" matInput formControlName=\"emailAddress\">                  \n                  </mat-form-field>  \n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Phone Number\n                    <input type=\"text\" matInput formControlName=\"phoneNumber\">                  \n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    Address\n                    <textarea matInput formControlName=\"address\"></textarea>\n                  </mat-form-field>\n                </div>\n              </div>              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field class=\"bottom-align\">\n                    State\n                    <input type=\"text\" matInput [formControl]=\"custStateCtrl\" [matAutocomplete]=\"custState\">\n                    <mat-autocomplete #custState=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let option of custStateOptions | async\" [value]=\"option\" (onSelectionChange)=\"custStateSelect(option,$event)\">\n                        {{ option }}\n                      </mat-option>\n                    </mat-autocomplete>\n                    <!-- <mat-select formControlName=\"state\">\n                      <mat-option *ngFor=\" let element of states\" [value]=\"element\">\n                        {{element}}\n                      </mat-option>                    \n                    </mat-select> -->\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field class=\"bottom-align\">\n                    City\n                    <input matInput [formControl]=\"cityCtrl\"  [matAutocomplete]=\"auto1\">\n                    <mat-autocomplete #auto1=\"matAutocomplete\">\n                        <mat-option *ngFor=\"let option of cities | async\" [value]=\"option\" (onSelectionChange)=\"citySelect(option,$event)\">\n                            {{ option }}\n                        </mat-option>\n                    </mat-autocomplete> \n                    <!-- <mat-select formControlName=\"city\">\n                      <mat-option *ngFor=\" let element of cities\" [value]=\"element\">\n                        {{element}}\n                      </mat-option>                      \n                    </mat-select> -->\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    TDS %\n                    <input matInput formControlName=\"hotelTDS\" />\n                  </mat-form-field>\n                </div>\n              </div>              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    PAN\n                    <input matInput formControlName=\"hotelPAN\" />\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    GSTIN\n                    <input matInput formControlName=\"hotelGSTIN\" />\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-4 col-12\">\n                  <mat-form-field>\n                    GST Type\n                    <mat-select formControlName=\"GSTType\">\n                      <mat-option value=\"CGST+SGST\">CGST+SGST</mat-option>\n                      <mat-option value=\"IGST\">IGST</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>              \n              <div class=\"row ptb-10\">\n                <div class=\"col-lg-6 col-12\">\n                  <mat-form-field>\n                    Service tax No\n                    <input matInput formControlName=\"hotelServiceTax\" />\n                  </mat-form-field>\n                </div>\n                <div class=\"col-lg-6 col-12\">\n                  \n                </div>\n              </div>\n            </div>\n          </nb-card-body>\n        </nb-card>\n      </div>\n    </div>    \n    <div class=\"row\">\n      <div class=\"col-lg-12 col-12\">\n        <nb-card>\n          <nb-card-header>Timing</nb-card-header>\n          <nb-card-body class=\"hide-overflow\">            \n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Check-in time\n                  <input type=\"time\" matInput formControlName=\"checkIn\" />\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Check-out time\n                  <input type=\"time\" matInput formControlName=\"checkOut\" />\n                </mat-form-field>\n              </div>\n            </div>              \n          </nb-card-body>\n        </nb-card>\n      </div>\n    </div>                  \n    <div class=\"row\">\n      <div class=\"col-lg-12 col-12\">\n        <nb-card>\n          <nb-card-header>Terms & Conditions</nb-card-header>\n          <nb-card-body class=\"hide-overflow\">            \n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-12 col-12\">\n                <mat-form-field class=\"w-100\">\n                  Terms & Conditions\n                  <textarea matInput formControlName=\"termsAndConditions\" rows=\"12\"></textarea>\n                </mat-form-field>\n              </div>\n            </div>              \n          </nb-card-body>\n        </nb-card>\n      </div>\n    </div>                  \n    <div class=\"row ptb-10\">\n      <div class=\"col-lg-12 col-12\">\n        <button *ngIf=\"!editState\" (click)=\"saveHotel()\" mat-raised-button color=\"primary\">Save</button>\n        <button *ngIf=\"editState\" (click)=\"updateHotel()\" mat-raised-button color=\"primary\">Update</button>\n        <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n      </div>        \n    </div>\n  </fieldset>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/hotels/addhotels/addhotels.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-fab .mat-button-wrapper {\n  line-height: 32px !important; }\n\n.mat-fab.mat-primary, .mat-mini-fab.mat-primary, .mat-raised-button.mat-primary {\n  background-color: #0C9; }\n"

/***/ }),

/***/ "./src/app/pages/hotels/addhotels/addhotels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddhotelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__displayhotels_hotel_service__ = __webpack_require__("./src/app/pages/hotels/displayhotels/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
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






var AddhotelsComponent = (function () {
    function AddhotelsComponent(auth, hotelService, fb, dialog, snackBar, data) {
        this.auth = auth;
        this.hotelService = hotelService;
        this.fb = fb;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.data = data;
        this.custStateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.cityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
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
        this.param = {
            inserted: 'no',
            data: null
        };
        this.hotelData = {
            hotelName: '',
            hotelType: '',
            hotelRating: '',
            emailAddress: '',
            phoneNumber: '',
            address: '',
            state: '',
            city: '',
            hotelPAN: '',
            hotelGSTIN: '',
            GSTType: '',
            hotelServiceTax: '',
            hotelTDS: '',
            checkIn: '',
            checkOut: '',
            termsAndConditions: '',
            ownerID: ''
        };
        if (data.row != null) {
            console.log(data);
            this.editState = true;
            this.hotelData = data.row;
        }
        else {
            this.editState = false;
        }
    }
    AddhotelsComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    AddhotelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.newHotel = this.fb.group({
            hotelName: [''],
            hotelType: [''],
            hotelRating: [''],
            noOfRooms: [''],
            emailAddress: [''],
            phoneNumber: [''],
            address: [''],
            state: [''],
            city: [''],
            hotelPAN: [''],
            hotelGSTIN: [''],
            GSTType: [''],
            hotelServiceTax: [''],
            hotelTDS: [''],
            checkIn: [''],
            checkOut: [''],
            termsAndConditions: [''],
        });
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            console.log(_this.user);
        });
        this.newHotel.patchValue({
            'hotelName': this.hotelData.hotelName,
            'hotelType': this.hotelData.hotelType,
            'hotelRating': this.hotelData.hotelRating,
            'emailAddress': this.hotelData.emailAddress,
            'phoneNumber': this.hotelData.phoneNumber,
            'address': this.hotelData.address,
            'state': this.hotelData.state,
            'city': this.hotelData.city,
            'hotelPAN': this.hotelData.hotelPAN,
            'hotelGSTIN': this.hotelData.hotelGSTIN,
            'GSTType': this.hotelData.GSTType,
            'hotelServiceTax': this.hotelData.hotelServiceTax,
            'hotelTDS': this.hotelData.hotelTDS,
            'checkIn': this.hotelData.checkIn,
            'checkOut': this.hotelData.checkOut,
            'termsAndConditions': this.hotelData.termsAndConditions,
        });
        console.log(this.newHotel.invalid);
        this.custStateOptions = this.custStateCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterCustStates(val); }));
        this.cities = this.cityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (val) { return _this.filterFromCity(val); }));
    };
    AddhotelsComponent.prototype.saveHotel = function () {
        var _this = this;
        this.hotelData.hotelName = this.newHotel.get('hotelName').value;
        this.hotelData.hotelType = this.newHotel.get('hotelType').value;
        this.hotelData.hotelRating = this.newHotel.get('hotelRating').value;
        this.hotelData.emailAddress = this.newHotel.get('emailAddress').value;
        this.hotelData.phoneNumber = this.newHotel.get('phoneNumber').value;
        this.hotelData.address = this.newHotel.get('address').value;
        this.hotelData.state = this.newHotel.get('state').value;
        this.hotelData.city = this.newHotel.get('city').value;
        this.hotelData.hotelPAN = this.newHotel.get('hotelPAN').value;
        this.hotelData.hotelGSTIN = this.newHotel.get('hotelGSTIN').value;
        this.hotelData.GSTType = this.newHotel.get('GSTType').value;
        this.hotelData.hotelServiceTax = this.newHotel.get('hotelServiceTax').value;
        this.hotelData.hotelTDS = this.newHotel.get('hotelTDS').value;
        // this.hotelData.priceDetails = this.priceFormControl.value;
        this.hotelData.checkIn = this.newHotel.get('checkIn').value;
        this.hotelData.checkOut = this.newHotel.get('checkOut').value;
        this.hotelData.termsAndConditions = this.newHotel.get('termsAndConditions').value;
        this.hotelData.ownerID = this.user.ownerId;
        console.log(this.newHotel);
        this.hotelService.addHotels(this.hotelData).subscribe(function (data) {
            console.log(data);
            _this.param.inserted = 'yes';
            _this.hotelData.id = data.insertId;
            _this.param.data = _this.hotelData;
        }, function (err) { }, function () {
            _this.ws.send(_this.user.ownerId + "hotel");
            _this.snackBar.open("Hotel Added", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    AddhotelsComponent.prototype.updateHotel = function () {
        var _this = this;
        this.hotelData.hotelName = this.newHotel.get('hotelName').value;
        this.hotelData.hotelType = this.newHotel.get('hotelType').value;
        this.hotelData.hotelRating = this.newHotel.get('hotelRating').value;
        this.hotelData.emailAddress = this.newHotel.get('emailAddress').value;
        this.hotelData.phoneNumber = this.newHotel.get('phoneNumber').value;
        this.hotelData.address = this.newHotel.get('address').value;
        this.hotelData.state = this.newHotel.get('state').value;
        this.hotelData.city = this.newHotel.get('city').value;
        this.hotelData.hotelPAN = this.newHotel.get('hotelPAN').value;
        this.hotelData.hotelGSTIN = this.newHotel.get('hotelGSTIN').value;
        this.hotelData.GSTType = this.newHotel.get('GSTType').value;
        this.hotelData.hotelServiceTax = this.newHotel.get('hotelServiceTax').value;
        this.hotelData.hotelTDS = this.newHotel.get('hotelTDS').value;
        // this.hotelData.priceDetails = this.priceFormControl.value;
        this.hotelData.checkIn = this.newHotel.get('checkIn').value;
        this.hotelData.checkOut = this.newHotel.get('checkOut').value;
        this.hotelData.termsAndConditions = this.newHotel.get('termsAndConditions').value;
        this.hotelData.ownerID = this.user.ownerId;
        this.hotelService.updateHotel(this.hotelData).subscribe(function (data) { }, function (err) { }, function () {
            _this.ws.send(_this.user.ownerId + "hotel");
            _this.snackBar.open("Hotel Updated", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    AddhotelsComponent.prototype.filterCustStates = function (val) {
        return this.states.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddhotelsComponent.prototype.filterFromCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddhotelsComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    AddhotelsComponent.prototype.custStateSelect = function (option, event) {
        if (event.source.selected == true) {
            this.hotelData.state = option;
        }
    };
    AddhotelsComponent.prototype.citySelect = function (option, event) {
        if (event.source.selected == true) {
            this.hotelData.city = option;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], AddhotelsComponent.prototype, "unloadHandler", null);
    AddhotelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addhotels',
            template: __webpack_require__("./src/app/pages/hotels/addhotels/addhotels.component.html"),
            styles: [__webpack_require__("./src/app/pages/hotels/addhotels/addhotels.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__displayhotels_hotel_service__["a" /* HotelService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSnackBar */], Object])
    ], AddhotelsComponent);
    return AddhotelsComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotels/bookhotel/bookhotel.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"bookHotel\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-12\">\n      <nb-card style=\"height:97%\">\n        <nb-card-header>Booking Details</nb-card-header>\n        <nb-card-body>\n          <div class=\"container\">            \n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Billed To\n                  <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput [matAutocomplete]=\"custauto\">\n                  <mat-autocomplete #custauto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of customer |async\" [value]=\"option.name\" (onSelectionChange)=\"setCustomer(option,$event)\">\n                      {{ option.name }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Name (Booked By)\n                  <input aplaceholder=\"Booked By\"  name=\"cname\" [formControl]=\"bookByCtrl\" matInput [matAutocomplete]=\"bookByAuto\">\n                  <mat-autocomplete #bookByAuto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of bookBy |async\" [value]=\"option.name\" (onSelectionChange)=\"setBookBy(option,$event)\">\n                      {{ option.name }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>                  \n                  Phone No (Billed To)\n                  <input  matInput formControlName=\"billedToNo\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Email Id (Billed To)\n                  <input matInput formControlName=\"billedToEmail\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>                  \n                  Phone No (Booked By)\n                  <input  matInput formControlName=\"bookByNo\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>                  \n                  Email Id (Booked By)\n                  <input matInput formControlName=\"bookByEmail\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\" *ngIf=\"data.row != null\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  City\n                  <input matInput [formControl]=\"cityCtrl\"  [matAutocomplete]=\"autoCity\">\n                  <mat-autocomplete #autoCity=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of cities | async\" [value]=\"option\" (onSelectionChange)=\"setCity(option,$event)\">\n                      {{ option }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Hotel Name\n                  <input name=\"hotelName\" [formControl]=\"hotelCtrl\" matInput [matAutocomplete]=\"hotelauto\">\n                  <mat-autocomplete #hotelauto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of hotel |async\" [value]=\"option.hotelName\" (onSelectionChange)=\"setHotel(option,$event)\">\n                      {{ option.hotelName }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\" *ngIf=\"data.row != null\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Room\n                  <input matInput formControlName=\"room\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Occupancy\n                  <input matInput formControlName=\"occupancy\">\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n        </nb-card-body>\n      </nb-card>\n    </div>\n    <div class=\"col-lg-6 col-12\">\n      <nb-card>\n        <nb-card-header>Guest Details</nb-card-header>\n        <nb-card-body>\n          <div class=\"container\">\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Guest Name\n                  <input matInput formControlName=\"guestName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Conf. No.\n                  <input matInput formControlName=\"confNo\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Mobile No.\n                  <input matInput formControlName=\"guestMobile\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Email\n                  <input matInput formControlName=\"guestEmail\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Check In Date\n                  <input [matDatepicker]=\"checkInDate\" matInput formControlName=\"checkInDate\" (dateChange)=\"setCheckInDate($event)\">\n                  <mat-datepicker-toggle matSuffix [for]=\"checkInDate\"></mat-datepicker-toggle>\n                  <mat-datepicker #checkInDate></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Check Out Date\n                  <input [matDatepicker]=\"checkOutDate\" matInput formControlName=\"checkOutDate\" [min]=\"minDate\" (dateChange)=\"setCheckOutDate($event)\">\n                  <mat-datepicker-toggle matSuffix [for]=\"checkOutDate\"></mat-datepicker-toggle>\n                  <mat-datepicker #checkOutDate></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">\n                  <mat-form-field>\n                      Check-in time\n                      <input type=\"time\" matInput formControlName=\"checkInTime\"/>\n                    </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                  <mat-form-field>\n                      Check-out time\n                      <input type=\"time\" matInput formControlName=\"checkOutTime\"/>\n                    </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  Nights\n                  <input matInput formControlName=\"nights\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <mat-form-field>\n                  No. of People\n                  <input matInput formControlName=\"noOfPeople\">\n                </mat-form-field>\n              </div>\n            </div>            \n          </div>\n        </nb-card-body>\n      </nb-card>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"data.row != null\">\n    <div class=\"col-lg-12 col-12\">\n      <nb-card>      \n        <nb-card-body>\n          <div class=\"container\">\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Inclusion\n                  <input matInput formControlName=\"inclusion\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Rate\n                  <input matInput formControlName=\"rate\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Amount\n                  <input matInput formControlName=\"amount\" [(ngModel)]=\"amount\" (change)=\"setAmount(amount, $event)\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Payment Mode\n                  <input matInput formControlName=\"paymentMode\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-4 col-12\"></div>\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Taxes  \n                  <input matInput formControlName=\"taxes\" [(ngModel)]=\"taxes\" (change)=\"setTaxes(taxes, $event)\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Hotel Bill No.\n                  <input matInput formControlName=\"hotelBillNo\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Hotel Amount\n                  <input matInput formControlName=\"hotelAmount\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Total\n                  <input matInput formControlName=\"total\" readonly>\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n        </nb-card-body>\n      </nb-card>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"data.row != null\">\n    <div class=\"col-lg-12 col-12\">\n      <nb-card>\n        <nb-card-header>Internal</nb-card-header>\n        <nb-card-body>\n          <div class=\"container\">\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Inclusion\n                  <input matInput formControlName=\"intInclusion\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Hotel Rate\n                  <input matInput formControlName=\"hotelRate\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Amount\n                  <input matInput formControlName=\"intAmount\" [(ngModel)]=\"intAmount\" (change)=\"setIntAmount(intAmount, $event)\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Agents\n                  <input matInput formControlName=\"agents\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Commission\n                  <input matInput formControlName=\"commission\" [(ngModel)]=\"commission\" (change)=\"setCommission(commission, $event)\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Taxes\n                  <input matInput formControlName=\"intTaxes\" [(ngModel)]=\"intTaxes\" (change)=\"setIntTaxes(intTaxes, $event)\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-4 col-12\"></div>\n              <div class=\"col-lg-4 col-12\"></div>\n              <div class=\"col-lg-4 col-12\">\n                <mat-form-field>\n                  Total\n                  <input matInput formControlName=\"intTotal\" readonly>\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n        </nb-card-body>\n      </nb-card>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"data.row != null\">\n    <div class=\"col-lg-12 col-12\">\n      <nb-card>\n        <nb-card-header>Additional Charges</nb-card-header>\n        <nb-card-body>                    \n          <div class=\"container\" formArrayName=\"additionalCharges\">\n            <div class=\"row ptb-10\" *ngFor=\"let row of additionalChargesForm.controls; let i=index\" [formGroupName]=\"i\">\n              <div class=\"col-lg-5 col-12\">\n                <mat-form-field class=\"w-100\">\n                  Description                  \n                  <textarea matInput formControlName=\"description\"></textarea>                  \n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-2 col-12\">\n                <mat-form-field class=\"w-100\">\n                  Quantity\n                  <br><br>\n                  <input matInput formControlName=\"quantity\" style=\"padding-bottom: 13px\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-2 col-12\">\n                <mat-form-field class=\"w-100\">\n                  Rate\n                  <br><br>\n                  <input matInput formControlName=\"additionalChargesRate\" style=\"padding-bottom: 13px\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-2 col-12\">\n                <mat-form-field class=\"w-100\">\n                  Charges\n                  <br><br>\n                  <input matInput formControlName=\"charges\" style=\"padding-bottom: 13px\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-lg-1 col-12\">\n                <button mat-icon-button color=\"primary\" (click)=\"deleteRow(i, row)\">\n                  <mat-icon>clear</mat-icon>\n                </button>\n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-12 col-12\">\n                <button mat-raised-button color=\"primary\" (click)=\"addRow()\" style=\"float:right; margin: 5px;\">Add</button>\n              </div>                \n            </div>\n          </div>\n        </nb-card-body>\n      </nb-card>\n    </div>\n  </div>\n  <div class=\"row ptb-10\">\n    <div class=\"col-lg-12 col-12\">      \n      <button *ngIf=\"!editState\" (click)=\"saveHotel()\" mat-raised-button color=\"primary\">Save</button>\n      <button *ngIf=\"editState\" (click)=\"updateHotel()\" mat-raised-button color=\"primary\">Update</button>\n      <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">Close</button>      \n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/hotels/bookhotel/bookhotel.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/hotels/bookhotel/bookhotel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookhotelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operations_bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__displayhotels_hotel_service__ = __webpack_require__("./src/app/pages/hotels/displayhotels/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__masters_new_employees_employee_service__ = __webpack_require__("./src/app/pages/masters/new-employees/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__activitylog_service__ = __webpack_require__("./src/app/activitylog.service.ts");
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











var BookhotelComponent = (function () {
    function BookhotelComponent(fb, auth, customerService, bookingService, hotelService, dialog, snackBar, data, employeeService, activityLogs) {
        var _this = this;
        this.fb = fb;
        this.auth = auth;
        this.customerService = customerService;
        this.bookingService = bookingService;
        this.hotelService = hotelService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.data = data;
        this.employeeService = employeeService;
        this.activityLogs = activityLogs;
        this.editState = false;
        this.customerName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.customerCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.hotelCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.bookByCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.deletedCharges = [];
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
        this.amount = 0;
        this.taxes = 0;
        this.total = 0;
        this.intAmount = 0;
        this.commission = 0;
        this.intTaxes = 0;
        this.intTotal = 0;
        this.bookHotelData = {
            customerId: '',
            customerName: '',
            guestName: '',
            checkInDate: '',
            checkOutDate: '',
            bookByName: '',
            bookByNo: '',
            bookByEmail: '',
            ownerId: '',
            hotelName: '',
            hotelId: null,
            hotelCity: '',
            billedToNo: '',
            billedToEmail: '',
            room: '',
            occupancy: '',
            guestMobile: '',
            guestEmail: '',
            checkInTime: '',
            checkOutTime: '',
            nights: 0,
            noOfPeople: 0,
            confNo: '',
            inclusion: 0,
            rate: 0,
            amount: 0,
            paymentMode: '',
            taxes: 0,
            hotelBillNo: '',
            hotelAmount: 0,
            total: 0,
            intInclusion: 0,
            hotelRate: 0,
            intAmount: 0,
            agents: '',
            commission: 0,
            intTaxes: 0,
            intTotal: 0,
            status: '',
        };
        console.log(data);
        // if(data.row1!= null){
        //   this.bookHotelData.hotelName=data.row1.hotelName;
        //   this.bookHotelData.hotelCity=data.row1.city;
        //   this.bookHotelData.hotelId=data.row1.id
        // }
        if (data.row != null) {
            this.editState = true;
            this.bookHotelData = data.row;
            this.customerCtrl.setValue(data.row.customerName);
            this.bookByCtrl.setValue(data.row.bookByName);
            this.hotelCtrl.setValue(data.row.hotelName);
            this.cityCtrl.setValue(data.row.hotelCity);
            this.hotelService.getHotelBookingsAdditionalCharges(this.bookHotelData).subscribe(function (data) {
                data.forEach(function (element) {
                    var additionalCharge = _this.fb.group({
                        id: element.id,
                        hotelBookingId: element.hotelBookingId,
                        description: element.description,
                        quantity: element.quantity,
                        additionalChargesRate: element.additionalChargesRate,
                        charges: element.charges,
                    });
                    _this.additionalChargesForm.push(additionalCharge);
                });
                if (_this.additionalChargesForm.value.length == 0) {
                    _this.addRow();
                }
            });
        }
        this.cities = this.cityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (val) { return _this.filterCity(val); }));
    }
    BookhotelComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    BookhotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
        });
        this.bookHotel = this.fb.group({
            customerName: [''],
            bookByName: [''],
            billedToNo: [''],
            billedToEmail: [''],
            bookByNo: [''],
            bookByEmail: [''],
            room: [''],
            occupancy: [''],
            guestName: [''],
            guestMobile: [''],
            guestEmail: [''],
            checkInDate: [''],
            checkOutDate: [''],
            checkInTime: [''],
            checkOutTime: [''],
            nights: [''],
            noOfPeople: [''],
            confNo: [''],
            inclusion: [''],
            rate: [''],
            amount: [''],
            paymentMode: [''],
            taxes: [''],
            hotelBillNo: [''],
            hotelAmount: [''],
            total: ['', { disabled: true }],
            intInclusion: [''],
            hotelRate: [''],
            intAmount: [''],
            agents: [''],
            commission: [''],
            intTaxes: [''],
            intTotal: ['', { disabled: true }],
            additionalCharges: this.fb.array([]),
        });
        this.bookHotel.patchValue({
            'customerName': this.bookHotelData.customerName,
            'bookByName': this.bookHotelData.bookByName,
            'billedToNo': this.bookHotelData.billedToNo,
            'billedToEmail': this.bookHotelData.billedToEmail,
            'bookByNo': this.bookHotelData.bookByNo,
            'bookByEmail': this.bookHotelData.bookByEmail,
            'room': this.bookHotelData.room,
            'occupancy': this.bookHotelData.occupancy,
            'guestName': this.bookHotelData.guestName,
            'guestMobile': this.bookHotelData.guestMobile,
            'guestEmail': this.bookHotelData.guestEmail,
            'checkInDate': this.bookHotelData.checkInDate,
            'checkOutDate': this.bookHotelData.checkOutDate,
            'checkInTime': this.bookHotelData.checkInTime,
            'checkOutTime': this.bookHotelData.checkOutTime,
            'nights': this.bookHotelData.nights,
            'noOfPeople': this.bookHotelData.noOfPeople,
            'confNo': this.bookHotelData.confNo,
            'inclusion': this.bookHotelData.inclusion,
            'rate': this.bookHotelData.rate,
            'amount': this.bookHotelData.amount,
            'paymentMode': this.bookHotelData.paymentMode,
            'taxes': this.bookHotelData.taxes,
            'hotelBillNo': this.bookHotelData.hotelBillNo,
            'hotelAmount': this.bookHotelData.hotelAmount,
            'total': this.bookHotelData.total,
            'intInclusion': this.bookHotelData.intInclusion,
            'hotelRate': this.bookHotelData.hotelRate,
            'intAmount': this.bookHotelData.intAmount,
            'agents': this.bookHotelData.agents,
            'commission': this.bookHotelData.commission,
            'intTaxes': this.bookHotelData.intTaxes,
            'intTotal': this.bookHotelData.intTotal,
        });
        if (this.user.type == 'employee') {
            var body = {
                userId: this.user.id
            };
            this.employeeService.getEmployeeForCustomer(body).subscribe(function (data) {
                _this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(function (data) {
                    if (data.length != 0) {
                        _this.customers = data;
                        _this.customer = _this.customerCtrl.valueChanges
                            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
                    }
                    else {
                        _this.getCustomer();
                    }
                });
            });
        }
        else {
            this.getCustomer();
        }
        this.hotelService.getHotels(this.user).subscribe(function (data) {
            _this.hotels = data;
            _this.hotel = _this.hotelCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (val) { return _this.filterHotel(val); }));
        });
        if (this.data.row == null) {
            console.log(this.additionalChargesForm);
            this.addRow();
        }
    };
    BookhotelComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers(this.user).subscribe(function (data) {
            _this.customers = data;
            _this.customer = _this.customerCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
        });
    };
    BookhotelComponent.prototype.saveHotel = function () {
        var _this = this;
        this.bookHotelData.customerName = this.customerCtrl.value;
        this.bookHotelData.guestName = this.bookHotel.get('guestName').value;
        this.bookHotelData.checkInDate = this.bookHotel.get('checkInDate').value;
        this.bookHotelData.checkOutDate = this.bookHotel.get('checkOutDate').value;
        this.bookHotelData.bookByName = this.bookByCtrl.value;
        this.bookHotelData.bookByNo = this.bookHotel.get('bookByNo').value;
        this.bookHotelData.bookByEmail = this.bookHotel.get('bookByEmail').value;
        this.bookHotelData.ownerId = this.user.ownerId;
        this.bookHotelData.room = this.bookHotel.get('room').value;
        this.bookHotelData.occupancy = this.bookHotel.get('occupancy').value;
        this.bookHotelData.guestMobile = this.bookHotel.get('guestMobile').value;
        this.bookHotelData.guestEmail = this.bookHotel.get('guestEmail').value;
        this.bookHotelData.checkInTime = this.bookHotel.get('checkInTime').value;
        this.bookHotelData.checkOutTime = this.bookHotel.get('checkOutTime').value;
        // this.bookHotelData.nights = this.bookHotel.get('nights').value;
        this.bookHotelData.noOfPeople = this.bookHotel.get('noOfPeople').value;
        this.bookHotelData.confNo = this.bookHotel.get('confNo').value;
        this.bookHotelData.inclusion = this.bookHotel.get('inclusion').value;
        this.bookHotelData.rate = this.bookHotel.get('rate').value;
        this.bookHotelData.amount = this.bookHotel.get('amount').value;
        this.bookHotelData.paymentMode = this.bookHotel.get('paymentMode').value;
        this.bookHotelData.taxes = this.bookHotel.get('taxes').value;
        this.bookHotelData.hotelBillNo = this.bookHotel.get('hotelBillNo').value;
        this.bookHotelData.hotelAmount = this.bookHotel.get('hotelAmount').value;
        this.bookHotelData.total = this.bookHotel.get('total').value;
        this.bookHotelData.intInclusion = this.bookHotel.get('intInclusion').value;
        this.bookHotelData.hotelRate = this.bookHotel.get('hotelRate').value;
        this.bookHotelData.intAmount = this.bookHotel.get('intAmount').value;
        this.bookHotelData.agents = this.bookHotel.get('agents').value;
        this.bookHotelData.commission = this.bookHotel.get('commission').value;
        this.bookHotelData.intTaxes = this.bookHotel.get('intTaxes').value;
        this.bookHotelData.intTotal = this.bookHotel.get('intTotal').value;
        if (this.bookHotelData.hotelId == null) {
            this.bookHotelData.status = 'Unconfirmed';
        }
        else {
            this.bookHotelData.status = 'Booked';
        }
        this.hotelService.addBooking(this.bookHotelData).subscribe(function (data) {
            console.log(data);
            _this.bookHotelData.id = data.insertId;
            _this.additionalChargesForm.value.forEach(function (element) {
                if (element.description != '' && element.quantity != '' && element.additionalChargesRate != '' && element.charges != '') {
                    element.hotelBookingId = data.insertId;
                    _this.hotelService.addBookingAdditionalCharges(element).subscribe(function (data) {
                        console.log(data);
                    });
                }
            });
            _this.activityLogs.addHotelLogs({
                hotelBookingId: data.insertId,
                ownerId: _this.user.ownerId,
                message: "Booking created on " + __WEBPACK_IMPORTED_MODULE_8_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + _this.user.name
            }).subscribe();
        }, function (err) { }, function () {
            _this.ws.send(_this.user.ownerId + "hotelbooking");
            _this.snackBar.open("Hotel Booking Added", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    BookhotelComponent.prototype.updateHotel = function () {
        var _this = this;
        this.bookHotelData.customerName = this.customerCtrl.value;
        this.bookHotelData.guestName = this.bookHotel.get('guestName').value;
        this.bookHotelData.checkInDate = this.bookHotel.get('checkInDate').value;
        this.bookHotelData.checkOutDate = this.bookHotel.get('checkOutDate').value;
        this.bookHotelData.bookByName = this.bookByCtrl.value;
        this.bookHotelData.bookByNo = this.bookHotel.get('bookByNo').value;
        this.bookHotelData.bookByEmail = this.bookHotel.get('bookByEmail').value;
        this.bookHotelData.ownerId = this.user.ownerId;
        this.bookHotelData.room = this.bookHotel.get('room').value;
        this.bookHotelData.occupancy = this.bookHotel.get('occupancy').value;
        this.bookHotelData.guestMobile = this.bookHotel.get('guestMobile').value;
        this.bookHotelData.guestEmail = this.bookHotel.get('guestEmail').value;
        this.bookHotelData.checkInTime = this.bookHotel.get('checkInTime').value;
        this.bookHotelData.checkOutTime = this.bookHotel.get('checkOutTime').value;
        // this.bookHotelData.nights = this.bookHotel.get('nights').value;
        this.bookHotelData.noOfPeople = this.bookHotel.get('noOfPeople').value;
        this.bookHotelData.confNo = this.bookHotel.get('confNo').value;
        this.bookHotelData.inclusion = this.bookHotel.get('inclusion').value;
        this.bookHotelData.rate = this.bookHotel.get('rate').value;
        this.bookHotelData.amount = this.bookHotel.get('amount').value;
        this.bookHotelData.paymentMode = this.bookHotel.get('paymentMode').value;
        this.bookHotelData.taxes = this.bookHotel.get('taxes').value;
        this.bookHotelData.hotelBillNo = this.bookHotel.get('hotelBillNo').value;
        this.bookHotelData.hotelAmount = this.bookHotel.get('hotelAmount').value;
        this.bookHotelData.total = this.bookHotel.get('total').value;
        this.bookHotelData.intInclusion = this.bookHotel.get('intInclusion').value;
        this.bookHotelData.hotelRate = this.bookHotel.get('hotelRate').value;
        this.bookHotelData.intAmount = this.bookHotel.get('intAmount').value;
        this.bookHotelData.agents = this.bookHotel.get('agents').value;
        this.bookHotelData.commission = this.bookHotel.get('commission').value;
        this.bookHotelData.intTaxes = this.bookHotel.get('intTaxes').value;
        this.bookHotelData.intTotal = this.bookHotel.get('intTotal').value;
        if (this.bookHotelData.hotelId == null) {
            this.bookHotelData.status = 'Unconfirmed';
        }
        else {
            this.bookHotelData.status = 'Booked';
        }
        this.hotelService.updateHotelBooking(this.bookHotelData).subscribe(function (data) {
            _this.additionalChargesForm.value.forEach(function (element) {
                console.log(element);
                if (element.id) {
                    _this.hotelService.updateHotelBookingAdditionalCharges(element).subscribe();
                }
                else {
                    element.hotelBookingId = _this.bookHotelData.id;
                    _this.hotelService.addBookingAdditionalCharges(element).subscribe(function (data) {
                        console.log(data);
                    });
                }
            });
            _this.deletedCharges.forEach(function (element) {
                _this.hotelService.deleteHotelBookingAdditionalCharges(element).subscribe();
            });
        }, function (err) { }, function () {
            _this.ws.send(_this.user.ownerId + "hotelbooking");
            _this.snackBar.open("Hotel Booking Updated", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
    };
    BookhotelComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    BookhotelComponent.prototype.setCustomer = function (temp, event) {
        var _this = this;
        if (event.source.selected == true) {
            this.bookHotelData.customerId = temp.id;
            this.bookHotelData.customerName = temp.name;
            this.bookHotelData.billedToNo = temp.phone;
            this.bookHotelData.billedToEmail = temp.email;
            this.bookHotel.patchValue({
                'billedToNo': this.bookHotelData.billedToNo,
                'billedToEmail': this.bookHotelData.billedToEmail,
            });
        }
        var tempCust = {
            ownerId: this.user.ownerId,
            customerId: temp.id
        };
        this.bookingService.getRecurringBookedBy(tempCust).subscribe(function (data) {
            _this.bookByArr = data;
            _this.bookBy = _this.bookByCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (val) { return _this.filterBookBy(val); }));
        });
    };
    BookhotelComponent.prototype.setBookBy = function (option, event) {
        if (event.source.selected == true) {
            this.bookHotelData.bookByName = option.name;
            this.bookHotelData.bookByNo = option.phoneNo;
            this.bookHotelData.bookByEmail = option.emailId;
            this.bookHotel.patchValue({
                'bookByNo': this.bookHotelData.bookByNo,
                'bookByEmail': this.bookHotelData.bookByEmail
            });
        }
    };
    BookhotelComponent.prototype.setCheckInDate = function (event) {
        console.log(event.value._d.getTime());
        this.minDate = event.value._d;
        this.checkInDate = event.value._d.getTime();
    };
    BookhotelComponent.prototype.setCheckOutDate = function (event) {
        console.log(__WEBPACK_IMPORTED_MODULE_8_moment__(event.value).format("YYYY-MM-DD"));
        this.checkOutDate = event.value._d.getTime();
        console.log(Math.round(Math.abs((this.checkOutDate - this.checkInDate) / (1000 * 60 * 60 * 24))));
        // console.log(this.checkOutDate - this.checkInDate);
        this.nights = Math.round(Math.abs((this.checkOutDate - this.checkInDate) / (1000 * 60 * 60 * 24)));
        this.bookHotel.patchValue({
            'nights': this.nights
        });
        this.bookHotelData.nights = this.nights;
    };
    BookhotelComponent.prototype.setAmount = function (temp, event) {
        this.amount = temp;
        this.setTotal(this.amount, this.taxes);
    };
    BookhotelComponent.prototype.setTaxes = function (temp, event) {
        this.taxes = temp;
        this.setTotal(this.amount, this.taxes);
    };
    BookhotelComponent.prototype.setTotal = function (temp1, temp2) {
        this.total = 0;
        this.total = Number(temp1) + Number(temp2);
        this.bookHotel.patchValue({
            'total': this.total
        });
    };
    BookhotelComponent.prototype.setIntAmount = function (temp, event) {
        this.intAmount = temp;
        this.setIntTotal(this.intAmount, this.commission, this.intTaxes);
    };
    BookhotelComponent.prototype.setCommission = function (temp, event) {
        this.commission = temp;
        this.setIntTotal(this.intAmount, this.commission, this.intTaxes);
    };
    BookhotelComponent.prototype.setIntTaxes = function (temp, event) {
        this.intTaxes = temp;
        this.setIntTotal(this.intAmount, this.commission, this.intTaxes);
    };
    BookhotelComponent.prototype.setIntTotal = function (temp1, temp2, temp3) {
        this.intTotal = 0;
        this.intTotal = Number(temp1) + Number(temp2) + Number(temp3);
        this.bookHotel.patchValue({
            'intTotal': this.intTotal
        });
    };
    BookhotelComponent.prototype.setCity = function (temp, event) {
        var _this = this;
        if (event.source.selected == true) {
            this.hotelService.getHotelCity({ city: temp, ownerId: this.user.ownerId }).subscribe(function (data) {
                _this.hotels = data;
                _this.hotel = _this.hotelCtrl.valueChanges
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (val) { return _this.filterHotel(val); }));
            });
        }
    };
    BookhotelComponent.prototype.setHotel = function (temp, event) {
        if (event.source.selected == true) {
            this.bookHotelData.hotelId = temp.id;
            this.bookHotelData.hotelName = temp.hotelName;
            this.bookHotelData.hotelCity = temp.city;
        }
    };
    BookhotelComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookhotelComponent.prototype.filterBookBy = function (val) {
        return this.bookByArr.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookhotelComponent.prototype.filterCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    BookhotelComponent.prototype.filterHotel = function (val) {
        return this.hotels.filter(function (option) {
            return option.hotelName.toLowerCase().includes(val.toLowerCase());
        });
    };
    Object.defineProperty(BookhotelComponent.prototype, "additionalChargesForm", {
        get: function () {
            return this.bookHotel.get('additionalCharges');
        },
        enumerable: true,
        configurable: true
    });
    BookhotelComponent.prototype.addRow = function () {
        var additionalCharge = this.fb.group({
            hotelBookingId: [''],
            description: [''],
            quantity: [''],
            additionalChargesRate: [''],
            charges: [''],
        });
        this.additionalChargesForm.push(additionalCharge);
    };
    BookhotelComponent.prototype.deleteRow = function (i, row) {
        this.additionalChargesForm.removeAt(i);
        console.log(row);
        if (row.value.id) {
            this.deletedCharges.push(row.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BookhotelComponent.prototype, "unloadHandler", null);
    BookhotelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bookhotel',
            template: __webpack_require__("./src/app/pages/hotels/bookhotel/bookhotel.component.html"),
            styles: [__webpack_require__("./src/app/pages/hotels/bookhotel/bookhotel.component.scss")]
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_5__operations_bookings_service__["a" /* BookingsService */],
            __WEBPACK_IMPORTED_MODULE_6__displayhotels_hotel_service__["a" /* HotelService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["I" /* MatSnackBar */], Object, __WEBPACK_IMPORTED_MODULE_9__masters_new_employees_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_10__activitylog_service__["a" /* ActivitylogService */]])
    ], BookhotelComponent);
    return BookhotelComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotels/bookroom/bookroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\" >\n    <nb-card>\n      <nb-card-header>Hotels</nb-card-header>\n      <nb-card-body>\n        <table>\n          <tr>\n            <td>City</td>\n            <td>\n              <mat-form-field>\n                <input matInput [formControl]=\"cityCtrl\"  [matAutocomplete]=\"auto1\">\n                <mat-autocomplete #auto1=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of cities | async\" [value]=\"option\" (onSelectionChange)=\"citySelect(option,$event)\">\n                        {{ option }}\n                    </mat-option>\n                </mat-autocomplete> \n                <!-- <mat-select name=\"city\">\n                  <mat-option *ngFor=\" let element of cities\" [value]=\"element\" (click)=\"setCity(element)\">\n                    {{element}}\n                  </mat-option>                      \n                </mat-select> -->\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <button mat-raised-button color=\"primary\" (click)=\"search()\">Search</button>\n            </td>\n          </tr>                    \n        </table>\n      </nb-card-body>\n    </nb-card>\n    <nb-card *ngIf=\"table\">\n      <nb-card-body>\n        <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"hotelName\" matSortDirection=\"asc\" matSortDisableClear>\n          \n          <ng-container matColumnDef=\"hotelName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.hotelName}} </mat-cell>\n          </ng-container>      \n          \n          <ng-container matColumnDef=\"hotelType\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Type </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.hotelType}} </mat-cell>\n          </ng-container>      \n          <ng-container matColumnDef=\"hotelRating\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Rating</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.hotelRating}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"phoneNumber\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Phone </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.phoneNumber}} </mat-cell>\n          </ng-container>                    \n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Options </mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\">                                          \n              <button mat-raised-button color=\"primary\" (click)=\"book(row)\">Book</button>                            \n            </mat-cell>\n          </ng-container>\n      \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n          \n        <mat-paginator [length]=\"length\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n          \n      </nb-card-body>\n    </nb-card>            \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/hotels/bookroom/bookroom.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/hotels/bookroom/bookroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__displayhotels_hotel_service__ = __webpack_require__("./src/app/pages/hotels/displayhotels/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookhotel_bookhotel_component__ = __webpack_require__("./src/app/pages/hotels/bookhotel/bookhotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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








var BookroomComponent = (function () {
    function BookroomComponent(auth, hotelService, dialog, router) {
        this.auth = auth;
        this.hotelService = hotelService;
        this.dialog = dialog;
        this.router = router;
        this.table = false;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.user = {};
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.displayedColumns = ['hotelName', 'hotelType', 'hotelRating', 'phoneNumber', 'Options'];
        this.cityCtrl = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormControl */]();
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
    }
    BookroomComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        event.returnValue = false;
    };
    BookroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
        });
        this.cities = this.cityCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (val) { return _this.filterFromCity(val); }));
    };
    BookroomComponent.prototype.citySelect = function (option, event) {
        if (event.source.selected == true) {
            this.selectedCity = option;
        }
    };
    // setCity(temp)
    // {
    //   this.city=temp
    //   console.log(this.city)
    // }
    BookroomComponent.prototype.search = function () {
        var _this = this;
        var t = {
            city: this.selectedCity,
            ownerId: this.user.ownerId
        };
        console.log(t);
        this.hotelService.getHotelCity(t).subscribe(function (data) {
            console.log(data);
            _this.tempArray = data;
            _this.dataSource.data = _this.tempArray;
            _this.table = true;
            console.log(_this.table);
        });
    };
    BookroomComponent.prototype.book = function (row1) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__bookhotel_bookhotel_component__["a" /* BookhotelComponent */], { data: { row1: row1 }, autoFocus: false, disableClose: true });
    };
    BookroomComponent.prototype.filterFromCity = function (val) {
        return this.city.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BookroomComponent.prototype, "unloadHandler", null);
    BookroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bookroom',
            template: __webpack_require__("./src/app/pages/hotels/bookroom/bookroom.component.html"),
            styles: [__webpack_require__("./src/app/pages/hotels/bookroom/bookroom.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__displayhotels_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], BookroomComponent);
    return BookroomComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotels/displayhotelbookings/displayhotelbookings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Hotel Bookings\n        <div style=\"display:inline; padding-left: 5%;\" *ngIf=\"screenWidth>=560\">\n          <button class=\"booked\" [disabled]=\"filterClicked=='Booked'\" mat-button (click)=\"filter('Booked');\">Booked</button>\n          <button class=\"unconfirmed\" [disabled]=\"filterClicked=='Unconfirmed'\" mat-button (click)=\"filter('Unconfirmed');\">Unconfirmed</button>          \n          <button class=\"cancelled\" [disabled]=\"filterClicked=='Cancelled'\" mat-button color=\"warn\" (click)=\"filter('Cancelled')\">Cancelled</button>\n          <button class=\"completed\" [disabled]=\"filterClicked=='Completed'\" mat-button (click)=\"filter('Completed')\">Completed</button>\n          <button class=\"billed\" [disabled]=\"filterClicked=='Invoiced'\" mat-button (click)=\"filter('Invoiced')\">Invoiced</button>\n          <button class=\"all\" [disabled]=\"filterClicked=='All'\" mat-button (click)=\"filter('All')\">All</button>\n        </div>\n        <div style=\"display:inline; padding-left: 5%;\" *ngIf=\"screenWidth<=560\">\n          <mat-form-field class=\"mobile-select\">\n              <mat-select [value]=\"status\" (selectionChange)=\"filter($event.value)\">\n                <mat-option value=\"Booked\">Booked</mat-option>                                \n                <mat-option value=\"Cancelled\">Cancelled</mat-option>\n                <mat-option value=\"Completed\">Completed</mat-option>\n                <mat-option value=\"Invoiced\">Invoiced</mat-option>\n                <mat-option value='All'>All</mat-option>\n              </mat-select>\n          </mat-form-field>\n        </div>\n        <button style=\"float: right;margin-top: -10px;\" mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>settings</mat-icon></button>\n        <mat-menu #menu=\"matMenu\" class=\"mat-menu-panel\">\n            <!-- <button mat-menu-item (click)=\"openImport()\">Import</button> -->\n          <button mat-menu-item *ngIf=\"permission.exportDuty\" (click)=\"openExport()\">Export</button>\n        </mat-menu>\n      </nb-card-header>\n      <nb-card-body>\n        <div align=\"center\">\n          <mat-form-field class=\"filter-field\">\n            <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n          </mat-form-field>\n      \n          <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n          <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n        </div>\n        <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"name\" matSortDirection=\"asc\">\n\n          <ng-container matColumnDef=\"billedTo\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Billed To</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.customerName}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"guestName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Guest Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.guestName}} </mat-cell>\n          </ng-container>\n                    \n          <ng-container matColumnDef=\"hotelName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Hotel Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.hotelName}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"checkOutDate\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Check Out Date</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.checkOutDate | date: 'dd-MM-yyyy'}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <mat-chip-list>\n                <mat-chip color=\"primary\" selected=\"true\">{{element.status}}</mat-chip>\n              </mat-chip-list> \n            </mat-cell>            \n          </ng-container>\n        \n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item *ngIf=\"element.status == 'Complete'\" (click)=\"createInvoice(row)\">Create Invoice</button>\n                <button mat-menu-item *ngIf=\"permission.manageHotelsBookings && element.status == 'Booked'\" (click)=\"selectRow(row)\">Edit</button>\n                <button mat-menu-item (click)=\"viewDetails(row)\">View Details</button>\n                <button mat-menu-item *ngIf=\"permission.manageHotelsBookings && element.status == 'Booked' && permission.smsEmailCallHotels\" (click)=\"sendConfirmation(row)\">Send Confirmation</button>\n                <button mat-menu-item *ngIf=\"permission.manageHotelsBookings && element.status == 'Unconfirmed'\" (click)=\"selectRow(row)\">Confirm Booking</button>\n                <button mat-menu-item *ngIf=\"permission.manageHotelsBookings && element.status == 'Booked'\" (click)=\"completeBooking(row)\">Complete Booking</button>\n                <button mat-menu-item *ngIf=\"permission.manageHotelsBookings && element.status == 'Booked'\" (click)=\"cancelBooking(row)\">Cancel</button>\n                <button mat-menu-item (click)=\"uploadFiles(row)\">Upload/View Files</button>\n                <button mat-menu-item *ngIf=\"element.status == 'Booked'\" (click)=\"advancePayment(row)\">Advance Payment</button>\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n        \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row [ngStyle]=\"{'background-color':rowColors(row.checkOutDate,row.status)}\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        \n        </mat-table>\n        <div *ngIf=\"isLoading\" style=\"display: flex; justify-content: center; align-items: center\">\n          <mat-progress-spinner color=\"warn\" mode=\"indeterminate\"></mat-progress-spinner>\n       </div>\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-12\">\n    <a *ngIf=\"permission.addHotelsBookings\" (click)=\"newBooking()\" class=\"float\">\n      <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n    </a>      \n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/hotels/displayhotelbookings/displayhotelbookings.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-chip {\n  -webkit-transform: scale(0.85, 0.85);\n          transform: scale(0.85, 0.85); }\n\n.booked.mat-button[disabled] {\n  color: white !important;\n  background-color: #3f51b5 !important; }\n\n.booked.mat-button {\n  color: #3f51b5 !important; }\n\n.completed.mat-button[disabled] {\n  color: white !important;\n  background-color: #02b975 !important; }\n\n.completed.mat-button {\n  color: #02b975 !important; }\n\n.unconfirmed.mat-button[disabled] {\n  color: black !important;\n  background-color: #ff7d00 !important; }\n\n.unconfirmed.mat-button {\n  color: #ff7d00 !important; }\n\n.cancelled.mat-button[disabled] {\n  color: white !important;\n  background-color: #f44436 !important; }\n\n.billed.mat-button[disabled] {\n  color: white !important;\n  background-color: #b90064c4 !important; }\n\n.billed.mat-button {\n  color: #b90064c4 !important; }\n\n.all.mat-button[disabled] {\n  color: black !important;\n  background-color: darkgrey !important; }\n\n.all.mat-button {\n  color: darkgrey !important; }\n"

/***/ }),

/***/ "./src/app/pages/hotels/displayhotelbookings/displayhotelbookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayhotelbookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__displayhotels_hotel_service__ = __webpack_require__("./src/app/pages/hotels/displayhotels/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_confirm_confirm_component__ = __webpack_require__("./src/app/pages/modals/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bookhotel_bookhotel_component__ = __webpack_require__("./src/app/pages/hotels/bookhotel/bookhotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__operations_bookings_service__ = __webpack_require__("./src/app/pages/operations/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hotel_advancepayment_hotel_advancepayment_component__ = __webpack_require__("./src/app/pages/hotels/hotel-advancepayment/hotel-advancepayment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewhotelbooking_viewhotelbooking_component__ = __webpack_require__("./src/app/pages/hotels/viewhotelbooking/viewhotelbooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sendhotelconfirmation_sendhotelconfirmation_component__ = __webpack_require__("./src/app/pages/hotels/sendhotelconfirmation/sendhotelconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__exporthotels_exporthotels_component__ = __webpack_require__("./src/app/pages/hotels/exporthotels/exporthotels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hotel_files_hotel_files_component__ = __webpack_require__("./src/app/pages/hotels/hotel-files/hotel-files.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DisplayhotelbookingsComponent = (function () {
    function DisplayhotelbookingsComponent(auth, hotelService, dialog, router, bookingsService, snackBar) {
        this.auth = auth;
        this.hotelService = hotelService;
        this.dialog = dialog;
        this.router = router;
        this.bookingsService = bookingsService;
        this.snackBar = snackBar;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.user = {};
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.displayedColumns = ['billedTo', 'guestName', 'hotelName', 'checkOutDate', 'status', 'Options'];
        this.permission = {};
        this.filterClicked = "Booked";
        this.isLoading = false;
    }
    DisplayhotelbookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
            var _this = this;
            if (event.data == this.user.ownerId + 'hotelbooking')
                var body = {
                    ownerId: this.user.ownerId,
                    status: 'Booked'
                };
            this.hotelService.getHotelBookings(body).subscribe(function (data) {
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
            });
            var body = {
                ownerId: _this.user.ownerId,
                status: 'Booked'
            };
            _this.hotelService.getHotelBookings(body).subscribe(function (data) {
                console.log(data);
                _this.tempArray = data;
                _this.dataSource.data = _this.tempArray;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        });
        this.today = __WEBPACK_IMPORTED_MODULE_10_moment__().format('YYYY-MM-DD');
    };
    DisplayhotelbookingsComponent.prototype.ngOnDestroy = function () {
        this.ws.close();
    };
    DisplayhotelbookingsComponent.prototype.openExport = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__exporthotels_exporthotels_component__["a" /* ExporthotelsComponent */], { autoFocus: false, disableClose: true });
    };
    DisplayhotelbookingsComponent.prototype.newBooking = function () {
        // this.router.navigateByUrl('/pages/hotels/bookroom')
        this.selectRow(null);
    };
    DisplayhotelbookingsComponent.prototype.selectRow = function (row) {
        var _this = this;
        console.log(row);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__bookhotel_bookhotel_component__["a" /* BookhotelComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
            if (data == undefined) {
                console.log('no');
            }
            else {
                console.log('yes');
                if (data.inserted == 'yes') {
                    _this.tempArray.push(data.data);
                    _this.dataSource.data = _this.tempArray;
                    _this.length = data.length;
                    console.log(data.data);
                }
            }
        });
    };
    DisplayhotelbookingsComponent.prototype.viewDetails = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__viewhotelbooking_viewhotelbooking_component__["a" /* ViewhotelbookingComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    DisplayhotelbookingsComponent.prototype.completeBooking = function (row) {
        var _this = this;
        row.status = 'Completed';
        console.log(row);
        this.hotelService.updateHotelBooking(row).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Booking Complete", "X", { duration: 3000 });
        });
    };
    DisplayhotelbookingsComponent.prototype.cancelBooking = function (row) {
        var _this = this;
        row.status = 'Cancelled';
        console.log(row);
        this.hotelService.updateHotelBooking(row).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Booking Cancelled", "X", { duration: 3000 });
        });
    };
    DisplayhotelbookingsComponent.prototype.deleteHotelBooking = function (row) {
        var _this = this;
        console.log("delete called");
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.hotelService.deleteHotelBooking(row).subscribe(function (data) {
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
    DisplayhotelbookingsComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    DisplayhotelbookingsComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.dataSource.filter = "";
    };
    DisplayhotelbookingsComponent.prototype.createInvoice = function (row) {
        this.bookingData = row;
        this.bookingsService.setBookingId(this.bookingData);
        this.router.navigate(['/pages/masters/createhotelinvoice']);
    };
    DisplayhotelbookingsComponent.prototype.advancePayment = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__hotel_advancepayment_hotel_advancepayment_component__["a" /* HotelAdvancepaymentComponent */], { autoFocus: false, disableClose: true, data: row });
    };
    DisplayhotelbookingsComponent.prototype.filter = function (temp) {
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
        this.hotelService.getHotelBookings(body).subscribe(function (data) {
            _this.tempArray = data;
            _this.dataSource.data = _this.tempArray;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.isLoading = false;
        });
    };
    DisplayhotelbookingsComponent.prototype.rowColors = function (currDate, status) {
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
    DisplayhotelbookingsComponent.prototype.sendConfirmation = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__sendhotelconfirmation_sendhotelconfirmation_component__["a" /* SendhotelconfirmationComponent */], { autoFocus: false, disableClose: true, data: { row: row } });
    };
    DisplayhotelbookingsComponent.prototype.uploadFiles = function (row) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_13__hotel_files_hotel_files_component__["a" /* HotelFilesComponent */], { autoFocus: false, data: row });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], DisplayhotelbookingsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], DisplayhotelbookingsComponent.prototype, "paginator", void 0);
    DisplayhotelbookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'displayhotelbookings',
            template: __webpack_require__("./src/app/pages/hotels/displayhotelbookings/displayhotelbookings.component.html"),
            styles: [__webpack_require__("./src/app/pages/hotels/displayhotelbookings/displayhotelbookings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__displayhotels_hotel_service__["a" /* HotelService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__operations_bookings_service__["a" /* BookingsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBar */]])
    ], DisplayhotelbookingsComponent);
    return DisplayhotelbookingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotels/displayhotels/displayhotels.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Hotels\n      </nb-card-header>\n      <nb-card-body>\n        <div align=\"center\">\n          <mat-form-field class=\"filter-field\">\n            <input matInput   placeholder=\"Filter\"   [(ngModel)]=\"searchTerm\" (keyup)=\"search($event.target.value)\">\n          </mat-form-field>\n      \n          <button mat-icon-button><mat-icon class=\"filter-icon\">search</mat-icon></button>\n          <button mat-icon-button (click)=\"clear()\"><mat-icon class=\"filter-icon\">highlight_off</mat-icon></button>\n        </div>\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.hotelName}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"phone\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Rating</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.hotelRating}} </mat-cell>\n          </ng-container>\n                    \n          <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>City</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.city}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"state\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Phone Number</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.phoneNumber}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"Options\">\n            <mat-header-cell *matHeaderCellDef> Options</mat-header-cell>\n            <mat-cell *matCellDef=\"let element ;let row\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"selectRow(row)\">Edit</button>\n                <button mat-menu-item (click)=\"deleteHotel(row)\">Delete</button>                \n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n        \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        \n        </mat-table>\n          \n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-12\">\n    <a *ngIf=\"permission.addHotels\" (click)=\"selectRow(null)\" class=\"float\">\n      <i style=\"color: ghostwhite\" class=\"fa fa-plus my-float\"></i>\n    </a>      \n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/hotels/displayhotels/displayhotels.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/hotels/displayhotels/displayhotels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayhotelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotel_service__ = __webpack_require__("./src/app/pages/hotels/displayhotels/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addhotels_addhotels_component__ = __webpack_require__("./src/app/pages/hotels/addhotels/addhotels.component.ts");
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







var DisplayhotelsComponent = (function () {
    function DisplayhotelsComponent(auth, hotelService, dialog, router) {
        this.auth = auth;
        this.hotelService = hotelService;
        this.dialog = dialog;
        this.router = router;
        this.pageSize = 10; // set default to 10
        this.pageSizeOptions = [10, 15, 25, 40];
        this.user = {};
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]();
        this.displayedColumns = ['name', 'phone', 'email', 'state', 'Options'];
        this.permission = {};
    }
    DisplayhotelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var HOST = location.origin.replace(/^http/, 'ws');
        this.ws = new WebSocket(HOST);
        this.ws.onmessage = function (event) {
            var _this = this;
            if (event.data == this.user.ownerId + 'hotel')
                this.hotelService.getHotels(this.user).subscribe(function (data) {
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
                if (_this.permission.manageHotels === 0) {
                    _this.displayedColumns.pop();
                }
            });
            _this.hotelService.getHotels(_this.user).subscribe(function (data) {
                console.log(data);
                _this.tempArray = data;
                _this.dataSource.data = _this.tempArray;
                _this.length = data.length;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        });
    };
    DisplayhotelsComponent.prototype.selectRow = function (row) {
        var _this = this;
        console.log(row);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__addhotels_addhotels_component__["a" /* AddhotelsComponent */], { autoFocus: false, disableClose: true, data: { row: row } }).afterClosed().subscribe(function (data) {
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
    DisplayhotelsComponent.prototype.deleteHotel = function (row) {
        var _this = this;
        console.log("delete called");
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals_confirm_confirm_component__["a" /* ConfirmComponent */], { autoFocus: false, disableClose: true }).afterClosed().subscribe(function (data) {
            if (data == 'no') { }
            if (data == 'yes') {
                _this.hotelService.deleteHotel(row).subscribe(function (data) {
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
    DisplayhotelsComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    DisplayhotelsComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.dataSource.filter = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], DisplayhotelsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatPaginator */])
    ], DisplayhotelsComponent.prototype, "paginator", void 0);
    DisplayhotelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'displayhotels',
            template: __webpack_require__("./src/app/pages/hotels/displayhotels/displayhotels.component.html"),
            styles: [__webpack_require__("./src/app/pages/hotels/displayhotels/displayhotels.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], DisplayhotelsComponent);
    return DisplayhotelsComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotels/exporthotels/exporthotels.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-12\">    \n    <nb-card>      \n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field>\n              <mat-select [(ngModel)]=\"predefined\"  placeholder=\"Preset\" >\n                <mat-option *ngFor=\"let element of presets\" [value]=\"element.name\" (click)=\"predefinedRoles(element)\"> \n                  {{element.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-6 col-12\">\n            <form [formGroup]=\"preset\">\n              <mat-form-field>\n                <input matInput placeholder=\"Preset Name\" formControlName=\"permissionName\">\n                <mat-error>\n                  Enter a Permission Name to save as a preset\n                </mat-error>  \n              </mat-form-field>\n              <button mat-raised-button color=\"primary\" [disabled]=\"preset.invalid\" (click)=\"savePreset()\">Save Preset</button>\n            </form>\n            <!-- <button mat-icon-button class=\"close-button\" color=\"warn\" (click)=\"close()\"><mat-icon style=\"font-size: 25px;\">close</mat-icon></button> -->      \n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-12\">\n            Customer Name:\n            <mat-form-field class=\"w-100\">\n              <!-- <input aria-placeholder=\"Pick one\" (change)=\"setCustomer(option)\" name=\"cname\" [(ngModel)]=\"bookings.cname\" matInput [matAutocomplete]=\"custauto\"> -->\n              <input aria-placeholder=\"Pick one\"  name=\"cname\" [formControl]=\"customerCtrl\" matInput [matAutocomplete]=\"custauto\" >\n              <mat-autocomplete #custauto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of customer |async\" [value]=\"option.name\" (onSelectionChange)=\"setCustomer(option,$event)\">\n                  {{ option.name }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>      \n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field class=\"w-100\">\n              Start Date\n              <input matInput [(ngModel)]=\"bookings.startDate\" [matDatepicker]=\"startDate\" (click)=\"startDate.open()\" readonly name=\"startDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n              <mat-datepicker #startDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-6 col-12\">\n            <mat-form-field class=\"w-100\">\n              End Date\n              <input matInput [(ngModel)]=\"bookings.endDate\" [matDatepicker]=\"endDate\" (click)=\"endDate.open()\" readonly name=\"endDate\">         \n              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n              <mat-datepicker #endDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12\">\n            <mat-checkbox [ngModel]=\"exportBookings.customerName\" (ngModelChange)=\"change($event,&quot;h.customerName as 'Customer Name'&quot;)\">\n              Customer Name\n            </mat-checkbox><br>\n            <mat-checkbox [ngModel]=\"exportBookings.checkInDate\" (ngModelChange)=\"change($event,&quot;h.checkInDate as 'Check In Date'&quot;)\">\n              Check In Date\n            </mat-checkbox><br>\n            <mat-checkbox [ngModel]=\"exportBookings.checkOutDate\" (ngModelChange)=\"change($event,&quot;h.checkOutDate as 'Check Out Date'&quot;)\">\n              Check Out Date\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.bookBy\" (change)=\"change($event,&quot;h.bookByName as 'Booked By'&quot;)\">\n              Booked by\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.bookByNo\" (change)=\"change($event,&quot;h.bookByNo as 'Booked By No'&quot;)\">\n              Booked by Phone\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.bookByEmail\" (change)=\"change($event,&quot;h.bookByEmail as 'Booked By Email'&quot;)\">\n              Booked by Email\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.guestName\" (change)=\"change($event,&quot;h.guestName as 'Guest Name'&quot;)\">\n              Guest Name\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.hotelName\" (change)=\"change($event,&quot;h.hotelName as 'Hotel Name'&quot;)\">\n              Hotel Name\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.billedToNo\" (change)=\"change($event,&quot;h.billedToNo as 'Billed To Number'&quot;)\">\n              Billed To Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.billedToEmail\" (change)=\"change($event,&quot;h.billedToEmail as 'Billed To Email'&quot;)\">\n              Billed To Email\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.room\" (change)=\"change($event,&quot;h.room as 'Room'&quot;)\">\n              Room\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.occupancy\" (change)=\"change($event,&quot;h.occupancy as 'Occupancy'&quot;)\">\n              Occupancy\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.guestNumber\" (change)=\"change($event,&quot;h.guestMobile as 'Guest Name'&quot;)\">\n              Guest Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.guestEmail\" (change)=\"change($event,&quot;h.guestEmail as 'Guest Email'&quot;)\">\n              Guest Email\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.checkInTime\" (change)=\"change($event,&quot;h.checkInTime as 'Check In Time'&quot;)\">\n              Check In Time\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.checkOutTime\" (change)=\"change($event,&quot;h.checkOutTime as 'checkOutTime'&quot;)\">\n              checkOutTime\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.nights\" (change)=\"change($event,&quot;h.nights as 'Nights'&quot;)\">\n              Nights\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.noOfPeople\" (change)=\"change($event,&quot;h.noOfPeople as 'Number of People'&quot;)\">\n              Number of People\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.confNo\" (change)=\"change($event,&quot;h.confNo as 'Conf Number'&quot;)\">\n              Conf No\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.inclusion\" (change)=\"change($event,&quot;h.inclusion as 'Inclusion'&quot;)\">\n              Inclusion\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.rate\" (change)=\"change($event,&quot;h.rate as 'Rate'&quot;)\">\n              Rate\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.amount\" (change)=\"change($event,&quot;h.amount as 'Amount'&quot;)\">\n              Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.paymentMode\" (change)=\"change($event,&quot;h.paymentMode as 'Payment Mode'&quot;)\">\n              Payment Mode\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.taxes\" (change)=\"change($event,&quot;h.taxes as 'Taxes'&quot;)\">\n              taxes\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.hotelBillNo\" (change)=\"change($event,&quot;h.hotelBillNo as 'Hotel Bill Number'&quot;)\">\n              Hotel Bill Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.hotelAmount\" (change)=\"change($event,&quot;h.hotelAmount as 'Hotel Amount'&quot;)\">\n              Hotel Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.total\" (change)=\"change($event,&quot;h.total as 'Total'&quot;)\">\n              Total\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.intInclusion\" (change)=\"change($event,&quot;h.intInclusion as 'Int Inclusion'&quot;)\">\n              Int Inclusion\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.hotelRate\" (change)=\"change($event,&quot;h.hotelRate as 'Hotel Rate'&quot;)\">\n              Hotel Rate\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.intAmount\" (change)=\"change($event,&quot;h.intAmount as 'Int Amount'&quot;)\">\n              Int Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.agents\" (change)=\"change($event,&quot;h.agents as 'Agents'&quot;)\">\n              Agents\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.commission\" (change)=\"change($event,&quot;h.commission as 'Commission'&quot;)\">\n              Commission\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.intTaxes\" (change)=\"change($event,&quot;h.intTaxes as 'Int Taxes'&quot;)\">\n              Int Taxes\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.intTotal\" (change)=\"change($event,&quot;h.intTotal as 'Int Total'&quot;)\">\n              Int Total\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.hotelCity\" (change)=\"change($event,&quot;h.hotelCity as 'Hotel City'&quot;)\">\n              Hotel City\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.status\" (change)=\"change($event,&quot;h.status as 'Status'&quot;)\">\n              Status\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.message\" (change)=\"change($event,&quot;l.message as 'Message'&quot;)\">\n              Message\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoiceNumber\" (change)=\"change($event,&quot;i.invoiceNumber as 'Invoice Number'&quot;)\">\n              Invoice Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoiceDate\" (change)=\"change($event,&quot;i.invoiceDate as 'Invoice Date'&quot;)\">\n              Invoice Date\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoicePeriodFrom\" (change)=\"change($event,&quot;i.invoicePeriodFrom as 'Invoice Period From'&quot;)\">\n              Invoice Period From\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoicePeriodTo\" (change)=\"change($event,&quot;i.invoicePeriodTo as 'Invoice Period To'&quot;)\">\n              Invoice Period To\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.poNumber\" (change)=\"change($event,&quot;i.poNumber as 'PO Number'&quot;)\">\n              PO Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.ccNumber\" (change)=\"change($event,&quot;i.ccNumber as 'CC Number'&quot;)\">\n              CC Number\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.totalAmount\" (change)=\"change($event,&quot;i.totalAmount as 'totalAmount'&quot;)\">\n              Total Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.taxType\" (change)=\"change($event,&quot;i.taxType as 'Tax Type'&quot;)\">\n              Tax Type\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.taxRate\" (change)=\"change($event,&quot;i.taxRate as 'Tax Rate'&quot;)\">\n              Tax Rate\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.taxAmount\" (change)=\"change($event,&quot;i.taxAmount as 'Tax Amount'&quot;)\">\n              Tax Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.discountType\" (change)=\"change($event,&quot;i.discountType as 'Discount Type'&quot;)\">\n              Discount Type\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.discountAmount\" (change)=\"change($event,&quot;i.discountAmount as 'Discount Amount'&quot;)\">\n              Discount Amount\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.invoiceStatus\" (change)=\"change($event,&quot;i.status as 'Invoice Status'&quot;)\">\n              Invoice Status\n            </mat-checkbox><br>\n            <mat-checkbox [(ngModel)]=\"exportBookings.advancedReceived\" (change)=\"change($event,&quot;i.advanceReceived as 'Advanced Received'&quot;)\">\n              Advanced Received\n            </mat-checkbox><br>\n            \n        </div>                             \n      </div>\n    </nb-card-body>\n  </nb-card>    \n</div>\n</div>\n<div class=\"row ptb-10\">\n<div class=\"col-lg-12 col-12\">\n  <button mat-raised-button color=\"primary\" (click)=\"getHotelBookings()\">Export</button>\n  <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">Close</button>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/hotels/exporthotels/exporthotels.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/hotels/exporthotels/exporthotels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExporthotelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masters_customer_customer_service__ = __webpack_require__("./src/app/pages/masters/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__masters_new_employees_employee_service__ = __webpack_require__("./src/app/pages/masters/new-employees/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ExporthotelsComponent = (function () {
    function ExporthotelsComponent(auth, dialogRef, http, fb, customerService, employeeService, snackBar) {
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
    ExporthotelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
            _this.exportBookings.ownerId = _this.user.ownerId;
            _this.getHotelProfiles(_this.user).subscribe(function (data) {
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
            else {
                _this.getCustomer();
            }
        });
        this.preset = this.fb.group({
            permissionName: ['']
        });
    };
    ExporthotelsComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers(this.user).subscribe(function (data) {
            console.log(data);
            _this.customers = data;
            _this.customer = _this.customerCtrl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["startWith"])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (val) { return _this.filterCustomer(val); }));
        });
    };
    ExporthotelsComponent.prototype.filterCustomer = function (val) {
        return this.customers.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    ExporthotelsComponent.prototype.getHotelBookings = function () {
        var _this = this;
        var temp = {
            columns: this.columns
        };
        this.getBookingsForExports(temp).subscribe(function (data) {
            console.log(data);
            _this.hotelData = data;
        });
    };
    ExporthotelsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ExporthotelsComponent.prototype.change = function (event, temp) {
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
    ExporthotelsComponent.prototype.predefinedRoles = function (temp) {
        this.columns = [];
        this.exportBookings = temp;
        if (this.exportBookings.customerName) {
            this.columns.push("h.customerName as 'Customer Name'");
        }
        if (this.exportBookings.checkInDate) {
            this.columns.push("h.checkInDate as 'Check In Date'");
        }
        if (this.exportBookings.checkOutDate) {
            this.columns.push("h.checkOutDate as 'Check Out Date'");
        }
        if (this.exportBookings.bookBy) {
            this.columns.push("h.bookByName as 'Booked By'");
        }
        if (this.exportBookings.bookByNo) {
            this.columns.push("h.bookByNo as 'Booked By No'");
        }
        if (this.exportBookings.bookByEmail) {
            this.columns.push("h.bookByEmail as 'Booked By Email'");
        }
        if (this.exportBookings.guestName) {
            this.columns.push("h.guestName as 'Guest Name'");
        }
        if (this.exportBookings.hotelName) {
            this.columns.push("h.hotelName as 'Hotel Name'");
        }
        if (this.exportBookings.billedToNo) {
            this.columns.push("h.billedToNo as 'Billed To Number'");
        }
        if (this.exportBookings.billedToEmail) {
            this.columns.push("h.billedToEmail as 'Billed To Email'");
        }
        if (this.exportBookings.occupancy) {
            this.columns.push("h.occupancy as 'Occupancy'");
        }
        if (this.exportBookings.checkInTime) {
            this.columns.push("h.checkInTime as 'Check In Time'");
        }
        if (this.exportBookings.checkOutTime) {
            this.columns.push("h.checkOutTime as 'checkOutTime'");
        }
        if (this.exportBookings.nights) {
            this.columns.push("h.nights as 'Nights'");
        }
        if (this.exportBookings.noOfPeople) {
            this.columns.push("h.noOfPeople as 'Number of People'");
        }
        if (this.exportBookings.confNo) {
            this.columns.push("h.confNo as 'Conf Number'");
        }
        if (this.exportBookings.inclusion) {
            this.columns.push("h.inclusion as 'Inclusion'");
        }
        if (this.exportBookings.rate) {
            this.columns.push("h.rate as 'Rate'");
        }
        if (this.exportBookings.amount) {
            this.columns.push("h.amount as 'Amount'");
        }
        if (this.exportBookings.paymentMode) {
            this.columns.push("h.paymentMode as 'Payment Mode'");
        }
        if (this.exportBookings.taxes) {
            this.columns.push("h.taxes as 'Taxes'");
        }
        if (this.exportBookings.hotelBillNo) {
            this.columns.push("h.hotelBillNo as 'Hotel Bill Number'");
        }
        if (this.exportBookings.hotelAmount) {
            this.columns.push("h.hotelAmount as 'Hotel Amount'");
        }
        if (this.exportBookings.total) {
            this.columns.push("h.total as 'Total'");
        }
        if (this.exportBookings.intInclusion) {
            this.columns.push("h.intInclusion as 'Int Inclusion'");
        }
        if (this.exportBookings.hotelRate) {
            this.columns.push("h.hotelRate as 'Hotel Rate'");
        }
        if (this.exportBookings.intAmount) {
            this.columns.push("h.intAmount as 'Int Amount'");
        }
        if (this.exportBookings.agents) {
            this.columns.push("h.agents as 'Agents'");
        }
        if (this.exportBookings.commission) {
            this.columns.push("h.commission as 'Commission'");
        }
        if (this.exportBookings.intTaxes) {
            this.columns.push("h.intTaxes as 'Int Taxes'");
        }
        if (this.exportBookings.intTotal) {
            this.columns.push("h.intTotal as 'Int Total'");
        }
        if (this.exportBookings.hotelCity) {
            this.columns.push("h.hotelCity as 'Hotel City'");
        }
        if (this.exportBookings.status) {
            this.columns.push("h.status as 'Status'");
        }
        if (this.exportBookings.message) {
            this.columns.push("l.message as 'Message'");
        }
        if (this.exportBookings.invoiceNumber) {
            this.columns.push("i.invoiceNumber as 'Invoice Number'");
        }
        if (this.exportBookings.invoiceDate) {
            this.columns.push("i.invoiceDate as 'Invoice Date'");
        }
        if (this.exportBookings.invoicePeriodFrom) {
            this.columns.push("i.invoicePeriodFrom as 'Invoice Period'");
        }
        if (this.exportBookings.invoicePeriodTo) {
            this.columns.push("i.invoicePeriodTo as 'Invoice Period To'");
        }
        if (this.exportBookings.poNumber) {
            this.columns.push("i.poNumber as 'PO Number'");
        }
        if (this.exportBookings.ccNumber) {
            this.columns.push("i.ccNumber as 'CC Number'");
        }
        if (this.exportBookings.totalAmount) {
            this.columns.push("i.totalAmount as 'totalAmount'");
        }
        if (this.exportBookings.taxType) {
            this.columns.push("i.taxType as 'Tax Type'");
        }
        if (this.exportBookings.taxRate) {
            this.columns.push("i.taxRate as 'Tax Rate'");
        }
        if (this.exportBookings.taxAmount) {
            this.columns.push("i.taxAmount as 'Tax Amount'");
        }
        if (this.exportBookings.discountType) {
            this.columns.push("i.discountType as 'Discount Type'");
        }
        if (this.exportBookings.discountAmount) {
            this.columns.push("i.discountAmount as 'Discount Amount'");
        }
        if (this.exportBookings.advancedReceived) {
            this.columns.push("i.advanceReceived as 'Advanced Received'");
        }
        if (this.exportBookings.room) {
            this.columns.push("h.room as 'Room'");
        }
        if (this.exportBookings.guestNumber) {
            this.columns.push("h.guestMobile as 'Guest Name'");
        }
        if (this.exportBookings.guestEmail) {
            this.columns.push("h.guestEmail as 'Guest Email'");
        }
        console.log(this.columns);
    };
    ExporthotelsComponent.prototype.savePreset = function () {
        var _this = this;
        this.exportBookings.name = this.preset.get('permissionName').value;
        this.addHotelprofiles(this.exportBookings).subscribe(function (data) { }, function (err) { }, function () {
            _this.snackBar.open("Preset Saved", "X", { duration: 3000 });
        });
    };
    ExporthotelsComponent.prototype.getHotelProfiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/getHotelBookingExportsProfiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExporthotelsComponent.prototype.addHotelprofiles = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/addHotelBookingExportsProfiles', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExporthotelsComponent.prototype.getBookingsForExports = function (temp) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('rtcuieo') });
        return this.http.post('/hotel/getHotelBookingForExports', temp, { headers: headers }).map(function (res) { return res.json(); });
    };
    ExporthotelsComponent.prototype.exportDuties = function () {
        console.log(this.exportBookings);
        var workBook = __WEBPACK_IMPORTED_MODULE_8_xlsx__["utils"].book_new();
        var workSheet = __WEBPACK_IMPORTED_MODULE_8_xlsx__["utils"].json_to_sheet(this.hotelData);
        __WEBPACK_IMPORTED_MODULE_8_xlsx__["utils"].book_append_sheet(workBook, workSheet, 'data');
        __WEBPACK_IMPORTED_MODULE_8_xlsx__["writeFile"](workBook, "_Duties.xlsx");
    };
    ExporthotelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'exporthotels',
            template: __webpack_require__("./src/app/pages/hotels/exporthotels/exporthotels.component.html"),
            styles: [__webpack_require__("./src/app/pages/hotels/exporthotels/exporthotels.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_6__masters_new_employees_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MatSnackBar */]])
    ], ExporthotelsComponent);
    return ExporthotelsComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotels/hotel-advancepayment/hotel-advancepayment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Hotel Advance Payment\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            Booking ID #{{bookingId}}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Amount\n              <input matInput [(ngModel)]=\"advancePayment.amount\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            Payment Mode\n            <br><br>\n            <mat-radio-group [(ngModel)]=\"advancePayment.paymentMode\" (change)=\"checkPaymentMode(advancePayment.paymentMode)\">\n              <mat-radio-button value=\"Credit Card\">Credit Card</mat-radio-button>\n              <mat-radio-button value=\"Cheque\">Cheque</mat-radio-button>\n              <mat-radio-button value=\"NEFT\">NEFT</mat-radio-button>\n              <mat-radio-button value=\"Cash\">Cash</mat-radio-button>\n              <mat-radio-button value=\"Others\">Others</mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"cheque\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Cheque Number\n              <input matInput [(ngModel)]=\"advancePayment.chequeNumber\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              Bank Name\n              <input matInput [(ngModel)]=\"advancePayment.bankName\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              Cheque Date\n              <input matInput [(ngModel)]=\"advancePayment.chequeDate\" [matDatepicker]=\"chequeDate\" (click)=\"chequeDate.open()\">\n              <mat-datepicker-toggle matSuffix [for]=\"chequeDate\"></mat-datepicker-toggle>\n              <mat-datepicker #chequeDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"neft\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Transaction Number\n              <input matInput [(ngModel)]=\"advancePayment.transactionNumber\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Bank Name\n              <input matInput [(ngModel)]=\"advancePayment.neftBankName\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field class=\"w-100\">\n              Received in Bank              \n              <input matInput [formControl]=\"receivedInBankCtrl\"  [matAutocomplete]=\"autoRIB\">\n              <mat-autocomplete #autoRIB=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of bankAccount | async\" [value]=\"option.bankName\" (onSelectionChange)=\"setReceivedInBank(option,$event)\">\n                      {{ option.bankName }} ({{option.number}})\n                  </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12\">\n            <mat-form-field>\n              Bank Credit Date\n              <input matInput [(ngModel)]=\"advancePayment.bankCreditDate\" [matDatepicker]=\"bankCreditDate\" (click)=\"bankCreditDate.open()\">\n              <mat-datepicker-toggle matSuffix [for]=\"bankCreditDate\"></mat-datepicker-toggle>\n              <mat-datepicker #bankCreditDate></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n      </nb-card-body>  \n    </nb-card>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12\">\n    <button mat-raised-button color=\"primary\" (click)=\"saveAdvancePayment()\">Save</button>\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>  "

/***/ }),

/***/ "./src/app/pages/hotels/hotel-advancepayment/hotel-advancepayment.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/hotels/hotel-advancepayment/hotel-advancepayment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelAdvancepaymentComponent; });
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








var HotelAdvancepaymentComponent = (function () {
    function HotelAdvancepaymentComponent(dialog, data, advancepaymentService, auth, bankAccountService) {
        this.dialog = dialog;
        this.data = data;
        this.advancepaymentService = advancepaymentService;
        this.auth = auth;
        this.bankAccountService = bankAccountService;
        this.user = {};
        this.advancePayment = {};
        this.cheque = false;
        this.neft = false;
        this.receivedInBankCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        if (this.data != null) {
            this.bookingId = data.id;
        }
    }
    HotelAdvancepaymentComponent.prototype.ngOnInit = function () {
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
    HotelAdvancepaymentComponent.prototype.checkPaymentMode = function (temp) {
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
    HotelAdvancepaymentComponent.prototype.setReceivedInBank = function (option, event) {
        if (event.source.selected == true) {
            // console.log(option);
            this.advancePayment.receivedInBank = option.id;
        }
    };
    HotelAdvancepaymentComponent.prototype.saveAdvancePayment = function () {
        var _this = this;
        this.advancePayment.hotelBookingId = this.bookingId;
        this.advancepaymentService.addHotelAdvancePayment(this.advancePayment).subscribe(function (data) {
            _this.dialog.closeAll();
        });
    };
    HotelAdvancepaymentComponent.prototype.filterBankAccounts = function (val) {
        return this.bankAccounts.filter(function (option) {
            return option.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    HotelAdvancepaymentComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    HotelAdvancepaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'hotel-advancepayment',
            template: __webpack_require__("./src/app/pages/hotels/hotel-advancepayment/hotel-advancepayment.component.html"),
            styles: [__webpack_require__("./src/app/pages/hotels/hotel-advancepayment/hotel-advancepayment.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */], Object, __WEBPACK_IMPORTED_MODULE_3__operations_advancepayment_advancepayment_service__["a" /* AdvancepaymentService */],
            __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__operations_new_bank_account_bank_account_service__["a" /* BankAccountService */]])
    ], HotelAdvancepaymentComponent);
    return HotelAdvancepaymentComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotels/hotel-files/hotel-files.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\">\n\n  <div formArrayName=\"files\">\n\n      <div *ngFor=\"let files of fileForms.controls; let i=index\" [formGroupName]=\"i\">\n\n\n          <mat-form-field class=\"xs\" style=\"padding-right: 20px\">\n              <input matInput placeholder=\"Name\" formControlName=\"name\">\n          </mat-form-field>\n\n          <button (click)=\"bookingImages.click()\" mat-flat-button matTooltip=\"Upload\">Browse</button>\n          <input hidden type=\"file\" formControlName=\"images\" #bookingImages (change)=\"imageSelect($event,i)\">\n          <i *ngIf=\"selectedFiles[i]!=undefined\" style=\"font-size: 11px;\">{{selectedFiles[i].name}}</i>\n\n          <button mat-icon-button color=\"warn\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon></button>\n\n      </div>\n\n  </div>\n\n  <button mat-raised-button color=\"primary\" (click)=\"addRow()\">Add File</button>\n\n  <button mat-raised-button color=\"primary\" (click)=\"uploadFinal()\">Upload</button>\n\n</form>"

/***/ }),

/***/ "./src/app/pages/hotels/hotel-files/hotel-files.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/hotels/hotel-files/hotel-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileupload_service__ = __webpack_require__("./src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__displayhotels_hotel_service__ = __webpack_require__("./src/app/pages/hotels/displayhotels/hotel.service.ts");
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







var HotelFilesComponent = (function () {
    function HotelFilesComponent(fb, uploadService, data, hotelService, http, auth, snackBar) {
        this.fb = fb;
        this.uploadService = uploadService;
        this.data = data;
        this.hotelService = hotelService;
        this.http = http;
        this.auth = auth;
        this.snackBar = snackBar;
        this.imgUrl = [];
        this.selectedFiles = [];
        this.booking = {};
        this.user = {};
        this.booking = data;
    }
    HotelFilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            _this.user = data[0];
        });
        this.myForm = this.fb.group({
            files: this.fb.array([])
        });
        this.addRow();
    };
    Object.defineProperty(HotelFilesComponent.prototype, "fileForms", {
        get: function () {
            return this.myForm.get('files');
        },
        enumerable: true,
        configurable: true
    });
    HotelFilesComponent.prototype.addRow = function () {
        var phone = this.fb.group({
            name: [],
            images: [],
            imageName: []
        });
        this.fileForms.push(phone);
    };
    HotelFilesComponent.prototype.deleteRow = function (i) {
        this.fileForms.removeAt(i);
    };
    HotelFilesComponent.prototype.imageSelect = function (event, i) {
        var file = event.target.files[0];
        this.selectedFiles[i] = file;
    };
    HotelFilesComponent.prototype.uploadFinal = function () {
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
            _this.hotelService.addHotelFiles(tempArr).subscribe(function (data) { });
            if (_this.selectedFiles[i] != undefined)
                uploadData.append(_this.user.companyName + '/hotelFiles/' + _this.booking.id + "/" + imageName, _this.selectedFiles[i], 'hotelFiles');
            _this.http.post("/files/uploadS3", uploadData, body).map(function (res) { return res.json(); }).subscribe();
            i = i + 1;
        });
        this.snackBar.open("Files Uploaded", "X", { duration: 3000 });
    };
    HotelFilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'hotel-files',
            template: __webpack_require__("./src/app/pages/hotels/hotel-files/hotel-files.component.html"),
            styles: [__webpack_require__("./src/app/pages/hotels/hotel-files/hotel-files.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__fileupload_service__["a" /* FileuploadService */], Object, __WEBPACK_IMPORTED_MODULE_6__displayhotels_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSnackBar */]])
    ], HotelFilesComponent);
    return HotelFilesComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotels/hotel/hotel.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/hotels/hotel/hotel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelComponent; });
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

var HotelComponent = (function () {
    function HotelComponent() {
    }
    HotelComponent.prototype.ngOnInit = function () {
    };
    HotelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'hotel',
            styles: [__webpack_require__("./src/app/pages/hotels/hotel/hotel.component.scss")],
            template: "\n    <router-outlet></router-outlet>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotels/hotels-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addhotels_addhotels_component__ = __webpack_require__("./src/app/pages/hotels/addhotels/addhotels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__displayhotels_displayhotels_component__ = __webpack_require__("./src/app/pages/hotels/displayhotels/displayhotels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookhotel_bookhotel_component__ = __webpack_require__("./src/app/pages/hotels/bookhotel/bookhotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookroom_bookroom_component__ = __webpack_require__("./src/app/pages/hotels/bookroom/bookroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__displayhotelbookings_displayhotelbookings_component__ = __webpack_require__("./src/app/pages/hotels/displayhotelbookings/displayhotelbookings.component.ts");
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
                path: 'addhotels',
                component: __WEBPACK_IMPORTED_MODULE_2__addhotels_addhotels_component__["a" /* AddhotelsComponent */],
            },
            {
                path: 'displayhotels',
                component: __WEBPACK_IMPORTED_MODULE_3__displayhotels_displayhotels_component__["a" /* DisplayhotelsComponent */],
            },
            {
                path: 'bookhotel',
                component: __WEBPACK_IMPORTED_MODULE_4__bookhotel_bookhotel_component__["a" /* BookhotelComponent */],
            },
            {
                path: 'bookroom',
                component: __WEBPACK_IMPORTED_MODULE_5__bookroom_bookroom_component__["a" /* BookroomComponent */],
            },
            {
                path: 'displayhotelbookings',
                component: __WEBPACK_IMPORTED_MODULE_6__displayhotelbookings_displayhotelbookings_component__["a" /* DisplayhotelbookingsComponent */],
            },
        ]
    }];
var HotelsRoutingModule = (function () {
    function HotelsRoutingModule() {
    }
    HotelsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HotelsRoutingModule);
    return HotelsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hotels/hotels.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsModule", function() { return HotelsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotels_routing_module__ = __webpack_require__("./src/app/pages/hotels/hotels-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addhotels_addhotels_component__ = __webpack_require__("./src/app/pages/hotels/addhotels/addhotels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__displayhotels_displayhotels_component__ = __webpack_require__("./src/app/pages/hotels/displayhotels/displayhotels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bookhotel_bookhotel_component__ = __webpack_require__("./src/app/pages/hotels/bookhotel/bookhotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__displayhotels_hotel_service__ = __webpack_require__("./src/app/pages/hotels/displayhotels/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bookroom_bookroom_component__ = __webpack_require__("./src/app/pages/hotels/bookroom/bookroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hotel_hotel_component__ = __webpack_require__("./src/app/pages/hotels/hotel/hotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__displayhotelbookings_displayhotelbookings_component__ = __webpack_require__("./src/app/pages/hotels/displayhotelbookings/displayhotelbookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hotel_advancepayment_hotel_advancepayment_component__ = __webpack_require__("./src/app/pages/hotels/hotel-advancepayment/hotel-advancepayment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__viewhotelbooking_viewhotelbooking_component__ = __webpack_require__("./src/app/pages/hotels/viewhotelbooking/viewhotelbooking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sendhotelconfirmation_sendhotelconfirmation_component__ = __webpack_require__("./src/app/pages/hotels/sendhotelconfirmation/sendhotelconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_lightbox__ = __webpack_require__("./node_modules/ngx-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ngx_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_moment_adapter__ = __webpack_require__("./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__exporthotels_exporthotels_component__ = __webpack_require__("./src/app/pages/hotels/exporthotels/exporthotels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__hotel_files_hotel_files_component__ = __webpack_require__("./src/app/pages/hotels/hotel-files/hotel-files.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var HotelsModule = (function () {
    function HotelsModule() {
    }
    HotelsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__hotels_routing_module__["a" /* HotelsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["F" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["z" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["P" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["B" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["L" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["E" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["S" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["x" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["C" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["Q" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["D" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatDividerModule */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__hotel_advancepayment_hotel_advancepayment_component__["a" /* HotelAdvancepaymentComponent */], __WEBPACK_IMPORTED_MODULE_14__viewhotelbooking_viewhotelbooking_component__["a" /* ViewhotelbookingComponent */], __WEBPACK_IMPORTED_MODULE_15__sendhotelconfirmation_sendhotelconfirmation_component__["a" /* SendhotelconfirmationComponent */], __WEBPACK_IMPORTED_MODULE_18__exporthotels_exporthotels_component__["a" /* ExporthotelsComponent */], __WEBPACK_IMPORTED_MODULE_19__hotel_files_hotel_files_component__["a" /* HotelFilesComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__addhotels_addhotels_component__["a" /* AddhotelsComponent */], __WEBPACK_IMPORTED_MODULE_7__displayhotels_displayhotels_component__["a" /* DisplayhotelsComponent */], __WEBPACK_IMPORTED_MODULE_8__bookhotel_bookhotel_component__["a" /* BookhotelComponent */], __WEBPACK_IMPORTED_MODULE_10__bookroom_bookroom_component__["a" /* BookroomComponent */], __WEBPACK_IMPORTED_MODULE_11__hotel_hotel_component__["a" /* HotelComponent */], __WEBPACK_IMPORTED_MODULE_12__displayhotelbookings_displayhotelbookings_component__["a" /* DisplayhotelbookingsComponent */], __WEBPACK_IMPORTED_MODULE_13__hotel_advancepayment_hotel_advancepayment_component__["a" /* HotelAdvancepaymentComponent */], __WEBPACK_IMPORTED_MODULE_14__viewhotelbooking_viewhotelbooking_component__["a" /* ViewhotelbookingComponent */], __WEBPACK_IMPORTED_MODULE_15__sendhotelconfirmation_sendhotelconfirmation_component__["a" /* SendhotelconfirmationComponent */], __WEBPACK_IMPORTED_MODULE_18__exporthotels_exporthotels_component__["a" /* ExporthotelsComponent */], __WEBPACK_IMPORTED_MODULE_19__hotel_files_hotel_files_component__["a" /* HotelFilesComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__displayhotels_hotel_service__["a" /* HotelService */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_17__angular_material_moment_adapter__["a" /* MomentDateAdapter */], deps: [__WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: {
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
    ], HotelsModule);
    return HotelsModule;
}());



/***/ }),

/***/ "./src/app/pages/hotels/sendhotelconfirmation/sendhotelconfirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"min-width:60vw;\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>Contact</nb-card-header>\n      <nb-card-body>\n        <div class=\"call-container\">\n          <mat-accordion *ngIf=\"logDisplay.length>0\">\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title style=\"justify-content: center;\">\n                  Logs\n                </mat-panel-title>\n                <mat-panel-description style=\"justify-content: center;\">\n                  Click here to open logs\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <div *ngFor=\"let element of logDisplay\" style=\"text-align: center;color:brown;\">\n                {{element.log}}\n              </div>\n            </mat-expansion-panel>\n          </mat-accordion>\n          <div style=\"margin-top:15px;\">\n            <table class=\"callTable\">\n              <tbody>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Customer: </b> {{customer.name}}\n                  </td>\n                  <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                    <mat-checkbox (change)=\"sendSMS($event,customer.phone,'customer',customer.name)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,customer.phone,'customer',customer.name)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,customer.email,'customer')\">E-mail</mat-checkbox><br>\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Number: </b> {{customer.phone}}\n                    <button (click)=\"makeAppCall(customer.phone)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Email: </b> {{customer.email}}\n                  </td>\n                </tr>\n              </tbody>\n              <tbody *ngFor=\"let element of allBookedBy;\">\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Booked By: </b> {{element.bookByName}}\n                  </td>\n                  <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                    <mat-checkbox (change)=\"sendSMS($event,element.bookByNo,'bookedBy',element.bookByName)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,element.bookByNo,'bookedBy',element.bookByName)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,element.bookByEmail,'bookedBy')\">E-mail</mat-checkbox><br>                    \n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Number: </b> {{element.bookByNo}}\n                    <button (click)=\"makeAppCall(element.bookByNo)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Email: </b> {{element.bookByEmail}}\n                  </td>\n                </tr>\n              </tbody>\n              <tbody *ngFor=\"let temp of allPassengers\">\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Passenger: </b> {{temp.passenger}}\n                  </td>\n                  <td class=\"callCell\" rowspan=\"3\" style=\"padding-left: 30px\">\n                    <mat-checkbox (change)=\"sendSMS($event,temp.passengerNo,'passenger',temp.passenger)\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,temp.passengerNo,'passenger',temp.passenger)\">WhatApp</mat-checkbox><mat-checkbox (change)=\"sendEmail($event,temp.passengerEmail,'passenger')\">E-mail</mat-checkbox><br>                    \n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Number: </b> {{temp.passengerNo}} \n                    <button (click)=\"makeAppCall(temp.passengerNo)\" color=\"primary\" mat-icon-button><mat-icon>local_phone</mat-icon></button><!--<sub *ngIf=\"callNumber==0\">* device is {{deviceStatus}}</sub><sub *ngIf=\"callNumber!=0\">* {{callNumber}} is {{deviceStatus}}</sub>-->\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"callCell\">\n                    <b>Email: </b> {{temp.passengerEmail}}\n                  </td>\n                </tr>\n              </tbody>\n              <tbody>\n                <tr>\n                  <td class=\"callCell\">\n                    <mat-form-field>\n                      <b>Custom Phone: </b>\n                      <input matInput [(ngModel)]=\"customNumber\">\n                    </mat-form-field>  \n                    <br>\n                      <mat-checkbox (change)=\"sendSMS($event,customNumber,'custom')\">SMS</mat-checkbox><mat-checkbox (change)=\"sendWhatsApp($event,customNumber,'custom')\">WhatApp</mat-checkbox>                    \n                  </td>\n                  <td class=\"callCell\" style=\"padding-left: 30px\">\n                    <mat-form-field>\n                      <b>Custom Email: </b>\n                      <input matInput [(ngModel)]=\"customEmail\">\n                    </mat-form-field>        \n                  </td>\n                </tr>                  \n              </tbody>\n              <tbody *ngIf=\"emailAttachments==true\">\n                  <tr>\n                    <td class=\"callCell\" colspan=\"2\">\n                      <b>Email Attachments:</b><br>\n                      <div style=\"display:inline-block;\" *ngFor=\"let element of attachments\">\n                        <mat-checkbox (change)=\"addAttachments($event,element.imageName)\">{{element.fileName}}</mat-checkbox>\n                      </div>\n                    </td>\n                  </tr>                  \n              </tbody>\n            </table> \n          </div>\n          <div class=\"invoice-button-container\" style=\"margin-top: 10px;\">\n            <div style=\"width: 60%;margin:auto;\">\n              <label style=\"text-align: left;font-size:14px;\">\n                <p>For: {{hotelDetails.guestName}} ({{hotelDetails.guestMobile}})</p>                \n                <p>Hotel Name: {{hotelDetails.hotelName}}</p>\n                <p>Address: {{hotelDetails.address}}</p>\n                <p>Room: {{hotelDetails.room}}</p>\n                <p>Occupancy: {{hotelDetails.occupancy}}</p>                \n              </label>\n              <hr style=\"border-top:1px solid black\">\n            </div>\n            <button class=\"invoice-button\" color=\"primary\" mat-raised-button (click)=\"send()\">Send</button>\n            <button *ngIf=\"!mailPassenger\" (click)=\"mailPassenger = true\" class=\"invoice-button\" mat-raised-button color=\"primary\" >Preview E-mail</button>            \n            <button *ngIf=\"mailPassenger\" class=\"invoice-button\" mat-raised-button color=\"primary\" (click)=\"mailPassenger=false; mailSupplier=false\">Close Preview</button>\n          </div>\n\n          <mat-divider></mat-divider>\n          <div [hidden]=\"!mailPassenger\">\n            <div class=\"row ptb-10\">\n              <div class=\"col-lg-12\">          \n          <div #dutyPassengerTemplate id=\"dutyPassengerTemplate\">\n            <!DOCTYPE html>\n            <html lang=\"en\">          \n              <head>\n                <title></title>\n                <meta charset=\"utf-8\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n                <style type=\"text/css\">\n                  @font-face {font-family: 'sofia';  src: url('http://media.firebox.com/fonts/sofiapro_regular_macroman/SofiaProRegular-webfont.woff') format('woff');  mso-font-alt: 'Arial';  font-weight: normal !important;  font-style: normal !important;}\n                  body,table,td,a{\n                    -webkit-text-size-adjust:100%;\n                    -ms-text-size-adjust:100%;\n                    -webkit-font-smoothing: antialiased;\n                  }\n                  table,td{\n                    mso-table-lspace:0pt;\n                    mso-table-rspace:0pt;\n                  }\n                  img{\n                    -ms-interpolation-mode:bicubic;\n                  }\n                  body{\n                    margin:0;\n                    padding:0;\n                  }\n                  img{\n                    border:0;\n                    height:auto;\n                    line-height:100%;\n                    outline:none;\n                    text-decoration:none;\n                  }\n                  table{\n                    border-collapse:collapse !important;\n                  }\n                  body{\n                    height:100% !important;\n                    margin:0;\n                    padding:0;\n                    width:100% !important;\n                  }\n                \n                  .appleBody a{\n                    color: #0087DB !important;\n                    text-decoration: underline !important;;\n                  }\n                \n                  .appleFooter a{\n                    color: #343434 !important;\n                    text-decoration: none;\n                  }\n                  td[class=btn]{\n                    width:50% !important;\n                  }\n                \n                  span.preheader { display: none !important; }\n                  @media screen and (max-width: 525px){\n                    table[class=wrapper]{\n                      width:100% !important;\n                    }\n                  \n                  }\t/*@media screen and (max-width: 525px){\n                    td[class=wrapper]{\n                      width:100% !important;\n                    }*/\n                  \n                  @media screen and (max-width: 525px){\n                    td[class=mobile-hide]{\n                      display:none;\n                    }\n                  \n                  }\n                  @media screen and (max-width: 525px){\n                    img[class=mobile-show]{\n                      display:block !important;\n                      height:60px !important;\n                      width:60px !important;\n                      overflow:auto !important;\n                    }\n                  \n                  }\n                  @media screen and (max-width: 525px){\n                    img[class=mobile-hide]{\n                      display:none !important;\n                    }\n                  \n                  }\t\n                  @media screen and (max-width: 525px){\n                    img[class=img-max]{\n                      max-width:100% !important;\n                      width:100% !important;\n                      height:auto !important;\n                    }\n                  \n                  }\t\n                  @media screen and (max-width: 525px){\n                    img[class=img-picture]{\n                      max-width:60% !important;\n                      width:60% !important;\n                      height:auto !important;\n                      float:right !important;\n                    }\n                  \n                  }\t\n                  @media screen and (max-width: 525px){\n                    table[class=responsive-table]{\n                      width:100%!important;\n                    }\n                  \n                  }\t\n                  @media screen and (max-width: 525px){\n                    table[class=responsive-column]{\n                      width:100%!important;\n                      padding:0px 0px 15px 0px !important;\n                      display:block !important;\n                    }\n                  }\t\n                  @media screen and (max-width: 525px){\n                    td[class=top-padding]{\n                      padding: 0px 0px 10px 0px !important;\n                    }\n                  \n                  } \n                  @media screen and (max-width: 525px){\n                    td[class=slice-padding]{\n                      padding:0px 15px 0px 15px !important;\n                    }\n                  \n                  }\t\n                  @media screen and (max-width: 525px){\n                    td[class=smaller-padding]{\n                      padding:15px 0px 15px 0px !important;\n                    }\n                  \n                  }\n                  @media screen and (max-width: 525px){\n                    td[class=section-padding]{\n                      padding: 0px 10px 20px 10px !important;\n                    }\n                  }\n                  @media screen and (max-width: 525px){\n                    .height {\n                      height: 100% !important;\n                    }        \n                  }\n                  @media screen and (max-width: 525px){\n                    td[class=mobile-wrapper]{\n                      padding:0 !important;\n                    }\n                  \n                  }\t\n                  @media screen and (max-width: 525px){\n                    td[class=title]{\n                      font-size: 16px !important;\n                    }\n                  \n                  }\t\n                  @media screen and (max-width: 525px){\n                    td[class=btn]{\n                      width:80% !important;\n                    }\n                  \n                  }\n                </style>\n                <!--[if gte mso 9]>\n                  <style type=\"text/css\">\n                    .img-max {\n                        width: 246px !important;\n                    }\n                  </style>\n                <![endif]-->\n              </head>\n            \n              <body style=\"margin: 0; padding: 0;\">\n                <div style=\"display:none !important; font-size:1px; color:#FFFFFF;\">\n                  <!-- It&#039;s on the way to XXXXX, Really Good Emails -->\n                </div>\n                <!-- HEADER LOGO -->\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                  <tr>\n                    <td bgcolor=\"#00C186\" style=\"background-color: #00C186;\">\n                      <div align=\"center\" style=\"padding: 0px 20px 0px 20px;\">\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                          <tr>\n                            <td bgcolor=\"#00C186\" style=\"background-color: #00C186;\">\n                              <div align=\"center\" style=\"padding: 0px 20px 0px 20px;\">\n                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"wrapper\" align=\"center\">\n                                  <tr align=\"center\">\n                                    <td style=\"padding: 10px 0px 10px 0px; text-align: center; width: 400px;\" class=\"logo\" align=\"center\">\n                                      <a>\n                                        <!-- <img alt=\"header\" src=\"http://media.firebox.com/i/nl/fb_light.png\" width=\"130\" border=\"0\"> -->\n                                        <img alt=\"header\" [src]=\"companyLogo\" width=\"70\" border=\"0\">\n                                      </a>\n                                    </td>\n                                  </tr>\n                                  <!-- <tr align=\"center\">\n                                    <td style=\"padding: 0px 0px 15px 0px; text-align: center; width: 400px;\" class=\"logo\" align=\"center\"> -->\n                                      <!-- <img src=\"https://media.firebox.com/i/transactional/header-dispatch.png\" width=\"100%\" class=\"img-max\"> -->\n                                    <!-- </td>\n                                  </tr> -->\n                                </table>\n                              </div>\n                            </td>\n                          </tr>\n                        </table>   \n                      </div>\n                    </td>\n                  </tr>\n                </table>\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" *ngIf=\"businessSettings.bookingConfirmationHeader != ''\">\n                  <tr>\n                    <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 20px 15px 20px 15px;\" class=\"top-padding\">\n                      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                        <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                        <tr>\n                          <td>\n                            <!-- TWO COLUMNS -->\n                            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                              <tr>\n                                <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                                    <tr>\n                                      <td valign=\"top\" align=\"left\">\n                                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                          <tr>\n                                            <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px; border: 1px solid #EFEFEF;\">\n                                              <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                                <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                                    <p [innerHtml]=\"businessSettings.bookingConfirmationHeader\"></p>\n                                                </tr>\n                                              </table>\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n                <!-- ORDER CONFIRMATION -->\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                  <tr>\n                    <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 5px 15px 5px 15px;\" class=\"top-padding\">\n                      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                        <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                        <tr>\n                          <td>\n                            <!-- TWO COLUMNS -->\n                            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                              <tr>\n                                <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                                    <tr>\n                                      <td valign=\"top\" align=\"left\">\n                                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                          <tr>\n                                            <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 15px; border: 1px solid #EFEFEF;\">\n                                              <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                                <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                                    <span style=\"color: #343434; text-transform: uppercase; font-size: 14px; -webkit-font-smoothing: auto; font-weight: bold;\" class=\"appleBody\">\n                                                      Booking date\n                                                    </span>\n                                                    <br />\n                                                    <span class=\"appleBody\">\n                                                      {{bookingDate}}\n                                                    </span>\n                                                  </td>\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: right; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                                    <span style=\"color: #343434; text-transform: uppercase; font-size: 14px; -webkit-font-smoothing: auto; font-weight: bold;\" class=\"appleBody\" *ngIf=\"data.row.id\">\n                                                      Booking no.\n                                                    </span>\n                                                    <br />\n                                                    <a href=\"#\" style=\"color: #0087DB !important;\">\n                                                      {{data.row.id}}\n                                                    </a>\n                                                  </td>\n                                                </tr>\n                                              </table>\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n                <!-- END ORDER CONFIRMATION -->\n                <!-- COPY SIMPLE SECTION-->\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                  <tr>\n                    <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 2px 15px;\" class=\"section-padding\">\n                      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                        <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                        <tr>\n                          <td>\n                            <!-- TWO COLUMNS -->\n                            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                              <tr>\n                                <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                                    <tr>\n                                      <td valign=\"top\" align=\"left\">\n                                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                          <tr>\n                                            <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                              <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                                <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                                <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 20px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                                    Guest Details\n                                                  </td>                                    \n                                                </tr>                                                                    \n                                                <!-- <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                                    Sent using Airmail\n                                                  </td>\n                                                </tr> -->                                  \n                                                <!--<tr cellspacing=\"0\" cellpadding=\"0\">\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                                    <span class=\"appleBody\">\n                                                      <a href=\"#\">\n                                                        More info\n                                                      </a>\n                                                    </span>\n                                                  </td>\n                                                </tr> \n                                                <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                                  <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px 20px 10px 0px; width: 400px;\">\n                                                    <a href=\"#\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0087DB; border-top: 12px solid #0087DB; border-bottom: 12px solid #0087DB; border-right: 18px solid #0087DB; border-left: 18px solid #0087DB; display: inline-block; color: #ffffff;\">\n                                                      Track my order\n                                                    </a>\n                                                  </td>\n                                                </tr> -->\n                                              </table>\n                                              <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; border: 1px solid lightgray\" class=\"responsive-table\" width=\"500\">\n                                                <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                                    Sr.\n                                                  </td>\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                                    Guest Name\n                                                  </td>\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                                    Phone No.\n                                                  </td>\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                                    Email\n                                                  </td>\n                                                </tr>\n                                                <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                                    1\n                                                  </td>\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                                    {{data.row.guestName}}\n                                                  </td>\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                                    {{data.row.guestMobile}}\n                                                  </td>\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                                    {{data.row.guestEmail}}\n                                                  </td>\n                                                </tr>\n                                              </table>                                \n                                              <!-- <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                                <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"5\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                                    Reporting Time: {{data.row.reportingTime}}\n                                                  </td>\n                                                </tr>\n                                              </table> -->\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n                <!-- END COPY SIMPLE SECTION-->          \n              <!-- COPY SIMPLE SECTION-->\n              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                <tr>\n                  <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 2px 15px;\" class=\"section-padding\">\n                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                      <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                      <tr>\n                        <td>\n                          <!-- TWO COLUMNS -->\n                          <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                              <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                                  <tr>\n                                    <td valign=\"top\" align=\"left\">\n                                      <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                        <tr>\n                                          <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                            <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                              <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                              <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 20px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                                  Hotel Details\n                                                </td>                                    \n                                              </tr>                                                                    \n                                              <!-- <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                                  Sent using Airmail\n                                                </td>\n                                              </tr> -->                                  \n                                              <!--<tr cellspacing=\"0\" cellpadding=\"0\">\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 14px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                                  <span class=\"appleBody\">\n                                                    <a href=\"#\">\n                                                      More info\n                                                    </a>\n                                                  </span>\n                                                </td>\n                                              </tr> \n                                              <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                                <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px 20px 10px 0px; width: 400px;\">\n                                                  <a href=\"#\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0087DB; border-top: 12px solid #0087DB; border-bottom: 12px solid #0087DB; border-right: 18px solid #0087DB; border-left: 18px solid #0087DB; display: inline-block; color: #ffffff;\">\n                                                    Track my order\n                                                  </a>\n                                                </td>\n                                              </tr> -->\n                                            </table>\n                                            <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; border: 1px solid lightgray\" class=\"responsive-table\" width=\"500\">\n                                              <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                                  Hotel Name\n                                                </td>\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                                  Address\n                                                </td>\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                                  Room\n                                                </td>\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #262626; font-size: 16px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 10px 10px 10px; -webkit-font-smoothing: antialiased; border: 1px solid;\">\n                                                  Occupancy\n                                                </td>\n                                              </tr>\n                                              <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                                  {{hotelDetails.hotelName}}\n                                                </td>\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                                  {{hotelDetails.address}}\n                                                </td>\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                                  {{hotelDetails.room}}\n                                                </td>\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 10px; border: 1px solid;\">\n                                                  {{hotelDetails.occupancy}}\n                                                </td>\n                                              </tr>\n                                            </table>                                \n                                            <!-- <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                              <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"5\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 15px; line-height: 20px; font-weight: normal; padding: 0px 0px 0px 0px;\">\n                                                  Reporting Time: {{data.row.reportingTime}}\n                                                </td>\n                                              </tr>\n                                            </table> -->\n                                          </td>\n                                        </tr>\n                                      </table>\n                                    </td>\n                                  </tr>\n                                </table>\n                              </td>\n                            </tr>\n                          </table>\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n              <!-- END COPY SIMPLE SECTION-->\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                  <tr>\n                    <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 5px 15px;\" class=\"section-padding\">\n                      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                        <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                        <tr>\n                          <td>\n                            <!-- TWO COLUMNS -->\n                            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                              <tr>\n                                <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                                    <tr>\n                                      <td valign=\"top\" align=\"left\">\n                                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                          <tr>\n                                            <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 10px; border: 1px solid #EFEFEF;\">\n                                              <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">\n                                                <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" class=\"title\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #343434; font-size: 18px; font-weight: normal; text-align: left; line-height: 1; padding: 0px 0px 15px 0px; text-transform: uppercase; -webkit-font-smoothing: auto; font-weight: bold;\">\n                                                    Booked By\n                                                  </td>                                    \n                                                </tr>                    \n                                              </table>\n                                              <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"500\">                                  \n                                                <tr cellspacing=\"0\" cellpadding=\"0\">                                    \n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                                    {{data.row.bookByName}}\n                                                  </td>\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                                    {{data.row.bookByNo}}\n                                                  </td>\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #323232 !important; font-size: 16px; line-height: 20px; font-weight: normal; padding: 0px 10px 10px 0px;\">\n                                                    {{data.row.bookByEmail}}\n                                                  </td>\n                                                </tr>\n                                              </table>\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              \n                <!-- ROW CS CONTACT SECTION-->\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                    <tr>\n                      <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 0px 15px 5px 15px;\" class=\"section-padding\">\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                          <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                          <tr>\n                            <td>\n                              <!-- TWO COLUMNS -->\n                              <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                                <tr>\n                                  <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                                    <!-- LEFT COLUMN -->\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"290\" align=\"left\" class=\"responsive-table\">\n                                      <tr>\n                                        <td valign=\"top\" align=\"left\">\n                                          <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                            <tr>\n                                              <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" height=\"250\" width=\"290\" class=\"wrapper\" style=\"border: 1px solid #EFEFEF; width: 400px;\">\n                                                <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width: 100%;\" class=\"responsive-table\">\n                                                  <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                    <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #333333; font-size: 18px; font-weight: bold; text-align: center; padding: 15px 20px 10px 20px; width: 400px;\">\n                                                      <img alt=\"\" src=\"https://media.firebox.com/i/transactional/icon-customer-service.png\" width=\"100\">\n                                                    </td>\n                                                  </tr>\n                                                  <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                    <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #333333; font-size: 16px; font-weight: bold; text-align: center; padding: 0px 20px 10px 20px; width: 400px; text-transform: uppercase;\">\n                                                      Got a query?\n                                                      <br />\n                                                      Get in touch\n                                                    </td>\n                                                  </tr>\n                                                  <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                    <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 0px 20px 20px 20px; color: #888888 !important; line-height: 1.44; font-size: 14px;\">\n                                                      Hit us up on the numbers featured\n                                                    </td>\n                                                  </tr>\n                                                  <!-- <tr border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                                    <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 0px 20px 20px 20px; width: 400px;\">\n                                                      <a href=\"https://www.firebox.com/admin/faqs?itc=915&utm_source=email&utm_medium=transactional&utm_campaign=order_dispatch\" target=\"_blank\" style=\"font-size: 16px; font-family:'sofia', Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; font-weight: bold; text-transform: uppercase; background-color: #0099E0; border-top: 12px solid #0099E0; border-bottom: 12px solid #0099E0; border-right: 18px solid #0099E0; border-left: 18px solid #0099E0; display: inline-block; color: #ffffff;\">\n                                                        FAQ ME\n                                                      </a>\n                                                    </td>\n                                                  </tr> -->\n                                                </table>\n                                              </td>\n                                            </tr>\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                    <!-- RIGHT COLUMN -->\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"290\" align=\"right\" class=\"responsive-table\">\n                                      <tr>\n                                        <td valign=\"top\" align=\"left\">\n                                          <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                            <tr>\n                                              <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" height=\"250\" width=\"290\" class=\"wrapper\" style=\"border: 1px solid #EFEFEF; width: 400px;\">\n                                                <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width: 100%;\" class=\"responsive-table\">\n                                                  <!-- STYLE WIDTH FOR CHROME BROWSER -->\n                                                  <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                    <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 10px 20px 10px 20px; color: #343434; text-transform: uppercase; width: 400px;\">\n                                                      Phone\n                                                    </td>\n                                                  </tr>\n                                                  <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                    <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"font-family:'sofia', Helvetica, Arial, sans-serif; color: #0087DB; font-size: 16px; font-weight: bold; text-align: center; padding: 0px 20px 10px 20px;\">\n                                                      <span class=\"appleBody\">{{companyProfile.phone}}</span>                                                                                                                \n                                                    </td>\n                                                  </tr>\n                                                  <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                    <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; padding: 10px 20px 10px 20px; color: #343434; text-transform: uppercase;\">\n                                                      Email\n                                                    </td>\n                                                  </tr>\n                                                  <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                    <td cellspacing=\"0\" cellpadding=\"0\" colspan=\"4\" style=\"text-align: center; font-family:'sofia', Helvetica, Arial, sans-serif; color: #0087DB; padding: 0px 20px 20px 20px; font-weight: bold; font-size: 16px;\">\n                                                      <span class=\"appleBody\">\n                                                        <a style=\"color: #0087DB; text-decoration: none !important;\">\n                                                          {{companyProfile.email}}\n                                                        </a>\n                                                      </span>\n                                                    </td>\n                                                  </tr>\n                                                </table>\n                                              </td>\n                                            </tr>\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </table>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n                    </tr>\n                  </table>\n                <!-- END CS CONTACT ROW SECTION-->\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" *ngIf=\"termsAndConditions != ''\">\n                    <tr>\n                      <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 20px 15px 20px 15px;\" class=\"top-padding\">\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                          <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                          <tr>\n                            <td>\n                              <!-- TWO COLUMNS -->\n                              <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                                <tr>\n                                  <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                                      <tr>\n                                        <td valign=\"top\" align=\"left\">\n                                          <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                            <tr>\n                                              <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px; border: 1px solid #EFEFEF;\">\n                                                <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                                  <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                    <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                                      <p><b>Terms & Conditions for Hotel Booking:</b></p>\n                                                      <p [innerHTML]=\"termsAndConditions\"></p>\n                                                    </td>\n                                                  </tr>\n                                                </table>\n                                              </td>\n                                            </tr>\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </table>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n                    </tr>\n                  </table>\n                <!-- FOOTER -->\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                    <tr>\n                      <td bgcolor=\"#ffffff\" align=\"center\" style=\"padding: 20px 0px;\">\n                        <!-- UNSUBSCRIBE COPY -->\n                        <table width=\"600\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\" class=\"responsive-table\">\n                          <tr>\n                            <td width=\"100%\" align=\"center\" style=\"padding: 0 0 20px 0; font-size: 14px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#888888;\">\n                              Until next time, <strong>Techsimians Team</strong>\n                            </td>\n                          </tr>\n                          <!-- <tr>\n                            <td>\n                              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                                <tr width=\"183\">\n                                  <td>\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                                      <tr width=\"157\">\n                                        <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                          <a href=\"https://www.facebook.com/Firebox\" target=\"blank\">\n                                            <img src=\"http://media.firebox.com/i/nl/facebook_icon.png\" width=\"16\" height=\"16\">\n                                          </a>\n                                        </td>\n                                        <td width=\"19\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                          <a href=\"https://twitter.com/Firebox\" target=\"blank\">\n                                            <img src=\"http://media.firebox.com/i/nl/twitter_icon.png\" width=\"19\" height=\"16\">\n                                          </a>\n                                        </td>\n                                        <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                          <a href=\"https://www.instagram.com/Firebox/\" target=\"blank\">\n                                            <img src=\"http://media.firebox.com/i/nl/instagram_icon.png\" width=\"16\" height=\"16\">\n                                          </a>\n                                        </td>\n                                        <td width=\"16\" align=\"center\" style=\"padding: 0 10px 20px 10px;\">\n                                          <a href=\"https://www.pinterest.com/firebox/\" target=\"blank\">\n                                            <img src=\"http://media.firebox.com/i/nl/pinterest_icon.png\" width=\"16\" height=\"16\">\n                                          </a>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </table>\n                            </td>\n                          </tr> -->\n                          <tr>\n                            <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 0 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                              <span class=\"appleBody\">\n                                <strong>Techsimians</strong><br /> Mumbai, Maharashtra, India.\n                              </span>\n                            </td>\n                          </tr>\n                          <!-- <tr>\n                            <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 20px 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                              <span class=\"appleBody\">\n                                VAT Reg. No.: 798 6593 41 Registered in England & Wales, No. 3874477\n                              </span>\n                            </td>\n                          </tr> -->\n                          <tr>\n                            <td width=\"100%\" align=\"center\" style=\"padding: 0 10px 20px 10px; font-family:'sofia', Helvetica, Arial, sans-serif; line-height: 24px; color: #888888; font-size: 12px;\">\n                              <span class=\"appleBody\" style=\"color:#888888;\">\n                                <a style=\"color:#888888 !important;\">info@yourfleetman.com</a>\n                              </span>\n                              <span class=\"hide-mobile\">&nbsp; | &nbsp;</span>\n                              <span class=\"appleBody break\" style=\"color:#888888;\">\n                                <a href=\"http://www.techsimians.com\"\n                                  style=\"color: #888888 !important;\">www.techsimians.com</a>\n                              </span>\n                              <span class=\"hide-mobile\">&nbsp; | &nbsp;</span>\n                              <span class=\"appleBody break\" style=\"color:#888888;\">\n                                8080 425 120\n                              </span>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>                \n                  </tr>\n                </table>\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" *ngIf=\"businessSettings.bookingConfirmationFooter != ''\">\n                  <tr>\n                    <td bgcolor=\"#F6F6F6\" align=\"center\" style=\"padding: 20px 15px 20px 15px;\" class=\"top-padding\">\n                      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" class=\"responsive-table\">\n                        <!-- LONGER WIDTH THAN 600 FOR OUTLOOK 07,10,11 -->\n                        <tr>\n                          <td>\n                            <!-- TWO COLUMNS -->\n                            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                              <tr>\n                                <td valign=\"top\" style=\"padding: 0;\" class=\"mobile-wrapper\">\n                                  <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" align=\"left\" class=\"responsive-table\">\n                                    <tr>\n                                      <td valign=\"top\" align=\"left\">\n                                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"responsive-table\">\n                                          <tr>\n                                            <td align=\"center\" bgcolor=\"#FFFFFF\" valign=\"middle\" width=\"600\" class=\"wrapper\" style=\"padding: 20px; border: 1px solid #EFEFEF;\">\n                                              <table cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%;\" class=\"responsive-table\" width=\"300\" valign=\"top\">\n                                                <tr cellspacing=\"0\" cellpadding=\"0\">\n                                                  <td cellspacing=\"0\" cellpadding=\"0\" width=\"33%\" style=\"text-align: left; font-family:'sofia', Helvetica, Arial, sans-serif; color: #888888 !important; font-size: 16px; line-height: 20px; font-weight: normal;\">\n                                                    <p [innerHTML]=\"businessSettings.bookingConfirmationFooter\"></p>\n                                                  </td>\n                                                </tr>\n                                              </table>\n                                            </td>\n                                          </tr>\n                                        </table>\n                                      </td>\n                                    </tr>\n                                  </table>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </body>\n            </html>\n          </div></div>\n          </div></div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n<div class=\"row ptb-10\">\n  <div class=\"col-lg-12 col-12\" style=\"text-align:right;\">\n    <!-- <button mat-raised-button color=\"primary\" (click)=\"sendMail(template)\">Send Mail</button> -->\n    <button mat-raised-button color=\"warn\"(click)=\"closeDialog()\">Close</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/hotels/sendhotelconfirmation/sendhotelconfirmation.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Share+Tech+Mono);\nb {\n  display: inline-block; }\nbody,\np {\n  padding: 0;\n  margin: 0; }\n.blockDiv {\n  margin: 0px 20px 0px 20px; }\nbody {\n  background: #272726; }\nlabel {\n  text-align: center;\n  font-family: Helvetica, sans-serif;\n  font-size: 1.25em;\n  color: #000000;\n  display: block; }\ndiv#controls {\n  padding: 3em;\n  max-width: 1200px;\n  margin: 0 auto; }\ndiv#controls div {\n  float: left; }\ndiv#controls div#call-controls,\ndiv#controls div#info {\n  width: 16em;\n  margin: 0 11.5em;\n  text-align: center; }\ndiv#controls div#info div#output-selection {\n  display: none; }\ndiv#controls div#info a {\n  font-size: 1.1em;\n  color: black;\n  text-decoration: underline;\n  cursor: pointer; }\ndiv#controls div#info select {\n  width: 300px;\n  height: 60px;\n  margin-bottom: 2em; }\ndiv#controls div#info label {\n  width: 300px; }\ndiv#controls div#call-controls div#volume-indicators {\n  display: none;\n  padding: 10px;\n  margin-top: 20px;\n  width: 500px;\n  text-align: center; }\ndiv#controls div#call-controls div#volume-indicators > div {\n  display: block;\n  height: 20px;\n  width: 0; }\ndiv#controls p.instructions {\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: Helvetica-LightOblique, Helvetica, sans-serif;\n  font-style: oblique;\n  font-size: 1.25em;\n  color: #000000; }\ndiv#controls div#info #client-name {\n  text-align: center;\n  margin-bottom: 1em;\n  font-family: \"Helvetica Light\", Helvetica, sans-serif;\n  font-size: 1.25em;\n  color: #000000; }\ndiv#controls button {\n  width: 15em;\n  height: 2.5em;\n  margin-top: 1.75em;\n  border-radius: 1em;\n  font-family: \"Helvetica Light\", Helvetica, sans-serif;\n  font-size: .8em;\n  font-weight: lighter;\n  outline: 0; }\ndiv#controls button:active {\n  position: relative;\n  top: 1px; }\ndiv#controls div#call-controls {\n  display: none; }\ndiv#controls div#call-controls input {\n  font-family: Helvetica-LightOblique, Helvetica, sans-serif;\n  font-style: oblique;\n  font-size: 1em;\n  width: 100%;\n  height: 2.5em;\n  padding: .5em;\n  display: block; }\ndiv#controls div#call-controls button {\n  color: black;\n  background: 0 0;\n  border: 1px solid #000000; }\ndiv#controls div#call-controls button#button-hangup {\n  display: none; }\ndiv#controls div#log {\n  border: 1px solid #000000;\n  width: 35%;\n  height: 9.5em;\n  margin-top: 2.75em;\n  text-align: center;\n  padding: 1.5em;\n  float: right;\n  overflow-y: scroll; }\ndiv#controls div#log p {\n  color: #686865;\n  font-family: 'Share Tech Mono', 'Courier New', Courier, fixed-width;\n  font-size: 1.25em;\n  line-height: 1.25em;\n  margin-left: 1em;\n  text-indent: -1.25em;\n  width: 90%; }\n.whatsappBlock {\n  text-align: center; }\n.whatsappTo {\n  margin-left: -188px; }\n.whatsappTextArea {\n  width: 300px;\n  height: 200px; }\n.checkbox {\n  margin-left: 30px; }\n.driver {\n  margin-top: 5px; }\n.driverName {\n  margin: 10px 90px 5px 0px; }\n.driverNumber {\n  margin: 10px 87px 5px 0px; }\n.callTable {\n  border-collapse: collapse;\n  width: 100%; }\n.callCell {\n  padding: 5px;\n  border: 1px solid lightgrey;\n  line-height: 40px; }\n.mat-checkbox-inner-container {\n  margin-right: 3px !important; }\n.mat-checkbox {\n  margin-right: 15px !important; }\n"

/***/ }),

/***/ "./src/app/pages/hotels/sendhotelconfirmation/sendhotelconfirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendhotelconfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__circles_companyprofile_companyprofile_service__ = __webpack_require__("./src/app/pages/circles/companyprofile/companyprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__displayhotels_hotel_service__ = __webpack_require__("./src/app/pages/hotels/displayhotels/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__duties_call_call_service__ = __webpack_require__("./src/app/pages/duties/call/call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
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













var SendhotelconfirmationComponent = (function () {
    function SendhotelconfirmationComponent(data, http, dialog, auth, companyProfileService, hotelService, callService, snackBar, msgService, customerService, uploadService, _sanitizer) {
        this.data = data;
        this.http = http;
        this.dialog = dialog;
        this.auth = auth;
        this.companyProfileService = companyProfileService;
        this.hotelService = hotelService;
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
        this.emailAttachments = false;
        this.attachments = [];
        this.addedAttachments = [];
        this.attachmentNames = [];
        this.mailSubject = "Your booking has been confirmed";
        this.bookingDate = new Date().toISOString().split('T')[0];
        this.businessSettings = {};
        this.user = {};
        this.companyProfile = {};
        this.hotelDetails = [];
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
        this.customerLogCount = 0;
        this.driverLogCount = 0;
        this.customLogCount = 0;
        this.logDisplay = [];
        this.logs = [];
        this.mailPassenger = false;
        this.customer = {};
        this.companyLogo = '';
        this.termsAndConditions = '';
    }
    SendhotelconfirmationComponent.prototype.ngAfterViewInit = function () {
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
    SendhotelconfirmationComponent.prototype.checkNumber = function (data) {
        try {
            var notify = JSON.parse(data.notification.body);
            return notify.number;
        }
        catch (e) {
            return 0;
        }
    };
    SendhotelconfirmationComponent.prototype.ngOnInit = function () {
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
                _this.hotelService.getHotelTermsAndConditions(_this.booking).subscribe(function (data) {
                    console.log(data);
                    if (data[0].termsAndConditions == null || data[0].termsAndConditions == '') {
                        console.log(_this.businessSettings.defaultTermsAndConditions);
                        _this.termsAndConditions = _this.businessSettings.defaultTermsAndConditions;
                    }
                    else {
                        _this.termsAndConditions = data[0].termsAndConditions;
                    }
                });
                _this.hotelService.getHotelBookingForMail(_this.data.row).subscribe(function (data) {
                    _this.hotelDetails = data[0];
                    console.log(data);
                    _this.allPassengers[0] = {
                        passengerNo: _this.hotelDetails.guestMobile,
                        passenger: _this.hotelDetails.guestName,
                        passengerEmail: _this.hotelDetails.guestEmail,
                    };
                    _this.allBookedBy[0] = {
                        bookByName: _this.hotelDetails.bookByName,
                        bookByNo: _this.hotelDetails.bookByNo,
                        bookByEmail: _this.hotelDetails.bookByEmail,
                    };
                });
                _this.callService.checkDevice(_this.user).subscribe();
                console.log(_this.data);
                _this.hotelService.getHotelFiles({ id: _this.booking.id }).subscribe(function (data) {
                    _this.emailAttachments = true;
                    _this.attachments = data;
                });
                // this.callService.getAllPassengers({bookingId:this.data.bid}).subscribe(data=>{
                // })
                // this.callService.getAllBookedBy({bookingId:this.data.bid}).subscribe(data=>{
                // })
                _this.callService.getHotelBookingLogs({ hotelBookingId: _this.booking.id }).subscribe(function (data) {
                    _this.logDisplay = data;
                });
                // this.callService.getLogs({hotelBookingId:this.data.row.id,type:'driver'}).subscribe(data=>{
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
                    _this.message = "For: " + _this.hotelDetails.guestName.replace('+', '%2B') + " (" + _this.hotelDetails.guestMobile + ").%0aHotel Name: " + _this.hotelDetails.hotelName.replace('&', 'and') + ".%0aAddress: " + _this.hotelDetails.address.replace('&', 'and') + ".%0aRoom: " + _this.hotelDetails.room + ".%0aOccupancy: " + _this.hotelDetails.occupancy + ".%0aYour Booking ID is " + _this.hotelDetails.id;
                    _this.whatsappMessage = "For: " + _this.hotelDetails.guestName.replace('+', '%2B') + " (" + _this.hotelDetails.guestMobile + ").%0aHotel Name: " + _this.hotelDetails.hotelName.replace('&', 'and') + ".%0aAddress: " + _this.hotelDetails.address.replace('&', 'and') + ".%0aRoom: " + _this.hotelDetails.room + ".%0aOccupancy: " + _this.hotelDetails.occupancy + ".%0aYour Booking ID is " + _this.hotelDetails.id + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                }
                else {
                    _this.message = "For: " + _this.hotelDetails.guestName.replace('+', '%2B') + " (" + _this.hotelDetails.guestMobile + ").%0aHotel Name: " + _this.hotelDetails.hotelName.replace('&', 'and') + ".%0aAddress: " + _this.hotelDetails.address.replace('&', 'and') + ".%0aRoom: " + _this.hotelDetails.room + ".%0aOccupancy: " + _this.hotelDetails.occupancy;
                    _this.whatsappMessage = "For: " + _this.hotelDetails.guestName.replace('+', '%2B') + " (" + _this.hotelDetails.guestMobile + ").%0aHotel Name: " + _this.hotelDetails.hotelName.replace('&', 'and') + ".%0aAddress: " + _this.hotelDetails.address.replace('&', 'and') + ".%0aRoom: " + _this.hotelDetails.room + ".%0aOccupancy: " + _this.hotelDetails.occupancy + ".%0a%0a--%0aFrom: " + _this.user.companyName + ".%0aThis is a system generated message. Please do not respond. For any queries contact " + _this.companyProfile.phone;
                }
            });
        });
    };
    SendhotelconfirmationComponent.prototype.makeAppCall = function (number) {
        var temp = {
            userId: this.user.id,
            number: number,
            ownerId: this.user.ownerId,
            date: __WEBPACK_IMPORTED_MODULE_7_moment__().format("YYYY-MM-DD")
        };
        this.callService.makeCall(temp);
    };
    SendhotelconfirmationComponent.prototype.sendMail = function (div1) {
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
            console.log(data);
            _this.snackBar.open("Mail Sent", "X", { duration: 3000 });
            _this.dialog.closeAll();
        });
        console.log(this.mailSubject);
        console.log(this.mailBody.innerHTML);
    };
    SendhotelconfirmationComponent.prototype.messageSize = function () {
        this.messageLength = Math.ceil(this.message.length / 160);
        return this.messageLength;
    };
    SendhotelconfirmationComponent.prototype.closeDialog = function () {
        this.callService.unsubscribe(this.user).subscribe();
        this.dialog.closeAll();
    };
    SendhotelconfirmationComponent.prototype.sendSMS = function (event, number, type, name) {
        if (event.checked) {
            if (type == 'bookedBy') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'passenger') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'customer') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "SMS was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customerLogCount = this.customerLogCount + 1;
            }
            if (type == 'custom') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "SMS was sent to " + number + " on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
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
    SendhotelconfirmationComponent.prototype.sendWhatsApp = function (event, number, type, name) {
        if (event.checked) {
            if (type == 'bookedBy') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'passenger') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'customer') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "WhatsApp was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.customerLogCount = this.customerLogCount + 1;
            }
            if (type == 'custom') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "WhatsApp was sent to " + number + " on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
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
    SendhotelconfirmationComponent.prototype.sendEmail = function (event, email, type, name) {
        if (event.checked) {
            if (type == 'bookedBy') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.bookedByArray.push(email);
                this.bookByLogCount = this.bookByLogCount + 1;
            }
            if (type == 'passenger') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
                this.passengerArray.push(email);
                this.passengerLogCount = this.passengerLogCount + 1;
            }
            if (type == 'customer') {
                this.logs.push({ hotelBookingId: this.data.row.id, log: "Email was sent to " + name + " (" + type + ") on " + __WEBPACK_IMPORTED_MODULE_7_moment__().format("DD-MM-YYYY") + " at " + new Date().toLocaleTimeString() + " by " + this.user.name, ownerId: this.user.ownerId });
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
    SendhotelconfirmationComponent.prototype.send = function () {
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
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.hotelDetails.checkInDate).format("DD-MM-YYYY"),
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
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.hotelDetails.checkInDate).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.booking.id
                };
            }
            this.http.post('/Voip/sendMailHotelConfirm', temp).map(function (res) { return res.json(); }).subscribe(function (data) {
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
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.hotelDetails.checkInDate).format("DD-MM-YYYY"),
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
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.hotelDetails.checkInDate).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.booking.id
                };
            }
            this.http.post('/Voip/sendMailHotelConfirm', temp).map(function (res) { return res.json(); }).subscribe(function (data) {
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
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.hotelDetails.checkInDate).format("DD-MM-YYYY"),
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
                    subject: 'Booking details for ' + __WEBPACK_IMPORTED_MODULE_7_moment__(this.hotelDetails.checkInDate).format("DD-MM-YYYY"),
                    mailBody: this.dutyPassengerTemplate.nativeElement.innerHTML,
                    key: this.addedAttachments,
                    bookingId: this.booking.id
                };
            }
            this.http.post('/Voip/sendMailHotelConfirm', temp).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
            }, function (err) { }, function () {
                _this.snackBar.open("Email Sent", "X", { duration: 3000 });
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
    SendhotelconfirmationComponent.prototype.insertLog = function () {
        var _this = this;
        this.logs.forEach(function (element) {
            _this.callService.insertHotelBookingLogs(element).subscribe(function (data) {
                console.log(data);
            });
        });
    };
    SendhotelconfirmationComponent.prototype.addAttachments = function (event, key) {
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
    ], SendhotelconfirmationComponent.prototype, "dutyPassengerTemplate", void 0);
    SendhotelconfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sendhotelconfirmation',
            template: __webpack_require__("./src/app/pages/hotels/sendhotelconfirmation/sendhotelconfirmation.component.html"),
            styles: [__webpack_require__("./src/app/pages/hotels/sendhotelconfirmation/sendhotelconfirmation.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__circles_companyprofile_companyprofile_service__["a" /* CompanyprofileService */],
            __WEBPACK_IMPORTED_MODULE_5__displayhotels_hotel_service__["a" /* HotelService */],
            __WEBPACK_IMPORTED_MODULE_6__duties_call_call_service__["a" /* CallService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_snack_bar__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_9__messaging_service__["a" /* MessagingService */],
            __WEBPACK_IMPORTED_MODULE_10__masters_customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_11__fileupload_service__["a" /* FileuploadService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["DomSanitizer"]])
    ], SendhotelconfirmationComponent);
    return SendhotelconfirmationComponent;
}());



/***/ }),

/***/ "./src/app/pages/hotels/viewhotelbooking/viewhotelbooking.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-12\">\n      <nb-card>\n        <nb-card-header>Booking Details</nb-card-header>\n        <nb-card-body>\n          <div class=\"container\">            \n            <div class=\"row pb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <b>Billed To:</b> {{bookHotelData.customerName}}\n              </div>\n              <div class=\"col-lg-6 col-12\">                \n                <b>Name (Booked By):</b> {{bookHotelData.bookByName}}\n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-6 col-12\">                \n                <b>Phone No (Billed To):</b> {{bookHotelData.billedToNo}}\n              </div>\n              <div class=\"col-lg-6 col-12\">                \n                <b>Email Id (Billed To):</b> {{bookHotelData.billedToEmail}}                                  \n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-6 col-12\">                \n                <b>Phone No (Booked By):</b> {{bookHotelData.bookByNo}}                                  \n              </div>\n              <div class=\"col-lg-6 col-12\">\n                <b>Email Id (Booked By):</b> {{bookHotelData.bookByEmail}}                  \n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-6 col-12\">                \n                <b>Room:</b> {{bookHotelData.room}}                  \n              </div>\n              <div class=\"col-lg-6 col-12\">                \n                <b>Occupancy:</b> {{bookHotelData.occupancy}}              \n              </div>\n            </div>\n          </div>\n        </nb-card-body>\n      </nb-card>\n    </div>\n    <div class=\"col-lg-6 col-12\">\n      <nb-card>\n        <nb-card-header>Guest Details</nb-card-header>\n        <nb-card-body>\n          <div class=\"container\">\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-6 col-12\">                \n                <b>Guest Name:</b> {{bookHotelData.guestName}}                  \n              </div>\n              <div class=\"col-lg-6 col-12\">                \n                <b>Conf. No.:</b> {{bookHotelData.confNo}}                \n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-6 col-12\">\n                <b>Mobile No.:</b> {{bookHotelData.guestMobile}}                  \n              </div>\n              <div class=\"col-lg-6 col-12\">                \n                <b>Email:</b> {{bookHotelData.guestEmail}}                  \n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-6 col-12\">                \n                <b>Check In Date:</b> {{bookHotelData.checkInDate | date:'dd-MM-yyyy'}}                  \n              </div>\n              <div class=\"col-lg-6 col-12\">                \n                <b>Check Out Date:</b> {{bookHotelData.checkOutDate | date:'dd-MM-yyyy'}}\n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-6 col-12\">                  \n                <b>Check-in time:</b> {{bookHotelData.checkInTime | date:'hh:mm a'}}  \n              </div>\n              <div class=\"col-lg-6 col-12\">                  \n                <b>Check-out time:</b> {{bookHotelData.checkOutTime | date:'hh:mm a'}}\n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-6 col-12\">                \n                <b>Nights:</b> {{bookHotelData.nights}}                \n              </div>\n              <div class=\"col-lg-6 col-12\">                \n                <b>No. of People:</b> {{bookHotelData.noOfPeople}}                  \n              </div>\n            </div>            \n          </div>\n        </nb-card-body>\n      </nb-card>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-12\">\n      <nb-card>      \n        <nb-card-body>\n          <div class=\"container\">\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-4 col-12\">                \n                <b>Inclusion:</b> {{bookHotelData.inclusion}}                  \n              </div>\n              <div class=\"col-lg-4 col-12\">                \n                <b>Rate:</b> {{bookHotelData.rate}}                  \n              </div>\n              <div class=\"col-lg-4 col-12\">                \n                <b>Amount:</b> {{bookHotelData.amount}}                  \n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-4 col-12\">                \n                <b>Payment Mode:</b> {{bookHotelData.paymentMode}}                  \n              </div>\n              <div class=\"col-lg-4 col-12\"></div>\n              <div class=\"col-lg-4 col-12\">                \n                <b>Taxes:</b> {{bookHotelData.taxes}}                  \n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-4 col-12\">              \n                <b>Hotel Bill No.:</b> {{bookHotelData.hotelBillNo}}                  \n              </div>\n              <div class=\"col-lg-4 col-12\">                \n                <b>Hotel Amount:</b> {{bookHotelData.hotelAmount}}                  \n              </div>\n              <div class=\"col-lg-4 col-12\">                \n                <b>Total:</b> {{bookHotelData.total}}                  \n              </div>\n            </div>\n          </div>\n        </nb-card-body>\n      </nb-card>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-12\">\n      <nb-card>\n        <nb-card-header>Internal</nb-card-header>\n        <nb-card-body>\n          <div class=\"container\">\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-4 col-12\">              \n                <b>Inclusion:</b> {{bookHotelData.intInclusion}}              \n              </div>\n              <div class=\"col-lg-4 col-12\">                \n                <b>Hotel Rate:</b> {{bookHotelData.hotelRate}}                  \n              </div>\n              <div class=\"col-lg-4 col-12\">                \n                <b>Amount:</b> {{bookHotelData.intAmount}}                \n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-4 col-12\">                \n                <b>Agents:</b> {{bookHotelData.agents}}                  \n              </div>\n              <div class=\"col-lg-4 col-12\">                \n                <b>Commission:</b> {{bookHotelData.commission}}                \n              </div>\n              <div class=\"col-lg-4 col-12\">                \n                <b>Taxes:</b> {{bookHotelData.intTaxes}}                  \n              </div>\n            </div>\n            <div class=\"row pb-10\">\n              <div class=\"col-lg-4 col-12\"></div>\n              <div class=\"col-lg-4 col-12\"></div>\n              <div class=\"col-lg-4 col-12\">                \n                <b>Total:</b> {{bookHotelData.intTotal}}                  \n              </div>\n            </div>\n          </div>\n        </nb-card-body>\n      </nb-card>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"additionalCharges.length > 0\">\n    <div class=\"col-lg-12 col-12\">\n      <nb-card>\n        <nb-card-header>Additional Charges</nb-card-header>\n        <nb-card-body>                    \n          <div class=\"container\">\n            <div class=\"row ptb-10\">\n              <table class=\"table table-bordered\">\n                <thead>\n                  <th>Description</th>\n                  <th>Quantity</th>\n                  <th>Rate</th>\n                  <th>Charges</th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let element of additionalCharges\">\n                    <td>{{element.description}}</td>\n                    <td>{{element.quantity}}</td>\n                    <td>{{element.additionalChargesRate}}</td>\n                    <td>{{element.charges}}</td>\n                  </tr>                  \n                </tbody>\n              </table>              \n            </div>            \n          </div>\n        </nb-card-body>\n      </nb-card>\n      <div style=\"bottom: 5%\" *ngIf=\"logs.length>0\">\n        <ul>\n          <li *ngFor=\"let element of logs\">\n            {{element.message}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"row ptb-10\">\n    <div class=\"col-lg-12 col-12\">\n      <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">Close</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/hotels/viewhotelbooking/viewhotelbooking.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/hotels/viewhotelbooking/viewhotelbooking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewhotelbookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__displayhotels_hotel_service__ = __webpack_require__("./src/app/pages/hotels/displayhotels/hotel.service.ts");
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




var ViewhotelbookingComponent = (function () {
    function ViewhotelbookingComponent(data, hotelService, dialog, activityLogs) {
        var _this = this;
        this.data = data;
        this.hotelService = hotelService;
        this.dialog = dialog;
        this.activityLogs = activityLogs;
        this.bookHotelData = {};
        this.additionalCharges = [];
        this.logs = [];
        if (data.row != null) {
            this.bookHotelData = data.row;
            this.hotelService.getHotelBookingsAdditionalCharges(this.bookHotelData).subscribe(function (data) {
                _this.additionalCharges = data;
            });
            this.activityLogs.getHotelLogs({ id: data.row.id }).subscribe(function (data) {
                _this.logs = data;
            });
        }
    }
    ViewhotelbookingComponent.prototype.ngOnInit = function () {
    };
    ViewhotelbookingComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    ViewhotelbookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'viewhotelbooking',
            template: __webpack_require__("./src/app/pages/hotels/viewhotelbooking/viewhotelbooking.component.html"),
            styles: [__webpack_require__("./src/app/pages/hotels/viewhotelbooking/viewhotelbooking.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__displayhotels_hotel_service__["a" /* HotelService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__activitylog_service__["a" /* ActivitylogService */]])
    ], ViewhotelbookingComponent);
    return ViewhotelbookingComponent;
}());



/***/ })

});
//# sourceMappingURL=hotels.module.chunk.js.map