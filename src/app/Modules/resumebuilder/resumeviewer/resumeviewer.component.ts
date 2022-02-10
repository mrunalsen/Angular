import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resumeviewer',
  templateUrl: './resumeviewer.component.html',
  styleUrls: ['./resumeviewer.component.scss']
})
export class ResumeviewerComponent implements OnInit {
  retriveData!:any
  id!:number
  constructor(private resumeService:ResumeService) { }

  ngOnInit(): void {
    this.getData()
  }
getData(){
  this.resumeService.getForm().subscribe(
    (data)=> {
      this.retriveData = data
      console.log(this.retriveData)
      
    }
  )
}
}
