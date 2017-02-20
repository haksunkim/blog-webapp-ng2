import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ArticleListComponent } from "./article/articleList.component";
import { AdminComponent } from "./admin.component";
import { MessageModule } from "../messages/message.module";
import { DeleteArticleGuard } from "../guard/deleteArticle.guard";
import { ArticleDeleteComponent } from "./article/articleDelete.component";

@NgModule({
  imports: [ BrowserModule, RouterModule, MessageModule ],
  declarations: [ AdminComponent, ArticleListComponent, ArticleDeleteComponent ],
  providers: [ DeleteArticleGuard ],
  exports: [ AdminComponent, ArticleListComponent ]
})
export class AdminModule {}
