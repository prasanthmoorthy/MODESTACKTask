import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable, of, BehaviorSubject } from 'rxjs';
import { BadRequest } from './../../common/bad-request';
import { AppError } from './../../common/app-error';
import { NotFoundError } from './../../common/not-found-error';
import { Modestack } from './../model/modestack'  
import { environment } from '../../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://jsonplaceholder.typicode.com/'; 
  objModestack: Modestack = {} as any;

  constructor(
    private httpClient: HttpClient,
  ) { }

  // region login 

  public Getlist(): Observable<Modestack[]> {  
    return this.httpClient.get<Modestack[]>(this.baseUrl +
      `posts`) 
      .pipe(
        catchError(this.handleError)
      );
  }

  public Getlistbyid(id:number): Observable<Modestack> {  
    return this.httpClient.get<Modestack>(this.baseUrl +
      `posts/${id}`) 
      .pipe(
        catchError(this.handleError)
      );
  }

  public Getview(id:number): Observable<Modestack> {  
    return this.httpClient.get<Modestack>(this.baseUrl +
      `posts/${id}`) 
      .pipe(
        catchError(this.handleError)
      );
  }

   
  public Add(obj: Modestack): Observable<any> { 
    obj.userId=1
    return this.httpClient.post<any>(this.baseUrl + `posts`, obj)
      .pipe(catchError(this.handleError));
  }

   
  public Update(obj: Modestack,id:number): Observable<any> {  
    return this.httpClient.put<any>(this.baseUrl + `posts/${id}`,obj)
      .pipe(catchError(this.handleError));
  }

  public delete(id: number): Observable<any> {  
    return this.httpClient.delete<any>(this.baseUrl + `posts/${id}`)
      .pipe(catchError(this.handleError));
  }



  // endregion


  // endregion

  private handleError(error: HttpErrorResponse) {

    if (error.status === 404)
      return throwError(new NotFoundError(error));

    if (error.status === 400)
      return throwError(new BadRequest(error));
    return throwError(new AppError(error));
  }
}
