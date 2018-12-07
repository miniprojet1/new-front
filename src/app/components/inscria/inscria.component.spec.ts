import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriaComponent } from './inscria.component';

describe('InscriaComponent', () => {
  let component: InscriaComponent;
  let fixture: ComponentFixture<InscriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
