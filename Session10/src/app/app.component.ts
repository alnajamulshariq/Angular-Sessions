import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponentComponent } from "./Components/child-component/child-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Session10';

  // making name variable 
  name = 'Shariq Najam'
  chData(){
    this.name = 'Muhammad Shariq Najam Ansari'
  }
  // making array 
  classFellows = ["Hamza","Sawati","Ali","Asghar","Zubair"];

  //making object
  student = {
    name: "Shariq Najam",
    age: 26,
    isMarried: false
  }
}
