import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { TutorComponent } from './tutor/tutor.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'tutors', component: TutorComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
