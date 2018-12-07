import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPanierComponent } from './lister-panier.component';

describe('ListerPanierComponent', () => {
  let component: ListerPanierComponent;
  let fixture: ComponentFixture<ListerPanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerPanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
