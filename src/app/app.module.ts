import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ExponentialPipe } from './exponential.pipe';
import { FormsModule } from '@angular/forms';


registerLocaleData (localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ExponentialPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
