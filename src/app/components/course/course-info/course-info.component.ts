import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SelectedCourseService } from '../../../core/services/selected-course.service';
import { Questions } from '../../../shared/models';
import { CourseServices, UsersServices, AuthService } from '../../../core/services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  form: FormGroup;
  questions: Questions[];
  title: string;
  creator: string;
  description: string;

  name: string;

  constructor(private selectedCourseService: SelectedCourseService,
    private courseService: CourseServices,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private location: Location,
    private authService: AuthService) {

  }

  ngOnInit() {
    this.selectedCourseService.castTitle.subscribe(title => this.title = title);
    this.selectedCourseService.castCreator.subscribe(creator => this.creator = creator);
    this.selectedCourseService.castDescription.subscribe(description => this.description = description);

    this.authService.castName.subscribe(name => this.name = name);

    console.log("Value of this.name: " + this.name);
    this.form = this.fb.group({
      username: [this.name],
      courseEnrolled: [this.title],
      subject: ['', Validators.required],
      body: ['', Validators.required]
    });

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

  onSubmit() {
    console.log("Value of courseEnrolled: " + this.form.value.courseEnrolled);

    this.courseService.askedQuestion(this.form.value);
    this.toastr.success("Your question has been sent.", "Successfully sent!");
  }

  toCoursesPage() {
    this.location.back();
  }

}
