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
var question_component_1 = require('./question.component');
var top_ques_service_1 = require('./top-ques-service');
var Rx_1 = require('rxjs/Rx');
var TopQuesComponent = (function () {
    function TopQuesComponent(_topQuesService) {
        this._topQuesService = _topQuesService;
    }
    TopQuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var o = Rx_1.Observable.of(this._topQuesService.getTopQues())
            .subscribe(function (x) {
            _this.questions = x;
            console.log(x);
        });
    };
    TopQuesComponent = __decorate([
        core_1.Component({
            selector: 'top-questions',
            template: "\n<question *ngFor=\"let q of questions\"\n    [question]=\"q.question\" [askedBy]=\"q.askedBy\"\n     [votes]=\"q.votes\" [answers]=\"q.answers\" [tags]=\"q.tags\"\n    >\n    </question>\n\n",
            directives: [question_component_1.QuestionComponent],
            providers: [top_ques_service_1.TopQuesService]
        }), 
        __metadata('design:paramtypes', [top_ques_service_1.TopQuesService])
    ], TopQuesComponent);
    return TopQuesComponent;
}());
exports.TopQuesComponent = TopQuesComponent;
//# sourceMappingURL=top-questions.component.js.map