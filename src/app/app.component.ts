import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>

    <main>
      <section id="home">
        <app-hero></app-hero>
      </section>

      <section id="about">
        <app-about></app-about>
      </section>

      <section id="services">
        <app-services></app-services>
      </section>

         <section id="portfolio">
        <app-portfolio></app-portfolio>
      </section>

      <section id="contact">
        <app-contact></app-contact>
      </section>
    </main>

    <app-footer></app-footer>
  `
})
export class AppComponent {}
