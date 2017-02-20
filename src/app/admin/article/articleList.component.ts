import { Component } from "@angular/core";
import { Article } from "../../model/article.model";
import { ArticleRepository } from "../../model/article.repository";

@Component({
  moduleId: module.id,
  templateUrl: "articleList.component.html"
})
export class ArticleListComponent {
  constructor(private articleRepository: ArticleRepository) {}

  getArticles() : Article[] {
    return this.articleRepository.getArticles();
  }
}
