import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";

@Injectable()
export class DeleteArticleGuard {
  constructor(private messages: MessageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {
    let subject = new Subject<boolean>();

    let responses: [[string, (string) => void]] = [
      ["Yes", () => {
        subject.next(true);
        subject.complete();
      }],
      ["No", () => {
        this.router.navigateByUrl(this.router.url);
        subject.next(false);
        subject.complete();
      }]
    ];
    this.messages.reportMessage(new Message("Delete this article?", true, responses));

    return subject;
  }
}
