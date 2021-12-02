import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditsupplierPage } from './editsupplier.page';

const routes: Routes = [
  {
    path: '',
    component: EditsupplierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditsupplierPageRoutingModule {}
