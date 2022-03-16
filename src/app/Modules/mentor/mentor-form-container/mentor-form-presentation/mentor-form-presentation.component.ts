import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Mentor, MentorForm } from '../../mentor.model';
import { Location } from '@angular/common';
import { MentorService } from '../../mentor.service';
import { MentorFormPresenterService } from '../mentor-form-presenter/mentor-form-presenter.service';


@Component({
  selector: 'app-mentor-form-presentation',
  templateUrl: './mentor-form-presentation.component.html',
  styleUrls: ['./mentor-form-presentation.component.scss']
})
export class MentorFormPresentationComponent implements OnInit {

  @Input() public set mentorsData(value: Mentor | null) {
    if (value) {
      console.log(value)
      this.formTitle ='Edit Mentor';
      console.log(MentorForm);

      this.mentorForm.patchValue(value);
      this._mentorData = value
    }
  }
  public get mentorData() : Mentor | null {
    return this._mentorData;
  }
  private _mentorData!: Mentor

  @Output() public add: EventEmitter<MentorForm>
  @Output() public edit: EventEmitter<MentorForm>

  public mentorForm: FormGroup;
  public formTitle: string;

  constructor(
    private mentorFormpresenter: MentorFormPresenterService,
    private location: Location
  ) {
    this.mentorForm = this.mentorFormpresenter.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = 'Add Mentor'
   }

  ngOnInit(): void {
    this.mentorFormpresenter.mentorFormData$.subscribe((res: MentorForm) => {
      this.formTitle === 'Add Mentor' ? this.add.emit(res) : this.edit.emit(res); 
    })
  }

  onSubmit() {
    this.mentorFormpresenter.onSubmit(this.mentorForm)
  }
  onCancel() {
    this.location.back();
  }
}
