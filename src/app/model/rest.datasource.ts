import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Article } from "./article.model";
import "rxjs/add/operator/map";

const PROTOCOL: string = "http";
const PORT: number = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor (private http: Http) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
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
}
