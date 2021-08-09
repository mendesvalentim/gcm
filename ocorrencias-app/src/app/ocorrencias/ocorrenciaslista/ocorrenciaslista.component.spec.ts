import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcorrenciaslistaComponent } from './ocorrenciaslista.component';

describe('OcorrenciaslistaComponent', () => {
  let component: OcorrenciaslistaComponent;
  let fixture: ComponentFixture<OcorrenciaslistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcorrenciaslistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcorrenciaslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
