import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  private URL = environment.apiUrl;


  constructor(
    private _http: HttpClient,

  ) { }


  /** 
   * @returns traigo todos los temas
   */
  getTemas(): Promise<any[]> {
    return this._http.get(this.URL + 'temas')
    .toPromise()
      .then(
        (temas: any[]) => {
          return temas;
          }
        );
  }

  /**
   * Editar tema
   * @param temaId 
   * @param changes datos a modificar
   * @returns message
   */
  editarTema(temaId: number, changes: Partial<any>){
    return this._http.put(this.URL + 'editartema/' + temaId, changes)
    .toPromise()
    .then(result =>{
      return result;
    });
  }

  /**
   * Crear Tema nuevo
   * @param data: nombre descripcion 
   * @returns tema creado
   */
  crearTema(data){
    return this._http.post(this.URL + 'creartema', data)
    .toPromise()
    .then(res=>{
      return res;
    })
  }

  /**
   * Asignar Tema a Capacitacion
   * @param data {temaId, capacitacionId}
   * @returns message
   */
  asignarTemaCapacitacion(data){
    return this._http.post(this.URL + 'asignartemacapacitacion', data)
    .toPromise()
    .then(res=>{
      return res;
    })
  }

}
