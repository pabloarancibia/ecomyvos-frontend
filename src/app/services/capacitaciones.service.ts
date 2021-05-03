import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Capacitaciones } from '../models/capacitaciones.model';



@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  private URL = environment.apiUrl;

  selCapacitacion: Capacitaciones = { nombre: '' };

  constructor(
    private _http: HttpClient,
  ) { }

  getCapacitaciones(): Promise<Capacitaciones[]> {
    return this._http.get(this.URL + 'capacitaciones').toPromise().then(
      (capacitaciones: Capacitaciones[]) => {
        return capacitaciones;
      });
  }

  getCapacitacion(id: string): Promise<Capacitaciones>{
    return this._http.get(this.URL + 'capacitacion/' + id).toPromise()
    .then(
      (capacitacion: Capacitaciones) => {
        return capacitacion;
      });
  }

  crearCapacitacion(capacitacion: Capacitaciones) {
    return this._http.post(this.URL + 'crearcapacitacion', capacitacion).toPromise()
      .then((result) => {
        return result;
      });
  }

  modificarCapacitacion(id: number, changes: Partial<Capacitaciones>){
    return this._http.put(this.URL + 'modificarcapacitacion/' + id, changes).toPromise()
    .then(result =>{
      return result;
    });
  }

  eliminarCapacitacion(id: number){
    return this._http.delete(this.URL + 'eliminarcapacitacion/' + id).toPromise()
    .then(result =>{
      return result;
    });
  }




}
