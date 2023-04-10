import { Injectable } from '@angular/core';
import { Ipost } from '../Shared Classes and Types/ipost';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  _url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  GetUser(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this._url).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server error');
      })
    );
  }
}
