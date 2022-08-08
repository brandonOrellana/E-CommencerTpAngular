import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    NavigationComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    //core
    CoreModule,
    SharedModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [{
    provide:LocationStrategy,
    useClass:PathLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
