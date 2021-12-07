import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewinvoicePage } from './newinvoice.page';

const routes: Routes = [
  {
    path: '',
    component: NewinvoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewinvoicePageRoutingModule {}
