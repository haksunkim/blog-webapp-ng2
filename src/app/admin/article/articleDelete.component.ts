import { Component } from "@angular/core";
import { ArticleRepository } from "../../model/article.repository";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  template: ""
})
export class ArticleDeleteComponent {
  constructor(private articleRepository: ArticleRepository, private route: ActivatedRoute, private router: Router) {
    articleRepository.deleteArticle(route.snapshot.params["id"]);
    router.navigateByUrl("/admin/articles");
  }
}
