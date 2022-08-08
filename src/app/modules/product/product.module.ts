import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    NgxPaginationModule
  ]
})
export class ProductModule { }
