import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public cartItemFind : any;
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }
  
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    
    if(!this.cartItemList.map((b: { id: any; })=>b.id).includes(product.id)){
      product.cantidad = 1;
      product.total = product.precio;
      this.cartItemList.push(product);
    }else{
      //this.cartItemList.find((a: { id: any; }) => a.id === product.id).cantidad++;
      this.cartItemFind = this.findItemCart(product);
      this.cartItemFind.cantidad++;
      this.cartItemFind.total = this.cartItemFind.precio *this.cartItemFind.cantidad;
    }
    

    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  findItemCart(product : any) : any{
    return this.cartItemList.find((a: { id: any; }) => a.id === product.id);
  }



  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += (a.precio*a.cantidad);
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
