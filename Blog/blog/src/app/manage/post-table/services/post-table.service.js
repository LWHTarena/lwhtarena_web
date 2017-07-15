"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
var PostTableService = (function () {
    function PostTableService(http) {
        this.http = http;
        this.delURL = "";
        this.toEditURL = "";
    }
    PostTableService.prototype.getPostTable = function (dataURL) {
        return this.http.get(dataURL)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error || 'Server error'); });
    };
    PostTableService.prototype.del = function (postId) {
        return this.http.delete(this.delURL)
            .map(function (res) { return res.json(); });
    };
    PostTableService.prototype.toEdit = function (postId) {
        return this.http.get(this.toEditURL)
            .map(function (res) { return res.json(); });
    };
    PostTableService = __decorate([
        core_1.Injectable()
    ], PostTableService);
    return PostTableService;
}());
exports.PostTableService = PostTableService;
//# sourceMappingURL=post-table.service.js.map