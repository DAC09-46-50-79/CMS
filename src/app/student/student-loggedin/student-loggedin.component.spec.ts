import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoggedinComponent } from './student-loggedin.component';

describe('StudentLoggedinComponent', () => {
  let component: StudentLoggedinComponent;
  let fixture: ComponentFixture<StudentLoggedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLoggedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
