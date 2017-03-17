import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { Tag } from './tag.model';
import { TagRepository } from './tag.repository';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ArticleRepository {
  private articles: Article[] = new Array<Article>();

  constructor(private datasource: RestDataSource, private tagRepository: TagRepository) {
    datasource.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  getArticles(tag: string = null): Article[] {
    if (this.articles instanceof Array) {
      return this.articles.filter(a => tag == null || this.hasTag(a.tags, tag));
    } else {
      return [];
    }
  }

  private hasTag(tags: Tag[], tagname: string): boolean {
    for (const tag of tags) {
      if (tag['name'] === tagname) {
        return true;
      }
    }
    return false;
  }

  getArticle(id: number): Article {
    return this.articles.find(a => a.id === id);
  }

  saveArticle(article: Article) {
    if (article.id == null || article.id === 0) {
      this.datasource.saveArticle(article).subscribe(a => {
        if (this.articles instanceof Array) {
          this.articles.push(a);
        } else {
          this.articles = [a];
        }
      });
    } else {
      this.datasource.updateArticle(article).subscribe(a => {
        this.articles.splice(this.articles.findIndex(a => a.id === article.id), 1, article);
      });
    }
  }

  deleteArticle(id: number) {
    const article: Article = this.articles.find(a => a.id === id);
    const today = new Date();
    article.deletedAt = today.toISOString();
    article.deletedBy = 0;

    this.saveArticle(article);
  }
}
