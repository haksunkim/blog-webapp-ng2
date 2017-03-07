import { Injectable } from "@angular/core";
import { Tag } from "./tag.model";
import { TagRepository } from "./tag.repository";
import { RestDataSource } from "./rest.datasource";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TagResolver implements Resolve<Tag[]> {
  constructor(private tagRepository: TagRepository, private datasource: RestDataSource) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Tag[]> {
    return this.tagRepository.isUpdated ? this.datasource.getTags() : null;
  }
}
