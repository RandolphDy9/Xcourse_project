import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ToastrService } from "ngx-toastr";
import { Users } from "./users";

@Injectable({
    providedIn: 'root'
})
export class UsersServices {

    usersList: AngularFireList<any>;
    selectedUser: Users = new Users();

    constructor(private firebase: AngularFireDatabase,
                private toastr: ToastrService) { }

    getUsers() {
        this.usersList = this.firebase.list('users');
        return this.usersList;
    }

    displayUserToAdmin(users: Users, password: string) {
        console.log('Insert user values: ' + users);
        this.usersList.push({
            fullname: users.fullname,
            birthdate: users.birthdate,
            email: users.email,
            accnum: users.accnumber,
            exp: users.expiration,
            code: users.code,
            password: password
        });
        console.log('Insert user values: ' + users);
    }

    removeUserFromAdmin(id: string) {
        this.usersList.remove(id);
    }

    generatePassword() {
        var randomString = Math.random().toString(36).substring(2,8);
        console.log(randomString);
        return randomString;
    }

}