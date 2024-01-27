import { Component, OnInit, HostListener, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { VehicleGroup, VehicleGroupsComponent } from '../../masters/vehiclegroups/vehiclegroups.component';
import { DutyType } from '../../masters/dutytype/duty-type';
import { Booking } from '../booking';
import { Branch } from '../new-branch/new-branch.component';
import { Observable } from 'rxjs';
import { User } from '../../../core/user';
import * as moment  from 'moment';
import { DateConfirmComponent } from '../date-confirm/date-confirm.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { BookingsService } from '../bookings.service';
import { DutyTypeService } from '../../masters/dutytype/duty-type.service';
import { CustomerService } from '../../masters/customer/customer.service';
import { PricingService } from '../../masters/pricing/pricing.service';
import { AuthService } from '../../../core/auth.service';
import { NewBranchService } from '../new-branch/new-branch.service';
import { Router } from '@angular/router';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { DutiesComponent } from '../../duties/duties.component';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'reviewneededbookings',
  templateUrl: './reviewneededbookings.component.html',
  styleUrls: ['./reviewneededbookings.component.scss']
})
export class ReviewneededbookingsComponent implements OnInit {
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  myForm:FormGroup;
  bookedByForm: FormGroup;

  //AutoComplete
  vehicleGroups:VehicleGroup[];
  vehicleGroup:any;
  dutyTypes:DutyType[];
  deletedPassenger=[];
  deletedBookedBy=[];
  tempid:string;
  bookings:Booking={};
  editState:boolean;
  customers:any[];
  customer:any;
  customerCtrl:FormControl=new FormControl();

  branches:Branch[];
  branch:any;
  branchCtrl:FormControl=new FormControl();

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

  city = [];

  bookByCtrl:FormControl = new FormControl();
  bookBy:Observable<string[]>;
  bookByArr:any[];

  passengers:Observable<string[]>
  passengerArr:any[];

  fromCity: Observable<string[]>;
  toCity:Observable<string[]>;
  dutyType:any;
  fromCityCtrl: FormControl = new FormControl();
  toCityCtrl: FormControl = new FormControl();
  vehicleGroupCtrl: FormControl = new FormControl();
  dutyTypeCtrl: FormControl = new FormControl();
  user:User={}
  isBookingMonthly: boolean=false;
  dutyArray:any[]=[]

  ngOnInit() {

    this.myForm=this.fb.group({
      rows:this.fb.array([])
    });

    this.bookedByForm=this.fb.group({
      rows:this.fb.array([])
    });

    var bk = localStorage.getItem('uclueldata');
    this.bookings = JSON.parse(bk)
    console.log(this.bookings)
    this.setData(this.bookings);
    this.getPassenger();
    this.getBookedBy(this.bookings);
    this.auth.user.subscribe(data=>
    {
        this.user=data[0]
        this.bookings.ownerID=data[0].ownerId
       
        this.customerService.getCustomers(this.user).subscribe(data=>{
          this.customers=data;
          this.customer=this.customerCtrl.valueChanges
          .pipe(
            startWith(''),
            map(val=>this.filterCustomer(val))
          );
        });
        
        this.branchService.getBranches(this.user).subscribe(data=>{
          this.branches=data;
          this.branch=this.branchCtrl.valueChanges
          .pipe(
            startWith(''),
            map(val=>this.filterBranch(val))
          )
        })
        this.setCustomer();
      })


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
  confirmBooking() {
    this.bookings.status='Booked';
    this.bookings.startDate=moment(this.bookings.startDate).format("YYYY-MM-DD")
    this.bookings.endDate=moment(this.bookings.endDate).format("YYYY-MM-DD")
    let temp=this.myForm.get('rows') as FormArray;
    let temp2 = this.bookedByForm.get('rows') as FormArray;

    if(this.bookings.startDate != this.bookings.endDate) {
      this.dialog.open(DateConfirmComponent,{data:{booking:this.bookings},autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
        console.log(data);
        var monthlyBookingData = {
          duties:data,
          booking:this.bookings
        }
        
        this.bookingService.updateUnconfirmedMonthlyBooking(monthlyBookingData)
        // this.bookingService.updateUnconfirmedBooking(this.bookings);
        if(this.deletedPassenger.length>0)
        {
          this.bookingService.deletePassenger(this.deletedPassenger);
        }
        if(this.deletedBookedBy.length > 0) {
          this.bookingService.deleteBookedBy(this.deletedBookedBy);
        }
        this.bookingService.addPassengers(this.bookings.id,temp.value);
        this.bookingService.addBookedBy(this.bookings.id, temp2.value);
        //this.defaltVal();
        this.dialog.closeAll();
        this.snackbar.open("Booking Updated Successfully",null,{duration:5000});
        this.router.navigateByUrl('/pages/operations/bookingsdisp');
      });
    } else {
      this.bookingService.updateUnconfirmedBooking(this.bookings);
      if(this.deletedPassenger.length>0)
      {
        this.bookingService.deletePassenger(this.deletedPassenger);
      }
      if(this.deletedBookedBy.length > 0) {
        this.bookingService.deleteBookedBy(this.deletedBookedBy);
      }
      this.bookingService.addPassengers(this.bookings.id,temp.value);
      this.bookingService.addBookedBy(this.bookings.id, temp2.value);
      //this.defaltVal();
      this.dialog.closeAll();
      this.snackbar.open("Booking Updated Successfully",null,{duration:5000});
      this.router.navigateByUrl('/pages/operations/bookingsdisp');
    }
  }
  getCities() {
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
      'Zunheboto'];
  }

  filterCities() {
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
  }

  getVehicleGroups() {
    this.vehiclegroupsService.getvehicleGroup(this.user).subscribe(data=>{
      if(data.length==0) {
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
  }

  getDutyTypes() {
    this.dutytypeService.getDutyType(this.user).subscribe(data=>{
      if(data.length==0) {
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
  }

  setCustomer()
  {
     
    this.temp2.customerId=this.bookings.customerId;
    // console.log(this.temp2);

    var tempCust=
    {
      ownerId:this.user.ownerId,
      customerId:this.temp2.customerId
    }
    // console.log(tempCust);
    this.bookingService.getRecurringBookedBy(tempCust).subscribe(data=>{
      this.bookByArr=data;
      this.bookBy = this.bookByCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterBookBy(val))
      ); 
    })

    this.bookingService.getRecurringPassenger(tempCust).subscribe(data=>{
      this.passengerArr=data;
      this.passengers=Observable.of(this.passengerArr)
      // console.log(data);
    })

    var temp = {
      id: this.bookings.customerId
    }

    console.log(this.bookings);
    
    
    this.customerService.getCustomerLimitCity({id: this.bookings.customerId}).subscribe(data => {
      console.log(data);
      
      if(data.length != 0) {
        this.city.length = 0;
        data.forEach(element => {
          this.city.push(element.city);
        });          
      }
      else {
        this.getCities();          
      }
      
    },err=>{},()=>{
      this.filterCities();
    })

    this.customerService.getCustomerLimitVehicleGroupForBookings({id: this.bookings.customerId}).subscribe(data => {
      console.log(data);
      if(data.length != 0) {
        this.vehicleGroups=data;
        this.vehicleGroup=this.vehicleGroupCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterVehicleGroup(val))
        );
      }
      else {
        this.getVehicleGroups()
      }
    })

    this.customerService.getCustomerLimitDutyTypeForBookings(temp).subscribe(data => {      
      if(data.length != 0) {
        this.dutyTypes=data;
        this.dutyType=this.dutyTypeCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterDutyType(val))
        )
      }
      else {
        this.getDutyTypes();
      }
    })
    
  }
  setData(temp: Booking) {
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
  }

  setDispatchCenter(temp:any,event:any)
  {
    if(event.source.selected==true)
    {
      this.temp2.vehicleGroupId=temp.id;
      this.bookings.dispatchCenter=temp.name;
      this.bookings.dispatchCenterId=temp.id;
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
    var address = this.bookings.reportingAddress

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
    var address = this.bookings.dropAddress

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
  filterCustomer(val:string){
    return this.customers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  filterDutyType(val:string){
    return this.dutyTypes.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  filterBranch(val:string){
    return this.branches.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  filterBookBy(val:string){
    return this.bookByArr.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  
  fromCitySelect(option,event:any){
    if(event.source.selected==true)
    {
      this.bookings.fromLoc=option
      this.temp2.city=option
    }
  }
  toCitySelect(option,event:any){
    if(event.source.selected==true)
    {
      this.bookings.toLoc=option
    }
  }
  setBookBy(option,event:any,element:any){
    if(event.source.selected==true)
    {
      element.get('bookByName').setValue(option.name);
      element.get('bookByNo').setValue(option.phoneNo);
      element.get('bookByEmail').setValue(option.emailId);
      element.get('CCID').setValue(option.CCID);     
    }
  }
  setPassenger(option,event:any,element:any){
    if(event.source.selected==true)
    {
      element.get('passenger').setValue(option.name);
      element.get('passengerNo').setValue(option.phoneNo);
      element.get('passengerEmail').setValue(option.emailId);
      this.bookings.reportingAddress = option.address;
      this.bookings.dropAddress = option.address;
    }
  }
  
  closeDialog()
  {
    this.dialog.closeAll()
  }

  get passengerForms(){
    return this.myForm.get('rows') as FormArray;
  }
  get bookedByForms(){
    return this.bookedByForm.get('rows') as FormArray;
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
  addBookedBy(){
    const row=this.fb.group({
      id:'',
      bookByName:new FormControl(),
      bookByNo:new FormControl(),
      bookByEmail:new FormControl(),
      CCID:new FormControl(),
    })
    this.bookedByForms.push(row);
  }
  deleteBookedBy(i){    
    var temp = this.bookedByForm.get('rows') as FormArray;
    if(temp.value[i].id!="")
    this.deletedBookedBy.push(temp.value[i].id)

    this.bookedByForms.removeAt(i);
  }

  deleteBooking(row:Booking)
  {
    this.bookingService.deleteBooking(row);
  }

  passengerList:any[]
  getPassenger()
  {
    this.passengerList=[]
    this.bookingService.getPassenger(this.bookings.id).subscribe(data => {
      data.forEach(element => {
        const row=this.fb.group({
          id:element.id,
          passenger:element.passenger,
          passengerEmail:element.passengerEmail,
          passengerNo:element.passengerNo
        })
        this.passengerForms.push(row);
      });
    })
  }

  bookedByList:any[]
  getBookedBy(bookings: Booking) {
    const row=this.fb.group({
      bookByName:bookings.bookBy,
      bookByNo:bookings.bookByNo,
      bookByEmail:bookings.bookByEmail,
      CCID:bookings.ccId,
    })
    this.bookedByForms.push(row);
  }
  
  addBooking() {
    console.log(this.bookings.endDate)
    this.bookings.startDate=moment(this.bookings.startDate).format("YYYY-MM-DD")
    this.bookings.endDate=moment(this.bookings.endDate).format("YYYY-MM-DD")
    console.log(this.bookings.endDate)

    if(this.isBookingMonthly){
      this.dialog.open(DateConfirmComponent,{data: {booking: this.bookings},autoFocus:false,disableClose:true});
    }
    else{
      console.log("Called")
      this.insertBooking();
    }

  }
insertBooking()
{
  
  let temp=this.myForm.get('rows') as FormArray;
  
  if(this.bookings.bookBy=='' || this.bookings.bookBy==null)
  {
    this.bookings.bookBy=this.bookByCtrl.value
  }
  else
  {
    if(this.bookByArr.findIndex(x=>x.name.toLowerCase()==this.bookByCtrl.value.toLowerCase())==-1)
    {
      this.bookingService.addRecurringBookedBy({
        name:this.bookByCtrl.value,
        phoneNo:this.bookings.bookByNo,
        emailId:this.bookings.bookByEmail,
        ownerId:this.user.ownerId,
        customerId:this.bookings.customerId,
      }).subscribe(data=>data);
    } 
  }

  temp.value.forEach(element => {
    
    if(this.passengerArr.findIndex(x=>x.name.toLowerCase()==element.passenger.toLowerCase())==-1)
    {
      this.bookingService.addRecurringPassenger({
        name:element.passenger,
        phoneNo:element.passengerNo,
        emailId:element.passengerEmail,
        ownerId:this.user.ownerId,
        customerId:this.bookings.customerId,
        address: this.bookings.reportingAddress,
      }).subscribe(data=>data);
    }
  });
    
  
  var bookingData={
    booking:{},
    passenger:[]
  };
  var tempid:string;
  this.bookings.status='Booked';

  if(this.passengerForms.controls[0]!=undefined)
  {
    this.bookings.passenger=this.passengerForms.controls[0].value.passenger;
    this.bookings.passengerNo=this.passengerForms.controls[0].value.passengerNo;
    this.bookings.passengerEmail=this.passengerForms.controls[0].value.passengerEmail;
    if(this.passengerForms.controls.length>1)
    this.bookings.passenger=this.bookings.passenger+"+"+(this.passengerForms.controls.length-1);



  }
 
  this.getVehicleGroup(this.bookings.vehicleGroup, this.user.ownerId).subscribe(data=>
    {
       if(data.length!=0)
       {
        this.bookings.vehicleGroupId=data[0].id;
        this.getDutyType(this.bookings.dutyType, this.user.ownerId).subscribe(data=>
        {
       if(data.length!=0){
        this.bookings.dutyTypeId=data[0].id;
        bookingData.booking=this.bookings;
        bookingData.passenger=temp.value;
        this.bookingService.addBooking(bookingData);
        
        //this.matDialogRef.close();
        this.snackbar.open("Booking Completed","X",{duration:5000})
        this.router.navigateByUrl('/pages/operations/bookingsdisp')
       }
       else {
        this.snackbar.open("Choose a valid Duty Type","X",{duration:3000});
       }
        })
        
      }
      else
      {
        this.snackbar.open("Choose a valid vehicle group","X",{duration:3000});
      }
        //this.defaltVal();
    })
}



  
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

  filterPass(i:any)
  {
    this.passengers=this.passengerForms.at(i).get('passenger').valueChanges
        .pipe(
          startWith(''),
          map(val => this.filterPassenger(val))
        ); 
  }

  filterPassenger(val){
    return this.passengerArr.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  setVehicleGroup(temp:any,event:any)
  {
    console.log(temp)
    if(event.source.selected==true)
    {
      this.temp2.vehicleGroupId=temp.id;
      this.bookings.vehicleGroup=temp.name;
      this.bookings.vehicleGroupId=temp.id;
    }
  }

  setDutyType(temp:any,event:any)
  {
    if(event.source.selected==true)
    {
      this.temp2.dutyTypeId=temp.id
      this.bookings.dutyType=temp.name;
      this.bookings.dutyTypeId=temp.id;


      if(temp.dType=="Long Duration-Total KM Daily HR(Monthly Bookings)"||temp.dType=="Long Duration-Total KM and HR(Monthly Bookings)")
      {
        this.isBookingMonthly=true;
      }
      else{
        this.isBookingMonthly=false;
      }
    }
  }

  // setCity(temp:any,event:any)
  // {
  //   if(event.source.selected==true)
  //   {
  //     this.temp2.city=temp
  //   }
  // }

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
            this.bookings.price=(data[0].baseRate)
          else
            this.snackbar.open('Price is not entered for current combination','X',{duration:3000})
        }
      )
    }
  }
  saveBooking()
  {
    if(this.bookings.customerId == null) {
      this.snackbar.open("Please Enter Customer", "X", {duration: 3000})
    }
    else if(this.bookings.vehicleGroupId == null) {
      this.snackbar.open("Please Enter Vehicle Group", "X", {duration: 3000})
    }
    else if(this.bookings.dutyTypeId == null) {
      this.snackbar.open("Please Enter Duty Type", "X", {duration: 3000})
    }
    else {
      this.bookings.status='Booked';

      if(this.dropAddressMaps==true)
      {
        this.bookings.dropAddress = this.searchDropRef.nativeElement.value;
      }
      if(this.reportingAddressMaps==true)
      {
        this.bookings.reportingAddress = this.searchReportingRef.nativeElement.value;
      }
      
      if(this.bookings.unconfirmed === true) {
        this.bookings.status='Unconfirmed'
      } else {
        this.bookings.status='Booked';
      }
      this.bookings.startDate=moment(this.bookings.startDate).format("YYYY-MM-DD")
      this.bookings.endDate=moment(this.bookings.endDate).format("YYYY-MM-DD")
      let temp=this.myForm.get('rows') as FormArray;
      let temp2 = this.bookedByForm.get('rows') as FormArray;
  
      this.bookingService.updateBooking(this.bookings);
      
      if(this.deletedPassenger.length>0)
      {
        this.bookingService.deletePassenger(this.deletedPassenger);
      }
      if(this.deletedBookedBy.length > 0) {
        this.bookingService.deleteBookedBy(this.deletedBookedBy);
      }
      this.bookingService.addPassengers(this.bookings.id,temp.value);
      this.bookingService.addBookedBy(this.bookings.id, temp2.value);
      //this.defaltVal();
      this.dialog.closeAll();
      this.snackbar.open("Booking Updated Successfully",null,{duration:5000});
      this.router.navigateByUrl('/pages/operations/bookingsdisp');
    }
  }

  getVehicleGroup(temp:string, ownerId)
  {
   return this.bookingService.getVehilceGroup(temp, ownerId)
  }

  getDutyType(temp:string, ownerId)
{
  return this.bookingService.getDutyType(temp, ownerId);
}
  defaltVal()
  {
    this.bookings.bookBy='';
    this.bookings.passenger='';
    this.bookings.vehicleGroup='';
    this.bookings.dutyType='';
    this.bookings.status=''; 
    this.bookings.cname='';
    this.bookings.bookByNo='';
    this.bookings.bookByEmail='';
    this.bookings.ccId='';
    this.bookings.passenger='';
    this.bookings.passengerNo=''; 
    this.bookings.passengerEmail='';
    this.bookings.fromLoc='';
    this.bookings.toLoc='';
    this.bookings.endDate=null;
    this.bookings.reportingTime='';
    this.bookings.startFromGarage='';
    this.bookings.reportingAddress='';
    this.bookings.dropAddress='';
    this.bookings.shortReportingAddress='';
    this.bookings.flightTrainNo='';
    this.bookings.dispatchCenter='';
    this.bookings.dispatchCenterId=null;
    this.bookings.billTo='';
    this.bookings.price='';
    this.bookings.remarks='';
    this.bookings.operatorNotes='';
    this.bookings.label='';
    this.bookings.vehicleGroup=''; 
    this.bookings.dutyType=''; 
    this.bookings.status='';
    this.bookings.startDate=null;
    this.bookings.vehicleGroupId='';
    this.bookings.customerId='';
    this.bookings.poNumber='';
  }
  
 
param={
  inserted:'no',
  data:null
}
temp:Booking={
    status:'Booked',
    cname:'',
    passenger:'',
    vehicleGroup:'',
    dutyType:'',
    bookBy:'',
    bookByNo:'',
    bookByEmail:'',
    ccId:'',
    passengerNo:'' ,
    passengerEmail:'',
    fromLoc:'',
    toLoc:'', 
    startDate:null,
    endDate:null,
    reportingTime:'',
    startFromGarage:'',
    reportingAddress:'',
    dropAddress:'',
    shortReportingAddress:'',
    flightTrainNo:'',
    dispatchCenter:'',
    dispatchCenterId: null,
    billTo:'',
    price:'',
    remarks:'',
    operatorNotes:'',
    label:'',
    vehicleGroupId:'',
    customerId:'',
    poNumber:'',
  }
  newBooking:boolean
  constructor(private snackbar:MatSnackBar,
    private fb:FormBuilder,
    private bookingService:BookingsService,
    private vehiclegroupsService:VehicleGroupsComponent,
    private dutytypeService:DutyTypeService, 
    public dialog:MatDialog, 
    private customerService:CustomerService,
    private pricingService:PricingService,
    private auth:AuthService,
    private branchService:NewBranchService,
    private router:Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private dutyComponenet:DutiesComponent
  ){}

  setReportingAddress(temp)
  {
    this.bookings.reportingAddress=temp
  }

  setDropAddress(temp)
  {
    this.bookings.dropAddress=temp
  }

}
