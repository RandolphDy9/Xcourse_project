import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TutorComponent } from './tutor/tutor.component';
import { InfoComponent } from './home/info/info.component';
import { CourseComponent } from './course/course.component';
import { ScheduleComponent } from './home/schedule/schedule.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { CourseServices } from './shared/courses.service';
import { AdminComponent } from './admin/admin.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { AdminDetailsComponent } from './admin/admin-details/admin-details.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminCourseDisplayComponent } from './admin/admin-course-display/admin-course-display.component';
import * as firebase from "firebase";
import { CourseInfoComponent } from './course/course-info/course-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminQuestionsComponent } from './admin/admin-questions/admin-questions.component';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    TutorComponent,
    InfoComponent,
    CourseComponent,
    ScheduleComponent,
    RegistrationComponent,
    HomeComponent,
    NavigationComponent,
    LoginComponent,
    AdminComponent,
    AdminCoursesComponent,
    AdminDetailsComponent,
    AdminUsersComponent,
    AdminCourseDisplayComponent,
    CourseInfoComponent,
    PageNotFoundComponent,
    AdminQuestionsComponent
  ],
  imports: [ 
    MbscModule, 
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthService, CourseServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
