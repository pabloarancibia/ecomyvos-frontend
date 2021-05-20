import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  private URL = environment.apiUrl;

  constructor(
    private _http: HttpClient,

  ) { }

    /**
   * Llamo a buscar datos de asistencia clases y alumnos de una capacitacion
   * @param data capacitacionId y nombrerol
   * @returns 
   */
     alumnosClasesAsistencias(capacitacionId){
      return this._http.get(this.URL + 'alumnosclases/' + capacitacionId).toPromise()
      .then(res=>{
        return res;
      })
    }

    /**
     * Asignar asistencia a usuario
     * data: ClaseId, CapacitacionId, UsuarioId, asistencia: presente/ausente
     * observaciones
     */
    asignarAsistencia(data){
      return this._http.post(this.URL + 'crearasistencia', data).toPromise()
      .then(res=>{
        return res;
      })
    }


/**
 * Obtener presentes agrupados por capacitacion
 */
    getPresentes(): Promise<any[]> {
      return this._http.get(this.URL + 'presentes').toPromise().then(
        (res: any[]) => {
          return res;
        });
    }


}
