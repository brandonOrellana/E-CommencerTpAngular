import { Component, OnInit } from '@angular/core';
import { ICompra } from 'app/interfaces/compra.metadata';
import { ItemCompra } from 'app/interfaces/itemCompra.metadata';
import { CartService } from 'app/services/cart.service';
import { LoginService } from 'app/services/login.service';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public compra !: ICompra;
  public cliente !:number;
  public totalDolar !:number;
  constructor(
    private cartService : CartService,
    private productService:ProductsService,
    private login: LoginService
    ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this.login.idCliente.subscribe(msg => this.cliente = msg);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  private productToItems(products:any): ItemCompra{
    return {
      idProducto: products.id,
      cantidad: products.cantidad
    }; 
  }


  addCompra(){
     this.compra = {
      idCliente : this.cliente,
      itemsDTO: this.products.map((m: any)=>this.productToItems(m)),
      medioDePago: "sin targeta",
      moneda: "pesos",
      totalAPagar: this.grandTotal
    }
   
    this.productService.addCompra(this.compra)
    .subscribe((res:any)=>{
      console.log(res);
      this.totalDolar = res.precioEnDolares.toFixed(2);;
    });
  }

}
