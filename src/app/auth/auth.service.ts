import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class AuthService {

    signed: boolean = false;
    token: string;
    AdminFlag: boolean = false;

    constructor(private route: Router, private toastr: ToastrService) {}

    registerUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            (error) => console.log(error)
        );
        this.toastr.success('You have filled out the necessary information.', 'Registration done!');
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.token = token
                )
            }
        );

        this.toastr.success('Welcome to X-course.', 'Login Successful!');
        if (email == 'admin@exist.com' && password == '123456') {
            this.route.navigate(['admin']);
            this.AdminFlag = true;
        } else {
            this.route.navigate(['']);
            this.AdminFlag = false;
        }
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

    // isAdmin(email?: string, password?: string) {
    //     if (email == 'admin@exist.com' && password == '123456') {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

}