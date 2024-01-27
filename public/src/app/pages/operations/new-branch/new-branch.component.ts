import { Component, OnInit, ViewChild, ElementRef, NgZone, Inject, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { NewBranchService } from './new-branch.service';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { map} from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-new-branch',
  templateUrl: './new-branch.component.html',
  styleUrls: ['./new-branch.component.scss']
})
export class NewBranchComponent implements OnInit, AfterViewInit {
  
  //MAPS API

  @ViewChild("searchLocation")
  public searchLocation: ElementRef;
  
  public searchControl: FormControl;
  public latitude: number;
  public longitude: number;
  public zoom: number;
  draggable = true;
  
  mapClicked(event: MouseEvent)
  {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;

    var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'location': latlng , componentRestrictions: {country: 'in'}}, function (results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
          alert(status);
      }
      // This is checking to see if the Geoeode Status is OK before proceeding
      if (status == google.maps.GeocoderStatus.OK) {
          this.br.reportingAddress = (results[0].formatted_address);
          console.log(results[0].formatted_address)
      }
    }.bind(this));
  }

  markerDragEnd(event: MouseEvent) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    var latlng = new google.maps.LatLng(event.coords.lat, event.coords.lng);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'location': latlng , componentRestrictions: {country: 'in'} }, function (results, status) {
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

  name;
  Number;
  user: User = {};
  location: Observable<string[]>;
  cityOfOperation:Observable<string[]>;
  locationCtrl: FormControl = new FormControl();
  cityOfOperationCtrl: FormControl = new FormControl();
  editState = false;

  constructor(private auth: AuthService, private branchService: NewBranchService,private dialogRef:MatDialogRef<NewBranchComponent>, private dialog: MatDialog,private mapsAPILoader: MapsAPILoader,private ngZone: NgZone,@Inject(MAT_DIALOG_DATA) public data: any) { 
    if(data)
    {
      this.editState=true;
      this.newBranch=data.row;
    }
    else
    {
      this.editState=false;
    }
  }

  ngOnInit() {

    //set google maps defaults
    this.zoom = 4;
    this.latitude = 19.0759837;
    this.longitude= 72.87765590000004;

    this.setCurrentPosition();

    this.auth.user.subscribe(data => {
      this.user = data[0]
      this.newBranch.ownerId = data[0].ownerId
    })
    
    this.cityOfOperation = this.cityOfOperationCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filtercityOfOperation(val))
      );

      var options = {
        componentRestrictions: {country: "in"}
       };

      this.mapsAPILoader.load().then(() => {
        let autocompleteReporting = new google.maps.places.Autocomplete(this.searchLocation.nativeElement, options);
        autocompleteReporting.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place:any = autocompleteReporting.getPlace();
  
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
  
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
  
      });  
  }

  ngAfterViewInit() {
    
    if(this.data)
    {
      this.geocodeLocation();
    }
  }

  cityOfOperationSelection(temp,event:any){
    if(event.source.selected==true)
    {
      this.newBranch.cityOfOperations=temp
    }
  }

  filtercityOfOperation(val: string): string[] {
    return this.city.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  addBranch() {
    this.newBranch.location = this.searchLocation.nativeElement.value;
    this.newBranch.lat = this.latitude.toString();
    this.newBranch.lng = this.longitude.toString();
    this.branchService.addBranches(this.newBranch).subscribe();
    this.dialogRef.close("yes")
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  setLocation(value)
  {
    this.newBranch.location=value;
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  saveBranch() {
    this.newBranch.location = this.searchLocation.nativeElement.value;
    this.newBranch.lat = this.latitude.toString();
    this.newBranch.lng = this.longitude.toString();
    this.branchService.updateBranches(this.newBranch).subscribe();
    this.dialogRef.close()
  }
  
  geocodeLocation() {
    var address = this.newBranch.location

    this.mapsAPILoader.load().then(() => {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address , componentRestrictions : {country: 'in'}}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        this.latitude=results[0].geometry.location.lat();
        this.longitude=results[0].geometry.location.lng();
        this.zoom = 12;

      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    }.bind(this));
  })
  }

  newBranch: Branch = {
    ownerId: '',
    name: '',
    type: '',
    location: '',
    phoneNumber: '',
    address: '',
    cityOfOperations: '',
    lat:'',
    lng:''
  }

  city= ['Achalpur',
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
    'Manawar'];
}
export interface Branch {
  id?: number;
  ownerId?: string;
  name?: string;
  type?: string;
  location?: string;
  phoneNumber?: string;
  address?: string;
  cityOfOperations?: string;
  lat?:string;
  lng?:string;
}
