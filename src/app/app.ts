import { Component } from '@angular/core';
import { TaskListComponent } from './tasklist/tasklist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'day4';
}
