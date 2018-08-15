import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-doctor-day',
  templateUrl: './doctor-day.component.html',
  styleUrls: ['./doctor-day.component.css']
})
export class DoctorDayComponent implements OnInit {

  DoctorBox = 'Select Doctor';
  AllClincis;
  AllDoctors;
  Doctors;
  clinics;
  TodayDate;
  eventsD1;
  FullHours;

  constructor() {
  }

  ngOnInit() {
    this.FullHours = ['00:00 ',
      '01:00  ',
      '02:00  ',
      '03:00  ',
      '04:00  ',
      '05:00  ',
      '06:00  ',
      '07:00  ',
      '08:00  ',
      '09:00  ',
      '10:00  ',
      '11:00  ',
      '12:00  ',
      '13:00  ',
      '14:00  ',
      '15:00  ',
      '16:00  ',
      '17:00  ',
      '18:00  ',
      '19:00  ',
      '20:00  ',
      '21:00  ',
      '22:00  ',
      '23:00  ',

    ];
    this.Doctors = [];
    this.clinics = [];
    this.eventsD1 = ['9:00-10:00', '2:00-3:00'];
    this.AllClincis = ['Ordopedix', 'Chiropractic', 'Medical', 'Cinalytica'];
    this.AllDoctors = ['Dr.shahrukh', 'Dr.Machine Gun', 'Dr.Alanto', 'Dr.Howdy', 'Dr.GoldenDragon'];
    this.TodayDate = moment().format('YYYY-MMMM-DD');
  }

  returnItem(Doctor) {
    // if (Doctor === 'Dr.Howdy') {
    //   return '.';
    // } if (Doctor === 'Dr.Alanto' ) {
    //   return '.';
    // }  if (Doctor === 'Dr.GoldenDragon') {
    //   return '.';
    // } else {
    //   return ',';
    // }
    return '.';
  }

  DeleteXResource(DoctorName) {
    for (let i = 0; i < this.Doctors.length; i++) {
      if (this.Doctors[i] === DoctorName.target.innerText) {
        this.Doctors.splice(i, 1);
      }
    }
  }

  UpdateDoctor(Doc) {
    this.DoctorBox = Doc;
    this.UpdateDoctorList(Doc);
  }

  UpdateDoctorList(Doc) {

    if (Doc.toString() === 'Dr.shahrukh') {
      this.Doctors.push('Dr.shahrukh');
    }

    if (Doc.toString() === 'Dr.Machine Gun') {
      this.Doctors.push('Dr.Machine Gun');
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

  OnContextMenu() {

  }

}





