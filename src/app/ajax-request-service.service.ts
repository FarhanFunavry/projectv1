import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxRequestServiceService {



  Id = 1;
  ListOfAllDoctors;
  ListOfAllClinics;
  url = 'http://192.168.100.4:3000/api/getSpecialitiesForSup/' + this.Id;
  constructor(private Http: HttpClient) {
      this.AjaxRequestForAllDoctorsList();
      this.AjaxRequestForAllClinicsList();
  }

  AjaxRequestForAllDoctorsList (){
    this.ListOfAllDoctors = ['Dr.shahrukh', 'Dr. Machine Gun', 'Dr.Alanto', 'Dr.Howdy' , 'Dr.GoldenDragon'];
  }


  AjaxRequestForAllClinicsList (){
    this.ListOfAllClinics = ['Ordopedix', 'Medical', 'Chiroparactic', 'Cardeology' ];
  }
}
