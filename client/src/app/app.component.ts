import { Component } from '@angular/core';

const todos = [
  {
    title: 'Изучить Angular',
    completed: true
  },
  {
    title: 'Стать devGuru',
    completed: false
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  todos = todos;

  toggle = (todo: any) => {
    todo.completed = !todo.completed;
  }

  delete = (todo : any) => {
    let index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
