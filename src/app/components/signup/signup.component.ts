import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

export interface SignupData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public signupData: SignupData;


  constructor(
    private _authService: AuthService,
  ) {
    this.signupData = {
      username: '',
      password: '',
    };
  }

  signup() {
    this._authService.signup(this.signupData);
  }
}
