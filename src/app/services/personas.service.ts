import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Personas } from '../models/personas.model'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  
  private URL = environment.apiUrl;

  constructor(
    private _http: HttpClient,
  ) { }

  getPersonas(): Promise<Personas[]> {
    return this._http.get(this.URL + 'personas')
    .toPromise()
      .then(
        (personas: Personas[]) => {
          return personas;
          }
        );
  }

}
