import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SurveyGeneratorComponent } from './survey-generator/survey-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    NewSurveyComponent,
    SurveyGeneratorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
