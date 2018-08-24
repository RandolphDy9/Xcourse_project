import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseComponent } from "./course.component";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from "./filter.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        CourseComponent,
        CourseInfoComponent,
        FilterPipe
    ]
})
export class CourseModule {}