import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor( private _fb:FormBuilder ){}

  public myForm:FormGroup = this._fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  });

  register(){
    console.log(this.myForm.value);
  }

  fieldIsInvalidReactive(field:any){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

}
