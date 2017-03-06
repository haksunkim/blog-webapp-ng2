import { User } from "./user.model";

export class Role {
  constructor(
    public id?: number,
    public name?: string,
    public users?: User[]
  ) {}
}
