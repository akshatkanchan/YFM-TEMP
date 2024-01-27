export interface Booking {
    id?: string; 
    bid?: string; 
    date?: string;
    cname?: string;
    bookBy?:string; 
    bookByNo?:string;
    bookByEmail?:string;
    passenger?:string;
    passengerNo?:string; 
    passengerEmail?:string;
    fromLoc?:string;
    toLoc?:string;
    startDate?:string;
    endDate?:string;
    reportingTime?:string;
    startFromGarage?:string;
    reportingAddress?:string;
    dropAddress?:string;
    shortReportingAddress?:string;
    flightTrainNo?:string;
    dispatchCenter?:string;
    billTo?:string;
    price?:string;
    remarks?:string;
    operatorNotes?:string;
    label?:string;
    vehicleGroupId?:string;
    vehicleGroup?:string; //to remove later
    dutyType?:string; //remove later
    dutyTypeId?:string;
    status?:string;
    ownerID?:string;
    selected?:boolean;
    customerId?:string;
    poNumber?:string;
    ccId?:string;
    extraHours?:string;
    extraKms?:string;
    unconfirmed?:boolean;
    dispatchCenterId?:string;
     // public editable: boolean = false
   
  }