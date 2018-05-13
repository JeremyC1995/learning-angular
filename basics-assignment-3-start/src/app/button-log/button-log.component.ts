import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-log',
  templateUrl: './button-log.component.html',
  styleUrls: ['./button-log.component.css']
})
export class ButtonLogComponent implements OnInit {
  showDetail = false;
  btnClickCount = 0;
  btnClickArray = [];
  constructor() { }
  handleOnClick() {
    this.showDetail=!this.showDetail;
    this.btnClickArray.push(++this.btnClickCount);
  }
  ngOnInit() {
  }

}
