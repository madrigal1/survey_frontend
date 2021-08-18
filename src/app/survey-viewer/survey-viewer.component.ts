import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyComponentType, SurveyGeneratorComponent } from '../survey-generator/survey-generator.component';
import { SurveyService } from '../survey.service';




@Component({
  selector: 'app-survey-viewer',
  templateUrl: './survey-viewer.component.html',
  styleUrls: ['./survey-viewer.component.scss']
})
export class SurveyViewerComponent implements OnInit {
  public survey_id!: string;
  public currSurveyTitle!: any;
  public allQues!: any;
  public allAnswers: Array<any>;
  public currQuesIndex: number;
  public genCopy: SurveyGeneratorComponent;
  public SurveyComponentType = SurveyComponentType;
  public currAnswer: any;
  public questionsAnswered = 0;
  public toastVisible: boolean = false;
  public toastText: string = "";
  constructor(private route: ActivatedRoute, private surveyService: SurveyService) {
    this.currQuesIndex = 0;
    this.genCopy = new SurveyGeneratorComponent(surveyService);
    this.allAnswers = [];
    this.allQues = [];
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
        //console.log(data);
        this.currSurveyTitle = data.name;
      },
        (err) => {
          alert("Invalid Survey id");
          console.log(err);
          return;
        })
    this.surveyService.getQuestionsForSurvey(this.survey_id)
      .subscribe(({ data }) => {
        //console.log(data);
        this.allQues = data;
      },
        (err) => {
          console.log(err);
          if (err.status == 400) {
            alert("survey id invalid");
          }
          console.log(err);
        });
  }
  validIndex(index: number): boolean {
    return (index < this.allQues.length && index >= 0);
  }
  answerExists(survey_id: string, question_id: string): number {
    return (this.allAnswers.findIndex((answer) => answer.survey_id === survey_id && answer.question_id === question_id));
  }

  handleKeydown(e: any) {
    if (e.keyCode === 13) {
      this.submitQuestion();
    }
  }
  showToast(msg: string) {
    this.toastText = msg;
    this.toastVisible = true;
  }
  submitQuestion() {
    if (!this.currAnswer) {
      alert("Answer the queston to submit\nelse hit next to skip");
      return;
    }
    if (!this.validIndex(this.currQuesIndex)) {
      alert("invaluid questoin index");
      return;
    }
    const currQuestion = this.allQues[this.currQuesIndex];
    const arrIndex = this.answerExists(this.survey_id, currQuestion._id);
    const newAnswer = {
      question_id: currQuestion._id,
      survey_id: this.survey_id,
      type: currQuestion.type,
      main_answer: this.currAnswer,
    }
    if (arrIndex == -1) {
      this.allAnswers.push(newAnswer)
      this.questionsAnswered++;
    } else {
      this.allAnswers[arrIndex] = newAnswer;
    }
    this.showToast("Answer Recorded");
    console.log(this.allAnswers)
    this.nextQuestion();
  }
  nextQuestion() {
    this.currAnswer = null;
    if (!this.validIndex(this.currQuesIndex + 1))
      return;
    this.currQuesIndex++;
  }
  prevQuestion() {
    if (!this.validIndex(this.currQuesIndex - 1))
      return;
    this.currQuesIndex--;
  }
  submitAnswers() {
    this.surveyService.recordAnswers(this.allAnswers)
      .subscribe((data) => {
        console.log("backendresp", data);
        this.showToast("Survey done");
      },
        (err) => {
          console.log(err);
        })
  }
}
