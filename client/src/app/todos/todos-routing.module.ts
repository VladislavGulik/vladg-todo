import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateComponent } from './pages/create/create.component';
import { AllComponent } from './pages/all/all.component';
import { TodosModule } from './todos.module';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'all', component: AllComponent },  
  { path: 'create', component: CreateComponent },  
];

@NgModule({
  declarations: [
    AllComponent,
    CreateComponent
  ],
  providers: [
    // ...
  ],
  imports: [
    RouterModule.forChild(routes),
    TodosModule
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule { }
