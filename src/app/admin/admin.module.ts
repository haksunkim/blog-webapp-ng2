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
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "../guard/auth.guard";
import { AuthComponent } from "./auth/auth.component";
import { AdminSidebarComponent } from "../layout/adminSidebar.component";

@NgModule({
  imports: [ BrowserModule, RouterModule, MessageModule, FormsModule, CKEditorModule ],
  declarations: [ AdminComponent, ArticleListComponent, ArticleDeleteComponent, ArticleEditComponent, AuthComponent, AdminSidebarComponent ],
  providers: [ DeleteArticleGuard, AuthService, AuthGuard ],
  exports: [ AdminComponent, ArticleListComponent ]
})
export class AdminModule {}
