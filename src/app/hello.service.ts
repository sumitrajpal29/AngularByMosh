import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  hello;
  constructor() {
    this.hello = ["h", "he", "hel", "hell", "hello"];
  }

  getName() {
    return this.hello;
  }
}
