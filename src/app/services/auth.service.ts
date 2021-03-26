import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';

import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, BehaviorSubject, Subject, of, Subscription } from "rxjs";
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.apiUrl;

  authToken: any;
  usuario: any;
  tokenSubscription = new Subscription()
  timeout;
  

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) { }

  signUp(usuario) {
    return this.http.post<any>(this.URL + 'registroalumno', 
    usuario
    )
    
  }

  signIn(usuario) {
    return this.http.post<any>(this.URL + 'signin', usuario)
  }

  // Verificar si tiene token
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // retornar tokem
  getToken() {
    return localStorage.getItem('token');
  }


  storeUserData(token, usuario) {
    this.timeout = this.jwtHelper.getTokenExpirationDate(token).valueOf() - new Date().valueOf();
    localStorage.setItem("token", token);
    localStorage.setItem("nombreusuario", JSON.stringify(usuario.nombreusuario))
    this.authToken = token;
    this.usuario = usuario;
    // this.emit({ nombreusuario: this.usuario.nombreusuario });
    this.expirationCounter(this.timeout);
  }

  expirationCounter(timeout) {
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired) => {
      console.log('EXPIRED!!');

      this.logout();
    });
  }
    
  logout() {
    this.tokenSubscription.unsubscribe();
    this.authToken = null;
    this.usuario = null;
    localStorage.clear();
    this.router.navigate(['/auth/login']);

  }

}
