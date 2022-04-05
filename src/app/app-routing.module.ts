import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/core/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/core/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'menu/actors',
    loadChildren: () =>
      import('./pages/actors/actors.module').then((m) => m.ActorsModule),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
