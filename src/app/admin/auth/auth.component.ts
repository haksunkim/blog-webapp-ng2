import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService} from "./auth.service";
import { User } from "../../model/user.model";
import { Role } from "../../model/role.model";
import { RoleRepository } from "../../model/role.repository";
import "rxjs/add/operator/catch";

@Component({
  moduleId: module.id,
  templateUrl: "auth.component.html"
})
export class AuthComponent {
  public username: string;
  public password: string;
  public email: string;
  public passwordConfirmation: string;
  public errorMessage: string;
  public forRegister: boolean = false;

  constructor(private router: Router, private auth: AuthService, private roleRepository: RoleRepository) {}

  doAction(form: NgForm) {
    if (!this.forRegister) {
      // if it is not for register, send it to authenticate user
      this.authenticate(form);
    } else {
      // it is for register. send request to register
      this.register(form);
    }
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username, this.password).subscribe(response => {
        if (response) {
          this.router.navigateByUrl("/admin/articles");
        } else {
          this.errorMessage = "Authentication Failed";
        }
      }, (err) => {
        if (err.status === 401) {
          this.errorMessage = "Authentication Failed";
        }
      });
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }

  register(form: NgForm) {
    if (form.valid) {
      let user: User = new User();
      user.username = this.username;
      user.password = this.password;
      user.email = this.email;
      user.roles = null;
      this.auth.register(user).subscribe(data => {
        if (data.username != "") {
          this.authenticate(form);
        } else {
          this.errorMessage = "Registration Failed";
        }
      }, (err) => {
        if (err.status === 401) {
          this.errorMessage = "Registration Failed";
        }
      });
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}
