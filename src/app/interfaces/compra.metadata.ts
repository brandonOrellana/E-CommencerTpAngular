import { ItemCompra } from "./itemCompra.metadata";

export interface ICompra{
    idCliente: number,
    itemsDTO: ItemCompra[],
    medioDePago: string,
    moneda: string,
    totalAPagar: number,
    precioEnDolares?: number
}