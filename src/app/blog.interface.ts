export interface Blog{
id:number,
autor:string,
title:string,
text:string
img:string
}

export interface BlogRequest{
   autor:string,
   title:string,
   text:string,
   img:string 
}

export interface BlogRespose extends BlogRequest{
   id:number

   }
   