import { Component, OnInit } from '@angular/core';
import { CourseServices } from '../../shared/courses.service';
import { Courses } from '../../shared/courses';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  courses: Courses[];

  constructor(private courseService: CourseServices,
              private toastr: ToastrService,
              private route: Router) { }

  ngOnInit() {
    var data = this.courseService.getData();
    data.snapshotChanges().subscribe(item => {
      this.courses = [];
      item.forEach(element => {
        var i = element.payload.toJSON();
        i["$key"] = element.key;
        this.courses.push(i as Courses);
      });
    });
  }

  onEdit(course: Courses) {
    this.courseService.selectedCourse = Object.assign({}, course);
    this.route.navigate(['/'])
  }

  onRemove(key: string) {
    if(confirm('Delete this course permanently?') == true) {
      this.courseService.deleteCourse(key);
      this.toastr.warning('You have deleted the course.', 'Course Deleted!');
    }
    
  }

}
