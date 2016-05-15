import { Injectable } from '@angular/core';

@Injectable()
export class SortableService {

    enableSortable() {
        $('.task-list ul').sortable({
            handle: '.handle'
        });
    }
}