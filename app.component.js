"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var top_questions_component_1 = require('./top-questions.component');
var banner_component_1 = require('./banner.component');
var logo_component_1 = require('./logo.component');
var search_component_1 = require('./search.component');
var full_view_component_1 = require('./full-view.component');
var AppComponent = (function () {
    function AppComponent() {
        // get this question by its id from REST API
        this.question = {
            id: 1,
            ques: "How to do GIS?",
            full_question: "How to use open layer",
            ques_votes: 2,
            ques_ur_vote: 0,
            ques_likes: 2,
            ques_isLiked: false,
            ques_askedBy: "Ds",
            answers: [{ val: "A1", votes: 1, ur_vote: -1, by: "Dibu" }, { val: "A2", votes: 1, ur_vote: -1, by: "Himu" }]
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <br>\n  <div class=\"container\">\n<logo></logo>\n<search-bar style=\"float:right\"></search-bar>\n<br>\n<br>\n<banner></banner>\n<br>\n  Top Questions \n\n  <br>\n\n<top-questions></top-questions>\n  <full-view \n  [question]=\"question\"\n  ></full-view>\n</div>\n  ",
            directives: [top_questions_component_1.TopQuesComponent, banner_component_1.BannerComponent, logo_component_1.LogoComponent, search_component_1.SearchComponent, full_view_component_1.FullViewComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map