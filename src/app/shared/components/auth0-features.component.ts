import { Component } from '@angular/core';

@Component({
  selector: 'app-auth0-features',
  template: `
    <div class="auth0-features">
      <h2 class="auth0-features__title">Protecting people, businesses and futures for more than 50 years</h2>
    <!-- Start -->
    <!-- End -->
    
      <div class="auth0-features__grid">
        <app-auth0-feature
          title="Vehicle Insurance"
          description="Whether you're on the road, the trail, or the water we're here to help you get the insurance you need."
          resourceUrl="/"
          icon="https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Property Insurance"
          description="We can help with insurance for your home and belongings whether you own or rent."
          resourceUrl="/"
          icon="https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Business Insurance"
          description="Business insurance can be tricky. Finding the right protection doesn't have to be. ISoft can help you find what you need."
          resourceUrl="/"
          icon="https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Additional Insurance"
          description="Protect more of what you love. ISoft offers a variety of additional insurance such as life, umbrella, travel, overseas, pet, and more."
          resourceUrl="/"
          icon="https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg"
        ></app-auth0-feature>
      </div>
    </div>
  `,
})
export class Auth0FeaturesComponent {}
