import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AuthService } from '../../../core/auth.service';
import { SubUserService } from '../sub-users/sub-user.service';
import { DriverService } from '../new-driver/driver.service';
import { EmployeeService } from '../new-employees/employee.service';

@Injectable()
export class NewuserService {

  constructor(private http:Http, private auth: AuthService,private subUserService:SubUserService,
    private driverService:DriverService, private employeeService:EmployeeService) { }
  newUser(temp,permissions,id){

    this.auth.registerUsers(temp).then(data=>{
      console.log(data);
      temp.id = data.user.uid;
      permissions.userId=data.user.uid;
      delete temp.password;
      delete temp.permissionsId;
    }).then(data=>{
      var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      this.http.post('/users/register',temp,{headers:headers}).subscribe((data:any)=>{
        console.log(data)
        if(temp.type === 'driver') {
          var driverTemp = {
            'userId':temp.id,
            'id':id
          }
          this.driverService.updateDriver(driverTemp).subscribe(data => {
            console.log(data)
          })
          this.subUserService.addSubUser(permissions)
        } else if (temp.type === 'employee') {
          var empTemp = {
            'userId':temp.id,
            'id':id
          }
          this.employeeService.updateEmployee(empTemp).subscribe(data => {
            console.log(data);
          })
          this.subUserService.addSubUser(permissions)
        }
        
      })
    })
  }
}
