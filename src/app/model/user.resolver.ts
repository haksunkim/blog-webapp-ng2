import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { UserRepository } from "./user.repository";
import { RestDataSource } from "./rest.datasource";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserResolver implements Resolve<User[]> {
  constructor(private userRepository: UserRepository, private datasource: RestDataSource) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<User[]> {
    return this.userRepository.getUsers().length == 0 ? this.datasource.getUsers() : null;
  }
}
