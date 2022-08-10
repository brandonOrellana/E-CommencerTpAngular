import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICompra } from 'app/interfaces/compra.metadata';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'http://localhost:8080/productos/page';
  private urlCompra = 'http://localhost:8080/compra';

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(page:number,size:number){
    return this.httpClient.get(this.url + '?page=' + page + '&size='+size);
  }

  private test :ICompra = {
    idCliente: 1,
    itemsDTO: [
      {
        idProducto: 1,
        cantidad: 4
      }
    ],
    medioDePago: "targeta",
    moneda: "pesos",
    totalAPagar: 180.8,
    precioEnDolares: 0.6
  };

  addCompra(compra:ICompra): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    const body=JSON.stringify(compra);
    console.log(body);
    return this.httpClient.post<any>("http://localhost:8080/compra",body,{headers: httpHeaders});
  }
}
