"use strict";
var router_1 = require("@angular/router");
var blog_component_1 = require("./blog/blog.component");
var articleDetails_component_1 = require("./blog/articleDetails.component");
var article_resolver_1 = require("./model/article.resolver");
var routes = [
    { path: "blog/tag/:tag", component: blog_component_1.BlogComponent, resolve: { model: article_resolver_1.ArticleResolver } },
    { path: "blog/:id", component: articleDetails_component_1.ArticleDetailsComponent, resolve: { model: article_resolver_1.ArticleResolver } },
    { path: "blog", component: blog_component_1.BlogComponent },
    { path: "**", redirectTo: "blog" }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map