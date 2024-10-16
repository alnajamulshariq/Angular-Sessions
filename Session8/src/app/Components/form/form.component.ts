import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  getData:any[]= [];
  saveData(data:any, MyForm: NgForm)
  {
    if(MyForm.valid)
    {
      this.getData.push(data);
      this.resetForm(MyForm);
    }
  }
  
  resetForm(MyForm: NgForm)
  {
    MyForm.form.reset();
  }
  }
