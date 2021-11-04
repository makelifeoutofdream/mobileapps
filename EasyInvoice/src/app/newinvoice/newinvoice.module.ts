import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewinvoicePageRoutingModule } from './newinvoice-routing.module';

import { NewinvoicePage } from './newinvoice.page';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewinvoicePageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [NewinvoicePage]
})
export class NewinvoicePageModule {}
