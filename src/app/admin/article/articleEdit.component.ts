import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Article } from "../../model/article.model";
import { Tag } from "../../model/tag.model";
import { ArticleRepository } from "../../model/article.repository";
import { TagRepository } from "../../model/tag.repository";

@Component({
  moduleId: module.id,
  templateUrl: "articleEdit.component.html"
})
export class ArticleEditComponent {
  editing: boolean = false;
  article: Article = new Article();
  tags_string: string = "";
  isTagChanged: boolean = false;

  constructor(private articleRepository: ArticleRepository, private tagRepository: TagRepository, private route: ActivatedRoute, private router: Router) {
    this.editing = route.snapshot.params["mode"] == "edit";
    this.tags_string = "";
    if (this.editing) {
      Object.assign(this.article = articleRepository.getArticle(route.snapshot.params["id"]));
      let tagNames: string[] = Array<string>();
      for (let tag of this.article.tags) {
        if (tag != null) {
          tagNames.push(tag["name"]);
        }
      }
      this.tags_string = tagNames.join(",");
    }
  }

  save(form: NgForm) {
    let today = new Date();
    if (this.editing) {
      this.article.modifiedAt = today.toISOString();
      this.article.modifiedBy = 0;
    } else {
      this.article.createdAt = today.toISOString();
      this.article.createdBy = 0;
    }
    if (this.isTagChanged || !this.editing) {
      this.tags_string.replace(" ,",",");
      this.article.tags = new Array<Tag>();
      let tags: string[] = this.tags_string.split(",");
      for (let tag of tags) {
        let tagMatch: Tag = this.tagRepository.getTagByName(tag);
        if (tagMatch != null) {
          this.article.tags.push(tagMatch);
        } else {
          this.article.tags.push(<Tag>{id:null,name:tag});
        }
      }
    }
    this.articleRepository.saveArticle(this.article);
    this.router.navigateByUrl("/admin/articles");
  }
}
