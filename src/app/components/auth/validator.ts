import { AbstractControl } from "@angular/forms";
import { isError } from "util";


export function codeValidator(control: AbstractControl) {

    if (control && (control !== null || control !== undefined)) {
        const regex = new RegExp('^[0-9]{4}$');
        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }
    }
    return null;

}

export function accnumberValidator(control: AbstractControl) {

    if (control && (control !== null || control !== undefined)) {
        const regex = new RegExp('^[0-9]{12}$');
        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }
    }
    return null;

}

export function emailValidator(control: AbstractControl) {

    if (control && (control !== null || control !== undefined)) {
        const regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }
    }
    return null;

}
