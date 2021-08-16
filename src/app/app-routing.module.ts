import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSurveyComponent } from './new-survey/new-survey.component';

const routes: Routes = [
  { path: "", component: NewSurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
