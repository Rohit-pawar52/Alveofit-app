import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import * as amplitude from '@amplitude/analytics-browser';
@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  loginform: FormGroup;
  integerRegex = /^\d+$/;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  constructor(public fb: FormBuilder, private service: PatientService) {
    this.loginform = this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.maxLength(32),
          Validators.pattern('[a-zA-Z]+$'),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.maxLength(32),
          Validators.pattern('[a-zA-Z]+$'),
        ],
      ],
      number: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern(this.integerRegex),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(32),
          Validators.pattern(this.emailRegex),
        ],
      ],
      options: ['', Validators.required],
    });
  }

  trackEvent(eventName: string) {
    amplitude.track(eventName); 
  }

  submitform() {
    this.service.addPatient(this.loginform.value).subscribe(data => {
      alert("Patient added");
      this.trackEvent('SubmitEvent'); 
      this.loginform.reset();
      console.log(data);
    });
  }

  get firstname() {
    return this.loginform.get('firstname');
  }

  get lastname() {
    return this.loginform.get('lastname');
  }

  get number() {
    return this.loginform.get('number');
  }

  get email() {
    return this.loginform.get('email');
  }
  get options() {
    return this.loginform.get('options')
  }
}
