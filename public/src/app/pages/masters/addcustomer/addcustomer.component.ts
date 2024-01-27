import { Component, Inject, OnInit, HostListener} from '@angular/core';
import {CustomerService} from '../customer/customer.service';
import { Customer } from '../customer';
import {MAT_DIALOG_DATA,MatDialogRef,MatSnackBar, MatDialog} from '@angular/material';
import {map, startWith} from 'rxjs/operators';
import {FormControl, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { NewcustomergroupComponent, CustomerGroup } from '../newcustomergroup/newcustomergroup.component';
import { AuthService } from '../../../core/auth.service';
import * as moment from 'moment';
import { Tax } from '../taxes/taxes.component';
import { InvoiceService } from '../createinvoice/invoice.service';
import { VehicleGroupsComponent, VehicleGroup } from '../vehiclegroups/vehiclegroups.component';
import { User } from '../../../core/user';
import { DutyTypeService } from '../dutytype/duty-type.service';
import { DutyType } from '../dutytype/duty-type';

import { Router } from '@angular/router';
import { ActivitylogService } from '../../../activitylog.service';
@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./addcustomer.component.scss'],
  templateUrl: './addcustomer.component.html',
})
export class AddCustomerComponent implements OnInit {

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

  cities: Observable<string[]>;  
  cityCtrl: FormControl = new FormControl();

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  user: User={};
  cityForm: FormGroup;
  vehicleGroupsForm: FormGroup;
  dutyTypesForm: FormGroup;
  editState: boolean = false;
  customerGroups:Observable<CustomerGroup[]>;
  vehicleGroups:Observable<VehicleGroup[]>;
  dutyTypes: Observable<DutyType[]>;
  myForm:FormGroup;
  taxId: any;  
  tax:any[]=[];
  taxes:any;
  taxCtrl:FormControl=new FormControl();
  taxStatus: boolean = false;
  deletedCity = [];
  deletedVehicleGroup = [];  
  deletedDutyType = [];
  logs = [];
  vehicleGroupId: any[] = [];
  retrievedVehicleGroupId: any[] = [];
  dutyTypeId: any[] = [];
  retrievedDutyTypeId: any[] = [];
 
  saveCustomer() {
    if(this.customer.name.trim()=="") {
      this.snackBar.open('Enter Name', null, {
        duration:5000
      });
    }
    else if(this.customer.caddress.trim() == "") {
      this.snackBar.open('Enter Address', null, {
        duration:5000
      });
    }
    // else if(this.customer.state == "") {
    //   this.snackBar.open('Enter a State', null, {
    //     duration:5000
    //   });
    // }
    // else if(this.customer.phone == "") {
    //   this.snackBar.open('Enter a Phone Number', null, {
    //     duration:5000
    //   });
    // }
    // else if(this.customer.custGroup == "" || this.customer.customerGroupId === undefined) {
    //   this.snackBar.open('Enter a Customer Group', null, {
    //     duration:5000
    //   });
    // }
    // else if(!this.customer.phone.match(/\b([789]\d{9}$)\b/)) {
    //   this.snackBar.open('Enter a valid Phone Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.email.trim()=="") {
    //   this.snackBar.open('Enter a Email',null,{
    //     duration:5000
    //   });
    // }
    // else if(!this.customer.email.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/)) {
    //   this.snackBar.open('Enter a valid Email',null,{
    //     duration:5000
    //   });
    // }
    else if(this.customer.panNo.trim() != "" && !this.customer.panNo.match(/\b([A-Z]{5}[0-9]{4}[A-Z]{1})\b/)) //ask sid
    {
      this.snackBar.open('Enter a valid PAN Number',null,{
        duration:5000
      });
    }
    // else if(this.customer.contractSDate==null)
    // {
    //   this.snackBar.open('Enter Contract Start Date',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.baseCityForFuel=="")
    // {
    //   this.snackBar.open('Enter Base City Fuel',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.billingName=="")
    // {
    //   this.snackBar.open('Enter Billing Name',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.billingAddress=="")
    // {
    //   this.snackBar.open('Enter Billing Address',null,{
    //     duration:5000
    //   });
    // }
    
    // else if(this.customer.billingServiceTax=="")
    // {
    //   this.snackBar.open('Enter Service Tax',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.billingGSTType==null)
    // {
    //   this.snackBar.open('Enter GST type',null,{
    //     duration:5000
    //   });
    // } 
    // else if(this.customer.billingReverseChargeApplicable=="")
    // {
    //   this.snackBar.open('Enter Reverse Charge Applicable',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.billingContractEndDate=="")
    // {
    //   this.snackBar.open('Enter Contract End Date',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.billingForcedFuel=="")
    // {
    //   this.snackBar.open('Enter Forced Fuel',null,{
    //     duration:5000
    //   });
    // }
    else
    {
      this.customer.contractSDate=moment(this.customer.contractSDate).format("YYYY-MM-DD")
      this.customer.billingContractEndDate=moment(this.customer.billingContractEndDate).format("YYYY-MM-DD")
      this.customerService.addCustomer(this.customer).subscribe(data=>{
        if(data.affectedRows==1){
          this.param.inserted='yes';
          this.customer.id=data.insertId
          this.param.data=this.customer;
          this.activityLogs.addCustomerLogs({
            customerId:data.insertId,
            ownerId:this.customer.ownerId,
            message:"Customer created on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
          if(this.citiesFormCtrl.length > 0) {
            this.citiesFormCtrl.value.forEach(element => {
              element.ownerId = this.user.ownerId;
              element.customerId = data.insertId;
              this.customerService.addCustomerLimitCity(element).subscribe();
              console.log(element)
            });
          }
          // console.log(this.vehicleGroupsFormCtrl)
          // if(this.vehicleGroupsFormCtrl.length > 0) {
          //   this.vehicleGroupsFormCtrl.value.forEach(element => {
          //     element.ownerId = this.user.ownerId;
          //     element.customerId = data.insertId;
          //     this.customerService.addCustomerLimitVehicleGroup(element).subscribe();
          //     console.log(element)
          //   });
          // }    
          if(this.vehicleGroupId.length > 0) {
            this.vehicleGroupId.forEach(element => {
              var limit = {
                vehicleGroupId: element,
                ownerId: this.user.ownerId,
                customerId: data.insertId
              }
              // element.ownerId = this.user.ownerId;
              // element.customerId = data.insertId;
              this.customerService.addCustomerLimitVehicleGroup(limit).subscribe();
              console.log(element)
            })
          }
          if(this.dutyTypeId.length > 0) {
            this.dutyTypeId.forEach(element => {
              var limitDutyType = {
                dutyTypeId: element,
                ownerId: this.user.ownerId,
                customerId: data.insertId,
              }
              this.customerService.addCustomerLimitDutyType(limitDutyType).subscribe();              
            });
          }
        }
        // this.matDialogRef.close(this.param);
      },err=>{},()=>{
        this.snackBar.open("Customer Added","X",{duration: 3000});
        this.dialog.closeAll();
      });
     // this.customer.cid='';
    //  this.customer.name='';
     // this.customer.date='';
     // this.customer.email='';
     // this.customer.gstin='';
     // this.customer.status='';
      
    }
  }

  editCustomer() {
    
    if(this.customer.name.trim()=="") {
      this.snackBar.open('Enter Name', null, {
        duration:5000
      });
    }
    // else if(this.customer.caddress.trim() == "") {
    //   this.snackBar.open('Enter Address', null, {
    //     duration:5000
    //   });
    // }
    // else if(this.customer.state == "") {
    //   this.snackBar.open('Enter a State', null, {
    //     duration:5000
    //   });
    // }
    // else if(this.customer.phone == "") {
    //   this.snackBar.open('Enter a Phone Number', null, {
    //     duration:5000
    //   });
    // }
    // else if(this.customer.custGroup == "" || this.customer.customerGroupId === undefined) {
    //   this.snackBar.open('Enter a Customer Group', null, {
    //     duration:5000
    //   });
    // }
    // else if(!this.customer.phone.match(/\b([789]\d{9}$)\b/)) {
    //   this.snackBar.open('Enter a valid Phone Number',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.email.trim()=="") {
    //   this.snackBar.open('Enter a Email',null,{
    //     duration:5000
    //   });
    // }
    // else if(!this.customer.email.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/)) {
    //   this.snackBar.open('Enter a valid Email',null,{
    //     duration:5000
    //   });
    // }
    else if(this.customer.panNo.match("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/")) //ask sid
    {
      this.snackBar.open('Enter a valid Pan card number',null,{
        duration:5000
      });
    }
    // else if(this.customer.contractSDate==null)
    // {
    //   this.snackBar.open('Enter Contract Start Date',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.baseCityForFuel=="")
    // {
    //   this.snackBar.open('Enter Base City Fuel',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.billingName=="")
    // {
    //   this.snackBar.open('Enter Billing Name',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.billingAddress=="")
    // {
    //   this.snackBar.open('Enter Billing Address',null,{
    //     duration:5000
    //   });
    // }
    
    // else if(this.customer.billingServiceTax=="")
    // {
    //   this.snackBar.open('Enter Service Tax',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.billingGSTType==null)
    // {
    //   this.snackBar.open('Enter GST type',null,{
    //     duration:5000
    //   });
    // } 
    // else if(this.customer.billingReverseChargeApplicable=="")
    // {
    //   this.snackBar.open('Enter Reverse Charge Applicable',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.billingContractEndDate=="")
    // {
    //   this.snackBar.open('Enter Contract End Date',null,{
    //     duration:5000
    //   });
    // }
    // else if(this.customer.billingForcedFuel=="")
    // {
    //   this.snackBar.open('Enter Forced Fuel',null,{
    //     duration:5000
    //   });
    // }
    else {
      this.customer.contractSDate=moment(this.customer.contractSDate).format("YYYY-MM-DD")
      this.customer.billingContractEndDate=moment(this.customer.billingContractEndDate).format("YYYY-MM-DD")
      
      this.customerService.updateCustomer(this.customer).subscribe(data=>{
        this.activityLogs.addCustomerLogs({
          customerId:this.customer.id,
          ownerId:this.customer.ownerId,
          message:"Customer edited on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
        if(this.citiesFormCtrl.length > 0) {
          this.citiesFormCtrl.value.forEach(element => {
            if(element.id) {
              this.customerService.updateCustomerLimitCity(element).subscribe();          
            }
            else {
              element.ownerId = this.user.ownerId;
              element.customerId = this.customer.id;
              this.customerService.addCustomerLimitCity(element).subscribe();
              console.log(element) 
            }
          });
        }
        this.deletedCity.forEach(element => {
          this.customerService.deleteCustomerLimitCity(element).subscribe();
        })
        // console.log(this.vehicleGroupsFormCtrl)
        // if(this.vehicleGroupsFormCtrl.length > 0) {
        //   this.vehicleGroupsFormCtrl.value.forEach(element => {
        //     if(element.id) {
        //       this.customerService.updateCustomerLimitVehicleGroup(element).subscribe();              
        //     }
        //     else {
        //       element.ownerId = this.user.ownerId;
        //       element.customerId = this.customer.id;
        //       this.customerService.addCustomerLimitVehicleGroup(element).subscribe();
        //       console.log(element)
        //     }
        //   });
        // }
        // this.deletedVehicleGroup.forEach(element => {
        //   this.customerService.deleteCustomerLimitVehicleGroup(element).subscribe();
        // })           
        if(this.vehicleGroupId.length > 0) {
          this.vehicleGroupId.forEach(element => {
            if(!this.retrievedVehicleGroupId.includes(element)) {
              var limit = {
                vehicleGroupId: element,
                ownerId: this.user.ownerId,
                customerId: this.customer.id
              }
              this.customerService.addCustomerLimitVehicleGroup(limit).subscribe();
            }
          })       
        }
        this.retrievedVehicleGroupId.forEach(element => {
          if(!this.vehicleGroupId.includes(element)) {
            this.customerService.deleteCustomerLimitVehicleGroup({vehicleGroupId: element, customerId: this.customer.id}).subscribe();
          }
        })
        if(this.dutyTypeId.length > 0) {
          this.dutyTypeId.forEach(element => {
            if(!this.retrievedDutyTypeId.includes(element)) {
              var limitDutyType = {
                dutyTypeId: element,
                ownerId: this.user.ownerId,
                customerId: this.customer.id,
              }
              this.customerService.addCustomerLimitDutyType(limitDutyType).subscribe();              
            }
          });
        }
        this.retrievedDutyTypeId.forEach(element => {
          if(!this.dutyTypeId.includes(element)) {
            this.customerService.deleteCustomerLimitDutyType({dutyTypeId: element, customerId: this.customer.id}).subscribe();
          }
        })
      },err=>{},()=>{
        this.snackBar.open("Customer Updated",null,{duration:2000});
        this.dialog.closeAll();
      })
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer);
  }

  param = {
    inserted:'no',
    data:null
  }

  custStateCtrl: FormControl = new FormControl();
  billingStateCtrl= new FormControl();

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

  custStateOptions: Observable<string[]>;
  billingStateOptions: Observable<string[]>;

  ngOnInit() {
    this.myForm=this.fb.group({
      rows:this.fb.array([])
    })
    this.cityForm=this.fb.group({
      cities:this.fb.array([])
    });

    this.vehicleGroupsForm=this.fb.group({
      vehicleGroups:this.fb.array([])
    });
    this.dutyTypesForm=this.fb.group({
      dutyTypes:this.fb.array([])
    });
    this.auth.user.subscribe(data=>{
      this.user = data[0];
      this.customer.ownerId=data[0].ownerId;
      this.invoiceService.getTaxes(data[0]).subscribe(data=>{
        console.log(data)
        this.tax=data;
        if(this.customer != null) {          
          this.taxId = this.customer.applicableTaxes;
          var cTax = this.tax.find(x=>x.id===Number(this.taxId))
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
    })    
    this.customerGroupService.getCustomerGroups(this.customer).subscribe(data=>{
      this.customerGroups=data;
    })
    this.vehicleGroupService.getvehicleGroup(this.user).subscribe(data=>{
      this.vehicleGroups=data;
    });
    this.dutyTypeService.getDutyType(this.user).subscribe(data => {
      this.dutyTypes=data;
    })
    this.custStateOptions = this.custStateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterCustStates(val))
      );
    this.billingStateOptions = this.billingStateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterBillingStates(val))
      );
    
  }

  filterCity(i:any) {    
    this.cities = this.citiesFormCtrl.at(i).get('city').valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterFromCity(val))
    );            
  }
  filterCustStates(val: string): string[] {
    return this.states.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  filterBillingStates(val: string): string[] {
    return this.states.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  filterFromCity(val: string): string[] {
    return this.city.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  custStateSelect(option,event:any) {
    if(event.source.selected==true) {
     this.customer.state=option;
    }
  }

  setCustGroupId(option,event:any)
  {
    if(event.source.selected==true) {
      this.customer.customerGroupId=option.id;
     }
  }

  billingStateSelect(option,event:any) {
    if(event.source.selected==true) {
      this.customer.billingState=option;
    }
  }

  citySelect(option,event:any){
    if(event.source.selected==true)
    {
      this.customer.baseCityForFuel = option;
    }
  }

  get applicableTaxes() {
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

  deleteRow(i) {
    this.applicableTaxes.removeAt(i);
    this.taxStatus = false;
    this.customer.applicableTaxes = null;
  }

  addRow(temp:boolean) {
    const row=this.fb.group({
      tax:'',
      tempTax:temp
    })
    this.applicableTaxes.push(row);
    this.taxStatus = true;
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
    console.log(this.vehicleGroupsFormCtrl);
    
    const vehicleGroups=this.fb.group({
      vehicleGroupId: '',
      vehicleGroupName: '',
    })
    this.vehicleGroupsFormCtrl.push(vehicleGroups);
  }
  deleteVehicleGroup(i, aRow){
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

  filterTax(val:string) {
    return this.tax.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  setTax(option,$event) {
    this.customer.applicableTaxes = option.id;
  }

  customer:Customer = {
    //Customer Details
    ownerId:'',
    name:'',
    caddress:'', 
    state:'', 
    custGroup:'', 
    customerGroupId:null,
    phone:'', 
    alternatePhone:'',
    email:'',
    panNo:'',
    gstin:'', 
    tdsPercent:'', 
    contractSDate:'',
    surchargePercent:'', 
    baseCityForFuel:'',   
    //GSTin details 
    billingName:'',
    billingAddress:'',
    billingState:'',
    billingPhone:'',
    billingEmail:'',
    billingServiceTax:'',
    billingGSTType:'',
    billingReverseChargeApplicable:'',
    billingContractEndDate:'',
    billingForcedFuel:'',
    //Applicable taxes
    applicableTaxes:0,
    //Driver Allowance
    earlyTime:'',
    lateTime:'',
    //Misc
    notes:'',
    enableCustomPricing:'',
    denyBookbyPassenger:'',
    active:true,
    //Temp
    date:'',
    status:'',
    // public editable: boolean = false
  }

  constructor(
    private customerGroupService:NewcustomergroupComponent,
    private matDialogRef:MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerService:CustomerService,
    private dutyTypeService: DutyTypeService,
    public snackBar:MatSnackBar,
    private fb:FormBuilder,
    private dialog:MatDialog,
    private auth:AuthService,
    private invoiceService: InvoiceService,
    private vehicleGroupService: VehicleGroupsComponent,
    private router: Router,
    private activityLogs: ActivitylogService,
  ) {

    var cData = localStorage.getItem('customer');
    console.log(cData);
    
    if(cData != 'undefined' && cData != null)
    {
      this.customer = JSON.parse(cData);
      this.editState = true;
      this.custStateCtrl.setValue(this.customer.state);
      this.billingStateCtrl.setValue(this.customer.billingState);
      this.customerService.getCustomerLimitCity(this.customer).subscribe(data => {
        data.forEach(element => {
          const city=this.fb.group({
            id: element.id,
            city: element.city,
          })
          this.citiesFormCtrl.push(city);
        });
      })
             
      // console.log(this.vehicleGroupsFormCtrl)
      this.customerService.getCustomerLimitVehicleGroup(this.customer).subscribe(data => {
        data.forEach(element => {
          this.vehicleGroupId.push(element.vehicleGroupId);
          this.retrievedVehicleGroupId.push(element.vehicleGroupId);
        });
      })

      this.customerService.getCustomerLimitDutyType(this.customer).subscribe(data => {
        data.forEach(element => {
          this.dutyTypeId.push(element.dutyTypeId);
          this.retrievedDutyTypeId.push(element.dutyTypeId);
        });
      })
  
      this.activityLogs.getCustomerLogs({id:this.customer.id}).subscribe(data=>{
        this.logs = data
      })
    }

    if(this.customer==undefined)
    {
      this.router.navigate(['/pages/masters/customer'])
    }
  }
}
