import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from '../taskitem/taskitem';
import { NgbModule, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskItemComponent, NgbModule],
  templateUrl: './tasklist.html',
  styleUrls: ['./tasklist.css']
})
export class TaskListComponent {
  newTask: string = '';
  tasks: { name: string; done: boolean }[] = [];

  selectedTaskName: string = '';
  selectedTaskIndex: number = -1;

  @ViewChild('confirmModal') confirmModal!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, done: false });
      this.newTask = '';
    }
  }
  successMessage: string = '';
  showSuccess: boolean = false;

  confirmDeleteTask(index: number) {
    this.selectedTaskName = this.tasks[index].name;
    this.selectedTaskIndex = index;

    const modalRef: NgbModalRef = this.modalService.open(this.confirmModal);
    modalRef.result.then(
      (result) => {
        if (result === 'delete') {
          this.deleteTask(index);
        }
      },
      () => {
        // Modal dismissed without action
      }
    );
  }

  deleteTask(index: number) {
    const deletedTask = this.tasks[index].name;
    this.tasks.splice(index, 1);

    this.successMessage = `you have successfuky deleted ${deletedTask}`;
    this.showSuccess = true;

    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }

  markAsDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }
}
