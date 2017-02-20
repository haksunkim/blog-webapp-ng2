import { Injectable } from "@angular/core";
import { Article } from "./article.model";
import { ArticleRepository } from "./article.repository";
import { RestDataSource } from "./rest.datasource";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArticleResolver {
  constructor(private articleRepository: ArticleRepository, private dataSource: RestDataSource) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Article[]> {
    return this.articleRepository.getArticles().length == 0 ? this.dataSource.getArticles() : null;
  }
}
