import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './navbar/buyerlogin/login.component';
import { RegistrationComponent } from './navbar/buyerregistration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerLoginComponent } from './navbar/seller-login/seller-login.component';
import { SellerRegistrationComponent } from './navbar/seller-registration/seller-registration.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { AddBookComponent } from './seller-dashboard/add-book/add-book.component';
import { EditBookComponent } from './seller-dashboard/edit-book/edit-book.component';
 import { BookService } from './book.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './navbar/admin-login/admin-login.component';
   
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SellerLoginComponent,
    SellerRegistrationComponent,
    BookDetailsComponent,
    SellerDashboardComponent,
    AddBookComponent,
    EditBookComponent,
    CartComponent,
    ShippingComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
