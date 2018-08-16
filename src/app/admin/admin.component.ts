import { Component } from "@angular/core";
import { CourseServices } from '../shared/courses.service';
import { AuthService } from "../auth/auth.service";
import { UsersServices } from "../auth/users.service";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    providers: [UsersServices]
})
export class AdminComponent {

    constructor(private courseService: CourseServices) {}

}