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
var params_component_1 = require('./params.component');
var tag_component_1 = require('./tag.component');
var QuestionComponent = (function () {
    function QuestionComponent() {
        this.question = "How to write angular?";
        this.askedBy = "divyanshu";
        this.votes = 5;
        this.answers = 10;
        this.tags = ["angualr2", "javacript", "web"];
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], QuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], QuestionComponent.prototype, "askedBy", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], QuestionComponent.prototype, "votes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], QuestionComponent.prototype, "answers", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], QuestionComponent.prototype, "tags", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'question',
            template: "\n    <div class=\"box\">\n    <div class=\"params\">\n        <params [votes]=\"votes\" [answers]=\"answers\"></params>\n    </div>\n\n    <div class=\"question\">\n    {{question}}\n    <br>\n        <tag *ngFor=\"let t of tags\" [tag_name]=\"t\"></tag>\n    <br>\n    <span style=\"color:black;font-size:10px;float:right\">Asked By : {{askedBy}}</span>\n\n    </div>\n    </div>\n    ",
            styles: ["\n    .box{\n        padding:10px;\n        border:1px solid #ccc;\n        margin-top:10px;\n        width:60%;\n        height:80px;\n\n    }\n    .params\n    {\n        width:30%;\n        float:left;\n        font-size:12px;\n        \n    }\n    .question{\n        width:70%;\n        float:left;\n        padding-left:10px;\n        color:blue;\n    }\n    "],
            directives: [params_component_1.ParamsComponent, tag_component_1.TagComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map