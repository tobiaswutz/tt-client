import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SignupData } from '../components/signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _apiService: ApiService,
  ) { }


  public async signup(data: SignupData) {
    const response = await this._apiService.postCall<any>('api/users', data);
    console.log('Response:', response);
  }
}
