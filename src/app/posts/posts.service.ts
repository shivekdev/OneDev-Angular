import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import {map} from 'rxjs/operators';
import {Post} from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

 constructor(private http:HttpClient) { }


  sayHello(name: string): string{
    return "hello " + name;
  }

  getPosts():Observable<Array<Post>>{
     return this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts")
      .pipe(map(resp => {
        let posts = new Array<Post>();
           resp.forEach(item => {
             posts.push(new Post(item["id"], item["userId"], item["title"], item["body"]))
           })
        return posts;
      }));

  }
}
