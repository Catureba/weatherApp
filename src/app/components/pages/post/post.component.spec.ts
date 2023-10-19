import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  const httpStub: any = {
    get: () => of({}),
    post: () => of({}),
    put: () => of({}),
    delete: () => of({}),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      providers: [{
        provide: HttpClient,
        useValue: httpStub
      }],
      imports:[
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
