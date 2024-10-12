import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesComponent } from "./Components/pipes/pipes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Session7';
}
