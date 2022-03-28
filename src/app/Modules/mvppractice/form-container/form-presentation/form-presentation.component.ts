import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { mvpData } from '../../models/mvp-practice.model';
import { FormPresenterService } from '../form-preseter/form-presenter.service';

@Component({
  selector: 'app-form-presentation',
  templateUrl: './form-presentation.component.html',
  styleUrls: ['./form-presentation.component.scss']
})
export class FormPresentationComponent implements OnInit {

  mvpForm : FormGroup;
  private _formData : mvpData;
  mode: string;

  @Input() public set editmvpData(value : mvpData) {
    if(value){
      this.mode = "Edit User";
      this.mvpForm.patchValue(value);
      this._formData = value
    }
  }
  @Output() public submitData: EventEmitter<mvpData>;
  @Output() public editData: EventEmitter<mvpData>;

  constructor(private formpresenter: FormPresenterService,
    private fb : FormBuilder) {
      this.mode = "Add User";
      this.submitData= new EventEmitter;
      this.editData= new EventEmitter;
     }

  ngOnInit(): void {
    this.mvpForm = this.fb.group(
      {
        name: [''],
        age: [''],
        gender: [''],
      }
    )
    this.formpresenter.mvpform$.subscribe((res: mvpData)=>
    {
      if (this.mode === "Add User"){
        this.submitData.emit(res)
      }
      else{
        this.editData.emit(res)
      }
    })
  }

  public onSubmit(){
    this.formpresenter.onsubmit(this.mvpForm)
  }
}
