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
var article_repository_1 = require("../model/article.repository");
var article_model_1 = require("../model/article.model");
var router_1 = require("@angular/router");
var ArticleDetailsComponent = (function () {
    function ArticleDetailsComponent(articleRepository, router, activeRoute) {
        this.articleRepository = articleRepository;
        this.router = router;
        this.activeRoute = activeRoute;
        this.article = new article_model_1.Article();
        Object.assign(this.article, articleRepository.getArticle(activeRoute.snapshot.params["id"]));
    }
    ArticleDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "articleDetails.component.html"
        }), 
        __metadata('design:paramtypes', [article_repository_1.ArticleRepository, router_1.Router, router_1.ActivatedRoute])
    ], ArticleDetailsComponent);
    return ArticleDetailsComponent;
}());
exports.ArticleDetailsComponent = ArticleDetailsComponent;
//# sourceMappingURL=articleDetails.component.js.map