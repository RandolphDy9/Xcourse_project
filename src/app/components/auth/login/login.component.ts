import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../../core/services/auth.service";
import { emailValidator } from "../validator";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private authService: AuthService,
    private fb: FormBuilder, 
    private route: Router) {

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

  toRegisterPage() {
    this.route.navigate(['registration']);
  }

}