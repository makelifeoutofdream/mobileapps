import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpurchasePageRoutingModule } from './newpurchase-routing.module';

import { NewpurchasePage } from './newpurchase.page';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpurchasePageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [NewpurchasePage]
})
export class NewpurchasePageModule {}
