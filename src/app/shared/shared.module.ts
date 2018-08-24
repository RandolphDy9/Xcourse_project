import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { PageNotFoundComponent } from "./components/error-pages/page-not-found/page-not-found.component";

@NgModule({
    declarations: [
        PageNotFoundComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [ CommonModule ]
})
export class SharedModule {}