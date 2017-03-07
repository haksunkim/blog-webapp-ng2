import { Injectable } from "@angular/core";
import { Tag } from "./tag.model";
import { RestDataSource } from "./rest.datasource";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TagRepository {
  private tags: Tag[] = new Array<Tag>();
  public isUpdated: boolean = false;

  constructor(private datasource: RestDataSource) {
    datasource.getTags().subscribe(data => {
      this.tags = data;
    });
  }

  getTags(): Observable<Tag[]> {
    return this.datasource.getTags();
  }

  getTagByName(name: string) : Tag {
    return this.tags.find(t => t.name == name);
  }
}
