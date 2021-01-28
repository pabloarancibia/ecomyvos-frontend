import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
}
  from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 * Protejemos las rutas desde el frontend
 */

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    // verificamos si tiene token
    if (this.authService.loggedIn()) {
      return true;
    }
    //direccionamos a login
    this.router.navigate(['/auth/login']);
    return false;
  }
}
