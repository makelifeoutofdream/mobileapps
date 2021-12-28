import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPageRoutingModule } from './report-routing.module';

import { ReportPage } from './report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    ReportPageRoutingModule
  ],
  declarations: [ReportPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportPageModule {}
