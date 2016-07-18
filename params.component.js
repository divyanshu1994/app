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
var ParamsComponent = (function () {
    function ParamsComponent() {
        this.votes = 0;
        this.answers = 0;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ParamsComponent.prototype, "votes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ParamsComponent.prototype, "answers", void 0);
    ParamsComponent = __decorate([
        core_1.Component({
            selector: 'params',
            template: "\n    <div width=\"10px\" style=\"text-align:center;float:left;width:50%\">\n        {{votes}}<br>\n        votes\n    </div>\n\n    \n    <div width=\"10px\" style=\"text-align:center;float:left;width:50%\">\n        {{answers}}<br>\n        answers\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ParamsComponent);
    return ParamsComponent;
}());
exports.ParamsComponent = ParamsComponent;
//# sourceMappingURL=params.component.js.map