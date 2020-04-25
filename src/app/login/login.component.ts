import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor() {}
  getEmailErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      return 'You must enter a email';
    }

    return this.loginForm.get('email').hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getPasswordErrorMessage() {
    if (this.loginForm.get('password').hasError('required')) {
      return 'You must enter a password';
    }

    return this.loginForm.get('password').hasError('password')
      ? 'Not a valid password'
      : '';
  }
  onSubmit(): void {
    console.log(this.loginForm);
  }

  ngOnInit(): void {}
}
