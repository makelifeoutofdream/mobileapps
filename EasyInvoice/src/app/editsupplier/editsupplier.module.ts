import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditsupplierPageRoutingModule } from './editsupplier-routing.module';

import { EditsupplierPage } from './editsupplier.page';
import { ExpandableComponent } from '../components/expandable/expandable.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditsupplierPageRoutingModule
  ],
  declarations: [EditsupplierPage,ExpandableComponent]
})
export class EditsupplierPageModule {}
