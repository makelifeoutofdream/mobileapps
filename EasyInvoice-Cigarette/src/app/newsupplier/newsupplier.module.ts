import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsupplierPageRoutingModule } from './newsupplier-routing.module';

import { NewsupplierPage } from './newsupplier.page';
import { ExpandableComponent } from '../components/expandable/expandable.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsupplierPageRoutingModule
  ],
  declarations: [NewsupplierPage,ExpandableComponent]
})
export class NewsupplierPageModule {}
