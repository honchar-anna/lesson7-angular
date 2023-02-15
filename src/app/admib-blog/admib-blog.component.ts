import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog, BlogRespose } from '../blog.interface';

@Component({
  selector: 'app-admib-blog',
  templateUrl: './admib-blog.component.html',
  styleUrls: ['./admib-blog.component.css']
})
export class AdmibBlogComponent implements OnInit {
public titleInput!:string
public textInput!:string
public autorInput!:string
public img ='https://i.pinimg.com/564x/7e/e1/08/7ee108aaee16de5cd336d379031a6f6d.jpg'
public editStatus = false;
public editID!: number;

public adminBlog!:BlogRespose[]

  constructor(
    private blogSever:BlogService
  ) { }

  ngOnInit():void{
    this.getBlog()
  }
getBlog():void{
  this.blogSever.getAll().subscribe(data => {
    
    this.adminBlog = data
     })
    }
add(){
const newBlog = {

title: this.titleInput,
text:this.textInput,
autor:this.autorInput,
img:'https://i.pinimg.com/564x/7e/e1/08/7ee108aaee16de5cd336d379031a6f6d.jpg'
}
this.blogSever.create(newBlog).subscribe(()=>{
  this.getBlog()
  this.resetForm()
})
}
edit(blog:Blog):void{
  this.titleInput = blog.title
  this.textInput = blog.text
  this.autorInput = blog.autor
  this.img = blog.img
  this.editStatus = true;
  this.editID = blog.id;
}
save():void{
  const updatablog = {
    title: this.titleInput,
    text:this.textInput,
    autor:this.autorInput,
    img: this.img
  }
this.blogSever.update(updatablog , this.editID).subscribe(data=>{
 this.getBlog()
 this.resetForm()
  
})
}
delete(blog:Blog):void{
  if(confirm('Are you sure?')){
   this.blogSever.delete(blog.id).subscribe(data=>{
    this.getBlog()
   })
    }
  } 

resetForm(){
this.titleInput = ''
this.textInput= ''
this.autorInput= ''
}
}