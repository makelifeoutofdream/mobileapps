import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewclientPageRoutingModule } from './newclient-routing.module';

import { NewclientPage } from './newclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewclientPageRoutingModule
  ],
  declarations: [NewclientPage]
})
export class NewclientPageModule {}
