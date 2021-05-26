import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private URL = environment.apiUrl;

  constructor(
    private _http: HttpClient,
  ) { }

  crearClase(data){
    return this._http.post(this.URL + 'crearclase', data)
    .toPromise()
    .then(res=>{
      return res;
    })
  }

  modificarClase(id: number, changes: Partial<any>){
    return this._http.put(this.URL + 'modificarclase/' + id, changes)
    .toPromise()
    .then(result =>{
      return result;
    });
  }

  eliminarClase(id: number){
    return this._http.delete(this.URL + 'eliminarclase/' + id)
    .toPromise()
    .then(result =>{
      return result;
    });
  }

  getClases(): Promise<any[]> {
    return this._http.get(this.URL + 'clases')
    .toPromise()
    .then(
      (clases: any[]) => {
        return clases;
      });
  }



}
