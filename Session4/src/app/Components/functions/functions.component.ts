import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-functions',
  standalone: true,
  imports: [],
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.css'
})
export class FunctionsComponent {
  msg(){
    alert("This is a Click Function");
  }
  dc(){
    alert("This is a double click function")
  }
  mo(){
    alert("This is a MouseOver Function")
  }
  ml(){
    alert("This is a MouseLeave Function")
  }
  add(num1:number,num2:number){
    alert("The Addition of 4 + 6 = " + (num1+num2))
  }
  sub(num1:number,num2:number){
    alert("The Subtraction of 6 - 4 = " + (num1-num2))
  }
  mult(num1:number,num2:number){
    alert("The Multiplication of 10 * 5 = " + (num1*num2))
  }
  div(num1:number,num2:number){
    alert("The Division of 50 / 5 = " + (num1/num2))
  }
}
