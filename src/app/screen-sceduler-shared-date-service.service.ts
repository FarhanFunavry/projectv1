import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenScedulerSharedDateServiceService {

  DoctorsList;
  ClinicsList;
  Month = 6;
  Year = 2018;
  constructor() {
    this.DoctorsList = [];
    this.ClinicsList = [];
  }

}
