import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection-presentation',
  templateUrl: './projection-presentation.component.html',
  styleUrls: ['./projection-presentation.component.scss']
  
})
export class ProjectionPresentationComponent implements OnInit {
 
    public salesProducts : any = [
        {id: 1, name : 'Cards', price: '1500'},
        {id: 2, name : 'Keys', price: '15'},
        {id: 3, name : 'mugs', price: '500'},
        {id: 4, name : 'chai', price: '150'},
      ]
    constructor() { }

  ngOnInit(): void {
  }


}
