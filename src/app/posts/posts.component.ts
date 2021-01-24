import { Component, OnInit } from '@angular/core';
import { Post } from './post';
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

    this.postsService.getPosts().subscribe((posts:Post[]) =>  {
      console.log(posts);
      this.posts = posts;
    });

  }

}
