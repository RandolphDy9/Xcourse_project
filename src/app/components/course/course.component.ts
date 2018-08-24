import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServices } from '../../core/services/courses.service';
import { Courses } from '../../shared/models/courses.model';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { SelectedCourseService } from '../../core/services/selected-course.service';

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
  courseKey: Courses;


  constructor(private route: Router,
    private courseService: CourseServices,
    private authService: AuthService,
    private toastr: ToastrService,
    private selectedCourseService: SelectedCourseService) { }

  ngOnInit() {
    this.courseService.cast.subscribe(message => {
      this.message = message;
    });

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

  onEnroll(course: Courses) {
    if (this.authService.token != null && this.authService.AdminFlag == false) {
      // if ((confirm("Are you willing to buy this course?") == true) && this.authService.AdminFlag == false) {
      this.toastr.success("You have Success fully enrolled!", "Course enrolled!");

      const courseTitle = course.title;
      const courseDescription = course.description;
      const courseCreator = course.creator;
      console.log('From getCourses: ' + courseTitle + " " + courseCreator + " " + courseDescription);
      this.selectedCourseService.passToMyCourses(courseTitle, courseCreator, courseDescription);

      // }
    } else if (this.authService.AdminFlag == true) {
      this.toastr.info('You are logged in as Admin remember?', 'OOPS!');
    } else {
      this.toastr.info('You must register or login to do so.', 'Wanna Enroll the Course?');
      this.route.navigate(['registration']);
    }
  }

}
