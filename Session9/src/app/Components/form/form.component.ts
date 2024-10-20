import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe, FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  empForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl("",[Validators.required, Validators.minLength(3)]),
      lastName: new FormControl("",[Validators.required, Validators.minLength(3)]),
      email: new FormControl("",[Validators.email, Validators.minLength(11)]),
      city: new FormControl("", [Validators.required, Validators.minLength(3)]),
      province: new FormControl("", [Validators.required]),
      zipCode: new FormControl("", [Validators.required, Validators.minLength(3)]),
      isAcceptTerms: new FormControl("", [Validators.required]),
    }
  );

  formValue:any[] = [];
data: any;
emp: any;
  onSave(data:any){
    if(this.empForm.valid){
      this.formValue.push(data);
      this.resetForm();
    }
  }

  resetForm(){
    this.empForm.reset();
  }
}
