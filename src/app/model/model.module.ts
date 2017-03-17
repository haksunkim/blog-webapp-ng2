import { NgModule } from '@angular/core';
import { StaticContent } from './staticContent.model';
import { Article } from './article.model';
import { HttpModule } from '@angular/http';
import { ArticleRepository } from './article.repository';
import { UserRepository } from './user.repository';
import { RoleRepository } from './role.repository';
import { TagRepository } from './tag.repository';
import { RestDataSource } from './rest.datasource';
import { ArticleResolver } from './article.resolver';
import { UserResolver } from './user.resolver';
import { TagResolver } from './tag.resolver';
import { User } from './user.model';
import { Role } from './role.model';

@NgModule({
  imports: [ HttpModule ],
  providers: [ StaticContent, RestDataSource
    , ArticleResolver, UserResolver, TagResolver
    , ArticleRepository, RoleRepository, UserRepository, TagRepository ]
})
export class ModelModule {}
