import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css'],
})
export class AllStudentComponent implements OnInit {
  students: Student[] = [];
  displayedColumn: string[] = ['id', 'name', 'email', 'branch', 'actions'];

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllStudent();
    this.deleteStudent(this.route.snapshot.params['id']);
  }

  getAllStudent() {
    this.studentService.getStudentList().subscribe(
      (res) => {
        this.students = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe({
      next: (res) => {
        this.students = this.students.filter((s) => {
          return id != s.id;
        });
      },
    });
  }
}
