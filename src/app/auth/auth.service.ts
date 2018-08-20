import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

    signed: boolean = false;
    token: string;
    AdminFlag: boolean = false;

    constructor(private route: Router, private toastr: ToastrService) { }

    registerUserToFirebase(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                (error) => console.log(error)
            );
        this.toastr.success('You have filled out the necessary information.', 'Registration done!');
        this.route.navigate(['registration-success']);
    }

    signinUserToFirebase(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    if (email == 'admin@exist.com' && password == '123456') {
                        this.toastr.success('Welcome to X-course, Admin.', 'Login Successful!');
                        this.route.navigate(['admin']);
                        this.AdminFlag = true;
                    } else {
                        this.toastr.success('Welcome to X-course.', 'Login Successful!');
                        this.route.navigate(['']);
                        this.AdminFlag = false;
                    }
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        )
                }
            )
            .catch(
                error => {
                    this.toastr.warning('Sorry but you cannot login', 'OOPS!!');
                    this.route.navigate(['']);
                    this.AdminFlag = false;
                }
            );
    }


    logoutUser() {
        this.AdminFlag = false;
        firebase.auth().signOut();
        this.token = null;
        this.route.navigate(['']);
        this.toastr.success('You have logged out.', 'Logout Successful!');
    }

    isAuthenticated() {
        return this.token != null;
    }

}