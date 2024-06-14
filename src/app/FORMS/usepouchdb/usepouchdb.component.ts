import { Component, OnInit } from '@angular/core';
import { PouchDBService } from '../services/pouchdb.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-usepouchdb',
  templateUrl: './usepouchdb.component.html',
  styleUrls: ['./usepouchdb.component.css'],
})
export class UsepouchdbComponent implements OnInit {
  users: any[] = [];
  loginform: FormGroup;
  isEditMode = false;
  selectedUserId: any;
  integerRegex = /^\d+$/;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  constructor(private pouchDBService: PouchDBService, private fb: FormBuilder) {
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
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.pouchDBService
      .getAllUsers()
      .then((result: any) => {
        this.users = result.rows.map((row: { doc: any }) => row.doc);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }

  async submitForm(): Promise<void> {
    if (this.loginform.valid) {
      const user = this.loginform.value;

      if (this.isEditMode) {
        if (!this.selectedUserId) {
          console.error('Missing selectedUserId for updateUser');
          return;
        }

        user._id = this.selectedUserId;

        await this.pouchDBService.updateUser(user);
      } else {
        user._id = uuidv4();
        await this.pouchDBService.addUser(user);
      }

      this.fetchUsers();
      this.resetForm();
    }
  }

  editUser(id: string): void {
    this.selectedUserId = id;
    this.isEditMode = true;

    this.pouchDBService
      .getUser(id)
      .then((user) => {
        this.selectedUserId = user._id;
        this.loginform.patchValue(user);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }

  async deleteUser(id: string): Promise<void> {
    if (confirm('Are you sure you want to delete this user?')) {
      await this.pouchDBService.deleteUser(id);
      this.fetchUsers();
    }
  }

  resetForm(): void {
    this.loginform.reset();
    this.isEditMode = false;
    this.selectedUserId = null;
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
}
