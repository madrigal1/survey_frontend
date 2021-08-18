import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SurveyService } from '../survey.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


export enum SurveyComponentType {
  text,
  numeric,
}

@Component({
  selector: 'app-survey-generator',
  templateUrl: './survey-generator.component.html',
  styleUrls: ['./survey-generator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SurveyGeneratorComponent implements OnInit {
  public currSurvey: any;
  public answerLink: string;
  public questions: Array<any>;
  public questionTypes = [
    { name: "text", icon: "../../assets/images/text_field.svg" },
    { name: "numeric", icon: "../../assets/images/number_field.svg" }
  ];
  public hasAdded: boolean;
  public SurveyComponentType = SurveyComponentType;
  public toastMsg: string;
  closeResult!: string;

  constructor(private surveyService: SurveyService, private modalService?: NgbModal) {
    this.questions = [];
    this.hasAdded = false;
    this.toastMsg = "";
    this.answerLink = "";
  }

  ngOnInit(): void {
    this.currSurvey = this.surveyService.getCurrSurvey();
    const cache = localStorage.getItem("currSurvey")
    if (!this.currSurvey && !cache) {
      alert("Not allowed on page");
      return;
    } else if (this.currSurvey) {
      localStorage.setItem("currSurvey", JSON.stringify(this.currSurvey));
    } else if (cache) {
      this.currSurvey = JSON.parse(cache);
    }
    console.log(this.currSurvey);
    // const questionsCache = localStorage.getItem(this.currSurvey._id);
    // if (questionsCache)
    //   this.questions = JSON.parse(questionsCache);
    // else
    this.surveyService.getQuestionsForSurvey(this.currSurvey._id)
      .subscribe(({ data }) => {
        console.log("all ques", data);
        this.questions = data;
      },
        (err) => {
          console.log(err);
          this.questions = [];
        })
  }
  addQuestion(index: number) {
    this.questions.push({
      type: this.questionTypes[index].name,
      main_data: ""
    })
    console.log(this.questions);
    let q = document.getElementsByClassName("survey-generator__main");
    if (q) {
      q[0].scrollTop = q[0].scrollHeight - q[0].clientHeight + 100;
    }
  }

  getInputType(type: string): SurveyComponentType {
    this.hasAdded = true;
    switch (type) {
      case "numeric":
        return SurveyComponentType.numeric;
      default:
        return SurveyComponentType.text;
    }
  }
  setHasAdded() {
    this.hasAdded = true;
  }


  deleteQuestion(index: number) {
    this.questions.splice(index, 1);
    const questionsCache = localStorage.getItem(this.currSurvey._id);
    if (questionsCache)
      localStorage.setItem(this.currSurvey._id, JSON.stringify(this.questions));
    console.log(this.questions);
  }
  tempSave() {

    let q: any = this.questions.map((ele) => ({
      ...ele,
      survey_id: this.currSurvey._id,
    }))
    console.log(q);
    if (q && q.length > 0) {
      localStorage.setItem(this.currSurvey._id, JSON.stringify(q));
      this.showToast("Local save success !");
    }
  }

  showToast(input: string) {
    this.toastMsg = input;
    const toast = document.getElementById("toastEle");
    console.log(toast);
    if (!toast) return;
    toast.classList.add("toast--visible");
    setTimeout(() => {
      toast.classList.remove("toast--visible");
    }, 4000)
  }

  publishSurvey(content: any) {
    console.log("backendinput", this.questions);
    this.surveyService.publishSurvey(this.questions)
      .subscribe((data) => {
        console.log("Backend resp", data);
        this.showToast("Survey Published !")
      },
        (err) => {
          console.log(err);
        });
    if (!this.modalService)
      return;
    this.answerLink = `http://localhost:4200/survey/${this.currSurvey._id}`
    this.modalService.open(content, { size: 'lg' });
  }

}
