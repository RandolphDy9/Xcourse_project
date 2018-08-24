import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CourseServices } from '../../../core/services';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  constructor(private courseService: CourseServices,
              private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.onReset();
  }

  onSubmitCourse(form: NgForm) {
    if(form.value.$key == null) {
      this.courseService.insertCourse(form.value);
    } else {
      this.courseService.updateCourse(form.value);
    }

    this.onReset(form);
    // this.toastr.success('Successfully added the course.', 'Success!');
  }

  onReset(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.courseService.selectedCourse = {
        $key: null,
        image: '',
        title: '',
        description: '',
        creator: '',
        price: 0
      };
    }
  }

}
