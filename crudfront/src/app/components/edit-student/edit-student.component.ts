import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {


  id?: number;
  student = new Student();
  message: any;

  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStudentById(this.route.snapshot.params['id'])
  }

  getStudentById(id: number) {
    this.studentService.getStudentById(id).subscribe({
      next: (data) => {
        this.student = data;
      }, error: (e) => console.error(e)
    })
  }

  update(): void {

    this.message = '';

    const data = {
      name: this.student.name,
      email: this.student.email,
      branch: this.student.branch
    };
    this.studentService.update(this.student.id,data).subscribe({next:(res)=>{
      console.log(res);
      this.router.navigate(['/view-student'])

      this.message = res.message ? res.message : 'This student was updated successfully!';
    }})
  }

}
