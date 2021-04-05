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

  roleAs: string;
  

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
    // return !!localStorage.getItem('token');
    return !!this.TokenVerify();
  }

  // retornar token
  getToken() {
    // return localStorage.getItem('token');
    return this.TokenVerify();
  }

  /**
   * Verifica Token
   * @returns True: Token ok
   * False: Token false o expired
   */
   TokenVerify(){
    const token = localStorage.getItem('token');
    if (token){
      const timeout = this.jwtHelper.getTokenExpirationDate(token).valueOf() - new Date().valueOf();
      if (timeout < 0){
        this.logout();
      }
      return token;
    }
    return false;
    
  }


  async storeUserData (token, usuario) {
    this.timeout = this.jwtHelper.getTokenExpirationDate(token).valueOf() - new Date().valueOf();
    localStorage.setItem("token", token);
    localStorage.setItem("nombreusuario", JSON.stringify(usuario.nombreusuario))
    localStorage.setItem("rol",usuario.Rol.nombrerol)
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

  /**
   * Obtener el rol segun ususarioId
   * 
   */
  getRol(data){
    return this.http.get(this.URL + 'getrol',data);
  }

  /**
   * Obtener rol de local storage
   * @returns nombre rol 
   */
  getRolLS(){
    this.roleAs = localStorage.getItem('rol');
    return this.roleAs;
  }

}
