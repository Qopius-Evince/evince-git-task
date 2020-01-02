import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs/internal/observable/throwError';

/**
 * This service is created to make the API Base URLS commman 
 * so that in future may add other API URl as testng and production API URL
 */
@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  //Base URL 
  protected apiUrl: string = "https://api.github.com";
  constructor(protected http: HttpClient) {
  }

protected handleError = (error: HttpErrorResponse) => {
  if(error==undefined||error.error==undefined)
      return throwError('Cannot get the response')
    return throwError(error.error.message);
  };
}
