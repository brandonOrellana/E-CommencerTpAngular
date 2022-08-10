import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private id = new BehaviorSubject<number>(0);

  public idCliente = this.id.asObservable();

  constructor() { }

  public changeMessage(msg: number): void {
    this.id.next(msg);
  }
}
