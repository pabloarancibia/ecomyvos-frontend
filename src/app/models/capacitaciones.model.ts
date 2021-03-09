import { Time } from '@angular/common';

export class Capacitaciones {
    private _id: number;
    private _nombre: string;
    private _convenio: string;
    private _lat: string;
    private _lon: string;
    private _localidad: string;
    private _direccion: string;
    private _circuito: string;
    private _fechainicio: string;
    private _fechafin: Date;
    private _horainicio: Time;
    private _horafin: Time;
    private _conectividad_up: number;
    private _conectividad_down: number;
    private _observaciones: string;
    private _estado: string;
    private _createdAt: Date;
    private _updatedAt: Date;

    constructor(id, nombre, convenio, lat, lon, localidad, direccion, circuito,
        fechainicio, fechafin, horainicio, horafin, conectividad_up, conectividad_down,
        observaciones, estado, createdAt, updatedAt) {
        this._id = id
        this._nombre = nombre
        this._convenio = convenio
        this._lat = lat
        this._lon = lon
        this._localidad = localidad
        this._direccion = direccion
        this._circuito = circuito
        this._fechainicio = fechainicio
        this._fechafin = fechafin
        this._horainicio = horainicio
        this._horafin = horafin
        this._conectividad_up = conectividad_up
        this._conectividad_down = conectividad_down
        this._observaciones = observaciones
        this._estado = estado
        this._createdAt = createdAt
        this._updatedAt = updatedAt
    }


    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get convenio(): string {
        return this._convenio;
    }
    public set convenio(value: string) {
        this._convenio = value;
    }
    public get lat(): string {
        return this._lat;
    }
    public set lat(value: string) {
        this._lat = value;
    }
    public get lon(): string {
        return this._lon;
    }
    public set lon(value: string) {
        this._lon = value;
    }
    public get localidad(): string {
        return this._localidad;
    }
    public set localidad(value: string) {
        this._localidad = value;
    }
    public get direccion(): string {
        return this._direccion;
    }
    public set direccion(value: string) {
        this._direccion = value;
    }
    public get circuito(): string {
        return this._circuito;
    }
    public set circuito(value: string) {
        this._circuito = value;
    }
    public get fechainicio(): string {
        return this._fechainicio;
    }
    public set fechainicio(value: string) {
        this._fechainicio = value;
    }
    public get fechafin(): Date {
        return this._fechafin;
    }
    public set fechafin(value: Date) {
        this._fechafin = value;
    }
    public get horainicio(): Time {
        return this._horainicio;
    }
    public set horainicio(value: Time) {
        this._horainicio = value;
    }
    public get horafin(): Time {
        return this._horafin;
    }
    public set horafin(value: Time) {
        this._horafin = value;
    }
    public get conectividad_up(): number {
        return this._conectividad_up;
    }
    public set conectividad_up(value: number) {
        this._conectividad_up = value;
    }
    public get conectividad_down(): number {
        return this._conectividad_down;
    }
    public set conectividad_down(value: number) {
        this._conectividad_down = value;
    }
    public get observaciones(): string {
        return this._observaciones;
    }
    public set observaciones(value: string) {
        this._observaciones = value;
    }
    public get estado(): string {
        return this._estado;
    }
    public set estado(value: string) {
        this._estado = value;
    }
    public get createdAt(): Date {
        return this._createdAt;
    }
    public set createdAt(value: Date) {
        this._createdAt = value;
    }
    public get updatedAt(): Date {
        return this._updatedAt;
    }
    public set updatedAt(value: Date) {
        this._updatedAt = value;
    }

}

