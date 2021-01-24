import { Component,  AfterViewInit,  ViewChild} from '@angular/core';
import { Post } from './post';
import { PostsService } from './posts.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements AfterViewInit {
  dataSource
  displayedColumns: string[] = ['id', 'userId', 'title', 'content'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private postsService:PostsService) {}

  // ngOnInit(): void {
  //   this.postsService.getPosts().subscribe((posts:Post[]) =>  {
  //     console.log(posts);
  //     this.posts = posts;
  //   });
  // }

  ngAfterViewInit() {
    this.postsService.getPosts().subscribe((posts:Post[]) =>  {
      //console.log(posts);
      this.dataSource = new MatTableDataSource(posts);
    });
    if (this.sort) // check it is defined.{
      this.dataSource.sort = this.sort;
    }
}


