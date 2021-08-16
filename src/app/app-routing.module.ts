import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { SurveyGeneratorComponent } from './survey-generator/survey-generator.component';

const routes: Routes = [
  { path: "", component: NewSurveyComponent },
  { path: "generator", component: SurveyGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
