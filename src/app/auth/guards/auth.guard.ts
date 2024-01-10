import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class AuthGuard {

  constructor(
    private router:Router
  ){}

  canActivate(): boolean {
    // this.router.navigateByUrl('/pages');
    return true;
  }
}