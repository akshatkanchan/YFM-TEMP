import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'incomingcalldutyinfo',
  templateUrl: './incomingcalldutyinfo.component.html',
  styleUrls: ['./incomingcalldutyinfo.component.scss']
})
export class IncomingcalldutyinfoComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data) { 

    console.log(data)
  }

  ngOnInit() {
    console.log(":akjlsd")
  }

}
