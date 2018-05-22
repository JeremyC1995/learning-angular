import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter:number = 0;
  constructor() { }

  UserModeOnSwitch() {
    this.counter++;
    console.log(this.counter);
  }
}
