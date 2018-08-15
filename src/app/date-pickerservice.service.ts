import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatePickerserviceService {

  NewDay;
  NewMonth;
  NewYear;
  public newMonthSubject = new Subject<any>();
  public newYearSubject = new Subject<any>();
  public newDaySubject = new Subject<any>();

  constructor() {
  }

  ChangedDay(NewDay)
  {
    this.newDaySubject.next(NewDay);
    //console.log(this.newDaySubject);
  }


  ChangedMonth(NewMonth) {
    this.newMonthSubject.next(NewMonth);
   // console.log(this.NewMonth, "service value ")
    // console.log(NewMonth);

  }

  ChangedYear(NewYear) {
    this.newYearSubject.next(NewYear);
    //console.log(NewYear);
  }



}
