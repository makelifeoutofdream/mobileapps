import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderPage } from './order.page';
import { NgKnifeModule } from 'ng-knife';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgKnifeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderPage],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderPageModule {}
