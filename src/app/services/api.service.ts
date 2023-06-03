import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiPath;

  constructor(private http: HttpClient) { }

  async getCall<T>(endpoint: string): Promise<T> {
    return lastValueFrom(
      this.http.get<T>(`${this.baseUrl}/${endpoint}`)
        .pipe(
          catchError(this.handleError)
        )
    );
  }

  async postCall<T>(endpoint: string, data: any): Promise<T> {
    return lastValueFrom(
      this.http.post<T>(`${this.baseUrl}/${endpoint}`, data)
        .pipe(
          catchError(this.handleError)
        )
    );
  }

  async updateCall<T>(endpoint: string, data: any): Promise<T> {
    return lastValueFrom(
      this.http.put<T>(`${this.baseUrl}/${endpoint}`, data)
        .pipe(
          catchError(this.handleError)
        )
    );
  }

  async deleteCall<T>(endpoint: string): Promise<T> {
    return lastValueFrom(
      this.http.delete<T>(`${this.baseUrl}/${endpoint}`)
        .pipe(
          catchError(this.handleError)
        )
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
