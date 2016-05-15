import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Task } from './task';
import { DayService } from './day.service';

@Component({
    selector: 'task-list',
    templateUrl: 'app/task-list.component.html',
    styleUrls: ['app/task-list.component.css']
})
export class TaskListComponent implements OnInit, AfterViewInit {
    @Input() tasks: Task[];
    dates: any[];

    constructor(private _dayService: DayService) { }

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
        return this.tasks.filter((task) => task.day == day);
    }

    deleteTask(task: Task) {
        let index = this.tasks.findIndex(x => x.timestamp == task.timestamp);
        this.tasks.splice(index, 1);
    }

    private enableSortable() {
        $('.task-list ul').sortable({
            handle: '.handle'
        });
    }
}