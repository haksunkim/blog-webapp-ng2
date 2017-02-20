import { Component } from "@angular/core";
import { ArticleRepository } from "../model/article.repository";
import { Article } from "../model/article.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: "articleDetails.component.html"
})
export class ArticleDetailsComponent {
  article: Article = new Article();

  constructor(private articleRepository: ArticleRepository, private router: Router, private activeRoute: ActivatedRoute) {
    Object.assign(this.article, articleRepository.getArticle(activeRoute.snapshot.params["id"]));
  }
}
