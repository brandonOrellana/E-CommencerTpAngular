import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/panel/product',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component:CartComponent,
    pathMatch: 'full'
  },
  {
    path: 'panel',
    component: SkeletonComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('@modules/product/product.module').then( (m) => m.ProductModule)
      },
      {
        path:'**',
        redirectTo: '/panel/product',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'**',
    redirectTo: '/panel/product',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
