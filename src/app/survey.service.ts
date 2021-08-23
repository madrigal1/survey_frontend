import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BASE_URL } from './baseUrl';
import { throwError } from 'rxjs';
import _ from 'lodash'


export interface BackendResp {
  statusCode: string;
  message: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  currSurvey: any;
  constructor(private http: HttpClient) {
    this.currSurvey = null;
  }

  getSurveyFromId(survey_id: string) {
    return this.http.get<BackendResp>(`${BASE_URL}/survey/fetch/byId/${survey_id}`);
  }


  fetchAllSurveys() {
    return this.http.get<BackendResp>(`${BASE_URL}/survey/fetch/all`);
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

  publishSurvey(questions: any) {
    questions = questions.map((question: any) => (
      _.pick(question, ["survey_id", "type", "main_data", "additional_data"])
    ))
    const body = JSON.stringify({ questions });
    const headers = { "content-type": "application/json" };
    return this.http.post<BackendResp>(`${BASE_URL}/question/new/batch`, body, {
      headers,
      responseType: 'json',
    });
  }

  recordAnswers(answers: any) {
    const body = JSON.stringify({ answers });
    const headers = { "content-type": "application/json" };
    return this.http.post<BackendResp>(`${BASE_URL}/answer/new/batch`, body, {
      headers,
      responseType: 'json',
    });
  }

  getQuestionsForSurvey(survey_id: any) {
    const headers = { "content-type": "application/json" };
    return this.http.get<BackendResp>(`${BASE_URL}/question/fetch/all/bySurvey/${survey_id}`, {
      headers,
      responseType: 'json',
    });
  }

  setCurrSurvey(currSurvey: any) {
    this.currSurvey = currSurvey;
  }

  getCurrSurvey() {
    return this.currSurvey;
  }

  getAnswersForSurvey(survey_id: any) {
    const headers = { "content-type": "application/json" };
    return this.http.get<BackendResp>(`${BASE_URL}/answer/fetch/all/bySurvey/${survey_id}`, {
      headers,
      responseType: 'json',
    });
  }
}
