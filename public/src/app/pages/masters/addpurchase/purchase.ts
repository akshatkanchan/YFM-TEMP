export class Purchase {
    id?:string;
    date?:string;
    supplierId?:string;
    supplierInvoiceNo?:string;
    // row?:number[];
    rowNonTaxable?:number[];
    tax?:number[];
    discount?:number[];
    row:[{
        id:'', 
        drop: [
        {   
            name: '',
            value: ''
        },{},{}
        ]}];
        ownerId?:string
}
