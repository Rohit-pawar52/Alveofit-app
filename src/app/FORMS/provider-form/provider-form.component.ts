import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 
import { PatientService } from '../services/patient.service';
import * as amplitude from '@amplitude/analytics-browser';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css'],
})
export class ProviderFormComponent{
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
      options1:['', Validators.required],
      options2:['', Validators.required],
    });
  }

  trackEvent(eventName: string) {
    amplitude.track(eventName); 
  }

  submitform() {
    this.service.addProvider(this.loginform.value).subscribe((data) => {
        alert('Provider added');
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

  get id() {
    return this.loginform.get('id');
  }
  get options1(){
    return this.loginform.get('options1')
  }
  get options2(){
    return this.loginform.get('options2')
  }
}
