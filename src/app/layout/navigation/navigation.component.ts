import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public totalItems : number = 0;
  public cliente? : string;
  constructor(
    private cartService : CartService,
    private login: LoginService

  ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItems = res.map((a: { cantidad: any; })=>a.cantidad).reduce((partialSum: any, a: any) => partialSum + a, 0);
    });

    this.login.nombreCliente.subscribe(msg => this.cliente = msg);
  }

}
