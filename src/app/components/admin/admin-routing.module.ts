import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminCourseDisplayComponent } from "./admin-course-display/admin-course-display.component";
import { AdminCoursesComponent } from "./admin-courses/admin-courses.component";
import { AdminDetailsComponent } from "./admin-details/admin-details.component";
import { AdminQuestionsComponent } from "./admin-questions/admin-questions.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";

const adminRoutes: Routes = [
    { path: 'admin', component: AdminComponent, children: [
        { path: 'admin-course-display', component: AdminCourseDisplayComponent },
        { path: 'admin-courses', component: AdminCoursesComponent },
        { path: 'admin-details', component: AdminDetailsComponent },
        { path: 'admin-questions', component: AdminQuestionsComponent },
        { path: 'admin-users', component: AdminUsersComponent },
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}