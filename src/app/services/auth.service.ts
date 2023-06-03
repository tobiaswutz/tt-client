import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SignupData } from '../components/signup/signup.component';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

export interface User {
  applicationId: string;
  email: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn: boolean = false;
  public user: User | null = null;

  constructor(
    private _apiService: ApiService,
    private _router: Router
  ) { }

  public init() {
    this.isLoggedIn = this.isAuthenticated();
    if (this.isLoggedIn) {
      this.user = this.getUser();
    }
  }

  public getUser(): User | null {
    const token = localStorage.getItem('tt-token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        return {
          applicationId: decodedToken.applicationId,
          email: decodedToken.email,
          id: decodedToken.id,
        };
      } catch (error) {
        console.error('Fehler beim Dekodieren des Tokens:', error);
      }
    }
    return null;
  }

  public async signup(data: SignupData) {
    const response = await this._apiService.postCall<any>('api/users', data);
    console.log('Response:', response);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('tt-token');

    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const currentTime: any = Date.now() / 1000; // aktuelle Zeit in Sekunden

        // Überprüfen Sie das Ablaufdatum des Tokens
        if (decodedToken.exp && decodedToken.exp > currentTime) {
          return true; // Gültiges Token
        }
      } catch (error) {
        console.error('Fehler beim Dekodieren des Tokens:', error);
      }
    }

    return false; // Ungültiges oder fehlendes Token
  }

  public async login(data: any) {
    const response = await this._apiService.postCall<any>('api/users/login', data);
    if (response.token) {
      localStorage.setItem('tt-token', response.token);
      this.user = jwtDecode(response.token);
      this._router.navigate(['/host']);
    }
  }

  public logout() {
    localStorage.removeItem('tt-token');
    this._router.navigate(['/login']);
  }
}
