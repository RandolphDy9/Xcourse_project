import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { TutorComponent } from './tutor/tutor.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth/auth.service';
import { CourseInfoComponent } from './course/course-info/course-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { RegistrationSuccessComponent } from './auth/registration/registration-success/registration-success.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'tutors', component: TutorComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration-success', component: RegistrationSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'course-info', component: CourseInfoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
