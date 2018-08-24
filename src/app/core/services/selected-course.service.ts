import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { UsersServices } from ".";

@Injectable({
    providedIn: 'root'
})
export class SelectedCourseService {

    private title = new BehaviorSubject<string>('');
    castTitle = this.title.asObservable();

    private creator = new BehaviorSubject<string>('');
    castCreator = this.creator.asObservable();

    private description = new BehaviorSubject<string>('');
    castDescription = this.description.asObservable();

    constructor(private route: Router, private usersService: UsersServices) {}

    passToMyCourses(title: string, creator: string, description: string) {
        this.title.next(title);
        this.creator.next(creator);
        this.description.next(description);

        console.log('From selected course service: ' + title + ' ' + creator + " " + description);

        // const course = {
        //     title: title,
        //     creator: creator,
        //     description: description
        // };
      
        // this.usersService.addEnrolledCourse(course);

        this.route.navigate(['course-info']);
    }

}