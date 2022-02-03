import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  submitted!: boolean;

  constructor(private fb: FormBuilder) { }

  registrationform=this.fb.group({
    firstName:['',[Validators.required, Validators.minLength(3)]],
    lastName:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    contact:['',Validators .required],
    gender:[''],
    date:[''],
    department:['html'],
  });

  ngOnInit(): void {
    console.log(this.registrationform);
    
  }
  onSubmit(){
    console.log(this.registrationform);
    
  }
  
  get getvalue(){
    return this.registrationform['controls']
  }

  saveData(){
    if(this.registrationform.dirty){
      this.submitted=true;
      if(this.registrationform.invalid){
        return;
      }
    }
  }
}
