import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  template: `

  <div class="hero-banner hero-banner--insurance"> 
  <div class="hero-banner__logo">
        <img class="hero-banner__image" [src]="logo" alt="ISoft logo" />
  </div>
  <p></p>
  <h1 class="auth0-features__title" style="text-shadow: 1px 1px 2px black;">Protecting people, businesses and futures for more than 50 years</h1>
    </div>
  `,
})
export class HeroBannerComponent {
  logo = 'https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/main/isoft-insurance.png';
}
