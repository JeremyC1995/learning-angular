import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() starting: EventEmitter<number> = new EventEmitter();
  constructor() { }
  isStarted: boolean = false;
  ref;
  ngOnInit() {
  }

  onStart() {
    this.isStarted = true;
    let counter = 0;
    this.ref = setInterval(()=>{
      counter++;
      this.starting.emit(counter);
    },1000);
  }
  onStop() {
    this.isStarted = false;
    clearInterval(this.ref);
  }
}
