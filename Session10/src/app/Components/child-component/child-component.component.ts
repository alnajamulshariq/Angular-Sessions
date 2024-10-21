import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  // send single data from parent to child 
  @Input() myName:string = "";

  // send an array from parent to child 
  @Input() myArray:string[] = [];

  // send an object from parent to child 
  @Input() myObj:any = {};
}
