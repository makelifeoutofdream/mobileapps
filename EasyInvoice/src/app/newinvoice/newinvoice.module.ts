import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewinvoicePageRoutingModule } from './newinvoice-routing.module';

import { NewinvoicePage } from './newinvoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewinvoicePageRoutingModule
  ],
  declarations: [NewinvoicePage]
})
export class NewinvoicePageModule {}
