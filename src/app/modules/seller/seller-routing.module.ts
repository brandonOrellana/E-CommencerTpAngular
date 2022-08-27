import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerProductsAddComponent } from './seller-products-add/seller-products-add.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';

const routes: Routes = [
  {
    path: '',
    component:SellerProductsComponent
  },
  {
    path: 'add',
    component: SellerProductsAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
