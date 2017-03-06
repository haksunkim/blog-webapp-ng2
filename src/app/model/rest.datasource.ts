import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request, Jsonp, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Article } from "./article.model";
import { User } from "./user.model";
import { Role } from "./role.model";
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
    return this.http.request(new Request({
      method: RequestMethod.Post,
      url: this.baseUrl + "login",
      body: `{ "username": "${username}", "password": "${password}" }`
    })).map(response => {
      let r = response.json();
      this.auth_token = r.success ? r.token : null;
      return r.success;
    });
  }

  getArticles() : Observable<Article[]> {
    return this.sendRequest(RequestMethod.Get, "articles");
  }

  private sendRequest(verb: RequestMethod, url: string, body?: Article, auth: boolean = false) : Observable<Article[] | Article | User | User[] | Role | Role[]> {
    let request = new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body
    });
    if (auth && this.auth_token != null) {
      request.headers.set("Authorization", `Bearer ${this.auth_token}`);
    }
    return this.http.request(request).map(response => response.json());
  }

  saveArticle(article: Article) : Observable<Article> {
    return this.sendRequest(RequestMethod.Post, "articles", article, true);
  }

  updateArticle(article: Article) : Observable<Article> {
    return this.sendRequest(RequestMethod.Put, `articles/${article.id}`, article, true);
  }

  register(user: User) : Observable<User> {
    return this.sendRequest(RequestMethod.Post, "register", user);
  }

  getRoles() : Observable<Role[]> {
    return this.sendRequest(RequestMethod.Get, `roles`);
  }
}
