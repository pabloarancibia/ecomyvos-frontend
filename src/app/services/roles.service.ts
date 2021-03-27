import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Roles } from '../models/roles.model'

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private URL = environment.apiUrl;


  constructor(
    private _http: HttpClient,

  ) { }

  getRoles(): Promise<Roles[]> {
    return this._http.get(this.URL + 'roles')
    .toPromise()
      .then(
        (roles: Roles[]) => {
          return roles;
          }
        );
  }

}
