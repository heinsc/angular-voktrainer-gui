import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewAccountComponent } from "./new-account/new-account.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'} 
  , { path: 'login', component: LoginComponent}
  , { path: 'newAccount', component: NewAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
