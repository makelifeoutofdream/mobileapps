import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewinventoryPage } from './newinventory.page';

const routes: Routes = [
  {
    path: '',
    component: NewinventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewinventoryPageRoutingModule {}
