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
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
