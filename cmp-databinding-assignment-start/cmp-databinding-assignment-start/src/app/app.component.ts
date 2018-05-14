import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd: number[];
  even: number[];

  onStart(e){
    console.log(e);
  }
}
