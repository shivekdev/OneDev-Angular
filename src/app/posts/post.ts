export class Post {

  private _id: number = 0;
  private _userId: number = 0;
  private _title: string = "";
  private _content: string = "";

  constructor(id:number, userId:number,  title: string, content: string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.content = content;
  }

  get id(): number {
    return this._id;
  }
  set id(value: number ) {
    this._id = value;
  }

  get userId(): number {
      return this._userId;
  }
  set userId(value: number ) {
      this._userId = value;
  }

  get title(): string {
    return this._title;
  }
  set title(value: string ) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }
  set content(value: string ) {
    this._content = value;
  }
}
