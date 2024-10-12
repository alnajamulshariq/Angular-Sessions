import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  today = new Date();

  Employees: any = [
    {
      id: 101,
      name:{'FirstName: Shariq':'LastName: Najam'},
      designation: 'Secretary'
    }
  ]
}
