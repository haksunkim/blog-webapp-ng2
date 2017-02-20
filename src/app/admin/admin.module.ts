import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ArticleListComponent } from "./article/articleList.component";
import { AdminComponent } from "./admin.component";

@NgModule({
  imports: [ BrowserModule, RouterModule ],
  declarations: [ AdminComponent, ArticleListComponent ],
  exports: [ AdminComponent, ArticleListComponent ]
})
export class AdminModule {}
