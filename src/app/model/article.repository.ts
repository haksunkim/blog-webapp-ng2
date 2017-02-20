import { Injectable } from "@angular/core";
import { Article } from "./article.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ArticleRepository {
  private articles: Article[] = [];
  private tags: string[] = [];

  constructor(private datasource: RestDataSource) {
    datasource.getArticles().subscribe(data => {
      this.articles = data;
      let fullTags: string[] = [];

      for (let article of this.articles) {
        for (let tag of article.tags) {
          fullTags.push(tag);
        }
      }
      
      for (let tag of fullTags) {
        if (this.tags.indexOf(tag) == -1) {
          this.tags.push(tag);
        }
      }
    });
  }

  getArticles(tag: string = null) : Article[] {
    return this.articles.filter(a => tag == null || a.tags.indexOf(tag) != -1);
  }

  getArticle(id: number) : Article {
    return this.articles.find(a => a.id == id);
  }

  getTags() : string[] {
    return this.tags;
  }
}
