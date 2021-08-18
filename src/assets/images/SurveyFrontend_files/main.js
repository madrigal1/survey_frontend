(self["webpackChunksurvey_frontend"] = self["webpackChunksurvey_frontend"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _new_survey_new_survey_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-survey/new-survey.component */ 6277);
/* harmony import */ var _survey_generator_survey_generator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-generator/survey-generator.component */ 1391);
/* harmony import */ var _survey_viewer_survey_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey-viewer/survey-viewer.component */ 394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    { path: "", component: _new_survey_new_survey_component__WEBPACK_IMPORTED_MODULE_0__.NewSurveyComponent },
    { path: "generator", component: _survey_generator_survey_generator_component__WEBPACK_IMPORTED_MODULE_1__.SurveyGeneratorComponent },
    { path: "survey/:survey_id", component: _survey_viewer_survey_viewer_component__WEBPACK_IMPORTED_MODULE_2__.SurveyViewerComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'survey-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _new_survey_new_survey_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-survey/new-survey.component */ 6277);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _survey_generator_survey_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey-generator/survey-generator.component */ 1391);
/* harmony import */ var _survey_viewer_survey_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./survey-viewer/survey-viewer.component */ 394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _new_survey_new_survey_component__WEBPACK_IMPORTED_MODULE_2__.NewSurveyComponent,
        _survey_generator_survey_generator_component__WEBPACK_IMPORTED_MODULE_3__.SurveyGeneratorComponent,
        _survey_viewer_survey_viewer_component__WEBPACK_IMPORTED_MODULE_4__.SurveyViewerComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] }); })();


/***/ }),

/***/ 8447:
/*!****************************!*\
  !*** ./src/app/baseUrl.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL)
/* harmony export */ });
const BASE_URL = "http://localhost:3000/v1";


/***/ }),

/***/ 6277:
/*!****************************************************!*\
  !*** ./src/app/new-survey/new-survey.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewSurveyComponent": () => (/* binding */ NewSurveyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../survey.service */ 5427);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);





function NewSurveyComponent_figure_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No surveys created yet !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewSurveyComponent_section_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewSurveyComponent_section_21_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.goToGenerator(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const survey_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](survey_r3.name);
} }
function NewSurveyComponent_section_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewSurveyComponent_section_21_div_1_Template, 6, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.allSurveys);
} }
class NewSurveyComponent {
    constructor(surveyService, router) {
        this.surveyService = surveyService;
        this.router = router;
        this.hasSurveys = false;
        this.newSurveyName = "";
    }
    ngOnInit() {
        this.surveyService.fetchAllSurveys()
            .subscribe(({ data }) => {
            this.hasSurveys = true;
            this.allSurveys = data;
            console.log(data);
        }, (err) => {
            console.log(err);
        });
    }
    handleEnter(e) {
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
        this.surveyService.createNewSurvey(this.newSurveyName)
            .subscribe((data) => {
            console.log(data);
            this.ngOnInit();
        }, (err) => {
            if (err.status == 400)
                alert("Survey Name already taken.\nPlease choose another");
            console.log(err);
        });
    }
    goToGenerator(index) {
        this.surveyService.setCurrSurvey(this.allSurveys[index]);
        this.router.navigate(['/generator']);
    }
}
NewSurveyComponent.ɵfac = function NewSurveyComponent_Factory(t) { return new (t || NewSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_survey_service__WEBPACK_IMPORTED_MODULE_0__.SurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
NewSurveyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewSurveyComponent, selectors: [["app-new-survey"]], decls: 22, vars: 3, consts: [[1, "survey-landing"], [1, "survey-landing__header"], [1, "container"], [1, "new-survey__header_content"], [1, "survey-landing__new"], [1, "survey-landing__new__details"], ["name", "survey_name", "type", "text", "placeholder", "Enter Survey Name", 3, "ngModel", "ngModelChange", "keydown"], [1, "survey-landing__new__details__button", 3, "click"], ["src", "../../assets/images/noun_Arrow_3078248.svg", "alt", "right arrow"], [1, "survey-landing__allsurveys"], ["class", "survey-landing__allsurveys__nosurveys", 4, "ngIf"], ["class", "survey-landing__allsurveys__cards-list", 4, "ngIf"], [1, "survey-landing__allsurveys__nosurveys"], ["src", "../../assets/images/survey_bg.svg", "alt", "survey_bg"], [1, "survey-landing__allsurveys__cards-list"], ["class", "survey-landing__allsurveys__cards-list__card", 3, "click", 4, "ngFor", "ngForOf"], [1, "survey-landing__allsurveys__cards-list__card", 3, "click"], [1, "survey-landing__allsurveys__cards-list__card__card-image"], ["src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9757d496-239b-46c5-baea-6873cbfe9b3d/dd2x2f3-8e5b4f1f-d266-48ab-b611-2b7ccece6ac8.jpg/v1/fill/w_1192,h_670,q_70,strp/above_the_gemstone_valley_by_joeyjazz_dd2x2f3-pre.jpg"], [1, "survey-landing__allsurveys__cards-list__card__card-title"]], template: function NewSurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Atos Survey Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Survey Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Quick and easy survey generation to share to customers and collect insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewSurveyComponent_Template_input_ngModelChange_14_listener($event) { return ctx.newSurveyName = $event; })("keydown", function NewSurveyComponent_Template_input_keydown_14_listener($event) { return ctx.handleEnter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewSurveyComponent_Template_div_click_15_listener() { return ctx.createSurvey(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Generate New Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NewSurveyComponent_figure_20_Template, 4, 0, "figure", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NewSurveyComponent_section_21_Template, 2, 1, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newSurveyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hasSurveys);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasSurveys);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300&display=swap\");\n.survey-landing[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  grid-row-gap: 0px;\n  row-gap: 0px;\n  grid-column-gap: 0px;\n  column-gap: 0px;\n  grid-template-areas: \"header header header header header\" \"new new allsurveys allsurveys allsurveys\" \"new new allsurveys allsurveys allsurveys\" \"new new allsurveys allsurveys allsurveys\" \"new new allsurveys allsurveys allsurveys\" \"new new allsurveys allsurveys allsurveys\" \"new new allsurveys allsurveys allsurveys\" \"new new allsurveys allsurveys allsurveys\";\n}\n.survey-landing__header[_ngcontent-%COMP%] {\n  grid-area: header;\n  color: white;\n  font-size: 1.2rem;\n  padding: 1em 0;\n  background-color: #0088ff;\n  border-bottom: 1px solid #e3e9ef;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.06);\n}\n.survey-landing__header__content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n}\n.survey-landing__new[_ngcontent-%COMP%] {\n  grid-area: new;\n  text-align: center;\n  padding: 1.2em;\n  color: white;\n  height: 90vh;\n  border: 1px solid black;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('landing_bg.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n}\n.survey-landing__new[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: 0px;\n  text-shadow: 0 1px 0 black;\n  font-weight: bold;\n}\n.survey-landing__new[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-style: italic;\n  text-shadow: 0 1px 0 black;\n  margin-bottom: 50px;\n  margin-top: 5px;\n  margin-inline: 0.2em;\n  font-size: 1rem;\n}\n.survey-landing__new__details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.survey-landing__new__details[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  box-sizing: border-box;\n  outline: none;\n  width: 80%;\n  height: 3em;\n  border: 1px solid lightgray;\n  padding: 1em 2em;\n  border-radius: 3px;\n}\n.survey-landing__new__details[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n}\n.survey-landing__new__details__button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  background-color: #005FFF;\n  width: 80%;\n  height: 3em;\n  border-radius: 3px;\n}\n.survey-landing__new__details__button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n  left: 0;\n  margin-inline: 1em;\n}\n.survey-landing__new__details__button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 900;\n  text-shadow: none;\n  font-size: 0.95rem;\n  font-style: normal;\n}\n.survey-landing__new__details__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 20px;\n  height: 20px;\n  margin-top: 3px;\n  opacity: 0;\n  position: relative;\n  left: -10px;\n  transition: 0.5s;\n  margin-inline: 0;\n}\n.survey-landing__allsurveys[_ngcontent-%COMP%] {\n  grid-area: allsurveys;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  overflow-y: scroll;\n  background-color: #05299E;\n  background-size: contain;\n}\n.survey-landing__allsurveys__nosurveys[_ngcontent-%COMP%] {\n  color: white;\n}\n.survey-landing__allsurveys__nosurveys[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30em;\n  height: 30em;\n}\n.survey-landing__allsurveys__cards-list[_ngcontent-%COMP%] {\n  z-index: 0;\n  width: 100%;\n  overflow: auto;\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n}\n.survey-landing__allsurveys__cards-list__card[_ngcontent-%COMP%] {\n  margin: 30px auto;\n  width: 200px;\n  height: 200px;\n  border-radius: 40px;\n  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);\n  cursor: pointer;\n  transition: 0.4s;\n}\n.survey-landing__allsurveys__cards-list__card[_ngcontent-%COMP%]:hover {\n  transform: scale(0.9, 0.9);\n  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25), -5px -5px 30px 15px rgba(0, 0, 0, 0.22);\n}\n.survey-landing__allsurveys__cards-list__card__card-image[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  border-radius: 40px;\n}\n.survey-landing__allsurveys__cards-list__card__card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  border-radius: 40px;\n  object-fit: cover;\n}\n.survey-landing__allsurveys__cards-list__card__card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 0px 0px 40px 40px;\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: -80px;\n  height: 40px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1zdXJ2ZXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUdBQUE7QUFFUjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQUEsWUFBQTtFQUNBLG9CQUFBO0VBQUEsZUFBQTtFQUNBLHNXQUNJO0FBRFI7QUFTSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtBQVBSO0FBUVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQU5aO0FBU0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0dBQ0E7RUFLQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQVpSO0FBYVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBWFo7QUFhUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBWFo7QUFhUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBWFo7QUFZWTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFWaEI7QUFZWTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7QUFWaEI7QUFZWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFWaEI7QUFXZ0I7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQVRwQjtBQVdnQjtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVRwQjtBQVlnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVZwQjtBQWdCSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0QseUJBQUE7RUFDQyx3QkFBQTtBQWhCUjtBQWlCUTtFQUNJLFlBQUE7QUFmWjtBQWdCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBZGhCO0FBaUJRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBSUEsYUFBQTtFQUNBLGFBQUE7RUFDQSwyREFBQTtBQWxCWjtBQW1CWTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdGQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBakJoQjtBQWtCZ0I7RUFDSSwwQkFBQTtFQUNBLDBGQUFBO0FBaEJwQjtBQW1CZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBakJwQjtBQWtCb0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFoQnhCO0FBbUJnQjtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFqQnBCIiwiZmlsZSI6Im5ldy1zdXJ2ZXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzEsMzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4uc3VydmV5LWxhbmRpbmcge1xuICAgIHdpZHRoOjEwMHZ3O1xuICAgIGhlaWdodDoxMDB2aDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwxZnIpO1xuICAgIHJvdy1nYXA6MHB4O1xuICAgIGNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXCJcbiAgICAgICAgXCJuZXcgbmV3IGFsbHN1cnZleXMgYWxsc3VydmV5cyBhbGxzdXJ2ZXlzXCJcbiAgICAgICAgXCJuZXcgbmV3IGFsbHN1cnZleXMgYWxsc3VydmV5cyBhbGxzdXJ2ZXlzXCJcbiAgICAgICAgXCJuZXcgbmV3IGFsbHN1cnZleXMgYWxsc3VydmV5cyBhbGxzdXJ2ZXlzXCJcbiAgICAgICAgXCJuZXcgbmV3IGFsbHN1cnZleXMgYWxsc3VydmV5cyBhbGxzdXJ2ZXlzXCJcbiAgICAgICAgXCJuZXcgbmV3IGFsbHN1cnZleXMgYWxsc3VydmV5cyBhbGxzdXJ2ZXlzXCJcbiAgICAgICAgXCJuZXcgbmV3IGFsbHN1cnZleXMgYWxsc3VydmV5cyBhbGxzdXJ2ZXlzXCJcbiAgICAgICAgXCJuZXcgbmV3IGFsbHN1cnZleXMgYWxsc3VydmV5cyBhbGxzdXJ2ZXlzXCI7XG4gICAgJl9faGVhZGVye1xuICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBwYWRkaW5nOjFlbSAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGZmO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTllZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwwLjA2KTtcbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX25ldyB7XG4gICAgICAgIGdyaWQtYXJlYTpuZXc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMS4yZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0Ojkwdmg7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMC4wNik7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9sYW5kaW5nX2JnLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgYmxhY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIGJsYWNrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDs7XG4gICAgICAgICAgICBtYXJnaW4taW5saW5lOjAuMmVtIDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgICAgICB9XG4gICAgICAgICZfX2RldGFpbHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6ODAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDozZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MWVtIDJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXJ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX2J1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1RkZGO1xuICAgICAgICAgICAgICAgIHdpZHRoOjgwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6M2VtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6M3B4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIgaW1ne1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4taW5saW5lOiAxZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcHg7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0Oi0xMHB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4taW5saW5lOjA7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJl9fYWxsc3VydmV5cyB7XG4gICAgICAgIGdyaWQtYXJlYTogYWxsc3VydmV5cztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNzVmO1xuICAgICAgIC8vIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmx1ZV9iZy5zdmdcIik7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1Mjk5RTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAmX19ub3N1cnZleXN7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICZfX2NhcmRzLWxpc3R7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWdhcDogMWVtO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgICAgICAgICAmX19jYXJkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMzBweCA3cHggcmdiYSgwLDAsMCwwLjI1KSwgLTVweCAtNXB4IDMwcHggN3B4IHJnYmEoMCwwLDAsMC4yMik7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuOSk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMzBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAtNXB4IC01cHggMzBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICZfX2NhcmQtaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJl9fY2FyZC10aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDQwcHggNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC04MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 1391:
/*!****************************************************************!*\
  !*** ./src/app/survey-generator/survey-generator.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyComponentType": () => (/* binding */ SurveyComponentType),
/* harmony export */   "SurveyGeneratorComponent": () => (/* binding */ SurveyGeneratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../survey.service */ 5427);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);




function SurveyGeneratorComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SurveyGeneratorComponent_div_18_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.addQuestion(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", type_r3.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r3.name, " ");
} }
function SurveyGeneratorComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SurveyGeneratorComponent_div_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.tempSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SurveyGeneratorComponent_div_29_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SurveyGeneratorComponent_div_29_ng_container_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const question_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return question_r9.main_data = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "footer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SurveyGeneratorComponent_div_29_ng_container_1_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.deleteQuestion(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r10 = ctx_r18.index;
    const question_r9 = ctx_r18.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Q.", i_r10 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", question_r9.main_data);
} }
function SurveyGeneratorComponent_div_29_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SurveyGeneratorComponent_div_29_ng_container_2_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const question_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return question_r9.main_data = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "footer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SurveyGeneratorComponent_div_29_ng_container_2_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.deleteQuestion(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r10 = ctx_r24.index;
    const question_r9 = ctx_r24.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Q.", i_r10 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", question_r9.main_data);
} }
function SurveyGeneratorComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SurveyGeneratorComponent_div_29_ng_container_1_Template, 9, 2, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SurveyGeneratorComponent_div_29_ng_container_2_Template, 9, 2, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r2.getInputType(question_r9.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r2.SurveyComponentType.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r2.SurveyComponentType.numeric);
} }
var SurveyComponentType;
(function (SurveyComponentType) {
    SurveyComponentType[SurveyComponentType["text"] = 0] = "text";
    SurveyComponentType[SurveyComponentType["numeric"] = 1] = "numeric";
})(SurveyComponentType || (SurveyComponentType = {}));
class SurveyGeneratorComponent {
    constructor(surveyService) {
        this.surveyService = surveyService;
        this.questionTypes = [
            { name: "text", icon: "../../assets/images/text_field.svg" },
            { name: "numeric", icon: "../../assets/images/number_field.svg" }
        ];
        this.SurveyComponentType = SurveyComponentType;
        this.questions = [];
        this.hasAdded = false;
        this.toastMsg = "";
    }
    ngOnInit() {
        this.currSurvey = this.surveyService.getCurrSurvey();
        const cache = localStorage.getItem("currSurvey");
        if (!this.currSurvey && !cache) {
            alert("Not allowed on page");
            return;
        }
        else if (this.currSurvey) {
            localStorage.setItem("currSurvey", JSON.stringify(this.currSurvey));
        }
        else if (cache) {
            this.currSurvey = JSON.parse(cache);
        }
        console.log(this.currSurvey);
        const questionsCache = localStorage.getItem(this.currSurvey._id);
        if (questionsCache)
            this.questions = JSON.parse(questionsCache);
    }
    addQuestion(index) {
        this.questions.push({
            type: this.questionTypes[index].name,
            main_data: ""
        });
        console.log(this.questions);
        let q = document.getElementsByClassName("survey-generator__main");
        if (q) {
            q[0].scrollTop = q[0].scrollHeight - q[0].clientHeight + 100;
        }
    }
    getInputType(type) {
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
    deleteQuestion(index) {
        this.questions.splice(index, 1);
        const questionsCache = localStorage.getItem(this.currSurvey._id);
        if (questionsCache)
            localStorage.setItem(this.currSurvey._id, JSON.stringify(this.questions));
        console.log(this.questions);
    }
    tempSave() {
        let q = this.questions.map((ele) => (Object.assign(Object.assign({}, ele), { survey_id: this.currSurvey._id })));
        console.log(q);
        if (q && q.length > 0) {
            localStorage.setItem(this.currSurvey._id, JSON.stringify(q));
            this.showToast("Local save success !");
        }
    }
    showToast(input) {
        this.toastMsg = input;
        const toast = document.getElementById("toastEle");
        console.log(toast);
        if (!toast)
            return;
        toast.classList.add("toast--visible");
        setTimeout(() => {
            toast.classList.remove("toast--visible");
        }, 4000);
    }
    publishSurvey() {
        console.log("backendinput", this.questions);
        this.surveyService.publishSurvey(this.questions)
            .subscribe((data) => {
            console.log("Backend resp", data);
            this.showToast("Survey Published !");
        }, (err) => {
            console.log(err);
        });
    }
}
SurveyGeneratorComponent.ɵfac = function SurveyGeneratorComponent_Factory(t) { return new (t || SurveyGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_survey_service__WEBPACK_IMPORTED_MODULE_0__.SurveyService)); };
SurveyGeneratorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SurveyGeneratorComponent, selectors: [["app-survey-generator"]], decls: 36, vars: 6, consts: [["id", "toastEle", 1, "toast"], [1, "survey-generator"], [1, "survey-generator__header"], [1, "survey-generator__header__content"], [1, "survey-generator__header__content__info"], ["src", "../../assets/images/left_arrow.svg", "alt", "left arrow", 1, "left-arrow"], [1, "survey-generator__header__content__control-panel"], [1, "survey-generator__header__content__control-panel__publish-btn", 3, "click"], [1, "survey-generator__questionTypes"], [1, "survey-generator__questionTypes__title"], ["class", "survey-generator__questionTypes__type", 3, "click", 4, "ngFor", "ngForOf"], [1, "survey-generator__main"], [1, "survey-generator__main__content"], [1, "survey-generator__main__content__header"], [1, "survey-generator__main__content__header__title"], ["class", "survey-generator__main__content__header__save", 3, "click", 4, "ngIf"], [1, "survey-generator__main__content__questions"], ["class", "survey-generator__main__content__questions__question", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [1, "survey-generator__properties"], [1, "survey-generator__properties__title"], [1, "survey-generator__properties__title__subtitle"], [1, "survey-generator__questionTypes__type", 3, "click"], ["alt", "icon", 3, "src"], [1, "survey-generator__main__content__header__save", 3, "click"], ["src", "../../assets/images/save_btn.svg", "alt", ""], [1, "survey-generator__main__content__questions__question", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "survey-generator__main__content__questions__question__about"], [1, "survey-generator__main__content__questions__question__about__question-num"], ["type", "text", "placeholder", "Input your question here", 1, "survey-generator__main__content__questions__question__about__input", 3, "ngModel", "ngModelChange"], [1, "survey-generator__main__content__questions__question__about__footer"], [1, "survey-generator__main__content__questions__question__about__footer__type-badge", "survey-generator__main__content__questions__question__about__footer__type-badge--text"], ["src", "../../assets/images/delete_icon.svg", "alt", "delete", 3, "click"], [1, "survey-generator__main__content__questions__question__about__footer__type-badge", "survey-generator__main__content__questions__question__about__footer__type-badge--number"]], template: function SurveyGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Atos Studio Survey Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SurveyGeneratorComponent_Template_div_click_11_listener() { return ctx.publishSurvey(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "questions type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SurveyGeneratorComponent_div_18_Template, 4, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "main", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "header", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SurveyGeneratorComponent_div_27_Template, 4, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "main", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SurveyGeneratorComponent_div_29_Template, 3, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "header", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Properties Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Edit the text of your survey component here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.toastMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questionTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.currSurvey.name, " blueprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx.hasAdded ? "Add a question from the left side menu" : "Click on save for local changes,click publish to share with customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasAdded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\");\n.toast {\n  position: fixed;\n  bottom: 2em;\n  right: 5em;\n  color: white;\n  padding: 12px 24px 17px 24px;\n  background-color: black;\n  z-index: 30000;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  white-space: nowrap;\n  border-radius: 1px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.2);\n  width: 0;\n  opacity: 0;\n  transition: all 2s linear;\n}\n.toast--visible {\n  width: 12em;\n  opacity: 1;\n}\n.survey-generator {\n  height: 100vh;\n  width: 100vw;\n  font-family: \"Roboto\", sans-serif;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(9, 1fr);\n  grid-gap: 0px 0px;\n  gap: 0px 0px;\n  grid-template-areas: \"header header header header header header header \" \"questionTypes main main main main Properties Properties\" \"questionTypes main main main main Properties Properties\" \"questionTypes main main main main Properties Properties\" \"questionTypes main main main main Properties Properties\" \"questionTypes main main main main Properties Properties\" \"questionTypes main main main main Properties Properties\" \"questionTypes main main main main Properties Properties\" \"questionTypes main main main main Properties Properties\";\n}\n.survey-generator__header {\n  grid-area: header;\n  padding: 0.8em 1em;\n  border-bottom: 1px solid #CBCDCC;\n  box-shadow: 0 3px 3px 0 #e3e9ef;\n}\n.survey-generator__header__content {\n  display: flex;\n  justify-content: space-between;\n}\n.survey-generator__header__content__info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.survey-generator__header__content__info .left-arrow {\n  width: 30px;\n  height: 40px;\n  margin-right: 40px;\n}\n.survey-generator__header__content__info p {\n  font-weight: 400;\n  font-size: 1.3rem;\n}\n.survey-generator__header__content__control-panel__publish-btn {\n  background-color: black;\n  padding: 0.7em 1em;\n  color: white;\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-family: \"Times New Roman\", Times, serif;\n}\n.survey-generator__questionTypes {\n  grid-area: questionTypes;\n  border-right: 1px solid #e2e9ef;\n}\n.survey-generator__questionTypes__title {\n  text-transform: uppercase;\n  font-weight: 900;\n  background-color: #EEEEEE;\n  padding: 1em 0.8em;\n}\n.survey-generator__questionTypes__type {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.survey-generator__questionTypes__type img {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  top: 4px;\n}\n.survey-generator__questionTypes__type p {\n  color: #161616;\n  font-weight: bold;\n  font-weight: 400;\n}\n.survey-generator__main {\n  grid-area: main;\n  background-color: #F6F8FA;\n  padding-inline: 2em;\n  padding-top: 4em;\n  overflow-y: auto;\n}\n.survey-generator__main__content {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n.survey-generator__main__content__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  padding: 1em 1.5em;\n}\n.survey-generator__main__content__header__title {\n  display: flex;\n  flex-direction: column;\n}\n.survey-generator__main__content__header__save {\n  margin-right: 20px;\n  background: #2A91F8;\n  color: white;\n  padding: 0.9em 1.5em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.survey-generator__main__content__header__save img {\n  width: 30px;\n  height: 30px;\n}\n.survey-generator__main__content__questions {\n  width: 100%;\n  background-color: white;\n}\n.survey-generator__main__content__questions__question {\n  width: 100%;\n  display: flex;\n  background-color: white;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  padding: 0.2em 0.8em;\n  flex-direction: column;\n}\n.survey-generator__main__content__questions__question__about {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  background-color: white;\n}\n.survey-generator__main__content__questions__question__about__question-num {\n  margin-right: 10px;\n}\n.survey-generator__main__content__questions__question__about__input {\n  outline: none;\n  width: 100%;\n  height: 30%;\n  border: 0;\n  padding: 7px 0;\n  border-bottom: 1px solid white;\n  font-size: 1.6rem;\n  font-family: \"Lato\", Arial, sans-serif;\n  color: #333;\n  letter-spacing: 1px;\n}\n.survey-generator__main__content__questions__question__about__input:focus {\n  outline: none;\n}\n.survey-generator__main__content__questions__question__about__footer {\n  margin-top: 15px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  background-color: white;\n  padding-right: 1em;\n}\n.survey-generator__main__content__questions__question__about__footer img {\n  width: 25px;\n  height: 25px;\n}\n.survey-generator__main__content__questions__question__about__footer__type-badge {\n  border-radius: 3rem;\n  padding: 0.6em 1.5em;\n  color: white;\n  background-color: green;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n.survey-generator__main__content__questions__question__about__footer__type-badge--text {\n  background-color: #2ECC71;\n}\n.survey-generator__main__content__questions__question__about__footer__type-badge--number {\n  background-color: #3498DB;\n}\n.survey-generator__properties {\n  grid-area: Properties;\n  padding-top: 4em;\n}\n.survey-generator__properties__title {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  padding: 0.5em 1.3em;\n  font-weight: 700;\n  font-size: 2rem;\n  color: black;\n  letter-spacing: 1px;\n  line-height: 102%;\n}\n.survey-generator__properties__title__subtitle {\n  font-size: 1rem;\n  font-style: italic;\n  color: grey;\n  font-weight: 300;\n  letter-spacing: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnZleS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsZ0dBQUE7QUFFUjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EseUNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBQVI7QUFJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQUEsWUFBQTtFQUNBLHdoQkFDQTtBQUZKO0FBV0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQVRSO0FBVVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFSWjtBQVNZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFQaEI7QUFRZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTnBCO0FBUWdCO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQU5wQjtBQVVnQjtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7QUFScEI7QUFjSTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7QUFaUjtBQWFRO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFYWjtBQWNRO0VBQ0ksaUNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQVpaO0FBYVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQVhoQjtBQWFZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFYaEI7QUFlSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWJSO0FBY1E7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWlo7QUFhWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVhoQjtBQVlnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQVZwQjtBQVlnQjtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBVnBCO0FBV29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFUeEI7QUFhWTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtBQVhoQjtBQVlnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBVnBCO0FBV29CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFUeEI7QUFVd0I7RUFDSSxrQkFBQTtBQVI1QjtBQVV3QjtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBUjVCO0FBUzRCO0VBQ0ksYUFBQTtBQVBoQztBQVV3QjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVI1QjtBQVM0QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBUGhDO0FBUzRCO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFQaEM7QUFRZ0M7RUFDSSx5QkFBQTtBQU5wQztBQVFnQztFQUNJLHlCQUFBO0FBTnBDO0FBZUk7RUFDSSxxQkFBQTtFQUVBLGdCQUFBO0FBZFI7QUFlUTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWRaO0FBZVk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWJoQiIsImZpbGUiOiJzdXJ2ZXktZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4udG9hc3R7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbToyZW07XG4gICAgcmlnaHQ6NWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMTdweCAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgei1pbmRleDogMzAwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGJveC1zaGFkb3c6IDAgN3B4IDE4cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIHdpZHRoOjA7XG4gICAgb3BhY2l0eTowO1xuICAgIHRyYW5zaXRpb246YWxsIDJzIGxpbmVhcjtcbiAgICAvL2NvbG9yOmJsYWNrO1xuICAgICYtLXZpc2libGUge1xuICAgICAgICB3aWR0aDogMTJlbTtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAvL2NvbG9yOndoaXRlO1xuICAgIH1cbn1cbi5zdXJ2ZXktZ2VuZXJhdG9yIHtcbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgd2lkdGg6MTAwdnc7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGdyaWQ7IFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsMWZyKTsgXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSwxZnIpOyBcbiAgICBnYXA6IDBweCAwcHg7IFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIFwiXG4gICAgXCJxdWVzdGlvblR5cGVzIG1haW4gbWFpbiBtYWluIG1haW4gUHJvcGVydGllcyBQcm9wZXJ0aWVzXCJcbiAgICBcInF1ZXN0aW9uVHlwZXMgbWFpbiBtYWluIG1haW4gbWFpbiBQcm9wZXJ0aWVzIFByb3BlcnRpZXNcIlxuICAgIFwicXVlc3Rpb25UeXBlcyBtYWluIG1haW4gbWFpbiBtYWluIFByb3BlcnRpZXMgUHJvcGVydGllc1wiXG4gICAgXCJxdWVzdGlvblR5cGVzIG1haW4gbWFpbiBtYWluIG1haW4gUHJvcGVydGllcyBQcm9wZXJ0aWVzXCJcbiAgICBcInF1ZXN0aW9uVHlwZXMgbWFpbiBtYWluIG1haW4gbWFpbiBQcm9wZXJ0aWVzIFByb3BlcnRpZXNcIlxuICAgIFwicXVlc3Rpb25UeXBlcyBtYWluIG1haW4gbWFpbiBtYWluIFByb3BlcnRpZXMgUHJvcGVydGllc1wiXG4gICAgXCJxdWVzdGlvblR5cGVzIG1haW4gbWFpbiBtYWluIG1haW4gUHJvcGVydGllcyBQcm9wZXJ0aWVzXCJcbiAgICBcInF1ZXN0aW9uVHlwZXMgbWFpbiBtYWluIG1haW4gbWFpbiBQcm9wZXJ0aWVzIFByb3BlcnRpZXNcIjsgXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgICAgIHBhZGRpbmc6MC44ZW0gMWVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NCQ0RDQztcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgI2UzZTllZjtcbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgJl9faW5mbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAubGVmdC1hcnJvdyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmX19jb250cm9sLXBhbmVsIHtcbiAgICAgICAgICAgICAgICAmX19wdWJsaXNoLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAuN2VtIDFlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fcXVlc3Rpb25UeXBlcyB7XG4gICAgICAgIGdyaWQtYXJlYTogcXVlc3Rpb25UeXBlcztcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UyZTllZjtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFRUVFRUUgO1xuICAgICAgICAgICAgcGFkZGluZzogMWVtIDAuOGVtO1xuXG4gICAgICAgIH1cbiAgICAgICAgJl9fdHlwZSB7ICBcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDo1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBjb2xvcjojMTYxNjE2O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fbWFpbiB7XG4gICAgICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjhGQTtcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6NGVtO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgJl9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoxZW0gMS41ZW07XG4gICAgICAgICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmX19zYXZlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMkE5MUY4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowLjllbSAxLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmX19xdWVzdGlvbnMge1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgJl9fcXVlc3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuMSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MC4yZW0gMC44ZW07XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICZfX2Fib3V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX3F1ZXN0aW9uLW51bSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmX19pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAwOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX190eXBlLWJhZGdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czozcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAuNmVtIDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYtLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQ0M3MTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLS1udW1iZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThEQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19wcm9wZXJ0aWVzIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBQcm9wZXJ0aWVzO1xuICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IzAwM2NmZjtcbiAgICAgICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBwYWRkaW5nOjAuNWVtIDEuM2VtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDIlO1xuICAgICAgICAgICAgJl9fc3VidGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 394:
/*!**********************************************************!*\
  !*** ./src/app/survey-viewer/survey-viewer.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyViewerComponent": () => (/* binding */ SurveyViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../survey.service */ 5427);



class SurveyViewerComponent {
    constructor(route, surveyService) {
        this.route = route;
        this.surveyService = surveyService;
    }
    ngOnInit() {
        const sid = this.route.snapshot.paramMap.get('survey_id');
        if (!sid) {
            alert("unauthorised survey id required");
            return;
        }
        this.survey_id = sid;
        console.log(this.survey_id);
        this.surveyService.getQuestionsForSurvey(this.survey_id)
            .subscribe((data) => {
            console.log(data);
        }, (err) => {
            console.log(err);
            if (err.status == 400) {
                alert("survey id invalid");
            }
        });
    }
}
SurveyViewerComponent.ɵfac = function SurveyViewerComponent_Factory(t) { return new (t || SurveyViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_survey_service__WEBPACK_IMPORTED_MODULE_0__.SurveyService)); };
SurveyViewerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SurveyViewerComponent, selectors: [["app-survey-viewer"]], decls: 2, vars: 0, template: function SurveyViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "survey-viewer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXJ2ZXktdmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5427:
/*!***********************************!*\
  !*** ./src/app/survey.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyService": () => (/* binding */ SurveyService)
/* harmony export */ });
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseUrl */ 8447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);



class SurveyService {
    constructor(http) {
        this.http = http;
        this.currSurvey = null;
    }
    fetchAllSurveys() {
        return this.http.get(`${_baseUrl__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}//survey/fetch/all`);
        //.pipe(catchError(this.handleError));
    }
    createNewSurvey(name) {
        const body = JSON.stringify({ name });
        const headers = { "content-type": "application/json" };
        return this.http.post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/survey/new`, body, {
            headers,
            responseType: 'json',
        });
    }
    publishSurvey(questions) {
        const body = JSON.stringify({ questions });
        const headers = { "content-type": "application/json" };
        return this.http.post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/question/new/batch`, body, {
            headers,
            responseType: 'json',
        });
    }
    getQuestionsForSurvey(survey_id) {
        const headers = { "content-type": "application/json" };
        return this.http.get(`${_baseUrl__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/question/fetch/all/bySurvey/${survey_id}`, {
            headers,
            responseType: 'json',
        });
    }
    setCurrSurvey(currSurvey) {
        this.currSurvey = currSurvey;
    }
    getCurrSurvey() {
        return this.currSurvey;
    }
}
SurveyService.ɵfac = function SurveyService_Factory(t) { return new (t || SurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SurveyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SurveyService, factory: SurveyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6461:
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": 708
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6461;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3208), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map