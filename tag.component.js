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
var TagComponent = (function () {
    function TagComponent() {
        this.tag_name = "angular";
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TagComponent.prototype, "tag_name", void 0);
    TagComponent = __decorate([
        core_1.Component({
            selector: 'tag',
            template: "\n    <span class=\"tab\">{{tag_name}}</span>\n    ",
            styles: ["\n    .tab{\n        background-color:#E1ECF4;\n        color:blue;\n        font-size:10px;\n        padding:2px;\n        border:1px solid black;\n        border-radius:5px;\n        margin:3px;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], TagComponent);
    return TagComponent;
}());
exports.TagComponent = TagComponent;
//# sourceMappingURL=tag.component.js.map