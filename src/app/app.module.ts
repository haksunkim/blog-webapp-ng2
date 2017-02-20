import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { ModelModule } from "./model/model.module";
import { RouterModule } from "@angular/router";
import { BlogModule } from "./blog/blog.module";
import { AdminModule } from "./admin/admin.module";

import { AppComponent }  from './app.component';
import { HeaderComponent } from "./layout/header.component";
import { FooterComponent } from "./layout/footer.component";
import { routing } from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, ModelModule, routing, BlogModule, AdminModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent ],
  providers:    [ {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap:    [ AppComponent, HeaderComponent, FooterComponent ]
})
export class AppModule { }
