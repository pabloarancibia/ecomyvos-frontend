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

  /**
   * Obtener usuarios y relaciones persona y rol
   * @returns Usuarios Personas Rol
   */
  getUsPerRol(): Promise<any> {
    return this._http.get(this.URL + 'usperrol')
    .toPromise()
      .then(
        (usPerRol) => {
          return usPerRol;
          }
        );
  }

/**
 * Obtener todos los usuarios y sus relaciones
 * @returns usuarios personas roles capacitaciones
 */
  getUsPerRolCap(): Promise<any> {
    return this._http.get(this.URL + 'usperrolcap')
    .toPromise()
      .then(
        (usPerRolCap) => {
          return usPerRolCap;
          }
        );
  }

  /**
   * Obtener usuarios y relaciones segun su rol
   * @param rol nombrerol
   * @returns usuario persona capacitacion
   */
  getUsPerCapByRol(rol:string){
    return this._http.get(this.URL + 'uspercapbyrol/'+rol)
    .toPromise()
      .then(
        (usPerCap) => {
          return usPerCap;
          }
        );
  }

  modificarUsuario(changes: Partial<Usuarios>){
    return this._http.put(this.URL + 'modificarusuario/',changes).toPromise()
    .then(result =>{
      return result;
    });
  }

  /**
   * Servicio asignar cap a us
   * @param data usuarioId, capacitacionId
   * @returns message
   */
  asignarCapacitacion(data): Promise<any>{
    return this._http.post(this.URL + 'asignarcapacitacion', data)
    .toPromise()
      .then(
        (res) => {
          return res;
        }
      )
  }

  /**
   * Servicio quitar asignacion cap a us
   * @param data usuarioId, capacitacionId
   * @returns message
   */
  quitarCapAUs(data): Promise<any>{
    return this._http.post(this.URL + 'quitarcapaus', data)
    .toPromise()
      .then(
        (res) => {
          return res;
        }
      )
  }

  /**
   * Servicio inscripcion alumno registrado
   * @param data capacitacionId
   * @returns message
   */
   inscripcionAlumno(data): Promise<any>{
    return this._http.post(this.URL + 'inscripcionalumno', data)
    .toPromise()
      .then(
        (res) => {
          return res;
        }
      )
  }

  /**
   * Servicio desuscripcion alumno registrado
   * @param data capacitacionId
   * @returns message
   */
   quitarInscripcion(data): Promise<any>{
    return this._http.post(this.URL + 'quitarinscripcion', data)
    .toPromise()
      .then(
        (res) => {
          return res;
        }
      )
  }

  getCapsUsRegistrado():Promise<any>{
    return this._http.get(this.URL + 'traerCapacitacionesUsuario')
    .toPromise()
    .then(res=>{return res})
  }



}
