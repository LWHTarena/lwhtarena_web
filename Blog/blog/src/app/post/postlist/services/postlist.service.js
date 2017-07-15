"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var PostlistService = (function () {
    function PostlistService(http) {
        this.http = http;
        this.postListURL = 'src/mock-data/postlist-mock.json';
        this.postListSearchURL = 'src/mock-data/postlist-search-mock.json';
    }
    PostlistService.prototype.getPostList = function (searchText, page) {
        if (page === void 0) { page = 1; }
        var url = this.postListURL;
        var params = new http_1.URLSearchParams();
        if (searchText) {
            params.set('searchText', searchText);
            url = this.postListSearchURL;
            console.log("searchText=" + searchText);
        }
        params.set('page', String(page));
        return this.http
            .get(url, { search: params })
            .map(function (res) {
            var result = res.json();
            console.log(result);
            return result;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error || 'Server error'); });
    };
    PostlistService.prototype.getPostNumber = function () {
        return 0;
    };
    PostlistService.prototype.addPost = function (user) {
    };
    PostlistService.prototype.search = function () {
    };
    PostlistService = __decorate([
        core_1.Injectable()
    ], PostlistService);
    return PostlistService;
}());
exports.PostlistService = PostlistService;
//# sourceMappingURL=postlist.service.js.map