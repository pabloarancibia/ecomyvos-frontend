export interface Personas {
    id?: number;
    nombre: string;
    cuil: number;
    apellido: string;
    email?: string;
    genero: string;
    fechanacimiento: string;
    estado?: string;
    createdAt?: Date;
    updatedAt?: Date;
}