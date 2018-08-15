import { Component, OnInit } from '@angular/core';
import {IMyDateModel, IMyDpOptions} from 'mydatepicker';
import {AjaxRequestServiceService} from '../ajax-request-service.service';
import {ScreenScedulerSharedDateServiceService} from '../screen-sceduler-shared-date-service.service';
import {DatePickerserviceService} from '../date-pickerservice.service';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {

  DoctorViewClicked;
  SelectItem = false;
  DoctorCheck=false;
  ClinicCheck=false;
  public SchedulerDisplay : any;
  public DoctorCheckBox : boolean;
  public ClinicCheckBox : any;
  public DoctorFilter : boolean = false;
  public ClinicFilter : boolean = false;

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    inline: true,
  };
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(public Screen1Ajaxrequest: AjaxRequestServiceService , private ShareDateScheduler: ScreenScedulerSharedDateServiceService , private SharedDate : DatePickerserviceService) { }

  ngOnInit() {
    this.DoctorViewClicked = true;
    this.ShareDateScheduler.DoctorsList = [];


  }

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    this.ShareDateScheduler.Month = event.date.month;
    this.ShareDateScheduler.Year = event.date.year;


    this.SharedDate.NewMonth=event.date.month;
    this.SharedDate.NewYear=event.date.year;
    this.SharedDate.NewDay=event.date.day;
    //console.log(this.SharedDate.NewMonth,"screen value ")

    this.SharedDate.ChangedDay(this.SharedDate.NewDay);

    this.SharedDate.ChangedMonth(this.SharedDate.NewMonth);
    this.SharedDate.ChangedYear(this.SharedDate.NewYear);

    //console.log(this.SharedDate.NewYear);

    //console.log(this.SharedDate.NewDay);


    //this.SharedDate.ChangedMonth(this.SharedDate.Year)




    //console.log(this.SharedDate.Month);
  }

  SelectedDoctor(DoctorName){
    this.ShareDateScheduler.DoctorsList.push(DoctorName);
  }

  SelectedClinic(ClinicName){
    this.ShareDateScheduler.ClinicsList.push(ClinicName);

  }

  ClinicClicked(){
    if (this.DoctorViewClicked === true){
      this.DoctorViewClicked = false;
    } else{
      this.DoctorViewClicked = true;
    }
    return this.DoctorViewClicked;

  }

  // DisplayDoctorstuff()
  // {
  //   alert("Doctor checked")
  //
  // }
  //
  // HideDoctorStuff()
  // {
  //   alert("Doctor UnChecked")
  // }
  //
  // DisplayClinicStuff()
  // {
  //   alert("Display clinic")
  //   //console.log("clinic checked")
  // }
  //
  // HideClinicStuff()
  // {
  //   alert("clinic unchecked")
  //
  // }


  DisplayComponent(str){

    this.SchedulerDisplay = str;
  }

  DisplayDoctor()

  {

    if (this.DoctorCheckBox = true)
    {
      alert("Doctor Checked")

    }
    else
    alert("Doctor Unchecked")
  }


  ShowDoctorFilter()
  {
    if (this.DoctorFilter===false)
    {

      this.DoctorFilter=true;

    }
    else
    {
      //console.log(this.DoctorFilter)
     this.DoctorFilter=false;
    }
  }


  ShowClinicFilter()
  {
    if (this.ClinicFilter===false)
    {
      this.ClinicFilter=true;
    }
    else
    {
      this.ClinicFilter=false;
    }
  }

// Change()
// {
// if (this.ClinicCheck=true)
// {
//   this.DisplayClinicStuff();
// }
// else {
//   this.HideClinicStuff()
//
// }
// }



}
