import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpurchasePage } from './newpurchase.page';

const routes: Routes = [
  {
    path: '',
    component: NewpurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpurchasePageRoutingModule {}
