import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  allSurveys!: any;
  constructor(private http: HttpClient) { }

  fetchAllSurveys() {
    return this.http.get(`${BASE_URL}//survey/fetch/all`);
  }
}
