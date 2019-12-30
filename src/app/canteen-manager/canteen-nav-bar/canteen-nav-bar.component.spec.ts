import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenNavBarComponent } from './canteen-nav-bar.component';

describe('CanteenNavBarComponent', () => {
  let component: CanteenNavBarComponent;
  let fixture: ComponentFixture<CanteenNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanteenNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
