import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  students: Student = {
    id: 0,
    name:'',
    email:'',
    branch:''
  };


  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getbyId(this.route.snapshot.params['id']);
  }

  getbyId(id: number) {
    this.studentService.getStudentById(id).subscribe({
      next: (res) => {
        this.students = res;
      },
    });
  }

  update(): void {
    const studentData = {
      id: this.students.id,
      name: this.students.name,
      email: this.students.email,
      branch:this.students.branch
    };

    this.studentService
      .update(studentData.id, studentData)
      .subscribe((data) => {
        this.router.navigate(['/all-student']);
      });
  }
}
