import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsupplierPage } from './newsupplier.page';

const routes: Routes = [
  {
    path: '',
    component: NewsupplierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsupplierPageRoutingModule {}
