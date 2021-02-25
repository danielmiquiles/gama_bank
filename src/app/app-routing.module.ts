import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExemploComponent } from './exemplo/exemplo.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  { path: 'exemplo', component: ExemploComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
