import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SurveyService } from '../survey.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BASE_URL } from '../baseUrl';
import { HighlightSpanKind } from 'typescript';
import Swal from 'sweetalert2'

export enum SurveyComponentType {
  SINGLE_LINE_TEXT = "single_line_text",
  NUMERIC = "numeric",
  MULTIPLE_LINE_TEXT = "multiple_line_text",
  SINGLE_SELECTION = "single_selection",
  MULTIPLE_SELECTION = "multiple_selection",
  SLIDER = "slider",
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
  public analyticsLink: string;
  public questions: Array<any>;
  public questionTypes = [
    { name: "Single Line", icon: "../../assets/images/text_field.svg" },
    { name: "Numeric", icon: "../../assets/images/number_field.svg" },
    { name: "Multiple Lines", icon: "../../assets/images/multiple_line.svg" },
    { name: "Single Selection", icon: "../../assets/images/mcq.svg" },
    { name: "Multiple Selection", icon: "../../assets/images/checkbox.svg" },
    { name: "Slider", icon: "../../assets/images/slider.svg" },
    { name: "Rating", icon: "../../assets/images/rating.svg" }
  ];
  public questionTypeMap = {
    "Single Line": SurveyComponentType.SINGLE_LINE_TEXT,
    "Numeric": SurveyComponentType.NUMERIC,
    "Multiple Lines": SurveyComponentType.MULTIPLE_LINE_TEXT,
    "Single Selection": SurveyComponentType.SINGLE_SELECTION,
    "Multiple Selection": SurveyComponentType.MULTIPLE_SELECTION,
    "Rating": SurveyComponentType.RATING,
    "Slider": SurveyComponentType.SLIDER,
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
  public currAnnotation: string;
  public currAnnotationArr: Array<string> = Array(this.currRating).fill("");
  public firstRatingStep = true;
  public isPublished = false;
  constructor(private surveyService: SurveyService, private modalService?: NgbModal) {
    this.questions = [];
    this.hasAdded = false;
    this.toastMsg = "";
    this.answerLink = "";
    this.analyticsLink = "";
    this.currMcq = [];
    this.currAnnotation = "";
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
    this.analyticsLink = `/analytics/${this.currSurvey._id}`
    // const questionsCache = localStorage.getItem(this.currSurvey._id);
    // if (questionsCache)
    //   this.questions = JSON.parse(questionsCache);
    // else
    this.surveyService.getQuestionsForSurvey(this.currSurvey._id)
      .subscribe(({ data }) => {
        console.log("all ques", data);
        this.questions = data;
        this.isPublished = true;
      },
        (err) => {
          console.log(err);
          this.questions = [];
        })
  }
  checkIsPublished(): boolean {
    if (this.isPublished) {
      // alert("Already Published");
      Swal.fire({
        icon: 'info',
        title: "Can't do that...",
        text: 'Survey already published!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    return this.isPublished;
  }
  addQuestion(index: number) {
    if (this.checkIsPublished())
      return;
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
    if (this.checkIsPublished())
      return;
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
  async publishConfirm() {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to edit the survey after it is published",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, publish it!'
    });
    if (result.isConfirmed) {
      Swal.fire(
        'Published!',
        'Your survey is live !',
        'success'
      )
      return true;
    } else {
      return false;
    }
  }
  async publishSurvey(content: any) {
    if (this.checkIsPublished())
      return;
    const result = await this.publishConfirm();
    if (!result)
      return;
    this.questions = this.questions.map((question) => {
      if (question.type == SurveyComponentType.SINGLE_SELECTION || question.type == SurveyComponentType.MULTIPLE_SELECTION) {
        if (!question.additional_data)
          question.additional_data = ["Choice 1", "Choice 2", "Choice 3"];
      }
      if (question.type == SurveyComponentType.RATING || question.type == SurveyComponentType.SLIDER) {
        if (!question.additional_data)
          question.additional_data = 10;
      }
      return question;
    })
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
    this.answerLink = `${window.location.origin}/survey/${this.currSurvey._id}`;
    this.modalService.open(content, { size: 'lg' });
  }
  enableMcq(index: number) {
    if (this.checkIsPublished())
      return;
    this.ratingEnabled = false;
    this.mcqEnabled = true;
    this.currMcqIndex = index;
  }
  handleMcqEnter(ev: any) {
    if (ev.keyCode === 13)
      this.addMcq();
  }
  addMcq() {
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
    this.currMcq = [];
    this.showToast("Mcq added !")
    console.log("after submit", this.questions);
  }
  trackByFn(index: any, mcq: string) {
    return index;
  }
  trackByFn2(index: any, man: string) {
    return index;
  }
  deleteMcq(index: number) {
    this.currMcq.splice(index, 1);
    console.log(this.currMcq);
  }
  enableRatingEdit(index: number) {
    if (this.checkIsPublished())
      return;
    this.mcqEnabled = false;
    this.ratingEnabled = false;
    this.currRatingIndex = index;
    this.ratingEnabled = true;
  }

  handleRatingSubmit() {
    if (this.firstRatingStep) {
      if (this.currRating > 10) {
        alert("max rating should be 10 or below");
        this.currRating = 10;
        return;
      }
      this.firstRatingStep = false;
      this.currAnnotationArr = Array(this.currRating).fill("");
      return;
    } else {
      console.log(this.currAnnotationArr);
      let empty = false;
      for (let ele of this.currAnnotationArr) {
        if (ele.length < 1) {
          empty = true;
          break;
        }
      }
      if (empty) {
        alert("Please fill all the guidelines before hitting submit");
        return;
      }
      this.currAnnotation = this.currAnnotationArr.reduce((acc: string, ele: string, currIndex) => {
        return acc + `${currIndex + 1}-${ele}\n`
      }, "");
      console.log(this.currAnnotation);
      this.firstRatingStep = true;
    }
    const question = this.questions[this.currRatingIndex];
    question["additional_data"] = { max: this.currRating }
    if (this.currAnnotation && this.currAnnotation.length > 1)
      question.additional_data["annotation"] = this.currAnnotation;
    this.questions[this.currRatingIndex] = question;
    this.currRatingIndex = -1;
    this.currRating = 5;
    this.currAnnotation = "";
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
    if (evt.target.value && evt.target.value != "")
      this.currAnnotationArr = Array(Number(this.currRating)).fill("")
    return true;
  }
}
