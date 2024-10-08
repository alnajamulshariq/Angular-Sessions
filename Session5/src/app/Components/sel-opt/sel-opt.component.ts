import { Component } from '@angular/core';

@Component({
  selector: 'app-sel-opt',
  standalone: true,
  imports: [],
  templateUrl: './sel-opt.component.html',
  styleUrl: './sel-opt.component.css'
})
export class SelOptComponent {
  selVal:any = "";
  chFunc(event:any){
    const val = event.target.value;
    this.selVal=val;
  }

}
