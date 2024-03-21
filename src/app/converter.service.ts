import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  //pub/sub implementation
  subscriptions: Subscription[] = [];

  publish(topic: string, value: number): void {
    /** for each subscription in our array we simply call their given callback function
     * First we make sure this subscription is looking for the same topic that was subscribed
     */
    for(let sub of this.subscriptions) {
      if(sub.topic == topic) {
        sub.notify(value);
      }
    }
  } 

  subscribe(subscription: Subscription) {
    /** push the sub object into the subscribers array. We need a way to find and remove this
     * element later when the subscriber wants to unsubscribe. We store a Symbol (unique identifier) 
     * to the id property so that we can identify it uniquely later. We return a function which
     * uses this id to find and splice out that element when the subscriber wants to stop receiving
     * state changes.
     */ 
    let id = Symbol("identifier");//similar to UUID
    subscription.id = id;
    this.subscriptions.push(subscription);

    return ()=>{this.subscriptions.splice(this.subscriptions.findIndex((object: any)=>{object.id == id}), 1)};
    
  }



  celsiusTemp: number;
  fahrenheitTemp: number;

  constructor() {
    this.celsiusTemp = 0;
    this.fahrenheitTemp = 32;
   }

  cToF(celsiusTemp: number):number {
    //(C * 9/5) + 32
    return Math.floor((celsiusTemp * (9/5)) + 32)
  }

  fToC(fahrenheitTemp: number):number {
    //(F - 32) * (5/9)
    return Math.floor((fahrenheitTemp - 32) * (5/9))
  }
}

class Subscription {
  topic: string;
  notify: (value: number) => void;
  id?: Symbol;
  
  constructor(topic: string, notify: (value: number) => void) {
    this.topic = topic;
    this.notify = notify;
  }
}
