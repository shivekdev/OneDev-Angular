import { Component, OnInit } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public person: Person | null = null;

  public divSize: number = 50;

  constructor() { }

  ngOnInit(): void {
     this.person = new Person();
     this.person.id = 100;
     this.person.name = "moshe";
  }

  // getName(){
  //   console.log("i am here");
  //   return this.person.name;
  // }

  btnOnClick(): void {
    this.person.name = this.person? this.person.name + " *": " *";
    this.divSize = this.divSize + 20;
  }

  txtPersonOnInput(event:any ) {
    //console.log(event.target.value);
    this.person.name = event.target.value;
  }

  clickMe(event){
     console.log("clickMe");
  }

}
