import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd: number[] = [];
  even: number[] = [];

  onStart(e: number){
    if(e%2==0){
      this.even.push(e);
    }else{
      this.odd.push(e);
    }
  }
}
