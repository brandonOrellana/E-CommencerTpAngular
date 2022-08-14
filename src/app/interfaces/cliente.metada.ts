import { ICuenta } from "./cuenta.metadata";
import { IDireccion } from "./direccion.metadata";

export interface ICliente{
    nombre:string;
    apellido:string;
    fechaNacimiento:string;
    gmail:string;
    telefono:string;
    direccion:IDireccion;
    cuenta:ICuenta;
    dni:number;
}