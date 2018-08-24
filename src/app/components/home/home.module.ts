import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InfoComponent } from "./info/info.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        InfoComponent,
        ScheduleComponent,
        HomeComponent
    ]
})
export class HomeModule {}