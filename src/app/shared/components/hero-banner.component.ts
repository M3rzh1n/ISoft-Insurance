import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  template: `

      <div style="text-align: center; padding-top: 10px; ">
        <img width="100px" height="100px" class="hero-banner__image" [src]="logo" alt="ISoft logo" />
        <p></p>
        <h2 class="auth0-features__title">ISoft Insurance</h2>
    </div>
  `,
})
export class HeroBannerComponent {
  logo = 'https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/main/insurance.png';
}
