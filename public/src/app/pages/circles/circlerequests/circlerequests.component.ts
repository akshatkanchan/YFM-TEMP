import { Component, OnInit, ViewChild } from '@angular/core';
import { CircleService } from '../circle.service';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { CompanyprofileService } from '../companyprofile/companyprofile.service';
import { Customer } from '../../masters/customer';
import { Supplier } from '../../masters/addsuppliers/supplier';
import { CustomerService } from '../../masters/customer/customer.service';
import { SupplierService } from '../../masters/addsuppliers/supplier.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SubUserService } from '../../masters/sub-users/sub-user.service';
import { SubUser } from '../../masters/sub-users/sub-user';

@Component({
  selector: 'app-circlerequests',
  templateUrl: './circlerequests.component.html',
  styleUrls: ['./circlerequests.component.scss']
})
export class CirclerequestsComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  dataSource=new MatTableDataSource;
  displayedColumns=["name","phone","alternatePhone","email","headOfficeCity","state","Options"]

  user:User={};
  customer:Customer={};
  supplier:Supplier={};
  searchTerm:any;
  permission:SubUser={};

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private circleService:CircleService, 
    private auth:AuthService,
    private companyProfileService:CompanyprofileService,
    private customerService:CustomerService,
    private supplierService:SupplierService,
    private permissionService:SubUserService) { }

  ngOnInit() {

    this.auth.user.subscribe(data=> {
      this.user=data[0]
      this.auth.permissions.subscribe(data => {
        this.permission=data[0];
        if(this.permission.acceptDeclineCircleRequests === 0) {
          this.displayedColumns.pop();
        }
      })
      this.circleService.getRequests(this.user.ownerId).subscribe(data=> {
        this.dataSource.data = data;
        this.length = data.length;
      })
    })

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }
  accept(temp:any)
  {
    
    var i=this.dataSource.data.indexOf(temp);
    this.dataSource.data.splice(i,1);
    var supplier={
      ownerName:temp.name,
      ownerId:temp.fromOwnerId,
      supplierId:this.user.ownerId,
      supplierName:this.user.name
    }

    var circleData={
      supplier:supplier,
      id:temp.id
    }
    console.log(supplier);
    this.circleService.acceptRequest(circleData).subscribe(data=> {
      console.log(data)
      if(data.affectedRows==1)
      {
        //to do this only if not following online offline  supplier approach
        //add to request senders supplier db
        var userData={
          ownerId:this.user.ownerId
        }
        this.companyProfileService.getCompanyProfile(userData).subscribe(data=> {
          console.log(data)
          //put in supplier object and put his ownerid then insert
          console.log(data);
          this.supplier.ownerId=supplier.ownerId;
          this.supplier.supplierOwnerId=this.user.ownerId;
 
          this.supplier.name=data[0].name;
          this.supplier.billingName=data[0].name;
 
          this.supplier.saddress=data[0].address;
          this.supplier.billingAddress=data[0].address;
 
          this.supplier.headOfficeCity = data[0].headOfficeCity;
          this.supplier.state=data[0].state;
          this.supplier.billingState=data[0].state;
 
          this.supplier.phone=data[0].phone;
          this.supplier.billingPhone=data[0].phone;
 
          this.supplier.email=data[0].email;
          //this.supplier.billingEmail=data[0].email;
 
          this.supplier.panNo=data[0].email;
                
          this.supplier.gstin=data[0].gstin;
          console.log(this.supplier);
          this.supplierService.addSupplier(this.supplier).subscribe(data=> {
            console.log(data);
          })
                        
        })
            


        ///add to his  own customer db 
            
        var userData2={
          ownerId:temp.fromOwnerId
        }
        this.companyProfileService.getCompanyProfile(userData2).subscribe(data=> {
          console.log(data);
          this.customer.ownerId=this.user.ownerId;
          this.customer.customerOwnerId=supplier.ownerId;
          this.customer.name=data[0].name;
          this.customer.billingName=data[0].name;

          this.customer.caddress=data[0].address;
          this.customer.billingAddress=data[0].address;
          
          this.customer.state=data[0].state;
          this.customer.billingState=data[0].state;

          this.customer.phone=data[0].phone;
          this.customer.billingPhone=data[0].phone;

          this.customer.email=data[0].email;
          this.customer.billingEmail=data[0].email;

          this.customer.panNo=data[0].email;
               

          this.customer.gstin=data[0].gstin;
              
          this.customerService.addCustomer(this.customer).subscribe(data=> {
            console.log(data);
          })
               

          //put in customer object and replace his owner id to own then  insert in own db
        })
      }
    })
  }
  decline(temp:any)
  {
    var circleData=
    {
      id:temp.id
    }

    this.circleService.declineRequest(circleData).subscribe()
  }

  search(filter:string)
  {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  clear()
  {
    this.searchTerm=""
  }
 
}
