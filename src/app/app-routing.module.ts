import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { AdminComponent } from './components/admin/admin.component';
import { CourseComponent } from './components/course/course.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { CourseInfoComponent } from './components/course/course-info/course-info.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { PageNotFoundComponent } from './shared/components/error-pages/page-not-found/page-not-found.component';
import { RegistrationSuccessComponent } from './components/auth/registration/registration-success/registration-success.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'course-info', component: CourseInfoComponent, canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration-success', component: RegistrationSuccessComponent },
  { path: 'tutors', component: TutorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'my-courses', component: MyCoursesComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
