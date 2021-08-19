import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SurveyService } from '../survey.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


export enum SurveyComponentType {
  SINGLE_LINE_TEXT = "single_line_text",
  NUMERIC = "numeric",
  MULTIPLE_LINE_TEXT = "multiple_line_text",
  MULTIPLE_CHOICE = "multiple_choice",
  RATING = "rating"
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
    { name: "Single Line", icon: "../../assets/images/text_field.svg" },
    { name: "Numeric", icon: "../../assets/images/number_field.svg" },
    { name: "Multiple Lines", icon: "../../assets/images/multiple_line.svg" },
    { name: "Multiple Choice", icon: "../../assets/images/mcq.svg" },
    { name: "Rating", icon: "../../assets/images/rating.svg" }
  ];
  public questionTypeMap = {
    "Single Line": SurveyComponentType.SINGLE_LINE_TEXT,
    "Numeric": SurveyComponentType.NUMERIC,
    "Multiple Lines": SurveyComponentType.MULTIPLE_LINE_TEXT,
    "Multiple Choice": SurveyComponentType.MULTIPLE_CHOICE,
    "Rating": SurveyComponentType.RATING,
  }
  public hasAdded: boolean;
  public SurveyComponentType = SurveyComponentType;
  public toastMsg: string;
  closeResult!: string;
  public mcqEnabled = false;
  public ratingEnabled = false;
  public currMcqIndex = -1;
  public currMcq: any;
  public currRating = 5;
  public currRatingIndex = -1;
  constructor(private surveyService: SurveyService, private modalService?: NgbModal) {
    this.questions = [];
    this.hasAdded = false;
    this.toastMsg = "";
    this.answerLink = "";
    this.currMcq = [];
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
    this.hasAdded = true;
    const qm = this.questionTypeMap
    const qt = this.questionTypes[index].name as keyof typeof qm;
    this.questions.push({
      type: this.questionTypeMap[qt],
      survey_id: this.currSurvey._id,
      main_data: ""
    })
    console.log(this.questions);
    let q = document.getElementsByClassName("survey-generator__main");
    if (q) {
      q[0].scrollTop = q[0].scrollHeight - q[0].clientHeight + 100;
    }
  }
  getClientFriendlyName(value: any) {
    return Object.keys(this.questionTypeMap).find(key => (this.questionTypeMap as any)[key] === value);
  }

  getInputType(type: SurveyComponentType): SurveyComponentType {
    this.hasAdded = true;
    return type;
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
    let errOcc = false;
    this.surveyService.publishSurvey(this.questions)
      .subscribe((data) => {
        console.log("Backend resp", data);
        this.showToast("Survey Published !")
      },
        (err) => {
          errOcc = true;
          console.log(err);
        });
    if (!this.modalService || errOcc)
      return;
    this.answerLink = `http://localhost:4200/survey/${this.currSurvey._id}`
    this.modalService.open(content, { size: 'lg' });
  }
  enableMcq(index: number) {
    console.log("triggered", index);
    this.ratingEnabled = false;
    this.mcqEnabled = true;
    this.currMcqIndex = index;
  }
  handleMcqEnter(ev: any) {
    if (ev.keyCode === 13)
      this.addMcq();
  }
  addMcq() {
    console.log("works")
    this.currMcq.push("");
  }
  disableMcq(index: number) {
    this.mcqEnabled = false;
    this.currMcq = [];
    this.currMcqIndex = -1;
  }
  submitMcq() {
    console.log(this.currMcq);
    const question = this.questions[this.currMcqIndex];
    question["additional_data"] = this.currMcq;
    this.questions[this.currMcqIndex] = question;
    console.log("finalmcq", this.questions[this.currMcqIndex]);
    this.currMcqIndex = -1;
    this.mcqEnabled = false;
    this.showToast("Mcq added !")
    console.log("after submit", this.questions);
  }
  trackByFn(index: any, mcq: string) {
    return index;
  }
  deleteMcq(index: number) {
    this.currMcq.splice(index, 1);
    console.log(this.currMcq);
  }
  enableRatingEdit(index: number) {
    this.mcqEnabled = false;
    this.currRatingIndex = index;
    this.ratingEnabled = true;
  }

  handleRatingSubmit() {
    const question = this.questions[this.currRatingIndex];
    question["additional_data"] = this.currRating;
    this.questions[this.currRatingIndex] = question;
    this.currRatingIndex = -1;
    this.currRating = 5;
    this.ratingEnabled = false;
  }
  handleNumberKeydown(evt: any) {
    if (evt.keyCode === 13) {
      this.handleRatingSubmit();
      return;
    }
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 && (charCode < 48 || charCode > 57)))
      return false;
    return true;
  }
}
