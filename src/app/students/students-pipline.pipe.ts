import { Pipe, PipeTransform } from '@angular/core';
import {Student} from '../students/student';


@Pipe({
  name: 'studentsPipline',
  pure: false
})
export class StudentsPiplinePipe implements PipeTransform {

  transform(students: Array<Student>, minGrade:number): Array<Student> {
    //if (isNaN(minGrade)) throw new Error("filter StudentsPipline should pass a number as minGrade. minGrade = " + minGrade);
    //  return students;
    return students.filter(s => {return s.grade > (isNaN(minGrade)? 0 : minGrade)});
  }
}
