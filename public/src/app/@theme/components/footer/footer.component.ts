import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <a href="http://www.techsimians.com" target="_blank"><b>Tech Simians</b></a></span>
  `,
})
export class FooterComponent {
}
