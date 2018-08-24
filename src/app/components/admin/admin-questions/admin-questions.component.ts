import { Component, OnInit } from '@angular/core';
import { Questions } from '../../../shared/models';
import { CourseServices, UsersServices } from '../../../core/services';

@Component({
  selector: 'app-admin-questions',
  templateUrl: './admin-questions.component.html',
  styleUrls: ['./admin-questions.component.css']
})
export class AdminQuestionsComponent implements OnInit {

  questions: Questions[];
  // username: String;

  constructor(private courseService: CourseServices, private usersService: UsersServices) { }

  ngOnInit() {
    // this.usersService.castName.subscribe(name => this.username = name);
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

}
