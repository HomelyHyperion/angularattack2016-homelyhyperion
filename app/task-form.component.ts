import { Component, OnInit, Input } from '@angular/core';
import { Task } from './task';
import { DayService } from './day.service';

@Component({
    selector: 'task-form',
    templateUrl: 'app/task-form.component.html',
    styleUrls: ['app/task-form.component.css']
})
export class TaskFormComponent implements OnInit {
    @Input() tasks: Task[];
    newTask: Task;
    min = 1; max = 8;

    constructor(private _dayService: DayService) { }

    ngOnInit() {
        this.initTask();
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
            this.newTask.day = this._dayService.getToday();
        }
        this.newTask.timestamp = new Date().toISOString ();
        this.tasks.push(this.newTask);
        this.clearTask();
        this.enableSortable();
    }

    private initTask() {
        this.newTask = {description: '', counter: 1, day: '', status: 'To Do', timestamp: ''};
    }

    private clearTask() {
        this.newTask = {description: '', counter: this.newTask.counter, day: this.newTask.day, status: 'To Do', timestamp: ''};
    }

    private enableSortable() {
        $('.task-list ul').sortable({
            handle: '.handle'
        });
    }
}