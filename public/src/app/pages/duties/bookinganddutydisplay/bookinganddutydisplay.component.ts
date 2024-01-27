import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'bookinganddutydisplay',
  templateUrl: './bookinganddutydisplay.component.html',
  styleUrls: ['./bookinganddutydisplay.component.scss']
})
export class BookinganddutydisplayComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {    
    var data = localStorage.getItem('data');
    console.log(data);
    localStorage.clear();
  }

}
