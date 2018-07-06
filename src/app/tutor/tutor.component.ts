import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TutorComponent {

  closeResult: string;
  name: string;
  tutors: any[] = [
    { imagePath: "../../assets/img/businessman.png", tutorName: "Billy Jay Gates" ,
      tutorDescription: "is an American business magnate, investor, author, philanthropist, humanitarian, and principal founder of Microsoft Corporation" },
    { imagePath: "../../assets/img/cool.png", tutorName: "Mark Zucker-Burger" , 
      tutorDescription: "is an American business magnate, investor, author, philanthropist, humanitarian, and principal founder of Microsoft Corporation" },
    { imagePath: "../../assets/img/nerd.png", tutorName: "Rex Karlo Cabana" , 
      tutorDescription: "is an American business magnate, investor, author, philanthropist, humanitarian, and principal founder of Microsoft Corporation" },
    { imagePath: "../../assets/img/professor.png", tutorName: "Jerry Jones" , 
      tutorDescription: "is an American business magnate, investor, author, philanthropist, humanitarian, and principal founder of Microsoft Corporation" },
  ];

  constructor(private modalService: NgbModal) { }

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
