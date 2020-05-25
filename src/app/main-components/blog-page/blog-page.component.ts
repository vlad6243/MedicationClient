import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../shared/interfaces';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  blogs$: Observable<Blog[]>

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogs$ = this.blogService.getBlogs()
  }

}
