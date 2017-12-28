import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoService } from '../shared/todo.service';
import { CreateComponent } from './pages/create/create.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CreateComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    CreateComponent
  ],
  providers: [TodoService]
})
export class TodosModule { }
