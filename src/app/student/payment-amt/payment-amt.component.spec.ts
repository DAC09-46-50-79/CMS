import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAmtComponent } from './payment-amt.component';

describe('PaymentAmtComponent', () => {
  let component: PaymentAmtComponent;
  let fixture: ComponentFixture<PaymentAmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentAmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
