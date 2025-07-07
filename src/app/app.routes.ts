import { Routes } from '@angular/router';
import { TaskListComponent } from './tasklist/tasklist';
import { TaskDetailsComponent } from './TaskDetails';

export const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];
