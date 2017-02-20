import { Component } from "@angular/core";
import { Article } from "../model/article.model";
import { ArticleRepository } from "../model/article.repository";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: "blog.component.html"
})
export class BlogComponent {

  private selectedTag: string = null;

  constructor(private articleRepository: ArticleRepository, private router: Router, private activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => { this.selectedTag = params["tag"] });
  }

  getArticles() : Article[] {
    return this.articleRepository.getArticles(this.selectedTag);
  }
}
