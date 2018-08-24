import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Courses } from '../../../shared/models';
import { CourseServices } from '../../../core/services';

@Component({
  selector: 'app-admin-course-display',
  templateUrl: './admin-course-display.component.html',
  styleUrls: ['./admin-course-display.component.css']
})
export class AdminCourseDisplayComponent implements OnInit {

  theme = {
    theme: "cato"
  };

  message: string;
  courses: Courses[];

  constructor(private courseServices: CourseServices, private toastr: ToastrService) { }

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
    this.toastr.success('Changes have been made to Courses.', 'Changes Successful!');
    
  }

}
