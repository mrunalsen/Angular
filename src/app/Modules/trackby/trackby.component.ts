import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.scss']
})
export class TrackbyComponent implements OnInit {
 users: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.users = [
      { name: 'Mehul', id: 1 },
      { name: 'Mrunal', id: 2 },
      { name: 'Nirali', id: 3 },
      { name: 'Om', id: 4 },
      { name: 'Chirag', id: 5 },
    ];
  }

  assignData(){
    this.users.push( 
      { name: 'Mehul', id: 1 },
      { name: 'Mrunal', id: 2 },
      { name: 'Nirali', id: 3 },
      { name: 'Om', id: 4 },
      { name: 'Chirag', id: 5 },

    //   { name: 'Ayushi', id: 1 },
    // { name: 'Shreya', id: 2 },
    // { name: 'Abhishekh', id: 3 },
    // { name: 'Viral', id: 4 },
    // { name: 'Tanmay', id: 5 },)

    // this.users = [
    //   { name: 'Ayushi', id: 1 },
    //   { name: 'Shreya', id: 2 },
    //   { name: 'Abhishekh', id: 3 },
    //   { name: 'Viral', id: 4 },
    //   { name: 'Tanmay', id: 5 },
    // ];
    )
  }

  trackById(index, user){
return user.id
  }
}
