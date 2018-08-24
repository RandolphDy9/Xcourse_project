import * as firebase from "firebase";
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { HomeModule } from './components/home/home.module';
import { AuthModule } from './components/auth/auth.module';
import { AuthService } from './core/services/auth.service';
import { AdminModule } from './components/admin/admin.module';
import { CourseModule } from './components/course/course.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TutorComponent } from './components/tutor/tutor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { PageNotFoundComponent } from './shared/components/error-pages/page-not-found/page-not-found.component';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    TutorComponent,
    NavigationComponent,
    PageNotFoundComponent,
    MyCoursesComponent
  ],
  imports: [ 
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AdminModule,
    AuthModule,
    CourseModule,
    HomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
