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
var article_repository_1 = require("./article.repository");
var rest_datasource_1 = require("./rest.datasource");
var ArticleResolver = (function () {
    function ArticleResolver(articleRepository, dataSource) {
        this.articleRepository = articleRepository;
        this.dataSource = dataSource;
    }
    ArticleResolver.prototype.resolve = function (route, state) {
        return this.articleRepository.getArticles().length == 0 ? this.dataSource.getArticles() : null;
    };
    ArticleResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [article_repository_1.ArticleRepository, rest_datasource_1.RestDataSource])
    ], ArticleResolver);
    return ArticleResolver;
}());
exports.ArticleResolver = ArticleResolver;
//# sourceMappingURL=article.resolver.js.map