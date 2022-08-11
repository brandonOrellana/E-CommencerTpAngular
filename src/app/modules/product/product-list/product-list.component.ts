import { Component, OnInit } from '@angular/core';
import { ICardProduct } from '@shared/components/cards/card-product/card-product.metadata';
import { CartService } from 'app/services/cart.service';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  //public products: ICardProduct[] = PRODUCT_DATA;
   public products:any;
   public page = 0;
   public size = 8;
   public total: number = 0;
   public i = 2;

  constructor(
    private service:ProductsService,
    private cartService : CartService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.getProducts(this.page,this.size)
      .subscribe((response: any)=>{
          this.products = response.content;
          this.total = response.totalElements;
          this.i = response.size;
      });
  }

  pageChangeEvent(event:number){
    this.page = event;
    this.getProducts();
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
