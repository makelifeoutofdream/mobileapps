import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintersettingsPage } from './printersettings.page';

const routes: Routes = [
  {
    path: '',
    component: PrintersettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintersettingsPageRoutingModule {}
