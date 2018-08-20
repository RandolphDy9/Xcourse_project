import { Component } from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { emailValidator } from "../validator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private authService: AuthService,
    private fb: FormBuilder) {

    this.form = this.fb.group({
      email: ['', emailValidator],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });

  }

  onSignin() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.authService.signinUserToFirebase(email, password);
  }


  // radioVal(val) {
  //   if (val == 'male') {
  //     this.imagePath = '../../assets/img/boy.png';
  //   } else if (val == 'female') {
  //     this.imagePath = '../../assets/img/girl.png';
  //   }
  // }  

  // onSignin(form: NgForm) {
  //   const email = form.value.email;
  //   const password = form.value.password;
  //   this.authService.signinUserToFirebase(email, password);
  // }

}