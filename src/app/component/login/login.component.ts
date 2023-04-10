import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/Shared Classes and Types/Login';
import { LoginserviseService } from 'src/app/services/loginservise.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginModel = new Login('', '', '');

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
      ],
    ],
  });
  constructor(
    private loginService: LoginserviseService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  submitData() {
    console.log(this.loginForm.value);
  }
}
