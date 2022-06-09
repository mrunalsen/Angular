import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formdetails } from '../model/progress-bar-model';
import { ProgressBarPresenterService } from '../progress-bar-presenter/progress-bar-presenter.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-progress-bar-presentation',
  templateUrl: './progress-bar-presentation.component.html',
  styleUrls: ['./progress-bar-presentation.component.scss']
})
export class ProgressBarPresentationComponent implements OnInit {
  public progressForm : FormGroup;
  private progressFormData : formdetails

  @Output() public submitData: EventEmitter<formdetails>;

  constructor(
    private formpresenter: ProgressBarPresenterService, 
    private fb: FormBuilder,
    private location: Location
    ) { 
    this.submitData = new EventEmitter;
  }

  ngOnInit(): void {
 this.progressForm = this.fb.group(
   {
    username: ['', Validators.required],
    email : ['',Validators.required],
    password : ['',Validators.required],
   }
 )
  }
 onSubmit(){
   this.formpresenter.onSubmit(this.progressForm)
 }
 onPrevious() {
  this.location.back();
}
}
