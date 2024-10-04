import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
    {path: 'Home', component:HomeComponent},
    {path: 'About', component:AboutComponent},
    {path: 'Contact', component:ContactComponent}
];
