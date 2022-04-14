import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { User } from '../user.model';
interface AuthResponseData {
  success: boolean,
  guest_session_id: string,
  expires_at: Date
}

@Injectable({ providedIn: 'root' })
export class GuestAuthService {
  baseUrl: string;
  apiKey: string;
  private tokenExpirationTimer: any;

  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '85204a8cc33baf447559fb6d51b18313';
    //this.language = 'en-US';
    //this.region = 'US';
  }

 // Tap operator allows us to perfom some action without changing the response
  getGuestAuth() {
    return this.http.get<AuthResponseData>(
      `${this.baseUrl}authentication/guest_session/new?api_key=${this.apiKey}`
      )
      .pipe(
        tap(res => {
          this.handleAuthentication(
            res.guest_session_id,
            res.expires_at
          );
        }),
      catchError(async (e) => this.handleError(e)) // then handle the error
    );
  }

  autoAuth() {
    const userData: {
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData) {
      return undefined;
    }

    const loadedUser = new User(
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLostAuth(expirationDuration);
    }
    return loadedUser;
  }

  autoLostAuth(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.user.next(null);
      localStorage.removeItem('userData');
      if (this.tokenExpirationTimer) {
        clearTimeout(this.tokenExpirationTimer);
      }
      this.tokenExpirationTimer = null;
    }, expirationDuration);
  }


  private handleAuthentication(guest_session_id: string, expires_at: Date) {
    const expirationDate = new Date(expires_at);
    console.log(expirationDate);
    const user = new User(guest_session_id, expirationDate);
    this.user.next(user);
    //this.autoLostAuth(expires_at);
    console.log(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new Error(
      'Something bad happened; please try again later.');
  };

}

