import { Component } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from '../../service/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl:'./addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {

  student: Student = new Student();
  submitted = false;
  studentForm: any = FormGroup;


  constructor(private studentService: StudentService,private formBuilder:FormBuilder) { }


  saveStudent(): void {
    const data = {
      name: this.student.name,
      email: this.student.email,
      branch: this.student.branch
    };

    this.studentForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      branch: [null, [Validators.required]]
    });

    this.studentService.createStudent(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      }, error: (e) => console.log(e)
    });
  }

  newStudent(): void {
    this.submitted = false;
    this.student = {
      name:'',
      email:'',
      branch:''
    }

    }

}
