import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header.component';
import { TaskFormComponent } from './task-form.component';
import { TaskListComponent } from './task-list.component';
import { Task } from './task';
import { DayService } from './day.service';
import { TaskService } from './task.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HeaderComponent, TaskFormComponent, TaskListComponent],
    providers: [DayService, TaskService]
})

export class AppComponent implements OnInit {
    title = 'FocusTrack';
    tasks: Task[] = [];

    constructor(private _taskService: TaskService) { }

    ngOnInit() {
        let tasks = this._taskService.getTasks();
        if(tasks != null) {
            this.tasks = tasks;
        }
    }
}