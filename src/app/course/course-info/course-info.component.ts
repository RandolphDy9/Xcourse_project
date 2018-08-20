import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseServices } from '../../shared/courses.service';
import { Questions } from '../../shared/questions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  questions: Questions[];

  constructor(private courseService: CourseServices, private toastr: ToastrService) { }

  ngOnInit() {
    var data = this.courseService.getQuestions();
    data.snapshotChanges().subscribe(item => {
      this.questions = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.questions.push(x as Questions);
      });
    });
  }

  onSubmit(form: NgForm) {
    const title = form.value.title;
    const body = form.value.body;
    this.courseService.askedQuestion(form.value);
    this.toastr.success("Your question has been sent.", "Successfully sent!");
  }

}
