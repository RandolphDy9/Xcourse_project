import { Injectable, OnInit } from "@angular/core";
import { Courses } from "../../shared/models/courses.model";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject } from "rxjs";
import { Questions } from "../../shared/models/questions.model";
import { UsersServices } from "./users.service";

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

    private startDate = new BehaviorSubject<string>('August 1, 2018');
    castStartDate = this.startDate.asObservable();

    private endDate = new BehaviorSubject<string>('August 30, 2018');
    castEndDate = this.endDate.asObservable();

    constructor(private firebase: AngularFireDatabase,
        private toastr: ToastrService,
        private userService: UsersServices) { }

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
            username: ques.username,
            courseEnrolled: ques.courseEnrolled,
            subject: ques.subject,
            body: ques.body
        });
    }



}