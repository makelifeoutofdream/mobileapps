import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditclientPageRoutingModule } from './editclient-routing.module';

import { EditclientPage } from './editclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditclientPageRoutingModule
  ],
  declarations: [EditclientPage]
})
export class EditclientPageModule {}
