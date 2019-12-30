import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualPaymentComponent } from './actual-payment.component';

describe('ActualPaymentComponent', () => {
  let component: ActualPaymentComponent;
  let fixture: ComponentFixture<ActualPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
