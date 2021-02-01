import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import {Router} from '@angular/router';
import {StudentsService} from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student: any;
  students: Array<Student>;
  newStudent: any;
  minGrade: number;

  constructor(private router:Router,  private studentsService:StudentsService) {
    this.students = new Array<any>();
  }

  ngOnInit(): void {
    //this.students = new Array<Student>(
    //   {id: 101, name:"alfred" , grade: 80},
    //   {id: 102, name:"bedford" , grade: 85},
    //   {id: 103, name:"anatholy" , grade: 90}
    // );
    // this.newStudent = new Student(0,"", 0);
    // this.students.push(new Student(101, "alfred", 80));
    // this.students.push(new Student(102, "bedford", 85));
    // this.students.push(new Student(103, "anatholy",90));



     this.studentsService.getStudents().subscribe(resp =>{
       this.students = resp;
       this.student = this.students[0];
     })


  }

  goDetail(studentId:number){
   // todo...
   console.log(studentId);
   var path = "student-detail/" + studentId.toString();
   // do not use this ....
   //window.location.href = path;
    this.router.navigateByUrl(path);
   }


  addStudent(){
    this.students.push(new Student(this.newStudent.id, this.newStudent.name, this.newStudent.grade));
  }

  // gradeChanged(e:any){
  //   try{
  //     this.newStudent.grade = e.target.value;
  //   }catch(e){
  //     console.log(e);
  //     // we stop here !!
  //   }
  // }

}
