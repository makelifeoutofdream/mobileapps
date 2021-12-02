import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewexpensePageRoutingModule } from './newexpense-routing.module';

import { NewexpensePage } from './newexpense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewexpensePageRoutingModule
  ],
  declarations: [NewexpensePage]
})
export class NewexpensePageModule {}
