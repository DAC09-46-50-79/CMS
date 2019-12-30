import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenManagerComponent } from './canteen-manager.component';

describe('CanteenManagerComponent', () => {
  let component: CanteenManagerComponent;
  let fixture: ComponentFixture<CanteenManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanteenManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
