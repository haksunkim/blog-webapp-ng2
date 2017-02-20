import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { ModelModule } from "./model/model.module";
import { RouterModule } from "@angular/router";
import { BlogModule } from "./blog/blog.module";
import { AdminModule } from "./admin/admin.module";
import { MessageModule } from "./messages/message.module";
import { MessageService } from "./messages/message.service";

import { AppComponent }  from './app.component';
import { HeaderComponent } from "./layout/header.component";
import { FooterComponent } from "./layout/footer.component";
import { routing } from "./app.routing";

import { DeleteArticleGuard } from "./guard/deleteArticle.guard";

@NgModule({
  imports:      [ BrowserModule, ModelModule, routing, BlogModule, AdminModule, MessageModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent ],
  providers:    [ {provide: LocationStrategy, useClass: HashLocationStrategy}, DeleteArticleGuard, MessageService ],
  bootstrap:    [ AppComponent, HeaderComponent, FooterComponent ]
})
export class AppModule { }
