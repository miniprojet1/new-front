import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurFromComponent } from './fournisseur-from.component';

describe('FournisseurFromComponent', () => {
  let component: FournisseurFromComponent;
  let fixture: ComponentFixture<FournisseurFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
