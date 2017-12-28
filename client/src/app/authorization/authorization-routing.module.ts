import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationModule } from './authorization.module';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthorizationComponent } from './authorization.component';

const routes: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AuthorizationModule,
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
