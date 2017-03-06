import { Injectable } from "@angular/core";
import { Role } from "./role.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class RoleRepository {
  private roles: Role[] = [];

  constructor(private datasource: RestDataSource) {
    return this.datasource.getRoles().subscribe(data => {
      this.roles = data;
    })
  }

  public getRole(name: string) : Role {
    return this.datasource.getRole(name).subscribe(data => {return data});
  }
}
