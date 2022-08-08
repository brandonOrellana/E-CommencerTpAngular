import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public totalItems : number = 0;
  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItems = res.map((a: { cantidad: any; })=>a.cantidad).reduce((partialSum: any, a: any) => partialSum + a, 0);
    })
  }

}
