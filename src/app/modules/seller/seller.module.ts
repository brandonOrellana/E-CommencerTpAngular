import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { SellerProductsAddComponent } from './seller-products-add/seller-products-add.component';
import { SellerRoutingModule } from './seller-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SellerProductsComponent,
    SellerProductsAddComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ReactiveFormsModule
  ]
})
export class SellerModule { }
