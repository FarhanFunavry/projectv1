import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-doctor-month',
  templateUrl: './doctor-month.component.html',
  styleUrls: ['./doctor-month.component.css']
})
export class DoctorMonthComponent implements OnInit {

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
    this.MDays = moment(this.Year+"-"+(this.Month+1), "YYYY-MM").daysInMonth();
    this.weeks = this.createWeekDays();
    this.PopulateMonth();
  }

  //  function used to populate the month
  PopulateMonth() {
    this.weeks = this.createWeekDays();
    this.DaysInMonth=[];
    // moment = moment().month();
    for (let i = 1; i <= this.MDays; i++) {
      this.DaysInMonth[i-1] =  moment(this.Year+"-"+(this.Month+1), "YYYY-MM").date(i).format('DD');
    }
  }
  ChangeMonth() {
    this.TotalDays = 0;
    if(this.Month==11){
      this.Month=0;
      this.Year = this.Year+1;
    }
    else{
      this.Month = this.Month + 1;
    }
    this.MonthName = moment().month(this.Month).format('MMMM');
    this.weeks = moment.weekdays();
    this.MDays = moment(this.Year+"-"+(this.Month+1), "YYYY-MM").daysInMonth();
    console.log('week'+this.weeks);
    this.PopulateMonth();
  }
  getMonthOffset(){
    return moment(this.Year+"-"+(this.Month+1), "YYYY-MM").startOf('month').day();
  }
  ChangeYear () {
    this.Year = this.Year + 1;
    this.MDays = moment(this.Year+"-"+(this.Month+1), "YYYY-MM").daysInMonth();
    this.PopulateMonth();
  }
  incrementDay() {
    this.TotalDays = this.TotalDays + 1;
  }
  returnItem(Doctor , Date) {
    console.log(Date);
    if (Doctor === 'Dr.Howdy' && Date === 4) {
      return this.eventsD1[0];
    } if (Doctor === 'Dr.Alanto' && Date === 1) {
      return this.eventsD1[1];
    }  if (Doctor === 'Dr.GoldenDragon'  && Date === 0) {
      return this.eventsD1[2];
    } else {
      return '.';
    }
  }
  RefreshDaysCounter() {
    this.TotalDays = 0;
  }

  DeleteXResource(DoctorName) {
    for (let i = 0; i < this.Doctors.length; i++) {
      if (this.Doctors[i] === DoctorName.target.innerText) {
        this.Doctors.splice(i, 1);
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

  createWeekDays(){
    if(this.getMonthOffset()==0){
      return moment.weekdays();
    }
    else if(this.getMonthOffset()==1){
      return ['Monday', 'Tuesdays','Wednesday','Thursday','Friday','Saturday','Sunday'];
    }
    else if(this.getMonthOffset()==2){
      return ['Tuesdays','Wednesday','Thursday','Friday','Saturday','Sunday','Monday'];
    }
    else if(this.getMonthOffset()==3){
      return ['Wednesday','Thursday','Friday','Saturday','Sunday','Monday', 'Tuesdays'];
    }
    else if(this.getMonthOffset()==4){
      return ['Thursday','Friday','Saturday','Sunday','Monday', 'Tuesdays','Wednesday'];
    }
    else if(this.getMonthOffset()==5){
      return ['Friday','Saturday','Sunday','Monday', 'Tuesdays','Wednesday','Thursday'];
    }
    else if(this.getMonthOffset()==6){
      return ['Saturday','Sunday', 'Monday', 'Tuesdays','Wednesday','Thursday','Friday'];
    }

  }
  OnContextMenu(){

  }

}
