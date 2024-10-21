import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 @Output() public ChildEvent = new EventEmitter();
 fireEvent(){
  this.ChildEvent.emit("This Message Is From Child Component")
 }
}
