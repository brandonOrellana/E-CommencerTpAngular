export interface INewProduct{
    vendedor: {
        id:number
    },
    categoria:{
        id:number
    },
    nombre:string,
    descripcion:string,
    stock:number,
    precio:number
    imagen:string
}