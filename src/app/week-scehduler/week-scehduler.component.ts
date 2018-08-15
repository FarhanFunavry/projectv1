import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-week-scehduler',
  templateUrl: './week-scehduler.component.html',
  styleUrls: ['./week-scehduler.component.css']
})
export class WeekScehdulerComponent implements OnInit {

  DoctorBox = 'Select Doctor';
  ClinicBox = 'Select Clinic';
  AllClincis;
  AllDoctors;
  Year = 2018;
  Month = 6;
  TotalDaysPortion;
  MonthName;
  clinics;
  speciality;
  DaysInMonth = [];
  Doctors ;
  eventsD1;
  weeks;
  TotalDays;
  MDays;
  constructor() { }

  ngOnInit() {
    this.AllClincis = ['Ordopedix', 'Chiropractic', 'Medical', 'Cinalytica'];
    this.AllDoctors = ['Dr.shahrukh', 'Dr. Machine Gun', 'Dr.Alanto', 'Dr.Howdy' , 'Dr.GoldenDragon'];
    this.TotalDays = 0;
    this.TotalDaysPortion = ['1', '2', '3', '4' , '5'];
    this.weeks = moment.weekdays();
    this.eventsD1 = [ '9:30-10:30' , '10:30-11:30', '12:30-1:30', '2:30-3:30'] ;
    this.Doctors = [];
    this.clinics = [];
    this.speciality = ['1', '1' , '2'];
    this.MonthName = moment().month(this.Month).format('MMMM');
    this.MDays = moment(this.Year.toString() + '-0' + (this.Month + 1).toString(), 'YYYY-MM').daysInMonth();
  }

  incrementDay() {
    this.TotalDays = this.TotalDays + 1;
  }
  returnItem(Doctor , Date, Clinic) {
    console.log(Date);
    if (Doctor === 'Dr.Howdy' && Clinic === 'Ordopedix' && Date === 4) {
      return this.eventsD1[0];
    } if (Doctor === 'Dr.Alanto' && Clinic === 'Chiropractic' && Date === 1) {
      return this.eventsD1[1];
    }  if (Doctor === 'Dr.GoldenDragon' && ( Clinic === 'Chiropractic' || Clinic === 'Ordopedix') && Date === 0) {
      return this.eventsD1[2];
    } else {
      return '.';
    }
  }
  RefreshDaysCounter() {
    this.TotalDays = 0;
  }

  DeleteXResource( ClinicName) {
    for ( let i = 0; i < this.clinics.length ; i++) {
      if ( this.clinics[i] === ClinicName.target.innerText) {
        this.clinics.splice(i , 1);
      }
    }
  }

  DeleteYResource( DoctorName) {
    for ( let i = 0; i < this.Doctors.length ; i++) {
      if ( this.Doctors[i] === DoctorName.target.innerText ) {
        this.Doctors.splice(i , 1);
      }
    }
  }

  UpdateClinicBox(Clinic){
    this.ClinicBox = Clinic;
    this.UpdateClinic(Clinic);
  }

  UpdateDoctor(Doc) {
    this.DoctorBox = Doc;
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

  UpdateClinic(Clinic) {

    if (Clinic.toString() === 'Ordopedix') {
      this.clinics.push('Ordopedix');
    }

    if (Clinic.toString() === 'Chiropractic') {
      this.clinics.push('Chiropractic');
    }

    if (Clinic.toString() === 'Medical') {
      this.clinics.push('Medical');
    }

    if (Clinic.toString() === 'Cinalytica') {
      this.clinics.push('Cinalytica');
    }
  }

  EventBoxClicked(Event , Doctor, Clinic , Date){
    Date = Date + 1;
    if (Event.target.innerText === '.'){
      alert('no appointment of ' + Doctor + ' at ' + Clinic + ' on ' + Date + ' ' + this.MonthName + ' ' + this.Year);
    } else {
      alert('Doctor: '+ Doctor + '\n Clinic: ' + Clinic + '\n Timing:' + Event.target.innerText);
    }
  }


  OnContextMenu(){

  }


  onItemDrop(e: any) {
    // Get the dropped data here
    alert('Date Dropped '+ e.dragData);
  }


}
