import { Injectable } from "@angular/core";
import { Role } from "./role.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class RoleRepository {
  private roles: Role[] = [];

  constructor(private datasource: RestDataSource) {
    this.datasource.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  public getRole(name: string) : Role {
    return this.roles.find(r => r.name == name);
  }
}
