import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAddPageRoutingModule } from './book-add-routing.module';

import { BookAddPage } from './book-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAddPageRoutingModule
  ],
  declarations: [BookAddPage]
})
export class BookAddPageModule {}
