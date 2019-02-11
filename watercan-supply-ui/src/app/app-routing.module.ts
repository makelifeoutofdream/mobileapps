import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'SignUp', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'address', loadChildren: './address/address.module#AddressPageModule' },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'addressList', loadChildren: './address-list/address-list.module#AddressListPageModule' },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
