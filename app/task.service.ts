import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskService {

    updateTasks(tasks: Task[]) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks() {
        return JSON.parse(localStorage.getItem("tasks"));
    }
}