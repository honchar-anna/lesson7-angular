import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmibBlogComponent } from './admib-blog/admib-blog.component';
import { BlogSeeComponent } from './blog-see/blog-see.component';
const routes: Routes = [
  {path:'', component:AdmibBlogComponent},
  {path:'blog', component:BlogSeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
