import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { CartComponent } from './component/cart/cart.component';
import { FormComponent } from './component/form/form.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component:CartComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component:FormComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component:RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component:AddProductComponent,
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
    path: 'seller',
    component: SkeletonComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('@modules/seller/seller.module').then( (m) => m.SellerModule)
      },
      {
        path:'**',
        redirectTo: '/seller/product',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'**',
    redirectTo: '/seller/product',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
