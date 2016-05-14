import { Component, Input } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: 'app/header.component.html',
    styleUrls: ['app/header.component.css']
})
export class HeaderComponent {
    @Input() title: string;
}