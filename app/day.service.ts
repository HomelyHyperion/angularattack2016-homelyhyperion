import { Injectable } from '@angular/core';

let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Injectable()
export class DayService {

    getToday() {
        var d = new Date();
        return  weekday[d.getDay()];
    }

    getDates() {
        let dates: any[] = [];

        for(let i = 0; i < 7; i++) {
            let date = new Date();
            date.setDate(date.getDate() + i);
            dates.push({
                day: weekday[date.getDay()],
                date: date.getDate(),
                month: months[date.getMonth()]
            });
        }

        return dates;
    }
}