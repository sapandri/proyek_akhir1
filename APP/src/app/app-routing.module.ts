import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'book-add',
    loadChildren: () => import('./book-add/book-add.module').then( m => m.BookAddPageModule)
  },
  {
    path: 'book-detail/:id',
    loadChildren: () => import('./book-detail/book-detail.module').then( m => m.BookDetailPageModule)
  },
  {
    path: 'book-edit/:id',
    loadChildren: () => import('./book-edit/book-edit.module').then( m => m.BookEditPageModule)
  },
  {
    path: 'user-add',
    loadChildren: () => import('./user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path: 'user-detail/:id',
    loadChildren: () => import('./user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'user-edit/:id',
    loadChildren: () => import('./user-edit/user-edit.module').then( m => m.UserEditPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
