import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from '../taskitem/taskitem';
import { TaskService } from '../taskservice';
import { NgbModule, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskItemComponent, NgbModule, RouterModule],
  templateUrl: './tasklist.html',
  styleUrls: ['./tasklist.css']
})
export class TaskListComponent {
  newTask: string = '';

  
  tasks: { name: string; done: boolean }[] = [];

  selectedTaskName: string = '';
  selectedTaskIndex: number = -1;

  @ViewChild('confirmModal') confirmModal!: TemplateRef<any>;

  successMessage: string = '';
  showSuccess: boolean = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.tasks = this.taskService.getTasks(); 
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }

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
        
      }
    );
  }

  deleteTask(index: number) {
    const deletedTask = this.tasks[index].name;
    this.taskService.deleteTask(index);

    this.successMessage = `You have successfully deleted ${deletedTask}`;
    this.showSuccess = true;

    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }

  markAsDone(index: number) {
    this.taskService.toggleDone(index);
  }

  goToDetails(index: number) {
    this.router.navigate(['/tasks', index]);
  }
}
