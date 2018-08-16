import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseServices } from '../../shared/courses.service';
import { Courses } from '../../shared/courses';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-course-display',
  templateUrl: './admin-course-display.component.html',
  styleUrls: ['./admin-course-display.component.css']
})
export class AdminCourseDisplayComponent implements OnInit {

  theme = {
    theme: "cato"
  };

  selOptions = [];
  checkboxModel: Array < { value: boolean, text: string } > = [
      { value: true, text: 'Option 1' },
      { value: false, text: 'Option 2' },
      { value: false, text: 'Option 3' },
      { value: true, text: 'Option 4' }
  ];


checkboxColor = true;

checkboxChange() {
    let selOptions = [],
        checkboxes = this.checkboxModel;
    for (let i = 0; i < checkboxes.length; ++i) {
        if (checkboxes[i].value) {
            selOptions.push(' ' + checkboxes[i].text);
        }
    }
    this.selOptions = selOptions;
};

  message: string;
  courses: Courses[];

  constructor(private courseServices: CourseServices) { this.checkboxChange(); }

  ngOnInit() {

    var data = this.courseServices.getData();
    data.snapshotChanges().subscribe(item => {
      this.courses = [];
      item.forEach(element => {
        var i = element.payload.toJSON();
        i["$key"] = element.key;
        this.courses.push(i as Courses);
      });
    });
  }

  onSubmit(form: NgForm) {
    const start = form.value.startDate;
    const end = form.value.endDate;
    const headline = form.value.headline;
    // console.log(start + " --- " + this.end + " --- " + headline);

    this.courseServices.insertData(headline);
    this.courseServices.insertStartDate(start);
    this.courseServices.insertEndDate(end);

  }

}
