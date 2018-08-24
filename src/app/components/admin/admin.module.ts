import { NgModule } from "@angular/core";
import { AdminCourseDisplayComponent } from "./admin-course-display/admin-course-display.component";
import { AdminCoursesComponent } from "./admin-courses/admin-courses.component";
import { AdminDetailsComponent } from "./admin-details/admin-details.component";
import { AdminQuestionsComponent } from "./admin-questions/admin-questions.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { FormsModule } from "@angular/forms";
import { MbscModule } from '@mobiscroll/angular';


@NgModule({
    declarations: [
        AdminCourseDisplayComponent,
        AdminCoursesComponent,
        AdminDetailsComponent,
        AdminQuestionsComponent,
        AdminUsersComponent,
        AdminComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MbscModule
    ],
    exports: [
    ]
})
export class AdminModule {}