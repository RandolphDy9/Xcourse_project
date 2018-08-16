import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServices } from '../shared/courses.service';
import { Courses } from '../shared/courses';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  // course: Object;
  message: string;
  courses: Courses[];
  endDate: string;
  startDate: string;
  

  constructor(private route: Router,
              private courseService: CourseServices,
              private authService: AuthService,
              private toastr: ToastrService,) {}

  ngOnInit() {

    this.courseService.cast.subscribe(message => {
      this.message = message;
      // console.log("Inside subscribe: " + message);
      // console.log("Inside subscribe (this): ")
    });
    // console.log("Output of msg (this): " + this.message);

    this.courseService.castStartDate.subscribe(startDate => this.startDate = startDate);
    this.courseService.castEndDate.subscribe(endDate => this.endDate = endDate);

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

  onEnroll() {
    if(this.authService.token != null) {
      if ((confirm("Are you willing to buy this course?") == true) && this.authService.AdminFlag == false) {
        this.toastr.success("You have Success fully enrolled!", "Course enrolled!");
        this.route.navigate(['course-info']);
      }
    } else {
      this.route.navigate(['registration']);
    }
  }

}
