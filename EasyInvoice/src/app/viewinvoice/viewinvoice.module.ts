import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewinvoicePageRoutingModule } from './viewinvoice-routing.module';

import { ViewinvoicePage } from './viewinvoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   
    ViewinvoicePageRoutingModule
  ],
  declarations: [ViewinvoicePage]
})
export class ViewinvoicePageModule {}
