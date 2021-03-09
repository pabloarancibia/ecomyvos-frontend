import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signUp(usuario) {
    return this.http.post<any>(this.URL + 'signup', usuario)
  }

  signIn(usuario) {
    return this.http.post<any>(this.URL + 'signin', usuario)
  }

  // Verificar si tiene token
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // retornar toem
  getToken() {
    return localStorage.getItem('token');
  }

  //logout
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/inicio'])
  }
}
