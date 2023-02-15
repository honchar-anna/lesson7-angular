/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogSeeComponent } from './blog-see.component';

describe('BlogSeeComponent', () => {
  let component: BlogSeeComponent;
  let fixture: ComponentFixture<BlogSeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
