import { Injectable } from "@angular/core";
import { RestDataSource } from "../../model/rest.datasource";
import { Observable } from "rxjs/Observable";
import { User } from "../../model/user.model";

@Injectable()
export class AuthService {
  public currentUser: User;

  constructor(private datasource: RestDataSource) {}

  authenticate(username: string, password: string) : Observable<boolean> {
    return this.datasource.authenitcate(username, password);
  }

  get authenticated() {
    return this.datasource.auth_token != null;
  }

  clear() {
    this.datasource.auth_token = null;
  }

  register(user: User): Observable<User> {
    return this.datasource.register(user);
  }
}
