import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FunctionsComponent } from './Components/functions/functions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FunctionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Session4';
  name = 'Shariq Najam';
  course = 'HDSE';
}
