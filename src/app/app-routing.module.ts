import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SolicitarNovaSenhaComponent } from './components/solicitar-nova-senha/solicitar-nova-senha.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { NoAuthGuard } from './shared/guards/no-auth.guard';



const routes: Routes = [
  {
    path: '#',
    loadChildren: () => import('./blocked/blocked.module').then((m) => m.BlockedModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginModule),
    canActivate: [NoAuthGuard]
  },
  { 
    path:'esqueci-senha',
    component: EsqueciSenhaComponent,
  },
  {
    path:'solicitar-nova-senha',
    component: SolicitarNovaSenhaComponent,
  },
  {
    path: 'error',
    loadChildren: () => import('./components/page-error/page-error.module').then(m => m.PageErrorModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
