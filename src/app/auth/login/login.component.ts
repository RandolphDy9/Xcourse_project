import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  imagePath: string = '../../assets/img/boy.png';

  radioVal(val) {
    if (val == 'male') {
      this.imagePath = '../../assets/img/boy.png';
    } else if (val == 'female') {
      this.imagePath = '../../assets/img/girl.png';
    }
  }  

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

}