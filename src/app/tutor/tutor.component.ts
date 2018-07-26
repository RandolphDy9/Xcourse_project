import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Tutors } from '../tutors';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TutorComponent implements OnInit {

  tutorObj: Object;

  constructor(private modalService: NgbModal,
              private http: HttpClient) { }

  ngOnInit() {
    // this.http.put("https://xcourse-project.firebaseio.com/tutors.json", Tutors)
    // .subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // );

    this.http.get("https://xcourse-project.firebaseio.com/tutors.json")
    .subscribe(
      data => this.tutorObj = data
    );
  }

  closeResult: string;
  name: string;

  getVal(btnVal) {

    if (btnVal == 'btn1') {
      this.name = 'Billy Jay Gates';
    } else if (btnVal == 'btn2') {
      this.name = 'Mark Zucker-Burger';
    } else if (btnVal == 'btn3') {
      this.name = 'Rex Karlo Cabana';
    } else if (btnVal == 'btn4') {
      this.name = 'Jerry Jones';
    }

  }

  openWindowCustomClass(content) {
    console.log();
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
