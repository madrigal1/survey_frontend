import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-analytics',
  templateUrl: './survey-analytics.component.html',
  styleUrls: ['./survey-analytics.component.scss']
})
export class SurveyAnalyticsComponent implements OnInit {
  survey_id!: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const sid = this.route.snapshot.paramMap.get('survey_id');
    if (!sid) {
      alert("unauthorised survey id required");
      return;
    }
    this.survey_id = sid;
    console.log(this.survey_id);
  }

}
