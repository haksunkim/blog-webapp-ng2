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
var core_1 = require("@angular/core");
var rest_datasource_1 = require("./rest.datasource");
var ArticleRepository = (function () {
    function ArticleRepository(datasource) {
        var _this = this;
        this.datasource = datasource;
        this.articles = [];
        this.tags = [];
        datasource.getArticles().subscribe(function (data) {
            _this.articles = data;
            var fullTags = [];
            for (var _i = 0, _a = _this.articles; _i < _a.length; _i++) {
                var article = _a[_i];
                for (var _b = 0, _c = article.tags; _b < _c.length; _b++) {
                    var tag = _c[_b];
                    fullTags.push(tag);
                }
            }
            for (var _d = 0, fullTags_1 = fullTags; _d < fullTags_1.length; _d++) {
                var tag = fullTags_1[_d];
                if (_this.tags.indexOf(tag) == -1) {
                    _this.tags.push(tag);
                }
            }
        });
    }
    ArticleRepository.prototype.getArticles = function (tag) {
        if (tag === void 0) { tag = null; }
        return this.articles.filter(function (a) { return tag == null || a.tags.indexOf(tag) != -1; });
    };
    ArticleRepository.prototype.getArticle = function (id) {
        return this.articles.find(function (a) { return a.id == id; });
    };
    ArticleRepository.prototype.getTags = function () {
        return this.tags;
    };
    ArticleRepository = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [rest_datasource_1.RestDataSource])
    ], ArticleRepository);
    return ArticleRepository;
}());
exports.ArticleRepository = ArticleRepository;
//# sourceMappingURL=article.repository.js.map