import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-student', pathMatch: 'full' },
  { path: 'view-student', component: StudentlistComponent },
  { path: 'add-student', component: AddstudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'delete-student', component: DeleteStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
