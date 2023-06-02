import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email: string;
  name: string;
  password: string;
  applicationId: string;
  initialUser: boolean;

  constructor(
    private _authService: AuthService,
  ) {
    this.email = '';
    this.name = '';
    this.password = '';
    this.applicationId = 'e5878d85-b791-4375-822c-cab45d4760e4';
    this.initialUser = false;
  }

  signup() {
    this._authService.signup(this.email, this.name, this.password, this.applicationId, this.initialUser);
  }
}
