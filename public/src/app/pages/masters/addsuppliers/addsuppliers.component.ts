import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Supplier } from './supplier';
import { SupplierService } from './supplier.service';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { TaxesComponent, Tax } from '../taxes/taxes.component';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { VehicleGroup, VehicleGroupsComponent } from '../vehiclegroups/vehiclegroups.component';
import { SupplierGroup, NewsuppliergroupComponent } from '../newsuppliergroup/newsuppliergroup.component';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { InvoiceService } from '../createinvoice/invoice.service';
import { NewVehiclesComponent } from '../new-vehicles/new-vehicles.component';
import { Branch } from '../../operations/new-branch/new-branch.component';
import { NewBranchService } from '../../operations/new-branch/new-branch.service';
import { DutyType } from '../dutytype/duty-type';
import { DutyTypeService } from '../dutytype/duty-type.service';
import { Router } from '@angular/router';
import { ActivitylogService } from '../../../activitylog.service';
import * as moment from 'moment';


@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./addsuppliers.component.scss'],
  templateUrl: './addsuppliers.component.html',
})
export class AddSuppliersComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  NewSupplierStateControl: FormControl = new FormControl();
  GSTStateControl: FormControl = new FormControl();
  myForm:FormGroup;
  cityForm: FormGroup;
  vehicleGroupsForm: FormGroup;
  dutyTypesForm: FormGroup;
  vehicleGroups:Observable<VehicleGroup[]>;
  supplierGroups:Observable<SupplierGroup[]>;
  dutyTypes: Observable<DutyType[]>;
  user:User={}
  taxTypes:Observable<Tax[]>
  editState: boolean = false;
  tax:any[]=[];
  taxes:any;
  taxCtrl:FormControl=new FormControl();
  taxStatus: boolean = false;
  branchesCtrl:FormControl = new FormControl();
  branches:Branch[];
  branch:any;
  cities: Observable<string[]>;  
  cityCtrl: FormControl = new FormControl();

  deletedCity = [];
  deletedVehicleGroup = [];
  deletedDutyType = [];
  logs = [];

  vehicleGroupId: any[] = [];
  retrievedVehicleGroupId: any[] = [];
  dutyTypeId: any[] = [];
  retrievedDutyTypeId: any[] = [];

  ngOnInit(){
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.Supplier.ownerId=data[0].ownerId
      this.invoiceService.getTaxes(data[0]).subscribe(data=>{
        console.log(data)
        this.tax=data;
        if(this.Supplier != null) {          
          var cTax = this.tax.find(x=>x.id===Number(this.Supplier.applicableTaxes))          
          if(cTax != undefined) {
            const row = this.fb.group({
              tax: cTax.name,
              tempTax: true
            })
            this.applicableTaxes.push(row);
            this.taxStatus=true;
            this.taxCtrl.setValue(cTax.name);
          }          
        }
        this.taxes=this.taxCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterTax(val))
        );
      });
      this.branchService.getBranches(this.user).subscribe(data=>{        
        this.branches=data;
        if(this.Supplier != null) {          
          var b = this.branches.find(x=>x.id===Number(this.Supplier.branches))          
          if(b != undefined) {            
            this.branchesCtrl.setValue(b.name);
          }          
        }
        this.branch=this.branchesCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterBranches(val))
        )
      })
    })
    this.supplierGroupService.getSupplierGroups(this.user).subscribe(data=>{
      this.supplierGroups=data;
     
    })
    this.vehicleGroupService.getvehicleGroup(this.user).subscribe(data=>{
      this.vehicleGroups=data;
    });

    this.dutyTypeService.getDutyType(this.user).subscribe(data => {
      this.dutyTypes=data;
    })

    this.myForm=this.fb.group({
      rows:this.fb.array([])
    });

    this.cityForm=this.fb.group({
      cities:this.fb.array([])
    });

    this.vehicleGroupsForm=this.fb.group({
      vehicleGroups:this.fb.array([])
    });

    this.dutyTypesForm=this.fb.group({
      dutyTypes:this.fb.array([])
    });

    this.newSupplierStates = this.NewSupplierStateControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterSupplierStates(val))
    );

    this.gstbillingStates = this.GSTStateControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterGSTStates(val))
    );

    this.taxTypes=this.taxesService.gettax();
  }

  
  filterCity(i:any) {    
    this.cities = this.citiesFormCtrl.at(i).get('city').valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterFromCity(val))
    );            
  }

  filterBranches(val:string){
    return this.branches.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  filterSupplierStates(val: string): string[] {
    return this.states.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  filterGSTStates(val: string): string[] {
    return this.states.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  filterTax(val:string) {
    return this.tax.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  filterFromCity(val: string): string[] {
    return this.city.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  SuppStateSelect(option,event:any) {
    if(event.source.selected==true) {
      this.Supplier.state=option;
    }
  }

  SuppGSTStateSelect(option,event:any) {
    if(event.source.selected==true) {
      this.Supplier.billingState=option
    }
  }

  closeDialog() { 
    this.dialog.closeAll()
  }

  get applicableTaxes(){
    return this.myForm.get('rows') as FormArray;
  }
  get citiesFormCtrl(){
    return this.cityForm.get('cities') as FormArray;
  }
  get vehicleGroupsFormCtrl(){
    return this.vehicleGroupsForm.get('vehicleGroups') as FormArray;
  }
  get dutyTypesFormCtrl(){
    return this.dutyTypesForm.get('dutyTypes') as FormArray;
  }

  addRow(temp:boolean){
    const row=this.fb.group({
      tax:'',
      tempTax:temp
    })
    this.applicableTaxes.push(row);
    this.taxStatus = true;
  }
  deleteRow(i){
    this.applicableTaxes.removeAt(i);
    this.taxStatus = false;
    this.Supplier.applicableTaxes = null;
  }

  addCity(temp:boolean){
    const city=this.fb.group({      
      city: '',
    })
    this.citiesFormCtrl.push(city);
  }
  deleteCity(i, aRow){
    this.citiesFormCtrl.removeAt(i);
    if(aRow.value.id) {
      this.deletedCity.push(aRow.value)
    }
  }

  addVehicleGroup(temp:boolean){
    const vehicleGroups=this.fb.group({
      vehicleGroupId: '',
      vehicleGroupName: '',
    })
    this.vehicleGroupsFormCtrl.push(vehicleGroups);
  }
  deleteVehicleGroup(i, aRow){
    console.log(aRow);
    
    this.vehicleGroupsFormCtrl.removeAt(i);
    if(aRow.value.id) {
      this.deletedVehicleGroup.push(aRow.value);
    }
  }

  addDutyType(temp:boolean){
    const dutyTypes=this.fb.group({
      dutyTypeId: '',      
    })
    this.dutyTypesFormCtrl.push(dutyTypes);
  }
  deleteDutyType(i, aRow){
    this.dutyTypesFormCtrl.removeAt(i);
    if(aRow.value.id) {
      this.deletedDutyType.push(aRow.value);
    }
  }

  setTax(option:any,event:any) {
    this.Supplier.applicableTaxes = option.id;
  }

  setBranches(option:any,event:any) {
    this.Supplier.branches = option.id;
  }

  states=
  [
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
  
  newSupplierStates: Observable<string[]>;
  gstbillingStates: Observable<string[]>;

  updateSupplier(){
    if(this.Supplier.name.trim()=="")
    {
      this.snackBar.open('Enter Name',null,{
        duration:5000
      });
    }
    else {
      this.supplierService.updateSupplier(this.Supplier).subscribe(data=>{
        if(data.affectedRows==1){
          this.param.inserted='yes';
          this.param.data=this.Supplier;
          this.activityLogs.addSupplierLogs({
            supplierId:this.Supplier.id,
            ownerId:this.Supplier.ownerId,
            message:"Supplier edited on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
          // console.log(this.citiesFormCtrl)
          if(this.citiesFormCtrl.length > 0) {
            this.citiesFormCtrl.value.forEach(element => {
              if(element.id) {
                this.supplierService.updateSupplierLimitCity(element).subscribe();              
              }
              else {
                element.ownerId = this.user.ownerId;
                element.supplierId = this.Supplier.id;
                this.supplierService.addSupplierLimitCity(element).subscribe();
                console.log(element)
              }
            });
          }
          this.deletedCity.forEach(element => {
            this.supplierService.deleteSupplierLimitCity(element).subscribe();
          })
          // console.log(this.vehicleGroupsFormCtrl)
          if(this.vehicleGroupId.length > 0) {
            this.vehicleGroupId.forEach(element => {
              if(!this.retrievedVehicleGroupId.includes(element)) {
                var limit = {
                  vehicleGroupId: element,
                  ownerId: this.user.ownerId,
                  supplierId: this.Supplier.id
                }
                this.supplierService.addSupplierLimitVehicleGroup(limit).subscribe();              
              }
            });
          }
          this.retrievedVehicleGroupId.forEach(element => {
            if(!this.vehicleGroupId.includes(element)) {
              this.supplierService.deleteSupplierLimitVehicleGroup({vehicleGroupId: element, supplierId: this.Supplier.id}).subscribe();
            }
          })
          if(this.dutyTypeId.length > 0) {          
            this.dutyTypeId.forEach(element => {
              if(!this.retrievedDutyTypeId.includes(element)) {
                var limitDutyType = {
                  dutyTypeId: element,
                  ownerId: this.user.ownerId,
                  supplierId: this.Supplier.id,
                }
                this.supplierService.addSupplierLimitDutyType(limitDutyType).subscribe();
              }
            });
          }
          this.retrievedDutyTypeId.forEach(element => {
            if(!this.dutyTypeId.includes(element)) {
              this.supplierService.deleteSupplierLimitDutyType(element).subscribe();
            }
          })
        }       
      },err=>{},()=>{
        this.snackBar.open("Supplier Updated", "X", {duration: 3000});
        this.matDialogRef.close(this.param);
      });
    }
  }

  saveSupplier()
  {
    if(this.Supplier.name.trim()=="")
    {
      this.snackBar.open('Enter Name',null,{
        duration:5000
      });
    }
    // else if(this.Supplier.saddress.trim()=="")
    // {
    //   this.snackBar.open('Enter Address',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.Supplier.state.trim()=="")
    // {
    //   this.snackBar.open('Enter State',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.Supplier.type=="")
    // {
    //   this.snackBar.open('Enter Type',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.Supplier.phone.trim()=="")
    // {
    //   this.snackBar.open('Enter Phone Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(!this.Supplier.phone.match(/\b([789]\d{9}$)\b/))
    // {
    //   this.snackBar.open('Enter a valid Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.Supplier.email.trim()=="")
    // {
    //   this.snackBar.open('Enter Email',null,{
    //     duration:5000
    //   });
    // }
    // else if(!this.Supplier.email.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/))
    // {
    //   this.snackBar.open('Enter a valid Email',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.Supplier.panNo.trim()=="")
    // {
    //   this.snackBar.open('Enter Pan Number',null,{
    //     duration:5000
    //   });
    // }
  
    // else if(this.Supplier.gstin.trim()=="")
    // {
    //   this.snackBar.open('Enter GSTIN Number',null,{
    //     duration:5000
    //   });
    // }
  
    // else if(this.Supplier.tdsPercent.trim()=="")
    // {
    //     this.snackBar.open('Enter TDS',null,{
    //       duration:5000
    //     });
    // }
    // else if(this.Supplier.applicableTaxes=="")
    // {
    //     this.snackBar.open('Enter Applicable Taxes',null,{
    //       duration:5000
    //     });
    // }
  
    // else if(this.Supplier.billingName.trim()=="")
    // {
    //     this.snackBar.open('Enter Billing name',null,{
    //       duration:5000
    //     });
    // }
  
    // else if(this.Supplier.billingAddress.trim()=="")
    // {
    //     this.snackBar.open('Enter Billing Address',null,{
    //       duration:5000
    //     });
    // }
  
    // else if(this.Supplier.state=="")
    // {
    //   this.snackBar.open('Enter State',null,{
    //     duration:5000
    //   });
    // }
  
    // else if(this.Supplier.headOfficeCity.trim()=="")
    // {
    //   this.snackBar.open('Enter Head Office City',null,{
    //     duration:5000
    //   });
    // }
  
    // else if(this.Supplier.billingServiceTax=="")
    // {
    //     this.snackBar.open('Enter Service Tax',null,{
    //       duration:5000
    //     });
    // }
  
    // else if(this.Supplier.billingGSTType=="")
    // {
    //     this.snackBar.open('Enter GST Type',null,{
    //       duration:5000
    //     });
    // }
    // else if(this.Supplier.billingReverseChargeApplicable.trim()=="")
    // {
    //     this.snackBar.open('Enter Reverse Charge Applicable',null,{
    //       duration:5000
    //     });
    // }

    // else if(this.Supplier.startTime=="")
    // {
    //   this.snackBar.open('Enter Start Time',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.Supplier.endTime=="")
    // {
    //   this.snackBar.open('Enter End Time',null,{
    //     duration:5000
    //   });
    // }
    else
    {
      if(this.Supplier.type =='Owner-cum-Driver')
      {
        var dialTemp = this.dialog.open(NewVehiclesComponent,{disableClose:true,autoFocus:false,data:{type:'Owner-cum-Driver',driverName: this.Supplier.name}});
        dialTemp.afterClosed().subscribe(data => {
          console.log(data);
          if(data.inserted=='yes'){
            console.log(data)
            this.Supplier.vehicleId = data.data.id
            this.supplierService.addSupplier(this.Supplier).subscribe(data=>{
              if(data.affectedRows==1){
                this.param.inserted='yes';
                this.param.data=this.Supplier;
                this.activityLogs.addSupplierLogs({
                  supplierId:this.Supplier.id,
                  ownerId:this.Supplier.ownerId,
                  message:"Supplier created on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
                // console.log(this.citiesFormCtrl)
                if(this.citiesFormCtrl.length > 0) {
                  this.citiesFormCtrl.value.forEach(element => {
                    element.ownerId = this.user.ownerId;
                    element.supplierId = data.insertId;
                    this.supplierService.addSupplierLimitCity(element).subscribe();console.log(element)
                  });
                }
                // console.log(this.vehicleGroupsFormCtrl)
                if(this.vehicleGroupId.length > 0) {
                  this.vehicleGroupId.forEach(element => {
                    var limit = {
                      vehicleGroupId: element,
                      ownerId: this.user.ownerId,
                      supplierId: data.insertId
                    }
                    this.supplierService.addSupplierLimitVehicleGroup(limit).subscribe();
                    console.log(element)
                  });
                }        
                if(this.dutyTypeId.length > 0) {
                  this.dutyTypeId.forEach(element => {
                    var limitDutyType = {
                      dutyTypeId: element,
                      ownerId: this.user.ownerId,
                      supplierId: data.insertId,
                    }
                    this.supplierService.addSupplierLimitDutyType(limitDutyType).subscribe();
                    console.log(element)
                  });
                }
              } 
              this.matDialogRef.close(this.param);
            });
          }
          else
          {
            this.snackBar.open('Supplier details not saved','X',{duration:3000})
          }
        })
      }
      else
      {
        this.supplierService.addSupplier(this.Supplier).subscribe(data=>{
          if(data.affectedRows==1){
            this.param.inserted='yes';
            this.param.data=this.Supplier;
            // console.log(this.citiesFormCtrl)
            if(this.citiesFormCtrl.length > 0) {
              this.citiesFormCtrl.value.forEach(element => {
                element.ownerId = this.user.ownerId;
                element.supplierId = data.insertId;
                this.supplierService.addSupplierLimitCity(element).subscribe();console.log(element)
              });
            }
            // console.log(this.vehicleGroupsFormCtrl)
            if(this.vehicleGroupsFormCtrl.length > 0) {
              this.vehicleGroupsFormCtrl.value.forEach(element => {
                element.ownerId = this.user.ownerId;
                element.supplierId = data.insertId;
                this.supplierService.addSupplierLimitVehicleGroup(element).subscribe();
                console.log(element)
              });
            }        
          }
          this.snackBar.open("Supplier Added","X",{duration: 3000});
          this.dialog.closeAll();
          // this.matDialogRef.close(this.param);
        });
      }
    }
 
  }
  

  constructor(private vehicleGroupService:VehicleGroupsComponent,
    private fb:FormBuilder,
    private matDialogRef:MatDialogRef<AddSuppliersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private supplierService:SupplierService,
    private taxesService:TaxesComponent,
    public snackBar:MatSnackBar,
    private supplierGroupService:NewsuppliergroupComponent,
    private dialog:MatDialog,
    private auth:AuthService,
    private invoiceService: InvoiceService,
    private branchService: NewBranchService,
    private dutyTypeService: DutyTypeService,
    private router : Router,
    private activityLogs: ActivitylogService,
  ){
  
    var cData = localStorage.getItem('supplier');
console.log(cData);

    // if(this.Supplier==undefined)
    // {
    //   this.router.navigate(['/pages/masters/suppliersdisp'])
    // }
  
    if(cData != 'undefined' && cData != 'null')
    {
      this.Supplier = JSON.parse(cData);
      this.branchesCtrl.setValue(this.Supplier.branches);
      this.NewSupplierStateControl.setValue(this.Supplier.state);
      this.GSTStateControl.setValue(this.Supplier.billingState);
      this.supplierService.getSupplierLimitCity(this.Supplier).subscribe(data => {
        data.forEach(element => {
          const city=this.fb.group({
            id: element.id,
            city: element.city,
          })
          this.citiesFormCtrl.push(city);
        });
      })
             
      // console.log(this.vehicleGroupsFormCtrl)
      this.supplierService.getSupplierLimitVehicleGroup(this.Supplier).subscribe(data => {
        data.forEach(element => {
          this.vehicleGroupId.push(element.vehicleGroupId);
          this.retrievedVehicleGroupId.push(element.vehicleGroupId);
          // const vehicleGroups=this.fb.group({
          //   id: element.id,
          //   vehicleGroupId: element.vehicleGroupId,            
          // })
          // this.vehicleGroupsFormCtrl.push(vehicleGroups);
        });
      })

      this.supplierService.getSupplierLimitDutyType(this.Supplier).subscribe(data => {
        data.forEach(element => {
          this.dutyTypeId.push(element.dutyTypeId);
          this.retrievedDutyTypeId.push(element.dutyTypeId);
        });
      })
      this.activityLogs.getSupplierLogs({id:this.Supplier.id}).subscribe(data=>{
        this.logs = data
      })
      this.editState=true;
    }

    if(this.Supplier==undefined)
    {
      this.router.navigate(['/pages/masters/suppliersdisp'])
    }
   
  }
  param={
    inserted:'no',
    data:null
  }
  Supplier:Supplier={

 
    //Supplier Details
    sid:'', 
    name:'',
    saddress:'',
    state:'',
    type:'',
    phone:'',
    email:'',
    panNo:'',
    gstin:'',
    tdsPercent:'',  
    //GSTin details 
    billingName:'',
    billingAddress:'',
    billingState:'',
    billingPhone:'',
    headOfficeCity:'',
    billingServiceTax:'',
    billingGSTType:'',
    billingReverseChargeApplicable:'',
    //Applicable taxes
    applicableTaxes:'',
    //Working Hours
    startTime:'',
    endTime:'',
    earlyTime:'',
    lateTime:'',
    //Misc
    limitCities:'',
    branches:null,
    ownerId:'',
    vehicleId: null,
    revenueSharePercentage: '',
  }

}
