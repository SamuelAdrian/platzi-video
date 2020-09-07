import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { ProductComponent } from './product/product.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';



import { ProductDetailComponent } from './product-detail/product-detail.component';


import { SharedModule } from './shared/shared.module';


registerLocaleData (localeEs);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }


