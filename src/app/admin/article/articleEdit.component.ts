import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Article } from "../../model/article.model";
import { ArticleRepository } from "../../model/article.repository";

@Component({
  moduleId: module.id,
  templateUrl: "articleEdit.component.html"
})
export class ArticleEditComponent {
  editing: boolean = false;
  article: Article = new Article();

  constructor(private articleRepository: ArticleRepository, private route: ActivatedRoute, private router: Router) {
    this.editing = route.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.article = articleRepository.getArticle(route.snapshot.params["id"]));
    }
  }

  save(form: NgForm) {
    this.articleRepository.saveArticle(this.article);
    this.router.navigateByUrl("/admin/articles");
  }
}
