import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'airline',
  // templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AirlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
