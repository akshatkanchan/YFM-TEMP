export interface Customer {
  //Customer Details
  ownerId?:string;
  customerOwnerId?:string;
  id?: string;
   name?: string;
   caddress?:string; 
   state?:string; 
   custGroup?:string; 
   phone?:string;
   alternatePhone?: string;
   email?:string;
   panNo?:string;
   gstin?:string; 
   tdsPercent?:string; 
   contractSDate?:string;
   surchargePercent?:string; 
   baseCityForFuel?:string;   
   //GSTin details 
   billingName?:string;
   billingAddress?:string;
   billingState?:string;
   billingPhone?:string;
   billingEmail?:string;
   billingServiceTax?:string;
   billingGSTType?:string;
   billingReverseChargeApplicable?:string;
   billingContractEndDate?:string;
   billingForcedFuel?:string;
   //Applicable taxes
   applicableTaxes?:Number;
   //Driver Allowance
   earlyTime?:string;
   lateTime?:string;
   //Misc
   notes?:string;
   enableCustomPricing?:string;
  denyBookbyPassenger?:string;
  active?:boolean;
   //Temp
    date?: string;
    status?:string;
    customerGroupId?:string;
   // public editable: boolean = false
}
