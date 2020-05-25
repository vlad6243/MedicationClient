import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}

    getBlogs(): Observable<Blog[]> {
        return this.http.get<Blog[]>('/api/blog/all')
    }

    createBlog(blog: Blog): Observable<Blog>{
        return this.http.post<Blog>('/api/blog/add',blog)
    }

    delete(id: string): Observable<Blog> {
      return this.http.delete<Blog>(`/api/blog/${id}`)
    }

}
