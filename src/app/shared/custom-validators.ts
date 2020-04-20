import {FormControl} from '@angular/forms';

export class CustomValidators {

  public phoneNumberValidator(field: FormControl): { [n: string]: boolean } | null {
    const pattern1 = /^[0-9]{6}/;

    if (!pattern1.test(field.value)) {
      return {badNumberPattern: true};
    }

    return null;
  }

  passwordValidator() {
  }
}
