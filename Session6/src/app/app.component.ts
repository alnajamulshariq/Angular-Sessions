import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ServicesComponent } from './Components/services/services.component';
import { AboutComponent } from './Components/about/about.component';
import { TeamComponent } from './Components/team/team.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { FeaturesComponent } from './Components/features/features.component';
import { CalltoactionComponent } from './Components/calltoaction/calltoaction.component';
import { StatsComponent } from './Components/stats/stats.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent,HomeComponent,PortfolioComponent,ServicesComponent,AboutComponent,TeamComponent,ContactComponent,ClientsComponent,FeaturesComponent,CalltoactionComponent,StatsComponent,TestimonialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Session5';
}
