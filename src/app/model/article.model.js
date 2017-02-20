"use strict";
var Article = (function () {
    function Article(id, title, createdBy, modifiedBy, createdAt, modifiedAt, content, tags) {
        this.id = id;
        this.title = title;
        this.createdBy = createdBy;
        this.modifiedBy = modifiedBy;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.content = content;
        this.tags = tags;
    }
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.model.js.map