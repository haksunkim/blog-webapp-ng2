import { Component } from "@angular/core";
import { Article } from "../model/article.model";
import { ArticleRepository } from "../model/article.repository";

@Component({
  selector: "app-sidebar",
  moduleId: module.id,
  templateUrl: "sidebar.component.html"
})
export class SidebarComponent {
  constructor(private articleRepository: ArticleRepository) {

  }

  getTags() {
    return this.articleRepository.getTags();
  }
}
