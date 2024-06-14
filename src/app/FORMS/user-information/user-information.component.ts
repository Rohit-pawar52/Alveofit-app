import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { UserDataService } from '../services/userdata.service';
@Component({
  selector: 'user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
})
export class UserInformationComponent implements OnInit {
  loginform: FormGroup;
  users: any;
  integerRegex = /^\d+$/;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  constructor(public fb: FormBuilder, private service: UserDataService) {
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
    });
  }

  ngOnInit(): void {
    this.getuser();
  }

  submitform() {
    var type = this.loginform.value.id==null?'Add':'Update';
    this.service.adduser(this.loginform.value, type).subscribe(data => {
      if (type == 'Add') {
        alert("added");
      } else {
        alert("updated");
      }
      this.loginform.reset();
      this.getuser();
      console.log(data);
    });
  }
  getuser() {
    this.service.getuser().subscribe(data => {
      console.log('users', data);
      this.users = data;
    });
  }
  
  
  edituser(ID: any) {
    this.loginform.addControl('id',new UntypedFormControl(''));
    this.service.edituser(ID).subscribe(data => {
      console.log("user detail", data);
      this.loginform.patchValue({
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        number: data.number,
        email: data.email
      });
    });
  }

  deleteuser(ID: any) {
    this.service.deleteuser(ID).subscribe(data => {
      alert('deleted');
      this.getuser();
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
}
