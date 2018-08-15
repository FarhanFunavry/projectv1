import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-doctor-special-day',
  templateUrl: './doctor-special-day.component.html',
  styleUrls: ['./doctor-special-day.component.css']
})
export class DoctorSpecialDayComponent implements OnInit {


  CurrentIndex;
  TodayDate;
  DoctorBox;
  DocName;
  currentDoctor;
  AllDoctors;
  FullHours;
  constructor() { }

  ngOnInit() {
    this.CurrentIndex = 0;
    this.currentDoctor = [];
    this.AllDoctors = ['Dr shahrukh' , 'Dr Howdy' , 'Dr ChicoChina' , 'Dr Shirza Firtas']
    this.DoctorBox = 'Select Doctor';
    this.TodayDate = moment().format('YYYY-MMMM-DD');
    this.FullHours = ['9:00 ' ,
      '9:15  ' ,
      '9:30  ' ,
      '9:45  ' ,
      '10:00  ' ,
      '10:15  ' ,
      '11:30  ' ,
      '11:45  ' ,
      '12:00  ' ,
      '12:15  ' ,
      '12:30  ' ,
      '12:45  ' ,
      '1:00  ' ,
      '1:15  '
    ];
  }

  UpdateDoctor(Doc){
    this.DocName = Doc;
    this.DoctorBox = Doc;
    if (this.currentDoctor.lenght === 0){
      this.currentDoctor.push(Doc);
    } else{
      this.currentDoctor.splice(0,1);
      this.currentDoctor.push(Doc);
    }
    this.CurrentIndex = 0;
  }

  returnItem() {
      this.CurrentIndex = this.CurrentIndex + 1;
      return this.FullHours[this.CurrentIndex];
  }

  alertFun(){
    alert('called');
    this.CurrentIndex = 0;
  }
}
