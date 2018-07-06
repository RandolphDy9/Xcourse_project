import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  closeResult: string;
  showDetails: Boolean[] = [false, false, false, false, false, false];
  course: any[] = [
    { imagePath: "../../assets/img/ai.png" , courseTitle: "Ai" ,
      courseDescription: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { imagePath: "../../assets/img/css.png" , courseTitle: "CSS" , 
    courseDescription: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { imagePath: "../../assets/img/doc.png" , courseTitle: "Doc" , 
    courseDescription: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { imagePath: "../../assets/img/html.png" , courseTitle: "HTML" , 
    courseDescription: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { imagePath: "../../assets/img/javascript.png" , courseTitle: "JS" , 
    courseDescription: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { imagePath: "../../assets/img/json-file.png" , courseTitle: "JSON" , 
    courseDescription: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." }
  ];

  modalTitle: String;
  modalDescription: String;

  constructor(private modalService: NgbModal) {}

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

  ngOnInit() {
  }

}
