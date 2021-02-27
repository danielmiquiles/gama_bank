import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { NoAuthGuard } from './shared/guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'blocked',
    loadChildren: () => import('./blocked/blocked.module').then((m) => m.BlockedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'page',
    loadChildren: () =>
      import('./components/page-error/page-error.module').then((m) => m.PageErrorModule),
  },
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  { 
    path:'forgot',
    component:EsqueciSenhaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
