import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintersettingsPageRoutingModule } from './printersettings-routing.module';

import { PrintersettingsPage } from './printersettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintersettingsPageRoutingModule
  ],
  declarations: [PrintersettingsPage]
})
export class PrintersettingsPageModule {}
