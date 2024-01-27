import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PricingService {

  constructor(private http:Http) { }

getPrices(temp1:any) 
{
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/pricing/retrieve', temp1,{headers:headers}).map(res => res.json());        
}
      
updatePrice(temp:any)
{
  console.log(temp);
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    if(temp.id==null)
    {
      return this.http.post('/pricing/add',temp,{headers:headers}).map(res=>res.json())
    }
    else 
    {
      return this.http.post('/pricing/update',temp,{headers:headers}).map(res=>res.json())
    }
}

getCustomerPrice(temp1:any)
{
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/pricing/getPrice',temp1,{headers:headers}).map(res => res.json());   
}
getCustomers(temp1:any)
{
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/pricing/retrieveCustomer',temp1,{headers:headers}).map(res => res.json());   
}

copyPricing(temp1:any)
{
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/pricing/copyPricing',temp1,{headers:headers}).map(res => res.json());   
}

}