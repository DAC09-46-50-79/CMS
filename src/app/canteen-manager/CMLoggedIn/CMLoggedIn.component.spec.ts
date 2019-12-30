import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaddetailsComponent } from './uploaddetails.component';

describe('UploaddetailsComponent', () => {
  let component: UploaddetailsComponent;
  let fixture: ComponentFixture<UploaddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
