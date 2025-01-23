import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUpdateComponent } from './user-update/user-update.component'
import { LoginComponent } from './login/login.component';
import { EndpageComponent } from './endpage/endpage.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  {path:'signup', component: SignupComponent},
  { path: 'user-update', component: UserUpdateComponent },
  { path: 'endpage', component: EndpageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
