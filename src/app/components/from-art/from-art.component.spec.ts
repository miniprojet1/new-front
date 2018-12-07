import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromArtComponent } from './from-art.component';

describe('FromArtComponent', () => {
  let component: FromArtComponent;
  let fixture: ComponentFixture<FromArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
