import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICliente } from 'app/interfaces/cliente.metada';
import { ICompra } from 'app/interfaces/compra.metadata';
import { ILogin } from 'app/interfaces/login.metadata';
import { INewProduct } from 'app/interfaces/newProduct.metadata';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.uri;

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(page:number,size:number){
    return this.httpClient.get(this.url + 'productos/page' + '?page=' + page + '&size='+size);
  }

  addCompra(compra:ICompra): Observable<any>{
    const body=JSON.stringify(compra);
    //console.log(body);
    return this.httpClient.post<any>(this.url + 'compra',body);
  }

  authLogin(login:ILogin): Observable<ILogin>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    const body=JSON.stringify(login);
    return this.httpClient.post<any>(this.url + 'login',body,{headers: httpHeaders});
  }
  //nececitpo to da l estructura del backend
  /*authLoginVendedor(login:ILogin): Observable<ILogin>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    const body=JSON.stringify(login);
    return this.httpClient.post<any>(this.url + 'login',body,{headers: httpHeaders});
  }*/


  getProductsFiltro(filtro:string, page:number,size:number){
    //return this.httpClient.get(this.url + 'productos/search/page' + '?'+'nombre='+filtro /*+'&page=' + page + '&size='+size*/);
    //return this.httpClient.get("http://localhost:8080/productos/search/page?nombre=Martillo");
    return this.httpClient.get(this.url + 'productos/search/page?nombre='+filtro+'&page=' + page + '&size='+size);
  }

  getProductById(id:number){
    return this.httpClient.get(this.url + 'productos/'+id);
  }

  addNewCliente(cliente:ICliente): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    const body=JSON.stringify(cliente);
    return this.httpClient.post<any>(this.url+'clientes',body,{headers: httpHeaders});
  }

  addNewVendedor(cliente:ICliente): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    const body=JSON.stringify(cliente);
    return this.httpClient.post<any>(this.url+'vendedores',body,{headers: httpHeaders});
  }

  addNewproduct(newProduct:INewProduct): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    const body=JSON.stringify(newProduct);
    return this.httpClient.post<any>(this.url+'productos',body,{headers: httpHeaders});
  }


}
