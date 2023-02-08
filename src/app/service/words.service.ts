import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Words } from '../interface/words';

@Injectable({ providedIn: 'root' })
export class WordsService {
  private readonly apiUrl = 'any';
  
  constructor(private http: HttpClient) { }

  words$ = (sentence: string) => <Observable<Words>>
  this.http.get<Words>('${this.apiUrl}/search/${sentence}')
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  private handleError(error: HttpErrorResponse): Observable<never>{
    console.log(error);
    return throwError('error: ${error.status}');
  }
}
