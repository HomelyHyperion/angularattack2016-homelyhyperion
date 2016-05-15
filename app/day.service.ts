import { Injectable } from '@angular/core';

let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

@Injectable()
export class DayService {

    getToday() {
        var d = new Date();
        return  weekday[d.getDay()];
    }

    getSortedWeekday() {
        let today = this.getToday();
        let sortedWeekday = weekday;

        while(sortedWeekday[0] != today) {
            sortedWeekday.push(sortedWeekday.shift())
        }

        return sortedWeekday;
    }
}