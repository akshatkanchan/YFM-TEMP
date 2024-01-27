import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel',
  // templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class HotelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
