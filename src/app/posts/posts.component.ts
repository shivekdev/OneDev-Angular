import { Component, OnInit } from '@angular/core';
import { Post } from './post';
//import {HttpClient} from '@angular/common/http';
import { PostsService } from './posts.service';
//import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts : Post[];
  greet: string;

  constructor(private postsService:PostsService) {}

  ngOnInit(): void {

    this.greet = this.postsService.sayHello("moshe");


    // // promis
    // x.then(success, error, notify);

    // // observer
    // x.subscribe(success, error, complete);


    //  this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(resp =>{
    //   console.log(resp);
    //   this.posts = resp;
    // })

    //this.posts = this.postsService.getPosts();

    this.postsService.getPosts().subscribe((posts:Post[]) =>  {
      console.log(posts);
      this.posts = posts;
    });

  }

}
