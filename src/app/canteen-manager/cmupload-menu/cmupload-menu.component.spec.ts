import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMUploadMenuComponent } from './cmupload-menu.component';

describe('CMUploadMenuComponent', () => {
  let component: CMUploadMenuComponent;
  let fixture: ComponentFixture<CMUploadMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMUploadMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMUploadMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
