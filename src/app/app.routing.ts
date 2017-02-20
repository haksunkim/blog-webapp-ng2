import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { ArticleDetailsComponent } from "./blog/articleDetails.component";
import { ArticleResolver } from "./model/article.resolver";

const routes: Routes = [
    { path: "blog/tag/:tag", component: BlogComponent, resolve: { model: ArticleResolver }},
    { path: "blog/:id", component: ArticleDetailsComponent, resolve: { model: ArticleResolver } },
    { path: "blog", component: BlogComponent },
    { path: "**", redirectTo: "blog" }
]

export const routing = RouterModule.forRoot(routes);
