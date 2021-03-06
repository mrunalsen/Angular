import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resumeeditor',
  templateUrl: './resumeeditor.component.html',
  styleUrls: ['./resumeeditor.component.scss']
})
export class ResumeeditorComponent implements OnInit {

  resumeForm: FormGroup;
  

  constructor(private fb: FormBuilder, private resumeService:ResumeService) { 
    this.buildForm()
  }
  onSubmit(){
    this.resumeService.saveForm(this.resumeForm.value).subscribe(
      ()=> {console.log("success")
      }
    )
  }
  ngOnInit(): void {
  }

  buildForm() {
    this.resumeForm = this.fb.group({
    name: ['',Validators.required, Validators.minLength(3)],
    designation: ['', [Validators.required, Validators.email]],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', Validators.required],
    skills: this.fb.array([], Validators.required),
    experience: this.fb.array([], Validators.required),
    education: this.fb.array([], Validators.required)
    })
    
   }
   newSkills():FormGroup {
     return this.fb.group({
       skills:[''],
     })

   }

   
   addSkills() {
    this.skills.push(this.newSkills());
  }
  get skills() : FormArray {
    return this.resumeForm.get("skills") as FormArray
  }
  
  
  
  newExperience():FormGroup{
    return this.fb.group({
      place:[''],
      designation:[''],
      description:[''],
      year:[''],
    })
  }
  addExperience(){
    this.experience.push(this.newExperience());
  }
  get experience() : FormArray {
    return this.resumeForm.get("experience") as FormArray
  }
  addEducation() {
    this.education.push(this.newEducation());
  }
  get education(): FormArray{
    return this.resumeForm.get("education") as FormArray
  }
  newEducation():FormGroup {
    return this.fb.group({
      school:[''],
      degree:[''],
      score:['']
    })
}
get getvalue() {
  return  this.resumeForm.controls;
}
onReset() {
  this.resumeForm.reset()
}
}