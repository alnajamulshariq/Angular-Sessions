import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelOptComponent } from './Components/sel-opt/sel-opt.component';
import { TableComponent } from './Components/table/table.component';
import { SwitchComponent } from './Components/switch/switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SelOptComponent,TableComponent,SwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives';
}
