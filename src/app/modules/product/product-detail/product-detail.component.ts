import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICardProduct } from '@shared/components/cards/card-product/card-product.metadata';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  //public products: ICardProduct[] = PRODUCT_DATA;
  public id: number;
  public currentProduct?: ICardProduct;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.id = this.route.snapshot.params['id'];
    //this.currentProduct = this.products.find(product => product.id === +this.id);
  }


}
