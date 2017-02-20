import { Component } from "@angular/core";
import { Article } from "../../model/article.model";
import { ArticleRepository } from "../../model/article.repository";

@Component({
  moduleId: module.id,
  templateUrl: "articleList.component.html"
})
export class ArticleListComponent {
  showDeleted = false;

  constructor(private articleRepository: ArticleRepository) {}

  getArticles() : Article[] {
    let articles = [];
    if (this.showDeleted) {
      articles = this.articleRepository.getArticles();
    } else {
      articles = this.articleRepository.getArticles().filter(a => a.deletedAt == null || a.deletedAt == "");
    }
    return articles;
  }
}
