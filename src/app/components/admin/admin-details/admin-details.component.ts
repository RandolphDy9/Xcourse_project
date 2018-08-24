import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Courses } from '../../../shared/models';
import { CourseServices } from '../../../core/services';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  courses: Courses[];
  editFlag: boolean = false;
  id: string;

  constructor(private courseService: CourseServices,
              private toastr: ToastrService,
              private route: Router) { }

  ngOnInit() {
    this.editFlag = false;
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
    this.editFlag = true;
  }

  onRemove(key: string) {
    // if(confirm('Delete this course permanently?') == true) {
      this.courseService.deleteCourse(key);
      this.toastr.warning('You have deleted the course.', 'Course Deleted!');
    // }
    
  }

}
