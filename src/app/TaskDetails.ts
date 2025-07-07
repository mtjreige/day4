import{ Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from './taskservice';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-task-details',
    standalone: true,
    imports: [NgIf],
    template:`
        <div *ngIf="task; else noTask">
            <h2>Task Details</h2>
            <p><strong>Name:</strong> {{ task.name }}</p>
            <p><strong>Status:</strong> {{ task.done ? 'Done' : 'Not done' }}</p>

            <button (click)="toggleDone()">
                {{ task.done ? 'Undo' : 'Done' }}
            </button>
            <button (click)="deleteTask()">Delete</button>
            <button (click)="goBack()">Back to List</button>
        </div>
        <ng-template #noTask>
            <p>Task  not found.</p>
            <button (click)="goBack()">Back to List</button>
        </ng-template>
    `
})

export class TaskDetailsComponent {
    taskId!: number;
    task?: { name: string; done: boolean };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private taskService: TaskService
    ) {
        this.taskId = Number(this.route.snapshot.paramMap.get('id'));
        this.task = this.taskService.getTask(this.taskId);
    }

    toggleDone() {
        this.taskService.toggleDone(this.taskId);
        this.task = this.taskService.getTask(this.taskId);
    }

    deleteTask(){
        this.taskService.deleteTask(this.taskId);
        this.router.navigate(['/tasks']);
    }

    goBack() {
        this.router.navigate(['/tasks']);
    }
}