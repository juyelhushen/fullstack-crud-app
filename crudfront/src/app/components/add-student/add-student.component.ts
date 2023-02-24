import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit  {

  studentForm:any = FormGroup;

  constructor(private studentService:StudentService,
    private router:Router,
    private formBuilder:FormBuilder) {}


  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name:[null,[Validators.required,Validators.maxLength(20)]],
      email:[null,[Validators.required,Validators.email]],
      branch:[null,[Validators.required]]
    });
  }

  createStudent() {
    var studentData  = this.studentForm.value;
    var data = {
      name: studentData.name,
      email: studentData.email,
      branch: studentData.branch
    }
    this.studentService.createStudent(data).subscribe({
      next:(rez)=>{
        this.router.navigate(['/all-student']);
      }
    });
  }

}
