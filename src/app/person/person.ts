export class Person {
  private _id: number = 0;
  private _name: string = "";


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

  getFullName(): string{
    return this._id + " - " + this._name;
  }

}


