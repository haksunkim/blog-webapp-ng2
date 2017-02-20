import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from "./model/model.module";
import { RouterModule } from "@angular/router";
import { BlogModule } from "./blog/blog.module";

import { AppComponent }  from './app.component';
import { HeaderComponent } from "./layout/header.component";
import { SidebarComponent } from "./layout/sidebar.component";
import { FooterComponent } from "./layout/footer.component";
import { routing } from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, ModelModule, routing, BlogModule ],
  declarations: [ AppComponent, HeaderComponent, SidebarComponent, FooterComponent ],
  bootstrap:    [ AppComponent, HeaderComponent, SidebarComponent, FooterComponent ]
})
export class AppModule { }
