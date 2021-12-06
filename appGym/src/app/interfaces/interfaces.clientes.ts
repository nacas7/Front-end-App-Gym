export interface Clientes {
    id: number,
    nombre: string,
    apellidos: string,
    direccion: string,
    email: string,
    edad: number,
    sexo: string,
    fecha_inscripcion: Date,
    cuota: number,
    fecha_nacimiento: Date,
    dni: number,
    fk_profesor: number,
    fk_usuarios: number

}