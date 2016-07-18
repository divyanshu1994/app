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
var full_answer_component_1 = require('./full-answer.component');
var full_question_component_1 = require('./full-question.component');
var FullViewComponent = (function () {
    function FullViewComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FullViewComponent.prototype, "question", void 0);
    FullViewComponent = __decorate([
        core_1.Component({
            selector: 'full-view',
            template: "\n    <full-question\n     [question]=\"question\" \n    ></full-question>\n    <br>\n    <br>\n    <h4>{{question.answers.length}} Answers</h4>\n    <br>\n\n    <full-answer\n    [answers]=\"question.answers\"\n    ></full-answer>\n    ",
            directives: [full_answer_component_1.FullAnswerComponent, full_question_component_1.FullQuestionComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FullViewComponent);
    return FullViewComponent;
}());
exports.FullViewComponent = FullViewComponent;
//# sourceMappingURL=full-view.component.js.map