import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mvpData } from '../models/mvp-practice.model';
import { MvppracticeService } from '../services/mvppractice.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
  mvpDataList$: Observable<mvpData[]>
  constructor(private mvpService : MvppracticeService) { 
    this.mvpDataList$ = new Observable();
  }

  ngOnInit(): void {
    this.mvpDataList$ = this.mvpService.getmvpData();
  }
  delete(id: number){
    this.mvpService.mvpDelete(id).subscribe(() =>
    {alert("This Data has been Deleted")
  this.mvpDataList$ = this.mvpService.getmvpData();}
  );
  }
}
