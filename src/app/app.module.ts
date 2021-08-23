import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SurveyGeneratorComponent } from './survey-generator/survey-generator.component';
import { SurveyViewerComponent } from './survey-viewer/survey-viewer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SurveyDoneComponent } from './survey-done/survey-done.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { SurveyAnalyticsComponent } from './survey-analytics/survey-analytics.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NewSurveyComponent,
    SurveyGeneratorComponent,
    SurveyViewerComponent,
    SurveyDoneComponent,
    SurveyAnalyticsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
