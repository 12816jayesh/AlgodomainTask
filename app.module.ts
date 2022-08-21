import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shop/Header.component';
import { BodyComponent } from './shop/Body.component';
import { producardComponent } from './shop/productcard.component';
import { paymentComponent } from './shop/payment.component';
// import { ShoppingcartComponent } from './component/ShoppingCart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    producardComponent,
    paymentComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,BodyComponent,producardComponent,paymentComponent]
})
export class AppModule { }
