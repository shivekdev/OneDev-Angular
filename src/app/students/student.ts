import { throwError } from "rxjs";

export class Student {
  private _id: number;
  private _name: string;
  private _grade: number;



constructor(id:number, name:string, grade:number) {
    this.id = id;
    this.name = name;
    this.grade = grade;
}


  get id(): number {
      return this._id;
  }
  set id(value: number ) {
      this._id = value;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string ) {
    this._name = value;
  }

  get grade(): number {
    return this._grade;
  }
  set grade(value: number ) {
    // if (value > 100) throw new Error("grade value is " +   value.toString() +  "  but 100 is the highest grade. ")
    this._grade = value;
  }

}


