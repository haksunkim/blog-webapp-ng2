import { Component } from "@angular/core";
import { Tag } from "../model/tag.model";
import { Article } from "../model/article.model";
import { TagRepository } from "../model/tag.repository";

@Component({
  selector: "app-sidebar",
  moduleId: module.id,
  templateUrl: "sidebar.component.html"
})
export class SidebarComponent {
  public tags: Tag[] = new Array<Tag>();

  constructor(private tagRepository: TagRepository) {
    tagRepository.getTags().subscribe(data => {
      this.tags = data;
    });
  }
}
