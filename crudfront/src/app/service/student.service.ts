import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl =  environment.apiUrl;

  constructor(private httpClient:HttpClient) { }


  getStudentList(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/student/get");

  }

  getStudentById(id:number):Observable<Object> {
    return this.httpClient.get(this.baseUrl+"/student/get/"+id);
  }

  createStudent(student:object):Observable<Object> {
    return this.httpClient.post(this.baseUrl+"/student/save",student);
  }

  deleteStudent(id:number):Observable<any> {
    return this.httpClient.delete(this.baseUrl+"/student/delete/"+id);
  }

  update(id:any,data:any):Observable<any> {
    return this.httpClient.put(this.baseUrl+"/student/update/"+id,data);
  }


}
