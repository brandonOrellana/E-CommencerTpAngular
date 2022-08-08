import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { ICardProduct } from './card-product.metadata';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() data: ICardProduct | undefined;

  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(): void {
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
