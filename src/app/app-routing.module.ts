import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'page', loadChildren: () => import('./page-error/page-error.module').then(m => m.PageErrorModule) },
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {
    path: 'dashboard', 
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
