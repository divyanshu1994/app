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
var HeartComponent = (function () {
    function HeartComponent() {
    }
    HeartComponent.prototype.OnHeartClicked = function () {
        this.isLiked = !this.isLiked;
        if (this.isLiked) {
            this.likes++;
        }
        else {
            this.likes--;
        }
        //TODO
        //change backend1
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HeartComponent.prototype, "isLiked", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HeartComponent.prototype, "likes", void 0);
    HeartComponent = __decorate([
        core_1.Component({
            selector: 'heart',
            template: "\n    <div >\n        <i class=\"glyphicon pointer\"\n        [class.glyphicon-heart]=\"true\"\n        [class.red]=\"isLiked\"\n        (click)=\"OnHeartClicked()\"\n        ></i>\n        {{likes}}\n    </div>\n    ",
            styles: ["\n    .red\n    {\n        color:red;\n\n    }\n    .pointer\n    {\n        cursor:pointer\n    }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HeartComponent);
    return HeartComponent;
}());
exports.HeartComponent = HeartComponent;
//# sourceMappingURL=heart.component.js.map