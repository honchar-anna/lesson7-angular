import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.interface';
import { BlogRespose } from '../blog.interface';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-see',
  templateUrl: './blog-see.component.html',
  styleUrls: ['./blog-see.component.css']
})
export class BlogSeeComponent implements OnInit {
public blogsSee!:Array<BlogRespose>
  constructor(
    private blogServe:BlogService
  ) { }

  ngOnInit():void{
    this.getBlog()
  }
getBlog():void{
  this.blogServe.getAll().subscribe(data => {
    
    this.blogsSee = data
     })
    }
}
