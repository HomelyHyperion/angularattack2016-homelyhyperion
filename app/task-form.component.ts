import { Component, OnInit, Input } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'task-form',
    templateUrl: 'app/task-form.component.html',
    styleUrls: ['app/task-form.component.css']
})
export class TaskFormComponent implements OnInit {
    @Input() tasks: Task[];
    newTask: Task;
    min = 1; max = 8;

    ngOnInit() {
        this.clearTask();
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
        if(this.newTask.day == '') {
            this.newTask.day = this.getToday();
        }

        this.tasks.push(this.newTask);
        this.clearTask();
        console.log(this.tasks);
    }

    private clearTask() {
        this.newTask = {description: '', counter: 1, day: ''};
    }

    private getToday() {
        var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();

        return  weekday[d.getDay()];
    }
}