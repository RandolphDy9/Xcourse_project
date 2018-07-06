import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  imagePath: string = '../../assets/img/boy.png';

  radioVal(val) {
    if (val == 'male') {
      this.imagePath = '../../assets/img/boy.png';
    } else if (val == 'female') {
      this.imagePath = '../../assets/img/girl.png';
    }
  }

}
