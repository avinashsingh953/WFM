import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    public static pattern(reg: RegExp): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            var value = control.value == undefined ? '' : <string>control.value;
            return value.match(reg) ? null : { 'pattern': { value } };
        }
    }
}
