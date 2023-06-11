import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { SignupData } from '../signup/signup.component';
import { FormsModule } from '@angular/forms';

export interface LoginData {
  username: string;
  password: string;
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
      username: '',
      password: '',
    };
  }

  login() {
    this._authService.login(this.loginData);
  }
}
