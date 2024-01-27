import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Customer } from '../../masters/customer';
import { BusinesssettingService } from './businesssetting.service';
import { AuthService } from '../../../core/auth.service';
import { CustomerService } from '../../masters/customer/customer.service';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NewBranchService } from '../../operations/new-branch/new-branch.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'businesssetting',
  templateUrl: './businesssetting.component.html',
  styleUrls: ['./businesssetting.component.scss']
})
export class BusinesssettingComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  editState: Boolean = false;

  driverAllowanceForm: FormGroup;
  SMSPhoneNumbersForm: FormGroup;
  EmailAddressForm: FormGroup;
  textEditorForm: FormGroup;
  dispatchCenters: any;

  businessSettings: BusinessSettings = {    
    ownerID: '',
    AllowBookingsToBeAddedWithoutAnyPricing: false,
    AutoSendAllotmentNotificationToDriverApp: false,
    UseBookingsIDInSMS: false,
    DefaultStartFromGarage: '',
    RoundOffDutySlipTimeToNearestHour: false,
    ShowGarageStartTimeInsteadOfReportingTime: false,
    ShowFromCity: false,
    ShowDropAddress: false,
    ShowRemarks: false,
    ShowVehicleGroup: false,
    ShowLabels: false,
    AddCustomerName: false,
    AddBookedByName: false,
    AddAllPassengerNamesAndNumbers: false,
    HideVehicleName: false,
    HideRemarks: false,
    AddGarageStartTime: false,
    AddReleasedKmTimeSection: false,
    AddEntireBookingDateRange: false,
    AddPrintedByInformationToFooter: false,
    AlwaysUseFullPageDesign: false,
    HideBusinessLetterHead: false,
    HideCustomerNameForDriverSupplierInMobileApp: false,
    invoiceDatesAndNumbering: 'Automatic',
    RoundOffExtraTimeOfEveryDutyWhileDisplayingOnInvoice: false,
    ShowPerKilometerRateOnInvoiceForDayKMDuties: false,
    HideVehicleNumberFromInvoice: false,
    ShowDutySummaryAtTheTopOfTheInvoiceAlways: false,
    ShowDutyId: false,
    ShowDutyType: false,
    ShowBookedByName: false,
    ShowPassengerNames: false,
    ShowVehicleGroupName: false,
    ShowVehicleNumber: false,
    ShowStartDate: false,
    ShowEndDate: false,
    ShowStartTime: false,
    ShowEndTime: false,
    ShowExtraHour: false,
    ShowTotalHour: false,
    ShowStartKM: false,
    ShowEndKM: false,
    ShowExtraKM: false,
    ShowTotalKM: false,
    ShowExtraHourRate: false,
    ShowExtraKMRate: false,
    ShowExtraHourCost: false,
    ShowExtraKMCost: false,
    ShowConsolidatedBillingItems: false,
    ShowSeparatedBillingItems: false,
    ShowAllowances: false,
    ShowPrice: false,
    ShowQuantityNumberOfDays: false,
    ShowTotalPrice: false,
    ShowCarHireCharges: false,
    ShowDutySubtotal: false,
    ShowDutySubtotalIncludingAllowances: false,
    ShowPurchaseDutyID: false,
    ShowPurchaseDutyType: false,
    ShowPurchaseBookedByName: false,
    ShowPurchasePassengerNames: false,
    ShowPurchaseVehicleGroupName: false,
    ShowPurchaseVehicleNumber: false,
    ShowPurchaseStartDate: false,
    ShowPurchaseEndDate: false,
    ShowPurchaseStartTime: false,
    ShowPurchaseEndTime: false,
    ShowPurchaseExtraHour: false,
    ShowPurchaseTotalHours: false,
    ShowPurchaseStartKM: false,
    ShowPurchaseEndKM: false,
    ShowPurchaseExtraKM: false,
    ShowPurchaseTotalKm: false,
    ShowPurchaseExtraHourRate: false,
    ShowPurchaseExtraKMRate: false,
    ShowPurchaseExtraHourCost: false,
    ShowPurchaseExtraKMCost: false,
    ShowPurchaseConsolidatedBillingItems: false,
    ShowPurchaseSeparatedBillingItems: false,
    ShowPurchaseAllowances: false,
    ShowPurchasePrice: false,
    ShowPurchaseDutySubtotal: false,
    ShowCustomerCarHireCharges: false,
    ShowCustomerCarHireChargesIncludingAllowances: false,
    ShowCustomerDutySubtotal: false,
    ShowCustomerDutySubtotalIncludingAllowances: false,
    defaultCustomer: '',
    dispatchCenter: '',
    defaultCity: '',
    AutoCCEmail: '',
    CCAllConfirmationAndCancellationEmails: false,
    CCAllAllotmentEmails: false,
    CCAllInvoiceEmails: false,
    SMSMask: '',
    AutoAcceptIncomingDutySlip: false,
    bookingConfirmationHeader: '',
    bookingConfirmationFooter: '',
    dutyAllotmentToCustomerHeader: '',
    dutyAllotmentToCustomerFooter: '',
    dutyAllotmentToSupplierHeader: '',
    dutyAllotmentToSupplierFooter: '',
    dutyBookingCancellationHeader: '',
    dutyBookingCancellationFooter: '',
    invoiceToCustomerHeader: '',
    invoiceToCustomerFooter: '',
    paymentRequestHeader: '',
    paymentRequestFooter: '',
    SMSEnabled: false,
    EmailEnabled: false,
    trackingProvider: '',
    trackingUsername: '',
    trackingPassword: '',
    defaultTermsAndConditions: '',
  }
        
  customerCtrl: FormControl = new FormControl();
  customers: Customer[];
  customer: any;
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

  user: any;

  deletedDriverAllowance = [];
  deletedSMSNumber = [];
  deletedEmailAddresses = [];

  constructor(
    private fb: FormBuilder,
    private businessSettingService: BusinesssettingService,
    private auth: AuthService,
    private customerService: CustomerService,
    private router: Router,
    private branchService: NewBranchService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(data => {
      this.user = data[0]
      console.log(this.user)
      this.customerService.getCustomers(this.user).subscribe(data => {
        this.customers = data;
        this.customer = this.customerCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val => this.filterCustomer(val))
        );
      });
      this.branchService.getBranches(this.user).subscribe(data => {
        console.log(data)
        this.dispatchCenters = data;
      })
      this.businessSettingService.getBusinessSettings(this.user).subscribe(data => {
        console.log(data)
        if(data.length != 0) {
          this.editState = true;
          this.businessSettings = data[0];
          this.customerCtrl.setValue(this.businessSettings.defaultCustomer);
          this.cityCtrl.setValue(this.businessSettings.defaultCity);
          console.log(this.businessSettings)
          var temp = {
            ownerId: this.user.ownerId,
            businessSettingsId: data[0].id,
          }
          this.businessSettingService.getDriverAllowances(temp).subscribe(data => {
            console.log(data);
            data.forEach(element => {
              const row = this.fb.group({
                id: element.id,
                allowanceType: element.allowanceType,
                chargedToCustomer: element.chargedToCustomer,
                amount: element.amount,
              })
              this.driverAllowancesForms.push(row);
            });
          })
          if(this.businessSettings.SMSEnabled == true) {
            this.businessSettingService.getSMSPhoneNumbers(temp).subscribe(data => {
              console.log(data);
              data.forEach(element => {
                const row = this.fb.group({
                  id: element.id,
                  phoneNumber: element.phoneNumber
                })
                this.SMSPhoneNumbersForms.push(row);
              });
            })
          }
          if(this.businessSettings.EmailEnabled == true) {
            this.businessSettingService.getEmailAddresses(temp).subscribe(data => {
              console.log(data);
              data.forEach(element => {
                const row = this.fb.group({
                  id: element.id,
                  emailAddress: element.emailAddress
                })
                this.EmailAddressForms.push(row);
              });
            })
          }
        }
        else {
          this.addDriverAllowance();
        }
      })
    })

    this.cities = this.cityCtrl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterCity(val))
    );

    this.driverAllowanceForm = this.fb.group({
      rows: this.fb.array([])
    })

    this.SMSPhoneNumbersForm = this.fb.group({
      rows: this.fb.array([])
    })

    this.EmailAddressForm = this.fb.group({
      rows: this.fb.array([])
    })    
  }

  filterCustomer(val:string) {
    return this.customers.filter(option =>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  filterCity(val: string): string[] {
    return this.city.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  get driverAllowancesForms() {
    return this.driverAllowanceForm.get('rows') as FormArray;
  }
  addDriverAllowance(){
    const row = this.fb.group({      
      allowanceType: [''],
      chargedToCustomer: [false],
      amount: [0]
    })
    this.driverAllowancesForms.push(row);
  }
  deleteDriverAllowance(i, aRow) {    
    this.driverAllowancesForms.removeAt(i);
    if(aRow.value.id != '') {
      this.deletedDriverAllowance.push(aRow.value)
    }
  }

  get SMSPhoneNumbersForms() {
    return this.SMSPhoneNumbersForm.get('rows') as FormArray;
  }
  addSMSPhoneNumber(){
    const row = this.fb.group({      
      phoneNumber: [0]
    })
    this.SMSPhoneNumbersForms.push(row);
  }
  deleteSMSPhoneNumber(i, aRow) {    
    this.SMSPhoneNumbersForms.removeAt(i);
    if(aRow.value.id != '') {
      this.deletedSMSNumber.push(aRow.value)
    }
  }

  get EmailAddressForms() {
    return this.EmailAddressForm.get('rows') as FormArray;
  }
  addEmailAddress(){
    const row = this.fb.group({
      emailAddress: ['']
    })
    this.EmailAddressForms.push(row);
  }
  deleteEmailAddress(i, aRow) {    
    this.EmailAddressForms.removeAt(i);
    if(aRow.value.id != '') {
      this.deletedEmailAddresses.push(aRow.value)
    }
  }

  saveDutiesBookings() {
    
  }

  selectInvoiceDatesAndNumbering(temp) {
    this.businessSettings.invoiceDatesAndNumbering = temp;
  }

  selectProvider(temp) {
    this.businessSettings.trackingProvider = temp;
  }

  saveBilling() {
    
  }

  savePurchase() {
    
  }

  setCustomer(temp,event:any) {
    if(event.source.selected == true) {
      this.businessSettings.defaultCustomer = temp.name;
    }
  }

  setCity(temp,event:any) {
    if(event.source.selected == true) {
      this.businessSettings.defaultCity = temp;
    }
  }

  setDispatchCenter(temp) {
   this.businessSettings.dispatchCenter = temp;
  }

  saveOthers() {
    
  }

  saveDriverAllowance() {
    
  }

  saveNotification() {
    
  }

  saveEmailTemplates() {
    
  }

  saveBusinessSettings() {
    console.log(this.businessSettings);
    this.businessSettings.ownerID = this.user.ownerId;
    this.businessSettingService.addBusinessSettings(this.businessSettings).subscribe(data => {
      this.driverAllowancesForms.value.forEach(element => {      
        element.businessSettingsId = data.insertId;
        element.ownerId = this.user.ownerId;
        this.businessSettingService.addDriverAllowances(element).subscribe(data => {})
      });
      if(this.businessSettings.SMSEnabled == true) {
        this.SMSPhoneNumbersForms.value.forEach(element => {
          element.businessSettingsId = data.insertId;
          element.ownerId = this.user.ownerId;
          this.businessSettingService.addSMSPhoneNumbers(element).subscribe(data => {})
        });
      }
      if(this.businessSettings.EmailEnabled == true) {
        this.EmailAddressForms.value.forEach(element => {
          element.businessSettingsId = data.insertId;
          element.ownerId = this.user.ownerId;
          this.businessSettingService.addEmailAddresses(element).subscribe(data => {})
        });    
      }
    },err=>{},()=>{
      this.snackBar.open("Business Settings Saved", "X", {duration: 3000});
      this.router.navigateByUrl('/pages/circles/businesssetting');
    })    
  }

  updateBusinessSettings() {
    this.businessSettings.ownerID = this.user.ownerId;
    this.businessSettingService.updateBusinessSettings(this.businessSettings).subscribe(data => {
      this.driverAllowancesForms.value.forEach(element => {
        if(element.id == '') {
          element.businessSettingsId = this.businessSettings.id;
          element.ownerId = this.businessSettings.ownerID;
          this.businessSettingService.addDriverAllowances(element).subscribe(data => {
            element.id=data.insertId
          })
        }
        else {
          this.businessSettingService.updateDriverAllowances(element).subscribe(data => {})
        }
      });
      if(this.deletedDriverAllowance.length > 0) {
        this.deletedDriverAllowance.forEach(element => {
          this.businessSettingService.deleteDriverAllowances(element).subscribe(data=>{});
        })
      }
      if(this.businessSettings.SMSEnabled == true) {
        this.SMSPhoneNumbersForms.value.forEach(element => {
          if(element.id == '') {
            element.businessSettingsId = this.businessSettings.id;
            element.ownerId = this.businessSettings.ownerID;
            this.businessSettingService.addSMSPhoneNumbers(element).subscribe(data => {
              element.id = data.insertId
            })
          }
          else {
            this.businessSettingService.updateSMSPhoneNumbers(element).subscribe(data => {})
          }
        });
        if(this.deletedSMSNumber.length > 0) {
          this.deletedSMSNumber.forEach(element => {
            this.businessSettingService.deleteSMSPhoneNumbers(element).subscribe(data=>{});
          })
        }
      }
      if(this.businessSettings.EmailEnabled == true) {
        this.EmailAddressForms.value.forEach(element => {
          if(element.id == '') {
            element.businessSettingsId = this.businessSettings.id;
            element.ownerId = this.businessSettings.ownerID;
            this.businessSettingService.addEmailAddresses(element).subscribe(data => {
              element.id = data.insertId
            })
          }
          else {
            this.businessSettingService.updateEmailAddresses(element).subscribe(data => {})
          }
        });
        if(this.deletedEmailAddresses.length > 0) {
          this.deletedEmailAddresses.forEach(element => {
            this.businessSettingService.deleteEmailAddresses(element).subscribe(data=>{});
          })
        }        
      }
      this.auth.changeBusinessSettings(this.businessSettings) 
    },err=>{},()=>{
      this.snackBar.open("Business Settings Saved", "X", {duration: 3000});
      this.router.navigateByUrl('/pages/circles/businesssetting');
    })
    // this.router.navigateByUrl('/pages/circles/businesssetting');
  }
}

export interface BusinessSettings {
  id?: string;
  ownerID?: string;
  AllowBookingsToBeAddedWithoutAnyPricing?: Boolean;
  AutoSendAllotmentNotificationToDriverApp?: Boolean;
  UseBookingsIDInSMS?: Boolean;
  DefaultStartFromGarage?: string;
  RoundOffDutySlipTimeToNearestHour?: Boolean;
  ShowGarageStartTimeInsteadOfReportingTime?: Boolean;
  ShowFromCity?: Boolean;
  ShowDropAddress?: Boolean;
  ShowRemarks?: Boolean;
  ShowVehicleGroup?: Boolean;
  ShowLabels?: Boolean;
  AddCustomerName?: Boolean;
  AddBookedByName?: Boolean;
  AddAllPassengerNamesAndNumbers?: Boolean;
  HideVehicleName?: Boolean;
  HideRemarks?: Boolean;
  AddGarageStartTime?: Boolean;
  AddReleasedKmTimeSection?: Boolean;
  AddEntireBookingDateRange?: Boolean;
  AddPrintedByInformationToFooter?: Boolean;
  AlwaysUseFullPageDesign?: Boolean;
  HideBusinessLetterHead?: Boolean;
  HideCustomerNameForDriverSupplierInMobileApp?: Boolean;
  invoiceDatesAndNumbering?: string,
  RoundOffExtraTimeOfEveryDutyWhileDisplayingOnInvoice?: Boolean,
  ShowPerKilometerRateOnInvoiceForDayKMDuties?: Boolean,
  HideVehicleNumberFromInvoice?: Boolean,
  ShowDutySummaryAtTheTopOfTheInvoiceAlways?: Boolean,
  ShowDutyId?: Boolean,
  ShowDutyType?: Boolean,
  ShowBookedByName?: Boolean,
  ShowPassengerNames?: Boolean,
  ShowVehicleGroupName?: Boolean,
  ShowVehicleNumber?: Boolean,
  ShowStartDate?: Boolean,
  ShowEndDate?: Boolean,
  ShowStartTime?: Boolean,
  ShowEndTime?: Boolean,
  ShowExtraHour?: Boolean,
  ShowTotalHour?: Boolean,
  ShowStartKM?: Boolean,
  ShowEndKM?: Boolean,
  ShowExtraKM?: Boolean,
  ShowTotalKM?: Boolean,
  ShowExtraHourRate?: Boolean,
  ShowExtraKMRate?: Boolean,
  ShowExtraHourCost?: Boolean,
  ShowExtraKMCost?: Boolean,
  ShowConsolidatedBillingItems?: Boolean,
  ShowSeparatedBillingItems?: Boolean,
  ShowAllowances?: Boolean,
  ShowPrice?: Boolean,
  ShowQuantityNumberOfDays?: Boolean,
  ShowTotalPrice?: Boolean,
  ShowCarHireCharges?: Boolean,
  ShowDutySubtotal?: Boolean,
  ShowDutySubtotalIncludingAllowances?: Boolean,
  ShowPurchaseDutyID?: Boolean,
  ShowPurchaseDutyType?: Boolean,
  ShowPurchaseBookedByName?: Boolean,
  ShowPurchasePassengerNames?: Boolean,
  ShowPurchaseVehicleGroupName?: Boolean,
  ShowPurchaseVehicleNumber?: Boolean,
  ShowPurchaseStartDate?: Boolean,
  ShowPurchaseEndDate?: Boolean,
  ShowPurchaseStartTime?: Boolean,
  ShowPurchaseEndTime?: Boolean,
  ShowPurchaseExtraHour?: Boolean,
  ShowPurchaseTotalHours?: Boolean,
  ShowPurchaseStartKM?: Boolean,
  ShowPurchaseEndKM?: Boolean,
  ShowPurchaseExtraKM?: Boolean,
  ShowPurchaseTotalKm?: Boolean,
  ShowPurchaseExtraHourRate?: Boolean,
  ShowPurchaseExtraKMRate?: Boolean,
  ShowPurchaseExtraHourCost?: Boolean,
  ShowPurchaseExtraKMCost?: Boolean,
  ShowPurchaseConsolidatedBillingItems?: Boolean,
  ShowPurchaseSeparatedBillingItems?: Boolean,
  ShowPurchaseAllowances?: Boolean,
  ShowPurchasePrice?: Boolean,
  ShowPurchaseDutySubtotal?: Boolean,
  ShowCustomerCarHireCharges?: Boolean,
  ShowCustomerCarHireChargesIncludingAllowances?: Boolean,
  ShowCustomerDutySubtotal?: Boolean,
  ShowCustomerDutySubtotalIncludingAllowances?: Boolean,
  defaultCustomer?: string,
  dispatchCenter?: string,
  defaultCity?: string,
  AutoCCEmail?: string,
  CCAllConfirmationAndCancellationEmails?: Boolean,
  CCAllAllotmentEmails?: Boolean,
  CCAllInvoiceEmails?: Boolean,
  SMSMask?: string,
  AutoAcceptIncomingDutySlip?: Boolean,
  bookingConfirmationHeader?: string,
  bookingConfirmationFooter?: string,
  dutyAllotmentToCustomerHeader?: string,
  dutyAllotmentToCustomerFooter?: string,
  dutyAllotmentToSupplierHeader?: string,
  dutyAllotmentToSupplierFooter?: string,
  dutyBookingCancellationHeader?: string,
  dutyBookingCancellationFooter?: string,
  invoiceToCustomerHeader?: string,
  invoiceToCustomerFooter?: string,
  paymentRequestHeader?: string,
  paymentRequestFooter?: string,
  SMSEnabled?: Boolean,
  EmailEnabled?: Boolean,
  trackingProvider?: string,
  trackingUsername?: string,
  trackingPassword?: string,
  defaultTermsAndConditions?: string,
}
