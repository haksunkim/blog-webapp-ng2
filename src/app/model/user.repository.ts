import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { RestDataSource } from "./rest.datasource";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserRepository {
  private users: User[] = [];

  constructor(private datasource: RestDataSource) {
    datasource.getUsers().subscribe(data => {
      this.users = data
    });
  }

  getUsers() : User[] {
    return this.users;
  }
}
