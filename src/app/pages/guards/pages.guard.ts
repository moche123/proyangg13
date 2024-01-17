import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/auth/services/auth.service';
// import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class PagesGuard {

  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    Swal.fire({
      title: 'Error!',
      text:'Por favor loguearse',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    this.authService.returnToLogin();
    return false;
  }
}