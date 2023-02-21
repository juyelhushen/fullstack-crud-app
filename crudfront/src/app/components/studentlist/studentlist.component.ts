import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {


  student?: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList() {
    this.studentService.getStudentList().subscribe((response: any) => {
      this.student = response;
    })
  }

  delete(id:any) {
    this.studentService.deleteStudent(id).subscribe({
      next: (res) => {
        console.log(res);
        this.student = this.student?.filter((s: any) => {
          return id != s.id;
        });
      }
    })
  }


}
