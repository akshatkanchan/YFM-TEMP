import { Booking } from "../../operations/booking";


export class Invoice {
    bookings?:Booking[];
    ownerId?:string;
    customerId?:string;
    invoiceNumber?:string;
    invoiceDate?:string;
    invoicePeriodFrom?:string;
    invoicePeriodTo?:string;
    PONumber?:string;
    CCNumber?:string;
    discountType?:string;
    discountRate?:number;
    discountAmount?:number;
    taxType?:string;
    taxRate?:number;
    taxAmount?:number;
    totalAmount?:number; 
    id?:string;
    advanceReceived?: number;
    supplierInvoiceNumber?: string;
    supplierInvoiceDate?: string;
    isDownloaded?: boolean;
    isPrinted?: boolean;
    isMailed?: boolean;
    taxableAmount?: number;
    nonTaxableAmount?: number;
}

