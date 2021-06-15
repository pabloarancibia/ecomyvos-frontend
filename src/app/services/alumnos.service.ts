import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private URL = environment.apiUrl;


  constructor(
    private _http: HttpClient,

  ) { }

  /**
   * Cantidad de alumnos por genero
   * @returns genero: "", count: n
   */
  getCantAlumnosPorGenero():Promise<any>{
    return this._http.get(this.URL + 'cantalumnosgenero')
    .toPromise()
    .then(res=>{return res})
  }
}
