export class Article {
  constructor(
    public id?: number,
    public title?: string,
    public createdBy?: number,
    public modifiedBy?: number,
    public createdAt?: string,
    public modifiedAt?: string,
    public deletedAt?: string,
    public deletedBy?: number,
    public content?: string,
    public tags?: string[]
  ) {}
}
