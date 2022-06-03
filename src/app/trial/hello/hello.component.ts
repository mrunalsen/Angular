import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  barwidth: number;
  show: boolean;
  buttonshow: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  next(){
    this.show=true;
    this.barwidth=20;
    this.buttonshow=false;
  }

  previous(){
    this.show=false;
    this.barwidth=10;
  }

}
