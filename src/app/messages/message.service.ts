import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Message } from "./message.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MessageService {
  private subject = new Subject<Message>();

  reportMessage(msg: Message) {
    this.subject.next(msg);
  }

  get messages(): Observable<Message> {
    return this.subject;
  }
}
