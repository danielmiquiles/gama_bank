import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { NoAuthGuard } from './shared/guards/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
      canActivate: [NoAuthGuard]
  },
  { path:'esqueci-senha',
    component:EsqueciSenhaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
