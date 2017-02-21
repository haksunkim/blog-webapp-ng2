import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Article } from "./article.model";
import "rxjs/add/operator/map";

const PROTOCOL: string = "http";
const PORT: number = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor (private http: Http) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenitcate(username: string, password: string): Observable<boolean> {
    this.auth_token = "testing";

    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  getArticles() : Observable<Article[]> {
    return this.sendRequest(RequestMethod.Get, "articles");
  }

  private sendRequest(verb: RequestMethod, url: string, body?: Article, auth: boolean = false) : Observable<Article[] | Article> {
    let request = new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body
    });
    return this.http.request(request).map(response => response.json());
  }

  saveArticle(article: Article) : Observable<Article> {
    return this.sendRequest(RequestMethod.Post, "articles", article, true);
  }

  updateArticle(article: Article) : Observable<Article> {
    return this.sendRequest(RequestMethod.Put, `articles/${article.id}`, article, true);
  }
}
