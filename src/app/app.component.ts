import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CourseServices } from './shared/courses.service';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng-Bootstrap';

  constructor() {}

  ngOnInit() {

  }

}
