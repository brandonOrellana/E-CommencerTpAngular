import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private id = new BehaviorSubject<number>(0);
  private nombre = new BehaviorSubject<string>("Sign up / Log in");

  public idCliente = this.id.asObservable();
  public nombreCliente = this.nombre.asObservable();

  constructor() { }

  public changeMessage(msg: number): void {
    this.id.next(msg);
  }
  public changeCliente(msg: string): void {
    this.nombre.next(msg);
  }
}
