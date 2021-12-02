import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpurchasePage } from './editpurchase.page';

const routes: Routes = [
  {
    path: '',
    component: EditpurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpurchasePageRoutingModule {}
