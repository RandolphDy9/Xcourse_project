import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Courses } from '../courses';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  closeResult: string;
  showDetails: Boolean[] = [false, false, false, false, false, false];

  modalTitle: String;
  modalDescription: String;

  course: Object;

  constructor(private modalService: NgbModal,
              private http: HttpClient) {}
  
  ngOnInit() {
    this.http.put("https://xcourse-project.firebaseio.com/courses.json", Courses)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

    this.http.get("https://xcourse-project.firebaseio.com/courses.json")
    .subscribe(
      (data) => this.course = data
    );
  }

  toggleDetails(val) {
    this.showDetails[val] = !this.showDetails[val];
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  getCourse(val: number) {
    this.modalTitle = this.course[val].courseTitle;
    this.modalDescription = this.course[val].courseDescription;
  }

}
