import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, throwError, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  url : string = 'search/users?q=foo%20in:login'

  getInfo = (data : string) => {
    return this.http.get(`${environment.apiUrl}search/users?q=${data}%20in:login`).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      }),
    );
  }
  postMovieInfo = (data: any) => {
    return this.http.post(`${environment.apiUrl}`, data ).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      }),
    );
  }
}
