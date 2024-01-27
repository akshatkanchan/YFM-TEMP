export class Supplier {
    //Supplier Details
    id?: string; 
    sid?: string; 
    name?: string;
    saddress?:string; 
    state?:string; 
    type?:string; 
    phone?:string; 
    email?:string;
    panNo?:string;
    gstin?:string; 
    tdsPercent?:string;   
    //GSTin details 
    billingName?:string;
    billingAddress?:string;
    billingState?:string;
    billingPhone?:string;
    headOfficeCity?:string;
    billingServiceTax?:string;
    billingGSTType?:string;
    billingReverseChargeApplicable?:string;
    //Applicable taxes
    applicableTaxes?:string;
    //Working Hours
    startTime?:string;
    endTime?:string;
    earlyTime?: string;
    lateTime?: string;
    //Misc
    limitCities?:string;
    branches?:string;
    supplierOwnerId?:string;
    ownerId?:string;
    vehicleId?:string;
    revenueSharePercentage?: string;
}
