import { Injectable, Injector } from '@angular/core';
import Swal from 'sweetalert2'
import { AuthService } from '../services/auth.service';
// import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class AuthGuard {

  constructor(
    private authService: AuthService
  ){}

  canActivate(): boolean {

    if (!this.authService.isLoggedIn()) { //! NO CUENTA CON LOGUEO?
      return true;
    }
    Swal.fire({
      title: 'Error!',
      text:'Ya está logueado, cierre sesión para acceder al logueo',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    this.authService.goToPages();
    return false;
  }
}