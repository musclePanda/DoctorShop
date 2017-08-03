import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login'
import { Main } from './main/main'
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login',  component: Login },
  { path: 'main',  component: Main },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
