import { Component, Input } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'task-list',
    templateUrl: 'app/task-list.component.html',
    styleUrls: ['app/task-list.component.css']
})
export class TaskListComponent {
    @Input() tasks: Task[];
}