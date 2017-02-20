import { NgModule } from "@angular/core";
import { StaticContent } from "./staticContent.model";
import { Article } from "./article.model";
import { HttpModule } from "@angular/http";
import { ArticleRepository } from "./article.repository";
import { RestDataSource } from "./rest.datasource";
import { ArticleResolver } from "./article.resolver";

@NgModule({
  imports: [ HttpModule ],
  providers: [ StaticContent, RestDataSource, ArticleResolver, ArticleRepository ]
})
export class ModelModule {}
