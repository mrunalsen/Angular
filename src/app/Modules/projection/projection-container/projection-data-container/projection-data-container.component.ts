import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection-data-container',
  templateUrl: './projection-data-container.component.html',
  styleUrls: ['./projection-data-container.component.scss']
})
export class ProjectionDataContainerComponent implements OnInit {

  @Input() products : any = []

  constructor() { }

  ngOnInit(): void {
  }

}
