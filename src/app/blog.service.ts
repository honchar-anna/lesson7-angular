import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Blog, BlogRequest, BlogRespose } from './blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

private url = environment.BACKEND_URL
private api = {blogs:`${this.url}/blogs`}
constructor(
  private http:HttpClient
) { }
getAll():Observable<BlogRespose[]>{
  return this.http.get<BlogRespose[]>(this.api.blogs)
}
create(blog:BlogRequest):Observable<BlogRespose>{
return this.http.post<BlogRespose>(this.api.blogs, blog)
}
update(blog:BlogRequest, id:number):Observable<BlogRespose>{
  return this.http.patch<BlogRespose>(`${this.api.blogs}/${id}`,blog)
}
delete(id:number):Observable<void>{
 return this.http.delete<void>(`${this.api.blogs}/${id}`)
}

}
