import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CourseServices } from './core/services/courses.service';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Ng-Bootstrap';

  constructor() {}

  ngOnInit() {

  }

}
