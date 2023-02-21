import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';


@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    StudentlistComponent,
    EditStudentComponent,
    DeleteStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
