import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { EditComponent } from './edit.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

xdescribe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  const activatedRouteMock = {
    snapshot: {
      paramMap: new Map([['edit', 'df46b29c-2cbe-459c-8227-5d2f3d123004']]),
    },
  };

  const httpStub: any = {
    get: () => of({}),
    post: () => of({}),
    put: () => of({}),
    delete: () => of({}),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent],
      providers: [
        {
          provide: HttpClient,
          useValue: httpStub,
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock
        },
      ],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
