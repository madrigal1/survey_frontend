import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { SurveyComponentType } from '../survey-generator/survey-generator.component';
import { SurveyService } from '../survey.service';
@Component({
  selector: 'app-survey-analytics',
  templateUrl: './survey-analytics.component.html',
  styleUrls: ['./survey-analytics.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SurveyAnalyticsComponent implements OnInit {
  survey_id!: string;
  allAnswers!: any;
  allQues!: any;
  survey!: any;
  selectionQues: any;
  numericalQues: any;
  selectionAns!: any;
  numericalAns!: any;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public pieChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public pieChartType: ChartType = 'pie';
  public scatterChartType: ChartType = 'scatter';
  public pieChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public pieChartColors = [
    {
      backgroundColor: ['#4F549E', '#D65DB1', '#032B44', '#59293E', '#A64C73'],
    },
  ];
  public scatterChartOptions: any = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    },
  };
  public scatterChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  constructor(private route: ActivatedRoute, private surveyService: SurveyService) {
    this.selectionAns = [];
    this.numericalAns = [];
  }

  ngOnInit(): void {
    const sid = this.route.snapshot.paramMap.get('survey_id');
    if (!sid) {
      alert("unauthorised survey id required");
      return;
    }
    this.survey_id = sid;
    console.log(this.survey_id);
    this.surveyService.getSurveyFromId(this.survey_id)
      .subscribe(({ data }) => {
        console.log("survey", data);
        this.survey = data;
      },
        (err) => {
          console.log(err);
        })
    this.surveyService.getQuestionsForSurvey(this.survey_id)
      .subscribe(({ data }) => {
        console.log("allQues", data)
        this.allQues = data;
        this.selectionQues = data.filter((ele: any) => ele.type === SurveyComponentType.SINGLE_SELECTION || ele.type === SurveyComponentType.MULTIPLE_SELECTION);
        this.numericalQues = data.filter((ele: any) => ele.type === SurveyComponentType.NUMERIC);
        console.log(this.selectionQues);
      },
        (err) => {
          console.log(err);
        })
    this.surveyService.getAnswersForSurvey(this.survey_id)
      .subscribe(({ data }) => {
        console.log("allAns", data);
        this.allAnswers = data;
        this.selectionAns = this.allAnswers.filter((ele: any) => ele.type === SurveyComponentType.SINGLE_SELECTION || ele.type === SurveyComponentType.MULTIPLE_SELECTION);
        this.numericalAns = this.allAnswers.filter((ele: any) => ele.type === SurveyComponentType.NUMERIC);
        console.log("selectAns", this.selectionAns);
      },
        (err) => {
          console.log(err);
        })
  }

  getSelectionData(arr: Array<any>, question_id: string, labels: boolean): any {
    //console.log("input", this.selectionAns, question_id);
    //console.log("qid", question_id);
    let filteredAns = arr.filter((ele: any) => ele.question_id === question_id)
    // console.log("filter", filteredAns);
    if (filteredAns.length == 0)
      return [];
    let wf = this.getWordFreqObj(filteredAns);
    //console.log("word freq", wf);
    return labels ? Object.keys(wf) : Object.values(wf);
    // return [{
    //   data: Object.values(wf),
    //   label: "No of answers with that option"
    // }]
  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  getNumericalData(question_id: string) {
    let res: any = [];
    let filteredAns = this.numericalAns.filter((ele: any) => ele.question_id === question_id);
    filteredAns.forEach(({ main_answer }: any, index: number) => {
      res.push({
        x: index + 1,
        y: main_answer,
      });
    })
    console.log("num", res);
    return res;
  }
  onSelect(event: any) {
    console.log(event);
  }

  getWordFreqObj(arr: any) {
    //console.log("objinput", arr);
    var freqMap = {};
    arr.forEach(({ main_answer }: any) => {
      main_answer.forEach((word: any) => {
        if (!(freqMap as any)[word]) {
          (freqMap as any)[word] = 0;
        }
        (freqMap as any)[word]++;
      })
    })
    return freqMap;
  }

}
