import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-bar-chart',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'MENU',
    group: true,
  },
  {
    title:'Duties',
    icon:'nb-edit',
    link:'/pages/duties',
  },
  {
    title:'Operations',
    icon:'nb-gear',
    link:'/pages/operations',
    children:[
      {
        title:'Bookings',
        link:'/pages/operations/bookingsdisp'
      },
      {
        title:'Bank Accounts',
        link:'/pages/operations/bank-account-display'
      },
      {
        title:'Invoices',
        link:'/pages/masters/invoicedisplay'
      },      
      {
        title:'Branches',
        link:'/pages/operations/branch'
      },
      {
        title:'Contact Logs',
        link:'/pages/operations/contactlogs'
      }
    ]
  },
  {
    title:'Masters',
    icon:'nb-keypad',
    link:'/pages/masters',
    children:[
      {
        title:'Duty Type',
        link:'/pages/masters/dutytypedisp'
      },
      {
        title:'Customers',
        link:'/pages/masters/customer'
      },
      {
        title:'Receipts',
        link:'/pages/masters/receiptsdisp'
      },      
      {
        title:'Vehicle Groups',
        link:'/pages/masters/vehiclegroupdisp'
      },
      {
        title:'Vehicles',
        link:'/pages/masters/vehicledisp'
      },
      {
        title:'Taxes',
        link:'/pages/masters/taxesDisplay'
      },      
      {
        title:'Suppliers',
        link:'/pages/masters/suppliersdisp'
      },
      {
        title:'Staff',
        children: [
          {
            title:'Drivers',
            link:'/pages/masters/driver-disp'
          },
          {
            title:'Employees',
            link:'/pages/masters/employeedisp'
          },
        ]
      },      
      // {
      //   title:'Duty Supporter',
      //   link:'/pages/masters/new-duty-supporter'
      // },
      {
        title:'Users',
        link:'/pages/masters/users'
      },
      {
        title:'Billing Items',
        link:'/pages/operations/billingitemdisplay'
      },
      {
        title:'Pricing',
        link:'/pages/masters/pricing'
      },
      {
        title:'Tags',
        link:'/pages/masters/labels'
      },
      {
        title:'Contacts',
        children:[
          {
            title:'Booked By',
            link:'/pages/masters/recurringbookby'
          },
          {
            title:'Passengers',
            link:'/pages/masters/recurringpassenger'
          }
        ]
      }
    ]
  },
  {
    title:'Hotels',
    icon:'nb-home',
    link:'/pages/hotels',
    children:[
      {
        title:'Hotels',
        link:'/pages/hotels/displayhotels'
      },
      {
        title:'Hotel Bookings',
        link:'/pages/hotels/displayhotelbookings'
      }
    ]
  },
  {
    title:'Expenses',
    icon:'nb-compose',
    link:'/pages/expenses',
    children:[
      {
        title:'Fuel',
        link:'/pages/expenses/fuel'
      },
      {
        title:'SMS/Calls',
        link:'/pages/expenses/smsInfo'
      },
      {
        title:'Office Expenses',
        link:'/pages/expenses/officeExpenses'
      },
      {
        title: 'Vehicle Maintenance',
        link: '/pages/expenses/vehicleMaintenanceExpenses'
      },
      {
        title: 'Vehicle Breakdown',
        link: '/pages/expenses/vehicleBreakdownExpenses'
      },
      {
        title:'Petty Cash',
        link:'/pages/masters/pettycashdisp'
      }
    ]
  },
  {
    title: 'Airline',
    icon:'nb-paper-plane',
    link:'/pages/airline/',
    children:[
      {
        title:'Airline',
        link:'/pages/airline/airlinedisp'
      },
      {
        title:'Visa',
        link:'/pages/airline/visa'
      }
    ]
  },
  // {
  //   title: 'Wallet',
  //   icon:'nb-arrow-retweet',
  //   link:'/pages/wallet/walletdisp',
  // },
  // {
  //   title: 'Wallet',
  //   icon:'nb-arrow-retweet',
  //   link:'/pages/wallet/walletdisp'
    // children:[
    //   {
    //     title:'Airline',
    //     link:'/pages/airline/airlinedisp'
    //   }      
    // ]
  // },
  {
    title:'B2B Circles',
    icon:'nb-cloudy',
    link:'/pages/circles',
    children:[
      {
        title:'Your Circles',
        link:'/pages/circles/circlesdisplay'
      },
      {
        title:'Circle Requests',
        link:'/pages/circles/circlerequests'
      },
      {
        title:'Duty Requests',
        link:'/pages/circles/myrequests'
      },
      // {
      //   title:'Duties Edit Requests',
      //   link:'/pages/circles/editRequest'
      // },
      {
        title:'Purchase Invoice',
        link:'/pages/masters/purchase-invoice'
      },
      {
        title:'Purchase Duties',
        link:'/pages/masters/purchase-duties'
      },
      {
        title:'Purchase Payments',
        link:'/pages/masters/purchase-payments'
      }      
    ]
  },
  {
    title:'Tracking',
    icon:'nb-location',
    link:'/pages/tracking',
    children:[
      {
        title: 'Vehicle Tracking',
        link: '/pages/tracking/trackVehicle'
      }
    ]
  }
];