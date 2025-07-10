import { Component } from '@angular/core';
//import { TaskListComponent } from './tasklist/tasklist';

import { UserFormComponent } from './user-form/user-form';
@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [TaskListComponent],
  imports: [UserFormComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'day4';
}
