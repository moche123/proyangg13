import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private _fb: FormBuilder, private _router:Router, private _authService: AuthService) {}

  public myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  register() {
    const { name, email, password } = this.myForm.value;

    this._authService
      .register(name, email, password, 1)
      .subscribe((response: any) => {
        if (response === true) {
          // localStorage.setItem('token')
          Swal.fire({
            title: 'Yeah!',
            text: `Bienvenido ${localStorage.getItem('name')}!!`,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this._router.navigateByUrl('/pages');
        } else {
          console.log(response);
          //TODO: mostrar mensaje de error
          //valida los errores (validaciones) desde la base de datos
          if (response.msg) {
            Swal.fire({
              title: 'Error!',
              text: response.msg,
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }

          //* ERRORES DE FORMULARIO

          if (response.errors) {
            let messageFormErrors = '';

            if (response.errors?.email) {
              messageFormErrors += response.errors.email.msg + ', ';
            }
            if (response.errors?.password) {
              messageFormErrors += response.errors.password.msg + ', ';
            }

            if (response.errors?.name) {
              messageFormErrors += response.errors.name.msg;
            }

            Swal.fire({
              title: 'Error!',
              text: messageFormErrors,
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        }
      });
  }

  fieldIsInvalidReactive(field: any) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
}
