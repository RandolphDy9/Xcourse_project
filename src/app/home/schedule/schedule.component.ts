import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  tableValues: any[];
  tableHeaders: string[];

  constructor() {
    this.tableHeaders = [
      'City', 'Date', 'Location', 'Time', 'Topic'
    ];

    this.tableValues = [
      { 
        city: 'Lapu-lapu' , 
        date: '06/05/2018', 
        location: 'Hoops Dome' , 
        time: '7:00am',
        topic: 'HTML'
      },
      { 
        city: 'Tagbilaran' , 
        date: '06/07/2018', 
        location: 'HN University' , 
        time: '7:00am',
        topic: 'Bootstrap'
      },
      { 
        city: 'General Santos' , 
        date: '06/12/2018', 
        location: 'St. Jude University' , 
        time: '7:00am',
        topic: 'CSS'
      },
      { 
        city: 'Cebu' , 
        date: '07/01/2018', 
        location: 'University of Cebu' , 
        time: '8:00am',
        topic: 'Angular'
      },
      { 
        city: 'Dipolog' , 
        date: '07/05/2018', 
        location: 'Dipolog Community School' , 
        time: '8:00am',
        topic: 'Vue'
      },
      { 
        city: 'Butuan' , 
        date: '07/15/2018', 
        location: 'Misamis Union' , 
        time: '8:00am',
        topic: 'Angular'
      },
    ];
  }

  ngOnInit() {
  }

}
