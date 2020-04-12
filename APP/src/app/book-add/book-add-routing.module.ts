import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookAddPage } from './book-add.page';

const routes: Routes = [
  {
    path: '',
    component: BookAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookAddPageRoutingModule {}
