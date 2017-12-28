import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user.module';
import { UserComponent } from './user.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  declarations: [
    DetailsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    UserModule,
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
