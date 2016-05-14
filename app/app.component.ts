import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { TaskFormComponent } from './task-form.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HeaderComponent, TaskFormComponent]
})

export class AppComponent {
    title = 'FocusTrack';
}