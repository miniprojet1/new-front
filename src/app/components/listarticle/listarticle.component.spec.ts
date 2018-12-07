import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listarticlecomponent } from './listarticle.component';

describe('ListarticleComponent', () => {
  let component: Listarticlecomponent;
  let fixture: ComponentFixture<Listarticlecomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listarticlecomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listarticlecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
