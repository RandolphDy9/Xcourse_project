import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersServices } from '../users.service';
import { Users } from '../users';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { codeValidator, accnumberValidator, emailValidator } from '../validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UsersServices]
})
export class RegistrationComponent implements OnInit {

  users: Users[];

  form: FormGroup;

  constructor(private usersServices: UsersServices,
    private authService: AuthService,
    private route: Router,
    private fb: FormBuilder) {

    this.form = this.fb.group({
      $id: '',
      fullname: ['', Validators.required],
      birthdate: ['', Validators.required],
      email: ['', emailValidator],
      gender: ['', Validators.required],
      card: ['', Validators.required],
      accnumber: ['', accnumberValidator],
      expiration: ['', Validators.required],
      code: ['', codeValidator]
    });

  }

  ngOnInit() {
    var data = this.usersServices.getUsers();
    data.snapshotChanges().subscribe(item => {
      this.users = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$id"] = element.key;
        this.users.push(x as Users);
      });
    });
  }

  onSubmitReg() {
    console.log(this.form.value);
    const generatedPassword = this.usersServices.generatePassword();
    console.log(this.form.value + "generatedPassword: " + generatedPassword);

    // if (this.form.value.$id == null) {
      this.usersServices.displayUserToAdmin(this.form.value, generatedPassword);
    // }

    this.authService.registerUserToFirebase(this.form.value.email, generatedPassword);

  }

  // onSubmitReg(form: NgForm) {
  //   const generatedPassword = this.usersServices.generatePassword();
  //   console.log(form.value + "generatedPassword: " + generatedPassword);

  //   if (form.value.$id == null) {
  //     this.usersServices.displayUserToAdmin(form.value, generatedPassword);
  //   }

  //   this.authService.registerUserToFirebase(form.value.email, generatedPassword);
  //   this.route.navigate(['registration-success']);
  // }


}
