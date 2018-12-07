import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPaymentComponent } from './from-payment.component';

describe('FromPaymentComponent', () => {
  let component: FromPaymentComponent;
  let fixture: ComponentFixture<FromPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
