import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Task } from './task';
import { DayService } from './day.service';
import { TaskService } from './task.service';

@Component({
    selector: 'task-list',
    templateUrl: 'app/task-list.component.html',
    styleUrls: ['app/task-list.component.css']
})
export class TaskListComponent implements OnInit, AfterViewInit {
    @Input() tasks: Task[];
    dates: any[];

    constructor(private _dayService: DayService,
                private _taskService: TaskService) { }

    ngOnInit() {
        this.dates = this._dayService.getDates();
    }

    ngAfterViewInit() {
        this.enableSortable();
    }

    checkHasTasks(day: string) {
        return this.tasks.filter((task) => task.day == day).length > 0;
    }
    
    getTasks(day: string) {
        this._taskService.updateTasks(this.tasks);
        return this.tasks.filter((task) => task.day == day);
    }

    deleteTask(task: Task) {
        let index = this.tasks.findIndex(x => x.timestamp == task.timestamp);
        this.tasks.splice(index, 1);
        this._taskService.updateTasks(this.tasks);
    }

    private enableSortable() {
        $('.task-list ul').sortable({
            handle: '.handle'
        });
    }
}