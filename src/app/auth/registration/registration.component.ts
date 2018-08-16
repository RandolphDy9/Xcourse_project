import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersServices } from '../users.service';
import { Users } from '../users';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UsersServices]
})
export class RegistrationComponent implements OnInit {

  password = '';
  users: Users[];

  constructor(private usersServices: UsersServices, 
              private authService: AuthService,
              private route: Router) {}

  ngOnInit() {
    var data = this.usersServices.getUsers();
    data.snapshotChanges().subscribe(item => {
      this.users = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.users.push(x as Users);
      });
    });
  }

  onSubmitReg(form: NgForm) {
    this.password = this.usersServices.getPass();
    console.log(form.value + "password: " + this.password);

    if (form.value.$key == null) {
      this.usersServices.insertUser(form.value, this.password);
    }
    
    this.authService.registerUser(form.value.email, this.password);
  }

  afterReg() {
    this.route.navigate(['login']);
  }

}
