import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url:string = "https://localhost:5001/v1.0/students/";

  constructor(private http:HttpClient) { }

  getStudents():Observable<any>{
    return this.http.get(this.url);
  }
}

