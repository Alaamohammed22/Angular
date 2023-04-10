import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Iusers } from '../Shared Classes and Types/iusers';

@Injectable({
  providedIn: 'root',
})
export class UserService {
   _url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  GetUser(): Observable<Iusers[]> {
    return this.http.get<Iusers[]>(this._url).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server error');
      })
    );
  }
}
