import { Component } from '@angular/core';

@Component({
    selector: 'task-form',
    templateUrl: 'app/task-form.component.html',
    styleUrls: ['app/task-form.component.css']
})
export class TaskFormComponent {
    min = 1;
    max = 8;
    counter = 1;

    stepUp() {
        if(this.counter < this.max) {
            this.counter++;
        }
    }

    stepDown() {
        if(this.counter > this.min) {
            this.counter--;
        }
    }
}