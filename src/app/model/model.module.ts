import { NgModule } from "@angular/core";
import { StaticContent } from "./staticContent.model";
import { Article } from "./article.model";
import { HttpModule } from "@angular/http";
import { ArticleRepository } from "./article.repository";
import { RoleRepository } from "./role.repository";
import { RestDataSource } from "./rest.datasource";
import { ArticleResolver } from "./article.resolver";
import { User } from "./user.model";
import { Role } from "./role.model";

@NgModule({
  imports: [ HttpModule ],
  providers: [ StaticContent, RestDataSource, ArticleResolver, ArticleRepository, RoleRepository ]
})
export class ModelModule {}
