import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BASE_URL } from './baseUrl';
import { throwError } from 'rxjs';


export interface BackendResp {
  statusCode: string;
  message: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  fetchAllSurveys() {
    return this.http.get<BackendResp>(`${BASE_URL}//survey/fetch/all`);
    //.pipe(catchError(this.handleError));
  }
  createNewSurvey(name: string) {
    const body = JSON.stringify({ name });
    const headers = { "content-type": "application/json" };
    return this.http.post<BackendResp>(`${BASE_URL}/survey/new`, body, {
      headers,
      responseType: 'json',
    });
  }
}
