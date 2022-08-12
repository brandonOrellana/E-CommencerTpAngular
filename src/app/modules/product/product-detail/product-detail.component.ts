import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { IProducto } from 'app/interfaces/producto.metadata';
import { ApiService } from 'app/services/api.service';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  public id: number;
  public currentProduct?: IProducto;
  public precioDolar?:number;
  
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cartService : CartService,
    private skeleton : SkeletonComponent
  ) { 
    this.id = this.route.snapshot.params['id'];
    this.getProducto();
    skeleton.show = false;
  }
  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  getProducto(){
    this.apiService.getProductById(this.id)
      .subscribe((response: any)=>{
        this.precioDolar = response.precioDolar.toFixed(2);;
        this.currentProduct = response;
      });
  }

  addtocart(){
    this.cartService.addtoCart(this.currentProduct);
  }
}
