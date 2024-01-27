import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-duty-supporter',
  templateUrl: './new-duty-supporter.component.html',
  styleUrls: ['./new-duty-supporter.component.scss']
})
export class NewDutySupporterComponent implements OnInit {

  Name:any;
  MobileNumber:any;
  AltMobileNumber:any;
  panNumber:any;
  aadharNumber:any;
  
  constructor() { }

  ngOnInit() {
  }

}
