import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmibBlogComponent } from './admib-blog/admib-blog.component';
import { BlogSeeComponent } from './blog-see/blog-see.component';

@NgModule({
   declarations: [
      AppComponent,
      AdmibBlogComponent,
      BlogSeeComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule,
   FormsModule,
   HttpClientModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
