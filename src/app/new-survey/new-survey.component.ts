import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BackendResp, SurveyService } from '../survey.service';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.scss']
})
export class NewSurveyComponent implements OnInit {
  allSurveys!: any;
  hasSurveys: boolean;
  newSurveyName!: string;
  constructor(public surveyService: SurveyService, public router: Router) {
    this.hasSurveys = false;
    this.newSurveyName = "";
  }

  ngOnInit(): void {
    this.surveyService.fetchAllSurveys()
      .subscribe(({ data }: BackendResp) => {
        this.hasSurveys = true;
        this.allSurveys = data;
        console.log(data);
      },
        (err) => {
          console.log(err);
        })
  }
  handleEnter(e: any) {
    if (e.keyCode !== 13)
      return;
    this.createSurvey();
  }
  createSurvey() {
    console.log(this.newSurveyName);
    if (this.newSurveyName.length < 1) {
      alert("Please input a survey name");
      return;
    }
    this.surveyService.createNewSurvey(this.newSurveyName as string)
      .subscribe((data: BackendResp) => {
        console.log(data);
        this.ngOnInit();
      },
        (err) => {
          if (err.status == 400)
            alert("Survey Name already taken.\nPlease choose another")
          console.log(err);
        })
  }
  goToGenerator(index: number) {
    this.router.navigate(['/generator'], { queryParams: { sid: this.allSurveys[index]._id } });
  }
}
