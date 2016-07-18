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
var BannerComponent = (function () {
    function BannerComponent() {
    }
    BannerComponent = __decorate([
        core_1.Component({
            selector: 'banner',
            template: "\n<div class=\"banner-box\">\n    This site has a huge collection of questions\n    <img src=\"images/question.png\" style=\"width:100px;height:80px;float:right\">\n    <br>\n    <button class=\"btn btn-primary\">Sign Up</button>\n</div>\n",
            styles: ["\n.banner-box\n{\n    margin:auto;\n    padding: 20px;\n    border:1px solid #ccc;\n    background-color:#fafafa;\n    height:120px;\n    width:100%;\n}\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], BannerComponent);
    return BannerComponent;
}());
exports.BannerComponent = BannerComponent;
//# sourceMappingURL=banner.component.js.map