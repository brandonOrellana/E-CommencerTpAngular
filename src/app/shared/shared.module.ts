import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import * as frontComponents from "./components";
import { CardProductComponent } from './components/cards/card-product/card-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [...frontComponents.components, CardProductComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...frontComponents.components
  ]
})
export class SharedModule { }
