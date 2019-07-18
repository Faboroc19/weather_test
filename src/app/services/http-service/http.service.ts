import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConstants } from '../../util/api.constants';

@Injectable({
  providedIn: 'root'
})

export class HttpService  {
  constructor(private httpClient: HttpClient) {}

  requestGET<T>(endPoint: string) {
    return this.httpClient.get<T>(endPoint, this.getHttpOptionArgs())
    .pipe(
      tap(_ => {}),
      catchError(this.handleErrorHttp)
    );
  }

  private formatUrl(endPoint: string) {
      return encodeURI(ApiConstants.URL_SERVICES + endPoint);
  }

  private getHttpOptionArgs() {

    let httpOptions;
    let headers;

    headers = new HttpHeaders()
        .set('Content-Type',  'application/json')
        .set('Access-Control-Allow-Origin', 'localhost:4200')
        .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
        .set('Access-Control-Allow-Headers', 'x-requested-with')
        .set('Access-Control-Allow-Credentials', 'true');
    httpOptions = { headers };

    return httpOptions;
  }

  private handleErrorHttp(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status} Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
