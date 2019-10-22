import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../app/auth/services';
import { NotFoundPageComponent } from './core/containers';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard],
  },
  {
    path:'demos',
    loadChildren: () => import('./demo/demo.module').then(m=> m.DemoModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
