import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Customer } from '../../masters/customer';
import { AuthService } from '../../../core/auth.service';
import { CustomerService } from '../../masters/customer/customer.service';
import { BookingsService } from '../../operations/bookings.service';
import { HotelService } from '../displayhotels/hotel.service';
import { MAT_DIALOG_DATA, MatDatepickerInputEvent, MatDialog, MatSnackBar } from '@angular/material';
import * as moment from 'moment';
import { EmployeeService } from '../../masters/new-employees/employee.service';
import { ActivitylogService } from '../../../activitylog.service';

@Component({
  selector: 'bookhotel',
  templateUrl: './bookhotel.component.html',
  styleUrls: ['./bookhotel.component.scss']
})
export class BookhotelComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  bookHotel: FormGroup
  editState: boolean = false;

  customerName = new FormControl();
  filteredOptions: any;

  customerCtrl:FormControl=new FormControl();
  customers:any[];
  customer:any;

  hotelCtrl:FormControl=new FormControl();
  hotels:any[];
  hotel:any;

  bookByCtrl:FormControl = new FormControl();
  bookBy:Observable<string[]>;
  bookByArr:any[];

  user:any;
  checkOutDate: number;
  checkInDate: number;
  nights: number;
  minDate: Date;

  ws:WebSocket;
  deletedCharges = [];
  cityCtrl: FormControl = new FormControl();
  cities: any;
  city = [
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

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private customerService: CustomerService, 
    private bookingService: BookingsService,
    private hotelService: HotelService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data,
    private employeeService: EmployeeService, 
    private activityLogs:ActivitylogService,
  ) {
      console.log(data)
      // if(data.row1!= null){
      //   this.bookHotelData.hotelName=data.row1.hotelName;
      //   this.bookHotelData.hotelCity=data.row1.city;
      //   this.bookHotelData.hotelId=data.row1.id
      // }
      if(data.row != null) {
        this.editState=true;
        this.bookHotelData = data.row;
        this.customerCtrl.setValue(data.row.customerName)
        this.bookByCtrl.setValue(data.row.bookByName)
        this.hotelCtrl.setValue(data.row.hotelName)
        this.cityCtrl.setValue(data.row.hotelCity)
        this.hotelService.getHotelBookingsAdditionalCharges(this.bookHotelData).subscribe(data => {
          data.forEach(element => {
            const additionalCharge=this.fb.group({
              id: element.id,
              hotelBookingId: element.hotelBookingId,
              description: element.description,
              quantity: element.quantity,
              additionalChargesRate: element.additionalChargesRate,
              charges: element.charges,
            })
            this.additionalChargesForm.push(additionalCharge);
          });
          if(this.additionalChargesForm.value.length == 0) {
            this.addRow();
          }
        })
        
      }      
      this.cities = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterCity(val))
      );
     }

  ngOnInit() {

    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);

    this.auth.user.subscribe(data => {
      this.user = data[0];
    })

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
      total: ['', {disabled: true}],
      intInclusion: [''],
      hotelRate: [''],
      intAmount: [''],
      agents: [''],
      commission: [''],
      intTaxes: [''],
      intTotal: ['', {disabled: true}],
      additionalCharges: this.fb.array([]),
    })

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
    })

    if(this.user.type == 'employee') {
      var body = {
        userId: this.user.id
      }
      this.employeeService.getEmployeeForCustomer(body).subscribe(data => {
        this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(data => {
          if(data.length != 0) {              
            this.customers=data;
            this.customer=this.customerCtrl.valueChanges
            .pipe(
              startWith(''),
              map(val=>this.filterCustomer(val))
            );
          }
          else {
            this.getCustomer();
          }
        })
      })
    }
    else {
      this.getCustomer();
    }

    this.hotelService.getHotels(this.user).subscribe(data => {
      this.hotels=data;
      this.hotel=this.hotelCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val=>this.filterHotel(val))
      );
    })
    
    if(this.data.row == null) {
      console.log(this.additionalChargesForm);
      
      this.addRow();
    }
    
  }

  getCustomer() {
    this.customerService.getCustomers(this.user).subscribe(data=>{
      this.customers=data;
      this.customer=this.customerCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val=>this.filterCustomer(val))
      );
    });
  }

  saveHotel() {
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
    if(this.bookHotelData.hotelId == null) {
      this.bookHotelData.status = 'Unconfirmed';
    }
    else {
      this.bookHotelData.status = 'Booked';
    }

    this.hotelService.addBooking(this.bookHotelData).subscribe(data => {
      console.log(data)
      this.bookHotelData.id = data.insertId;
      this.additionalChargesForm.value.forEach(element => {
        if(element.description != '' && element.quantity  != '' && element.additionalChargesRate != '' && element.charges != '') {
          element.hotelBookingId = data.insertId;
          this.hotelService.addBookingAdditionalCharges(element).subscribe(data => {      
            console.log(data)
          })
        }
      })
      this.activityLogs.addHotelLogs({
        hotelBookingId:data.insertId,
        ownerId:this.user.ownerId,
        message:"Booking created on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name
      }).subscribe()
    },err=>{},()=>{
      this.ws.send(this.user.ownerId+"hotelbooking");
      this.snackBar.open("Hotel Booking Added", "X", {duration: 3000});
      this.dialog.closeAll();
    })
  }

  updateHotel() {
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
    if(this.bookHotelData.hotelId == null) {
      this.bookHotelData.status = 'Unconfirmed';
    }
    else {
      this.bookHotelData.status = 'Booked';
    }
    
    this.hotelService.updateHotelBooking(this.bookHotelData).subscribe(data=>{
      this.additionalChargesForm.value.forEach(element => {
        console.log(element);
        
        if(element.id) {
          this.hotelService.updateHotelBookingAdditionalCharges(element).subscribe();
          
        }
        else {
          element.hotelBookingId = this.bookHotelData.id;
          this.hotelService.addBookingAdditionalCharges(element).subscribe(data => {      
            console.log(data)
          })
        }
      });
      this.deletedCharges.forEach(element => {
        this.hotelService.deleteHotelBookingAdditionalCharges(element).subscribe();
      })
    },err=>{},()=>{
      this.ws.send(this.user.ownerId+"hotelbooking");
      this.snackBar.open("Hotel Booking Updated", "X", {duration: 3000});
      this.dialog.closeAll();
    })
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  setCustomer(temp,event:any) {
    if(event.source.selected == true) {
      this.bookHotelData.customerId = temp.id;
      this.bookHotelData.customerName = temp.name;
      this.bookHotelData.billedToNo = temp.phone;
      this.bookHotelData.billedToEmail = temp.email
      this.bookHotel.patchValue({
        'billedToNo': this.bookHotelData.billedToNo,
        'billedToEmail': this.bookHotelData.billedToEmail,
      })
    }

    var tempCust= {
      ownerId: this.user.ownerId,
      customerId: temp.id
    }

    this.bookingService.getRecurringBookedBy(tempCust).subscribe(data=>{
      this.bookByArr=data;
      this.bookBy = this.bookByCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterBookBy(val))
      );
    })
  }
  setBookBy(option,event:any){
    if(event.source.selected == true)
    {
      this.bookHotelData.bookByName = option.name;
      this.bookHotelData.bookByNo = option.phoneNo;
      this.bookHotelData.bookByEmail = option.emailId;
      this.bookHotel.patchValue({
        'bookByNo':this.bookHotelData.bookByNo,
        'bookByEmail':this.bookHotelData.bookByEmail
      })
    }
  }
  setCheckInDate(event: any) {
    console.log(event.value._d.getTime());
    this.minDate = event.value._d
    this.checkInDate = event.value._d.getTime()
    
  }
  setCheckOutDate(event: any) {
    console.log(moment(event.value).format("YYYY-MM-DD"))
    this.checkOutDate = event.value._d.getTime()
    console.log(Math.round(Math.abs((this.checkOutDate - this.checkInDate)/(1000*60*60*24))))
    // console.log(this.checkOutDate - this.checkInDate);
    this.nights = Math.round(Math.abs((this.checkOutDate - this.checkInDate)/(1000*60*60*24)));
    this.bookHotel.patchValue({
      'nights':this.nights
    })
    this.bookHotelData.nights = this.nights;
  }

  amount: number = 0;
  taxes: number = 0;
  total: number = 0;

  setAmount(temp, event: any) {
    this.amount = temp;
    this.setTotal(this.amount, this.taxes);
  }
  setTaxes(temp, event: any) {
    this.taxes = temp;
    this.setTotal(this.amount, this.taxes);
  }
  setTotal(temp1, temp2) {
    this.total = 0;
    this.total = Number(temp1)+Number(temp2);
    this.bookHotel.patchValue({
      'total': this.total
    })
  }

  intAmount: number = 0;
  commission: number = 0;
  intTaxes: number = 0;
  intTotal: number = 0;

  setIntAmount(temp, event: any) {
    this.intAmount = temp;
    this.setIntTotal(this.intAmount, this.commission, this.intTaxes);
  }
  setCommission(temp, event: any) {
    this.commission = temp;
    this.setIntTotal(this.intAmount, this.commission, this.intTaxes);
  }
  setIntTaxes(temp, event: any) {
    this.intTaxes = temp;
    this.setIntTotal(this.intAmount, this.commission, this.intTaxes);
  }
  setIntTotal(temp1, temp2, temp3) {
    this.intTotal = 0;
    this.intTotal = Number(temp1)+Number(temp2)+Number(temp3);
    this.bookHotel.patchValue({
      'intTotal': this.intTotal
    })
  }
  setCity(temp,event:any) {
    if(event.source.selected == true) {
      this.hotelService.getHotelCity({city: temp, ownerId: this.user.ownerId}).subscribe(data => {
        this.hotels=data;
        this.hotel=this.hotelCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterHotel(val))
        );
      })
    }
  }
  setHotel(temp, event:any) {
    if(event.source.selected == true) {
      this.bookHotelData.hotelId = temp.id;
      this.bookHotelData.hotelName = temp.hotelName;
      this.bookHotelData.hotelCity = temp.city;
    }
  }

  filterCustomer(val:string){
    return this.customers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase())
    )
  }
  filterBookBy(val:string){
    return this.bookByArr.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase())
    )
  }
  filterCity(val: string): string[] {
    return this.city.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  filterHotel(val: string): string[] {
    return this.hotels.filter(option =>
      option.hotelName.toLowerCase().includes(val.toLowerCase()));
  }

  get additionalChargesForm(){
    return this.bookHotel.get('additionalCharges') as FormArray;
  }
  addRow(){
    const additionalCharge=this.fb.group({      
      hotelBookingId: [''],
      description: [''],
      quantity: [''],
      additionalChargesRate: [''],
      charges: [''],
    })
    this.additionalChargesForm.push(additionalCharge);
  }
  deleteRow(i, row){      
    this.additionalChargesForm.removeAt(i);
    console.log(row);
    
    if(row.value.id) {
      this.deletedCharges.push(row.value);
    }
  }

  bookHotelData: BookHotelData = {
    customerId: '',
    customerName: '',
    guestName: '',
    checkInDate: '',
    checkOutDate: '',    
    bookByName: '',
    bookByNo: '',
    bookByEmail: '',    
    ownerId: '',
    hotelName:'',
    hotelId:null,
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
  }

}

export interface BookHotelData {
  customerId?: string,
  customerName?: string,
  guestName?: string,
  checkInDate?: string,
  checkOutDate?: string,  
  bookByName?: string,
  bookByNo?: string,
  bookByEmail?: string,  
  ownerId?: string,
  hotelName?:string;
  hotelId?:string;
  hotelCity?: string;        
  billedToNo?: string;
  billedToEmail?: string;    
  room?: string;
  occupancy?: string;
  guestMobile?: string;
  guestEmail?: string;
  checkInTime?: string;
  checkOutTime?: string;
  nights?: number;
  noOfPeople?: number;
  confNo?: string;
  inclusion?: number;
  rate?: number;
  amount?: number;
  paymentMode?: string;
  taxes?: number;
  hotelBillNo?: string;
  hotelAmount?: number;
  total?: number;
  intInclusion?: number;
  hotelRate?: number;
  intAmount?: number;
  agents?: string;
  commission?: number;
  intTaxes?: number;
  intTotal?: number;
  // additionalCharges?: any[];
  id?: string;
  status?: string;
}
