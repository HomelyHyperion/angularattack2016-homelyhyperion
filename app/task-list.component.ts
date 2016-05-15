import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task';
import { DayService } from './day.service';

@Component({
    selector: 'task-list',
    templateUrl: 'app/task-list.component.html',
    styleUrls: ['app/task-list.component.css']
})
export class TaskListComponent implements OnInit {
    @Input() tasks: Task[];
    dates: any[];

    constructor(private _dayService: DayService) { }

    ngOnInit() {
        this.dates = this._dayService.getDates();
    }
}