import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _apiService: ApiService,
  ) { }


  public async signup(email: string, name: string, password: string, applicationId: string, initialUser: boolean) {
    const data = {
      email: email,
      name: name,
      password: password,
      applicationId: applicationId,
      initialUser: initialUser
    };

    const response = await this._apiService.postCall<any>('api/users', data);
    console.log('Response:', response);
  }
}
