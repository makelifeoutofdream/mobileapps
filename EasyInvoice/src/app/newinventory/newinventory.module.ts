import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewinventoryPageRoutingModule } from './newinventory-routing.module';

import { NewinventoryPage } from './newinventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewinventoryPageRoutingModule,
    
  ],
  declarations: [NewinventoryPage]
})
export class NewinventoryPageModule {}
