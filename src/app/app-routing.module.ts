import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './navbar/buyerlogin/login.component';
import { RegistrationComponent } from './navbar/buyerregistration/registration.component';
import { SellerLoginComponent } from './navbar/seller-login/seller-login.component';
import { SellerRegistrationComponent } from './navbar/seller-registration/seller-registration.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './seller-dashboard/add-book/add-book.component';
import { EditBookComponent } from './seller-dashboard/edit-book/edit-book.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AdminLoginComponent } from './navbar/admin-login/admin-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'seller-login', component: SellerLoginComponent },
  { path: 'seller-registration', component: SellerRegistrationComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'seller-dashboard', component: SellerDashboardComponent},
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book', component: EditBookComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent},
  { path: 'admin-login', component: AdminLoginComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
