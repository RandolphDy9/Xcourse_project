import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TutorComponent implements OnInit {

  tutorObj: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://xcourse-project.firebaseio.com/tutors.json")
    .subscribe(
      data => this.tutorObj = data
    );
  }

  closeResult: string;
  name: string;

}
