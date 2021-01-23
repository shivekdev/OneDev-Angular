import { Component, Input, OnInit } from '@angular/core';
import {Student} from '../student';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student;
  students: Array<Student>;
  @Input() studentID: number | null | undefined;
  //studentID: number = 102;

  constructor(private activatedRoute:ActivatedRoute) {
    this.students = new Array<Student>();
  }

  // constructor() {
  //   this.students = new Array<Student>();
  // }


// handlerMoshe(p:any){
//   console.log(p);
// }

  ngOnInit(): void {
    // temp init.....
    this.students.push(new Student(101, "alfred", 80));
    this.students.push(new Student(102, "bedford", 85));
    this.students.push(new Student(103, "anatholy",90));

    // get the selected Student
    this.activatedRoute.params.subscribe(p => {
      //console.log(p);
       if (p.studentID){
         this.studentID = p.studentID;
      }
    });

     // get parameter from input....
     if (! isNaN(this.studentID)){
      this.student = this.students.find(s => s.id == this.studentID);
     }


  }

}
