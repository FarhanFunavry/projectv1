import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-day-scheduler',
  templateUrl: './day-scheduler.component.html',
  styleUrls: ['./day-scheduler.component.css']
})
export class DaySchedulerComponent implements OnInit {

  DoctorBox = 'Select Doctor';
  ClinicBox = 'Select Clinic';
  AllClincis;
  AllDoctors;
  Doctors ;
  clinics;
  TodayDate;
  eventsD1;

  constructor() { }

  ngOnInit() {
    this.Doctors = [];
    this.clinics = [];
    this.eventsD1 = [ '9:30-10:30' , '10:30-11:30', '12:30-1:30', '2:30-3:30'] ;
    this.AllClincis = ['Ordopedix', 'Chiropractic', 'Medical', 'Cinalytica'];
    this.AllDoctors = ['Dr.shahrukh', 'Dr. Machine Gun', 'Dr.Alanto', 'Dr.Howdy' , 'Dr.GoldenDragon'];
    this.TodayDate = moment().format('YYYY-MMMM-DD');
  }

  returnItem(Doctor , Clinic) {
    console.log(Date);
    if (Doctor === 'Dr.Howdy' && Clinic === 'Ordopedix') {
      return this.eventsD1[0];
    } if (Doctor === 'Dr.Alanto' && Clinic === 'Chiropractic') {
      return this.eventsD1[1];
    }  if (Doctor === 'Dr.GoldenDragon' && ( Clinic === 'Chiropractic' || Clinic === 'Ordopedix')) {
      return this.eventsD1[2];
    } if (Doctor === 'Dr.GoldenDragon' && ( Clinic === 'Chiropractic' || Clinic === 'Ordopedix' || Clinic === 'Cinalytica')) {
      return this.eventsD1[3];
    } else {
      return '.';
    }
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

  EventBoxClicked(Event , Doctor, Clinic){
    if (Event.target.innerText === '.'){
      alert('no appointment of ' + Doctor + ' at ' + Clinic );
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
