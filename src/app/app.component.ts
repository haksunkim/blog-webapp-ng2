import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { StaticContent } from "./model/staticContent.model";

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: "app.component.html",
})
export class AppComponent  {

  constructor (private titleService: Title, private staticContent: StaticContent) {
    // this sets title using title service and static content service
    titleService.setTitle(staticContent.blogTitle);
  }
}
