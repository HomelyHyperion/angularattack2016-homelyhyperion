import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'task-form',
    templateUrl: 'app/task-form.component.html',
    styleUrls: ['app/task-form.component.css']
})
export class TaskFormComponent implements OnInit {
    min = 1;
    max = 8;
    newTask: Task;

    ngOnInit() {
        this.newTask = {description: '', counter: 1, frequency: 'Today'};
    }
    
    stepUp() {
        if(this.newTask.counter < this.max) {
            this.newTask.counter++;
        }
    }

    stepDown() {
        if(this.newTask.counter > this.min) {
            this.newTask.counter--;
        }
    }
    
    addTask() {
        console.log(this.newTask);
    }
}