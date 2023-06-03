import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { SignupData } from '../signup/signup.component';
import { FormsModule } from '@angular/forms';

export interface LoginData {
  email: string;
  password: string;
  applicationId: string;
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginData: LoginData;


  constructor(
    private _authService: AuthService,
  ) {
    this.loginData = {
      email: '',
      password: '',
      applicationId: '894436ac-888e-41ae-a832-d1f4d11cc948',
    };
  }

  login() {
    this._authService.login(this.loginData);
  }
}
