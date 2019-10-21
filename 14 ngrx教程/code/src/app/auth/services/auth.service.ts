import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Credentials, User } from '../../auth/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login({ username, password }: Credentials): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test' && username !== 'ngrx') {
      return throwError('用户名或密码无效');
    }
    /*of 按顺序发出任意数量的值*/
    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
