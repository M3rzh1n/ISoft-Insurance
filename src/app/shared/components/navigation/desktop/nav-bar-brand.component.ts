import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-brand',
  template: `
    <div class="nav-bar__brand">
      <a routerLink="/">
        <img
          class="nav-bar__logo"
          src="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/main/IsoftLogo.png"
          alt="ISoft Logo"

        />
      </a>
    </div>
  `,
})
export class NavBarBrandComponent {}
