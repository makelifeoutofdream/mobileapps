import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewexpensePage } from './newexpense.page';

const routes: Routes = [
  {
    path: '',
    component: NewexpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewexpensePageRoutingModule {}
