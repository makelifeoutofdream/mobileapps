import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesReturnComponent } from './sales-return.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: SalesReturnComponent
  }
];

@NgModule({
  declarations: [SalesReturnComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class SalesReturnModule { }
