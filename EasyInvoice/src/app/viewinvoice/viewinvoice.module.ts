import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';

import { ViewinvoicePageRoutingModule } from './viewinvoice-routing.module';

import { ViewinvoicePage } from './viewinvoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    ViewinvoicePageRoutingModule
  ],
  declarations: [ViewinvoicePage]
})
export class ViewinvoicePageModule {}
