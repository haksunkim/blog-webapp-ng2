import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { ArticleDetailsComponent } from "./articleDetails.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TruncatePipe } from "./pipes/truncate.pipe";
import { SidebarComponent } from "../layout/sidebar.component";

@NgModule({
  imports: [ BrowserModule, RouterModule ],
  declarations: [ BlogComponent, ArticleDetailsComponent, TruncatePipe, SidebarComponent ],
  exports: [ BlogComponent, ArticleDetailsComponent ]
})
export class BlogModule {}
