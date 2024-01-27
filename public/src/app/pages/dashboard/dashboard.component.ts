import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { CustomerService } from '../masters/customer/customer.service';
import { DashboardService } from './dashboard.service';
import { startWith } from 'rxjs/operators/startWith';
import { User } from '../../core/user';
import { FormControl } from '@angular/forms';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {

  dutiesView=false;
  financesButtonClicked = "Sales";
  buttonClicked="Duties";
  widget:any = {};
  bookingData:any={};
  bookingDataPieChart:any={}
  hotelsData:any={};
  flightsData:any={}
  month:any;

  user:User={};
  customers:any[];
  customer:any;
  customerCtrl:FormControl=new FormControl();
  customerName:any[]=[];
  bookingCount:any;
  completedBookings:any;
  allotedBookings:any;
  selectedCustomerId:any="%%"

  dutiesPrices: any[];
  quarterlyDutyPrices: any[];
  hotelsPrices: any[];
  quarterlyHotelsPrices: any[];
  flightsPrices: any[];
  quarterlyFlightsPrices: any[];
  yearlySalesAmount: any[] = [];
  yearlySalesYear: any[] = [];
  yearlyHotelsAmount: any[] = [];
  yearlyHotelsYear: any[]= [];
  yearlyFlightsAmount: any[] = [];
  yearlyFlightsYear: any[] = [];
  vehicleFuelCost: any[] = [];
  vehicleNameFuel: any[] = [];
  vehicleBreakdownCost: any[] = [];
  vehicleNameBreakdown: any[] = [];
  vehicleMaintenanceCost: any[] = [];
  vehicleNameMaintenance: any[] = [];
  OfficeExpensesCost: any[] = [];
  OfficeExpensesName: any[] = [];
  purchaseDutyStatus: any[] = [];
  purchaseDutyStatusCount: any[] = [];
  purchaseInvoiceCount: any[] = [];
  purchasePaymentsCount: any[] = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data:[0,0,0,0,0,0,0,0,0,0,0,0], label: 'Bookings'},
  ];
  

  public Labels:string[]=[];
  public pieChartData:any[] =[];
  public pieChartType:string = 'pie';
  
  public options: any = {
    //responsive: true,
    //showAllTooltips:true,
    legend: {
      display: true,
      labels: {
        fontColor: 'black'
      },
      position:'bottom'
    },
    pieceLabel: {
      render: function (args) {
        const label = args.label,
              value = args.value;
        return label + ' = ' + value;
      }
    },
    elements: {
      arc: {
          borderWidth: 0
      }
    }
  }

  public chartOptions = {
    scaleShowVerticalLines: false,
    // responsive: true,    
    scales: {      
      yAxes: [{
        ticks: {
          min: 0,
        },        
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },    
  };

  public pieChartOptions = {
    scaleShowVerticalLines: false,
    // responsive: true,    
    scales: {
      xAxes: [{
        display: false,        
      }],
      yAxes: [{                
        display: false        
      }]
    },
    elements: {
      arc: {
          borderWidth: 0
      }
    },
    pieceLabel: {
      render: function (args) {
        const label = args.label,
              value = args.value;
        return label + ' = ' + value;
      }
    }  ,
    legend: {
      display: true,
      labels: {
        fontColor: 'black'
      },
      position:'bottom'
    },     
  };
  
  public chartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public barChartPlugins = [pluginDataLabels];

  public salesChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  public quarterlySalesPieChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  
  public salesYearlyChartLabels = ['2016', '2017', '2018', '2019'];
  
  public fuelExpensesChartLabels = ['Booked'];
  
  public hotelsChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  public quarterlyHotelsPieChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];

  public vehicleBreakdownExpensesChartLabels = ['Maruti Suzuki Swift', 'Xcent'];

  public vehicleMaintenanceExpensesChartLabels = ['Maruti Suzuki Swift', 'Xcent'];

  public officeExpensesChartLabels = ['Stationary'];

  public hotelsYearlyChartLabels = ['2016', '2017', '2018', '2019'];
  
  public flightsChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  public quarterlyFlightsPieChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];

  public flightsYearlyChartLabels = ['2016', '2017', '2018', '2019'];

  public purchaseDutyChartLabels = ['Booked', 'Alloted', 'Pending', 'Upcoming', 'Cancelled', 'Completed']

  public purchaseDuty2ChartLabels = ['Paid', 'Outstanding']
  
  public purchasePaymentsChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public salesChartData = [{data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Sales'} ];
  public quarterlySalesPieChartData = [{data: [0,0,0,0]}];
  public salesYearlyChartData = [{data: [0,0,0], label: 'Sales'}]
  public fuelExpensesChartData = [{data: [0], label: 'Fuel Cost'} ];
  public hotelsChartData = [{data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Sales'} ];
  public quarterlyHotelsPieChartData = [{data: [0,0,0,0]}];
  public hotelsYearlyChartData = [{data: [0,0,0], label: 'Sales'}]
  public flightsChartData = [{data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Sales'} ];
  public vehicleBreakdownExpensesChartData = [{data: [0,0], label: 'Breakdown Cost'} ];
  public vehicleMaintenanceExpensesChartData = [{data: [0,0], label: 'Maintenance Cost'} ];
  public officeExpensesChartData = [{data: [0], label: 'Expenses'} ];
  public quarterlyFlightsPieChartData = [{data: [0,0,0,0]}];
  public flightsYearlyChartData = [{data: [0,0,0], label: 'Sales'}]
  public purchasePaymentsChartData = [{data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Sales'}]
  public purchaseDutyChartData = [0,0,0,0,0,0];
  public purchaseDuty2ChartData = [0,0];


  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut'
  
  constructor(private auth:AuthService,
    private customerService:CustomerService,
    private dashboardService:DashboardService){

  }

  ngOnInit(){
    
    var date = new Date().getMonth() +1;;
    this.month = date.toString();

    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.customerService.getCustomers(this.user).subscribe(data=>{
        this.customers=data;
        this.customers.unshift({name:'All',id:'%%'})
        // this.customerCtrl.setValue("All");
        this.customer=this.customerCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterCustomer(val))
        );
      })

      this.viewDuties()

    })
    this.customerCtrl.setValue("All");
  }

  filterCustomer(val:string){
    return this.customers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  selectCustomer(element:any){

    this.selectedCustomerId=element.id;

    if(this.buttonClicked=="Duties")
    {
      this.viewDuties();
    }
    if(this.buttonClicked=="Hotels")
    {
      this.viewHotels();
    }
    if(this.buttonClicked=="Flights")
    {
      this.viewFlights()
    }
    if(this.buttonClicked=="Duties Monthly")
    {
      this.viewDutiesPieChart();
    }

  }

  viewDuties(){
    
    this.dutiesView = false;
    this.buttonClicked="Duties"

    var parameters={
      ownerId:this.user.ownerId,
      customerId:this.selectedCustomerId
    }
      this.dashboardService.getbookingCount(parameters).subscribe(data=>{
        this.bookingData=data;
        this.barChartData=[{
        data:[
          this.bookingData[0][0].count,
          this.bookingData[1][0].count,
          this.bookingData[2][0].count,
          this.bookingData[3][0].count,
          this.bookingData[4][0].count,
          this.bookingData[5][0].count,
          this.bookingData[6][0].count,
          this.bookingData[7][0].count,
          this.bookingData[8][0].count,
          this.bookingData[9][0].count,
          this.bookingData[10][0].count,
          this.bookingData[11][0].count,
        ],
        label:'Duties'
      }]
      })
  }

  viewHotels(){

    this.dutiesView = false;
    this.buttonClicked="Hotels"
    var temp = {
      ownerId:this.user.ownerId,
      customerId:this.selectedCustomerId
    }
    this.dashboardService.getHotelsCount(temp).subscribe(data=>{
      this.hotelsData=data;
      this.barChartData=[{
        data:[
          this.hotelsData[0][0].count,
          this.hotelsData[1][0].count,
          this.hotelsData[2][0].count,
          this.hotelsData[3][0].count,
          this.hotelsData[4][0].count,
          this.hotelsData[5][0].count,
          this.hotelsData[6][0].count,
          this.hotelsData[7][0].count,
          this.hotelsData[8][0].count,
          this.hotelsData[9][0].count,
          this.hotelsData[10][0].count,
          this.hotelsData[11][0].count,
        ],
        label:'Hotels'
      }]
    })
  }

  viewFlights(){

    this.dutiesView = false;
    this.buttonClicked="Flights"
    var temp={
      ownerId:this.user.ownerId,
      customerId:this.selectedCustomerId
    }
    this.dashboardService.getFlightsCount(temp).subscribe(data=>{
      this.flightsData=data
      this.barChartData=[{
        data:[
          this.flightsData[0][0].count,
          this.flightsData[1][0].count,
          this.flightsData[2][0].count,
          this.flightsData[3][0].count,
          this.flightsData[4][0].count,
          this.flightsData[5][0].count,
          this.flightsData[6][0].count,
          this.flightsData[7][0].count,
          this.flightsData[8][0].count,
          this.flightsData[9][0].count,
          this.flightsData[10][0].count,
          this.flightsData[11][0].count,
        ],
        label:'Flights'
      }]
    })
  }


  viewDutiesPieChart(month?){

    this.buttonClicked="Duties Monthly"

    this.pieChartData.length = 0;
    this.Labels.length = 0;

    if(month=='' || month == null)
      month= new Date().getMonth() +1;
    
    this.dutiesView = true;
    var temp={
      customerId:this.selectedCustomerId,
      month:month,
      ownerId:this.user.ownerId
    }
    this.dashboardService.getDutiesMonthlyCount(temp).subscribe(data=>{
     
      console.log(data)
      data.forEach(element => {
        this.pieChartData.push(Number(element.count))
        this.Labels.push(element.status)
      });
    })
  }

  expensesReport = [
    'Fuel Expenses',
    'Vehicle Breakdown Expenses',
    'Vehicle Maintenance Expenses',    
    'Office Expenses'
  ]


  salesReportMonthly: Boolean = true;
  hotelReportMonthly: Boolean = true;
  flightsReportMonthly: Boolean = true;
  salesReportQuarterly: Boolean = false;  
  hotelReportQuarterly: Boolean = false;
  flightsReportQuarterly: Boolean = false;
  salesReportYearly: Boolean = false;  
  hotelReportYearly: Boolean = false;
  flightsReportYearly: Boolean = false;
  fuelExpenses: Boolean = true;
  vehicleMaintenanceExpenses: Boolean = false;
  vehicleBreakdownExpenses: Boolean = false;
  officeExpenses: Boolean = false;

  selectSalesReport(element) {
    if(element == 'Monthly') {
      this.salesReportMonthly = true;
      this.salesReportQuarterly = false;
      this.salesReportYearly = false;
    }
    else if(element == 'Quarterly') {
      this.salesReportMonthly = false;
      this.salesReportQuarterly = true;
      this.salesReportYearly = false;
    }
    else if(element == 'Yearly') {
      this.salesReportMonthly = false;
      this.salesReportQuarterly = false;
      this.salesReportYearly = true;
    }
  }

  selectExpensesReport(element) {
    if(element == 'Fuel Expenses') {
      this.fuelExpenses = true;
      this.vehicleBreakdownExpenses = false;
      this.vehicleMaintenanceExpenses = false;
      this.officeExpenses = false;
    }
    else if(element == 'Vehicle Breakdown Expenses') {
      this.fuelExpenses = false;
      this.vehicleBreakdownExpenses = true;
      this.vehicleMaintenanceExpenses = false;
      this.officeExpenses = false;
    }
    else if(element == 'Vehicle Maintenance Expenses') {
      this.fuelExpenses = false;
      this.vehicleBreakdownExpenses = false;
      this.vehicleMaintenanceExpenses = true;
      this.officeExpenses = false;
    }    
    else if(element == 'Office Expenses') {
      this.fuelExpenses = false;
      this.vehicleBreakdownExpenses = false;
      this.vehicleMaintenanceExpenses = false;
      this.officeExpenses = true;
    }
  }


  selectHotelReport(element) {
    if(element == 'Monthly') {
      this.hotelReportMonthly = true;
      this.hotelReportQuarterly = false;
      this.hotelReportYearly = false;
    }
    else if(element == 'Quarterly') {
      this.hotelReportMonthly = false;
      this.hotelReportQuarterly = true;
      this.hotelReportYearly = false;
    }
    else if(element == 'Yearly') {
      this.hotelReportMonthly = false;
      this.hotelReportQuarterly = false;
      this.hotelReportYearly = true;
    }
  }

  selectFlightsReport(element) {
    if(element == 'Monthly') {
      this.flightsReportMonthly = true;
      this.flightsReportQuarterly = false;
      this.flightsReportYearly = false;
    }
    else if(element == 'Quarterly') {
      this.flightsReportMonthly = false;
      this.flightsReportQuarterly = true;
      this.flightsReportYearly = false;
    }
    else if(element == 'Yearly') {
      this.flightsReportMonthly = false;
      this.flightsReportQuarterly = false;
      this.flightsReportYearly = true;
    }
  }

  salesRetrieved = false;
  expensesRetrieved = false;
  hotelFinancesRetrieved = false;
  flightFinancesRetrieved = false;
  purchasePaymentsRetrieved = false;

  selectedTab(tab)
  {
    if(tab.tab.textLabel=='Finances')
    {

      if(this.financesButtonClicked=="Sales")
      {
        if(this.salesRetrieved == false)
        {
          this.getDutySales();
        }
      }
      
      if(this.financesButtonClicked=="Expenses")
      {
        if(this.expensesRetrieved == false)
        {
          this.getExpenses();
        }
      }
        
      if(this.financesButtonClicked=="Hotels")
      {
        if(this.hotelFinancesRetrieved == false)
        {
          this.getHotelPrices();
        }
      }

      if(this.financesButtonClicked=="Flights")
      {
        if(this.flightFinancesRetrieved == false)
        {
          this.getFlightPrices();
        }
      }

      if(this.financesButtonClicked=="Purchase Payments")
      {
          this.getPurchasePayments(); 
      }

    }
  }

  getDutySales()
  {

    this.financesButtonClicked="Sales";

    this.dashboardService.getPriceFromDuties(this.user).subscribe(data => {
      this.salesRetrieved = true;
      this.dutiesPrices = data;        
      this.salesChartData = [{
        data: [        
          this.dutiesPrices[0][0].price,
          this.dutiesPrices[1][0].price,
          this.dutiesPrices[2][0].price,
          this.dutiesPrices[3][0].price,
          this.dutiesPrices[4][0].price,
          this.dutiesPrices[5][0].price,
          this.dutiesPrices[6][0].price,
          this.dutiesPrices[7][0].price,
          this.dutiesPrices[8][0].price,
          this.dutiesPrices[9][0].price,
          this.dutiesPrices[10][0].price,
          this.dutiesPrices[11][0].price,
        ],          
        label: 'Sales'
      }]
    })

    this.dashboardService.getQuarterlyPriceFromDuties(this.user).subscribe(data => {
      this.quarterlyDutyPrices = data;
      this.quarterlySalesPieChartData = [{
        data: [
          this.quarterlyDutyPrices[0][0].price,
          this.quarterlyDutyPrices[1][0].price,
          this.quarterlyDutyPrices[2][0].price,
          this.quarterlyDutyPrices[3][0].price,
        ]
      }]
    })

    this.yearlySalesAmount.length = 0;
    this.yearlySalesYear.length = 0;

    this.dashboardService.getYearlyPriceFromDuties(this.user).subscribe(data => {        
      data.forEach(element => {
        this.yearlySalesAmount.push(element.price);
        this.yearlySalesYear.push(element.year);          
      })
      this.salesYearlyChartLabels = 
        this.yearlySalesYear
      
      this.salesYearlyChartData = [{
        data: 
          this.yearlySalesAmount
        ,
        label: 'Sales'
      }]
    })
  }

  getExpenses()
  {
    this.financesButtonClicked="Expenses"

    this.vehicleFuelCost.length = 0;
    this.vehicleNameFuel.length = 0;

    this.dashboardService.getVehicleFuelCost(this.user).subscribe(data => {  
      this.expensesRetrieved = true;
      console.log(data);
      
      data.forEach(element => {          
        this.vehicleFuelCost.push(element.price);
        this.vehicleNameFuel.push(element.modelName);
        console.log(Number(this.vehicleFuelCost));
        
      })                        
      this.fuelExpensesChartData = [{
        data: 
          this.vehicleFuelCost
        ,
        label: 'Fuel Cost'
      }]
      this.fuelExpensesChartLabels = 
        this.vehicleNameFuel
      

      console.log(this.fuelExpensesChartData, this.fuelExpensesChartLabels);
      
    })

    this.vehicleBreakdownCost.length = 0;
    this.vehicleNameBreakdown.length = 0;

    this.dashboardService.getVehicleBreakdownCost(this.user).subscribe(data => {
      data.forEach(element => {          
        this.vehicleBreakdownCost.push(element.price);
        this.vehicleNameBreakdown.push(element.modelName);
      })                        
      this.vehicleBreakdownExpensesChartData = [{
        data: 
          this.vehicleBreakdownCost
        ,
        label: 'Breakdown Cost'
      }]
      this.vehicleBreakdownExpensesChartLabels = 
        this.vehicleNameBreakdown
      
    })

    this.vehicleMaintenanceCost.length = 0;
    this.vehicleNameMaintenance.length = 0;

    this.dashboardService.getVehicleMaintenanceCost(this.user).subscribe(data => {
      data.forEach(element => {          
        this.vehicleMaintenanceCost.push(element.price);
        this.vehicleNameMaintenance.push(element.modelName);
      })                        
      this.vehicleMaintenanceExpensesChartData = [{
        data: 
          this.vehicleMaintenanceCost
        ,
        label: 'Maintenance Cost'
      }]
      this.vehicleMaintenanceExpensesChartLabels = 
        this.vehicleNameMaintenance
      
    })

    this.OfficeExpensesCost.length = 0;
    this.OfficeExpensesName.length = 0;

    this.dashboardService.getOfficeExpenses(this.user).subscribe(data => {
      data.forEach(element => {          
        this.OfficeExpensesCost.push(element.price);
        this.OfficeExpensesName.push(element.particulars);
      })                        
      this.officeExpensesChartData = [{
        data: 
          this.OfficeExpensesCost
        ,
        label: 'Expenses'
      }]
      this.officeExpensesChartLabels = 
        this.OfficeExpensesName
      
    })
  }

  getFlightPrices()
  {

    this.financesButtonClicked="Flights"

    this.dashboardService.getPriceFromInvoiceInFlights(this.user).subscribe(data => {
      this.flightFinancesRetrieved = true;
      this.flightsPrices = data;
      this.flightsChartData = [{
        data: [
          this.flightsPrices[0][0].price,
          this.flightsPrices[1][0].price,
          this.flightsPrices[2][0].price,
          this.flightsPrices[3][0].price,
          this.flightsPrices[4][0].price,
          this.flightsPrices[5][0].price,
          this.flightsPrices[6][0].price,
          this.flightsPrices[7][0].price,
          this.flightsPrices[8][0].price,
          this.flightsPrices[9][0].price,
          this.flightsPrices[10][0].price,
          this.flightsPrices[11][0].price,
        ],
        label: 'Sales'
      }]
    })

    this.dashboardService.getQuarterlyPriceFromInvoiceInFlights(this.user).subscribe(data => {
      this.quarterlyFlightsPrices = data;
      this.quarterlyFlightsPieChartData = [{
        data: [
          this.quarterlyFlightsPrices[0][0].price,
          this.quarterlyFlightsPrices[1][0].price,
          this.quarterlyFlightsPrices[2][0].price,
          this.quarterlyFlightsPrices[3][0].price,
        ]
      }]
    })

    this.yearlyFlightsAmount.length = 0;
    this.yearlyFlightsYear.length = 0;

    this.dashboardService.getYearlyPriceFromInvoiceInFlights(this.user).subscribe(data => {        
      data.forEach(element => {                    
        this.yearlyFlightsAmount.push(element.price);
        this.yearlyFlightsYear.push(element.year);
      })        
      this.flightsYearlyChartLabels = 
        this.yearlyFlightsYear
      
      this.flightsYearlyChartData = [{
        data: 
          this.yearlyFlightsAmount
        ,
        label: 'Sales'
      }]
    })
  }

  getHotelPrices()
  {

    this.financesButtonClicked="Hotels";

    this.dashboardService.getPriceFromInvoiceInHotels(this.user).subscribe(data => {
      this.hotelFinancesRetrieved=true;
      this.hotelsPrices = data;
      this.hotelsChartData = [{
        data: [
          this.hotelsPrices[0][0].price,
          this.hotelsPrices[1][0].price,
          this.hotelsPrices[2][0].price,
          this.hotelsPrices[3][0].price,
          this.hotelsPrices[4][0].price,
          this.hotelsPrices[5][0].price,
          this.hotelsPrices[6][0].price,
          this.hotelsPrices[7][0].price,
          this.hotelsPrices[8][0].price,
          this.hotelsPrices[9][0].price,
          this.hotelsPrices[10][0].price,
          this.hotelsPrices[11][0].price,
        ],
        label: 'Sales'
      }]
    })


    this.dashboardService.getQuarterlyPriceFromInvoiceInHotels(this.user).subscribe(data => {
      this.quarterlyHotelsPrices = data;
      this.quarterlyHotelsPieChartData = [{
        data: [
          this.quarterlyHotelsPrices[0][0].price,
          this.quarterlyHotelsPrices[1][0].price,
          this.quarterlyHotelsPrices[2][0].price,
          this.quarterlyHotelsPrices[3][0].price,
        ]
      }]
    })

    this.yearlyHotelsAmount.length = 0;
    this.yearlyHotelsYear.length = 0;

    this.dashboardService.getYearlyPriceFromInvoiceInHotels(this.user).subscribe(data => {        
      data.forEach(element => {
        this.yearlyHotelsAmount.push(element.price);
        this.yearlyHotelsYear.push(element.year);          
      })
      this.hotelsYearlyChartLabels = 
        this.yearlyHotelsYear
      
      this.hotelsYearlyChartData = [{
        data: 
          this.yearlyHotelsAmount
        ,
        label: 'Sales'
      }]
    })
  }

  getPurchasePayments(){

    this.financesButtonClicked="Purchase Payments";    

    this.dashboardService.getPurchaseDuties(this.user).subscribe(data => {
      console.log(data);
      this.purchasePaymentsRetrieved = true;
      this.purchaseDutyStatus = data;
      console.log(this.purchaseDutyStatus);

      for (let index = 0; index < this.purchaseDutyStatus.length; index++) {
        if(this.purchaseDutyStatus[index].length == 0) {
          this.purchaseDutyStatus[index].push({name: 0});
        }
      }

      for (let index = 6; index < this.purchaseDutyStatus.length; index++) {
        if(this.purchaseDutyStatus[index][0].cnt == null) {
          this.purchaseDutyStatus[index][0].cnt = 0;
        }
      }
      
      this.purchaseDutyChartData = [
        this.purchaseDutyStatus[0][0].name,
        this.purchaseDutyStatus[1][0].name,
        this.purchaseDutyStatus[2][0].name,
        this.purchaseDutyStatus[3][0].name,
        this.purchaseDutyStatus[4][0].name,
        this.purchaseDutyStatus[5][0].name,
      ]

      this.purchaseDuty2ChartData = [
        this.purchaseDutyStatus[7][0].cnt,
        (this.purchaseDutyStatus[6][0].cnt - this.purchaseDutyStatus[7][0].cnt)
      ]
      // data.forEach(element => {
      //   this.purchaseDutyStatus.push(element.status);
      //   this.purchaseDutyStatusCount.push(element.name);
      //   console.log(this.purchaseDutyStatus);
      //   console.log(this.purchaseDutyStatusCount);        
      //   this.purchaseDutyChartLabels = 
      //   this.purchaseDutyStatus
      // console.log(this.purchaseDutyChartLabels, this.doughnutChartLabels);    
      // });



              
      
    },err=>{},()=>{
      // this.purchaseDutyChartData = 
      //   this.purchaseDutyStatusCount        
      // console.log(this.purchaseDutyChartData, this.doughnutChartData);
    })
  }

}
