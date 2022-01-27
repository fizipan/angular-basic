import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-example/product-list/product-list.component';
import { TopBarComponent } from './product-example/top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-example/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-example/product-details/product-details.component';
import { CartComponent } from './product-example/cart/cart.component';
import { ShippingComponent } from './product-example/shipping/shipping.component';
// import { HelloWorldComponent } from './example/hello-world.component';
// import { HelloWorldDependencyInjectionComponent } from './example/hello-world.di.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
