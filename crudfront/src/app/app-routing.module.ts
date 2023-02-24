import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-student', pathMatch: 'full' },
  { path: 'all-student', component: AllStudentComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
