import { Component, OnInit, Inject, HostListener, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Duty } from '../duty';
import { DutiesService } from '../duties.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { VehicleGroup, VehicleGroupsComponent } from '../../masters/vehiclegroups/vehiclegroups.component';
import { DutyType } from '../../masters/dutytype/duty-type';
import { DutyTypeService } from '../../masters/dutytype/duty-type.service';
import { Branch } from '../../operations/new-branch/new-branch.component';
import * as moment from 'moment'
import { NewBranchService } from '../../operations/new-branch/new-branch.service';
import { BookingsService } from '../../operations/bookings.service';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';
import { MouseEvent } from '@agm/core';
import { empty } from 'rxjs/observable/empty';
import { PricingService } from '../../masters/pricing/pricing.service';
import { Driver } from '../../masters/new-driver/driver';
import { Vehicle } from '../../masters/new-vehicles/vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dutiesedit',
  templateUrl: './dutiesedit.component.html',
  styleUrls: ['./dutiesedit.component.scss']
})
export class DutieseditComponent implements OnInit {

  passenger=new FormControl()
  passengerEmail=new FormControl()
  passengerNo=new FormControl()

  public latitudeReporting: number;
  public longitudeReporting: number;

  public latitudeDrop: number;
  public longitudeDrop: number;

  public searchControlReporting: FormControl;
  public searchControlDrop:FormControl;
  public zoom: number;
  reportingAddressMaps:boolean=false
  dropAddressMaps:boolean=false

  @ViewChild("searchReporting")
  public searchReportingRef: ElementRef;

  @ViewChild("searchDrop")
  public searchDropRef: ElementRef;

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  //MAPS API

  reportingDraggable = true;
  dropDraggable = true;
  
  mapClickedReporting(event: MouseEvent)
  {
    this.latitudeReporting = event.coords.lat;
    this.longitudeReporting = event.coords.lng;

    var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'location': latlng , componentRestrictions: {country: "in"}}, function (results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
          alert(status);
      }
      // This is checking to see if the Geoeode Status is OK before proceeding
      if (status == google.maps.GeocoderStatus.OK) {
          this.bookings.reportingAddress = (results[0].formatted_address);
          console.log(results[0].formatted_address)
      }
  }.bind(this));
  }

  markerReportingDragEnd(event: MouseEvent) {
    this.latitudeReporting = event.coords.lat;
    this.longitudeReporting = event.coords.lng;
    var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'location': latlng , componentRestrictions: {country: "in"} }, function (results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
          alert(status);
      }
      // This is checking to see if the Geoeode Status is OK before proceeding
      if (status == google.maps.GeocoderStatus.OK) {
          this.bookings.reportingAddress = (results[0].formatted_address);
          console.log(results[0].formatted_address)
      }
    }.bind(this));
  }

  mapClickedDrop(event: MouseEvent)
  {
    this.latitudeDrop = event.coords.lat;
    this.longitudeDrop = event.coords.lng;

    var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'location': latlng , componentRestrictions: {country: "in"} }, function (results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
          alert(status);
      }
      // This is checking to see if the Geoeode Status is OK before proceeding
      if (status == google.maps.GeocoderStatus.OK) {
          this.bookings.dropAddress = (results[0].formatted_address);
      }
  }.bind(this));
  }

  markerDropDragEnd(event: MouseEvent) {

    this.latitudeDrop = event.coords.lat;
    this.longitudeDrop = event.coords.lng;

    var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'location': latlng , componentRestrictions: {country: "in"} }, function (results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
          alert(status);
      }
      // This is checking to see if the Geoeode Status is OK before proceeding
      if (status == google.maps.GeocoderStatus.OK) {
          this.bookings.dropAddress = (results[0].formatted_address);
      }
    }.bind(this));
  }

  reportingAddressChange(temp){
    if(temp.checked==true){
      this.reportingAddressMaps=true
      this.geocodeReportingAddress();
    }
    else if(temp.checked==false){
      this.reportingAddressMaps=false
    }
  }

  geocodeReportingAddress() {
    var address = this.duty.reportingAddress

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address , componentRestrictions : {country: 'in'}}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        this.latitudeReporting=results[0].geometry.location.lat();
        this.longitudeReporting=results[0].geometry.location.lng();
        console.log(results[0])

      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    }.bind(this));

  }

  dropAddressChange(temp){
    if(temp.checked==true){
      this.dropAddressMaps=true
      this.geocodeDropAddress()
    }
    else if(temp.checked==false){
      this.dropAddressMaps=false
    }
  }

  geocodeDropAddress() {
    var address = this.duty.dropAddress

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address , componentRestrictions : {country: 'in'}}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        this.latitudeDrop=results[0].geometry.location.lat();
        this.longitudeDrop=results[0].geometry.location.lng();

      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    }.bind(this));

  }

  // MAPS API END


  duty:Duty={};
  myForm:FormGroup;
  user:User={}
  filteredOptions:any[]=[];
  valueChanges:any={
    dutyId:'',
    cname:'',
    price:'',
    bid:'',
    ownerDId:'',
    supplierDId:'', 
    startDate:'',
    endDate:'',
    bookBy:'', 
    bookByNo:'',
    bookByEmail:'',
    passenger:'',
    passengerNo:'', 
    passengerEmail:'',
    fromLoc:'',
    toLoc:'',
    reportingTime:'',
    startFromGarage:'',
    reportingAddress:'',
    dropAddress:'',
    shortReportingAddress:'',
    flightTrainNo:'',
    dispatchCenter:'',
    billTo:'',
    remarks:'',
    operatorNotes:'',
    label:'',
    vehicleGroup:'', // remove later
    vehicleId:'',
    vehicle:'',
    // driverNumber:'',
    driver:'',     
    dutyType:'',  //remove later
    status:'',
    vehicleGroupId:'',
    dutyTypeId:'',
    driverId:'',
    customerId:'',
    //placard

    title1:'',
    title2:'',
    subTitle:'',
    ownerId:'',
  }


  bookByCtrl:FormControl = new FormControl();
  bookBy:Observable<string[]>;
  bookByArr:any[];
  deletedPassenger=[];

  branches:Branch[];
  branch:any;
  branchCtrl:FormControl=new FormControl();

  drivers:Driver[];
  driver:any;
  driverCtrl:FormControl=new FormControl();

  vehicles:Vehicle[];
  vehicle:any;
  vehicleCtrl:FormControl=new FormControl();

  driverNumber:FormControl=new FormControl();

  passengers:Observable<string[]>
  passengerArr:any[]=[];

  fromCity: Observable<string[]>;
  toCity:Observable<string[]>;
  fromCityCtrl: FormControl = new FormControl();
  toCityCtrl: FormControl = new FormControl();
  vehicleGroups:VehicleGroup[];
  vehicleGroup:any;
  dutyType:any;
  dutyTypes:DutyType[];
  vehicleGroupCtrl: FormControl = new FormControl();
  dutyTypeCtrl: FormControl = new FormControl();
  passengerList:any[]

  city = [

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
  'Mumbai',];

  constructor(
    private dutyService:DutiesService,
    private dialog:MatDialog,
    private fb:FormBuilder,
    private auth:AuthService,
    private vehiclegroupsService:VehicleGroupsComponent,
    private dutytypeService:DutyTypeService,
    private snackbar:MatSnackBar,
    private branchService:NewBranchService,
    private bookingService:BookingsService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private pricingService: PricingService,
    private router:Router
  ) { }

  ngOnInit() {

    var editData = localStorage.getItem('dutyedit');
    this.duty = JSON.parse(editData);

    if(this.duty == undefined)
    {
      this.router.navigate(['/pages/duties']);
    }

    console.log(this.duty)
    this.setData(this.duty);
    this.getPassenger()
    this.auth.user.subscribe(data=>{
      this.user=data[0]

      this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(data=>{
        if(data.length==0)
        {
            this.snackbar.open("Please register some vehicle groups","X",{duration:3000});
          //this.matDialogRef.close();
        }
          this.vehicleGroups=data;
          this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
          .pipe(
            startWith(''),
            map(val=>this.filterVehicleGroup(val))
          );
        });
        this.dutytypeService.getDutyType(this.user).subscribe(data=>{
          if(data.length==0)
        {
          this.snackbar.open("Please register some dutytypes","X",{duration:3000});
        }
          console.log(data);
          this.dutyTypes=data;
          this.dutyType=this.dutyTypeCtrl.valueChanges
          .pipe(
            startWith(''),
            map(val=>this.filterDutyType(val))
          )
        });
        this.branchService.getBranches(this.user).subscribe(data=>{
          this.branches=data;
          this.branch=this.branchCtrl.valueChanges
          .pipe(
            startWith(''),
            map(val=>this.filterBranch(val))
          )
        })
    })
    // var availDriversTemp={
    //   ownerId : this.user.ownerId,
    //   startDate : this.duty.startDate
    // }

    // this.dutyService.availableDriversForEdit(availDriversTemp).subscribe(data=>{
    //   this.drivers=data;
    //   this.driver=this.driverCtrl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(val=>this.filterDriver(val))
    //   )
    // })

    // var availVehiclesTemp={
    //   ownerId : this.user.ownerId,
    //   vehicleGroupId : this.duty.vehicleGroupId
    // }

    // this.dutyService.availableVehiclesForEdit(availVehiclesTemp).subscribe(data=>{
    //   this.vehicles=data;
    //   this.vehicle=this.vehicleCtrl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(val=>this.filterVehicle(val))
    //   )
    // })

    this.myForm=this.fb.group({
      cname:['',Validators.required],
      price:'',
      startDate:'',
      endDate:'',
      bookBy:'', 
      bookByNo:'',
      bookByEmail:'',
      passenger:'',
      passengerNo:'', 
      passengerEmail:'',
      fromLoc:'',
      toLoc:'',
      reportingTime:'',
      startFromGarage:'',
      reportingAddress:'',
      dropAddress:'',
      shortReportingAddress:'',
      flightTrainNo:'',
      dispatchCenter:'',
      billTo:'',
      remarks:'',
      operatorNotes:'',
      label:'',
      vehicleGroup:'', // remove later
      // vehicleId:'',
      // vehicle:'',
      // driverNumber:'',
      // driver:'',     
      dutyType:'',  //remove later
      status:'',
      // driverName:'',
      rows:this.fb.array([])
    })
    this.myForm.patchValue({
      'cname':this.duty.cname,
      'price':this.duty.price,
      'startDate':this.duty.startDate,
      'endDate':this.duty.endDate,
      'bookBy':this.duty.bookBy, 
      'bookByNo':this.duty.bookByNo,
      'bookByEmail':this.duty.bookByEmail,
      'passenger':this.duty.passenger,
      'passengerNo':this.duty.passengerNo, 
      'passengerEmail':this.duty.passengerEmail,
      'fromLoc':this.duty.fromLoc,
      'toLoc':this.duty.toLoc,
      'reportingTime': moment(this.duty.reportingTime, 'HH:mm a' ).format("HH:mm"),
      'startFromGarage':this.duty.startFromGarage,
      'reportingAddress':this.duty.reportingAddress,
      'dropAddress':this.duty.dropAddress,
      'shortReportingAddress':this.duty.shortReportingAddress,
      'flightTrainNo':this.duty.flightTrainNo,
      'dispatchCenter':this.duty.dispatchCenter,
      'billTo':this.duty.billTo,
      'remarks':this.duty.remarks,
      'operatorNotes':this.duty.operatorNotes,
      // 'label':this.duty.label,
      'vehicleGroup':this.duty.vehicleGroup, // remove later
      // 'vehicleId':this.duty.vehicleId,
      // 'vehicle':this.duty.vehicle,
      // 'driverNumber':this.duty.driverNumber,
      // 'driverName':this.duty.driver,     
      'dutyType':this.duty.dutyType,  //remove later
      'status':this.duty.status,
    })

    this.onChanges();

    this.fromCity = this.fromCityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterFromCity(val))
      ); 
    this.toCity = this.toCityCtrl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterToCity(val))
    );

    //Maps 

    //set google maps defaults
    this.zoom = 4;
    this.latitudeReporting = 39.8282;
    this.longitudeReporting = -98.5795;
    this.latitudeDrop = 39.8282;
    this.longitudeDrop = -98.5795;

    //create search FormControl
    this.searchControlDrop = new FormControl();
    this.searchControlReporting=new FormControl();

    //set current position
    this.setCurrentPosition();

    var options = {
      componentRestrictions: {country: "in"}
     };

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocompleteReporting = new google.maps.places.Autocomplete(this.searchReportingRef.nativeElement, options);
      let autocompleteDrop = new google.maps.places.Autocomplete(this.searchDropRef.nativeElement, options);
      autocompleteReporting.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place:any = autocompleteReporting.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitudeReporting = place.geometry.location.lat();
          this.longitudeReporting = place.geometry.location.lng();
          this.zoom = 12;
        });
      });

      autocompleteDrop.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place:any = autocompleteDrop.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitudeDrop = place.geometry.location.lat();
          this.longitudeDrop = place.geometry.location.lng();
          this.zoom = 12;
        });
      });

    });
    
  }
  setDispatchCenter(temp:any,event:any)
  {
    if(event.source.selected==true)
    {
      this.duty.dispatchCenter=temp.name;
      this.duty.dispatchCenterId=temp.id;
    }
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitudeReporting = position.coords.latitude;
        this.longitudeReporting = position.coords.longitude;

        this.latitudeDrop = position.coords.latitude;
        this.longitudeDrop = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  setData(temp: Duty) {
    
    this.bookByCtrl.setValue(temp.bookBy);
    this.fromCityCtrl.setValue(temp.fromLoc);
    this.toCityCtrl.setValue(temp.toLoc);
    this.vehicleGroupCtrl.setValue(temp.vehicleGroup);
    this.dutyTypeCtrl.setValue(temp.dutyType);
    this.branchCtrl.setValue(temp.dispatchCenter);
    this.driverCtrl.setValue(temp.driver);
    this.vehicleCtrl.setValue(temp.vehicle);
  }
  
  onChanges(){
    this.valueChanges.dutyId=this.duty.id;

    this.myForm.get('cname').valueChanges.subscribe(data=>{
      if(data!=this.duty.cname){
        this.valueChanges.cname=data
        console.log(this.valueChanges)
      }
      else if(this.duty.cname==data){
        this.valueChanges.cname=null
      }
    })
    this.myForm.get('price').valueChanges.subscribe(data=>{
      if(data!=this.duty.price){
        this.valueChanges.price=data
        this.duty.price = data
        console.log(this.valueChanges)
      }
      else if(this.duty.price==data){
        this.valueChanges.price=null
      }
    })
    this.myForm.get('startDate').valueChanges.subscribe(data=>{
      if(data!=this.duty.startDate){
        this.valueChanges.stateDate=data
        console.log(this.valueChanges)
      }
      else if(this.duty.startDate==data){
        this.valueChanges.startDate=null
      }
    })
    this.myForm.get('endDate').valueChanges.subscribe(data=>{
      if(data!=this.duty.endDate){
        this.valueChanges.endDate=data
        console.log(this.valueChanges)
      }
      else if(this.duty.endDate==data){
        this.valueChanges.endDate=null
      }
    })
    this.myForm.get('bookBy').valueChanges.subscribe(data=>{
      if(data!=this.duty.bookBy){
        this.valueChanges.bookBy=data
        this.duty.bookBy = data
        console.log(this.valueChanges)
      }
      else if(this.duty.bookBy==data){
        this.valueChanges.bookBy=null
      }
    })
    this.myForm.get('bookByNo').valueChanges.subscribe(data=>{
      if(data!=this.duty.bookByNo){
        this.valueChanges.bookByNo=data
        this.duty.bookByNo =data
        console.log(this.valueChanges)
      }
      else if(this.duty.bookByNo==data){
        this.valueChanges.bookByNo=null
      }
    })
    this.myForm.get('bookByEmail').valueChanges.subscribe(data=>{
      if(data!=this.duty.bookByEmail){
        this.valueChanges.bookByEmail=data
        this.duty.bookByEmail = data
        console.log(this.valueChanges)
      }
      else if(this.duty.bookByEmail==data){
        this.valueChanges.bookByEmail=null
      }
    })
    this.myForm.get('passenger').valueChanges.subscribe(data=>{
      if(data!=this.duty.passenger){
        this.valueChanges.passenger=data
        this.duty.passenger = data
        console.log(this.valueChanges)
      }
      else if(this.duty.passenger==data){
        this.valueChanges.passenger=null
      }
    })
    this.myForm.get('passengerEmail').valueChanges.subscribe(data=>{
      if(data!=this.duty.passengerEmail){
        this.valueChanges.passengerEmail=data
        this.duty.passengerEmail = data
        console.log(this.valueChanges)
      }
      else if(this.duty.passengerEmail==data){
        this.valueChanges.passengerEmail=null
      }
    })
    this.myForm.get('passengerNo').valueChanges.subscribe(data=>{
      if(data!=this.duty.passengerNo){
        this.valueChanges.passengerNo=data
        this.duty.passengerNo = data
        console.log(this.valueChanges)
      }
      else if(this.duty.passengerEmail==data){
        this.valueChanges.passengerNo=null
      }
    })
    this.myForm.get('fromLoc').valueChanges.subscribe(data=>{
      if(data!=this.duty.fromLoc){
        this.valueChanges.fromLoc=data
        this.duty.fromLoc = data
        console.log(this.valueChanges)
      }
      else if(this.duty.fromLoc==data){
        this.valueChanges.fromLoc=null
      }
    })
    this.myForm.get('toLoc').valueChanges.subscribe(data=>{
      if(data!=this.duty.toLoc){
        this.valueChanges.toLoc=data
        this.duty.toLoc = data
        console.log(this.valueChanges)
      }
      else if(this.duty.toLoc==data){
        this.valueChanges.toLoc=null
      }
    })
    this.myForm.get('reportingTime').valueChanges.subscribe(data=>{
      if(data!=this.duty.reportingTime){
        this.valueChanges.reportingTime=data
        this.duty.reportingTime =data
        console.log(this.valueChanges)
      }
      else if(this.duty.reportingTime==data){
        this.valueChanges.reportingTime=null
      }
    })
    this.myForm.get('startFromGarage').valueChanges.subscribe(data=>{
      if(data!=this.duty.startFromGarage){
        this.valueChanges.startFromGarage=data
        this.duty.startFromGarage = data
        console.log(this.valueChanges)
      }
      else if(this.duty.startFromGarage==data){
        this.valueChanges.startFromGarage=null
      }
    })
    this.myForm.get('reportingAddress').valueChanges.subscribe(data=>{
      if(data!=this.duty.reportingAddress){
        this.valueChanges.reportingAddress=data
        this.duty.reportingAddress = data
        console.log(this.valueChanges)
      }
      else if(this.duty.reportingAddress==data){
        this.valueChanges.reportingAddress=null
      }
    })
    this.myForm.get('dropAddress').valueChanges.subscribe(data=>{
      if(data!=this.duty.reportingTime){
        this.valueChanges.reportingTime=data
        this.duty.dropAddress = data
        console.log(this.valueChanges)
      }
      else if(this.duty.reportingTime==data){
        this.valueChanges.reportingTime=null
      }
    })
    this.myForm.get('shortReportingAddress').valueChanges.subscribe(data=>{
      if(data!=this.duty.shortReportingAddress){
        this.valueChanges.shortReportingAddress=data
        this.duty.shortReportingAddress = data
        console.log(this.valueChanges)
      }
      else if(this.duty.shortReportingAddress==data){
        this.valueChanges.shortReportingAddress=null
      }
    })
    this.myForm.get('flightTrainNo').valueChanges.subscribe(data=>{
      if(data!=this.duty.flightTrainNo){
        this.valueChanges.flightTrainNo=data
        this.duty.flightTrainNo = data
        console.log(this.valueChanges)
      }
      else if(this.duty.flightTrainNo==data){
        this.valueChanges.flightTrainNo=null
      }
    })
    this.myForm.get('dispatchCenter').valueChanges.subscribe(data=>{
      if(data!=this.duty.dispatchCenter){
        this.valueChanges.dispatchCenter=data
        this.duty.dispatchCenter = data
        console.log(this.valueChanges)
      }
      else if(this.duty.dispatchCenter==data){
        this.valueChanges.dispatchCenter=null
      }
    })
    this.myForm.get('billTo').valueChanges.subscribe(data=>{
      if(data!=this.duty.billTo){
        this.valueChanges.billTo=data
        this.duty.billTo = data
        console.log(this.valueChanges)
      }
      else if(this.duty.billTo==data){
        this.valueChanges.billTo=null
      }
    })
    this.myForm.get('operatorNotes').valueChanges.subscribe(data=>{
      if(data!=this.duty.operatorNotes){
        this.valueChanges.operatorNotes=data
        this.duty.operatorNotes = data
        console.log(this.valueChanges)
      }
      else if(this.duty.billTo==data){
        this.valueChanges.billTo=null
      }
    })
    this.myForm.get('remarks').valueChanges.subscribe(data=>{
      if(data!=this.duty.remarks){
        this.valueChanges.remarks=data
        this.duty.remarks = data
        console.log(this.valueChanges)
      }
      else if(this.duty.billTo==data){
        this.valueChanges.billTo=null
      }
    })
  }

  setBookBy(option,event:any){
    if(event.source.selected==true)
    {
      this.myForm.patchValue({
        'bookBy': option.name,
        'bookByNo': option.phoneNo,
        'bookByEmail': option.emailId
      })
      // this.bookings.bookBy=option.name;
      // this.bookings.bookByNo=option.phoneNo;
      // this.bookings.bookByEmail=option.emailId;
    }
  }

  setPassenger(option,event:any,element:any){
    if(event.source.selected==true)
    {
      element.get('passenger').setValue(option.name);
      element.get('passengerNo').setValue(option.phoneNo);
      element.get('passengerEmail').setValue(option.emailId);
    }
  }

  setVehicleGroup(temp:any,event:any)
  {
    if(event.source.selected==true)
    {
      this.temp2.vehicleGroupId = temp.id;
      this.duty.vehicleGroup = temp.name;
      this.duty.vehicleGroupId = temp.id;

      var availVehiclesTemp={
        ownerId : this.user.ownerId,
        vehicleGroupId : this.duty.vehicleGroupId
      }
  
      this.dutyService.availableVehiclesForEdit(availVehiclesTemp).subscribe(data=>{
        this.vehicles=data;
        this.vehicle=this.vehicleCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterVehicle(val))
        )
      })
      
    }
  }

  getPassenger() {
    this.passengerList=[]
    this.bookingService.getPassenger(this.duty.bid).subscribe(data=>{
      data.forEach(element => {
        const row=this.fb.group({
          id:element.id,
          passenger:element.passenger,
          passengerEmail:element.passengerEmail,
          passengerNo:element.passengerNo
        })
        this.passengerForms.push(row);
      });
    }
    )
  }

  setDutyType(temp:any,event:any)
  {
    if(event.source.selected==true)
    {
      this.temp2.dutyTypeId=temp.id
      this.duty.dutyType=temp.name;
      this.duty.dutyTypeId=temp.id;


      // if(temp.dType=="Long Duration-Total KM Daily HR(Monthly Bookings)" || temp.dType=="Long Duration-Total KM and HR(Monthly Bookings)")
      // {
      //   this.isBookingMonthly=true;
      // }
      // else{
      //   this.isBookingMonthly=false;
      // }
    }
  }

  setVehicle(temp:any,event:any)
  {
    if(event.source.selected==true)
    {
      this.duty.vehicle = temp.modelname+' ('+temp.number+')'
      this.duty.vehicleId = temp.id;
    }
  }

  setDriver(temp:any,event:any)
  {
    if(event.source.selected==true)
    {
      this.duty.driver = temp.name;
      this.duty.driverId = temp.id;
    }
  }

  filterPass(i:any)
  {
    if(this.passengerArr.length>0)
    {
        this.passengers=this.passengerForms.at(i).get('passenger').valueChanges
        .pipe(
          startWith(''),
          map(val => this.filterPassenger(val))
        );
    } 
  }

  filterPassenger(val){
    return this.passengerArr.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  fromCitySelect(option,event:any){
    if(event.source.selected==true)
    {
      this.fromCityCtrl.setValue(option);
    }
  }
  toCitySelect(option,event:any){
    if(event.source.selected==true)
    {
      this.toCityCtrl.setValue(option);
    }
  }

  Changes(temp)
  {
    console.log(temp)
  }

  filterFromCity(val: string): string[] {
    return this.city.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  filterToCity(val: string): string[] {
    return this.city.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  filterVehicleGroup(val:string){
    
    return this.vehicleGroups.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase())
      );
  }
  
  filterDutyType(val:string){
    return this.dutyTypes.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  filterBranch(val:string){
    return this.branches.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  filterDriver(val:string){
    return this.drivers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  filterVehicle(val:string){
    return this.vehicles.filter(option=>
      option.modelname.toLowerCase().includes(val.toLowerCase()))
  }

  get passengerForms(){
    return this.myForm.get('rows') as FormArray;
  }
  addRow(){
    const row=this.fb.group({
      id:'',
      passenger:new FormControl(),
      passengerEmail:new FormControl(),
      passengerNo:new FormControl()
    })
    this.passengerForms.push(row);
  }
  deleteRow(i){
    var temp=this.myForm.get('rows') as FormArray;
    if(temp.value[i].id!="")
    this.deletedPassenger.push(temp.value[i].id)

    this.passengerForms.removeAt(i);
  }

  temp2:any={
    city:'',
    vehicleGroupId:'',
    customerId:'',
    dutyTypeId:''
  }

  getPrice()
  {
    if(this.temp2.customerId=='')
    {
      this.snackbar.open('Please select Customer','X',{duration:3000})
    }
    else if(this.temp2.vehicleGroupId=='')
    {
      this.snackbar.open('Please select Vehicle Group','X',{duration:3000})
    }
    else if(this.temp2.dutyTypeId=='')
    {
      this.snackbar.open('Please select Duty Type','X',{duration:3000})
    }
    else if(this.temp2.city=='')
    {
      this.snackbar.open('Please select City','X',{duration:3000})
    }
    else
    {
      this.pricingService.getCustomerPrice(this.temp2).subscribe(
        data=>
        {
          if(data.length!=0)
            this.duty.price=(data[0].baseRate)
          else
            this.snackbar.open('Price is not entered for current combination','X',{duration:3000})
        }
      )
    }
  }

  update(){
    delete this.duty.driverUserId;
    delete this.duty.phoneNumber;
    let temp=this.myForm.get('rows') as FormArray;
    if(this.duty.ownerDId!=null){
      this.dialog.open(ConfirmComponent,{data:{
        dutiesEdit:'A request for the changes would be sent to the supplier/owner'
      },autoFocus:false,disableClose:true
    }).afterClosed().subscribe(data=>{
      console.log(data)
      if(data=='no'){}
      if(data=='yes'){
        this.saveDuty()
        this.dialog.closeAll();
      }
    })

    }
    else{
      if(this.deletedPassenger.length>0)
      {
        this.bookingService.deletePassenger(this.deletedPassenger);
      }
      this.bookingService.addPassengers(this.duty.bid,temp.value)
      this.dutyService.updateDutiesEdit(this.duty).subscribe(data=>{
        this.router.navigate(['/pages/duties']);
      })
    }
  }
  saveDuty()
  {
    if(this.duty.ownerDId!=null){
      var temp1={
        id:this.duty.ownerDId
      }
      this.dutyService.getOwnerIdforRequest(temp1).subscribe(data=>{
        console.log(data)
        this.duty.ownerId=data[0].ownerId

        delete this.duty.id;
        console.log(this.duty)
        var temp={
          valueChanges:this.valueChanges,
          duty:this.duty,
          requestFrom:this.user.ownerId
        }
        console.log(temp)
        this.dutyService.requestUpdateDuties(temp).subscribe(data=>data)
      })
    }
    else if(this.duty.supplierDId!=null){
      var temp2={
        id:this.duty.supplierDId
      }
      this.dutyService.getOwnerIdforRequest(temp2).subscribe(data=>{
        console.log(data)
        this.duty.ownerId=data[0].ownerId


        console.log(this.duty)
        var temp={
          valueChanges:this.valueChanges,
          duty:this.duty,
          requestFrom:this.user.ownerId
        }
        console.log(temp)
        this.dutyService.requestUpdateDuties(temp).subscribe(data=>data)
      })
    }
  }

  closeDialog()
  { 
    this.dialog.closeAll()
  }
}
