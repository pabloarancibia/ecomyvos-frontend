import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Capacitaciones } from "../models/capacitaciones.model";



@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  private URL = environment.apiUrl;


  constructor(
    private _http: HttpClient,
  ) { }

  getCapacitaciones(): Promise<Capacitaciones[]> {
    return this._http.get(this.URL + 'capacitaciones').toPromise().then(
      (capacitaciones: Capacitaciones[]) => {
        return capacitaciones;
      });
  }


}
