import { Component, OnInit } from '@angular/core';
import { CourseServices } from '../../shared/courses.service';
import { Questions } from '../../shared/questions';

@Component({
  selector: 'app-admin-questions',
  templateUrl: './admin-questions.component.html',
  styleUrls: ['./admin-questions.component.css']
})
export class AdminQuestionsComponent implements OnInit {

  questions: Questions[];

  constructor(private courseService: CourseServices) { }

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

}
