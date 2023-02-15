/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdmibBlogComponent } from './admib-blog.component';

describe('AdmibBlogComponent', () => {
  let component: AdmibBlogComponent;
  let fixture: ComponentFixture<AdmibBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmibBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmibBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
