import { Component, OnInit } from '@angular/core';
import { Courses } from '../shared/courses';
import { CourseServices } from '../shared/courses.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  courses: Courses[];

  constructor(private courseService: CourseServices) { }

  ngOnInit() {
    var data = this.courseService.getData();
    data.snapshotChanges().subscribe(item => {
      this.courses = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.courses.push(x as Courses);
      });
    });
  }

}
