import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ArticleListComponent } from "./article/articleList.component";
import { AdminComponent } from "./admin.component";
import { MessageModule } from "../messages/message.module";
import { DeleteArticleGuard } from "../guard/deleteArticle.guard";
import { ArticleDeleteComponent } from "./article/articleDelete.component";
import { FormsModule } from "@angular/forms";
import { ArticleEditComponent } from "./article/articleEdit.component";
import { CKEditorModule } from "ng2-ckeditor";

@NgModule({
  imports: [ BrowserModule, RouterModule, MessageModule, FormsModule, CKEditorModule ],
  declarations: [ AdminComponent, ArticleListComponent, ArticleDeleteComponent, ArticleEditComponent ],
  providers: [ DeleteArticleGuard ],
  exports: [ AdminComponent, ArticleListComponent ]
})
export class AdminModule {}
