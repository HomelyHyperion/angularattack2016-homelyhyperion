import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { TaskFormComponent } from './task-form.component';
import { TaskListComponent } from './task-list.component';
import { Task } from './task';
import { DayService } from './day.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HeaderComponent, TaskFormComponent, TaskListComponent],
    providers: [DayService]
})

export class AppComponent {
    title = 'FocusTrack';
    tasks: Task[] = [];
}