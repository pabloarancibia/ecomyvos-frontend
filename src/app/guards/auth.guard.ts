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

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {

      let url: string = state.url;
      return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    // verificamos el token y rol
    if (this.authService.loggedIn()) {
      const userRole = this.authService.getRolLS();
      route: ActivatedRouteSnapshot
      if (route.data.role && route.data.role.indexOf(userRole) === -1){
        return false;
      }
      return true;
    }
    //direccionamos a login
    this.router.navigate(['/auth/login']);
    return false;
  }
  
}
