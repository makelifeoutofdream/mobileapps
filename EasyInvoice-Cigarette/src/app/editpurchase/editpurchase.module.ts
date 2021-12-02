import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpurchasePageRoutingModule } from './editpurchase-routing.module';

import { EditpurchasePage } from './editpurchase.page';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpurchasePageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [EditpurchasePage]
})
export class EditpurchasePageModule {}
