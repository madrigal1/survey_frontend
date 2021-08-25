import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { isConstructorDeclaration } from 'typescript';
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
  scaleQues: any;
  selectionAns!: any;
  scaleAns!: any;
  numericalQues: any;
  numericalAns: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    animation: {
      duration: 0,
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
  };
  public pieChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public pieChartType: ChartType = 'pie';
  public barChartType: ChartType = 'bar';
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
  public pieChartOptions: any = {
    responsive: true,
    legend: {
      position: 'bottom'
    },
  };
  public scatterChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  constructor(private route: ActivatedRoute, private surveyService: SurveyService) {
    this.selectionAns = [];
    this.scaleAns = [];
  }

  ngOnInit(): void {
    const sid = this.route.snapshot.paramMap.get('survey_id');
    if (!sid) {
      alert("unauthorised survey id required");
      return;
    }
    this.survey_id = sid;
    this.surveyService.getSurveyFromId(this.survey_id)
      .subscribe(({ data }) => {
        // console.log("survey", data);
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
        this.scaleQues = data.filter((ele: any) => ele.type === SurveyComponentType.SLIDER || ele.type === SurveyComponentType.RATING);
        this.numericalQues = data.filter((ele: any) => ele.type === SurveyComponentType.NUMERIC);
        // console.log(this.selectionQues);
      },
        (err) => {
          console.log(err);
        })
    this.surveyService.getAnswersForSurvey(this.survey_id)
      .subscribe(({ data }) => {
        //console.log("allAns", data);
        this.allAnswers = data;
        this.selectionAns = this.allAnswers.filter((ele: any) => ele.type === SurveyComponentType.SINGLE_SELECTION || ele.type === SurveyComponentType.MULTIPLE_SELECTION);
        this.scaleAns = this.allAnswers.filter((ele: any) => ele.type === SurveyComponentType.SLIDER || ele.type === SurveyComponentType.RATING);
        this.numericalAns = this.allAnswers.filter((ele: any) => ele.type === SurveyComponentType.NUMERIC);
        // console.log("selectAns", this.numericalAns);
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

  getScaleData(question_id: string): number[] {
    let filteredAns = this.scaleAns.filter((ele: any) => ele.question_id === question_id);
    let res = this.getScaleFreqObj(filteredAns, false) as number[];
    //console.log("sd", res);
    return res;
  }

  private asc(arr: Array<any>) {
    return arr.sort((a, b) => a - b);
  }
  private sum(arr: Array<any>) {
    return arr.reduce((a, b) => a + b, 0);
  }
  private mean(arr: Array<any>) {
    return this.sum(arr) / arr.length;
  }
  private std(arr: Array<any>) {
    const n = arr.length
    const mean = arr.reduce((a, b) => a + b) / n
    return Math.sqrt(arr.map((x: any) => Math.pow(x - mean, 2)).reduce((a: any, b: any) => a + b) / n)
  }
  private quantile(arr: Array<any>, q: number) {
    const sorted = this.asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
      return sorted[base];
    }
  }
  get25Quartile(question_id: string) {
    let filteredAns = this.numericalAns.filter((ele: any) => ele.question_id === question_id);
    filteredAns = filteredAns.map((ans: any) => ans.main_answer);
    return this.twoDecimals(this.quantile(filteredAns, .25));
  }
  get50Quartile(question_id: string) {
    let filteredAns = this.numericalAns.filter((ele: any) => ele.question_id === question_id);
    filteredAns = filteredAns.map((ans: any) => ans.main_answer);
    return this.twoDecimals(this.quantile(filteredAns, .50));
  }

  get75Quartile(question_id: string) {
    let filteredAns = this.numericalAns.filter((ele: any) => ele.question_id === question_id);
    filteredAns = filteredAns.map((ans: any) => ans.main_answer);
    return this.twoDecimals(this.quantile(filteredAns, .75));
  }

  private twoDecimals(num: any) {
    return parseFloat(num.toFixed(2));
  }

  getMean(question_id: string) {
    let filteredAns = this.numericalAns.filter((ele: any) => ele.question_id === question_id);
    filteredAns = filteredAns.map((ans: any) => ans.main_answer);
    return this.twoDecimals(this.mean(filteredAns));
  }
  getStandardDeviation(question_id: string) {
    let filteredAns = this.numericalAns.filter((ele: any) => ele.question_id === question_id);
    filteredAns = filteredAns.map((ans: any) => ans.main_answer);
    return this.twoDecimals(this.std(filteredAns));
  }
  getCount(question_id: string) {
    let filteredAns = this.numericalAns.filter((ele: any) => ele.question_id === question_id);
    filteredAns = filteredAns.map((ans: any) => ans.main_answer);
    return filteredAns.length;
  }
  getMax(question_id: string) {
    let filteredAns = this.numericalAns.filter((ele: any) => ele.question_id === question_id);
    filteredAns = filteredAns.map((ans: any) => ans.main_answer);
    return Math.max(...filteredAns);
  }
  getMin(question_id: string) {
    let filteredAns = this.numericalAns.filter((ele: any) => ele.question_id === question_id);
    filteredAns = filteredAns.map((ans: any) => ans.main_answer);
    return Math.min(...filteredAns);
  }
  getScaleLabel(question_id: string): string[] {
    let filteredAns = this.scaleAns.filter((ele: any) => ele.question_id === question_id);
    return this.getScaleFreqObj(filteredAns, true) as string[];
  }
  onSelect(event: any) {
    console.log(event);
  }

  getScaleFreqObj(arr: any, labels: boolean): (string | number)[] {
    let counts = {};
    for (const { main_answer } of arr) {
      (counts as any)[main_answer] = (counts as any)[main_answer] ? (counts as any)[main_answer] + 1 : 1;
    }
    //console.log(counts);
    return labels ? Object.keys(counts) : Object.values(counts);
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
