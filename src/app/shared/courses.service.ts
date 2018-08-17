import { Injectable, OnInit } from "@angular/core";
import { Courses } from "./courses";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { Questions } from "./questions";

@Injectable({
    providedIn: 'root'
})
export class CourseServices implements OnInit {

    coursesList: AngularFireList<any>;
    selectedCourse: Courses = new Courses();

    quesList: AngularFireList<any>;
    selectedQues: Questions = new Questions();

    message: string;

    private headline = new BehaviorSubject<string>('Our courses!');
    cast = this.headline.asObservable();

    private startDate = new BehaviorSubject<string>('July 1, 2018');
    castStartDate = this.startDate.asObservable();

    private endDate = new BehaviorSubject<string>('July 30, 2018');
    castEndDate = this.endDate.asObservable();

    constructor(private firebase: AngularFireDatabase,
                private toastr: ToastrService) { }

    ngOnInit() {
    }

    insertData(message: string) {
        this.headline.next(message);
        // console.log("At insertData: " + message);
    }

    insertEndDate(date: string) {
        this.endDate.next(date);
    }

    insertStartDate(date: string) {
        this.startDate.next(date);
    }

    getData() {
        this.coursesList = this.firebase.list('courses');
        return this.coursesList;
    }

    insertCourse(course: Courses) {
        this.coursesList.push({
            image: course.image,
            title: course.title,
            description: course.description,
            creator: course.creator,
            price: course.price
        });
        this.toastr.success('You have added a new course.', 'Successfully Added!');
    }

    updateCourse(course: Courses) {
        this.coursesList.update(course.$key, {
            image: course.image,
            title: course.title,
            description: course.description,
            creator: course.creator,
            price: course.price
        });
        this.toastr.success('You have updated an existing course.', 'Successfully Updated!');
    }

    deleteCourse($key: string) {
        this.coursesList.remove($key);
        // this.toastr.warning('You have deleted a course.', 'Successfully Deleted!');
    }

    getQuestions() {
        this.quesList = this.firebase.list('questions');
        return this.quesList;
    }

    askedQuestion(ques: Questions) {
        this.quesList.push({
            subject: ques.subject,
            body: ques.body
        });
    }

}