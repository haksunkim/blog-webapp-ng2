import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { ArticleDetailsComponent } from "./articleDetails.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TruncatePipe } from "./pipes/truncate.pipe";

@NgModule({
  imports: [ BrowserModule, RouterModule ],
  declarations: [ BlogComponent, ArticleDetailsComponent, TruncatePipe ],
  exports: [ BlogComponent, ArticleDetailsComponent ]
})
export class BlogModule {}
