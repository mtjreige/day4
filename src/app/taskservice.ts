import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class TaskService{
    private tasks: { name: string; done: boolean}[] = [];

    getTasks(){
        return this.tasks;
    }

    getTask(index: number){
        return this.tasks[index];
    }

    addTask(name: string){
        this.tasks.push({name, done: false });
    }

    toggleDone(index: number){
        if (this.tasks[index]){
            this.tasks[index].done = !this.tasks[index].done;
        }
    }

    deleteTask(index: number){
        this.tasks.splice(index, 1);
    }
}