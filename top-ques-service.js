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
var TopQuesService = (function () {
    function TopQuesService() {
    }
    TopQuesService.prototype.getTopQues = function () {
        return [
            {
                question: "Soil test for clay",
                full_question: "How to do soil tets",
                askedBy: "ds",
                votes: "5",
                answers: "10",
                tags: ["soil", "test"]
            },
            {
                question: "How to use staad",
                full_question: "How to do soil tets",
                askedBy: "hs",
                votes: "7",
                answers: "70",
                tags: ["staad", "software"]
            }
        ];
    };
    TopQuesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TopQuesService);
    return TopQuesService;
}());
exports.TopQuesService = TopQuesService;
//# sourceMappingURL=top-ques-service.js.map