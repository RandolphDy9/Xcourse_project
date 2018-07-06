import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TutorComponent } from './tutor/tutor.component';
import { InfoComponent } from './info/info.component';
import { CourseComponent } from './course/course.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TutorComponent,
    InfoComponent,
    CourseComponent,
    ScheduleComponent,
    FooterComponent,
    RegistrationComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
