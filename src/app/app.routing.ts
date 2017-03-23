import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ArticleDetailsComponent } from './blog/articleDetails.component';
import { ArticleResolver } from './model/article.resolver';
import { UserResolver } from './model/user.resolver';
import { TagResolver } from './model/tag.resolver';
import { AdminComponent } from './admin/admin.component';
import { ArticleListComponent } from './admin/article/articleList.component';
import { DeleteArticleGuard } from './guard/deleteArticle.guard';
import { ArticleDeleteComponent } from './admin/article/articleDelete.component';
import { ArticleEditComponent } from './admin/article/articleEdit.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthComponent } from './admin/auth/auth.component';
import { UserListComponent } from './admin/user/userList.component';

const routes: Routes = [
    { path: 'blog/tag/:tag', component: BlogComponent, resolve: { model: ArticleResolver, user: UserResolver, tag: TagResolver } },
    { path: 'blog/:id', component: ArticleDetailsComponent, resolve: { model: ArticleResolver, user: UserResolver, tag: TagResolver } },
    { path: 'blog', component: BlogComponent, resolve: { model: ArticleResolver, user: UserResolver, tag: TagResolver } },
    { path: 'admin/auth', component: AuthComponent },
    { path: 'admin', children: [
      { path: 'articles/:id/delete', component: ArticleDeleteComponent
        , resolve: { model: ArticleResolver, user: UserResolver, tag: TagResolver }, canActivate: [ DeleteArticleGuard, AuthGuard] },
      { path: 'articles/:id/:mode', component: ArticleEditComponent
        , resolve: { model: ArticleResolver, user: UserResolver, tag: TagResolver }, canActivate: [ AuthGuard ] },
      { path: 'articles/:mode', component: ArticleEditComponent
        , resolve: { model: ArticleResolver, user: UserResolver, tag: TagResolver }, canActivate: [ AuthGuard ] },
      { path: 'articles', component: ArticleListComponent
        , resolve: { model: ArticleResolver, user: UserResolver, tag: TagResolver }, canActivate: [ AuthGuard ] },
      { path: 'users', component: UserListComponent
        , resolve: { user: UserResolver }, canActivate: [ AuthGuard ] },
      { path: '**', redirectTo: 'auth' }
    ] },
    { path: '**', redirectTo: 'blog' }
];

export const routing = RouterModule.forRoot(routes);
