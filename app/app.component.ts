import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { TaskFormComponent } from './task-form.component';
import { TaskListComponent } from './task-list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HeaderComponent, TaskFormComponent, TaskListComponent]
})

export class AppComponent {
    title = 'FocusTrack';
}