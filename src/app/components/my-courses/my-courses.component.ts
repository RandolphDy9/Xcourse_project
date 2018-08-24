import { Component, OnInit } from '@angular/core';
import { SelectedCourseService } from '../../core/services/selected-course.service';
import { UsersServices } from '../../core/services/users.service';
import { Users } from '../../shared/models/users.model';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  // form: FormGroup;

  user: Users[];
  title: string;
  creator: string;
  description: string;

  constructor(private selectedCourseService: SelectedCourseService,
    private usersService: UsersServices,
    private route: Router,
    private fb: FormBuilder,
    private authService: AuthService) {

      // this.form = this.fb.group({
      //   password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      //   newPassword: ['']
      // });

    }
    

  ngOnInit() {
    this.selectedCourseService.castTitle.subscribe(title => this.title = title);
    this.selectedCourseService.castCreator.subscribe(creator => this.creator = creator);
    this.selectedCourseService.castDescription.subscribe(description => this.description = description);

    var data = this.usersService.getUsers();
    data.snapshotChanges().subscribe(item => {
      this.user = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.user.push(x as Users);
      });
    });

  }

  openCourse() {
    this.route.navigate(['course-info']);
  }

  // onChangePass() {
  //   this.authService.changePassword(this.form.value.newPassword);
  // }

}
