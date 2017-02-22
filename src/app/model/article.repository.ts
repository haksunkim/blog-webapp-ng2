import { Injectable } from "@angular/core";
import { Article } from "./article.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ArticleRepository {
  private articles: Article[] = [];

  constructor(private datasource: RestDataSource) {
    datasource.getArticles().subscribe(data => {
      this.articles = data["_embedded"]["articles"];
    });
    console.log(this.articles);
  }

  getArticles(tag: string = null) : Article[] {
    if (this.articles instanceof Array) {
      return this.articles.filter(a => tag == null || a.tags.split(",").indexOf(tag) != -1);
    } else {
      return [];
    }
  }

  getArticle(id: number) : Article {
    return this.articles.find(a => a.id == id);
  }

  getTags() : string[] {
    let fullTags: string[] = [];
    let tags: string[] = [];

    for (let article of this.articles) {
      for (let tag of article.tags) {
        fullTags.push(tag);
      }
    }

    for (let tag of fullTags) {
      if (tags.indexOf(tag) == -1) {
        tags.push(tag);
      }
    }
    return tags;
  }

  saveArticle(article: Article) {
    if (article.id == null || article.id == 0) {
      this.datasource.saveArticle(article).subscribe(a => {
        if (this.articles instanceof Array) {
          this.articles.push(a);
        } else {
          this.articles = [a];
        }
      });
    } else {
      this.datasource.updateArticle(article).subscribe(a => {
        this.articles.splice(this.articles.findIndex(a => a.id == article.id), 1, article);
      });
    }
  }

  deleteArticle(id: number) {
    let article: Article = this.articles.find(a => a.id == id);
    let today = new Date();
    article.deletedAt = today.toISOString();
    article.deletedBy = 0;

    this.saveArticle(article);
  }
}
