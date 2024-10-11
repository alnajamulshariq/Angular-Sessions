import { Component } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { TeamComponent } from '../team/team.component';
import { ContactComponent } from '../contact/contact.component';
import { ClientsComponent } from '../clients/clients.component';
import { FeaturesComponent } from '../features/features.component';
import { CalltoactionComponent } from '../calltoaction/calltoaction.component';
import { StatsComponent } from '../stats/stats.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PortfolioComponent,ServicesComponent,AboutComponent,TeamComponent,ContactComponent,ClientsComponent,FeaturesComponent,CalltoactionComponent,StatsComponent,TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
