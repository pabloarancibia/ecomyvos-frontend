import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Usuarios } from '../models/usuarios.model'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL = environment.apiUrl;


  constructor(
    private _http: HttpClient,

  ) { }

  getUsuarios(): Promise<Usuarios[]> {
    return this._http.get(this.URL + 'usuarios')
    .toPromise()
      .then(
        (usuarios: Usuarios[]) => {
          return usuarios;
          }
        );
  }

  asignarRol(data): Promise<Usuarios[]>{
    return this._http.post(this.URL + 'asignarrol', data)
    .toPromise()
      .then(
        (usuario: Usuarios[]) => {
          return usuario;
        }
      )
  }

  getUsPerRol(): Promise<any> {
    return this._http.get(this.URL + 'usperrol')
    .toPromise()
      .then(
        (usPerRol) => {
          return usPerRol;
          }
        );
  }

  modificarUsuario(changes: Partial<Usuarios>){
    return this._http.put(this.URL + 'modificarusuario/',changes).toPromise()
    .then(result =>{
      return result;
    });
  }



}
