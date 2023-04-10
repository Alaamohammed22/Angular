import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Icomment } from '../Shared Classes and Types/icomment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  // _url: string = ' https://jsonplaceholder.typicode.com/posts/1/comments';
  constructor(private http: HttpClient) {}
  GetComments(id:any): Observable<Icomment[]> {
    return this.http.get<Icomment[]>(`https:jsonplaceholder.typicode.com/posts/${id}/comments`).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server error');
      })
    )
  }
}

