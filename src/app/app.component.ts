import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  index: string = '';
  currencycode: string = 'INR';
  vClass: boolean = false;

  constructor() {

  }
  ngOnInit(): void {

  }
  
  listData = [{
    id: 1,
    name: 'Mrunal Patel',
    email: 'mrunal@gmail.com',
    salary: 40000,
    currency: "INR"
  },
  {
    id: 2,
    name: 'Kevang Patel',
    email: 'kevang@gmail.com',
    salary: 50000,
    currency: "INR"
  },
  {
    id: 3,
    name: 'Henal Patel',
    email: 'henal@gmail.com',
    salary: 20000,
    currency: "INR"
  },
  {
    id: 4,
    name: 'Hardik Patel',
    email: 'hardik@gmail.com',
    salary: 40000,
    currency: "INR"
  },
  {
    id: 5,
    name: 'Nirali Tandel',
    email: 'nirali@gmail.com',
    salary: 70000,
    currency: "INR"
  },
  {
    id: 6,
    name: 'Ayushi Parmar',
    email: 'ayushi@gmail.com',
    salary: 40000,
    currency: "INR"
  },
  {
    id: 7,
    name: 'Revant Patel',
    email: 'revant@gmail.com',
    salary: 90000,
    currency: "INR"
  },
  {
    id: 8,
    name: 'Viral Patel',
    email: 'viral@gmail.com',
    salary: 60000,
    currency: "INR"
  },
  {
    id: 9,
    name: 'Bablu Pachisia',
    email: 'bablu@gmail.com',
    salary: 100000,
    currency: "INR"
  },
  {
    id: 10,
    name: 'Bhuvan Bam',
    email: 'bhuvan@gmail.com',
    salary: 40000,
    currency: "INR"
  },
  ];
  
  indexClick(i: number) {
    alert(this.listData[i].email + this.index);
  }
  trackByid(index: number, listData: any) {
    return listData.id;
  }
  
  
  
}

