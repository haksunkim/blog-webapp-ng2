import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { ArticleDetailsComponent } from "./blog/articleDetails.component";
import { ArticleResolver } from "./model/article.resolver";
import { AdminComponent } from "./admin/admin.component";
import { ArticleListComponent } from "./admin/article/articleList.component";
import { DeleteArticleGuard } from "./guard/deleteArticle.guard";
import { ArticleDeleteComponent } from "./admin/article/articleDelete.component";

const routes: Routes = [
    { path: "blog/tag/:tag", component: BlogComponent, resolve: { model: ArticleResolver }},
    { path: "blog/:id", component: ArticleDetailsComponent, resolve: { model: ArticleResolver } },
    { path: "blog", component: BlogComponent },
    { path: "admin/articles/:id/delete", component: ArticleDeleteComponent, resolve: { model: ArticleResolver }, canActivate: [ DeleteArticleGuard] },
    { path: "admin/articles", component: ArticleListComponent, resolve: { model: ArticleResolver } },
    { path: "admin", redirectTo: "admin/articles"},
    { path: "**", redirectTo: "blog" }
]

export const routing = RouterModule.forRoot(routes);
