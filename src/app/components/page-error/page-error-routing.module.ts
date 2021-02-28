import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageErrorComponent } from './page-error.component';

const routes: Routes = [
  { path: '', component: PageErrorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageErrorRoutingModule { }
