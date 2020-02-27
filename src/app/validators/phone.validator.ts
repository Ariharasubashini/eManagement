import {AbstractControl} from '@angular/forms';

export class PhoneValidator {

  public static validate(c:AbstractControl) {
    let Phone_REGEXP = /^[0-9]*$/;

    return Phone_REGEXP.test(c.value) ? null : {
      validatePhone: {
        valid: false
      }
    };
  }
}
