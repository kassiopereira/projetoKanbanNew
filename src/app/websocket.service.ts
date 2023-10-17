/* import { Injectable } from '@angular/core';
import * as Rx from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  private subject: Rx.Subject<MessageEvent> ;
  public connector(url): Rx.Subject<MessageEvent>{
    if(!this.subject ){
      this.subject = this.create(url);
      console.log(`Successfully cConect: "${url}`);
    }
    return this.subject

  }

  private create(url): Rx.Subject<MessageEvent>{
    let ws = new WebSocket(url);
    let observable = new Rx.Observable(obs:<Event>)

  }

} */
