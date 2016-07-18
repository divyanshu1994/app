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
var VoterComponent = (function () {
    function VoterComponent() {
    }
    VoterComponent.prototype.OnUpClick = function () {
        if (this.ur_vote != 1) {
            this.votes++;
            this.ur_vote++;
        }
    };
    VoterComponent.prototype.OnDownClick = function () {
        if (this.ur_vote != -1) {
            this.votes--;
            this.ur_vote--;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VoterComponent.prototype, "votes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VoterComponent.prototype, "ur_vote", void 0);
    VoterComponent = __decorate([
        core_1.Component({
            selector: 'voter',
            template: "\n    <div style=\"width:20px;text-align:center\">\n    <i class=\"glyphicon glyphicon-menu-up pointer\" \n    (click)=\"OnUpClick()\"\n    [class.orange]=\"ur_vote==1\"></i>\n    {{votes}}\n       <i class=\"glyphicon glyphicon-menu-down pointer\" \n       (click)=\"OnDownClick()\"\n       [class.orange]=\"ur_vote==-1\"></i>\n    </div>\n    ",
            styles: ["\n    .orange\n    {\n        color:orange\n\n    }\n    .pointer\n    {\n        cursor:pointer\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], VoterComponent);
    return VoterComponent;
}());
exports.VoterComponent = VoterComponent;
//# sourceMappingURL=voter.component.js.map