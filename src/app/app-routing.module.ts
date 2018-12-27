import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentosComponent } from './lancamentos/lancamentos.component';

const routes: Routes = [{ path: '', redirectTo: '/lancamentos', pathMatch: 'full' },
{ path: 'lancamentos', component: LancamentosComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
