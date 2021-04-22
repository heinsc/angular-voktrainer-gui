import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
const routes: Routes = [
  {path: 'allUsers', component: AllUsersComponent}
  , {path: 'userDetails/:id', component: UserDetailsComponent}
  , { path: '', redirectTo: '/allUsers', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }