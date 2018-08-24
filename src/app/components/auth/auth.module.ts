import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { RegistrationSuccessComponent } from "./registration/registration-success/registration-success.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "../../shared/components/navigation/navigation.component";


@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
        RegistrationSuccessComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
    ]
})
export class AuthModule {}