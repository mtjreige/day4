import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from '../taskitem/taskitem';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskItemComponent],
  templateUrl: './tasklist.html',
  styleUrls: ['./tasklist.css']
})
export class TaskListComponent {
  newTask: string = '';
  tasks: { name: string; done: boolean }[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, done: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  markAsDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }
}
