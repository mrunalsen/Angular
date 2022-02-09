import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resumeeditor',
  templateUrl: './resumeeditor.component.html',
  styleUrls: ['./resumeeditor.component.scss']
})
export class ResumeeditorComponent implements OnInit {

  resumeForm!: FormGroup;
  

  constructor(private fb: FormBuilder, private resumeService:ResumeService) { 
    this.buildForm()
  }
  onSubmit(){
    this.resumeService.saveForm(this.resumeForm.value).subscribe(
      (data:any)=> {console.log("success", data);
      }
    )
  }
  ngOnInit(): void {
  }

  buildForm() {
    this.resumeForm = this.fb.group({
    name: [''],
    designation: [''],
    email: [''],
    contact: [''],
    skills: this.fb.array([]),
    experience: this.fb.array([]),
    education: this.fb.array([])
    })
    
   }
   newSkills():FormGroup {
     return this.fb.group({
       school:[''],
       degree:[''],
       score:['']
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
  // addExperience(){
  //   this.experience.push(this.newExperience());
  // }
  
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

}
