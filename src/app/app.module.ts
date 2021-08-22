import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [
    AppComponent,
    NewSurveyComponent,
    SurveyGeneratorComponent,
    SurveyViewerComponent,
    SurveyDoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
