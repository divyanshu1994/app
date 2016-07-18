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
var FullAnswerComponent = (function () {
    function FullAnswerComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FullAnswerComponent.prototype, "answers", void 0);
    FullAnswerComponent = __decorate([
        core_1.Component({
            selector: 'full-answer',
            template: "\n\n<div *ngFor=\"let answer of answers\" class=\"row main\">\n\n\n    <div class=\"params\">\n        <voter [votes]=\"answer.votes\" [ur_vote]=\"answer.ur_vote\"></voter>\n     </div>\n<div class=\"answer\">\n    {{answer.val}}\n    <br>\n  <span class=\"by\">Answered By :  {{answer.by}}</span>\n</div>\n\n</div>\n",
            styles: ["\n.main\n{\n    width:100%;\n    padding:10px;\n    border:1px solid #ccc;\n    background-color:#fafafa;\n    margin-top:20px;\n\n}\n.params{\n    width:10%;\n    float:left;\n}\n.answer\n{\n    width:90%;\n    float:left;\n}\n.by\n{\n    font-size:10px;\n    color:blue;\n    float:right;\n    margin-right:20px\n}\n"],
            directives: [voter_component_1.VoterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FullAnswerComponent);
    return FullAnswerComponent;
}());
exports.FullAnswerComponent = FullAnswerComponent;
//# sourceMappingURL=full-answer.component.js.map