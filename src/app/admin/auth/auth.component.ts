import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService} from "./auth.service";
import "rxjs/add/operator/catch";

@Component({
  moduleId: module.id,
  templateUrl: "auth.component.html"
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService) {}

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
}
