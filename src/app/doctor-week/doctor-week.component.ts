import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-doctor-week',
  templateUrl: './doctor-week.component.html',
  styleUrls: ['./doctor-week.component.css']
})
export class DoctorWeekComponent implements OnInit {

  DoctorBox = 'Select Doctor';
  AllDoctors;
  Year = 2018;
  Month = 6;
  MonthName;
  speciality;
  Doctors;
  eventsD1;
  weeks;
  MDays;
  FullHours;

  constructor() {
  }

  ngOnInit() {
    this.FullHours = ['00:00 ' ,
      '01:00  ' ,
      '02:00  ' ,
      '03:00  ' ,
      '04:00  ' ,
      '05:00  ' ,
      '06:00  ' ,
      '07:00  ' ,
      '08:00  ' ,
      '09:00  ' ,
      '10:00  ' ,
      '11:00  ' ,
      '12:00  ' ,
      '13:00  ' ,
      '14:00  ' ,
      '15:00  ' ,
      '16:00  ' ,
      '17:00  ' ,
      '18:00  ' ,
      '19:00  ' ,
      '20:00  ' ,
      '21:00  ' ,
      '22:00  ' ,
      '23:00  ' ,

    ];
    this.AllDoctors = ['Dr.shahrukh', 'Dr. Machine Gun', 'Dr.Alanto', 'Dr.Howdy', 'Dr.GoldenDragon'];
    this.weeks = moment.weekdays();
    this.eventsD1 = ['9:30-10:30', '10:30-11:30', '12:30-1:30', '2:30-3:30'];
    this.Doctors = [];
    this.speciality = ['1', '1', '2'];
    this.MonthName = moment().month(this.Month).format('MMMM');
  }

  returnItem(Doctor, Date) {
    if (Doctor === 'Dr.Howdy' && Date === 4) {
      return null;
    }
    if (Doctor === 'Dr.Alanto'  && Date === 1) {
      return null;
    }
    if (Doctor === 'Dr.GoldenDragon' && Date === 0) {
      return null;
    } else {
      return '.';
    }
  }
  DeleteXResource(DoctorName) {
    for (let i = 0; i < this.Doctors.length; i++) {
      if (this.Doctors[i] === DoctorName.target.innerText) {
        this.Doctors.splice(i, 1);
      }
    }
  }


  UpdateDoctor(Doc) {
    this.DoctorBox =  Doc;
    this.UpdateDoctorList(Doc);
  }

  UpdateDoctorList(Doc) {

    if (Doc.toString() === 'Dr.shahrukh') {
      this.Doctors.push('Dr.shahrukh');
    }

    if (Doc.toString() === 'Dr. Machine Gun') {
      this.Doctors.push('Dr. Machine Gun');
    }

    if (Doc.toString() === 'Dr.Alanto') {
      this.Doctors.push('Dr.Alanto');
    }

    if (Doc.toString() === 'Dr.Howdy') {
      this.Doctors.push('Dr.Howdy');
    }

    if (Doc.toString() === 'Dr.GoldenDragon') {
      this.Doctors.push('Dr.GoldenDragon');
    }
  }
}




