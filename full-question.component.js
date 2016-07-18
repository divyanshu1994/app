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
var voter_component_1 = require('./voter.component');
var heart_component_1 = require('./heart.component');
var FullQuestionComponent = (function () {
    function FullQuestionComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FullQuestionComponent.prototype, "question", void 0);
    FullQuestionComponent = __decorate([
        core_1.Component({
            selector: 'full-question',
            template: "\n   \n<div class=\"row main\">\n <h3>{{question.val}}</h3>\n    <hr>\n    <div class=\"params\">\n        <voter [votes]=\"question.ques_votes\" [ur_vote]=\"question.ques_your_vote\"></voter>\n        <br>\n        <heart [isLiked]=\"question.ques_isLiked\" [likes]=\"question.ques_likes\"></heart>\n     </div>\n<div class=\"question\">\n    {{question.full_question}}\n    <br>\n    <span class=\"by\">Asked By : {{question.ques_askedBy}}</span>\n</div>\n\n</div>\n    ",
            styles: ["\n.main\n{\n    width:100%;\n    padding:10px;\n\n\n}\n.params{\n    width:10%;\n    float:left;\n}\n.question\n{\n    width:90%;\n    float:left;\n}\n.by\n{\n    font-size:10px;\n    color:blue;\n    float:right;\n    margin-right:20px\n}\n"],
            directives: [voter_component_1.VoterComponent, heart_component_1.HeartComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FullQuestionComponent);
    return FullQuestionComponent;
}());
exports.FullQuestionComponent = FullQuestionComponent;
//# sourceMappingURL=full-question.component.js.map