import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-presenter',
  templateUrl: './bar-presenter.component.html',
  styleUrls: ['./bar-presenter.component.scss']
})
export class BarPresenterComponent implements OnInit { barwidth: number;
  show: boolean;
  buttonshow: boolean;
  tab1 : boolean
  tab2 : boolean
  tab3 : boolean
  tab4 : boolean
  constructor() { }

  ngOnInit(): void {
  }

  next1() {
    this.tab1 = true
    this.tab2 = true;
    this.tab3 = false;
    this.tab4 = false;
    this.barwidth = 33.33;
  }
  next2() {
    this.tab1 = true
    this.tab2 = false
    this.tab3 = true;
    this.barwidth = 66.66;
  }
  next3() {
    this.tab1 = true
    this.tab2 = false
    this.tab3 = false
    this.tab4 = true;
    this.barwidth = 100;
  }
  previous2() {
    this.tab1 = false;
    this.tab2 = false;
    this.tab3 = false;
    this.tab4 = false;
    this.barwidth = 0;
  }
  previous3() {
    this.tab1 = true;
    this.tab2 = true;
    this.tab3 = false;
    this.tab4 = false;
    this.barwidth = 33.33;
  }
  previous4() {
    this.tab1 = true;
    this.tab2 = false;
    this.tab3 = true;
    this.tab4 = false;
    this.barwidth = 66.66;
  }

}
